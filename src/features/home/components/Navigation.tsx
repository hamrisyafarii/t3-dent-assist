import { ArrowBigRight, Sparkles } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";
import { Button } from "~/components/ui/button";


const Navigation = () => {
  return (
    <nav className="z-10 container mx-auto flex items-center justify-between px-6 py-6">
      <div className="flex items-center gap-3">
        <div className="from-primary to-primary/60 text-primary-foreground shadow-primary/20 flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br shadow-lg">
          <HugeiconsIcon icon={Sparkles} />
        </div>
        <span className="text-xl font-bold tracking-tight">DentAssist</span>
      </div>
      <div className="flex items-center gap-4">
        <Link href="/chat">
          <Button
            variant="ghost"
            className="hover:bg-muted/50 hidden rounded-full px-6 font-medium sm:inline-flex"
          >
            Masuk
          </Button>
        </Link>
        <Link href="/chat">
          <Button className="shadow-primary/20 hover:shadow-primary/40 rounded-full px-6 font-medium shadow-lg transition-all hover:-translate-y-0.5">
            Mulai Konsultasi
            <HugeiconsIcon icon={ArrowBigRight} />
          </Button>
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
