import Footer from "~/components/shared/Footer";
import Navigation from "~/components/shared/Navigation";
import HeaderSection from "../_components/HeaderSection";
import StorySection from "../_components/StorySection";
import CtaSection from "../_components/CtaSection";

const AboutPage = () => {
  return (
    <div className="bg-background text-foreground selection:bg-primary/30 flex min-h-screen flex-col overflow-hidden font-sans">
      {/* Background Effects */}
      <div className="from-primary/10 via-background to-background absolute inset-0 z-[-1] bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))]" />
      <div className="bg-primary/30 pointer-events-none absolute top-0 left-1/2 h-125 w-full max-w-250 -translate-x-1/2 rounded-full opacity-20 blur-[120px]" />

      <Navigation />

      <main className="z-10 flex w-full flex-1 flex-col">
        <HeaderSection />

        <StorySection />

        <CtaSection />
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;
