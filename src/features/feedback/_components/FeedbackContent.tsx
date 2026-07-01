"use client";

import { useEffect, useRef, useState } from "react";
import { MessageEdit01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { toast } from "sonner";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { authClient } from "~/server/better-auth/client";
import { api } from "~/trpc/react";

const FeedbackContent = () => {
  const session = authClient.useSession();
  const formRef = useRef<HTMLFormElement>(null);
  const [name, setName] = useState("");

  useEffect(() => {
    if (session?.data?.user.name) {
      setName(session.data.user.name);
    }
  }, [session?.data?.user.name]);

  const { mutate: createFeedback, isPending } =
    api.feedback.createFeedback.useMutation({
      onSuccess: () => {
        toast.success("Feedback berhasil dikirim");
        formRef.current?.reset();
        setName(session?.data?.user.name ?? "");
      },
      onError: () => {
        toast.error("Gagal mengirim feedback");
      },
    });

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const message = formData.get("message") as string;

    if (!name?.trim() || !message?.trim()) {
      toast.error("Nama dan pesan harus diisi");
      return;
    }

    createFeedback({ name, message });
  };

  return (
    <section className="container mx-auto px-6 py-8">
      <div className="bg-card border-border/50 text-muted-foreground animate-in fade-in slide-in-from-bottom-8 mx-auto max-w-3xl space-y-8 rounded-4xl border p-8 text-lg leading-relaxed shadow-2xl delay-300 duration-700 md:p-12">
        <div className="space-y-4">
          <div className="text-foreground mb-4 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/10 text-blue-500">
              <HugeiconsIcon icon={MessageEdit01Icon} size={20} />
            </div>
            <h2 className="font-sans text-2xl font-bold tracking-tight">
              Kirim Umpan Balik
            </h2>
          </div>
          <p>
            Bagaimana pengalaman Anda menggunakan DentAssist? Masukan Anda
            sangat berarti bagi kami untuk terus menyempurnakan fitur dan
            layanan yang kami berikan.
          </p>
        </div>

        <form ref={formRef} className="space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <label
              htmlFor="name"
              className="text-foreground text-sm font-medium"
            >
              Nama
            </label>
            <Input
              id="name"
              name="name"
              placeholder="Masukkan nama Anda"
              disabled={!!session?.data}
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-transparent"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="message"
              className="text-foreground text-sm font-medium"
            >
              Pesan / Saran
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Tulis pesan atau saran Anda di sini..."
              rows={5}
              className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex w-full rounded-md border px-3 py-2 text-sm focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
            />
          </div>

          <Button
            type="submit"
            className="w-full sm:w-auto"
            disabled={isPending || !session?.data}
          >
            {isPending
              ? "Mengirim..."
              : session?.data
                ? "Kirim Umpan Balik"
                : "Login untuk mengirim umpan balik"}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default FeedbackContent;
