import Link from "next/link";
import { Building2, Gavel, Lightbulb, Users, Home, Receipt, ArrowRight } from "lucide-react";

const areas = [
  {
    icon: Building2,
    title: "Corporate Law",
    slug: "corporate-law",
    summary: "From company formation to complex M&A transactions, our corporate lawyers provide end-to-end business legal support.",
    services: ["Company Incorporation", "Mergers & Acquisitions", "Joint Ventures", "Corporate Governance", "Commercial Contracts", "Due Diligence"],
  },
  {
    icon: Gavel,
    title: "Litigation & Dispute Resolution",
    slug: "litigation",
    summary: "We represent clients in courts, tribunals, and arbitration forums with strategic, results-driven advocacy.",
    services: ["Civil & Commercial Litigation", "Arbitration & Mediation", "Writ Petitions", "Appeals", "Injunctions", "Recovery Proceedings"],
  },
  {
    icon: Lightbulb,
    title: "Intellectual Property",
    slug: "intellectual-property",
    summary: "Protect your creative and commercial assets with comprehensive IP protection and enforcement strategies.",
    services: ["Patent Registration", "Trademark Filing", "Copyright Protection", "IP Licensing", "IP Disputes", "Trade Secrets"],
  },
  {
    icon: Users,
    title: "Employment Law",
    slug: "employment-law",
    summary: "Navigating the complexities of workplace law for employers and employees across India.",
    services: ["Employment Contracts", "Termination & Severance", "HR Policy Drafting", "Workplace Harassment", "Labour Compliance", "Industrial Disputes"],
  },
  {
    icon: Home,
    title: "Real Estate & Property Law",
    slug: "real-estate",
    summary: "Expert legal guidance for all property matters — residential, commercial, and industrial.",
    services: ["Property Transactions", "RERA Compliance", "Title Verification", "Lease Agreements", "Property Disputes", "Land Acquisition"],
  },
  {
    icon: Receipt,
    title: "Taxation & Compliance",
    slug: "taxation",
    summary: "Strategic tax planning and regulatory compliance to minimize liability and maximize value.",
    services: ["GST Advisory", "Income Tax Planning", "Corporate Tax", "Transfer Pricing", "Tax Litigation", "Regulatory Compliance"],
  },
];

export default function PracticeAreasPage() {
  return (
    <>
      <section className="bg-[#02334E] text-white py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#C8A065] text-xs font-semibold uppercase tracking-widest mb-3">What We Do</p>
          <h1 className="text-4xl md:text-5xl font-black mb-6">Areas of Practice</h1>
          <p className="text-white/70 text-lg leading-relaxed max-w-2xl mx-auto">
            Comprehensive legal services across six core practice areas, delivered by specialists with deep domain expertise.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto space-y-10">
          {areas.map((area, i) => (
            <div
              key={area.slug}
              className={`grid lg:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
            >
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <div className="w-14 h-14 rounded-xl bg-[#02334E] flex items-center justify-center mb-5">
                  <area.icon className="text-[#C8A065]" size={26} />
                </div>
                <h2 className="text-2xl font-black text-[#02334E] mb-3">{area.title}</h2>
                <p className="text-gray-600 leading-relaxed mb-5">{area.summary}</p>
                <Link
                  href={`/practice-areas/${area.slug}`}
                  className="inline-flex items-center gap-2 text-[#C8A065] font-semibold text-sm hover:gap-3 transition-all"
                >
                  Explore {area.title} <ArrowRight size={16} />
                </Link>
              </div>
              <div className={`bg-gray-50 rounded-xl p-8 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                <h3 className="text-xs font-semibold uppercase tracking-widest text-[#C8A065] mb-4">Our Services</h3>
                <ul className="grid grid-cols-2 gap-3">
                  {area.services.map((s) => (
                    <li key={s} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[#C8A065] flex-shrink-0" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-padding bg-[#C8A065]">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-black text-white mb-4">Not Sure Where to Start?</h2>
          <p className="text-white/80 mb-8">Our lawyers will assess your matter and connect you with the right specialist. No cost, no commitment.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#02334E] text-white font-semibold rounded hover:bg-[#034568] transition-colors">
            Get Free Legal Assessment <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
