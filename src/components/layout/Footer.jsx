import { Link } from "react-router-dom";
import { Instagram, Facebook, Youtube, Pin } from "lucide-react";
import Container from "@/components/ui/Container";

const columns = [
  {
    title: "Shop",
    links: [
      { label: "Earrings", to: "/shop?category=earrings" },
      { label: "Necklaces", to: "/shop?category=necklaces" },
      { label: "Huggies", to: "/shop?category=huggies" },
      { label: "Gift Sets", to: "/shop?category=sets" },
      { label: "New Arrivals", to: "/shop?filter=new" },
    ],
  },
  {
    title: "Help",
    links: [
      { label: "Shipping & Returns", to: "/help/shipping" },
      { label: "Care Guide", to: "/help/care" },
      { label: "Size Guide", to: "/help/size" },
      { label: "Contact Us", to: "/contact" },
      { label: "FAQ", to: "/help/faq" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Our Story", to: "/about" },
      { label: "The Journal", to: "/journal" },
      { label: "Sustainability", to: "/sustainability" },
      { label: "Stockists", to: "/stockists" },
      { label: "Careers", to: "/careers" },
    ],
  },
];

function PaymentIcon({ children, label }) {
  return (
    <div
      title={label}
      className="h-6 px-2 flex items-center justify-center border border-hairline text-[10px] tracking-label font-medium text-espresso/70 bg-ivory"
    >
      {children}
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-espresso text-ivory mt-24">
      <Container className="py-20 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          <div className="md:col-span-4 flex flex-col gap-5">
            <Link to="/" className="font-serif text-3xl tracking-[0.32em] font-light">
              VELMORA
            </Link>
            <p className="text-sm text-ivory/65 leading-relaxed max-w-xs font-light">
              Demi-fine jewelry, hand-finished in our atelier. Designed to be worn every day,
              and treasured for a lifetime.
            </p>
            <div className="flex items-center gap-5 mt-2">
              <a href="#" aria-label="Instagram" className="text-ivory/70 hover:text-brass-soft transition-colors">
                <Instagram size={18} strokeWidth={1.3} />
              </a>
              <a href="#" aria-label="Pinterest" className="text-ivory/70 hover:text-brass-soft transition-colors">
                <Pin size={18} strokeWidth={1.3} />
              </a>
              <a href="#" aria-label="Facebook" className="text-ivory/70 hover:text-brass-soft transition-colors">
                <Facebook size={18} strokeWidth={1.3} />
              </a>
              <a href="#" aria-label="YouTube" className="text-ivory/70 hover:text-brass-soft transition-colors">
                <Youtube size={18} strokeWidth={1.3} />
              </a>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title} className="md:col-span-2 flex flex-col gap-4">
              <h4 className="label text-ivory/55 mb-1">{col.title}</h4>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      to={l.to}
                      className="text-sm text-ivory/80 hover:text-ivory transition-colors font-light"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="md:col-span-2 flex flex-col gap-4">
            <h4 className="label text-ivory/55 mb-1">Stay in touch</h4>
            <p className="text-sm text-ivory/70 font-light leading-relaxed">
              Quiet, considered emails. New launches and editorial stories, a few times a season.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex border-b border-ivory/30 focus-within:border-ivory transition-colors"
            >
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 bg-transparent py-2.5 text-sm placeholder:text-ivory/40 text-ivory focus:outline-none"
              />
              <button type="submit" className="label text-ivory/85 hover:text-ivory px-2">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="hairline bg-ivory/15 mt-16" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8">
          <p className="text-xs text-ivory/45 font-light">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-1.5">
            <PaymentIcon label="Visa">VISA</PaymentIcon>
            <PaymentIcon label="Mastercard">MC</PaymentIcon>
            <PaymentIcon label="American Express">AMEX</PaymentIcon>
            <PaymentIcon label="PayPal">PAYPAL</PaymentIcon>
            <PaymentIcon label="Apple Pay">PAY</PaymentIcon>
            <PaymentIcon label="Klarna">KLARNA</PaymentIcon>
          </div>
          <div className="flex items-center gap-5 text-xs text-ivory/45 font-light">
            <Link to="/privacy" className="hover:text-ivory/75 transition-colors">Privacy</Link>
            <Link to="/terms" className="hover:text-ivory/75 transition-colors">Terms</Link>
            <Link to="/cookies" className="hover:text-ivory/75 transition-colors">Cookies</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
