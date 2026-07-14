import { Link } from "react-router-dom";
import { Instagram, Facebook, Youtube, Twitter } from "lucide-react";

const COLUMNS = [
  {
    title: "Shop",
    links: [
      { label: "All jewelry", to: "/shop" },
      { label: "Earrings", to: "/shop?category=earrings" },
      { label: "Necklaces", to: "/shop?category=necklaces" },
      { label: "Huggies", to: "/shop?category=huggies" },
      { label: "Gift sets", to: "/shop?category=sets" },
    ],
  },
  {
    title: "Help",
    links: [
      { label: "Shipping & returns", to: "/about" },
      { label: "Care guide", to: "/about" },
      { label: "Size guide", to: "/about" },
      { label: "Contact us", to: "/about" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Our story", to: "/about" },
      { label: "Journal", to: "/journal" },
      { label: "Sustainability", to: "/about" },
      { label: "Stockists", to: "/about" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal text-ivory">
      <div className="container-editorial py-20 md:py-24">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-4">
            <Link to="/" className="font-serif text-2xl tracking-[0.32em] text-ivory">
              VELMORA
            </Link>
            <p className="mt-5 max-w-xs font-serif text-lg italic text-ivory/80">
              Demi-fine gold jewelry, made to be lived in.
            </p>
            <div className="mt-8 flex items-center gap-4">
              {[
                { Icon: Instagram, label: "Instagram" },
                { Icon: Facebook, label: "Facebook" },
                { Icon: Twitter, label: "Twitter" },
                { Icon: Youtube, label: "YouTube" },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="inline-flex h-9 w-9 items-center justify-center border border-ivory/30 text-ivory/80 transition-colors hover:border-ivory hover:text-ivory"
                >
                  <Icon size={15} strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 md:col-span-8 md:grid-cols-3">
            {COLUMNS.map((col) => (
              <div key={col.title}>
                <p className="eyebrow !text-ivory/60">{col.title}</p>
                <ul className="mt-5 space-y-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.to}
                        className="font-sans text-[14px] text-ivory/85 transition-colors hover:text-ivory"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-6 border-t border-ivory/15 pt-8 md:flex-row md:items-center md:justify-between">
          <p className="font-sans text-[12px] text-ivory/60">
            © {new Date().getFullYear()} Velmora Fine Jewelry. Designed in California. Made with care.
          </p>
          <div className="flex items-center gap-3">
            {["VISA", "MC", "AMEX", "PayPal", "Apple"].map((p) => (
              <span
                key={p}
                className="inline-flex h-7 min-w-12 items-center justify-center border border-ivory/25 px-2 font-sans text-[10px] uppercase tracking-product text-ivory/70"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
