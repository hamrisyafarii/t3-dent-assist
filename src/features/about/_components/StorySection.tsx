import { Heart, Shield, Stethoscope } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

const StorySection = () => {
  return (
    <section className="container mx-auto mb-20 px-6 py-12">
      <div className="bg-card border-border/50 animate-in fade-in slide-in-from-bottom-8 mx-auto max-w-4xl overflow-hidden rounded-4xl border shadow-2xl delay-300 duration-700">
        <div className="text-muted-foreground space-y-6 p-8 text-lg leading-relaxed md:p-12">
          <h2 className="text-foreground mb-4 font-sans text-3xl font-bold tracking-tight">
            Misi Kami
          </h2>
          <p>
            Akses informasi mengenai kesehatan gigi seringkali terbatas oleh
            ketersediaan dokter atau hambatan biaya. Banyak masyarakat yang
            mengabaikan gejala-gejala kecil yang berujung pada komplikasi yang
            lebih serius.
          </p>
          <p>
            <strong>DentAssist</strong> hadir untuk memecahkan masalah tersebut.
            Sebagai asisten kecerdasan buatan (AI) yang dirancang khusus untuk
            memahami permasalahan dental, kami menyediakan platform konsultasi
            awal yang akurat dan terpercaya. Anda bisa menanyakan keluhan gusi
            berdarah, gigi ngilu, hingga perawatan ortodontik selama 24 jam
            penuh tanpa hambatan waktu dan tempat.
          </p>
          <p>
            Meski bukan pengganti penuh diagnosis dokter secara klinis, kami
            berupaya memberikan edukasi pencegahan penyakit mulut secara modern
            dan canggih, agar Anda bisa mengambil tindakan tepat lebih dini.
          </p>
        </div>

        <div className="border-border/50 divide-border/50 bg-muted/20 grid gap-0 divide-y border-t sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          <div className="hover:bg-muted/40 flex flex-col items-center p-8 text-center transition-colors">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/10 text-blue-500">
              <HugeiconsIcon icon={Stethoscope} size={24} />
            </div>
            <h3 className="text-foreground mb-2 font-semibold">
              Informasi Akurat
            </h3>
            <p className="text-sm">
              Didukung oleh model AI termutakhir dengan analisis basis medis.
            </p>
          </div>
          <div className="hover:bg-muted/40 flex flex-col items-center p-8 text-center transition-colors">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-500/10 text-green-500">
              <HugeiconsIcon icon={Shield} size={24} />
            </div>
            <h3 className="text-foreground mb-2 font-semibold">
              Aman Digunakan
            </h3>
            <p className="text-sm">
              Privasi cerita dan data identitas dijamin keamanan dan
              kerahasiaannya.
            </p>
          </div>
          <div className="hover:bg-muted/40 flex flex-col items-center p-8 text-center transition-colors">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-500/10 text-purple-500">
              <HugeiconsIcon icon={Heart} size={24} />
            </div>
            <h3 className="text-foreground mb-2 font-semibold">
              Gratis Wawasan
            </h3>
            <p className="text-sm">
              Tersedia kuota bebas harian untuk pengunjung berkat limit AI tamu.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
