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
  Shield,
  Clock,
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

const marqueeItems = ["Corporate Law", "Litigation", "Intellectual Property", "Employment Law", "Real Estate", "Taxation & Compliance"];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="bg-white min-h-screen flex items-center relative overflow-hidden">
        {/* Subtle background grid */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(to right, #f0f0f0 1px, transparent 1px), linear-gradient(to bottom, #f0f0f0 1px, transparent 1px)",
            backgroundSize: "80px 80px",
            opacity: 0.4,
          }}
        />
        {/* Navy accent block — top-left corner */}
        <div className="absolute top-0 left-0 w-1 h-full bg-[#02334E]" />

        <div className="relative max-w-7xl mx-auto px-8 lg:px-14 py-24 w-full grid lg:grid-cols-[1fr_400px] gap-16 xl:gap-24 items-center">
          {/* LEFT — Headline */}
          <div>
            <HeroText delay={0.05}>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-[2px] bg-[#FEDDDD]" />
                <span className="text-[#02334E]/50 text-[10px] font-bold uppercase tracking-[0.35em]">Est. Since 2009 · Mumbai, India</span>
              </div>
            </HeroText>

            <HeroText delay={0.15}>
              <h1
                className="text-[#02334E] font-black leading-[0.92] mb-8 tracking-tight"
                style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(4rem, 8vw, 7.5rem)" }}
              >
                Relentless<br />
                Advocacy.<br />
                <em>Uncompromising</em><br />
                Results.
              </h1>
            </HeroText>

            {/* Blush accent line */}
            <HeroText delay={0.28}>
              <div className="w-16 h-[3px] bg-[#FEDDDD] mb-8 rounded-full" />
            </HeroText>

            <HeroText delay={0.35}>
              <p className="text-gray-500 text-lg leading-relaxed mb-10 max-w-lg">
                India&apos;s premier full-service law practice — combining sharp legal expertise with an unrelenting commitment to outcomes that matter.
              </p>
            </HeroText>

            <HeroText delay={0.45}>
              <div className="flex flex-wrap gap-4 mb-14">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 px-8 py-4 bg-[#02334E] text-white font-bold rounded-xl text-sm hover:bg-[#011E30] transition-all shadow-lg shadow-[#02334E]/20"
                >
                  Book Free Consultation
                  <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/practice-areas"
                  className="inline-flex items-center gap-2 px-8 py-4 border-2 border-[#02334E]/20 text-[#02334E] font-semibold rounded-xl text-sm hover:border-[#02334E] hover:bg-[#02334E]/3 transition-all"
                >
                  Our Practice Areas
                </Link>
              </div>
            </HeroText>

            <HeroText delay={0.55}>
              <div className="flex flex-wrap gap-10 border-t border-gray-100 pt-8">
                {[
                  { n: "500+", l: "Clients Served" },
                  { n: "15+", l: "Years of Practice" },
                  { n: "98%", l: "Success Rate" },
                ].map((s) => (
                  <div key={s.l}>
                    <p
                      className="text-[#02334E] font-black text-3xl leading-none"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {s.n}
                    </p>
                    <p className="text-gray-400 text-xs mt-1.5 uppercase tracking-wider font-medium">{s.l}</p>
                  </div>
                ))}
              </div>
            </HeroText>
          </div>

          {/* RIGHT — Consultation Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white rounded-2xl border border-gray-200 shadow-2xl shadow-gray-200/80 overflow-hidden">
              {/* Navy top bar */}
              <div className="bg-[#02334E] px-7 py-5">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center">
                    <Scale size={18} className="text-white" />
                  </div>
                  <div>
                    <h2 className="text-white font-bold text-base" style={{ fontFamily: "'Playfair Display', serif" }}>
                      Speak With a Lawyer
                    </h2>
                    <p className="text-white/50 text-xs">Free · Confidential · 30 minutes</p>
                  </div>
                </div>
              </div>

              <div className="p-7">
                <form className="flex flex-col gap-3.5">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#02334E] focus:ring-2 focus:ring-[#02334E]/8 transition-all"
                  />
                  <div className="grid grid-cols-2 gap-3">
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#02334E] focus:ring-2 focus:ring-[#02334E]/8 transition-all"
                    />
                    <input
                      type="tel"
                      placeholder="Phone"
                      className="border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#02334E] focus:ring-2 focus:ring-[#02334E]/8 transition-all"
                    />
                  </div>
                  <select className="border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-500 focus:outline-none focus:border-[#02334E] focus:ring-2 focus:ring-[#02334E]/8 transition-all">
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
                    placeholder="Briefly describe your matter..."
                    rows={3}
                    className="border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-400 resize-none focus:outline-none focus:border-[#02334E] focus:ring-2 focus:ring-[#02334E]/8 transition-all"
                  />
                  <button
                    type="submit"
                    className="w-full bg-[#02334E] text-white font-bold py-4 rounded-xl text-sm hover:bg-[#011E30] transition-colors"
                  >
                    Request Free Consultation
                  </button>
                </form>

                <div className="flex items-center justify-center gap-4 mt-5 pt-5 border-t border-gray-100">
                  {[
                    { icon: Shield, label: "100% Confidential" },
                    { icon: Clock, label: "Reply in 24hrs" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-1.5 text-gray-400 text-xs">
                      <item.icon size={12} />
                      {item.label}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating trust badge */}
            <motion.div
              className="absolute -bottom-5 -left-5 bg-white rounded-xl shadow-lg border border-gray-100 px-4 py-3 flex items-center gap-3"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9, duration: 0.4 }}
            >
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => <Star key={i} size={11} className="text-[#02334E] fill-[#02334E]" />)}
              </div>
              <div>
                <p className="text-[#02334E] font-bold text-xs">Trusted by 500+ clients</p>
                <p className="text-gray-400 text-[10px]">across India</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── MARQUEE ──────────────────────────────────────────────── */}
      <div className="bg-[#02334E] py-3.5 overflow-hidden">
        <div className="flex whitespace-nowrap" style={{ animation: "marquee 30s linear infinite" }}>
          {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="inline-flex items-center gap-4 px-6 text-white/40 text-[10px] font-bold uppercase tracking-[0.25em]">
              {item}
              <span className="w-1 h-1 rounded-full bg-white/20 inline-block" />
            </span>
          ))}
        </div>
      </div>

      {/* ── PRACTICE AREAS ───────────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
            <SlideInLeft>
              <p className="text-[#02334E]/50 text-[10px] font-bold uppercase tracking-[0.3em] mb-3">What We Do</p>
              <h2
                className="text-[#02334E] text-4xl md:text-5xl font-black leading-tight"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Areas of Practice
              </h2>
              <div className="w-12 h-[3px] bg-[#FEDDDD] mt-4 rounded-full" />
            </SlideInLeft>
            <SlideInRight>
              <Link href="/practice-areas" className="inline-flex items-center gap-2 text-[#02334E] font-semibold text-sm hover:gap-3 transition-all">
                View All Areas <ArrowRight size={14} />
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
                  className="group flex items-center gap-5 py-5 px-2 hover:bg-gray-50/80 rounded-xl transition-all duration-200 -mx-2"
                >
                  <span
                    className="text-[#02334E]/15 text-xs font-black w-7 shrink-0 group-hover:text-[#02334E]/40 transition-colors"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-[#02334E]/6 group-hover:bg-[#02334E] flex items-center justify-center transition-all shrink-0">
                    <area.icon size={17} className="text-[#02334E] group-hover:text-white transition-colors" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3
                      className="font-bold text-[#02334E] text-base"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {area.title}
                    </h3>
                    <p className="text-gray-400 text-sm mt-0.5 hidden md:block">{area.desc}</p>
                  </div>
                  <ChevronRight size={16} className="text-gray-200 group-hover:text-[#02334E] group-hover:translate-x-0.5 transition-all shrink-0" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY INVICTUS — dark navy section ─────────────────────── */}
      <section className="section-padding bg-[#02334E] relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-30"
          style={{
            backgroundImage: "linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
          <SlideInLeft>
            <p className="text-white/40 text-[10px] font-bold uppercase tracking-[0.3em] mb-6">The Invictus Difference</p>
            <h2
              className="text-white font-black leading-tight mb-6"
              style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
            >
              <em>We don&apos;t just<br />practice law.</em><br />
              We practice<br />winning.
            </h2>
            <div className="w-12 h-[2px] bg-white/20 mb-6" />
            <p className="text-white/50 leading-relaxed mb-8 max-w-md">
              With 15+ years of excellence, 500+ clients served, and a 98% success rate — our track record speaks louder than promises.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-[#02334E] font-bold rounded-xl text-sm hover:bg-gray-100 transition-colors"
            >
              About Our Firm <ArrowRight size={14} />
            </Link>
          </SlideInLeft>

          <SlideInRight>
            <StaggerChildren className="grid gap-2" stagger={0.07}>
              {[
                { n: "01", title: "Proven Track Record", desc: "500+ clients, 98% success rate across all practice areas." },
                { n: "02", title: "Client-First Strategy", desc: "Every case gets a bespoke strategy built around your goals." },
                { n: "03", title: "Multidisciplinary Depth", desc: "One firm for corporate, litigation, IP, employment, property and tax." },
                { n: "04", title: "Transparent Process", desc: "Clear communication at every stage. No jargon, no surprises." },
                { n: "05", title: "Swift & Decisive Action", desc: "We move fast without sacrificing the precision your matter demands." },
                { n: "06", title: "Absolute Confidentiality", desc: "Every matter treated with strict professional discretion." },
              ].map((item) => (
                <StaggerItem key={item.n}>
                  <motion.div
                    className="flex gap-4 p-4 rounded-xl border border-white/[0.06] hover:border-white/15 hover:bg-white/[0.04] transition-all cursor-default"
                    whileHover={{ x: 4 }}
                  >
                    <span className="text-white/20 text-xs font-black mt-0.5 w-6 shrink-0" style={{ fontFamily: "'Playfair Display', serif" }}>
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
            <p className="text-[#02334E]/50 text-[10px] font-bold uppercase tracking-[0.3em] mb-3">Client Stories</p>
            <h2
              className="text-[#02334E] text-4xl md:text-5xl font-black"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              What Our Clients Say
            </h2>
            <div className="w-12 h-[3px] bg-[#FEDDDD] mx-auto mt-4 rounded-full" />
          </FadeUp>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-lg hover:shadow-gray-200 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex gap-0.5 mb-5">
                  {[...Array(5)].map((_, j) => <Star key={j} size={12} className="text-[#02334E] fill-[#02334E]" />)}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">&ldquo;{t.text}&rdquo;</p>
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
            backgroundImage: "radial-gradient(circle at 20% 50%, rgba(254,221,221,0.05) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(255,255,255,0.03) 0%, transparent 50%)",
          }}
        />
        <div className="relative max-w-3xl mx-auto text-center">
          <ScaleIn>
            <div className="w-12 h-[2px] bg-white/20 mx-auto mb-8" />
            <h2
              className="text-white font-black leading-tight mb-6"
              style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
            >
              Your Legal Matter<br />Deserves Expert<br />Attention
            </h2>
            <p className="text-white/50 mb-10 text-lg max-w-xl mx-auto">
              Schedule your free consultation. No obligation, no jargon — just clear, actionable advice.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-[#02334E] font-bold rounded-xl hover:bg-gray-100 transition-colors shadow-xl"
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
