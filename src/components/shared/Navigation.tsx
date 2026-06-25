"use client";

import { ArrowBigRight, Sparkles } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "~/components/ui/button";
import { authClient } from "~/server/better-auth/client";

const Navigation = (props?: { type: string }) => {
  const router = useRouter();
  const user = authClient.useSession();

  const handleLogout = async () => {
    try {
      await authClient.signOut();
      router.push("/sign-in");
    } catch (error) {
      console.error("Logout Error:", error);
    }
  };

  return (
    <div className="mx-auto flex w-full items-center justify-between px-6 py-6">
      <div className="flex items-center gap-3">
        <div className="from-primary to-primary/60 text-primary-foreground shadow-primary/20 flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br shadow-lg">
          <HugeiconsIcon icon={Sparkles} />
        </div>
        <Link href="/" className="text-xl font-bold tracking-tight">
          DentAssist
        </Link>
      </div>
      <div className="flex items-center gap-4">
        {props?.type === "home" ? (
          <>
            <div className="hidden items-center gap-4 md:flex">
              {user.data?.session.token ? (
                <Button variant={"outline"} onClick={handleLogout}>
                  Logout
                </Button>
              ) : (
                <Button variant={"outline"}>
                  <Link href="/sign-in">Sign In</Link>
                </Button>
              )}
            </div>
            <Button
              className="shadow-primary/20 hover:shadow-primary/40 rounded-full px-6 font-medium shadow-lg transition-all hover:-translate-y-0.5"
              onClick={() => router.push("/chat")}
            >
              Mulai Konsultasi
              <HugeiconsIcon icon={ArrowBigRight} />
            </Button>
          </>
        ) : null}

        {props?.type === "about" ? (
          <div className="items-center gap-4">
            <Button
              variant={"outline"}
              onClick={() => router.push("/feedback")}
            >
              Saran
            </Button>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Navigation;
