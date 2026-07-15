import { Link } from "react-router-dom"
import { Instagram, Facebook, Twitter } from "lucide-react"
import { Separator } from "@/components/ui/separator"

export default function Footer() {
  return (
    <footer className="bg-[#1C1C1C] text-white/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <span className="font-serif text-2xl tracking-[0.2em] font-semibold text-white">
              VELMORA
            </span>
            <p className="text-sm text-white/50 leading-relaxed max-w-xs">
              Demi-fine jewelry crafted for the modern woman. Designed in London, worn worldwide.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a href="#" className="text-white/50 hover:text-[#C9A96E] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/50 hover:text-[#C9A96E] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/50 hover:text-[#C9A96E] transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.15em] font-medium text-white mb-5">
              Shop
            </h4>
            <ul className="space-y-3">
              {["All Jewelry", "Earrings", "Necklaces", "Huggies", "Gift Sets"].map((item) => (
                <li key={item}>
                  <Link
                    to="/shop"
                    className="text-sm text-white/50 hover:text-[#C9A96E] transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.15em] font-medium text-white mb-5">
              Help
            </h4>
            <ul className="space-y-3">
              {["Shipping & Returns", "Care Guide", "Size Guide", "FAQ", "Contact Us"].map(
                (item) => (
                  <li key={item}>
                    <a href="#" className="text-sm text-white/50 hover:text-[#C9A96E] transition-colors">
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.15em] font-medium text-white mb-5">
              Company
            </h4>
            <ul className="space-y-3">
              {["Our Story", "Sustainability", "Press", "Careers", "Affiliates"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-white/50 hover:text-[#C9A96E] transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-10 bg-white/10" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-xs text-white/40">Visa</span>
            <span className="text-xs text-white/40">Mastercard</span>
            <span className="text-xs text-white/40">Amex</span>
            <span className="text-xs text-white/40">PayPal</span>
            <span className="text-xs text-white/40">Apple Pay</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
