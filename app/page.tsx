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
  Star,
  CheckCircle2,
  ArrowRight,
  Phone,
  Clock,
} from "lucide-react";
import { motion } from "framer-motion";
import {
  FadeUp,
  FadeIn,
  StaggerChildren,
  StaggerItem,
  SlideInLeft,
  SlideInRight,
  ScaleIn,
  CountUp,
  HeroText,
  DrawLine,
  ease,
} from "@/components/animations";

const practiceAreas = [
  { icon: Building2, title: "Corporate Law", desc: "Expert counsel for businesses — from incorporation and contracts to M&A and governance.", slug: "corporate-law" },
  { icon: Gavel, title: "Litigation & Dispute Resolution", desc: "Aggressive representation in courts and tribunals to protect your interests.", slug: "litigation" },
  { icon: Lightbulb, title: "Intellectual Property", desc: "Safeguard your innovations, trademarks, copyrights, and trade secrets.", slug: "intellectual-property" },
  { icon: Users, title: "Employment Law", desc: "Comprehensive legal support for employers and employees on all workplace matters.", slug: "employment-law" },
  { icon: Home, title: "Real Estate & Property Law", desc: "Trusted guidance for property transactions, disputes, and due diligence.", slug: "real-estate" },
  { icon: Receipt, title: "Taxation & Compliance", desc: "Strategic tax planning and regulatory compliance for individuals and businesses.", slug: "taxation" },
];

const testimonials = [
  { name: "Rajesh Mehta", role: "CEO, TechVentures India", text: "Invictus Law handled our entire corporate restructuring with remarkable precision and insight. Their expertise gave us the confidence to make bold decisions." },
  { name: "Priya Sharma", role: "Entrepreneur", text: "When a trademark dispute threatened my brand, Invictus stepped in and resolved it swiftly. Truly a team that fights for you." },
  { name: "Arun Nair", role: "Real Estate Developer", text: "Their property law team is unmatched. Every transaction is handled thoroughly, leaving no stone unturned." },
];

const trustStats = [
  { value: 500, suffix: "+", label: "Clients Served" },
  { value: 15, suffix: "+", label: "Years of Excellence" },
  { value: 98, suffix: "%", label: "Success Rate" },
  { value: 6, suffix: "", label: "Practice Areas" },
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="relative bg-[#02334E] text-white overflow-hidden min-h-screen flex items-center">
        {/* Fine grid overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg,#fff 0px,#fff 1px,transparent 1px,transparent 60px),repeating-linear-gradient(0deg,#fff 0px,#fff 1px,transparent 1px,transparent 60px)",
            opacity: 0.025,
          }}
        />

        {/* Radial glow — gold, bottom-left */}
        <div
          className="absolute pointer-events-none"
          style={{
            width: "70vw",
            height: "70vw",
            bottom: "-20vw",
            left: "-15vw",
            background: "radial-gradient(circle, rgba(212,167,84,0.18) 0%, transparent 70%)",
          }}
        />
        {/* Radial glow — teal, top-right */}
        <div
          className="absolute pointer-events-none"
          style={{
            width: "55vw",
            height: "55vw",
            top: "-15vw",
            right: "-10vw",
            background: "radial-gradient(circle, rgba(6,182,212,0.10) 0%, transparent 65%)",
          }}
        />

        {/* Giant ghosted INVICTUS text */}
        <div
          className="absolute inset-0 flex items-end justify-center pointer-events-none select-none overflow-hidden pb-0"
          aria-hidden="true"
        >
          <span
            className="text-white font-black leading-none whitespace-nowrap"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(7rem, 20vw, 20rem)",
              opacity: 0.04,
              letterSpacing: "-0.02em",
              lineHeight: 0.85,
            }}
          >
            INVICTUS
          </span>
        </div>

        {/* Decorative scales of justice SVG — right edge */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none select-none hidden xl:block" aria-hidden="true" style={{ opacity: 0.055 }}>
          <svg width="420" height="520" viewBox="0 0 420 520" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="210" y1="40" x2="210" y2="480" stroke="white" strokeWidth="6" strokeLinecap="round"/>
            <line x1="80" y1="140" x2="340" y2="140" stroke="white" strokeWidth="6" strokeLinecap="round"/>
            <line x1="210" y1="140" x2="210" y2="60" stroke="white" strokeWidth="5"/>
            <circle cx="210" cy="52" r="14" stroke="white" strokeWidth="5"/>
            {/* Left pan arm */}
            <line x1="80" y1="140" x2="50" y2="240" stroke="white" strokeWidth="4" strokeLinecap="round"/>
            <line x1="80" y1="140" x2="110" y2="240" stroke="white" strokeWidth="4" strokeLinecap="round"/>
            <path d="M40 240 Q80 268 120 240" stroke="white" strokeWidth="5" strokeLinecap="round" fill="none"/>
            {/* Right pan arm */}
            <line x1="340" y1="140" x2="310" y2="240" stroke="white" strokeWidth="4" strokeLinecap="round"/>
            <line x1="340" y1="140" x2="370" y2="240" stroke="white" strokeWidth="4" strokeLinecap="round"/>
            <path d="M300 240 Q340 268 380 240" stroke="white" strokeWidth="5" strokeLinecap="round" fill="none"/>
            {/* Base */}
            <path d="M150 480 L270 480" stroke="white" strokeWidth="6" strokeLinecap="round"/>
            <path d="M175 480 L210 380" stroke="white" strokeWidth="4" strokeLinecap="round"/>
            <path d="M245 480 L210 380" stroke="white" strokeWidth="4" strokeLinecap="round"/>
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-28 lg:py-32 grid lg:grid-cols-[1fr_420px] gap-16 items-center w-full">
          <div>
            {/* Badge row */}
            <HeroText delay={0.05}>
              <div className="flex flex-wrap items-center gap-3 mb-8">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#D4A754]/40 bg-[#D4A754]/10">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4A754] animate-pulse" />
                  <p className="text-[#D4A754] text-xs font-semibold uppercase tracking-widest">Invictus Law Practice</p>
                </div>
              </div>
            </HeroText>

            {/* Headline */}
            <HeroText delay={0.18}>
              <h1
                className="font-black leading-[1.05] mb-6"
                style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(3rem, 6vw, 5.5rem)" }}
              >
                Relentless<br />
                Advocacy.<br />
                <span
                  style={{
                    background: "linear-gradient(110deg, #D4A754 0%, #F5D08A 40%, #C8913A 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  <em>Uncompromising</em>
                </span><br />
                Results.
              </h1>
            </HeroText>

            <HeroText delay={0.34}>
              <p className="text-white/55 text-lg leading-relaxed mb-10 max-w-[500px]">
                Sharp legal expertise meets a relentless client-first commitment. From corporate transactions to courtroom battles — Invictus stands unconquered.
              </p>
            </HeroText>

            {/* CTA buttons */}
            <HeroText delay={0.48}>
              <div className="flex flex-wrap gap-4 mb-10">
                <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-7 py-4 font-semibold rounded-xl text-sm shadow-xl shadow-black/30 transition-all"
                    style={{ background: "linear-gradient(135deg, #D4A754 0%, #C8913A 100%)", color: "#02334E" }}
                  >
                    Get a Free Consultation <ArrowRight size={16} />
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                  <Link href="/practice-areas" className="inline-flex items-center gap-2 px-7 py-4 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/8 transition-colors text-sm backdrop-blur-sm">
                    Explore Practice Areas
                  </Link>
                </motion.div>
              </div>
            </HeroText>

            {/* Floating credential pills */}
            <HeroText delay={0.62}>
              <div className="flex flex-wrap gap-3">
                {[
                  { icon: "⚖️", label: "15+ Years of Excellence" },
                  { icon: "✦", label: "98% Success Rate" },
                  { icon: "🏛️", label: "500+ Clients Served" },
                ].map((pill) => (
                  <span
                    key={pill.label}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-white/70 border border-white/10 bg-white/5 backdrop-blur-sm"
                  >
                    <span>{pill.icon}</span> {pill.label}
                  </span>
                ))}
              </div>
            </HeroText>

            <HeroText delay={0.76}>
              <p className="mt-6 text-white/25 text-xs flex items-center gap-1.5">
                <Clock size={12} className="text-[#D4A754]" /> Limited free consultation slots available this week
              </p>
            </HeroText>
          </div>

          {/* Lead Capture Form — glassmorphism card */}
          <motion.div
            className="relative rounded-2xl overflow-hidden"
            initial={{ opacity: 0, x: 60, scale: 0.94 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, ease, delay: 0.25 }}
          >
            {/* Glow ring behind card */}
            <div
              className="absolute -inset-px rounded-2xl pointer-events-none"
              style={{
                background: "linear-gradient(135deg, rgba(212,167,84,0.5) 0%, rgba(2,51,78,0) 50%, rgba(6,182,212,0.25) 100%)",
              }}
            />
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{
                background: "rgba(255,255,255,0.96)",
                boxShadow: "0 32px 80px rgba(0,0,0,0.45), 0 0 0 1px rgba(255,255,255,0.08)",
              }}
            >
              {/* Gold gradient top bar */}
              <div style={{ height: 4, background: "linear-gradient(90deg, #D4A754 0%, #F5D08A 50%, #C8913A 100%)" }} />
              <div className="p-8">
                <div className="flex items-center gap-2 mb-1">
                  <Phone size={15} className="text-[#D4A754]" />
                  <h2 className="text-[#02334E] font-black text-xl" style={{ fontFamily: "'Playfair Display', serif" }}>Talk to a Lawyer Now</h2>
                </div>
                <p className="text-gray-400 text-sm mb-6">Free, confidential 30-minute consultation.</p>
                <form className="flex flex-col gap-3.5">
                  <input type="text" placeholder="Your Full Name" className="border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#D4A754]/50 focus:border-[#D4A754] transition-all bg-gray-50/60" />
                  <input type="email" placeholder="Email Address" className="border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#D4A754]/50 focus:border-[#D4A754] transition-all bg-gray-50/60" />
                  <input type="tel" placeholder="Phone Number" className="border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#D4A754]/50 focus:border-[#D4A754] transition-all bg-gray-50/60" />
                  <select className="border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#D4A754]/50 focus:border-[#D4A754] bg-gray-50/60">
                    <option value="">Select Legal Issue</option>
                    <option>Corporate Law</option>
                    <option>Litigation &amp; Dispute Resolution</option>
                    <option>Intellectual Property</option>
                    <option>Employment Law</option>
                    <option>Real Estate &amp; Property Law</option>
                    <option>Taxation &amp; Compliance</option>
                    <option>Other</option>
                  </select>
                  <textarea placeholder="Brief description of your matter (optional)" rows={3} className="border border-gray-200 rounded-xl px-4 py-3 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-[#D4A754]/50 focus:border-[#D4A754] transition-all bg-gray-50/60" />
                  <motion.button
                    type="submit"
                    className="w-full font-bold py-4 rounded-xl text-sm tracking-wide"
                    style={{ background: "linear-gradient(135deg, #02334E 0%, #01223A 100%)", color: "white" }}
                    whileHover={{ scale: 1.015, boxShadow: "0 8px 30px rgba(2,51,78,0.4)" }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.15 }}
                  >
                    Request Free Consultation →
                  </motion.button>
                </form>
                <div className="flex items-center justify-center gap-1.5 mt-4">
                  <CheckCircle2 size={12} className="text-green-500" />
                  <p className="text-xs text-gray-400">100% confidential · No obligation</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <span className="text-white/25 text-[10px] uppercase tracking-widest font-medium">Scroll</span>
          <motion.div
            className="w-px h-10 bg-gradient-to-b from-white/30 to-transparent"
            animate={{ scaleY: [1, 0.4, 1], opacity: [0.4, 1, 0.4] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          />
        </motion.div>
      </section>

      {/* ── Stats Bar ─────────────────────────────────────────────── */}
      <section className="bg-white border-y border-[#E2E8F0]">
        <StaggerChildren className="max-w-5xl mx-auto px-6 py-10 grid grid-cols-2 lg:grid-cols-4 gap-6" stagger={0.15}>
          {trustStats.map((stat, i) => (
            <StaggerItem key={stat.label}>
              <div className={`text-center ${i < trustStats.length - 1 ? "lg:border-r lg:border-[#E2E8F0]" : ""}`}>
                <p className="text-5xl font-black text-[#02334E] inline-flex items-end gap-0.5" style={{ fontFamily: "'Playfair Display', serif" }}>
                  <CountUp target={stat.value} suffix={stat.suffix} duration={2} />
                  <span className="text-[#FEDDDD] text-3xl mb-1">·</span>
                </p>
                <p className="text-[#64748B] text-sm font-medium mt-1">{stat.label}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </section>

      {/* ── Why Invictus ─────────────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <SlideInLeft>
              <p className="text-[#02334E] text-xs font-semibold uppercase tracking-widest mb-3">Why Invictus</p>
              <h2 className="text-4xl md:text-5xl font-black text-[#0A1628] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                The Invictus<br />Difference
              </h2>
              <div className="w-12 h-0.5 bg-[#FEDDDD] mb-6" />
              <p className="text-[#64748B] leading-relaxed">
                We are not just lawyers — we are strategic partners who combine deep legal expertise with a relentless commitment to achieving what matters most to you.
              </p>
            </SlideInLeft>
            <SlideInRight>
              <StaggerChildren className="grid gap-4" stagger={0.08}>
                {[
                  { title: "Proven Track Record", desc: "With 500+ clients and a 98% success rate, our results speak louder than promises." },
                  { title: "Client-First Philosophy", desc: "Every strategy is built around your unique needs, not a generic playbook." },
                  { title: "Multidisciplinary Expertise", desc: "From corporate boardrooms to courtrooms, our team covers every legal frontier." },
                  { title: "Transparent Communication", desc: "You'll always know where you stand. No legal jargon, no surprises." },
                  { title: "Swift & Strategic Action", desc: "We combine speed with precision to safeguard your time and interests." },
                  { title: "Confidential & Trusted", desc: "Your matter is treated with the utmost discretion and professional integrity." },
                ].map((item) => (
                  <StaggerItem key={item.title}>
                    <motion.div className="flex gap-4 p-4 rounded-xl hover:bg-[#F8FAFC] transition-colors" whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
                      <span className="shrink-0 mt-1.5 w-2 h-2 rounded-full bg-[#FEDDDD]" />
                      <div>
                        <h3 className="font-bold text-[#0A1628] text-sm mb-0.5">{item.title}</h3>
                        <p className="text-[#64748B] text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerChildren>
            </SlideInRight>
          </div>
        </div>
      </section>

      {/* ── Practice Areas ────────────────────────────────────────── */}
      <section className="section-padding bg-[#02334E]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <FadeUp>
              <p className="text-white/60 text-xs font-semibold uppercase tracking-widest mb-3">What We Do</p>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Areas of Practice</h2>
              <p className="text-white/50 mt-3 text-sm max-w-xl mx-auto">Comprehensive legal services across every domain that matters to your business and personal life.</p>
            </FadeUp>
          </div>
          <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" stagger={0.1}>
            {practiceAreas.map((area) => (
              <StaggerItem key={area.slug}>
                <motion.div
                  whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(0,0,0,0.25)" }}
                  transition={{ duration: 0.25 }}
                >
                  <Link href={`/practice-areas/${area.slug}`} className="group bg-white rounded-xl p-7 hover:border-[#FEDDDD] border border-transparent transition-colors block h-full">
                    <div className="w-12 h-12 rounded-lg bg-[#02334E] flex items-center justify-center mb-5">
                      <area.icon className="text-[#FEDDDD]" size={22} />
                    </div>
                    <h3 className="font-bold text-[#0A1628] text-base mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>{area.title}</h3>
                    <p className="text-[#64748B] text-sm leading-relaxed">{area.desc}</p>
                    <div className="mt-5 flex items-center gap-1 text-[#FEDDDD] text-sm font-semibold">
                      Learn more →
                    </div>
                  </Link>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerChildren>
          <FadeUp className="text-center mt-10">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link href="/practice-areas" className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors text-sm">
                View All Practice Areas
              </Link>
            </motion.div>
          </FadeUp>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────────────── */}
      <section className="section-padding bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <FadeUp>
              <p className="text-[#02334E] text-xs font-semibold uppercase tracking-widest mb-3">Client Stories</p>
              <h2 className="text-4xl md:text-5xl font-black text-[#0A1628]" style={{ fontFamily: "'Playfair Display', serif" }}>What Our Clients Say</h2>
              <div className="w-12 h-0.5 bg-[#FEDDDD] mx-auto mt-4" />
            </FadeUp>
          </div>
          <StaggerChildren className="grid md:grid-cols-3 gap-8" stagger={0.15}>
            {testimonials.map((t) => (
              <StaggerItem key={t.name}>
                <motion.div
                  className="bg-white border-l-4 border-[#02334E] rounded-r-xl p-7 h-full shadow-sm"
                  whileHover={{ y: -4, boxShadow: "0 16px 40px rgba(2,51,78,0.12)" }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="text-[#FEDDDD] text-6xl font-black leading-none mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>&ldquo;</div>
                  <p className="text-[#64748B] text-sm leading-relaxed mb-5 italic">{t.text}</p>
                  <div>
                    <p className="text-[#0A1628] font-semibold text-sm">{t.name}</p>
                    <p className="text-[#64748B] text-xs">{t.role}</p>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerChildren>
          <FadeIn className="text-center mt-8">
            <p className="text-[#64748B] text-sm">Join 500+ clients who trust Invictus Law Practice</p>
          </FadeIn>
        </div>
      </section>

      {/* ── CTA Banner ───────────────────────────────────────────── */}
      <section className="section-padding bg-[#02334E]">
        <div className="max-w-3xl mx-auto text-center">
          <ScaleIn>
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="inline-block mb-6"
            >
              <Scale size={40} className="text-[#FEDDDD] opacity-80" />
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Your Legal Matter Deserves Expert Attention
            </h2>
            <p className="text-white/70 mb-10">Schedule your free consultation today. Our team is ready to listen, advise, and act.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-[#02334E] font-semibold rounded-lg hover:bg-[#FEDDDD] transition-colors">
                  Book Free Consultation <ArrowRight size={16} />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <a href="tel:+911234567890" className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/10 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors">
                  <Phone size={16} /> Call Us Now
                </a>
              </motion.div>
            </div>
          </ScaleIn>
        </div>
      </section>
    </>
  );
}
