import Link from "next/link";
import { ArrowRight, Award, Target, Heart, Shield } from "lucide-react";

const milestones = [
  { year: "2009", title: "Founded", desc: "Invictus Law Practice was established with a vision to deliver fearless, client-centric legal counsel." },
  { year: "2012", title: "First 100 Clients", desc: "Reached 100 satisfied clients across corporate and litigation matters." },
  { year: "2016", title: "Expanded Practice Areas", desc: "Added Intellectual Property and Employment Law divisions." },
  { year: "2020", title: "National Recognition", desc: "Recognized among the top boutique law firms in India." },
  { year: "2024", title: "500+ Clients Served", desc: "Crossed the 500-client milestone with a 98% success rate." },
];

const values = [
  { icon: Target, title: "Excellence", desc: "We pursue the highest standard of legal practice in every matter we handle." },
  { icon: Heart, title: "Client-Centricity", desc: "Your goals are our goals. Every strategy is tailored to your unique situation." },
  { icon: Shield, title: "Integrity", desc: "We operate with complete transparency, honesty, and ethical commitment." },
  { icon: Award, title: "Results", desc: "We measure our success by the outcomes we deliver for our clients." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#02334E] text-white py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#C8A065] text-xs font-semibold uppercase tracking-widest mb-3">About Us</p>
          <h1 className="text-4xl md:text-5xl font-black mb-6">Who We Are</h1>
          <p className="text-white/70 text-lg leading-relaxed max-w-2xl mx-auto">
            Invictus Law Practice is a full-service law firm built on the principle that every client deserves fearless, expert, and personalized legal representation.
          </p>
        </div>
      </section>

      {/* Founder Section */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="bg-[#02334E]/5 rounded-2xl aspect-square flex items-center justify-center">
            <div className="text-center p-8">
              <div className="w-32 h-32 rounded-full bg-[#02334E]/20 mx-auto mb-4 flex items-center justify-center">
                <span className="text-[#02334E] text-4xl font-black">IL</span>
              </div>
              <p className="font-bold text-[#02334E] text-lg">Founder & Managing Partner</p>
              <p className="text-gray-500 text-sm">Invictus Law Practice</p>
            </div>
          </div>
          <div>
            <p className="text-[#C8A065] text-xs font-semibold uppercase tracking-widest mb-3">Our Founder</p>
            <h2 className="text-3xl font-black text-[#02334E] mb-6">A Vision for Justice</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              The founding of Invictus Law Practice was driven by a singular conviction: that every individual and business — regardless of the complexity of their legal matter — deserves access to the highest calibre of legal expertise.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              With over 15 years of practice spanning corporate transactions, high-stakes litigation, and regulatory compliance, our founder built Invictus on the pillars of integrity, strategic thinking, and an unrelenting drive to achieve results.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              The firm&apos;s name — derived from the Latin word for &ldquo;unconquered&rdquo; — reflects our commitment to standing firm for every client, in every matter, no matter the challenge.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 text-[#C8A065] font-semibold text-sm hover:gap-3 transition-all">
              Schedule a Consultation <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#C8A065] text-xs font-semibold uppercase tracking-widest mb-2">What Drives Us</p>
            <h2 className="text-3xl md:text-4xl font-black text-[#02334E]">Our Mission & Values</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-xl p-7 shadow-sm border border-gray-100 text-center">
                <div className="w-14 h-14 rounded-full bg-[#02334E] flex items-center justify-center mx-auto mb-4">
                  <v.icon className="text-[#C8A065]" size={24} />
                </div>
                <h3 className="font-bold text-[#02334E] mb-2">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-[#02334E]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#C8A065] text-xs font-semibold uppercase tracking-widest mb-2">Our Journey</p>
            <h2 className="text-3xl md:text-4xl font-black text-white">Key Milestones</h2>
          </div>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-[#C8A065]/30" />
            <div className="space-y-10">
              {milestones.map((m) => (
                <div key={m.year} className="flex gap-8 items-start pl-0">
                  <div className="relative flex-shrink-0 w-16 h-16 rounded-full bg-[#C8A065] flex items-center justify-center z-10">
                    <span className="text-white font-black text-xs">{m.year}</span>
                  </div>
                  <div className="pt-3">
                    <h3 className="text-white font-bold text-base">{m.title}</h3>
                    <p className="text-white/60 text-sm mt-1">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-[#C8A065]">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-black text-white mb-4">Ready to Work with Us?</h2>
          <p className="text-white/80 mb-8">Experience the Invictus difference. Book your free consultation today.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#02334E] text-white font-semibold rounded hover:bg-[#034568] transition-colors">
            Get Started <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
