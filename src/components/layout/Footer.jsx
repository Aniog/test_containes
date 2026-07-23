import { Link } from "react-router-dom";
import { Camera, Heart, MessageCircle } from "lucide-react";

const paymentIcons = ["Visa", "Mastercard", "Amex", "PayPal", "Afterpay"];

export default function Footer() {
  return (
    <footer className="bg-velmora-surface border-t border-velmora-border">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link
              to="/"
              className="font-serif text-2xl tracking-[0.15em] text-velmora-text-primary"
            >
              VELMORA
            </Link>
            <p className="text-velmora-text-secondary text-xs font-sans mt-4 leading-relaxed max-w-xs">
              Demi-fine gold jewelry crafted for the modern woman. Elevated
              everyday luxury, designed to be treasured.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-velmora-text-primary text-xs uppercase tracking-[0.2em] font-sans mb-5">
              Shop
            </h4>
            <ul className="flex flex-col gap-3">
              {["All", "Earrings", "Necklaces", "Huggies", "Sets"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      to="/shop"
                      className="text-velmora-text-secondary text-sm font-sans hover:text-velmora-text-primary transition-colors duration-200"
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
            <h4 className="text-velmora-text-primary text-xs uppercase tracking-[0.2em] font-sans mb-5">
              Help
            </h4>
            <ul className="flex flex-col gap-3">
              {[
                "Shipping & Delivery",
                "Returns & Exchanges",
                "Size Guide",
                "Care Instructions",
                "FAQ",
              ].map((item) => (
                <li key={item}>
                  <Link
                    to="/"
                    className="text-velmora-text-secondary text-sm font-sans hover:text-velmora-text-primary transition-colors duration-200"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-velmora-text-primary text-xs uppercase tracking-[0.2em] font-sans mb-5">
              Company
            </h4>
            <ul className="flex flex-col gap-3">
              {["Our Story", "Sustainability", "Journal", "Contact", "Careers"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      to="/"
                      className="text-velmora-text-secondary text-sm font-sans hover:text-velmora-text-primary transition-colors duration-200"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-velmora-border flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Payment icons */}
          <div className="flex items-center gap-4">
            {paymentIcons.map((icon) => (
              <span
                key={icon}
                className="text-velmora-text-secondary text-[10px] uppercase tracking-wider font-sans"
              >
                {icon}
              </span>
            ))}
          </div>

          {/* Social + copyright */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="text-velmora-text-secondary hover:text-velmora-text-primary transition-colors"
                aria-label="Instagram"
              >
                <Camera className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="text-velmora-text-secondary hover:text-velmora-text-primary transition-colors"
                aria-label="Pinterest"
              >
                <Heart className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="text-velmora-text-secondary hover:text-velmora-text-primary transition-colors"
                aria-label="TikTok"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
            <p className="text-velmora-text-secondary text-xs font-sans">
              &copy; 2026 Velmora Fine Jewelry
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}