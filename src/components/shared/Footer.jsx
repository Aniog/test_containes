import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Facebook, PinIcon as Pinterest } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const footerLinks = {
  shop: ["Earrings", "Necklaces", "Huggies", "Gift Sets", "New Arrivals"],
  help: ["Shipping & Returns", "Care Guide", "FAQs", "Contact Us", "Track Order"],
  company: ["Our Story", "Sustainability", "Press", "Careers", "Wholesale"],
};

export default function Footer() {
  return (
    <footer className="bg-brand-charcoal text-brand-ivory">
      <div className="mx-auto max-w-[1400px] px-6 py-16 lg:px-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link
              to="/"
              className="font-serif text-3xl tracking-[0.18em] font-semibold"
            >
              VELMORA
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-brand-taupe">
              Demi-fine jewelry designed to be treasured. Crafted with intention,
              worn with confidence, and made for the moments that matter.
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href="#"
                className="text-brand-taupe transition-colors hover:text-brand-ivory"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-brand-taupe transition-colors hover:text-brand-ivory"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-brand-taupe transition-colors hover:text-brand-ivory"
                aria-label="Pinterest"
              >
                <Pinterest className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-[11px] font-medium uppercase tracking-widest text-brand-taupe">
              Shop
            </h4>
            <ul className="mt-5 space-y-3">
              {footerLinks.shop.map((item) => (
                <li key={item}>
                  <Link
                    to="/shop"
                    className="text-sm text-brand-ivory/80 transition-colors hover:text-brand-ivory"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-medium uppercase tracking-widest text-brand-taupe">
              Help
            </h4>
            <ul className="mt-5 space-y-3">
              {footerLinks.help.map((item) => (
                <li key={item}>
                  <Link
                    to="#"
                    className="text-sm text-brand-ivory/80 transition-colors hover:text-brand-ivory"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-medium uppercase tracking-widest text-brand-taupe">
              Company
            </h4>
            <ul className="mt-5 space-y-3">
              {footerLinks.company.map((item) => (
                <li key={item}>
                  <Link
                    to="#"
                    className="text-sm text-brand-ivory/80 transition-colors hover:text-brand-ivory"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-10 bg-brand-ivory/10" />

        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-xs text-brand-taupe">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-3 text-xs text-brand-taupe">
            <span>Visa</span>
            <span>Mastercard</span>
            <span>Amex</span>
            <span>PayPal</span>
            <span>Apple Pay</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
