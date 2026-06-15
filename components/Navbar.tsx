"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, Scale } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
      className={`sticky top-0 z-50 bg-white border-b transition-all duration-300 ${
        scrolled ? "border-gray-200 shadow-sm" : "border-transparent"
      }`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-lg bg-[#02334E] flex items-center justify-center shrink-0">
              <Scale size={17} className="text-[#FEDDDD]" />
            </div>
            <div className="flex flex-col leading-none">
              <span
                className="text-[#02334E] font-black tracking-wider text-lg italic"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                INVICTUS
              </span>
              <span className="text-[#02334E]/40 text-[8px] tracking-[0.3em] font-semibold uppercase">Law Practice</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7">
            <Link href="/" className="text-gray-500 hover:text-[#02334E] text-sm font-medium transition-colors">Home</Link>
            <div
              className="relative"
              onMouseEnter={() => setPracticeOpen(true)}
              onMouseLeave={() => setPracticeOpen(false)}
            >
              <button className="flex items-center gap-1 text-gray-500 hover:text-[#02334E] text-sm font-medium transition-colors">
                Practice Areas <ChevronDown size={13} className={`transition-transform ${practiceOpen ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {practiceOpen && (
                  <motion.div
                    className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-50"
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.15 }}
                  >
                    {practiceAreas.map((area) => (
                      <Link
                        key={area.slug}
                        href={`/practice-areas/${area.slug}`}
                        className="block px-4 py-2.5 text-sm text-gray-600 hover:bg-[#02334E] hover:text-white border-b border-gray-50 last:border-0 transition-colors font-medium"
                      >
                        {area.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <Link href="/about" className="text-gray-500 hover:text-[#02334E] text-sm font-medium transition-colors">About</Link>
            <Link href="/team" className="text-gray-500 hover:text-[#02334E] text-sm font-medium transition-colors">Our Team</Link>
            <Link href="/careers" className="text-gray-500 hover:text-[#02334E] text-sm font-medium transition-colors">Careers</Link>
            <Link href="/contact" className="text-gray-500 hover:text-[#02334E] text-sm font-medium transition-colors">Contact</Link>
          </nav>

          <Link
            href="/contact"
            className="hidden lg:inline-flex items-center px-5 py-2.5 bg-[#02334E] text-white text-sm font-semibold rounded-xl hover:bg-[#011E30] transition-colors"
          >
            Free Consultation
          </Link>

          <button className="lg:hidden text-[#02334E] p-1" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <nav className="flex flex-col px-5 py-4 gap-1">
              <Link href="/" onClick={() => setOpen(false)} className="text-gray-600 hover:text-[#02334E] py-2 text-sm font-medium">Home</Link>
              <div className="py-2">
                <p className="text-[#02334E] text-[10px] font-bold uppercase tracking-[0.2em] mb-2">Practice Areas</p>
                {practiceAreas.map((area) => (
                  <Link key={area.slug} href={`/practice-areas/${area.slug}`} onClick={() => setOpen(false)} className="block text-gray-500 hover:text-[#02334E] py-1.5 text-sm pl-2">
                    {area.label}
                  </Link>
                ))}
              </div>
              <Link href="/about" onClick={() => setOpen(false)} className="text-gray-600 hover:text-[#02334E] py-2 text-sm font-medium">About</Link>
              <Link href="/team" onClick={() => setOpen(false)} className="text-gray-600 hover:text-[#02334E] py-2 text-sm font-medium">Our Team</Link>
              <Link href="/careers" onClick={() => setOpen(false)} className="text-gray-600 hover:text-[#02334E] py-2 text-sm font-medium">Careers</Link>
              <Link href="/contact" onClick={() => setOpen(false)} className="text-gray-600 hover:text-[#02334E] py-2 text-sm font-medium">Contact</Link>
              <Link href="/contact" onClick={() => setOpen(false)} className="mt-3 text-center px-5 py-3 bg-[#02334E] text-white text-sm font-semibold rounded-xl">
                Free Consultation
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
