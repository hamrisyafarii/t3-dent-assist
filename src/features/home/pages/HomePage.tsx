import type { Metadata } from "next";
import Navigation from "../components/Navigation";
import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import CtaSection from "../components/CtaSection";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "DentAssist | Asisten Kesehatan Gigi AI",
  description:
    "Konsultasikan keluhan seputar gigi dan mulut secara instan. DentAssist menggunakan AI canggih untuk memberikan wawasan awal yang akurat dan edukatif.",
  keywords: [
    "kesehatan gigi",
    "dokter gigi AI",
    "konsultasi gigi online",
    "sakit gigi",
    "dentassist",
  ],
  openGraph: {
    title: "DentAssist | Asisten Kesehatan Gigi Pribadi Anda",
    description:
      "Konsultasikan keluhan gigi Anda 24/7 dengan AI terlatih khusus medis.",
    type: "website",
    locale: "id_ID",
  },
};

export default async function Home() {
  return (
    <div className="bg-background text-foreground selection:bg-primary/30 flex min-h-screen flex-col overflow-hidden font-sans">
      {/* Background Effects */}
      <div className="from-primary/10 via-background to-background absolute inset-0 z-[-1] bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))]" />
      <div className="bg-primary/30 pointer-events-none absolute top-0 left-1/2 h-125 w-full max-w-250 -translate-x-1/2 rounded-full opacity-20 blur-[120px]" />

      <Navigation />

      <main className="z-10 flex w-full flex-1 flex-col">
        <HeroSection />

        <FeaturesSection />

        <CtaSection />
      </main>

      <Footer />
    </div>
  );
}
