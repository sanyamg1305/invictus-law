import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyConsultCTA from "@/components/StickyConsultCTA";
import PageTransition from "@/components/PageTransition";

export const metadata: Metadata = {
  title: "Invictus Law Practice | Expert Legal Counsel",
  description:
    "Invictus Law Practice delivers expert legal counsel across Corporate Law, Litigation, Intellectual Property, Employment Law, Real Estate, and Taxation.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col antialiased">
        <Navbar />
        <main className="flex-1"><PageTransition>{children}</PageTransition></main>
        <Footer />
        <StickyConsultCTA />
      </body>
    </html>
  );
}
