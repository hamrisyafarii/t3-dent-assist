import {
  ArrowBigRight,
  MessageSquare,
  Sparkles,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";
import { Button } from "~/components/ui/button";

const HeroSection = () => {
  return (
    <section className="container mx-auto flex flex-col items-center px-6 py-20 pb-32 text-center md:py-32">
      <div className="bg-primary/10 border-primary/20 text-primary animate-in fade-in slide-in-from-bottom-4 mb-8 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium duration-700">
        <HugeiconsIcon icon={Sparkles} size={16} />
        <span>Versi 1.0 Telah Rilis</span>
      </div>

      <h1 className="animate-in fade-in slide-in-from-bottom-5 from-foreground to-foreground/70 mb-6 max-w-4xl bg-linear-to-br bg-clip-text text-4xl leading-tight font-extrabold tracking-tight text-transparent delay-150 duration-700 sm:text-5xl md:text-7xl">
        Asisten Kesehatan Gigi Pribadi Anda
      </h1>

      <p className="text-muted-foreground animate-in fade-in slide-in-from-bottom-6 mb-10 max-w-2xl text-lg delay-300 duration-700 md:text-xl">
        Konsultasikan keluhan seputar gigi dan mulut secara instan. DentAssist
        menggunakan AI canggih untuk memberikan wawasan awal yang akurat dan
        edukatif.
      </p>

      <div className="animate-in fade-in slide-in-from-bottom-7 flex w-full flex-col items-center gap-4 delay-500 duration-700 sm:w-auto sm:flex-row">
        <Link href="/chat" className="w-full sm:w-auto">
          <Button
            size="lg"
            className="shadow-primary/25 hover:shadow-primary/40 h-14 w-full rounded-full px-8 text-base shadow-xl transition-all hover:scale-105 sm:w-auto"
          >
            Mulai Konsultasi Gratis{" "}
            <HugeiconsIcon icon={ArrowBigRight} size={18} />
          </Button>
        </Link>
      </div>

      {/* Floating UI Mockup */}
      <div className="animate-in fade-in slide-in-from-bottom-10 relative mx-auto mt-20 w-full max-w-5xl delay-700 duration-1000 perspective-[1000px] md:mt-28">
        <div className="from-background absolute inset-0 top-1/2 z-10 bg-linear-to-t via-transparent to-transparent" />
        <div className="bg-card/40 relative transform overflow-hidden rounded-2xl border border-white/10 shadow-2xl backdrop-blur-3xl transition-transform duration-500 hover:rotate-x-2 md:rounded-4xl">
          <div className="border-border/50 bg-muted/40 flex h-12 items-center gap-2 border-b px-4">
            <div className="h-3 w-3 rounded-full bg-red-500/80" />
            <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
            <div className="h-3 w-3 rounded-full bg-green-500/80" />
          </div>
          <div className="bg-muted/10 relative flex aspect-4/3 items-center justify-center overflow-hidden p-4 sm:p-8 md:aspect-21/9">
            {/* Decorative Elements inside Mockup */}
            <div className="bg-background border-border absolute top-[15%] left-[10%] hidden w-64 -rotate-6 transform animate-pulse rounded-2xl border p-4 shadow-xl transition-transform hover:rotate-0 sm:block">
              <div className="mb-2 flex items-center gap-3">
                <div className="bg-primary/20 text-primary flex h-8 w-8 items-center justify-center rounded-full">
                  <HugeiconsIcon icon={Sparkles} size={14} />
                </div>
                <div className="bg-muted h-2 w-24 rounded-full" />
              </div>
              <div className="mt-4 space-y-2">
                <div className="bg-muted h-2 w-full rounded-full" />
                <div className="bg-muted h-2 w-4/5 rounded-full" />
                <div className="bg-muted h-2 w-2/3 rounded-full" />
              </div>
            </div>

            <div className="bg-primary text-primary-foreground shadow-primary/20 animate-in fade-in zoom-in absolute right-[10%] bottom-[20%] z-10 hidden w-72 rotate-3 transform rounded-2xl p-4 shadow-2xl transition-transform delay-1000 duration-1000 hover:rotate-0 sm:flex">
              <div className="mb-2 flex w-full items-center justify-end gap-3">
                <div className="bg-primary-foreground/30 h-2 w-20 rounded-full" />
                <div className="bg-primary-foreground/20 flex h-8 w-8 shrink-0 items-center justify-center rounded-full">
                  <HugeiconsIcon size={14} icon={MessageSquare} />
                </div>
              </div>
              <div className="mt-4 flex w-full flex-col items-end space-y-2">
                <div className="bg-primary-foreground/30 h-2 w-full rounded-full" />
                <div className="bg-primary-foreground/30 h-2 w-3/4 rounded-full" />
              </div>
            </div>

            {/* Mobile View Placeholder */}
            <div className="flex h-full w-full flex-col items-center justify-center space-y-4 opacity-50 sm:hidden">
              <HugeiconsIcon size={48} icon={MessageSquare} />
              <div className="bg-muted h-2 w-32 rounded-full" />
              <div className="bg-muted h-2 w-24 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
