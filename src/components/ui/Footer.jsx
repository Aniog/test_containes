import React from "react";
import { Link } from "react-router-dom";
import { Instagram } from "lucide-react";
import { footerColumns } from "../../data/navigation";

export default function Footer() {
  return (
    <footer className="bg-[#1a1a14] text-white/70">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link
              to="/"
              className="font-serif text-xl tracking-[0.3em] uppercase text-white inline-block mb-4"
            >
              Velmora
            </Link>
            <p className="font-sans text-sm leading-relaxed text-white/50 max-w-xs">
              Demi-fine jewelry crafted to be treasured. Every piece is designed for the woman who
              values quality, elegance, and enduring style.
            </p>
            {/* Social */}
            <div className="flex items-center gap-4 mt-6">
              <a
                href="#"
                className="p-2 border border-white/20 hover:border-white/50 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="p-2 border border-white/20 hover:border-white/50 transition-colors"
                aria-label="Pinterest"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.237 2.636 7.855 6.356 9.312-.087-.791-.166-2.007.035-2.87.182-.78 1.172-4.97 1.172-4.97s-.299-.6-.299-1.486c0-1.391.806-2.428 1.81-2.428.852 0 1.264.64 1.264 1.408 0 .858-.545 2.14-.827 3.33-.236.995.5 1.807 1.48 1.807 1.776 0 3.142-1.872 3.142-4.575 0-2.392-1.718-4.065-4.173-4.065-2.843 0-4.512 2.133-4.512 4.337 0 .859.33 1.78.743 2.281a.3.3 0 0 1 .07.288c-.075.318-.245.996-.28 1.134-.044.184-.146.223-.337.134-1.257-.584-2.043-2.419-2.043-3.894 0-3.17 2.302-6.081 6.64-6.081 3.487 0 6.196 2.484 6.196 5.805 0 3.463-2.183 6.249-5.214 6.249-1.018 0-1.974-.53-2.302-1.155l-.627 2.387c-.19.728-.702 1.639-1.045 2.194.786.243 1.619.374 2.48.374 5.523 0 10-4.477 10-10S17.523 2 12 2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerColumns).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-sans text-[11px] tracking-[0.12em] uppercase text-white/40 mb-4">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="font-sans text-sm text-white/60 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Payment icons */}
        <div className="hairline mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {["Visa", "Mastercard", "Amex", "PayPal", "Afterpay"].map((method) => (
              <span
                key={method}
                className="font-sans text-[10px] tracking-[0.1em] uppercase text-white/30 border border-white/10 px-3 py-1.5"
              >
                {method}
              </span>
            ))}
          </div>
          <p className="font-sans text-xs text-white/30">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}