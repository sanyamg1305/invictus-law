"use client";

import Link from "next/link";
import { Building2, Gavel, Lightbulb, Users, Home, Receipt, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { FadeUp, SlideInLeft, SlideInRight, ScaleIn, DrawLine } from "@/components/animations";

const areas = [
  { icon: Building2, title: "Corporate Law", slug: "corporate-law", summary: "From company formation to complex M&A transactions, our corporate lawyers provide end-to-end business legal support.", services: ["Company Incorporation", "Mergers & Acquisitions", "Joint Ventures", "Corporate Governance", "Commercial Contracts", "Due Diligence"] },
  { icon: Gavel, title: "Litigation & Dispute Resolution", slug: "litigation", summary: "We represent clients in courts, tribunals, and arbitration forums with strategic, results-driven advocacy.", services: ["Civil & Commercial Litigation", "Arbitration & Mediation", "Writ Petitions", "Appeals", "Injunctions", "Recovery Proceedings"] },
  { icon: Lightbulb, title: "Intellectual Property", slug: "intellectual-property", summary: "Protect your creative and commercial assets with comprehensive IP protection and enforcement strategies.", services: ["Patent Registration", "Trademark Filing", "Copyright Protection", "IP Licensing", "IP Disputes", "Trade Secrets"] },
  { icon: Users, title: "Employment Law", slug: "employment-law", summary: "Navigating the complexities of workplace law for employers and employees across India.", services: ["Employment Contracts", "Termination & Severance", "HR Policy Drafting", "Workplace Harassment", "Labour Compliance", "Industrial Disputes"] },
  { icon: Home, title: "Real Estate & Property Law", slug: "real-estate", summary: "Expert legal guidance for all property matters — residential, commercial, and industrial.", services: ["Property Transactions", "RERA Compliance", "Title Verification", "Lease Agreements", "Property Disputes", "Land Acquisition"] },
  { icon: Receipt, title: "Taxation & Compliance", slug: "taxation", summary: "Strategic tax planning and regulatory compliance to minimize liability and maximize value.", services: ["GST Advisory", "Income Tax Planning", "Corporate Tax", "Transfer Pricing", "Tax Litigation", "Regulatory Compliance"] },
];

export default function PracticeAreasPage() {
  return (
    <>
      <section className="bg-[#0F172A] text-white py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <FadeUp delay={0.1}>
            <p className="text-[#3B82F6] text-xs font-semibold uppercase tracking-widest mb-3">What We Do</p>
          </FadeUp>
          <FadeUp delay={0.2}>
            <h1 className="text-4xl md:text-5xl font-black mb-6">Areas of Practice</h1>
          </FadeUp>
          <FadeUp delay={0.35}>
            <p className="text-white/60 text-lg leading-relaxed max-w-2xl mx-auto">Comprehensive legal services across six core practice areas, delivered by specialists with deep domain expertise.</p>
          </FadeUp>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto space-y-16">
          {areas.map((area, i) => {
            const isEven = i % 2 === 1;
            const Content = (
              <div>
                <motion.div
                  className="w-14 h-14 rounded-xl bg-[#0F172A] flex items-center justify-center mb-5"
                  whileHover={{ rotate: 8, scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <area.icon className="text-[#3B82F6]" size={26} />
                </motion.div>
                <h2 className="text-2xl font-black text-[#0F172A] mb-3">{area.title}</h2>
                <p className="text-gray-500 leading-relaxed mb-5">{area.summary}</p>
                <motion.div whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
                  <Link href={`/practice-areas/${area.slug}`} className="inline-flex items-center gap-2 text-[#3B82F6] font-semibold text-sm hover:text-[#2563EB] transition-colors">
                    Explore {area.title} <ArrowRight size={16} />
                  </Link>
                </motion.div>
              </div>
            );
            const Services = (
              <motion.div
                className="bg-[#F8FAFC] rounded-xl p-8 border border-gray-100"
                whileHover={{ backgroundColor: "#EFF6FF" }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xs font-semibold uppercase tracking-widest text-[#3B82F6] mb-4">Our Services</h3>
                <ul className="grid grid-cols-2 gap-3">
                  {area.services.map((s, si) => (
                    <motion.li
                      key={s}
                      className="flex items-start gap-2 text-sm text-gray-600"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: si * 0.07 }}
                    >
                      <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[#3B82F6] flex-shrink-0" />
                      {s}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            );

            return (
              <div key={area.slug} className="grid lg:grid-cols-2 gap-10 items-center">
                {isEven ? (
                  <>
                    <SlideInRight>{Content}</SlideInRight>
                    <SlideInLeft>{Services}</SlideInLeft>
                  </>
                ) : (
                  <>
                    <SlideInLeft>{Content}</SlideInLeft>
                    <SlideInRight>{Services}</SlideInRight>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </section>

      <section className="section-padding bg-gradient-to-br from-[#1D4ED8] to-[#3B82F6]">
        <div className="max-w-2xl mx-auto text-center">
          <ScaleIn>
            <h2 className="text-3xl font-black text-white mb-2">Not Sure Where to Start?</h2>
            <DrawLine className="w-16 mx-auto my-4 bg-white/40" />
            <p className="text-white/80 mb-8">Our lawyers will assess your matter and connect you with the right specialist. No cost, no commitment.</p>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-[#1D4ED8] font-semibold rounded-lg hover:bg-white/90 transition-colors">
                Get Free Legal Assessment <ArrowRight size={16} />
              </Link>
            </motion.div>
          </ScaleIn>
        </div>
      </section>
    </>
  );
}
