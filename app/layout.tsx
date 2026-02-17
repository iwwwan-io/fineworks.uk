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
  description: "Premium bespoke construction and renovation company in the UK. Residential, Commercial, and Project Management.",
  icons: {
    icon: '/favicon.ico',
  },
};

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
        {children}
      </body>
    </html>
  );
}
