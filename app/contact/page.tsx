import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      <section className="bg-[#0F172A] text-white py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#3B82F6] text-xs font-semibold uppercase tracking-widest mb-3">Get in Touch</p>
          <h1 className="text-4xl md:text-5xl font-black mb-6">Contact Us</h1>
          <p className="text-white/60 text-lg max-w-xl mx-auto">
            Reach out to schedule your free consultation or ask any questions. We respond within 24 hours.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <div>
            <h2 className="text-2xl font-black text-[#0F172A] mb-2">Send Us a Message</h2>
            <p className="text-gray-400 text-sm mb-8">Fill out the form and our team will get back to you promptly.</p>
            <form className="flex flex-col gap-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#0F172A] uppercase tracking-wider mb-1.5">First Name *</label>
                  <input type="text" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#3B82F6]" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#0F172A] uppercase tracking-wider mb-1.5">Last Name *</label>
                  <input type="text" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#3B82F6]" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#0F172A] uppercase tracking-wider mb-1.5">Email Address *</label>
                <input type="email" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#3B82F6]" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#0F172A] uppercase tracking-wider mb-1.5">Phone Number</label>
                <input type="tel" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#3B82F6]" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#0F172A] uppercase tracking-wider mb-1.5">Practice Area</label>
                <select className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#3B82F6]">
                  <option value="">Select a practice area</option>
                  <option>Corporate Law</option>
                  <option>Litigation &amp; Dispute Resolution</option>
                  <option>Intellectual Property</option>
                  <option>Employment Law</option>
                  <option>Real Estate &amp; Property Law</option>
                  <option>Taxation &amp; Compliance</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#0F172A] uppercase tracking-wider mb-1.5">Your Message *</label>
                <textarea
                  rows={5}
                  placeholder="Briefly describe your legal matter..."
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-[#3B82F6]"
                />
              </div>
              <p className="text-xs text-gray-400">
                By submitting this form, you acknowledge that no attorney-client relationship is formed until formally agreed upon. Your information is kept strictly confidential.
              </p>
              <button type="submit" className="bg-[#0F172A] text-white font-semibold py-4 rounded-lg hover:bg-[#1E293B] transition-colors text-sm">
                Submit Inquiry
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-8">
            <div>
              <h2 className="text-2xl font-black text-[#0F172A] mb-6">Our Office</h2>
              <div className="space-y-5">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#0F172A] flex items-center justify-center shrink-0">
                    <MapPin className="text-[#3B82F6]" size={18} />
                  </div>
                  <div>
                    <p className="font-semibold text-[#0F172A] text-sm">Address</p>
                    <p className="text-gray-400 text-sm mt-0.5">123 Legal Avenue, Fort<br />Mumbai, Maharashtra 400001</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#0F172A] flex items-center justify-center shrink-0">
                    <Phone className="text-[#3B82F6]" size={18} />
                  </div>
                  <div>
                    <p className="font-semibold text-[#0F172A] text-sm">Phone</p>
                    <a href="tel:+911234567890" className="text-gray-400 text-sm hover:text-[#3B82F6] transition-colors">+91 12345 67890</a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#0F172A] flex items-center justify-center shrink-0">
                    <Mail className="text-[#3B82F6]" size={18} />
                  </div>
                  <div>
                    <p className="font-semibold text-[#0F172A] text-sm">Email</p>
                    <a href="mailto:info@invictuslaw.in" className="text-gray-400 text-sm hover:text-[#3B82F6] transition-colors">info@invictuslaw.in</a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#0F172A] flex items-center justify-center shrink-0">
                    <Clock className="text-[#3B82F6]" size={18} />
                  </div>
                  <div>
                    <p className="font-semibold text-[#0F172A] text-sm">Office Hours</p>
                    <p className="text-gray-400 text-sm mt-0.5">Monday – Friday: 9:00 AM – 6:00 PM<br />Saturday: 10:00 AM – 2:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-[#F8FAFC] rounded-xl h-64 flex items-center justify-center border-2 border-dashed border-gray-200">
              <div className="text-center">
                <MapPin className="text-[#3B82F6] mx-auto mb-2" size={32} />
                <p className="text-[#0F172A] font-semibold text-sm">Google Maps</p>
                <p className="text-gray-400 text-xs mt-1">Embed your Google Maps location here</p>
              </div>
            </div>

            <div className="bg-[#0F172A] rounded-xl p-6 text-white">
              <p className="text-[#3B82F6] font-semibold text-sm mb-2">Emergency Legal Assistance</p>
              <p className="text-white/60 text-sm">For urgent legal matters outside of office hours, call our emergency line:</p>
              <a href="tel:+911234567890" className="text-white font-black text-xl mt-2 block hover:text-[#60A5FA] transition-colors">
                +91 12345 67890
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
