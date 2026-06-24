import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { BackToTop } from "@/components/layout/BackToTop";
import { GlowEffect } from "@/components/ui/GlowEffect";

const outfit = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Cel N | Portfolio",
    template: "%s | Cel N",
  },
  description:
    "Mahasiswa Informatika Universitas Pembangunan Jaya. Fokus pada Web Development, Cyber Security, Machine Learning, dan Data Analytics.",
  keywords: [
    "Cel N",
    "Portfolio",
    "Web Development",
    "Cyber Security",
    "Machine Learning",
    "Data Analytics",
    "Next.js",
    "React",
  ],
  authors: [{ name: "Cel N" }],
  openGraph: {
    title: "Cel N | Portfolio",
    description:
      "Mahasiswa Informatika Universitas Pembangunan Jaya. Fokus pada Web Development, Cyber Security, Machine Learning, dan Data Analytics.",
    type: "website",
    locale: "id_ID",
    siteName: "Cel N Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cel N | Portfolio",
    description:
      "Mahasiswa Informatika Universitas Pembangunan Jaya. Fokus pada Web Development, Cyber Security, Machine Learning, dan Data Analytics.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-screen flex flex-col bg-background text-foreground">
        <GlowEffect />
        <ScrollProgress />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
