import "~/styles/globals.css";
import { Geist, Figtree } from "next/font/google";
import { TRPCReactProvider } from "~/trpc/react";
import { cn } from "~/lib/utils";
import type { Metadata } from "next";
import { ThemeProvider } from "~/components/ui/theme-provider";

const figtree = Figtree({ subsets: ["latin"], variable: "--font-sans" });

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

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning={true}
      className={cn(geist.variable, "font-sans", figtree.variable)}
    >
      <body>
        <TRPCReactProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
