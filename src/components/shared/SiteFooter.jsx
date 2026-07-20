import { Instagram, Mail, MapPin, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const footerColumns = [
  {
    title: "Shop",
    links: [
      { label: "All Jewelry", to: "/shop" },
      { label: "Earrings", to: "/shop?category=Earrings" },
      { label: "Necklaces", to: "/shop?category=Necklaces" },
      { label: "Huggies", to: "/shop?category=Huggies" },
    ],
  },
  {
    title: "Help",
    links: [
      { label: "Shipping & Returns", to: "/#newsletter" },
      { label: "Care Guide", to: "/#journal" },
      { label: "Gift Packaging", to: "/shop" },
      { label: "Contact", to: "/#newsletter" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Velmora", to: "/#story" },
      { label: "Journal", to: "/#journal" },
      { label: "Stockists", to: "/shop" },
      { label: "Careers", to: "/#newsletter" },
    ],
  },
];

const paymentLabels = ["Visa", "AmEx", "PayPal", "Apple Pay"];

const SiteFooter = () => (
  <footer className="border-t border-stone-200 bg-stone-100/80">
    <div className="container-shell py-12">
      <div className="grid gap-10 lg:grid-cols-[1.2fr_2fr]">
        <div className="space-y-5">
          <Link to="/" className="logo-mark inline-block text-stone-950">
            Velmora
          </Link>
          <p className="max-w-sm text-sm leading-7 text-stone-600">
            Demi-fine jewelry for the woman who dresses with intention, gifts
            with care, and keeps a little shine close every day.
          </p>
          <div className="flex flex-wrap gap-3 text-sm text-stone-600">
            <span className="inline-flex items-center gap-2 rounded-full border border-stone-300 px-3 py-2">
              <MapPin className="h-4 w-4" /> London Studio
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-stone-300 px-3 py-2">
              <Sparkles className="h-4 w-4" /> Gift-ready packaging
            </span>
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-3">
          {footerColumns.map((column) => (
            <div key={column.title} className="space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-stone-500">
                {column.title}
              </h3>
              <ul className="space-y-3 text-sm text-stone-700">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link className="transition hover:text-amber-700" to={link.to}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 flex flex-col gap-6 border-t border-stone-200 pt-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap gap-3">
          {paymentLabels.map((label) => (
            <span
              key={label}
              className="rounded-full border border-stone-300 bg-stone-50 px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-stone-600"
            >
              {label}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4 text-sm text-stone-600">
          <a className="inline-flex items-center gap-2 transition hover:text-amber-700" href="https://instagram.com" target="_blank" rel="noreferrer">
            <Instagram className="h-4 w-4" /> Instagram
          </a>
          <a className="inline-flex items-center gap-2 transition hover:text-amber-700" href="mailto:hello@velmora.com">
            <Mail className="h-4 w-4" /> hello@velmora.com
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default SiteFooter;
