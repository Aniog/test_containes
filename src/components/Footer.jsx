import { Instagram, Facebook, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-velmora-charcoal text-white">
      <div className="max-w-[1400px] mx-auto px-5 md:px-8">
        <div className="py-14 md:py-20 grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <p className="font-serif text-[22px] font-semibold tracking-[0.12em] uppercase mb-4">
              Velmora
            </p>
            <p className="font-sans text-[13px] text-white/50 leading-relaxed max-w-[240px]">
              Demi-fine jewelry crafted to be treasured. Designed for the modern woman who appreciates quiet luxury.
            </p>
          </div>

          {/* Shop */}
          <div>
            <p className="font-sans text-[11px] font-semibold tracking-[0.15em] uppercase text-white/40 mb-5">
              Shop
            </p>
            <ul className="flex flex-col gap-3">
              {['All Jewelry', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets'].map((item) => (
                <li key={item}>
                  <a
                    href="/shop"
                    className="font-sans text-[13px] text-white/70 hover:text-white transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <p className="font-sans text-[11px] font-semibold tracking-[0.15em] uppercase text-white/40 mb-5">
              Help
            </p>
            <ul className="flex flex-col gap-3">
              {['Shipping & Returns', 'Size Guide', 'Care Instructions', 'FAQ', 'Contact Us'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="font-sans text-[13px] text-white/70 hover:text-white transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="font-sans text-[11px] font-semibold tracking-[0.15em] uppercase text-white/40 mb-5">
              Company
            </p>
            <ul className="flex flex-col gap-3">
              {['Our Story', 'Sustainability', 'Press', 'Careers', 'Affiliates'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="font-sans text-[13px] text-white/70 hover:text-white transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-[11px] text-white/40">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <a href="#" aria-label="Instagram" className="text-white/50 hover:text-white transition-colors">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" aria-label="Facebook" className="text-white/50 hover:text-white transition-colors">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="#" aria-label="Email" className="text-white/50 hover:text-white transition-colors">
              <Mail className="w-4 h-4" />
            </a>
          </div>
          <div className="flex items-center gap-3">
            {['Visa', 'MC', 'Amex', 'PayPal'].map((pm) => (
              <span
                key={pm}
                className="font-sans text-[10px] font-medium tracking-wider text-white/30 border border-white/15 rounded px-1.5 py-0.5"
              >
                {pm}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}