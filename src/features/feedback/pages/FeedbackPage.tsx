import Footer from "~/components/shared/Footer";
import Navigation from "~/components/shared/Navigation";
import HeaderSection from "../_components/HeaderSection";
import FeedbackContent from "../_components/FeedbackContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Umpan Balik | DentAssist",
  description:
    "Berikan masukan, saran, dan pengalaman Anda menggunakan DentAssist untuk membantu kami terus berkembang.",
};

const FeedbackPage = () => {
  return (
    <div className="bg-background text-foreground selection:bg-primary/30 flex min-h-screen flex-col overflow-hidden font-sans">
      {/* Background Effects */}
      <div className="from-primary/10 via-background to-background absolute inset-0 z-[-1] bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))]" />
      <div className="bg-primary/30 pointer-events-none absolute top-0 left-1/2 h-125 w-full max-w-250 -translate-x-1/2 rounded-full opacity-20 blur-[120px]" />

      <Navigation type="home" />

      <main className="z-10 flex w-full flex-1 flex-col pb-20">
        <HeaderSection />

        <FeedbackContent />
      </main>

      <Footer />
    </div>
  );
};

export default FeedbackPage;
