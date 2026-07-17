import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-velmora-charcoal text-white/80">
      {/* Newsletter */}
      <div className="border-b border-white/10">
        <div className="container-velmora py-12 sm:py-16">
          <div className="max-w-xl mx-auto text-center">
            <h3 className="font-serif text-2xl sm:text-3xl text-white mb-3">
              Join for 10% off
            </h3>
            <p className="text-sm text-white/60 mb-6">
              Subscribe to receive exclusive offers and jewelry care tips.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex gap-2 max-w-md mx-auto"
            >
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 bg-white/10 border border-white/20 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-accent transition-colors"
              />
              <button
                type="submit"
                className="bg-accent text-accent-foreground px-6 py-3 text-sm tracking-velmora uppercase hover:bg-velmora-gold-light transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="container-velmora py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link
              to="/"
              className="font-serif text-xl tracking-widest uppercase text-white"
            >
              Velmora
            </Link>
            <p className="text-sm mt-4 text-white/60 leading-relaxed">
              Demi-fine gold jewelry crafted to be treasured. Every piece is
              18K gold plated and hypoallergenic.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-white/60 hover:text-accent transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-white/60 hover:text-accent transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-white/60 hover:text-accent transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-sm tracking-velmora uppercase text-white mb-4">
              Shop
            </h4>
            <ul className="space-y-2 text-sm">
              {["Earrings", "Necklaces", "Huggies", "Sets", "Bestsellers"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      to="/shop"
                      className="text-white/60 hover:text-accent transition-colors"
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
            <h4 className="text-sm tracking-velmora uppercase text-white mb-4">
              Help
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                "Shipping & Returns",
                "Jewelry Care",
                "FAQ",
                "Contact Us",
                "Track Order",
              ].map((item) => (
                <li key={item}>
                  <Link
                    to="/"
                    className="text-white/60 hover:text-accent transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm tracking-velmora uppercase text-white mb-4">
              Company
            </h4>
            <ul className="space-y-2 text-sm">
              {["About Velmora", "Sustainability", "Journal", "Press", "Careers"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      to="/"
                      className="text-white/60 hover:text-accent transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-velmora py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <p>&copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>Secure Payments</span>
            <div className="flex gap-2 text-white/30">
              <span>●●●</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
