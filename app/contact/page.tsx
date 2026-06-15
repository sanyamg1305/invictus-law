"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";
import {
  FadeUp,
  HeroText,
  DrawLine,
  SlideInLeft,
  SlideInRight,
} from "@/components/animations";

const contactDetails = [
  {
    icon: MapPin,
    label: "Address",
    value: "12th Floor, Prestige Tower, BKC, Mumbai 400051",
    href: undefined,
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 22 4890 1234",
    href: "tel:+912248901234",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@invictuslaw.in",
    href: "mailto:info@invictuslaw.in",
  },
  {
    icon: Clock,
    label: "Office Hours",
    value: "Mon–Fri: 9 AM – 7 PM | Sat: 10 AM – 2 PM",
    href: undefined,
  },
];

function AnimatedInput({
  label,
  type = "text",
  required = false,
  placeholder = "",
  className = "",
}: {
  label: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  className?: string;
}) {
  const [focused, setFocused] = useState(false);
  return (
    <div className={className}>
      <label className="block text-xs font-semibold text-[#0A1628] uppercase tracking-wider mb-1.5">
        {label} {required && <span className="text-[#02334E]">*</span>}
      </label>
      <div className="relative">
        <input
          type={type}
          placeholder={placeholder}
          required={required}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="w-full border-0 border-b-2 border-gray-200 bg-transparent px-0 py-3 text-sm text-[#0A1628] placeholder-gray-300 focus:outline-none focus:ring-0 transition-colors"
        />
        <motion.div
          className="absolute bottom-0 left-0 h-0.5 bg-[#02334E]"
          initial={{ width: "0%" }}
          animate={{ width: focused ? "100%" : "0%" }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  );
}

function AnimatedTextarea() {
  const [focused, setFocused] = useState(false);
  return (
    <div>
      <label className="block text-xs font-semibold text-[#0A1628] uppercase tracking-wider mb-1.5">
        Your Message <span className="text-[#02334E]">*</span>
      </label>
      <div className="relative">
        <textarea
          rows={5}
          placeholder="Briefly describe your legal matter..."
          required
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="w-full border-0 border-b-2 border-gray-200 bg-transparent px-0 py-3 text-sm text-[#0A1628] placeholder-gray-300 focus:outline-none focus:ring-0 resize-none transition-colors"
        />
        <motion.div
          className="absolute bottom-0 left-0 h-0.5 bg-[#02334E]"
          initial={{ width: "0%" }}
          animate={{ width: focused ? "100%" : "0%" }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  );
}

function AnimatedSelect() {
  const [focused, setFocused] = useState(false);
  return (
    <div>
      <label className="block text-xs font-semibold text-[#0A1628] uppercase tracking-wider mb-1.5">
        Practice Area
      </label>
      <div className="relative">
        <select
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="w-full border-0 border-b-2 border-gray-200 bg-transparent px-0 py-3 text-sm text-gray-500 focus:outline-none focus:ring-0 appearance-none cursor-pointer transition-colors"
        >
          <option value="">Select a practice area</option>
          <option>Corporate Law</option>
          <option>Litigation &amp; Dispute Resolution</option>
          <option>Intellectual Property</option>
          <option>Employment Law</option>
          <option>Real Estate &amp; Property Law</option>
          <option>Taxation &amp; Compliance</option>
          <option>Other</option>
        </select>
        <motion.div
          className="absolute bottom-0 left-0 h-0.5 bg-[#02334E]"
          initial={{ width: "0%" }}
          animate={{ width: focused ? "100%" : "0%" }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  );
}

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#02334E] text-white py-28 px-6 overflow-hidden">
        {/* Dot-grid texture */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "radial-gradient(circle, #FEDDDD 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="relative max-w-4xl mx-auto text-center">
          <HeroText delay={0.05}>
            <p className="text-[#FEDDDD] text-xs font-semibold uppercase tracking-widest mb-4">
              Reach Out
            </p>
          </HeroText>
          <HeroText delay={0.18}>
            <h1
              className="text-4xl md:text-6xl font-black mb-6 leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Get In{" "}
              <span className="text-[#FEDDDD]">Touch</span>
            </h1>
          </HeroText>
          <motion.p
            className="text-white/70 text-lg max-w-xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
          >
            Reach out to schedule your consultation or ask any questions. We respond within 24 hours.
          </motion.p>
          <motion.div
            className="mt-8 flex justify-center"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
          >
            <DrawLine className="w-24" />
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-16 items-start">
          {/* Left: Contact Info (40%) */}
          <SlideInLeft className="lg:col-span-2">
            <div>
              <p className="text-[#02334E] text-xs font-semibold uppercase tracking-widest mb-3">
                Our Office
              </p>
              <h2
                className="text-2xl md:text-3xl font-black text-[#0A1628] mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Contact Information
              </h2>
              <DrawLine className="w-16 mb-8" />

              <div className="space-y-7">
                {contactDetails.map(({ icon: Icon, label, value, href }) => (
                  <motion.div
                    key={label}
                    className="flex gap-4"
                    whileHover={{ x: 3 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#02334E] flex items-center justify-center shrink-0">
                      <Icon className="text-[#FEDDDD]" size={18} />
                    </div>
                    <div>
                      <p className="font-semibold text-[#0A1628] text-sm">{label}</p>
                      {href ? (
                        <a
                          href={href}
                          className="text-[#64748B] text-sm mt-0.5 hover:text-[#02334E] transition-colors leading-relaxed"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="text-[#64748B] text-sm mt-0.5 leading-relaxed">{value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Emergency card */}
              <motion.div
                className="mt-10 rounded-xl p-6 text-white overflow-hidden relative"
                style={{ background: "linear-gradient(135deg, #02334E 0%, #011E30 100%)" }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: "radial-gradient(circle, #FEDDDD 1px, transparent 1px)",
                    backgroundSize: "20px 20px",
                  }}
                />
                <div className="relative">
                  <p className="text-[#FEDDDD] font-bold text-sm mb-1">24/7 Emergency Legal Support</p>
                  <p className="text-white/60 text-xs mb-3">
                    For urgent legal matters outside office hours, call our emergency line:
                  </p>
                  <a
                    href="tel:+919820000000"
                    className="text-white font-black text-xl hover:text-[#FEDDDD] transition-colors"
                  >
                    +91 98200 00000
                  </a>
                </div>
              </motion.div>
            </div>
          </SlideInLeft>

          {/* Right: Form (60%) */}
          <SlideInRight className="lg:col-span-3" delay={0.1}>
            <div>
              <p className="text-[#02334E] text-xs font-semibold uppercase tracking-widest mb-3">
                Inquire Now
              </p>
              <h2
                className="text-2xl md:text-3xl font-black text-[#0A1628] mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Send Us A Message
              </h2>
              <DrawLine className="w-16 mb-8" />

              {submitted ? (
                <motion.div
                  className="rounded-2xl border border-green-100 bg-green-50 p-10 text-center"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="w-16 h-16 rounded-full bg-[#02334E] flex items-center justify-center mx-auto mb-4">
                    <ArrowRight className="text-[#FEDDDD]" size={24} />
                  </div>
                  <h3
                    className="text-xl font-black text-[#0A1628] mb-2"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Message Received
                  </h3>
                  <p className="text-[#64748B] text-sm">
                    Thank you for reaching out. Our team will get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <AnimatedInput label="First Name" required />
                    <AnimatedInput label="Last Name" required />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <AnimatedInput label="Email Address" type="email" required />
                    <AnimatedInput label="Phone Number" type="tel" />
                  </div>
                  <AnimatedSelect />
                  <AnimatedTextarea />

                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="disclaimer"
                      required
                      className="mt-0.5 w-4 h-4 accent-[#02334E] shrink-0 cursor-pointer"
                    />
                    <label htmlFor="disclaimer" className="text-xs text-[#64748B] leading-relaxed cursor-pointer">
                      By submitting this form, I acknowledge that no attorney-client relationship is formed until formally agreed upon. My information will be kept strictly confidential.
                    </label>
                  </div>

                  <motion.button
                    type="submit"
                    className="w-full bg-[#02334E] text-white font-bold py-4 rounded-xl text-sm relative overflow-hidden group"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.span
                      className="absolute inset-0 bg-white/5"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    />
                    <span className="relative flex items-center justify-center gap-2">
                      Submit Inquiry <ArrowRight size={16} />
                    </span>
                  </motion.button>
                </form>
              )}
            </div>
          </SlideInRight>
        </div>
      </section>
    </>
  );
}
