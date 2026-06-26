import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
  Services: [
    { label: "Supplier Sourcing", href: "/services" },
    { label: "Factory Verification", href: "/services" },
    { label: "Quality Inspection", href: "/services" },
    { label: "Production Follow-up", href: "/services" },
    { label: "Shipping Coordination", href: "/services" },
  ],
  Company: [
    { label: "About Us", href: "/" },
    { label: "How It Works", href: "/how-it-works" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-md bg-white flex items-center justify-center">
                <span className="text-primary font-bold text-sm">SS</span>
              </div>
              <span className="text-lg font-bold tracking-tight">
                SSourcing China
              </span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed max-w-sm">
              Your reliable China sourcing agent. We help overseas buyers find
              trustworthy suppliers, verify factories, inspect quality, and
              coordinate shipping.
            </p>
            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3 text-sm text-white/70">
                <Mail className="w-4 h-4 shrink-0" />
                <span>contact@ssourcingchina.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-white/70">
                <Phone className="w-4 h-4 shrink-0" />
                <span>+86 21 1234 5678</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-white/70">
                <MapPin className="w-4 h-4 shrink-0" />
                <span>Shanghai, China</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-semibold text-sm mb-4">Services</h3>
            <ul className="space-y-2.5">
              {footerLinks.Services.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-semibold text-sm mb-4">Company</h3>
            <ul className="space-y-2.5">
              {footerLinks.Company.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-semibold text-sm mb-4">Legal</h3>
            <ul className="space-y-2.5">
              {footerLinks.Legal.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/50">
            &copy; {new Date().getFullYear()} SSourcing China. All rights reserved.
          </p>
          <p className="text-xs text-white/50">
            Registered sourcing agency based in Shanghai, China.
          </p>
        </div>
      </div>
    </footer>
  );
}
