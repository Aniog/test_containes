import { Link } from "react-router-dom";
import { Instagram, Facebook, Youtube } from "lucide-react";

const columns = [
  {
    title: "Shop",
    links: [
      { label: "All jewelry", to: "/shop" },
      { label: "Earrings", to: "/shop/earrings" },
      { label: "Necklaces", to: "/shop/necklaces" },
      { label: "Huggies", to: "/shop/huggies" },
      { label: "Gift sets", to: "/shop" },
    ],
  },
  {
    title: "Help",
    links: [
      { label: "Shipping", to: "/" },
      { label: "Returns & exchanges", to: "/" },
      { label: "Care guide", to: "/" },
      { label: "Contact us", to: "/" },
      { label: "FAQ", to: "/" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Our story", to: "/about" },
      { label: "Journal", to: "/journal" },
      { label: "Sustainability", to: "/about" },
      { label: "Wholesale", to: "/" },
      { label: "Careers", to: "/" },
    ],
  },
];

const payments = ["Visa", "Mastercard", "Amex", "PayPal", "Apple Pay"];

export default function Footer() {
  return (
    <footer className="bg-espresso text-ivory/85">
      <div className="container-velmora py-20 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
          {/* Logo + tagline */}
          <div className="md:col-span-4">
            <Link
              to="/"
              className="font-serif text-2xl tracking-[0.32em] uppercase text-ivory"
            >
              Velmora
            </Link>
            <p className="mt-5 font-serif text-xl leading-snug text-ivory/90 max-w-xs">
              Demi-fine jewelry, crafted to be treasured.
            </p>
            <p className="mt-4 font-sans text-sm text-ivory/60 max-w-xs">
              Designed in small batches. Made for everyday rituals and the
              quiet moments in between.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Velmora on Instagram"
                className="text-ivory/70 hover:text-gold transition-colors duration-300"
              >
                <Instagram className="h-4 w-4" strokeWidth={1.4} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Velmora on Facebook"
                className="text-ivory/70 hover:text-gold transition-colors duration-300"
              >
                <Facebook className="h-4 w-4" strokeWidth={1.4} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Velmora on YouTube"
                className="text-ivory/70 hover:text-gold transition-colors duration-300"
              >
                <Youtube className="h-4 w-4" strokeWidth={1.4} />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.title} className="md:col-span-2">
              <h4 className="eyebrow !text-gold mb-5">{col.title}</h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="font-sans text-sm text-ivory/75 hover:text-ivory transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact column */}
          <div className="md:col-span-2">
            <h4 className="eyebrow !text-gold mb-5">Contact</h4>
            <ul className="space-y-3 font-sans text-sm text-ivory/75">
              <li>hello@velmora.co</li>
              <li>Mon–Fri, 9am–5pm</li>
              <li>Based in New York</li>
            </ul>
          </div>
        </div>

        {/* Hairline + bottom bar */}
        <div className="hairline bg-sand/20 mt-16" />
        <div className="mt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <p className="font-sans text-[11px] uppercase tracking-widest2 text-ivory/55">
            © {new Date().getFullYear()} Velmora Fine Jewelry
          </p>
          <ul className="flex flex-wrap items-center gap-x-5 gap-y-2">
            {payments.map((p) => (
              <li
                key={p}
                className="font-sans text-[10px] uppercase tracking-widest2 text-ivory/55 border border-ivory/15 px-2.5 py-1"
              >
                {p}
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-5 font-sans text-[11px] uppercase tracking-widest2 text-ivory/55">
            <Link to="/" className="hover:text-ivory transition-colors">
              Privacy
            </Link>
            <Link to="/" className="hover:text-ivory transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
