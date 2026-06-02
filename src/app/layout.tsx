import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FinTale - Level Up Keuanganmu",
  description:
    "Aplikasi pencatat keuangan offline-first dengan elemen RPG. Atur budget dan selesaikan quest finansialmu!",
  openGraph: {
    title: "FinTale - RPG Financial Tracker",
    description: "Aplikasi pencatat keuangan offline-first dengan elemen RPG.",
    url: "https://fintale.app",
    siteName: "FinTale",
    images: [
      {
        url: "https://images.unsplash.com/photo-1642790106117-e829e14a795f?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "FinTale App Preview",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
