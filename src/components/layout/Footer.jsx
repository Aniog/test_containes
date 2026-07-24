import { Link } from "react-router-dom";
import { Instagram, Mail } from "lucide-react";
import { Container } from "@/components/ui/Container";

const cols = [
  {
    id: "shop",
    title: "Shop",
    links: [
      { label: "Earrings", to: "/shop?category=earrings" },
      { label: "Necklaces", to: "/shop?category=necklaces" },
      { label: "Huggies", to: "/shop?category=huggies" },
      { label: "Gift Edit", to: "/shop" },
    ],
  },
  {
    id: "help",
    title: "Help",
    links: [
      { label: "Shipping & Returns", to: "#" },
      { label: "Care Guide", to: "#" },
      { label: "Size Guide", to: "#" },
      { label: "Contact", to: "#" },
    ],
  },
  {
    id: "company",
    title: "Company",
    links: [
      { label: "Our Story", to: "/about" },
      { label: "Journal", to: "/journal" },
      { label: "Sustainability", to: "#" },
      { label: "Press", to: "#" },
    ],
  },
];

const payments = ["VISA", "MC", "AMEX", "PayPal", "Apple Pay"];

export default function Footer() {
  return (
    <footer className="bg-cocoa text-ivory mt-20">
      <Container className="py-16 md:py-20">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <Link to="/" className="font-serif text-2xl uppercase tracking-ui-wide font-medium text-ivory">
              Velmora
            </Link>
            <p className="mt-4 max-w-sm text-ivory/70 text-[14px] leading-relaxed">
              Demi-fine jewelry, hand-finished in small batches. Designed for the in-between hours.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="inline-flex h-9 w-9 items-center justify-center border border-ivory/20 hover:border-ivory hover:text-ivory text-ivory/80 transition-colors"
              >
                <Instagram size={16} strokeWidth={1.4} />
              </a>
              <a
                href="mailto:care@velmora.co"
                aria-label="Email"
                className="inline-flex h-9 w-9 items-center justify-center border border-ivory/20 hover:border-ivory hover:text-ivory text-ivory/80 transition-colors"
              >
                <Mail size={16} strokeWidth={1.4} />
              </a>
            </div>
          </div>

          <div className="md:col-span-7 grid grid-cols-3 gap-8">
            {cols.map((col) => (
              <div key={col.id}>
                <p className="text-[11px] font-medium uppercase tracking-ui text-ivory/60">
                  {col.title}
                </p>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.to}
                        className="text-[14px] text-ivory/85 hover:text-ivory transition-colors"
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

        <div className="mt-14 border-t border-ivory/15 pt-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="text-[12px] text-ivory/55">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-2 flex-wrap">
            {payments.map((p) => (
              <span
                key={p}
                className="inline-flex h-7 min-w-[40px] items-center justify-center border border-ivory/20 px-2 text-[10px] font-medium tracking-ui text-ivory/70 uppercase"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
