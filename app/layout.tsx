import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google"; // Elegant serif + Clean sans-serif
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  variable: "--font-serif",
  weight: ["400", "500", "600", "700"] 
});

export const metadata: Metadata = {
  title: "Fineworks.uk - Bespoke Construction & Renovation",
  description: "Premium bespoke construction and renovation company in the UK. Residential Construction, Extensions & Renovations, Commercial Fit-Out, and Project Management.",
  icons: {
    icon: '/favicon.ico',
  },
};

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { CookieConsent } from "@/components/layout/cookie-consent";
import { BackToTop } from "@/components/layout/back-to-top";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        inter.variable,
        playfair.variable
      )}>
        <Header />
        {children}
        <Footer />
        <CookieConsent />
        <BackToTop />
      </body>
    </html>
  );
}
