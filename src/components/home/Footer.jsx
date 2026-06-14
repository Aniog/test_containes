import { Linkedin, Youtube, Facebook, ArrowUp } from "lucide-react";
import { brand, navLinks, products } from "@/lib/content";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0A1320] text-white/80 pt-20 pb-10">
      <div className="container-x">
        <div className="grid lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <span className="grid place-items-center w-10 h-10 border border-bronze/60 text-bronze font-display text-lg leading-none">
                A
              </span>
              <span className="font-display text-white text-lg tracking-wide">
                {brand.name}
              </span>
            </div>
            <p className="text-white/60 leading-relaxed max-w-md">
              {brand.description}
            </p>
            <div className="mt-8 flex items-center gap-3">
              {[
                { Icon: Linkedin, label: "LinkedIn" },
                { Icon: Youtube, label: "YouTube" },
                { Icon: Facebook, label: "Facebook" },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="grid place-items-center w-10 h-10 border border-white/15 text-white/70 hover:border-bronze hover:text-bronze-light transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-[11px] uppercase tracking-eyebrow text-bronze-light mb-5">
              Products
            </h4>
            <ul className="space-y-3 text-sm">
              {products.map((p) => (
                <li key={p.id}>
                  <a
                    href="#products"
                    className="text-white/70 hover:text-bronze-light transition-colors"
                  >
                    {p.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-[11px] uppercase tracking-eyebrow text-bronze-light mb-5">
              Company
            </h4>
            <ul className="space-y-3 text-sm">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className="text-white/70 hover:text-bronze-light transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-[11px] uppercase tracking-eyebrow text-bronze-light mb-5">
              Contact
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="text-white/70">engineering@artitect-machinery.com</li>
              <li className="text-white/70">+1 (000) 000-0000</li>
              <li className="text-white/70">
                12 Industrial Avenue
                <br />
                Precision Park, Suite 400
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs text-white/50">
            © {year} {brand.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-white/50">
            <a href="#" className="hover:text-bronze-light transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-bronze-light transition-colors">
              Terms
            </a>
            <a
              href="#top"
              className="inline-flex items-center gap-1 hover:text-bronze-light transition-colors"
            >
              Back to top
              <ArrowUp className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
