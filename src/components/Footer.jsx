import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter } from "lucide-react";

const cols = [
  {
    title: "Shop",
    links: [
      { label: "All Jewelry", to: "/shop" },
      { label: "Earrings", to: "/shop?category=Earrings" },
      { label: "Necklaces", to: "/shop?category=Necklaces" },
      { label: "Huggies", to: "/shop?category=Huggies" },
      { label: "Gift Sets", to: "/shop?category=Sets" },
    ],
  },
  {
    title: "Help",
    links: [
      { label: "Shipping", to: "#" },
      { label: "Returns", to: "#" },
      { label: "Care Guide", to: "#" },
      { label: "Sizing", to: "#" },
      { label: "Contact", to: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Our Story", to: "/about" },
      { label: "Journal", to: "/journal" },
      { label: "Sustainability", to: "#" },
      { label: "Press", to: "#" },
      { label: "Wholesale", to: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#13100E] text-[#E5DCCD] mt-20">
      <div className="max-w-7xl mx-auto px-5 lg:px-10 pt-20 pb-10">
        {/* Top: brand + columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 pb-14 border-b border-white/10">
          <div className="lg:col-span-4">
            <Link to="/" className="font-serif text-3xl tracking-[0.25em] font-medium text-white">
              VELMORA
            </Link>
            <p className="mt-5 text-sm leading-relaxed max-w-xs text-[#E5DCCD]/70">
              Demi-fine jewelry made to be worn every day and treasured for years. 18K gold-plated, hypoallergenic, designed in studio.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {[
                { Icon: Instagram, label: "Instagram" },
                { Icon: Facebook, label: "Facebook" },
                { Icon: Twitter, label: "Twitter" },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 flex items-center justify-center border border-white/20 hover:border-[#B8935C] hover:text-[#B8935C] transition rounded-full"
                >
                  <Icon size={15} strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {cols.map((col) => (
              <div key={col.title}>
                <h4 className="font-sans text-[11px] uppercase tracking-[0.25em] text-white/80 mb-5">
                  {col.title}
                </h4>
                <ul className="space-y-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.to}
                        className="text-sm text-[#E5DCCD]/70 hover:text-[#B8935C] transition"
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

        {/* Bottom: payments + legal */}
        <div className="pt-8 flex flex-col-reverse lg:flex-row items-start lg:items-center justify-between gap-5">
          <p className="text-xs text-[#E5DCCD]/50">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-2 flex-wrap">
            {["VISA", "MC", "AMEX", "PAYPAL", "APPLE PAY", "SHOP"].map((p) => (
              <span
                key={p}
                className="text-[10px] tracking-[0.15em] font-medium text-[#E5DCCD]/70 px-2.5 py-1.5 border border-white/15 rounded-sm"
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
