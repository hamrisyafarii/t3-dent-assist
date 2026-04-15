import { Activity, ShieldCheck, Stethoscope } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

const FeaturesSection = () => {
  return (
    <section className="border-border/50 container mx-auto border-t px-6 py-24">
      <div className="mb-16 text-center md:mb-24">
        <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-5xl">
          Kenapa Harus DentAssist?
        </h2>
        <p className="text-muted-foreground mx-auto max-w-2xl text-lg leading-relaxed md:text-xl">
          Kami merancang sistem ini untuk memprioritaskan akurasi wawasan, dan
          memberikan akses instan kapan saja.
        </p>
      </div>

      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
        {[
          {
            icon: <HugeiconsIcon icon={Activity} size={28} />, //text-blue
            bg: "bg-blue-500/10",
            border: "group-hover:border-blue-500/30",
            title: "Respon Cepat 24/7",
            desc: "Dapatkan jawaban dari keluhan gigi Anda dalam hitungan detik, tanpa harus menunggu jadwal dokter.",
          },
          {
            icon: <HugeiconsIcon icon={Stethoscope} size={28} />, //text-primary
            bg: "bg-primary/10",
            border: "group-hover:border-primary/30",
            title: "Wawasan Medis",
            desc: "Didukung oleh AI yang dilatih dengan pengetahuan spesifik seputar kesehatan mulut dan gigi yang komprehensif.",
          },
          {
            icon: <HugeiconsIcon size={28} icon={ShieldCheck} />, // text-green-500
            bg: "bg-green-500/10",
            border: "group-hover:border-green-500/30",
            title: "Aman & Privat",
            desc: "Setiap sesi konsultasi dilindungi keamanannya, menjaga privasi percakapan dan keluhan pribadi Anda.",
          },
        ].map((feature, i) => (
          <div
            key={i}
            className={`bg-card border-border group flex flex-col rounded-4xl border p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${feature.border}`}
          >
            <div
              className={`h-16 w-16 rounded-2xl ${feature.bg} mb-8 flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}
            >
              {feature.icon}
            </div>
            <h3 className="mb-4 text-2xl font-semibold tracking-tight">
              {feature.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {feature.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
