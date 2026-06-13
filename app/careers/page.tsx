import Link from "next/link";
import { ArrowRight, CheckCircle2, Users, TrendingUp, Heart, BookOpen } from "lucide-react";

const openRoles = [
  { title: "Associate – Corporate Law", type: "Full-time", location: "Mumbai", experience: "1–3 years" },
  { title: "Senior Associate – Litigation", type: "Full-time", location: "Mumbai", experience: "4–6 years" },
  { title: "Legal Intern – IP Practice", type: "Internship (3 months)", location: "Mumbai / Remote", experience: "Law student (3rd–5th year)" },
  { title: "Tax Counsel – Direct Tax", type: "Full-time", location: "Mumbai", experience: "3–5 years" },
];

const benefits = [
  { icon: TrendingUp, title: "Accelerated Growth", desc: "Work on high-stakes matters from day one. Rapid career progression for top performers." },
  { icon: Users, title: "Mentorship", desc: "Direct mentorship from senior partners with 15+ years of practice experience." },
  { icon: Heart, title: "Supportive Culture", desc: "A collaborative, inclusive environment where every team member is valued." },
  { icon: BookOpen, title: "Continuous Learning", desc: "Regular training, seminars, and support for professional development and certifications." },
];

export default function CareersPage() {
  return (
    <>
      <section className="bg-[#0F172A] text-white py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#3B82F6] text-xs font-semibold uppercase tracking-widest mb-3">Join Our Team</p>
          <h1 className="text-4xl md:text-5xl font-black mb-6">Careers at Invictus</h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Build your legal career at a firm where excellence is expected, growth is supported, and every matter is an opportunity to make an impact.
          </p>
        </div>
      </section>

      {/* Why Join */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#3B82F6] text-xs font-semibold uppercase tracking-widest mb-2">Why Invictus</p>
            <h2 className="text-3xl font-black text-[#0F172A]">Why Join Invictus Law?</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((b) => (
              <div key={b.title} className="text-center">
                <div className="w-14 h-14 rounded-full bg-[#0F172A] flex items-center justify-center mx-auto mb-4">
                  <b.icon className="text-[#3B82F6]" size={24} />
                </div>
                <h3 className="font-bold text-[#0F172A] mb-2">{b.title}</h3>
                <p className="text-gray-400 text-sm">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="section-padding bg-[#F8FAFC]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#3B82F6] text-xs font-semibold uppercase tracking-widest mb-2">Opportunities</p>
            <h2 className="text-3xl font-black text-[#0F172A]">Open Positions</h2>
          </div>
          <div className="space-y-4">
            {openRoles.map((role) => (
              <div key={role.title} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="font-bold text-[#0F172A] text-base">{role.title}</h3>
                  <div className="flex flex-wrap gap-3 mt-2">
                    <span className="text-xs px-2.5 py-1 bg-[#0F172A]/5 text-[#0F172A] rounded-full font-medium">{role.type}</span>
                    <span className="text-xs px-2.5 py-1 bg-[#3B82F6]/10 text-[#2563EB] rounded-full font-medium">{role.location}</span>
                    <span className="text-xs text-gray-400">{role.experience}</span>
                  </div>
                </div>
                <Link
                  href="/contact"
                  className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 bg-[#0F172A] text-white text-sm font-semibold rounded-lg hover:bg-[#1E293B] transition-colors"
                >
                  Apply Now <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="section-padding bg-[#0F172A]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#3B82F6] text-xs font-semibold uppercase tracking-widest mb-2">How to Apply</p>
            <h2 className="text-3xl font-black text-white">Application Process</h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Submit Application", desc: "Send your CV and cover letter to careers@invictuslaw.in" },
              { step: "02", title: "Initial Screening", desc: "Our HR team reviews applications and contacts shortlisted candidates within 5 days." },
              { step: "03", title: "Interview", desc: "Two rounds — a technical legal assessment and a partner-level interview." },
              { step: "04", title: "Offer", desc: "Selected candidates receive an offer letter with detailed compensation and terms." },
            ].map((s) => (
              <div key={s.step} className="text-center">
                <div className="w-12 h-12 rounded-full bg-[#3B82F6] flex items-center justify-center mx-auto mb-3 shadow-lg shadow-blue-500/25">
                  <span className="text-white font-black text-sm">{s.step}</span>
                </div>
                <h3 className="text-white font-bold text-sm mb-2">{s.title}</h3>
                <p className="text-white/50 text-xs leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* General Applications */}
      <section className="section-padding bg-gradient-to-br from-[#1D4ED8] to-[#3B82F6]">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-black text-white mb-4">Don&apos;t See the Right Role?</h2>
          <p className="text-white/80 mb-2">We&apos;re always open to talented legal professionals who share our values.</p>
          <p className="text-white/70 text-sm mb-8">Send a general application to <strong>careers@invictuslaw.in</strong></p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { title: "Results-Driven", icon: CheckCircle2 },
              { title: "Collaborative", icon: Users },
              { title: "Client-Focused", icon: Heart },
            ].map((v) => (
              <div key={v.title} className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full text-white text-sm font-medium">
                <v.icon size={14} /> {v.title}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
