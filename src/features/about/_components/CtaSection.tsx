import { ArrowBigRight } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";
import { Button } from "~/components/ui/button";

const CtaSection = () => {
  return (
    <section className="container mx-auto mb-20 px-6 py-12 text-center">
      <h2 className="mb-8 text-3xl font-bold tracking-tight sm:text-4xl">
        Coba Tanyakan Keluhan Anda Sekarang!
      </h2>
      <Link href="/chat">
        <Button
          size="lg"
          className="shadow-primary/25 hover:shadow-primary/40 h-16 rounded-full px-10 text-lg font-bold shadow-xl transition-all hover:scale-105"
        >
          Mulai Konsultasi{" "}
          <HugeiconsIcon icon={ArrowBigRight} size={20} className="ml-3" />
        </Button>
      </Link>
    </section>
  );
};

export default CtaSection;
