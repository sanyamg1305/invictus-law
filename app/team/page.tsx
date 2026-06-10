import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";

const team = [
  {
    name: "Senior Partner",
    role: "Corporate Law & M&A",
    bio: "15+ years of experience advising Fortune 500 companies and startups on complex corporate transactions, mergers, and governance matters.",
    expertise: ["Corporate Law", "M&A", "Board Governance"],
    initials: "SP",
  },
  {
    name: "Partner – Litigation",
    role: "Litigation & Dispute Resolution",
    bio: "A seasoned litigator with a strong record in civil, commercial, and constitutional matters across High Courts and the Supreme Court of India.",
    expertise: ["Civil Litigation", "Arbitration", "Commercial Disputes"],
    initials: "PL",
  },
  {
    name: "Associate Partner",
    role: "Intellectual Property",
    bio: "Specializes in protecting the innovations of tech startups and creative professionals through patents, trademarks, and licensing agreements.",
    expertise: ["Patents", "Trademarks", "IP Licensing"],
    initials: "AP",
  },
  {
    name: "Senior Associate",
    role: "Employment & Labour Law",
    bio: "Advises companies and individuals on employment contracts, workplace disputes, HR policies, and compliance with labour regulations.",
    expertise: ["Employment Contracts", "Workplace Disputes", "Labour Compliance"],
    initials: "SA",
  },
  {
    name: "Associate",
    role: "Real Estate & Property Law",
    bio: "Expert in property transactions, RERA compliance, lease agreements, and property dispute resolution.",
    expertise: ["Property Transactions", "RERA", "Lease Agreements"],
    initials: "AR",
  },
  {
    name: "Tax Counsel",
    role: "Taxation & Compliance",
    bio: "Chartered accountant turned lawyer specializing in direct and indirect tax planning, GST, and regulatory compliance.",
    expertise: ["GST", "Income Tax", "Regulatory Compliance"],
    initials: "TC",
  },
];

export default function TeamPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#02334E] text-white py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#C8A065] text-xs font-semibold uppercase tracking-widest mb-3">The People Behind the Practice</p>
          <h1 className="text-4xl md:text-5xl font-black mb-6">Our Legal Team</h1>
          <p className="text-white/70 text-lg leading-relaxed max-w-2xl mx-auto">
            A team of dedicated legal professionals, each bringing deep specialization and a shared commitment to achieving the best outcomes for our clients.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.initials} className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-[#02334E] h-40 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-[#C8A065] flex items-center justify-center">
                    <span className="text-white font-black text-2xl">{member.initials}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-black text-[#02334E] text-lg">{member.name}</h3>
                  <p className="text-[#C8A065] text-sm font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{member.bio}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {member.expertise.map((e) => (
                      <span key={e} className="px-2.5 py-1 bg-[#02334E]/5 text-[#02334E] text-xs font-medium rounded-full">
                        {e}
                      </span>
                    ))}
                  </div>
                  <Link href="/contact" className="inline-flex items-center gap-1.5 text-[#C8A065] text-sm font-semibold hover:gap-2.5 transition-all">
                    <Mail size={14} /> Consult Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-black text-[#02334E] mb-4">Speak to Our Experts</h2>
          <p className="text-gray-500 mb-8">Get connected with the right legal professional for your specific matter.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#C8A065] text-white font-semibold rounded hover:bg-[#a8844a] transition-colors">
            Book a Consultation <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
