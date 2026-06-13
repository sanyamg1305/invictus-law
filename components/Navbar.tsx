"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const practiceAreas = [
  { label: "Corporate Law", slug: "corporate-law" },
  { label: "Litigation & Dispute Resolution", slug: "litigation" },
  { label: "Intellectual Property", slug: "intellectual-property" },
  { label: "Employment Law", slug: "employment-law" },
  { label: "Real Estate & Property Law", slug: "real-estate" },
  { label: "Taxation & Compliance", slug: "taxation" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [practiceOpen, setPracticeOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      className={`sticky top-0 z-50 bg-[#02334E] transition-shadow duration-300 ${scrolled ? "shadow-2xl shadow-black/30" : "shadow-md shadow-black/20"}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex flex-col leading-tight">
            <span
              className="text-white font-black tracking-widest text-xl italic"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              INVICTUS
            </span>
            <span className="text-[#FEDDDD]/60 text-[9px] tracking-[0.35em] font-medium uppercase">
              Law Practice
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link href="/" className="text-white/70 hover:text-white text-sm font-medium transition-colors">
              Home
            </Link>

            {/* Practice Areas Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setPracticeOpen(true)}
              onMouseLeave={() => setPracticeOpen(false)}
            >
              <button className="flex items-center gap-1 text-white/70 hover:text-white text-sm font-medium transition-colors">
                Practice Areas <ChevronDown size={14} />
              </button>
              {practiceOpen && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-white shadow-2xl rounded-lg overflow-hidden z-50 border border-gray-100">
                  {practiceAreas.map((area) => (
                    <Link
                      key={area.slug}
                      href={`/practice-areas/${area.slug}`}
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-[#02334E] hover:text-white border-b border-gray-50 last:border-0 transition-colors font-medium"
                    >
                      {area.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/about" className="text-white/70 hover:text-white text-sm font-medium transition-colors">
              About Us
            </Link>
            <Link href="/team" className="text-white/70 hover:text-white text-sm font-medium transition-colors">
              Our Team
            </Link>
            <Link href="/careers" className="text-white/70 hover:text-white text-sm font-medium transition-colors">
              Careers
            </Link>
            <Link href="/contact" className="text-white/70 hover:text-white text-sm font-medium transition-colors">
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <Link
            href="/contact"
            className="hidden lg:inline-flex items-center px-5 py-2.5 bg-white text-[#02334E] text-sm font-semibold rounded-lg hover:bg-[#FEDDDD] transition-colors"
          >
            Free Consultation
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-white p-1"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-[#02334E] border-t border-white/10 pb-4">
          <nav className="flex flex-col px-4 pt-2 gap-1">
            <Link href="/" onClick={() => setOpen(false)} className="text-white/70 hover:text-white py-2 text-sm font-medium">Home</Link>
            <div className="py-2">
              <p className="text-[#FEDDDD] text-xs font-semibold uppercase tracking-widest mb-1">Practice Areas</p>
              {practiceAreas.map((area) => (
                <Link
                  key={area.slug}
                  href={`/practice-areas/${area.slug}`}
                  onClick={() => setOpen(false)}
                  className="block text-white/60 hover:text-white py-1.5 text-sm pl-2"
                >
                  {area.label}
                </Link>
              ))}
            </div>
            <Link href="/about" onClick={() => setOpen(false)} className="text-white/70 hover:text-white py-2 text-sm font-medium">About Us</Link>
            <Link href="/team" onClick={() => setOpen(false)} className="text-white/70 hover:text-white py-2 text-sm font-medium">Our Team</Link>
            <Link href="/careers" onClick={() => setOpen(false)} className="text-white/70 hover:text-white py-2 text-sm font-medium">Careers</Link>
            <Link href="/contact" onClick={() => setOpen(false)} className="text-white/70 hover:text-white py-2 text-sm font-medium">Contact</Link>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-block text-center px-5 py-2.5 bg-white text-[#02334E] text-sm font-semibold rounded-lg hover:bg-[#FEDDDD] transition-colors"
            >
              Free Consultation
            </Link>
          </nav>
        </div>
      )}
    </motion.header>
  );
}
