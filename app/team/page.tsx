"use client";

import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { FadeUp, StaggerChildren, StaggerItem, DrawLine, ScaleIn } from "@/components/animations";

const team = [
  { name: "Senior Partner", role: "Corporate Law & M&A", bio: "15+ years of experience advising Fortune 500 companies and startups on complex corporate transactions, mergers, and governance matters.", expertise: ["Corporate Law", "M&A", "Board Governance"], initials: "SP" },
  { name: "Partner – Litigation", role: "Litigation & Dispute Resolution", bio: "A seasoned litigator with a strong record in civil, commercial, and constitutional matters across High Courts and the Supreme Court of India.", expertise: ["Civil Litigation", "Arbitration", "Commercial Disputes"], initials: "PL" },
  { name: "Associate Partner", role: "Intellectual Property", bio: "Specializes in protecting the innovations of tech startups and creative professionals through patents, trademarks, and licensing agreements.", expertise: ["Patents", "Trademarks", "IP Licensing"], initials: "AP" },
  { name: "Senior Associate", role: "Employment & Labour Law", bio: "Advises companies and individuals on employment contracts, workplace disputes, HR policies, and compliance with labour regulations.", expertise: ["Employment Contracts", "Workplace Disputes", "Labour Compliance"], initials: "SA" },
  { name: "Associate", role: "Real Estate & Property Law", bio: "Expert in property transactions, RERA compliance, lease agreements, and property dispute resolution.", expertise: ["Property Transactions", "RERA", "Lease Agreements"], initials: "AR" },
  { name: "Tax Counsel", role: "Taxation & Compliance", bio: "Chartered accountant turned lawyer specializing in direct and indirect tax planning, GST, and regulatory compliance.", expertise: ["GST", "Income Tax", "Regulatory Compliance"], initials: "TC" },
];

export default function TeamPage() {
  return (
    <>
      <section className="bg-[#02334E] text-white py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <FadeUp delay={0.1}>
            <p className="text-[#C8A065] text-xs font-semibold uppercase tracking-widest mb-3">The People Behind the Practice</p>
          </FadeUp>
          <FadeUp delay={0.2}>
            <h1 className="text-4xl md:text-5xl font-black mb-6">Our Legal Team</h1>
          </FadeUp>
          <FadeUp delay={0.35}>
            <p className="text-white/70 text-lg leading-relaxed max-w-2xl mx-auto">A team of dedicated legal professionals, each bringing deep specialization and a shared commitment to achieving the best outcomes for our clients.</p>
          </FadeUp>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" stagger={0.1}>
            {team.map((member) => (
              <StaggerItem key={member.initials}>
                <motion.div
                  className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm h-full"
                  whileHover={{ y: -8, boxShadow: "0 24px 48px rgba(2,51,78,0.12)" }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="bg-[#02334E] h-40 flex items-center justify-center relative overflow-hidden">
                    <motion.div
                      className="absolute inset-0 bg-[#C8A065]/10"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.6 }}
                    />
                    <motion.div
                      className="w-20 h-20 rounded-full bg-[#C8A065] flex items-center justify-center"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.25 }}
                    >
                      <span className="text-white font-black text-2xl">{member.initials}</span>
                    </motion.div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-black text-[#02334E] text-lg">{member.name}</h3>
                    <p className="text-[#C8A065] text-sm font-semibold mb-3">{member.role}</p>
                    <p className="text-gray-500 text-sm leading-relaxed mb-4">{member.bio}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {member.expertise.map((e) => (
                        <motion.span
                          key={e}
                          className="px-2.5 py-1 bg-[#02334E]/5 text-[#02334E] text-xs font-medium rounded-full"
                          whileHover={{ backgroundColor: "#02334E", color: "#fff" }}
                          transition={{ duration: 0.15 }}
                        >
                          {e}
                        </motion.span>
                      ))}
                    </div>
                    <Link href="/contact" className="inline-flex items-center gap-1.5 text-[#C8A065] text-sm font-semibold group">
                      <Mail size={14} />
                      <span className="group-hover:underline">Consult Now</span>
                    </Link>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="max-w-2xl mx-auto text-center">
          <ScaleIn>
            <h2 className="text-3xl font-black text-[#02334E] mb-2">Speak to Our Experts</h2>
            <DrawLine className="w-16 mx-auto my-4" />
            <p className="text-gray-500 mb-8">Get connected with the right legal professional for your specific matter.</p>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#C8A065] text-white font-semibold rounded hover:bg-[#a8844a] transition-colors">
                Book a Consultation <ArrowRight size={16} />
              </Link>
            </motion.div>
          </ScaleIn>
        </div>
      </section>
    </>
  );
}
