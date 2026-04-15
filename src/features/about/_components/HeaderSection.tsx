import { Heart } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

const HeaderSection = () => {
  return (
    <section className="container mx-auto flex flex-col items-center px-6 py-20 text-center">
      <div className="bg-primary/10 border-primary/20 text-primary animate-in fade-in slide-in-from-bottom-4 mb-8 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium duration-700">
        <HugeiconsIcon icon={Heart} size={16} />
        <span>Tentang DentAssist</span>
      </div>

      <h1 className="animate-in fade-in slide-in-from-bottom-5 from-foreground to-foreground/70 mb-6 max-w-4xl bg-linear-to-br bg-clip-text text-4xl leading-tight font-extrabold tracking-tight text-transparent delay-150 duration-700 sm:text-5xl md:text-6xl">
        Menghadirkan Perawatan Gigi ke Dalam Genggaman Anda.
      </h1>

      <p className="text-muted-foreground animate-in fade-in slide-in-from-bottom-6 mb-10 max-w-2xl text-lg delay-300 duration-700 md:text-xl">
        Kami percaya bahwa edukasi dan wawasan awal sangat krusial dalam dunia
        medis, terutama untuk kesehatan mulut.
      </p>
    </section>
  );
};

export default HeaderSection;
