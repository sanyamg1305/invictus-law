"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import {
  FadeUp,
  StaggerChildren,
  StaggerItem,
  ScaleIn,
  HeroText,
  DrawLine,
} from "@/components/animations";

const team = [
  {
    name: "Arjun Mehta",
    role: "Senior Partner",
    specialty: "Litigation & Corporate Law",
    bio: "20+ years leading complex commercial litigation and M&A transactions. Arjun has represented Fortune 500 companies and sovereign entities across High Courts and international arbitration forums.",
    bioShort: "20+ years leading complex commercial litigation and M&A transactions.",
    tags: ["Corporate Law", "Litigation", "M&A"],
    initials: "AM",
  },
  {
    name: "Priya Sharma",
    role: "Partner",
    specialty: "Litigation",
    bio: "Expert in high-stakes dispute resolution with a 95% success rate in appellate courts. Priya is known for her meticulous preparation and persuasive advocacy across civil and constitutional matters.",
    bioShort: "Expert in high-stakes dispute resolution with a 95% success rate in appellate courts.",
    tags: ["Litigation", "Appeals", "Arbitration"],
    initials: "PS",
  },
  {
    name: "Rohan Kapoor",
    role: "Associate Partner",
    specialty: "Intellectual Property",
    bio: "Specialist in intellectual property, protecting brands and innovations for Fortune 500 clients. Rohan has successfully prosecuted over 300 patents and managed global IP portfolios.",
    bioShort: "Specialist in intellectual property, protecting brands and innovations for Fortune 500 clients.",
    tags: ["IP Law", "Patents", "Trademarks"],
    initials: "RK",
  },
  {
    name: "Neha Agarwal",
    role: "Senior Associate",
    specialty: "Employment Law",
    bio: "Employment and labor law specialist advising corporates on HR compliance and disputes. Neha has handled over 200 workplace dispute matters and drafted HR frameworks for leading MNCs.",
    bioShort: "Employment and labor law specialist advising corporates on HR compliance and disputes.",
    tags: ["Employment Law", "Labor", "Compliance"],
    initials: "NA",
  },
  {
    name: "Vikram Singh",
    role: "Associate",
    specialty: "Real Estate & Property Law",
    bio: "Real estate and property law expert handling complex transactions and title disputes. Vikram advises developers, investors, and individuals on RERA compliance and land acquisition matters.",
    bioShort: "Real estate and property law expert handling complex transactions and title disputes.",
    tags: ["Real Estate", "Property", "Transactions"],
    initials: "VS",
  },
  {
    name: "Ananya Joshi",
    role: "Tax Counsel",
    specialty: "Taxation & Compliance",
    bio: "Taxation and compliance expert, formerly with Big 4, advising on corporate and international tax. Ananya brings a rare combination of accounting precision and legal advocacy to every engagement.",
    bioShort: "Taxation and compliance expert, formerly with Big 4, advising on corporate and international tax.",
    tags: ["Taxation", "Compliance", "International Tax"],
    initials: "AJ",
  },
];

/* Dot pattern overlay for avatar section */
function BlushDots() {
  return (
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        backgroundImage:
          "radial-gradient(circle, rgba(254,221,221,0.3) 1.5px, transparent 1.5px)",
        backgroundSize: "18px 18px",
      }}
    />
  );
}

export default function TeamPage() {
  return (
    <>
      {/* ── Hero ───────────────────────────────────────────────── */}
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
              "radial-gradient(ellipse 80% 60% at 50% 120%, rgba(254,221,221,0.06) 0%, transparent 70%)",
          }}
        />
        <div className="relative max-w-4xl mx-auto text-center">
          <FadeUp delay={0.05}>
            <p className="text-[#FEDDDD] text-xs font-semibold uppercase tracking-[0.2em] mb-5">
              The People Behind the Practice
            </p>
          </FadeUp>

          <HeroText delay={0.15}>
            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-black mb-4 leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Meet Our Team
            </h1>
          </HeroText>

          <div className="flex justify-center my-5">
            <DrawLine className="w-24" />
          </div>

          <FadeUp delay={0.45}>
            <p className="text-white/60 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              A collective of dedicated legal minds — each a specialist, all
              united by an uncompromising commitment to client outcomes.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── Team grid ──────────────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <StaggerChildren
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            stagger={0.12}
            delayStart={0.05}
          >
            {team.map((member) => (
              <StaggerItem key={member.initials}>
                <motion.div
                  className="relative bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 h-full"
                  whileHover="hover"
                  initial="rest"
                  animate="rest"
                >
                  {/* Avatar section */}
                  <div className="relative bg-[#02334E] h-44 flex items-center justify-center overflow-hidden">
                    <BlushDots />
                    <motion.div
                      className="relative z-10 w-24 h-24 rounded-full bg-white/10 border-2 border-[#FEDDDD]/40 flex items-center justify-center shadow-2xl"
                      variants={{
                        rest: { scale: 1, rotate: 0 },
                        hover: {
                          scale: 1.08,
                          rotate: -3,
                          transition: { duration: 0.4, type: "spring", stiffness: 200 },
                        },
                      }}
                    >
                      <span
                        className="text-white text-3xl font-black select-none"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                      >
                        {member.initials}
                      </span>
                    </motion.div>
                    {/* blush dot accent */}
                    <div className="absolute top-4 right-5 w-2 h-2 rounded-full bg-[#FEDDDD] opacity-70" />
                    <div className="absolute bottom-5 left-6 w-[3px] h-[3px] rounded-full bg-[#FEDDDD] opacity-50" />
                  </div>

                  {/* Card body */}
                  <div className="p-6 relative overflow-hidden">
                    <h3
                      className="text-lg font-black text-[#02334E] mb-0.5"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {member.name}
                    </h3>
                    <p className="text-[#64748B] text-xs font-semibold uppercase tracking-wider mb-1">
                      {member.role}
                    </p>
                    <p className="text-[#02334E]/70 text-xs font-medium mb-3 italic">
                      {member.specialty}
                    </p>
                    <p className="text-[#64748B] text-sm leading-relaxed line-clamp-2 mb-4">
                      {member.bioShort}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {member.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 bg-[#02334E]/5 text-[#02334E] text-xs font-medium rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Hover overlay — slides up from bottom */}
                    <motion.div
                      className="absolute inset-0 bg-[#02334E] p-6 flex flex-col justify-between"
                      variants={{
                        rest: { y: "100%", opacity: 0 },
                        hover: {
                          y: 0,
                          opacity: 1,
                          transition: { duration: 0.42, ease: [0.22, 1, 0.36, 1] },
                        },
                      }}
                    >
                      <div>
                        <p
                          className="text-white font-black text-base mb-1"
                          style={{ fontFamily: "'Playfair Display', serif" }}
                        >
                          {member.name}
                        </p>
                        <p className="text-[#FEDDDD] text-xs font-semibold uppercase tracking-wider mb-4">
                          {member.role} · {member.specialty}
                        </p>
                        <p className="text-white/75 text-sm leading-relaxed">
                          {member.bio}
                        </p>
                      </div>

                      <div>
                        <div className="w-8 h-[2px] bg-[#FEDDDD] mb-4 rounded-full" />
                        <div className="flex flex-wrap gap-1.5 mb-5">
                          {member.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2.5 py-0.5 border border-[#FEDDDD]/40 text-[#FEDDDD] text-xs font-medium rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <Link
                          href="/contact"
                          className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-[#02334E] text-sm font-semibold rounded-lg hover:bg-[#FEDDDD] transition-colors"
                        >
                          Schedule Consultation <ArrowRight size={14} />
                        </Link>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ── Join Our Team CTA ───────────────────────────────────── */}
      <section
        className="relative bg-[#02334E] py-28 px-6 overflow-hidden"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(254,221,221,0.12) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      >
        <div className="relative max-w-2xl mx-auto text-center">
          <ScaleIn>
            <FadeUp delay={0.05}>
              <p className="text-[#FEDDDD] text-xs font-semibold uppercase tracking-[0.2em] mb-4">
                Careers
              </p>
            </FadeUp>
            <h2
              className="text-4xl md:text-5xl font-black text-white mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Be Part of Something Extraordinary
            </h2>
            <div className="flex justify-center my-5">
              <DrawLine className="w-20" />
            </div>
            <p className="text-white/60 text-lg mb-10 leading-relaxed">
              We are always looking for exceptional legal talent to join our
              growing practice. If you are driven by excellence and client impact,
              we want to hear from you.
            </p>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/careers"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#02334E] font-semibold rounded-lg hover:bg-[#FEDDDD] transition-colors text-sm"
              >
                View Open Positions <ArrowRight size={16} />
              </Link>
            </motion.div>
          </ScaleIn>
        </div>
      </section>
    </>
  );
}
