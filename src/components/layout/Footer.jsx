import { Instagram, Mail, Music2 } from "lucide-react";
import { Link } from "react-router-dom";

const footerColumns = [
  { title: "Shop", links: ["Bestsellers", "Earrings", "Necklaces", "Huggies"] },
  { title: "Help", links: ["Shipping", "Returns", "Care Guide", "Contact"] },
  { title: "Company", links: ["About", "Journal", "Sustainability", "Gifting"] },
];

export default function Footer() {
  return (
    <footer className="bg-velmora-espresso text-velmora-ivory">
      <div className="velmora-container py-14 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.3fr_2fr]">
          <div>
            <Link to="/" className="font-serifDisplay text-4xl font-semibold tracking-[0.18em]">
              VELMORA
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-7 text-velmora-parchment">
              Demi-fine gold jewelry made for everyday ritual, meaningful gifts,
              and heirloom moods at an accessible price.
            </p>
            <div className="mt-6 flex gap-3">
              {[Instagram, Music2, Mail].map((Icon, index) => (
                <a
                  href="#"
                  key={index}
                  className="grid h-10 w-10 place-items-center rounded-full border border-velmora-linen/40 text-velmora-ivory transition hover:border-velmora-gold hover:text-velmora-gold"
                  aria-label="Velmora social link"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {footerColumns.map((column) => (
              <div key={column.title}>
                <h3 className="text-xs font-bold uppercase tracking-nav text-velmora-gold">
                  {column.title}
                </h3>
                <ul className="mt-5 space-y-3 text-sm text-velmora-parchment">
                  {column.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="transition hover:text-velmora-gold">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-5 border-t border-velmora-linen/25 pt-8 text-xs text-velmora-parchment md:flex-row md:items-center md:justify-between">
          <p>© 2026 Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex flex-wrap gap-2">
            {['VISA', 'AMEX', 'MC', 'APPLE PAY'].map((label) => (
              <span
                key={label}
                className="rounded border border-velmora-linen/30 px-3 py-1 text-[10px] font-bold tracking-nav"
              >
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
