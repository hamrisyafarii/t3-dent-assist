import { FileText, Lock } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

const PolicyContent = () => {
  return (
    <section className="container mx-auto px-6 py-8">
      <div className="bg-card border-border/50 text-muted-foreground animate-in fade-in slide-in-from-bottom-8 mx-auto max-w-4xl space-y-8 rounded-4xl border p-8 text-lg leading-relaxed shadow-2xl delay-300 duration-700 md:p-12">
        <div className="space-y-4">
          <div className="text-foreground mb-4 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/10 text-blue-500">
              <HugeiconsIcon icon={FileText} size={20} />
            </div>
            <h2 className="font-sans text-2xl font-bold tracking-tight">
              Pengumpulan Data
            </h2>
          </div>
          <p>
            Saat Anda menggunakan DentAssist, kami mengumpulkan riwayat
            percakapan Anda (teks keluhan dan respons AI) semata-mata untuk
            memberikan konteks pada sesi konsultasi Anda. Data ini kami perlukan
            agar asisten AI dapat memberikan alur tanya-jawab yang
            berkesinambungan.
          </p>
          <p>
            Jika Anda membuat akun, kami mengumpulkan alamat email dan nama Anda
            untuk keperluan otentikasi serta agar Anda dapat menyimpan dan
            mengakses kembali riwayat percakapan Anda di perangkat manapun.
          </p>
        </div>

        <div className="bg-border/50 h-px w-full" />

        <div className="space-y-4">
          <div className="text-foreground mb-4 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500/10 text-green-500">
              <HugeiconsIcon size={20} icon={Lock} />
            </div>
            <h2 className="font-sans text-2xl font-bold tracking-tight">
              Keamanan Data
            </h2>
          </div>
          <p>
            Percakapan medis adalah hal yang sensitif. Kami menempatkan data
            pada database modern berbasis cloud yang sudah dilengkapi dengan
            proteksi standar industri. Kata sandi pengguna tidak pernah kami
            simpan dalam bentuk *plain text*, melainkan di-hash dengan kuat
            menggunakan standar autentikasi terkini.
          </p>
          <p>
            Tidak ada data pribadi Anda maupun log percakapan Anda yang kami
            jual kepada pihak ketiga, seperti pihak pengiklan maupun asuransi.
          </p>
        </div>

        <div className="bg-border/50 h-px w-full" />

        <div className="space-y-4">
          <h2 className="text-foreground font-sans text-2xl font-bold tracking-tight">
            Batasan Layanan AI
          </h2>
          <p>
            Perlu dicatat bahwa percakapan yang terjadi ditangani melalui model
            pihak ketiga (contohnya OpenAI atau API Groq pada *backend*).
            Walaupun kami membatasi agar prompt sistem tidak membagikan
            identitas yang tidak perlu, data teks yang Anda kirim akan diproses
            oleh mesin AI. Oleh karena itu, hindari memberikan informasi
            personal yang tidak terkait secara langsung dengan kondisi keluhan
            Anda, seperti nomor jaminan kesehatan atau NIK.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PolicyContent;
