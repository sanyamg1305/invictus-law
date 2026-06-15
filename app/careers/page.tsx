"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Trophy, Heart, GraduationCap, Users, ChevronDown, ArrowRight, FileText, Search, MessageSquare, CheckCircle } from "lucide-react";
import {
  FadeUp,
  HeroText,
  DrawLine,
  StaggerChildren,
  StaggerItem,
  ScaleIn,
} from "@/components/animations";

const cultureBenefits = [
  {
    icon: Trophy,
    title: "Excellence Culture",
    desc: "We pursue perfection in every brief, argument, and strategy.",
  },
  {
    icon: Heart,
    title: "Work-Life Balance",
    desc: "We value wellbeing as much as billable hours.",
  },
  {
    icon: GraduationCap,
    title: "Continuous Learning",
    desc: "Regular workshops, seminars, and mentorship programs.",
  },
  {
    icon: Users,
    title: "Collaborative Team",
    desc: "A tight-knit team that supports each other to win.",
  },
];

const openPositions = [
  {
    title: "Senior Litigation Associate",
    department: "Litigation Department",
    type: "Full-time",
    location: "Mumbai",
    description: "Lead complex commercial litigation matters and contribute to high-profile cases.",
    requirements: [
      "5+ years litigation experience",
      "Strong research and writing skills",
      "Experience in commercial/corporate disputes",
    ],
  },
  {
    title: "Corporate Law Associate",
    department: "Corporate Department",
    type: "Full-time",
    location: "Mumbai",
    description: "Advise corporate clients on M&A, contracts, and governance.",
    requirements: [
      "3+ years corporate law experience",
      "M&A transaction experience",
      "Excellent drafting skills",
    ],
  },
  {
    title: "IP Law Specialist",
    department: "Intellectual Property",
    type: "Full-time",
    location: "Mumbai",
    description: "Manage patent and trademark portfolios for leading companies.",
    requirements: [
      "IP law background",
      "Patent prosecution experience",
      "Technical degree preferred",
    ],
  },
  {
    title: "Tax Counsel",
    department: "Taxation & Compliance",
    type: "Full-time",
    location: "Mumbai",
    description: "Provide strategic tax planning and compliance advice.",
    requirements: [
      "CA or LLB with tax specialization",
      "4+ years in tax practice",
      "International tax knowledge preferred",
    ],
  },
];

const applicationSteps = [
  { step: "01", icon: FileText, title: "Submit Application", desc: "Send your CV and cover letter via the Apply Now button." },
  { step: "02", icon: Search, title: "Initial Screening", desc: "Our HR team reviews applications and contacts shortlisted candidates within 5 days." },
  { step: "03", icon: MessageSquare, title: "Interview", desc: "Two rounds — a technical legal assessment and a partner-level interview." },
  { step: "04", icon: CheckCircle, title: "Offer", desc: "Selected candidates receive an offer letter with detailed compensation and terms." },
];

function JobAccordion({ job, index }: { job: typeof openPositions[0]; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
      className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden"
    >
      <motion.button
        className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 group"
        onClick={() => setOpen(!open)}
        whileHover={{ backgroundColor: "rgba(2,51,78,0.02)" }}
        transition={{ duration: 0.2 }}
      >
        <div className="flex-1 min-w-0">
          <h3
            className="font-bold text-[#0A1628] text-base group-hover:text-[#02334E] transition-colors"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {job.title}
          </h3>
          <div className="flex flex-wrap gap-2 mt-2">
            <span className="text-xs px-2.5 py-1 bg-[#02334E]/8 text-[#02334E] rounded-full font-medium">
              {job.department}
            </span>
            <span className="text-xs px-2.5 py-1 bg-[#FEDDDD]/40 text-[#02334E] rounded-full font-medium">
              {job.type}
            </span>
            <span className="text-xs px-2.5 py-1 bg-gray-50 text-[#64748B] rounded-full font-medium">
              {job.location}
            </span>
          </div>
        </div>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="shrink-0 w-8 h-8 rounded-full bg-[#02334E]/8 flex items-center justify-center"
        >
          <ChevronDown size={16} className="text-[#02334E]" />
        </motion.div>
      </motion.button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: "hidden" }}
          >
            <div className="px-6 pb-6 border-t border-gray-50">
              <div className="pt-4">
                <p className="text-[#64748B] text-sm leading-relaxed mb-4">{job.description}</p>
                <p className="text-xs font-semibold text-[#0A1628] uppercase tracking-wider mb-3">Requirements</p>
                <ul className="space-y-2 mb-5">
                  {job.requirements.map((req) => (
                    <li key={req} className="flex items-center gap-2.5 text-sm text-[#64748B]">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#FEDDDD] shrink-0" />
                      {req}
                    </li>
                  ))}
                </ul>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#02334E] text-white text-sm font-semibold rounded-lg hover:bg-[#011E30] transition-colors"
                  >
                    Apply Now <ArrowRight size={14} />
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function CareersPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#02334E] text-white py-28 px-6 overflow-hidden">
        {/* Dot-grid texture */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "radial-gradient(circle, #FEDDDD 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="relative max-w-4xl mx-auto text-center">
          <HeroText delay={0.05}>
            <p className="text-[#FEDDDD] text-xs font-semibold uppercase tracking-widest mb-4">
              Join Our Team
            </p>
          </HeroText>
          <HeroText delay={0.15}>
            <h1
              className="text-4xl md:text-6xl font-black mb-6 leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Build Your Career
              <br />
              <span className="text-[#FEDDDD]">With Us</span>
            </h1>
          </HeroText>
          <motion.p
            className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
          >
            Join a team where excellence is the standard
          </motion.p>
          <motion.div
            className="mt-8 flex justify-center"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
          >
            <DrawLine className="w-24" />
          </motion.div>
        </div>
      </section>

      {/* Why Join Invictus */}
      <section className="section-padding bg-[#F8FAFC]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <FadeUp delay={0.05}>
              <p className="text-[#02334E] text-xs font-semibold uppercase tracking-widest mb-3">
                Why Invictus
              </p>
            </FadeUp>
            <FadeUp delay={0.15}>
              <h2
                className="text-3xl md:text-4xl font-black text-[#0A1628]"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Why Join Invictus
              </h2>
            </FadeUp>
            <FadeUp delay={0.25}>
              <div className="w-12 h-px bg-[#FEDDDD] mx-auto mt-4" />
            </FadeUp>
          </div>

          <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" stagger={0.12}>
            {cultureBenefits.map((benefit) => (
              <StaggerItem key={benefit.title}>
                <motion.div
                  className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100 text-center h-full"
                  whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(2,51,78,0.12)" }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="w-16 h-16 rounded-full bg-[#02334E] flex items-center justify-center mx-auto mb-5"
                    whileHover={{ rotate: 8, scale: 1.1 }}
                    transition={{ duration: 0.25 }}
                  >
                    <benefit.icon className="text-[#FEDDDD]" size={26} />
                  </motion.div>
                  <h3
                    className="font-bold text-[#0A1628] text-base mb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {benefit.title}
                  </h3>
                  <p className="text-[#64748B] text-sm leading-relaxed">{benefit.desc}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Open Positions */}
      <section className="section-padding bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <FadeUp delay={0.05}>
              <p className="text-[#02334E] text-xs font-semibold uppercase tracking-widest mb-3">
                Opportunities
              </p>
            </FadeUp>
            <FadeUp delay={0.15}>
              <h2
                className="text-3xl md:text-4xl font-black text-[#0A1628]"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Open Positions
              </h2>
            </FadeUp>
            <FadeUp delay={0.25}>
              <div className="w-12 h-px bg-[#FEDDDD] mx-auto mt-4" />
            </FadeUp>
          </div>
          <div className="space-y-4">
            {openPositions.map((job, i) => (
              <JobAccordion key={job.title} job={job} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="section-padding bg-[#02334E]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <FadeUp delay={0.05}>
              <p className="text-[#FEDDDD] text-xs font-semibold uppercase tracking-widest mb-3">
                How to Apply
              </p>
            </FadeUp>
            <FadeUp delay={0.15}>
              <h2
                className="text-3xl md:text-4xl font-black text-white"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Application Process
              </h2>
            </FadeUp>
            <FadeUp delay={0.25}>
              <div className="w-12 h-px bg-[#FEDDDD] mx-auto mt-4" />
            </FadeUp>
          </div>

          <StaggerChildren className="grid sm:grid-cols-2 md:grid-cols-4 gap-6" stagger={0.15}>
            {applicationSteps.map((s) => (
              <StaggerItem key={s.step}>
                <motion.div
                  className="text-center"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="relative mb-5">
                    <motion.div
                      className="w-16 h-16 rounded-full bg-[#FEDDDD]/10 border border-[#FEDDDD]/30 flex items-center justify-center mx-auto"
                      whileHover={{ backgroundColor: "rgba(254,221,221,0.2)", scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      <s.icon className="text-[#FEDDDD]" size={22} />
                    </motion.div>
                    <span
                      className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-[#FEDDDD] flex items-center justify-center text-[#02334E] font-black text-xs"
                      style={{ left: "calc(50% + 14px)" }}
                    >
                      {s.step}
                    </span>
                  </div>
                  <h3
                    className="text-white font-bold text-sm mb-2"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {s.title}
                  </h3>
                  <p className="text-white/50 text-xs leading-relaxed">{s.desc}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section-padding bg-[#02334E] border-t border-white/10">
        <div className="max-w-2xl mx-auto text-center">
          <ScaleIn>
            <p className="text-[#FEDDDD] text-xs font-semibold uppercase tracking-widest mb-4">
              Join Us
            </p>
            <h2
              className="text-3xl md:text-4xl font-black text-white mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Ready to Make Your Mark?
            </h2>
            <p className="text-white/70 mb-8 leading-relaxed">
              We are always open to driven legal professionals who share our values of excellence, integrity, and results.
            </p>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#02334E] font-bold rounded-lg hover:bg-[#FEDDDD] transition-colors text-sm"
              >
                Get In Touch <ArrowRight size={16} />
              </Link>
            </motion.div>
          </ScaleIn>
        </div>
      </section>
    </>
  );
}
