"use client";

import Link from "next/link";
import { ArrowRight, Award, Target, Heart, Shield, Quote } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  FadeUp,
  SlideInLeft,
  SlideInRight,
  StaggerChildren,
  StaggerItem,
  DrawLine,
  ScaleIn,
  HeroText,
  CountUp,
} from "@/components/animations";

const ease = [0.22, 1, 0.36, 1] as const;

const milestones = [
  { year: "2009", title: "Founded", desc: "Invictus Law Practice was established with a singular conviction: every client deserves fearless, expert, personalized legal counsel.", side: "right" },
  { year: "2012", title: "First 100 Clients", desc: "Reached 100 satisfied clients across corporate and high-stakes litigation matters — all through word of mouth and referrals.", side: "left" },
  { year: "2016", title: "Expanded Practice Areas", desc: "Added dedicated Intellectual Property and Employment Law divisions, establishing full-service capabilities.", side: "right" },
  { year: "2020", title: "National Recognition", desc: "Recognized among the top boutique law firms in India by leading legal publications.", side: "left" },
  { year: "2024", title: "500+ Clients Served", desc: "Crossed the 500-client milestone with a 98% client satisfaction rate and growing presence across India.", side: "right" },
];

const values = [
  { icon: Target, title: "Excellence", desc: "We pursue the highest standard of legal practice in every matter we handle, without exception." },
  { icon: Heart, title: "Client-Centricity", desc: "Your goals are our goals. Every strategy is meticulously tailored to your unique situation." },
  { icon: Shield, title: "Integrity", desc: "We operate with complete transparency, honesty, and unwavering ethical commitment." },
  { icon: Award, title: "Results", desc: "We measure our success exclusively by the outcomes we deliver for our clients." },
];

const stats = [
  { value: 15, suffix: "+", label: "Years" },
  { value: 500, suffix: "+", label: "Clients Served" },
  { value: 98, suffix: "%", label: "Satisfaction Rate" },
  { value: 6, suffix: "", label: "Practice Areas" },
];

function TimelineItem({
  milestone,
  index,
}: {
  milestone: (typeof milestones)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const isLeft = milestone.side === "left";

  return (
    <div ref={ref} className="relative grid md:grid-cols-[1fr_auto_1fr] gap-0 items-center">
      {/* Left content */}
      <div className={`md:pr-12 pb-8 md:pb-0 ${isLeft ? "md:text-right" : "md:invisible"}`}>
        {isLeft && (
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease, delay: 0.1 }}
          >
            <p className="text-[#FEDDDD] font-black text-xs uppercase tracking-widest mb-2">
              {milestone.year}
            </p>
            <h3
              className="text-white font-black text-xl mb-2"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {milestone.title}
            </h3>
            <p className="text-white/50 text-sm leading-relaxed">{milestone.desc}</p>
          </motion.div>
        )}
      </div>

      {/* Center dot */}
      <div className="flex flex-col items-center z-10">
        <motion.div
          className="w-12 h-12 rounded-full bg-[#FEDDDD] flex items-center justify-center border-4 border-[#02334E] shadow-lg relative"
          initial={{ scale: 0, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.5, ease: "backOut", delay: 0.2 }}
          whileHover={{ scale: 1.2 }}
        >
          <span
            className="text-[#02334E] font-black text-[10px] leading-none text-center"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {milestone.year.slice(2)}
          </span>
          {/* Pulse ring */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-[#FEDDDD]"
            animate={inView ? { scale: [1, 1.6, 1.6], opacity: [0.6, 0, 0] } : {}}
            transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: index * 0.3 }}
          />
        </motion.div>
      </div>

      {/* Right content */}
      <div className={`md:pl-12 ${!isLeft ? "" : "md:invisible"}`}>
        {!isLeft && (
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease, delay: 0.1 }}
          >
            <p className="text-[#FEDDDD] font-black text-xs uppercase tracking-widest mb-2">
              {milestone.year}
            </p>
            <h3
              className="text-white font-black text-xl mb-2"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {milestone.title}
            </h3>
            <p className="text-white/50 text-sm leading-relaxed">{milestone.desc}</p>
          </motion.div>
        )}
      </div>
    </div>
  );
}

function TimelineConnector({ index, total }: { index: number; total: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  if (index >= total - 1) return null;
  return (
    <div ref={ref} className="relative grid md:grid-cols-[1fr_auto_1fr]">
      <div />
      <div className="flex justify-center">
        <motion.div
          className="w-px bg-gradient-to-b from-[#FEDDDD]/40 to-[#FEDDDD]/10 h-16"
          initial={{ scaleY: 0, originY: 0 }}
          animate={inView ? { scaleY: 1 } : {}}
          transition={{ duration: 0.5, ease, delay: 0.3 }}
        />
      </div>
      <div />
    </div>
  );
}

export default function AboutPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section
        className="relative bg-[#02334E] text-white py-32 px-6 overflow-hidden"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(254,221,221,0.15) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      >
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 120%, rgba(254,221,221,0.07) 0%, transparent 70%)",
          }}
        />
        {/* Ghost watermark */}
        <div
          className="pointer-events-none select-none absolute inset-0 flex items-center justify-end pr-10 overflow-hidden"
          aria-hidden
        >
          <span
            className="font-black text-white leading-none"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(5rem, 16vw, 16rem)",
              opacity: 0.03,
              letterSpacing: "-0.04em",
            }}
          >
            INVICTUS
          </span>
        </div>

        <div className="relative max-w-4xl mx-auto text-center">
          <HeroText delay={0.05}>
            <p className="text-[#FEDDDD] text-[10px] font-bold uppercase tracking-[0.25em] mb-5">
              About Us
            </p>
          </HeroText>
          <HeroText delay={0.18}>
            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-5"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Who We Are
            </h1>
          </HeroText>
          <div className="flex justify-center mb-6">
            <DrawLine className="w-20" />
          </div>
          <motion.p
            className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.45 }}
          >
            Invictus Law Practice is a full-service law firm built on the principle that every client deserves fearless, expert, and personalized legal representation.
          </motion.p>
        </div>
      </section>

      {/* ── STATS BAR ────────────────────────────────────────── */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((s, i) => (
              <FadeUp key={s.label} delay={i * 0.1}>
                <p
                  className="text-4xl md:text-5xl font-black text-[#02334E] mb-1"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  <CountUp target={s.value} suffix={s.suffix} duration={2.2} />
                </p>
                <div className="w-5 h-[2px] bg-[#FEDDDD] mx-auto mb-2 rounded-full" />
                <p className="text-[#64748B] text-xs font-semibold uppercase tracking-wider">
                  {s.label}
                </p>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOUNDER ──────────────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <SlideInLeft>
            <div className="relative">
              {/* Decorative frame */}
              <motion.div
                className="absolute -top-4 -left-4 w-2/3 h-2/3 border-2 border-[#FEDDDD] rounded-2xl"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease, delay: 0.3 }}
              />
              <div className="relative bg-[#02334E] rounded-2xl aspect-[4/3] flex items-center justify-center overflow-hidden">
                {/* Dot texture inside */}
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle, rgba(254,221,221,0.07) 1px, transparent 1px)",
                    backgroundSize: "24px 24px",
                  }}
                />
                <div className="relative text-center p-10">
                  <motion.div
                    className="w-28 h-28 rounded-full bg-[#FEDDDD]/10 border-2 border-[#FEDDDD]/30 mx-auto mb-5 flex items-center justify-center"
                    whileHover={{ scale: 1.08, rotate: 5, borderColor: "rgba(254,221,221,0.7)" }}
                    transition={{ duration: 0.3 }}
                  >
                    <span
                      className="text-[#FEDDDD] text-4xl font-black"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      IL
                    </span>
                  </motion.div>
                  <p className="text-white font-bold text-base">Founder & Managing Partner</p>
                  <p className="text-white/40 text-sm mt-1">Invictus Law Practice</p>
                  {/* Quote decoration */}
                  <Quote
                    className="text-[#FEDDDD]/20 mx-auto mt-6"
                    size={36}
                  />
                </div>
              </div>
            </div>
          </SlideInLeft>

          <SlideInRight>
            <p className="text-[#02334E]/40 text-[10px] font-bold uppercase tracking-[0.25em] mb-3">
              Our Founder
            </p>
            <h2
              className="text-3xl md:text-4xl font-black text-[#0A1628] mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              A Vision for Justice
            </h2>
            <div className="w-12 h-[2px] bg-[#FEDDDD] mb-7 rounded-full" />

            <div className="space-y-4 mb-8">
              <motion.p
                className="text-[#64748B] leading-relaxed text-[15px]"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease, delay: 0.1 }}
              >
                The founding of Invictus Law Practice was driven by a singular conviction: that every individual and business deserves access to the highest calibre of legal expertise.
              </motion.p>
              <motion.p
                className="text-[#64748B] leading-relaxed text-[15px]"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease, delay: 0.2 }}
              >
                With over 15 years of practice spanning corporate transactions, high-stakes litigation, and regulatory compliance, our founder built Invictus on the pillars of integrity, strategic thinking, and an unrelenting drive to achieve results.
              </motion.p>
              <motion.p
                className="text-[#64748B] leading-relaxed text-[15px]"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease, delay: 0.3 }}
              >
                The firm&apos;s name — derived from the Latin word for &ldquo;unconquered&rdquo; — reflects our commitment to standing firm for every client, in every matter.
              </motion.p>
            </div>

            <motion.div
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-[#02334E] font-bold text-sm group"
              >
                Schedule a Consultation{" "}
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </motion.div>
          </SlideInRight>
        </div>
      </section>

      {/* ── VALUES ───────────────────────────────────────────── */}
      <section className="section-padding bg-[#F8FAFC]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <FadeUp>
              <p className="text-[#02334E]/40 text-[10px] font-bold uppercase tracking-[0.25em] mb-3">
                What Drives Us
              </p>
              <h2
                className="text-3xl md:text-4xl font-black text-[#0A1628]"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Our Mission & Values
              </h2>
              <div className="w-12 h-[2px] bg-[#FEDDDD] mx-auto mt-5 rounded-full" />
            </FadeUp>
          </div>

          <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" stagger={0.1}>
            {values.map((v) => (
              <StaggerItem key={v.title}>
                <motion.div
                  className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-center h-full group cursor-default"
                  whileHover={{ y: -10, boxShadow: "0 24px 48px rgba(2,51,78,0.12)" }}
                  transition={{ duration: 0.3, ease }}
                >
                  <motion.div
                    className="w-16 h-16 rounded-2xl bg-[#02334E] flex items-center justify-center mx-auto mb-5"
                    whileHover={{ rotate: 12, scale: 1.1 }}
                    transition={{ duration: 0.25 }}
                  >
                    <v.icon className="text-[#FEDDDD]" size={26} />
                  </motion.div>
                  <h3
                    className="font-black text-[#0A1628] mb-3 text-base"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {v.title}
                  </h3>
                  <p className="text-[#64748B] text-sm leading-relaxed">{v.desc}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ── TIMELINE ─────────────────────────────────────────── */}
      <section className="section-padding bg-[#02334E] relative overflow-hidden">
        {/* Background texture */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(254,221,221,0.06) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(254,221,221,0.04) 0%, transparent 70%)",
          }}
        />

        <div className="relative max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <FadeUp>
              <p className="text-[#FEDDDD] text-[10px] font-bold uppercase tracking-[0.25em] mb-3">
                Our Journey
              </p>
              <h2
                className="text-3xl md:text-4xl font-black text-white"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Key Milestones
              </h2>
              <div className="w-12 h-[2px] bg-[#FEDDDD] mx-auto mt-5 rounded-full" />
            </FadeUp>
          </div>

          <div>
            {milestones.map((m, i) => (
              <div key={m.year}>
                <TimelineItem milestone={m} index={i} />
                <TimelineConnector index={i} total={milestones.length} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="max-w-2xl mx-auto text-center">
          <ScaleIn>
            <p className="text-[#02334E]/40 text-[10px] font-bold uppercase tracking-[0.25em] mb-4">
              Work With Us
            </p>
            <h2
              className="text-3xl md:text-4xl font-black text-[#02334E] mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Ready to Experience<br />the Invictus Difference?
            </h2>
            <div className="w-12 h-[2px] bg-[#FEDDDD] mx-auto mb-7 rounded-full" />
            <p className="text-[#64748B] mb-10 leading-relaxed">
              Book your free consultation today and let&apos;s discuss how we can help you.
            </p>
            <motion.div
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#02334E] text-white font-bold rounded-xl hover:bg-[#011E30] transition-colors text-sm shadow-lg group"
              >
                Get Started{" "}
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </motion.div>
          </ScaleIn>
        </div>
      </section>
    </>
  );
}
