import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-warm-950 text-cream-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {/* Logo */}
          <div className="col-span-2 md:col-span-1">
            <Link
              to="/"
              className="font-serif text-xl tracking-[0.2em] text-cream-100"
            >
              VELMORA
            </Link>
            <p className="mt-3 text-xs text-cream-400 leading-relaxed font-sans">
              Demi-fine jewelry crafted to be treasured. Made for the woman who
              values quiet luxury and enduring design.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-[10px] tracking-[0.15em] uppercase text-cream-300 font-sans font-medium mb-4">
              Shop
            </h4>
            <ul className="space-y-2.5">
              {["Earrings", "Necklaces", "Huggies", "Sets", "Bestsellers"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      to={`/shop?category=${item.toLowerCase()}`}
                      className="text-xs text-cream-400 hover:text-cream-100 transition-colors font-sans"
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
            <h4 className="text-[10px] tracking-[0.15em] uppercase text-cream-300 font-sans font-medium mb-4">
              Help
            </h4>
            <ul className="space-y-2.5">
              {[
                "Shipping & Delivery",
                "Returns & Exchanges",
                "Care Guide",
                "Size Guide",
                "FAQ",
              ].map((item) => (
                <li key={item}>
                  <Link
                    to="#"
                    className="text-xs text-cream-400 hover:text-cream-100 transition-colors font-sans"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[10px] tracking-[0.15em] uppercase text-cream-300 font-sans font-medium mb-4">
              Company
            </h4>
            <ul className="space-y-2.5">
              {["Our Story", "Sustainability", "Journal", "Press", "Careers"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      to="#"
                      className="text-xs text-cream-400 hover:text-cream-100 transition-colors font-sans"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-warm-800 my-10" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            {/* Payment icons */}
            {["Visa", "MC", "Amex", "PayPal", "Afterpay"].map((method) => (
              <span
                key={method}
                className="text-[10px] tracking-wider uppercase text-cream-500 font-sans"
              >
                {method}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-4">
            {["Instagram", "Pinterest", "TikTok"].map((social) => (
              <Link
                key={social}
                to="#"
                className="text-[10px] tracking-wider uppercase text-cream-500 hover:text-cream-200 transition-colors font-sans"
              >
                {social}
              </Link>
            ))}
          </div>
        </div>

        <p className="mt-8 text-[10px] text-center text-cream-600 font-sans">
          &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
        </p>
      </div>
    </footer>
  );
}