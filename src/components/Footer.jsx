import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-velmora-dark text-white/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link
              to="/"
              className="font-serif text-2xl tracking-[0.15em] uppercase text-white block mb-4"
            >
              Velmora
            </Link>
            <p className="text-sm leading-relaxed text-white/60 max-w-xs">
              Demi-fine jewelry designed to be treasured. 18K gold plated,
              hypoallergenic, and made for everyday luxury.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-white mb-5">
              Shop
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/shop" className="hover:text-white transition-colors">
                  All Jewelry
                </Link>
              </li>
              <li>
                <Link
                  to="/shop?category=earrings"
                  className="hover:text-white transition-colors"
                >
                  Earrings
                </Link>
              </li>
              <li>
                <Link
                  to="/shop?category=necklaces"
                  className="hover:text-white transition-colors"
                >
                  Necklaces
                </Link>
              </li>
              <li>
                <Link
                  to="/shop?category=huggies"
                  className="hover:text-white transition-colors"
                >
                  Huggies
                </Link>
              </li>
              <li>
                <Link
                  to="/shop?category=sets"
                  className="hover:text-white transition-colors"
                >
                  Gift Sets
                </Link>
              </li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-white mb-5">
              Help
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <span className="hover:text-white transition-colors cursor-pointer">
                  Shipping & Returns
                </span>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-pointer">
                  FAQs
                </span>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-pointer">
                  Care Guide
                </span>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-pointer">
                  Contact Us
                </span>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-white mb-5">
              Company
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  to="/about"
                  className="hover:text-white transition-colors"
                >
                  Our Story
                </Link>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-pointer">
                  Sustainability
                </span>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-pointer">
                  Press
                </span>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-pointer">
                  Careers
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights
            reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="hover:text-white transition-colors cursor-pointer">
              <Instagram className="w-5 h-5" />
            </span>
            <span className="hover:text-white transition-colors cursor-pointer">
              <Facebook className="w-5 h-5" />
            </span>
            <span className="hover:text-white transition-colors cursor-pointer">
              <Twitter className="w-5 h-5" />
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
