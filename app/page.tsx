"use client";

import Link from "next/link";
import {
  Scale,
  Building2,
  Gavel,
  Lightbulb,
  Users,
  Home,
  Receipt,
  ArrowRight,
  Phone,
  ChevronRight,
  Star,
} from "lucide-react";
import { motion } from "framer-motion";
import {
  FadeUp,
  StaggerChildren,
  StaggerItem,
  SlideInLeft,
  SlideInRight,
  ScaleIn,
  CountUp,
  HeroText,
  ease,
} from "@/components/animations";

const practiceAreas = [
  { icon: Building2, title: "Corporate Law", desc: "End-to-end counsel for businesses — from incorporation to complex M&A transactions.", slug: "corporate-law" },
  { icon: Gavel, title: "Litigation & Dispute Resolution", desc: "Fearless representation in courts, tribunals, and arbitration forums.", slug: "litigation" },
  { icon: Lightbulb, title: "Intellectual Property", desc: "Protecting your innovations, trademarks, copyrights, and trade secrets.", slug: "intellectual-property" },
  { icon: Users, title: "Employment Law", desc: "Strategic guidance for employers and employees on all workplace matters.", slug: "employment-law" },
  { icon: Home, title: "Real Estate & Property Law", desc: "Expert legal guidance for property transactions, disputes, and RERA compliance.", slug: "real-estate" },
  { icon: Receipt, title: "Taxation & Compliance", desc: "Smart tax planning and regulatory compliance to protect your financial interests.", slug: "taxation" },
];

const testimonials = [
  { name: "Rajesh Mehta", role: "CEO, TechVentures India", text: "Invictus Law handled our entire corporate restructuring with remarkable precision. Their expertise gave us the confidence to make bold decisions." },
  { name: "Priya Sharma", role: "Entrepreneur", text: "When a trademark dispute threatened my brand, Invictus stepped in and resolved it swiftly. Truly a team that fights for you." },
  { name: "Arun Nair", role: "Real Estate Developer", text: "Their property law team is unmatched. Every transaction handled thoroughly, leaving no stone unturned." },
];

const stats = [
  { value: 500, suffix: "+", label: "Clients Served" },
  { value: 15, suffix: "+", label: "Years of Excellence" },
  { value: 98, suffix: "%", label: "Success Rate" },
  { value: 6, suffix: "", label: "Practice Areas" },
];

const marqueeItems = ["Corporate Law", "Litigation", "Intellectual Property", "Employment Law", "Real Estate", "Taxation"];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative bg-white overflow-hidden min-h-screen">
        {/* Large navy left panel */}
        <div className="absolute inset-y-0 left-0 w-[55%] bg-[#02334E] hidden lg:block" />

        {/* Dot texture on navy panel */}
        <div
          className="absolute inset-y-0 left-0 w-[55%] hidden lg:block pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)",
            backgroundSize: "36px 36px",
          }}
        />

        {/* Ghost INVICTUS watermark on navy side */}
        <div
          className="absolute inset-y-0 left-0 w-[55%] hidden lg:flex items-end pointer-events-none select-none overflow-hidden"
          aria-hidden="true"
        >
          <span
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(6rem, 14vw, 16rem)",
              opacity: 0.05,
              letterSpacing: "-0.03em",
              lineHeight: 0.85,
              color: "white",
              fontWeight: 900,
              whiteSpace: "nowrap",
              paddingLeft: "2rem",
            }}
          >
            INVICTUS
          </span>
        </div>

        {/* Decorative blush accent line */}
        <div className="absolute top-0 left-0 w-[55%] h-1 bg-[#FEDDDD] hidden lg:block" />

        <div className="relative max-w-7xl mx-auto min-h-screen grid lg:grid-cols-[55fr_45fr]">
          {/* LEFT — Navy side with headline */}
          <div className="flex flex-col justify-center px-8 md:px-14 py-28 lg:py-32 bg-[#02334E] lg:bg-transparent">
            <HeroText delay={0.1}>
              <div className="flex items-center gap-3 mb-10">
                <div className="h-px w-10 bg-[#FEDDDD]/50" />
                <span className="text-[#FEDDDD] text-[10px] font-bold uppercase tracking-[0.35em]">Est. Since 2009 · Mumbai, India</span>
              </div>
            </HeroText>

            <HeroText delay={0.2}>
              <h1
                className="text-white font-black leading-[0.95] mb-8"
                style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(3.5rem, 7vw, 6.5rem)" }}
              >
                Relentless<br />
                Advocacy.<br />
                <em className="text-[#FEDDDD] not-italic">Uncompromising</em><br />
                Results.
              </h1>
            </HeroText>

            <HeroText delay={0.38}>
              <p className="text-white/55 text-base md:text-lg leading-relaxed mb-10 max-w-md">
                India&apos;s premier full-service law practice — combining sharp legal expertise with an unrelenting commitment to outcomes that matter.
              </p>
            </HeroText>

            <HeroText delay={0.5}>
              <div className="flex flex-wrap gap-4 mb-14">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 px-7 py-4 bg-[#FEDDDD] text-[#02334E] font-bold rounded-xl text-sm hover:bg-white transition-colors shadow-lg"
                >
                  Free Consultation
                  <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/practice-areas"
                  className="inline-flex items-center gap-2 px-7 py-4 border border-white/25 text-white font-semibold rounded-xl text-sm hover:bg-white/8 hover:border-white/50 transition-all"
                >
                  Practice Areas
                </Link>
              </div>
            </HeroText>

            {/* Inline stats */}
            <HeroText delay={0.62}>
              <div className="flex gap-8 border-t border-white/10 pt-8">
                {[
                  { n: "500+", l: "Clients" },
                  { n: "15+", l: "Years" },
                  { n: "98%", l: "Success Rate" },
                ].map((s) => (
                  <div key={s.l}>
                    <p className="text-white font-black text-2xl leading-none" style={{ fontFamily: "'Playfair Display', serif" }}>{s.n}</p>
                    <p className="text-white/40 text-xs mt-1 uppercase tracking-wider">{s.l}</p>
                  </div>
                ))}
              </div>
            </HeroText>
          </div>

          {/* RIGHT — White side with form */}
          <div className="flex flex-col justify-center px-8 md:px-12 py-28 lg:py-32 bg-white">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease, delay: 0.3 }}
              className="max-w-sm w-full mx-auto lg:mx-0"
            >
              {/* Decorative scales icon */}
              <div className="w-14 h-14 rounded-2xl bg-[#02334E] flex items-center justify-center mb-8 shadow-lg">
                <Scale size={26} className="text-[#FEDDDD]" />
              </div>

              <h2
                className="text-[#02334E] font-black text-2xl mb-2 leading-tight"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Speak With a Lawyer
              </h2>
              <p className="text-gray-400 text-sm mb-8">Free · Confidential · 30-minute consultation</p>

              <form className="flex flex-col gap-3.5">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#02334E] focus:ring-2 focus:ring-[#02334E]/10 transition-all"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#02334E] focus:ring-2 focus:ring-[#02334E]/10 transition-all"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#02334E] focus:ring-2 focus:ring-[#02334E]/10 transition-all"
                />
                <select className="border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-500 focus:outline-none focus:border-[#02334E] focus:ring-2 focus:ring-[#02334E]/10 transition-all">
                  <option value="">Select Legal Matter</option>
                  <option>Corporate Law</option>
                  <option>Litigation &amp; Dispute Resolution</option>
                  <option>Intellectual Property</option>
                  <option>Employment Law</option>
                  <option>Real Estate &amp; Property Law</option>
                  <option>Taxation &amp; Compliance</option>
                  <option>Other</option>
                </select>
                <textarea
                  placeholder="Brief description (optional)"
                  rows={3}
                  className="border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-400 resize-none focus:outline-none focus:border-[#02334E] focus:ring-2 focus:ring-[#02334E]/10 transition-all"
                />
                <button
                  type="submit"
                  className="w-full bg-[#02334E] text-white font-bold py-3.5 rounded-xl text-sm hover:bg-[#011E30] transition-colors mt-1"
                >
                  Request Free Consultation
                </button>
              </form>
              <p className="text-[10px] text-gray-400 mt-4 text-center leading-relaxed">
                No attorney-client relationship formed until formally agreed. All information is 100% confidential.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── MARQUEE ──────────────────────────────────────────────── */}
      <div className="bg-[#02334E] py-4 overflow-hidden">
        <div className="flex whitespace-nowrap" style={{ animation: "marquee 30s linear infinite" }}>
          {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="inline-flex items-center gap-4 px-6 text-white/40 text-[11px] font-bold uppercase tracking-[0.2em]">
              {item}
              <span className="text-[#FEDDDD]/50 text-xs">◆</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── PRACTICE AREAS ───────────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
            <SlideInLeft>
              <p className="text-[#02334E] text-[11px] font-bold uppercase tracking-[0.25em] mb-3">What We Do</p>
              <h2
                className="text-[#02334E] text-4xl md:text-5xl font-black leading-tight"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Areas of<br />Practice
              </h2>
              <div className="w-10 h-[3px] bg-[#FEDDDD] mt-5 rounded-full" />
            </SlideInLeft>
            <SlideInRight>
              <Link href="/practice-areas" className="inline-flex items-center gap-2 text-[#02334E] font-semibold text-sm border-b-2 border-[#02334E]/20 hover:border-[#02334E] pb-0.5 transition-colors">
                View All <ArrowRight size={14} />
              </Link>
            </SlideInRight>
          </div>

          <div className="divide-y divide-gray-100">
            {practiceAreas.map((area, i) => (
              <motion.div
                key={area.slug}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
              >
                <Link
                  href={`/practice-areas/${area.slug}`}
                  className="group flex items-center gap-5 py-5 hover:pl-2 transition-all duration-300"
                >
                  <span
                    className="text-[#02334E]/15 text-xs font-black w-7 shrink-0 group-hover:text-[#02334E]/50 transition-colors"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="w-10 h-10 rounded-lg bg-[#02334E]/6 group-hover:bg-[#02334E] flex items-center justify-center transition-colors shrink-0">
                    <area.icon size={17} className="text-[#02334E] group-hover:text-[#FEDDDD] transition-colors" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3
                      className="font-bold text-[#02334E] text-base group-hover:text-[#011E30] transition-colors"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {area.title}
                    </h3>
                    <p className="text-gray-400 text-sm mt-0.5 hidden md:block truncate">{area.desc}</p>
                  </div>
                  <ChevronRight size={17} className="text-gray-200 group-hover:text-[#02334E] group-hover:translate-x-1 transition-all shrink-0" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY INVICTUS ─────────────────────────────────────────── */}
      <section className="section-padding bg-[#02334E] relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.025) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <SlideInLeft>
            <p className="text-[#FEDDDD] text-[11px] font-bold uppercase tracking-[0.25em] mb-6">The Invictus Difference</p>
            <blockquote style={{ fontFamily: "'Playfair Display', serif" }}>
              <span className="block text-white text-4xl md:text-5xl font-black italic leading-tight">
                &ldquo;We don&apos;t just<br />practice law.
              </span>
              <span className="block text-[#FEDDDD] text-4xl md:text-5xl font-black italic leading-tight mt-1">
                We practice<br />winning.&rdquo;
              </span>
            </blockquote>
            <div className="w-10 h-px bg-[#FEDDDD]/30 my-7" />
            <p className="text-white/50 leading-relaxed max-w-md mb-8 text-sm">
              With 15+ years of excellence, 500+ clients served, and a 98% success rate — our track record speaks louder than promises.
            </p>
            <Link href="/about" className="inline-flex items-center gap-2 px-6 py-3 bg-[#FEDDDD] text-[#02334E] font-bold rounded-xl text-sm hover:bg-white transition-colors">
              About Our Firm <ArrowRight size={14} />
            </Link>
          </SlideInLeft>

          <SlideInRight>
            <StaggerChildren className="grid gap-2.5" stagger={0.07}>
              {[
                { n: "01", title: "Proven Track Record", desc: "500+ clients, 98% success rate across all practice areas." },
                { n: "02", title: "Client-First Strategy", desc: "Every case gets a bespoke legal strategy built around your goals." },
                { n: "03", title: "Multidisciplinary Depth", desc: "One firm covering corporate, litigation, IP, employment, property and tax." },
                { n: "04", title: "Transparent Process", desc: "Clear communication at every stage. No jargon, no surprises." },
                { n: "05", title: "Swift & Decisive Action", desc: "We move fast without sacrificing the precision your matter demands." },
                { n: "06", title: "Absolute Confidentiality", desc: "Every matter treated with strict professional discretion." },
              ].map((item) => (
                <StaggerItem key={item.n}>
                  <motion.div
                    className="flex gap-4 p-4 rounded-xl border border-white/[0.07] hover:border-[#FEDDDD]/20 hover:bg-white/[0.04] transition-all cursor-default"
                    whileHover={{ x: 4 }}
                  >
                    <span className="text-[#FEDDDD]/25 text-xs font-black mt-0.5 w-6 shrink-0" style={{ fontFamily: "'Playfair Display', serif" }}>
                      {item.n}
                    </span>
                    <div>
                      <h3 className="font-bold text-white text-sm mb-0.5">{item.title}</h3>
                      <p className="text-white/40 text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </SlideInRight>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────────── */}
      <section className="section-padding bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto">
          <FadeUp className="text-center mb-14">
            <p className="text-[#02334E] text-[11px] font-bold uppercase tracking-[0.25em] mb-3">Client Stories</p>
            <h2 className="text-[#02334E] text-4xl md:text-5xl font-black" style={{ fontFamily: "'Playfair Display', serif" }}>
              What Our Clients Say
            </h2>
            <div className="w-10 h-[3px] bg-[#FEDDDD] mx-auto mt-4 rounded-full" />
          </FadeUp>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-lg hover:shadow-[#02334E]/8 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex gap-0.5 mb-5">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={13} className="text-[#FEDDDD] fill-[#FEDDDD]" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 italic">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#02334E] flex items-center justify-center text-white text-xs font-bold shrink-0">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-[#02334E] font-bold text-sm">{t.name}</p>
                    <p className="text-gray-400 text-xs">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS ────────────────────────────────────────────────── */}
      <section className="bg-white border-y border-gray-100">
        <StaggerChildren className="max-w-5xl mx-auto px-6 py-12 grid grid-cols-2 lg:grid-cols-4" stagger={0.1}>
          {stats.map((s, i) => (
            <StaggerItem key={s.label}>
              <div className={`text-center py-4 ${i < stats.length - 1 ? "border-r border-gray-100" : ""}`}>
                <p className="text-4xl lg:text-5xl font-black text-[#02334E]" style={{ fontFamily: "'Playfair Display', serif" }}>
                  <CountUp target={s.value} suffix={s.suffix} duration={2} />
                </p>
                <div className="w-5 h-[2px] bg-[#FEDDDD] mx-auto my-2 rounded-full" />
                <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider">{s.label}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section className="section-padding bg-[#02334E] relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "repeating-linear-gradient(45deg, rgba(254,221,221,0.035) 0px, rgba(254,221,221,0.035) 1px, transparent 1px, transparent 40px)",
          }}
        />
        <div className="relative max-w-4xl mx-auto text-center">
          <ScaleIn>
            <div className="w-14 h-14 rounded-2xl bg-[#FEDDDD]/10 border border-[#FEDDDD]/20 flex items-center justify-center mx-auto mb-8">
              <Scale size={28} className="text-[#FEDDDD]" />
            </div>
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Your Legal Matter<br />Deserves Expert<br />Attention
            </h2>
            <p className="text-white/50 mb-10 text-lg max-w-xl mx-auto">
              Schedule your free consultation. No obligation, no jargon — just clear, actionable advice from India&apos;s top legal minds.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-[#FEDDDD] text-[#02334E] font-bold rounded-xl hover:bg-white transition-colors shadow-xl"
              >
                Book Free Consultation
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="tel:+911234567890"
                className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/8 transition-colors"
              >
                <Phone size={16} /> +91 12345 67890
              </a>
            </div>
          </ScaleIn>
        </div>
      </section>
    </>
  );
}
