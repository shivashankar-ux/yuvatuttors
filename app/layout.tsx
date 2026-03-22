import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Yuva Home Tutors | Navi Mumbai's Premium Learning Platform",
    template: "%s | Yuva Home Tutors",
  },
  description:
    "Personalized home, group & online tutoring with verified expert tutors in Navi Mumbai. 500+ tutors, 2000+ students, 95% success rate. Book a FREE demo class today.",
  keywords: [
    "home tutors navi mumbai", "home tuition nerul", "cbse tutor navi mumbai",
    "icse home tutor", "maths tutor navi mumbai", "yuva home tutors",
  ],
  authors: [{ name: "Yuva Home Tutors" }],
  robots: "index, follow",
  openGraph: {
    title: "Yuva Home Tutors — Navi Mumbai's Premium Learning Platform",
    description: "500+ verified tutors · 2000+ students · 95% success rate",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${dmSans.variable} ${cormorant.variable}`}>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
