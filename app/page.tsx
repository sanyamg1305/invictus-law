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
      <section className="relative bg-[#02334E] text-white overflow-hidden min-h-[90vh] flex items-center">
        {/* Crosshatch grid overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg,#fff 0px,#fff 1px,transparent 1px,transparent 80px),repeating-linear-gradient(0deg,#fff 0px,#fff 1px,transparent 1px,transparent 80px)",
            opacity: 0.03,
          }}
        />

        {/* Giant ghosted INVICTUS text */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
          aria-hidden="true"
        >
          <span
            className="text-white font-black leading-none whitespace-nowrap"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(8rem, 22vw, 22rem)",
              opacity: 0.06,
              letterSpacing: "-0.02em",
            }}
          >
            INVICTUS
          </span>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center w-full">
          <div>
            <HeroText delay={0.1}>
              <div className="inline-flex items-center gap-2 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FEDDDD] animate-pulse" />
                <p className="text-[#FEDDDD] text-xs font-semibold uppercase tracking-widest">
                  Invictus Law Practice
                </p>
              </div>
            </HeroText>
            <HeroText delay={0.25}>
              <h1
                className="text-5xl md:text-6xl lg:text-7xl leading-tight mb-6"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Relentless<br />
                Advocacy.<br />
                <em>Uncompromising</em><br />
                Results.
              </h1>
            </HeroText>
            <HeroText delay={0.4}>
              <p className="text-white/60 text-lg leading-relaxed mb-8 max-w-lg">
                We combine sharp legal expertise with a client-first approach to deliver outcomes that matter. From corporate transactions to courtroom battles — Invictus stands unconquered.
              </p>
            </HeroText>
            <HeroText delay={0.55}>
              <div className="flex flex-wrap gap-4">
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-[#02334E] font-semibold rounded-lg hover:bg-[#FEDDDD] transition-colors text-sm shadow-lg">
                    Get a Free Consultation <ArrowRight size={16} />
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  <Link href="/practice-areas" className="inline-flex items-center gap-2 px-6 py-3.5 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/5 transition-colors text-sm">
                    Explore Practice Areas
                  </Link>
                </motion.div>
              </div>
            </HeroText>
            <HeroText delay={0.7}>
              <p className="mt-8 text-white/30 text-sm flex items-center gap-1.5">
                <Clock size={14} className="text-[#FEDDDD]" /> Limited free consultation slots available this week
              </p>
            </HeroText>
          </div>

          {/* Lead Capture Form */}
          <motion.div
            className="bg-white rounded-2xl overflow-hidden shadow-2xl shadow-black/30"
            initial={{ opacity: 0, x: 60, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9, ease, delay: 0.3 }}
          >
            {/* Navy top accent bar */}
            <div className="h-1.5 bg-[#02334E]" />
            <div className="p-8">
              <h2 className="text-[#02334E] font-black text-xl mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>Talk to a Lawyer Now</h2>
              <p className="text-gray-400 text-sm mb-6">Free, confidential 30-minute consultation.</p>
              <form className="flex flex-col gap-4">
                <input type="text" placeholder="Your Full Name" className="border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#02334E] focus:border-transparent transition-shadow" />
                <input type="email" placeholder="Email Address" className="border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#02334E] focus:border-transparent transition-shadow" />
                <input type="tel" placeholder="Phone Number" className="border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#02334E] focus:border-transparent transition-shadow" />
                <select className="border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#02334E]">
                  <option value="">Select Legal Issue</option>
                  <option>Corporate Law</option>
                  <option>Litigation &amp; Dispute Resolution</option>
                  <option>Intellectual Property</option>
                  <option>Employment Law</option>
                  <option>Real Estate &amp; Property Law</option>
                  <option>Taxation &amp; Compliance</option>
                  <option>Other</option>
                </select>
                <textarea placeholder="Brief description of your matter (optional)" rows={3} className="border border-gray-200 rounded-lg px-4 py-3 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-[#02334E] focus:border-transparent transition-shadow" />
                <motion.button type="submit" className="w-full bg-[#02334E] text-white font-semibold py-3.5 rounded-lg text-sm" whileHover={{ backgroundColor: "#011E30", scale: 1.01 }} whileTap={{ scale: 0.98 }} transition={{ duration: 0.15 }}>
                  Request Free Consultation
                </motion.button>
              </form>
              <p className="text-xs text-gray-400 mt-3 text-center">Your information is 100% confidential.</p>
            </div>
          </motion.div>
        </div>
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
