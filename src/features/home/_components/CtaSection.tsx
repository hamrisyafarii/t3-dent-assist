import { ArrowBigRight } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";
import { Button } from "~/components/ui/button";

const CtaSection = () => {
  return (
    <section className="container mx-auto mb-10 px-6 py-24">
      <div className="from-primary to-primary/80 text-primary-foreground shadow-primary/20 relative mx-auto max-w-6xl overflow-hidden rounded-[3rem] bg-linear-to-br px-6 py-20 text-center shadow-2xl md:py-32">
        <div className="pointer-events-none absolute top-0 right-0 h-125 w-125 translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-3xl" />

        <div className="relative z-10 flex flex-col items-center">
          <h2 className="mb-6 max-w-3xl text-3xl leading-tight font-extrabold tracking-tight sm:text-4xl md:text-6xl">
            Siap Memperbaiki Senyum Anda Hari Ini?
          </h2>
          <p className="text-primary-foreground/80 mx-auto mb-12 max-w-xl text-lg leading-relaxed font-medium md:text-xl">
            Mulai chat dengan DentAssist sekarang. Tanpa ribet pendaftaran
            panjang, langsung tanyakan keluhan Anda.
          </p>
          <Link href="/chat">
            <Button
              size="lg"
              variant="secondary"
              className="text-primary h-16 rounded-full px-10 text-lg font-bold shadow-xl shadow-black/10 transition-transform duration-300 hover:scale-105"
            >
              Mulai Chat Sekarang{" "}
              <HugeiconsIcon icon={ArrowBigRight} size={20} className="ml-3" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
