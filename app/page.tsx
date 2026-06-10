import Link from "next/link";
import {
  Scale,
  Building2,
  Gavel,
  Lightbulb,
  Users,
  Home,
  Receipt,
  Star,
  CheckCircle2,
  ArrowRight,
  Phone,
  Clock,
} from "lucide-react";

const practiceAreas = [
  {
    icon: Building2,
    title: "Corporate Law",
    desc: "Expert counsel for businesses — from incorporation and contracts to M&A and governance.",
    slug: "corporate-law",
  },
  {
    icon: Gavel,
    title: "Litigation & Dispute Resolution",
    desc: "Aggressive representation in courts and tribunals to protect your interests.",
    slug: "litigation",
  },
  {
    icon: Lightbulb,
    title: "Intellectual Property",
    desc: "Safeguard your innovations, trademarks, copyrights, and trade secrets.",
    slug: "intellectual-property",
  },
  {
    icon: Users,
    title: "Employment Law",
    desc: "Comprehensive legal support for employers and employees on all workplace matters.",
    slug: "employment-law",
  },
  {
    icon: Home,
    title: "Real Estate & Property Law",
    desc: "Trusted guidance for property transactions, disputes, and due diligence.",
    slug: "real-estate",
  },
  {
    icon: Receipt,
    title: "Taxation & Compliance",
    desc: "Strategic tax planning and regulatory compliance for individuals and businesses.",
    slug: "taxation",
  },
];

const testimonials = [
  {
    name: "Rajesh Mehta",
    role: "CEO, TechVentures India",
    text: "Invictus Law handled our entire corporate restructuring with remarkable precision and insight. Their expertise gave us the confidence to make bold decisions.",
  },
  {
    name: "Priya Sharma",
    role: "Entrepreneur",
    text: "When a trademark dispute threatened my brand, Invictus stepped in and resolved it swiftly. Truly a team that fights for you.",
  },
  {
    name: "Arun Nair",
    role: "Real Estate Developer",
    text: "Their property law team is unmatched. Every transaction is handled thoroughly, leaving no stone unturned.",
  },
];

const trustStats = [
  { value: "500+", label: "Clients Served" },
  { value: "15+", label: "Years of Excellence" },
  { value: "98%", label: "Success Rate" },
  { value: "6", label: "Practice Areas" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#02334E] text-white overflow-hidden min-h-[90vh] flex items-center">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, #C8A065 0px, #C8A065 1px, transparent 1px, transparent 80px), repeating-linear-gradient(0deg, #C8A065 0px, #C8A065 1px, transparent 1px, transparent 80px)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-12 items-center w-full">
          <div>
            <p className="text-[#C8A065] text-sm font-semibold uppercase tracking-widest mb-4">
              Invictus Law Practice
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6">
              Relentless Advocacy.{" "}
              <span className="text-[#C8A065]">Uncompromising</span> Results.
            </h1>
            <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-lg">
              We combine sharp legal expertise with a client-first approach to
              deliver outcomes that matter. From corporate transactions to
              courtroom battles — Invictus stands unconquered.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#C8A065] text-white font-semibold rounded hover:bg-[#a8844a] transition-colors text-sm"
              >
                Get a Free Consultation <ArrowRight size={16} />
              </Link>
              <Link
                href="/practice-areas"
                className="inline-flex items-center gap-2 px-6 py-3.5 border border-white/30 text-white font-semibold rounded hover:bg-white/10 transition-colors text-sm"
              >
                Explore Practice Areas
              </Link>
            </div>
            <p className="mt-6 text-white/40 text-sm flex items-center gap-1.5">
              <Clock size={14} />
              Limited free consultation slots available this week
            </p>
          </div>

          {/* Lead Capture Form */}
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <h2 className="text-[#02334E] font-bold text-xl mb-1">
              Talk to a Lawyer Now
            </h2>
            <p className="text-gray-500 text-sm mb-6">
              Free, confidential 30-minute consultation.
            </p>
            <form className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Your Full Name"
                className="border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#C8A065] focus:border-transparent"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#C8A065] focus:border-transparent"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#C8A065] focus:border-transparent"
              />
              <select className="border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#C8A065]">
                <option value="">Select Legal Issue</option>
                <option>Corporate Law</option>
                <option>Litigation &amp; Dispute Resolution</option>
                <option>Intellectual Property</option>
                <option>Employment Law</option>
                <option>Real Estate &amp; Property Law</option>
                <option>Taxation &amp; Compliance</option>
                <option>Other</option>
              </select>
              <textarea
                placeholder="Brief description of your matter (optional)"
                rows={3}
                className="border border-gray-200 rounded-lg px-4 py-3 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-[#C8A065] focus:border-transparent"
              />
              <button
                type="submit"
                className="w-full bg-[#02334E] text-white font-semibold py-3.5 rounded-lg hover:bg-[#034568] transition-colors text-sm"
              >
                Request Free Consultation
              </button>
            </form>
            <p className="text-xs text-gray-400 mt-3 text-center">
              Your information is 100% confidential.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-[#C8A065]">
        <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {trustStats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-black text-white">{stat.value}</p>
              <p className="text-white/80 text-sm font-medium mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Value Proposition */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#C8A065] text-xs font-semibold uppercase tracking-widest mb-2">Why Invictus</p>
            <h2 className="text-3xl md:text-4xl font-black text-[#02334E]">
              The Invictus Difference
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Proven Track Record", desc: "With 500+ clients and a 98% success rate, our results speak louder than promises." },
              { title: "Client-First Philosophy", desc: "Every strategy is built around your unique needs, not a generic playbook." },
              { title: "Multidisciplinary Expertise", desc: "From corporate boardrooms to courtrooms, our team covers every legal frontier." },
              { title: "Transparent Communication", desc: "You'll always know where you stand. No legal jargon, no surprises." },
              { title: "Swift & Strategic Action", desc: "We combine speed with precision to safeguard your time and interests." },
              { title: "Confidential & Trusted", desc: "Your matter is treated with the utmost discretion and professional integrity." },
            ].map((item) => (
              <div key={item.title} className="flex gap-4">
                <CheckCircle2 className="shrink-0 mt-1 text-[#C8A065]" size={20} />
                <div>
                  <h3 className="font-bold text-[#02334E] text-base mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Practice Areas */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#C8A065] text-xs font-semibold uppercase tracking-widest mb-2">What We Do</p>
            <h2 className="text-3xl md:text-4xl font-black text-[#02334E]">Areas of Practice</h2>
            <p className="text-gray-500 mt-3 text-sm max-w-xl mx-auto">
              Comprehensive legal services across every domain that matters to your business and personal life.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {practiceAreas.map((area) => (
              <Link
                key={area.slug}
                href={`/practice-areas/${area.slug}`}
                className="group bg-white rounded-xl p-7 shadow-sm border border-gray-100 hover:border-[#C8A065] hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-[#02334E]/5 flex items-center justify-center mb-4 group-hover:bg-[#02334E] transition-colors">
                  <area.icon className="text-[#02334E] group-hover:text-white transition-colors" size={22} />
                </div>
                <h3 className="font-bold text-[#02334E] text-base mb-2">{area.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{area.desc}</p>
                <div className="mt-4 flex items-center gap-1 text-[#C8A065] text-sm font-semibold">
                  Learn more <ArrowRight size={14} />
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/practice-areas"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#02334E] text-[#02334E] font-semibold rounded hover:bg-[#02334E] hover:text-white transition-colors text-sm"
            >
              View All Practice Areas
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-[#02334E]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#C8A065] text-xs font-semibold uppercase tracking-widest mb-2">Client Stories</p>
            <h2 className="text-3xl md:text-4xl font-black text-white">What Our Clients Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white/5 border border-white/10 rounded-xl p-7">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="text-[#C8A065] fill-[#C8A065]" />
                  ))}
                </div>
                <p className="text-white/80 text-sm leading-relaxed mb-5 italic">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div>
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-white/50 text-xs">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-white/40 text-sm mt-8">
            Join 500+ clients who trust Invictus Law Practice
          </p>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="section-padding bg-[#C8A065]">
        <div className="max-w-3xl mx-auto text-center">
          <Scale size={40} className="text-white mx-auto mb-4 opacity-80" />
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Your Legal Matter Deserves Expert Attention
          </h2>
          <p className="text-white/80 mb-8">
            Schedule your free consultation today. Our team is ready to listen, advise, and act.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#02334E] text-white font-semibold rounded hover:bg-[#034568] transition-colors"
            >
              Book Free Consultation <ArrowRight size={16} />
            </Link>
            <a
              href="tel:+911234567890"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/20 border border-white/40 text-white font-semibold rounded hover:bg-white/30 transition-colors"
            >
              <Phone size={16} /> Call Us Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
