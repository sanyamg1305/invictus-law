"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
    href: undefined as string | undefined,
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
    href: undefined as string | undefined,
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
      <label className="block text-xs font-bold text-[#0A1628] uppercase tracking-wider mb-2">
        {label}{" "}
        {required && <span className="text-[#02334E]">*</span>}
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
          className="absolute bottom-0 left-0 h-[2px] bg-[#02334E] origin-left"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: focused ? 1 : 0 }}
          transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  );
}

function AnimatedTextarea() {
  const [focused, setFocused] = useState(false);
  return (
    <div>
      <label className="block text-xs font-bold text-[#0A1628] uppercase tracking-wider mb-2">
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
          className="absolute bottom-0 left-0 h-[2px] bg-[#02334E] origin-left"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: focused ? 1 : 0 }}
          transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  );
}

function AnimatedSelect() {
  const [focused, setFocused] = useState(false);
  return (
    <div>
      <label className="block text-xs font-bold text-[#0A1628] uppercase tracking-wider mb-2">
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
          className="absolute bottom-0 left-0 h-[2px] bg-[#02334E] origin-left"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: focused ? 1 : 0 }}
          transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
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
      <section className="relative bg-[#02334E] text-white py-32 px-6 overflow-hidden">
        {/* Dot-grid texture */}
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #FEDDDD 1.5px, transparent 1.5px)",
            backgroundSize: "28px 28px",
          }}
        />
        {/* Radial depth vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(1,12,20,0.55)_100%)]" />

        <div className="relative max-w-4xl mx-auto text-center">
          <HeroText delay={0.05}>
            <p className="text-[#FEDDDD] text-xs font-semibold uppercase tracking-[0.22em] mb-5">
              Reach Out
            </p>
          </HeroText>
          <HeroText delay={0.18}>
            <h1
              className="text-5xl md:text-7xl font-black mb-6 leading-[1.05]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Get In{" "}
              <span className="text-[#FEDDDD]">Touch</span>
            </h1>
          </HeroText>
          <motion.p
            className="text-white/70 text-xl max-w-xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.42 }}
          >
            Reach out to schedule your consultation or ask any questions. We
            respond within 24 hours.
          </motion.p>
          <motion.div
            className="mt-10 flex justify-center"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.62 }}
          >
            <DrawLine className="w-32" />
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-16 items-start">
          {/* Left: Contact Info (40%) */}
          <SlideInLeft className="lg:col-span-2">
            <div>
              <p className="text-[#02334E] text-xs font-semibold uppercase tracking-[0.2em] mb-3">
                Our Office
              </p>
              <h2
                className="text-2xl md:text-3xl font-black text-[#0A1628] mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Contact Information
              </h2>
              <DrawLine className="w-20 mb-8" />

              <div className="space-y-8">
                {contactDetails.map(({ icon: Icon, label, value, href }, i) => (
                  <motion.div
                    key={label}
                    className="flex gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.55,
                      ease: [0.22, 1, 0.36, 1],
                      delay: 0.1 + i * 0.1,
                    }}
                    whileHover={{ x: 4 }}
                  >
                    <motion.div
                      className="w-11 h-11 rounded-xl bg-[#02334E] flex items-center justify-center shrink-0"
                      whileHover={{ scale: 1.1, rotate: -4 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Icon className="text-[#FEDDDD]" size={18} />
                    </motion.div>
                    <div>
                      <p className="font-bold text-[#0A1628] text-sm tracking-wide">
                        {label}
                      </p>
                      {href ? (
                        <a
                          href={href}
                          className="text-[#64748B] text-sm mt-1 hover:text-[#02334E] transition-colors leading-relaxed block"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="text-[#64748B] text-sm mt-1 leading-relaxed">
                          {value}
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Emergency card */}
              <motion.div
                className="mt-10 rounded-2xl p-7 text-white overflow-hidden relative"
                style={{
                  background:
                    "linear-gradient(135deg, #02334E 0%, #011E30 100%)",
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
                whileHover={{ scale: 1.03 }}
              >
                <div
                  className="absolute inset-0 opacity-[0.1]"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle, #FEDDDD 1px, transparent 1px)",
                    backgroundSize: "18px 18px",
                  }}
                />
                <div className="relative">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 rounded-full bg-[#FEDDDD] animate-pulse" />
                    <p className="text-[#FEDDDD] font-bold text-sm">
                      24/7 Emergency Legal Support
                    </p>
                  </div>
                  <p className="text-white/60 text-xs mb-4 leading-relaxed">
                    For urgent legal matters outside office hours, call our
                    emergency line:
                  </p>
                  <a
                    href="tel:+919820000000"
                    className="text-white font-black text-2xl hover:text-[#FEDDDD] transition-colors"
                  >
                    +91 98200 00000
                  </a>
                </div>
              </motion.div>
            </div>
          </SlideInLeft>

          {/* Right: Form (60%) */}
          <SlideInRight className="lg:col-span-3" delay={0.12}>
            <div>
              <p className="text-[#02334E] text-xs font-semibold uppercase tracking-[0.2em] mb-3">
                Inquire Now
              </p>
              <h2
                className="text-2xl md:text-3xl font-black text-[#0A1628] mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Send Us A Message
              </h2>
              <DrawLine className="w-20 mb-8" />

              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    className="rounded-2xl border border-green-100 bg-green-50 p-12 text-center"
                    initial={{ opacity: 0, scale: 0.92 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.92 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <motion.div
                      className="w-20 h-20 rounded-full bg-[#02334E] flex items-center justify-center mx-auto mb-5"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 18,
                        delay: 0.2,
                      }}
                    >
                      <ArrowRight className="text-[#FEDDDD]" size={28} />
                    </motion.div>
                    <h3
                      className="text-2xl font-black text-[#0A1628] mb-3"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      Message Received
                    </h3>
                    <p className="text-[#64748B]">
                      Thank you for reaching out. Our team will get back to you
                      within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-7"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="grid sm:grid-cols-2 gap-7">
                      <AnimatedInput label="First Name" required />
                      <AnimatedInput label="Last Name" required />
                    </div>
                    <div className="grid sm:grid-cols-2 gap-7">
                      <AnimatedInput
                        label="Email Address"
                        type="email"
                        required
                      />
                      <AnimatedInput label="Phone Number" type="tel" />
                    </div>
                    <AnimatedSelect />
                    <AnimatedTextarea />

                    <div className="flex items-start gap-3 pt-1">
                      <input
                        type="checkbox"
                        id="disclaimer"
                        required
                        className="mt-0.5 w-4 h-4 accent-[#02334E] shrink-0 cursor-pointer"
                      />
                      <label
                        htmlFor="disclaimer"
                        className="text-xs text-[#64748B] leading-relaxed cursor-pointer"
                      >
                        By submitting this form, I acknowledge that no
                        attorney-client relationship is formed until formally
                        agreed upon. My information will be kept strictly
                        confidential.
                      </label>
                    </div>

                    <motion.button
                      type="submit"
                      className="w-full bg-[#02334E] text-white font-bold py-4 rounded-xl text-sm relative overflow-hidden"
                      whileHover={{ scale: 1.01, backgroundColor: "#011E30" }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ duration: 0.2 }}
                    >
                      <motion.span
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/8 to-transparent"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "100%" }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                      />
                      <span className="relative flex items-center justify-center gap-2">
                        Submit Inquiry <ArrowRight size={16} />
                      </span>
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </SlideInRight>
        </div>
      </section>
    </>
  );
}
