"use client";

import Link from "next/link";
import { ArrowRight, Award, Target, Heart, Shield } from "lucide-react";
import { motion } from "framer-motion";
import { FadeUp, SlideInLeft, SlideInRight, StaggerChildren, StaggerItem, DrawLine, ScaleIn } from "@/components/animations";

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
      <section className="bg-[#02334E] text-white py-24 px-6 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center">
          <FadeUp delay={0.1}>
            <p className="text-[#FEDDDD] text-xs font-semibold uppercase tracking-widest mb-3">About Us</p>
          </FadeUp>
          <FadeUp delay={0.2}>
            <h1 className="text-4xl md:text-5xl font-black mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>Who We Are</h1>
          </FadeUp>
          <FadeUp delay={0.35}>
            <p className="text-white/60 text-lg leading-relaxed max-w-2xl mx-auto">
              Invictus Law Practice is a full-service law firm built on the principle that every client deserves fearless, expert, and personalized legal representation.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Founder Section */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <SlideInLeft>
            <div className="bg-[#F8FAFC] rounded-2xl aspect-square flex items-center justify-center border border-gray-100">
              <div className="text-center p-8">
                <motion.div
                  className="w-32 h-32 rounded-full bg-[#02334E]/10 border-2 border-[#02334E]/20 mx-auto mb-4 flex items-center justify-center"
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(2,51,78,0.15)" }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-[#02334E] text-4xl font-black" style={{ fontFamily: "'Playfair Display', serif" }}>IL</span>
                </motion.div>
                <p className="font-bold text-[#0A1628] text-lg">Founder & Managing Partner</p>
                <p className="text-[#64748B] text-sm">Invictus Law Practice</p>
              </div>
            </div>
          </SlideInLeft>
          <SlideInRight>
            <p className="text-[#02334E] text-xs font-semibold uppercase tracking-widest mb-3">Our Founder</p>
            <h2 className="text-3xl font-black text-[#0A1628] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>A Vision for Justice</h2>
            <div className="w-12 h-0.5 bg-[#FEDDDD] mb-6" />
            <p className="text-[#64748B] leading-relaxed mb-4">The founding of Invictus Law Practice was driven by a singular conviction: that every individual and business deserves access to the highest calibre of legal expertise.</p>
            <p className="text-[#64748B] leading-relaxed mb-4">With over 15 years of practice spanning corporate transactions, high-stakes litigation, and regulatory compliance, our founder built Invictus on the pillars of integrity, strategic thinking, and an unrelenting drive to achieve results.</p>
            <p className="text-[#64748B] leading-relaxed mb-6">The firm&apos;s name — derived from the Latin word for &ldquo;unconquered&rdquo; — reflects our commitment to standing firm for every client, in every matter.</p>
            <motion.div whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
              <Link href="/contact" className="inline-flex items-center gap-2 text-[#02334E] font-semibold text-sm hover:text-[#011E30] transition-colors">
                Schedule a Consultation <ArrowRight size={16} />
              </Link>
            </motion.div>
          </SlideInRight>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-[#F8FAFC]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <FadeUp>
              <p className="text-[#02334E] text-xs font-semibold uppercase tracking-widest mb-2">What Drives Us</p>
              <h2 className="text-3xl md:text-4xl font-black text-[#0A1628]" style={{ fontFamily: "'Playfair Display', serif" }}>Our Mission & Values</h2>
              <div className="w-12 h-0.5 bg-[#FEDDDD] mx-auto mt-4" />
            </FadeUp>
          </div>
          <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" stagger={0.1}>
            {values.map((v) => (
              <StaggerItem key={v.title}>
                <motion.div
                  className="bg-white rounded-xl p-7 shadow-sm border border-gray-100 text-center"
                  whileHover={{ y: -6, boxShadow: "0 16px 32px rgba(2,51,78,0.1)" }}
                  transition={{ duration: 0.25 }}
                >
                  <motion.div
                    className="w-14 h-14 rounded-full bg-[#02334E] flex items-center justify-center mx-auto mb-4"
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <v.icon className="text-[#FEDDDD]" size={24} />
                  </motion.div>
                  <h3 className="font-bold text-[#0A1628] mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>{v.title}</h3>
                  <p className="text-[#64748B] text-sm leading-relaxed">{v.desc}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Animated Timeline */}
      <section className="section-padding bg-[#02334E]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <FadeUp>
              <p className="text-[#FEDDDD] text-xs font-semibold uppercase tracking-widest mb-2">Our Journey</p>
              <h2 className="text-3xl md:text-4xl font-black text-white" style={{ fontFamily: "'Playfair Display', serif" }}>Key Milestones</h2>
              <div className="w-12 h-0.5 bg-[#FEDDDD] mx-auto mt-4" />
            </FadeUp>
          </div>
          <div className="relative">
            <motion.div
              className="absolute left-8 top-0 bottom-0 w-px bg-[#02334E]/20"
              style={{ backgroundColor: "rgba(254,221,221,0.2)" }}
              initial={{ scaleY: 0, originY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            />
            <div className="space-y-10">
              {milestones.map((m, i) => (
                <motion.div
                  key={m.year}
                  className="flex gap-8 items-start"
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.12 }}
                >
                  <motion.div
                    className="relative flex-shrink-0 w-16 h-16 rounded-full bg-[#FEDDDD] flex items-center justify-center z-10"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="text-[#02334E] font-black text-xs">{m.year}</span>
                  </motion.div>
                  <div className="pt-3">
                    <h3 className="text-white font-bold text-base">{m.title}</h3>
                    <p className="text-white/50 text-sm mt-1">{m.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#02334E]">
        <div className="max-w-2xl mx-auto text-center">
          <ScaleIn>
            <h2 className="text-3xl font-black text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Ready to Work with Us?</h2>
            <p className="text-white/70 mb-8">Experience the Invictus difference. Book your free consultation today.</p>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-[#02334E] font-semibold rounded-lg hover:bg-[#FEDDDD] transition-colors">
                Get Started <ArrowRight size={16} />
              </Link>
            </motion.div>
          </ScaleIn>
        </div>
      </section>
    </>
  );
}
