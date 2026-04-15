import {
  GithubIcon,
  Instagram,
  Linkedin,
  Sparkles,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-border/60 bg-muted/20 border-t">
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-6 py-10 md:flex-row">
        <div className="flex items-center gap-3">
          <div className="bg-primary/20 text-primary flex h-10 w-10 items-center justify-center rounded-xl">
            <HugeiconsIcon icon={Sparkles} size={20} />
          </div>
          <span className="text-xl font-bold tracking-tight">DentAssist</span>
        </div>

        <div className="text-muted-foreground flex items-center gap-8 text-sm font-medium">
          <Link href="/chat" className="hover:text-primary transition-colors">
            Konsultasi
          </Link>
          <Link href="/about" className="hover:text-primary transition-colors">
            Tentang Kami
          </Link>
          <Link
            href="/privacy"
            className="hover:text-primary transition-colors"
          >
            Privasi
          </Link>
        </div>

        <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-6">
          <div className="flex items-center gap-4">
            <Link
              href="https://www.instagram.com/hmriie?igsh=ZTFyenNmZGVoZWUx"
              target="_blank"
              aria-label="Instagram"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <HugeiconsIcon icon={Instagram} size={20} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/hamrisyafarii/"
              target="_blank"
              aria-label="LinkedIn"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <HugeiconsIcon icon={Linkedin} size={20} />
            </Link>
            <Link
              href="https://github.com/hamrisyafarii"
              target="_blank"
              aria-label="GitHub"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <HugeiconsIcon icon={GithubIcon} size={20} />
            </Link>
          </div>
          <p className="text-muted-foreground text-center text-sm sm:text-right">
            © {new Date().getFullYear()} DentAssist. by{" "}
            <Link
              href="https://github.com/hamrisyafarii"
              className="hover:text-primary transition-colors"
            >
              Hamri-Syafari
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
