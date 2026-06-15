"use client";

import Link from "next/link";
import { Briefcase, Scale, Lightbulb, Users, Building2, FileText, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import {
  FadeUp,
  StaggerChildren,
  StaggerItem,
  ScaleIn,
  HeroText,
  CountUp,
  DrawLine,
} from "@/components/animations";

const areas = [
  {
    label: "Corporate Law",
    slug: "corporate-law",
    icon: Briefcase,
    desc: "M&A, contracts, regulatory compliance, and corporate governance.",
  },
  {
    label: "Litigation & Dispute Resolution",
    slug: "litigation",
    icon: Scale,
    desc: "High-stakes courtroom advocacy and alternative dispute resolution.",
  },
  {
    label: "Intellectual Property",
    slug: "intellectual-property",
    icon: Lightbulb,
    desc: "Patents, trademarks, copyrights, and IP strategy.",
  },
  {
    label: "Employment Law",
    slug: "employment-law",
    icon: Users,
    desc: "Workplace rights, contracts, and dispute resolution.",
  },
  {
    label: "Real Estate & Property Law",
    slug: "real-estate",
    icon: Building2,
    desc: "Transactions, title disputes, and property development.",
  },
  {
    label: "Taxation & Compliance",
    slug: "taxation",
    icon: FileText,
    desc: "Tax planning, compliance, and dispute representation.",
  },
];

const stats = [
  { value: 15, suffix: "+", label: "Years Experience" },
  { value: 500, suffix: "+", label: "Cases Won" },
  { value: 6, suffix: "", label: "Practice Areas" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
];

const cardVariants = {
  rest: {
    backgroundColor: "#ffffff",
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
  hover: {
    backgroundColor: "#02334E",
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
};

const textVariants = {
  rest: { color: "#0A1628" },
  hover: { color: "#ffffff", transition: { duration: 0.35 } },
};

const descVariants = {
  rest: { color: "#64748B" },
  hover: { color: "rgba(255,255,255,0.75)", transition: { duration: 0.35 } },
};

const iconVariants = {
  rest: { scale: 1, color: "#02334E", backgroundColor: "rgba(2,51,78,0.07)" },
  hover: {
    scale: 1.18,
    color: "#FEDDDD",
    backgroundColor: "rgba(254,221,221,0.15)",
    transition: { duration: 0.35, type: "spring", stiffness: 300 },
  },
};

const arrowVariants = {
  rest: { opacity: 0, y: 8 },
  hover: { opacity: 1, y: 0, transition: { duration: 0.3, delay: 0.05 } },
};

const borderVariants = {
  rest: { borderColor: "rgba(226,232,240,1)" },
  hover: { borderColor: "rgba(2,51,78,0)", transition: { duration: 0.3 } },
};

export default function PracticeAreasPage() {
  return (
    <>
      {/* ── Hero ───────────────────────────────────────────────── */}
      <section
        className="relative bg-[#02334E] text-white py-32 px-6 overflow-hidden"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(254,221,221,0.18) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      >
        {/* subtle blush glow */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 120%, rgba(254,221,221,0.07) 0%, transparent 70%)",
          }}
        />
        <div className="relative max-w-4xl mx-auto text-center">
          <FadeUp delay={0.05}>
            <p className="text-[#FEDDDD] text-xs font-semibold uppercase tracking-[0.2em] mb-5">
              What We Do
            </p>
          </FadeUp>

          <HeroText delay={0.15}>
            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-black mb-4 leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Our Practice Areas
            </h1>
          </HeroText>

          <div className="flex justify-center my-5">
            <DrawLine className="w-24" />
          </div>

          <FadeUp delay={0.45}>
            <p className="text-white/60 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              Comprehensive legal expertise across every domain — delivered by
              specialists who know your industry as well as the law.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── Cards grid ─────────────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <StaggerChildren
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            stagger={0.1}
            delayStart={0.1}
          >
            {areas.map((area) => {
              const Icon = area.icon;
              return (
                <StaggerItem key={area.slug}>
                  <motion.div
                    className="relative rounded-xl border overflow-hidden shadow-sm h-full cursor-pointer"
                    variants={cardVariants}
                    initial="rest"
                    whileHover="hover"
                    animate="rest"
                    style={{ borderColor: "rgba(226,232,240,1)" }}
                  >
                    {/* blush top accent line */}
                    <div className="h-[3px] bg-[#FEDDDD] w-full" />

                    <motion.div
                      className="p-8 flex flex-col h-full"
                      variants={borderVariants}
                    >
                      {/* Icon */}
                      <motion.div
                        className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                        variants={iconVariants}
                      >
                        <Icon size={26} />
                      </motion.div>

                      {/* Title */}
                      <motion.h2
                        className="text-xl font-black mb-3"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                        variants={textVariants}
                      >
                        {area.label}
                      </motion.h2>

                      {/* Description */}
                      <motion.p
                        className="text-sm leading-relaxed mb-6 flex-1"
                        variants={descVariants}
                      >
                        {area.desc}
                      </motion.p>

                      {/* "Explore →" link fades in on hover */}
                      <motion.div variants={arrowVariants}>
                        <Link
                          href={`/practice-areas/${area.slug}`}
                          className="inline-flex items-center gap-2 text-[#FEDDDD] text-sm font-semibold"
                        >
                          Explore <ArrowRight size={15} />
                        </Link>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                </StaggerItem>
              );
            })}
          </StaggerChildren>
        </div>
      </section>

      {/* ── Stats row ──────────────────────────────────────────── */}
      <section
        className="relative bg-[#02334E] py-24 px-6 overflow-hidden"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(254,221,221,0.1) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      >
        <div className="relative max-w-5xl mx-auto">
          <ScaleIn>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
              {stats.map((s, i) => (
                <div key={s.label} className="flex flex-col items-center gap-2">
                  <FadeUp delay={i * 0.1}>
                    <p
                      className="text-5xl md:text-6xl font-black text-white mb-1"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      <CountUp
                        target={s.value}
                        suffix={s.suffix}
                        duration={2.2}
                      />
                    </p>
                    <div className="w-6 h-[3px] bg-[#FEDDDD] mx-auto mb-2 rounded-full" />
                    <p className="text-white/60 text-sm font-medium uppercase tracking-wider">
                      {s.label}
                    </p>
                  </FadeUp>
                </div>
              ))}
            </div>
          </ScaleIn>
        </div>
      </section>
    </>
  );
}
