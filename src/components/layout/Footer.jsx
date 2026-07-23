import { Link } from "react-router-dom";
import { Instagram, Mail } from "lucide-react";
import Container from "@/components/ui/Container";

const cols = [
  {
    title: "Shop",
    links: [
      { label: "All Jewelry", to: "/shop" },
      { label: "Earrings", to: "/shop?category=earrings" },
      { label: "Necklaces", to: "/shop?category=necklaces" },
      { label: "Huggies", to: "/shop?category=huggies" },
      { label: "Gift Sets", to: "/shop?category=sets" },
    ],
  },
  {
    title: "Help",
    links: [
      { label: "Shipping & Returns", to: "#" },
      { label: "Care Guide", to: "#" },
      { label: "Size Guide", to: "#" },
      { label: "Contact Us", to: "#" },
      { label: "FAQs", to: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Our Story", to: "/about" },
      { label: "The Journal", to: "/journal" },
      { label: "Sustainability", to: "#" },
      { label: "Press", to: "#" },
      { label: "Careers", to: "#" },
    ],
  },
];

function PaymentIcon({ label }) {
  return (
    <span className="inline-flex h-6 min-w-[40px] items-center justify-center rounded-sm border border-line-dark/60 bg-ivory/5 px-1.5 text-[9px] font-medium uppercase tracking-widest text-ivory/80">
      {label}
    </span>
  );
}

export default function Footer() {
  return (
    <footer id="footer-section" className="bg-espresso text-ivory">
      <Container className="py-16 sm:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link
              to="/"
              className="font-serif text-2xl tracking-[0.32em] block mb-5"
              aria-label="Velmora — Home"
            >
              VELMORA
            </Link>
            <p id="footer-tagline" className="text-sm leading-relaxed text-ivory/70 max-w-xs font-light">
              Demi-fine gold jewelry, designed in studio and made to be worn every day. Quiet luxury, considered forever.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a href="#" aria-label="Instagram" className="text-ivory/80 hover:text-gold transition-colors">
                <Instagram size={18} strokeWidth={1.5} />
              </a>
              <a href="#" aria-label="Email" className="text-ivory/80 hover:text-gold transition-colors">
                <Mail size={18} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {cols.map((col) => (
            <div key={col.title} className="lg:col-span-2">
              <h4 className="text-[11px] uppercase tracking-widest font-medium text-gold mb-5">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      to={l.to}
                      className="text-sm text-ivory/75 hover:text-ivory transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="lg:col-span-2">
            <h4 className="text-[11px] uppercase tracking-widest font-medium text-gold mb-5">
              Connect
            </h4>
            <p className="text-sm text-ivory/75 leading-relaxed">
              hello@velmora.co
            </p>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-line-dark/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <p className="text-[11px] uppercase tracking-widest text-ivory/50">
            © {new Date().getFullYear()} Velmora Fine Jewelry
          </p>
          <div className="flex items-center gap-2">
            <PaymentIcon label="Visa" />
            <PaymentIcon label="MC" />
            <PaymentIcon label="Amex" />
            <PaymentIcon label="PayPal" />
            <PaymentIcon label="Apple" />
          </div>
        </div>
      </Container>
    </footer>
  );
}
