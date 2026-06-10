import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

const practiceAreas = [
  { label: "Corporate Law", slug: "corporate-law" },
  { label: "Litigation & Dispute Resolution", slug: "litigation" },
  { label: "Intellectual Property", slug: "intellectual-property" },
  { label: "Employment Law", slug: "employment-law" },
  { label: "Real Estate & Property Law", slug: "real-estate" },
  { label: "Taxation & Compliance", slug: "taxation" },
];

export default function Footer() {
  return (
    <footer className="bg-[#02334E] text-white">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <span className="block text-[#C8A065] font-black tracking-widest text-xl">INVICTUS</span>
              <span className="text-white/60 text-[9px] tracking-[0.35em] uppercase">Law Practice</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Delivering expert legal counsel with integrity, strategy, and a relentless commitment to our clients&apos; success.
            </p>
          </div>

          {/* Practice Areas */}
          <div>
            <h4 className="text-[#C8A065] text-xs font-semibold uppercase tracking-widest mb-4">Practice Areas</h4>
            <ul className="space-y-2">
              {practiceAreas.map((area) => (
                <li key={area.slug}>
                  <Link href={`/practice-areas/${area.slug}`} className="text-white/60 hover:text-[#C8A065] text-sm transition-colors">
                    {area.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[#C8A065] text-xs font-semibold uppercase tracking-widest mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: "About Us", href: "/about" },
                { label: "Our Team", href: "/team" },
                { label: "Careers", href: "/careers" },
                { label: "Contact", href: "/contact" },
                { label: "Privacy Policy", href: "/privacy-policy" },
                { label: "Terms of Use", href: "/terms-of-use" },
                { label: "Disclaimer", href: "/disclaimer" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/60 hover:text-[#C8A065] text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[#C8A065] text-xs font-semibold uppercase tracking-widest mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex gap-2 text-sm text-white/60">
                <MapPin size={16} className="mt-0.5 shrink-0 text-[#C8A065]" />
                <span>123 Legal Avenue, Mumbai, Maharashtra 400001</span>
              </li>
              <li className="flex gap-2 text-sm text-white/60">
                <Phone size={16} className="shrink-0 text-[#C8A065]" />
                <a href="tel:+911234567890" className="hover:text-[#C8A065] transition-colors">+91 12345 67890</a>
              </li>
              <li className="flex gap-2 text-sm text-white/60">
                <Mail size={16} className="shrink-0 text-[#C8A065]" />
                <a href="mailto:info@invictuslaw.in" className="hover:text-[#C8A065] transition-colors">info@invictuslaw.in</a>
              </li>
            </ul>
            <Link
              href="/contact"
              className="mt-6 inline-block px-5 py-2.5 bg-[#C8A065] text-white text-sm font-semibold rounded hover:bg-[#a8844a] transition-colors"
            >
              Book a Consultation
            </Link>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-white/40">
          <p>© {new Date().getFullYear()} Invictus Law Practice. All rights reserved.</p>
          <p>
            <Link href="/disclaimer" className="hover:text-white/70 transition-colors">Disclaimer</Link>
            {" · "}
            <Link href="/privacy-policy" className="hover:text-white/70 transition-colors">Privacy Policy</Link>
            {" · "}
            <Link href="/terms-of-use" className="hover:text-white/70 transition-colors">Terms of Use</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
