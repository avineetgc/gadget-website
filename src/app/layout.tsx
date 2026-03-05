import type { Metadata } from "next";
import localFont from "next/font/local";

import "@/styles/tokens.css";
import "@/styles/base.css";
import "@/styles/components.css";
import "@/styles/globals.css";
import "@/styles/animations.css";

import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

const outfit = localFont({
  src: "../../public/fonts/Outfit-VariableFont_wght.ttf",
  variable: "--font-outfit",
  display: "swap",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gadgetcapital.com"),
  title: {
    default: "Gadget Capital Management | Institutional Digital Asset Investment",
    template: "%s | Gadget Capital Management",
  },
  description:
    "Institutional-grade digital asset management. Research-driven DeFi strategies with rigorous risk management for accredited investors.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Gadget Capital Management",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={outfit.variable}>
      <body>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
