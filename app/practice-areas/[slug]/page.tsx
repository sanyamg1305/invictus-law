import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2, Building2, Gavel, Lightbulb, Users, Home, Receipt } from "lucide-react";

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

export default async function PracticeAreaPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const area = areaData[slug];
  if (!area) notFound();

  return (
    <>
      <section className="bg-[#02334E] text-white py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-lg bg-[#C8A065] flex items-center justify-center">
              <area.icon className="text-white" size={22} />
            </div>
            <p className="text-[#C8A065] text-xs font-semibold uppercase tracking-widest">Practice Area</p>
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-4">{area.title}</h1>
          <p className="text-white/70 text-lg max-w-2xl">{area.tagline}</p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-black text-[#02334E] mb-4">Overview</h2>
            <p className="text-gray-600 leading-relaxed mb-10">{area.overview}</p>

            <h2 className="text-2xl font-black text-[#02334E] mb-6">Our Services</h2>
            <div className="grid sm:grid-cols-2 gap-3 mb-10">
              {area.services.map((s) => (
                <div key={s} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 shrink-0 text-[#C8A065]" size={18} />
                  <span className="text-gray-700 text-sm">{s}</span>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-black text-[#02334E] mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {area.faqs.map((faq) => (
                <div key={faq.q} className="border-l-2 border-[#C8A065] pl-5">
                  <h3 className="font-bold text-[#02334E] mb-2">{faq.q}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="bg-[#02334E] rounded-xl p-7 text-white sticky top-24">
              <h3 className="font-black text-lg mb-2">Why Choose Invictus</h3>
              <p className="text-white/60 text-sm mb-5">What sets our {area.title} practice apart:</p>
              <ul className="space-y-3 mb-6">
                {area.whyUs.map((w) => (
                  <li key={w} className="flex gap-2.5 text-sm text-white/80">
                    <CheckCircle2 className="shrink-0 mt-0.5 text-[#C8A065]" size={16} />
                    {w}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="block text-center px-5 py-3 bg-[#C8A065] text-white font-semibold rounded hover:bg-[#a8844a] transition-colors text-sm"
              >
                Book a Free Consultation
              </Link>
              <Link href="/practice-areas" className="block text-center mt-3 text-white/50 text-sm hover:text-white transition-colors">
                ← All Practice Areas
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#C8A065]">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-black text-white mb-4">Ready to Get Expert {area.title} Advice?</h2>
          <p className="text-white/80 mb-8">Speak with one of our specialists today — at no cost and no obligation.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#02334E] text-white font-semibold rounded hover:bg-[#034568] transition-colors">
            Request Free Consultation <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
