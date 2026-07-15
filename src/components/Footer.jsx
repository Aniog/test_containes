import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-velmora-hairline bg-velmora-cream">
      <div className="mx-auto max-w-7xl px-5 py-14 md:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link
              to="/"
              className="font-serif text-xl font-semibold tracking-widest text-velmora-dark"
            >
              VELMORA
            </Link>
            <p className="mt-3 max-w-xs font-sans text-sm leading-relaxed text-velmora-muted">
              Demi-fine jewelry crafted to be treasured. Designed in small
              batches with care.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-sans text-[11px] font-semibold uppercase tracking-widest text-velmora-dark">
              Shop
            </h4>
            <ul className="mt-4 flex flex-col gap-2.5">
              {["All Jewelry", "Earrings", "Necklaces", "Huggies", "Gift Sets"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      to="/shop"
                      className="font-sans text-sm text-velmora-muted transition-colors hover:text-velmora-dark"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-sans text-[11px] font-semibold uppercase tracking-widest text-velmora-dark">
              Help
            </h4>
            <ul className="mt-4 flex flex-col gap-2.5">
              {["Shipping & Returns", "Size Guide", "Care Instructions", "FAQ", "Contact Us"].map(
                (item) => (
                  <li key={item}>
                    <span className="cursor-pointer font-sans text-sm text-velmora-muted transition-colors hover:text-velmora-dark">
                      {item}
                    </span>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-sans text-[11px] font-semibold uppercase tracking-widest text-velmora-dark">
              Company
            </h4>
            <ul className="mt-4 flex flex-col gap-2.5">
              {["Our Story", "Sustainability", "Press", "Careers", "Terms & Privacy"].map(
                (item) => (
                  <li key={item}>
                    <span className="cursor-pointer font-sans text-sm text-velmora-muted transition-colors hover:text-velmora-dark">
                      {item}
                    </span>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-velmora-hairline pt-8 md:flex-row">
          <p className="font-sans text-[11px] text-velmora-muted">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights
            reserved.
          </p>
          <div className="flex items-center gap-5 text-velmora-muted">
            <span className="cursor-pointer transition-colors hover:text-velmora-dark">
              <Instagram size={18} strokeWidth={1.5} />
            </span>
            <span className="cursor-pointer transition-colors hover:text-velmora-dark">
              <Facebook size={18} strokeWidth={1.5} />
            </span>
            <span className="cursor-pointer transition-colors hover:text-velmora-dark">
              <Twitter size={18} strokeWidth={1.5} />
            </span>
          </div>
          <div className="flex items-center gap-2">
            {["VISA", "MC", "AMEX", "PayPal"].map((p) => (
              <span
                key={p}
                className="rounded border border-velmora-hairline px-2 py-0.5 font-sans text-[9px] font-medium uppercase tracking-wider text-velmora-muted"
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
