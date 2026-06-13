import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      <section className="bg-[#02334E] text-white py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#FEDDDD] text-xs font-semibold uppercase tracking-widest mb-3">Get in Touch</p>
          <h1 className="text-4xl md:text-5xl font-black mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>Contact Us</h1>
          <p className="text-white/60 text-lg max-w-xl mx-auto">
            Reach out to schedule your free consultation or ask any questions. We respond within 24 hours.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <div>
            <h2 className="text-2xl font-black text-[#0A1628] mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>Send Us a Message</h2>
            <p className="text-[#64748B] text-sm mb-8">Fill out the form and our team will get back to you promptly.</p>
            <form className="flex flex-col gap-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#0A1628] uppercase tracking-wider mb-1.5">First Name *</label>
                  <input type="text" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#02334E]" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#0A1628] uppercase tracking-wider mb-1.5">Last Name *</label>
                  <input type="text" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#02334E]" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#0A1628] uppercase tracking-wider mb-1.5">Email Address *</label>
                <input type="email" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#02334E]" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#0A1628] uppercase tracking-wider mb-1.5">Phone Number</label>
                <input type="tel" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#02334E]" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#0A1628] uppercase tracking-wider mb-1.5">Practice Area</label>
                <select className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#02334E]">
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
                <label className="block text-xs font-semibold text-[#0A1628] uppercase tracking-wider mb-1.5">Your Message *</label>
                <textarea
                  rows={5}
                  placeholder="Briefly describe your legal matter..."
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-[#02334E]"
                />
              </div>
              <p className="text-xs text-[#64748B]">
                By submitting this form, you acknowledge that no attorney-client relationship is formed until formally agreed upon. Your information is kept strictly confidential.
              </p>
              <button type="submit" className="bg-[#02334E] text-white font-semibold py-4 rounded-lg hover:bg-[#011E30] transition-colors text-sm">
                Submit Inquiry
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-8">
            <div>
              <h2 className="text-2xl font-black text-[#0A1628] mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>Our Office</h2>
              <div className="space-y-5">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#02334E] flex items-center justify-center shrink-0">
                    <MapPin className="text-[#FEDDDD]" size={18} />
                  </div>
                  <div>
                    <p className="font-semibold text-[#0A1628] text-sm">Address</p>
                    <p className="text-[#64748B] text-sm mt-0.5">123 Legal Avenue, Fort<br />Mumbai, Maharashtra 400001</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#02334E] flex items-center justify-center shrink-0">
                    <Phone className="text-[#FEDDDD]" size={18} />
                  </div>
                  <div>
                    <p className="font-semibold text-[#0A1628] text-sm">Phone</p>
                    <a href="tel:+911234567890" className="text-[#64748B] text-sm hover:text-[#02334E] transition-colors">+91 12345 67890</a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#02334E] flex items-center justify-center shrink-0">
                    <Mail className="text-[#FEDDDD]" size={18} />
                  </div>
                  <div>
                    <p className="font-semibold text-[#0A1628] text-sm">Email</p>
                    <a href="mailto:info@invictuslaw.in" className="text-[#64748B] text-sm hover:text-[#02334E] transition-colors">info@invictuslaw.in</a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#02334E] flex items-center justify-center shrink-0">
                    <Clock className="text-[#FEDDDD]" size={18} />
                  </div>
                  <div>
                    <p className="font-semibold text-[#0A1628] text-sm">Office Hours</p>
                    <p className="text-[#64748B] text-sm mt-0.5">Monday – Friday: 9:00 AM – 6:00 PM<br />Saturday: 10:00 AM – 2:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-[#F8FAFC] rounded-xl h-64 flex items-center justify-center border-2 border-dashed border-gray-200">
              <div className="text-center">
                <MapPin className="text-[#02334E] mx-auto mb-2" size={32} />
                <p className="text-[#0A1628] font-semibold text-sm">Google Maps</p>
                <p className="text-[#64748B] text-xs mt-1">Embed your Google Maps location here</p>
              </div>
            </div>

            <div className="bg-[#02334E] rounded-xl p-6 text-white">
              <p className="text-[#FEDDDD] font-semibold text-sm mb-2">Emergency Legal Assistance</p>
              <p className="text-white/60 text-sm">For urgent legal matters outside of office hours, call our emergency line:</p>
              <a href="tel:+911234567890" className="text-white font-black text-xl mt-2 block hover:text-[#FEDDDD] transition-colors">
                +91 12345 67890
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
