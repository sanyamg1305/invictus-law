"use client";

import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowLeft, Building2, Gavel, Lightbulb, Users, Home, Receipt, CheckCircle2, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { FadeUp, SlideInLeft, SlideInRight, StaggerChildren, StaggerItem } from "@/components/animations";

const areaData: Record<string, {
  icon: React.ElementType;
  title: string;
  tagline: string;
  overview: string;
  services: string[];
  whyUs: string[];
  faqs: { q: string; a: string }[];
}> = {
  "corporate-law": {
    icon: Building2,
    title: "Corporate Law",
    tagline: "Strategic legal counsel for every stage of your business journey.",
    overview: "Our corporate law team provides comprehensive legal support to businesses of all sizes — from startups securing their first funding round to established enterprises navigating complex transactions. We act as strategic partners who understand not just the law, but the commercial realities of business.",
    services: ["Company Incorporation & Structuring", "Shareholders & Partnership Agreements", "Mergers & Acquisitions", "Joint Ventures & Collaborations", "Corporate Governance & Compliance", "Commercial Contracts & Negotiations", "Due Diligence & Legal Audits", "Foreign Direct Investment (FDI) Advisory"],
    whyUs: ["Deep understanding of India's regulatory and corporate landscape", "Sector-specific experience across tech, manufacturing, retail, and services", "Proactive legal risk identification and mitigation", "Seamless coordination with CA, CS, and financial advisors"],
    faqs: [
      { q: "Do I need a lawyer to incorporate a company in India?", a: "While not legally required, a corporate lawyer ensures proper structuring, compliance with MCA regulations, and protection of your interests from day one." },
      { q: "What does due diligence involve?", a: "Due diligence is a thorough investigation of a company's legal, financial, and operational standing — essential before any acquisition or investment." },
      { q: "How long does an M&A transaction typically take?", a: "Depending on complexity, M&A transactions can take anywhere from 3 months to over a year. We work to streamline every stage." },
    ],
  },
  "litigation": {
    icon: Gavel,
    title: "Litigation & Dispute Resolution",
    tagline: "Fearless representation. Strategic advocacy. Decisive results.",
    overview: "When disputes arise, having the right legal team in your corner makes all the difference. Our litigation practice combines meticulous preparation with aggressive courtroom advocacy to protect your rights and interests across civil, commercial, and constitutional matters.",
    services: ["Civil & Commercial Litigation", "Arbitration & Mediation", "Writ Petitions & PIL", "Appeals & Revisions", "Injunctions & Emergency Relief", "Recovery & Enforcement Proceedings", "Consumer Disputes", "Debt Recovery Tribunal (DRT) Matters"],
    whyUs: ["Extensive experience across District Courts, High Courts, and Supreme Court of India", "Strong track record in obtaining interim relief and injunctions", "Strategic approach that combines litigation with negotiated resolution", "Transparent communication at every stage of proceedings"],
    faqs: [
      { q: "How long does litigation take in India?", a: "Civil litigation timelines vary significantly. We explore all avenues — including arbitration and mediation — to achieve faster resolutions." },
      { q: "What is arbitration and when is it preferred?", a: "Arbitration is a private dispute resolution mechanism. It is often faster, confidential, and binding — preferred for commercial contracts and international disputes." },
      { q: "Can I claim legal costs from the other party?", a: "Courts may award costs depending on the circumstances. We assess your case to maximize the outcomes available to you." },
    ],
  },
  "intellectual-property": {
    icon: Lightbulb,
    title: "Intellectual Property",
    tagline: "Your ideas are your most valuable assets. We protect them.",
    overview: "In today's knowledge economy, intellectual property is often a company's most valuable asset. Our IP practice helps innovators, creators, and businesses protect, manage, and enforce their IP rights across India and internationally.",
    services: ["Patent Filing & Prosecution", "Trademark Registration & Renewal", "Copyright Registration", "Design Registration", "IP Portfolio Management", "Licensing & Technology Transfer", "IP Disputes & Infringement Actions", "Trade Secret Protection"],
    whyUs: ["End-to-end IP lifecycle management from filing to enforcement", "Experience across sectors including technology, pharma, fashion, and media", "International filing capabilities through PCT and Madrid Protocol", "Proactive monitoring for potential infringement"],
    faqs: [
      { q: "How long does trademark registration take in India?", a: "The process typically takes 18–24 months, though we file for objection and opposition responses promptly to keep timelines on track." },
      { q: "Do I need to register my copyright?", a: "Copyright exists automatically upon creation in India, but registration provides legal presumption of ownership and is valuable for enforcement." },
      { q: "What can I do if someone copies my brand?", a: "We can send a cease-and-desist notice, file for injunctive relief, and initiate civil or criminal action for trademark infringement." },
    ],
  },
  "employment-law": {
    icon: Users,
    title: "Employment Law",
    tagline: "Protecting workplace rights — for employers and employees alike.",
    overview: "Employment law in India is complex, with multiple central and state statutes governing workplace relationships. Whether you are an employer seeking compliance or an employee facing workplace issues, our employment law team provides clear, practical guidance.",
    services: ["Employment Contract Drafting & Review", "HR Policy & Employee Handbook", "Termination & Severance Advisory", "Workplace Harassment Investigations", "Industrial & Labour Disputes", "POSH Compliance & Training", "Labour Law Compliance Audits", "Non-Compete & Confidentiality Agreements"],
    whyUs: ["Nuanced understanding of both employer and employee perspectives", "Experience with labour tribunals and industrial courts", "Proactive compliance frameworks to prevent disputes", "Sensitive handling of workplace harassment and discrimination matters"],
    faqs: [
      { q: "What is the right process for terminating an employee in India?", a: "The process depends on whether the employee is a 'workman' under the ID Act. Non-compliance can result in reinstatement orders. We ensure you follow the correct procedure." },
      { q: "Is a POSH policy mandatory for all companies?", a: "Yes. All organizations with 10 or more employees must have a POSH policy, an Internal Complaints Committee (ICC), and conduct regular training." },
      { q: "Can an employer enforce a non-compete clause?", a: "India generally does not enforce post-employment non-competes, but well-drafted non-solicitation and confidentiality clauses are enforceable." },
    ],
  },
  "real-estate": {
    icon: Home,
    title: "Real Estate & Property Law",
    tagline: "Secure your most significant investments with expert legal guidance.",
    overview: "Property transactions involve complex documentation, title verification, regulatory compliance, and significant financial stakes. Our real estate law team ensures every transaction is legally sound, RERA-compliant, and risk-free.",
    services: ["Title Search & Verification", "Sale & Purchase Agreements", "RERA Compliance Advisory", "Lease & Leave-and-License Agreements", "Property Disputes & Recovery", "Land Acquisition Matters", "Development Agreements", "Mortgage & Secured Lending Documentation"],
    whyUs: ["Thorough title due diligence to uncover hidden encumbrances", "Deep knowledge of state-specific property laws across India", "RERA expertise for developers, buyers, and investors", "Efficient documentation and registration support"],
    faqs: [
      { q: "Why is title verification important before buying property?", a: "Title verification confirms the seller's legal right to sell and uncovers any encumbrances, liens, or disputes — protecting your investment." },
      { q: "What are a buyer's rights under RERA?", a: "RERA grants buyers rights to information, timely possession, structural defect rectification, and refund with interest for delays." },
      { q: "What is a Leave and License agreement?", a: "It is a temporary permission to use property (typically for 11 months) without creating a tenancy. It offers better protection for the owner than a standard lease." },
    ],
  },
  "taxation": {
    icon: Receipt,
    title: "Taxation & Compliance",
    tagline: "Smart tax strategy. Rigorous compliance. Optimal outcomes.",
    overview: "Navigating India's tax landscape requires a blend of legal expertise and commercial insight. Our tax counsel team provides strategic advice on direct and indirect taxes, helps structure transactions tax-efficiently, and represents clients before tax authorities.",
    services: ["Income Tax Advisory & Planning", "GST Registration, Filing & Advisory", "Corporate Tax Structuring", "Transfer Pricing Documentation", "Tax Dispute Resolution & Appeals", "Customs & Foreign Trade Advisory", "Tax Due Diligence", "Regulatory & Statutory Compliance"],
    whyUs: ["Dual expertise in law and accountancy for holistic tax advice", "Strong representation track record before Income Tax, GST, and CESTAT authorities", "Proactive planning to minimize tax liability legally", "Regular updates on legislative and regulatory changes"],
    faqs: [
      { q: "When does GST registration become mandatory?", a: "GST registration is mandatory when annual turnover exceeds ₹40 lakhs (goods) or ₹20 lakhs (services), or for inter-state supply regardless of turnover." },
      { q: "What is transfer pricing?", a: "Transfer pricing regulates pricing of transactions between related companies to ensure they reflect arm's-length prices for tax purposes." },
      { q: "How can a tax lawyer help with an IT notice?", a: "We analyze the notice, prepare a comprehensive response, represent you in proceedings, and work to minimize demand and penalties." },
    ],
  },
};

export async function generateStaticParams() {
  return Object.keys(areaData).map((slug) => ({ slug }));
}

function FAQItem({ faq, index }: { faq: { q: string; a: string }; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      className="border border-gray-100 rounded-xl overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
    >
      <button
        className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-gray-50 transition-colors"
        onClick={() => setOpen(!open)}
      >
        <span className="font-bold text-[#02334E] text-sm pr-4">{faq.q}</span>
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <ChevronDown size={16} className="text-[#02334E]/40 shrink-0" />
        </motion.div>
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.25 }}
        className="overflow-hidden"
      >
        <p className="px-6 pb-5 text-gray-500 text-sm leading-relaxed">{faq.a}</p>
      </motion.div>
    </motion.div>
  );
}

export default async function PracticeAreaPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const area = areaData[slug];
  if (!area) notFound();
  const Icon = area.icon;

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative bg-[#02334E] text-white overflow-hidden py-28 px-6">
        {/* Dot grid */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)",
            backgroundSize: "36px 36px",
          }}
        />
        {/* Ghost title */}
        <div
          className="absolute inset-0 flex items-center justify-end pr-8 pointer-events-none select-none overflow-hidden"
          aria-hidden="true"
        >
          <span
            className="text-white font-black leading-none"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(5rem, 14vw, 14rem)",
              opacity: 0.04,
              letterSpacing: "-0.03em",
            }}
          >
            {area.title.split(" ")[0]}
          </span>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/practice-areas"
              className="inline-flex items-center gap-2 text-white/40 hover:text-white text-xs font-semibold uppercase tracking-wider transition-colors mb-8"
            >
              <ArrowLeft size={14} /> All Practice Areas
            </Link>
          </motion.div>

          <motion.div
            className="flex items-center gap-4 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-center">
              <Icon size={26} className="text-white" />
            </div>
            <span className="text-white/40 text-[10px] font-bold uppercase tracking-[0.3em]">Practice Area</span>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl font-black leading-tight mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {area.title}
          </motion.h1>

          <motion.div
            className="w-12 h-[3px] bg-[#FEDDDD] mb-5 rounded-full"
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          />

          <motion.p
            className="text-white/55 text-lg max-w-2xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
          >
            {area.tagline}
          </motion.p>
        </div>
      </section>

      {/* ── MAIN CONTENT ─────────────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_320px] gap-14">
          {/* Left */}
          <div>
            {/* Overview */}
            <SlideInLeft>
              <p className="text-[#02334E]/40 text-[10px] font-bold uppercase tracking-[0.3em] mb-3">Overview</p>
              <h2
                className="text-2xl md:text-3xl font-black text-[#02334E] mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                About This Practice
              </h2>
              <div className="w-10 h-[2px] bg-[#FEDDDD] mb-5 rounded-full" />
              <p className="text-gray-500 leading-relaxed text-[15px]">{area.overview}</p>
            </SlideInLeft>

            {/* Services */}
            <div className="mt-14">
              <FadeUp>
                <p className="text-[#02334E]/40 text-[10px] font-bold uppercase tracking-[0.3em] mb-3">What We Offer</p>
                <h2
                  className="text-2xl md:text-3xl font-black text-[#02334E] mb-4"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Our Services
                </h2>
                <div className="w-10 h-[2px] bg-[#FEDDDD] mb-8 rounded-full" />
              </FadeUp>
              <StaggerChildren className="grid sm:grid-cols-2 gap-3" stagger={0.06}>
                {area.services.map((s, i) => (
                  <StaggerItem key={s}>
                    <motion.div
                      className="flex items-start gap-3 p-4 rounded-xl border border-gray-100 hover:border-[#02334E]/20 hover:bg-gray-50 transition-all group"
                      whileHover={{ x: 3 }}
                    >
                      <div className="w-5 h-5 rounded-full bg-[#02334E]/8 group-hover:bg-[#02334E] flex items-center justify-center shrink-0 mt-0.5 transition-colors">
                        <CheckCircle2 size={11} className="text-[#02334E] group-hover:text-white transition-colors" />
                      </div>
                      <span className="text-[#02334E] text-sm font-medium">{s}</span>
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerChildren>
            </div>

            {/* FAQs */}
            <div className="mt-14">
              <FadeUp>
                <p className="text-[#02334E]/40 text-[10px] font-bold uppercase tracking-[0.3em] mb-3">FAQs</p>
                <h2
                  className="text-2xl md:text-3xl font-black text-[#02334E] mb-4"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Frequently Asked Questions
                </h2>
                <div className="w-10 h-[2px] bg-[#FEDDDD] mb-8 rounded-full" />
              </FadeUp>
              <div className="space-y-3">
                {area.faqs.map((faq, i) => (
                  <FAQItem key={faq.q} faq={faq} index={i} />
                ))}
              </div>
            </div>
          </div>

          {/* Sticky Sidebar */}
          <div>
            <div className="sticky top-24 space-y-5">
              {/* Why Us card */}
              <motion.div
                className="bg-[#02334E] rounded-2xl p-7 text-white"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3
                  className="font-black text-lg mb-1"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Why Choose Invictus
                </h3>
                <p className="text-white/40 text-xs mb-5">What sets our {area.title} practice apart</p>
                <ul className="space-y-3 mb-6">
                  {area.whyUs.map((w, i) => (
                    <motion.li
                      key={w}
                      className="flex gap-3 text-sm text-white/70"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-[#FEDDDD] shrink-0 mt-1.5" />
                      {w}
                    </motion.li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="block text-center px-5 py-3 bg-white text-[#02334E] font-bold rounded-xl hover:bg-gray-100 transition-colors text-sm"
                >
                  Book a Free Consultation
                </Link>
              </motion.div>

              {/* CTA card */}
              <motion.div
                className="bg-gray-50 rounded-2xl p-6 border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <p className="text-[#02334E] font-bold text-sm mb-1">Need immediate assistance?</p>
                <p className="text-gray-400 text-xs mb-4">Call us directly for urgent legal matters</p>
                <a
                  href="tel:+911234567890"
                  className="block text-center px-5 py-3 border-2 border-[#02334E] text-[#02334E] font-bold rounded-xl hover:bg-[#02334E] hover:text-white transition-all text-sm"
                >
                  +91 12345 67890
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ───────────────────────────────────────────── */}
      <section className="section-padding bg-[#02334E] relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.025) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="relative max-w-2xl mx-auto text-center">
          <FadeUp>
            <div className="w-12 h-[2px] bg-white/20 mx-auto mb-8 rounded-full" />
            <h2
              className="text-3xl md:text-4xl font-black text-white mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Ready to Get Expert<br />{area.title} Advice?
            </h2>
            <p className="text-white/50 mb-8">Speak with one of our specialists — at no cost, no obligation.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 px-7 py-3.5 bg-white text-[#02334E] font-bold rounded-xl hover:bg-gray-100 transition-colors shadow-lg"
              >
                Request Free Consultation <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
