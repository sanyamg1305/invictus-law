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
      <section className="relative bg-[#0F172A] text-white overflow-hidden min-h-[90vh] flex items-center">
        {/* Subtle grid */}
        <motion.div
          className="absolute inset-0 opacity-[0.04]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.04 }}
          transition={{ duration: 1.5 }}
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg,#fff 0px,#fff 1px,transparent 1px,transparent 80px),repeating-linear-gradient(0deg,#fff 0px,#fff 1px,transparent 1px,transparent 80px)",
          }}
        />

        {/* Blue radial glow top-right */}
        <motion.div
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(59,130,246,0.18) 0%, transparent 70%)" }}
          animate={{ scale: [1, 1.08, 1], opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Blue radial glow bottom-left */}
        <motion.div
          className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full"
          style={{ background: "radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%)" }}
          animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />

        <div className="relative max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center w-full">
          <div>
            <HeroText delay={0.1}>
              <div className="inline-flex items-center gap-2 bg-[#3B82F6]/10 border border-[#3B82F6]/20 rounded-full px-4 py-1.5 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] animate-pulse" />
                <p className="text-[#60A5FA] text-xs font-semibold uppercase tracking-widest">
                  Invictus Law Practice
                </p>
              </div>
            </HeroText>
            <HeroText delay={0.25}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6">
                Relentless Advocacy.{" "}
                <span className="text-[#3B82F6]">Uncompromising</span> Results.
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
                  <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#3B82F6] text-white font-semibold rounded-lg hover:bg-[#2563EB] transition-colors text-sm shadow-lg shadow-blue-500/25">
                    Get a Free Consultation <ArrowRight size={16} />
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  <Link href="/practice-areas" className="inline-flex items-center gap-2 px-6 py-3.5 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/5 transition-colors text-sm">
                    Explore Practice Areas
                  </Link>
                </motion.div>
              </div>
            </HeroText>
            <HeroText delay={0.7}>
              <p className="mt-8 text-white/30 text-sm flex items-center gap-1.5">
                <Clock size={14} className="text-[#3B82F6]" /> Limited free consultation slots available this week
              </p>
            </HeroText>
          </div>

          {/* Lead Capture Form */}
          <motion.div
            className="bg-white rounded-2xl p-8 shadow-2xl shadow-black/20"
            initial={{ opacity: 0, x: 60, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9, ease, delay: 0.3 }}
          >
            <h2 className="text-[#0F172A] font-black text-xl mb-1">Talk to a Lawyer Now</h2>
            <p className="text-gray-400 text-sm mb-6">Free, confidential 30-minute consultation.</p>
            <form className="flex flex-col gap-4">
              <input type="text" placeholder="Your Full Name" className="border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent transition-shadow" />
              <input type="email" placeholder="Email Address" className="border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent transition-shadow" />
              <input type="tel" placeholder="Phone Number" className="border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent transition-shadow" />
              <select className="border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#3B82F6]">
                <option value="">Select Legal Issue</option>
                <option>Corporate Law</option>
                <option>Litigation &amp; Dispute Resolution</option>
                <option>Intellectual Property</option>
                <option>Employment Law</option>
                <option>Real Estate &amp; Property Law</option>
                <option>Taxation &amp; Compliance</option>
                <option>Other</option>
              </select>
              <textarea placeholder="Brief description of your matter (optional)" rows={3} className="border border-gray-200 rounded-lg px-4 py-3 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent transition-shadow" />
              <motion.button type="submit" className="w-full bg-[#0F172A] text-white font-semibold py-3.5 rounded-lg text-sm" whileHover={{ backgroundColor: "#1E293B", scale: 1.01 }} whileTap={{ scale: 0.98 }} transition={{ duration: 0.15 }}>
                Request Free Consultation
              </motion.button>
            </form>
            <p className="text-xs text-gray-400 mt-3 text-center">Your information is 100% confidential.</p>
          </motion.div>
        </div>
      </section>

      {/* ── Stats Bar ─────────────────────────────────────────────── */}
      <section className="bg-[#1E293B] border-y border-white/5">
        <StaggerChildren className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-2 lg:grid-cols-4 gap-6" stagger={0.15}>
          {trustStats.map((stat) => (
            <StaggerItem key={stat.label}>
              <div className="text-center">
                <p className="text-3xl font-black text-[#3B82F6]">
                  <CountUp target={stat.value} suffix={stat.suffix} duration={2} />
                </p>
                <p className="text-white/50 text-sm font-medium mt-1">{stat.label}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </section>

      {/* ── Value Proposition ─────────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <FadeUp>
              <p className="text-[#3B82F6] text-xs font-semibold uppercase tracking-widest mb-2">Why Invictus</p>
              <h2 className="text-3xl md:text-4xl font-black text-[#0F172A]">The Invictus Difference</h2>
              <DrawLine className="w-16 mx-auto mt-4" />
            </FadeUp>
          </div>
          <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" stagger={0.08}>
            {[
              { title: "Proven Track Record", desc: "With 500+ clients and a 98% success rate, our results speak louder than promises." },
              { title: "Client-First Philosophy", desc: "Every strategy is built around your unique needs, not a generic playbook." },
              { title: "Multidisciplinary Expertise", desc: "From corporate boardrooms to courtrooms, our team covers every legal frontier." },
              { title: "Transparent Communication", desc: "You'll always know where you stand. No legal jargon, no surprises." },
              { title: "Swift & Strategic Action", desc: "We combine speed with precision to safeguard your time and interests." },
              { title: "Confidential & Trusted", desc: "Your matter is treated with the utmost discretion and professional integrity." },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <motion.div className="flex gap-4 p-5 rounded-xl hover:bg-[#F8FAFC] transition-colors" whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
                  <CheckCircle2 className="shrink-0 mt-1 text-[#3B82F6]" size={20} />
                  <div>
                    <h3 className="font-bold text-[#0F172A] text-base mb-1">{item.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ── Practice Areas ────────────────────────────────────────── */}
      <section className="section-padding bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <FadeUp>
              <p className="text-[#3B82F6] text-xs font-semibold uppercase tracking-widest mb-2">What We Do</p>
              <h2 className="text-3xl md:text-4xl font-black text-[#0F172A]">Areas of Practice</h2>
              <p className="text-gray-400 mt-3 text-sm max-w-xl mx-auto">Comprehensive legal services across every domain that matters to your business and personal life.</p>
              <DrawLine className="w-16 mx-auto mt-4" />
            </FadeUp>
          </div>
          <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" stagger={0.1}>
            {practiceAreas.map((area) => (
              <StaggerItem key={area.slug}>
                <motion.div
                  whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(59,130,246,0.12)" }}
                  transition={{ duration: 0.25 }}
                >
                  <Link href={`/practice-areas/${area.slug}`} className="group bg-white rounded-xl p-7 shadow-sm border border-gray-100 hover:border-[#3B82F6]/30 transition-colors block h-full">
                    <motion.div
                      className="w-12 h-12 rounded-lg bg-[#3B82F6]/8 flex items-center justify-center mb-4"
                      whileHover={{ backgroundColor: "#3B82F6", rotate: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <area.icon className="text-[#3B82F6] group-hover:text-white transition-colors" size={22} />
                    </motion.div>
                    <h3 className="font-bold text-[#0F172A] text-base mb-2">{area.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{area.desc}</p>
                    <div className="mt-4 flex items-center gap-1 text-[#3B82F6] text-sm font-semibold">
                      Learn more
                      <motion.span animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}>
                        <ArrowRight size={14} />
                      </motion.span>
                    </div>
                  </Link>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerChildren>
          <FadeUp className="text-center mt-10">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link href="/practice-areas" className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#0F172A] text-[#0F172A] font-semibold rounded-lg hover:bg-[#0F172A] hover:text-white transition-colors text-sm">
                View All Practice Areas
              </Link>
            </motion.div>
          </FadeUp>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────────────── */}
      <section className="section-padding bg-[#0F172A]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <FadeUp>
              <p className="text-[#3B82F6] text-xs font-semibold uppercase tracking-widest mb-2">Client Stories</p>
              <h2 className="text-3xl md:text-4xl font-black text-white">What Our Clients Say</h2>
              <DrawLine className="w-16 mx-auto mt-4 bg-[#3B82F6]/40" />
            </FadeUp>
          </div>
          <StaggerChildren className="grid md:grid-cols-3 gap-8" stagger={0.15}>
            {testimonials.map((t) => (
              <StaggerItem key={t.name}>
                <motion.div
                  className="bg-white/5 border border-white/8 rounded-xl p-7 h-full"
                  whileHover={{ backgroundColor: "rgba(59,130,246,0.08)", borderColor: "rgba(59,130,246,0.3)", y: -4 }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + i * 0.08, duration: 0.3, ease: "backOut" }}
                      >
                        <Star size={14} className="text-[#3B82F6] fill-[#3B82F6]" />
                      </motion.div>
                    ))}
                  </div>
                  <p className="text-white/70 text-sm leading-relaxed mb-5 italic">&ldquo;{t.text}&rdquo;</p>
                  <div>
                    <p className="text-white font-semibold text-sm">{t.name}</p>
                    <p className="text-white/40 text-xs">{t.role}</p>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerChildren>
          <FadeIn className="text-center mt-8">
            <p className="text-white/30 text-sm">Join 500+ clients who trust Invictus Law Practice</p>
          </FadeIn>
        </div>
      </section>

      {/* ── CTA Banner ───────────────────────────────────────────── */}
      <section className="section-padding bg-gradient-to-br from-[#1D4ED8] to-[#3B82F6]">
        <div className="max-w-3xl mx-auto text-center">
          <ScaleIn>
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="inline-block mb-4"
            >
              <Scale size={40} className="text-white opacity-80" />
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              Your Legal Matter Deserves Expert Attention
            </h2>
            <p className="text-white/80 mb-8">Schedule your free consultation today. Our team is ready to listen, advise, and act.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-[#1D4ED8] font-semibold rounded-lg hover:bg-white/90 transition-colors">
                  Book Free Consultation <ArrowRight size={16} />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <a href="tel:+911234567890" className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/15 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/25 transition-colors">
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
