import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Clock, ArrowUpRight } from "lucide-react";
import BrandMark from "./BrandMark";
import Container from "./Container";
import { site } from "@/data/site";
import { productCategories } from "@/data/products";

export default function Footer() {
  const year = new Date().getFullYear();
  const productLinks = productCategories.slice(0, 6);

  return (
    <footer className="bg-navy-950 text-paper-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-precision-grid opacity-40 pointer-events-none" aria-hidden="true" />
      <div
        aria-hidden="true"
        className="absolute -top-40 -right-40 w-[420px] h-[420px] rounded-full"
        style={{
          background:
            "radial-gradient(closest-side, rgba(184,117,74,0.18), transparent 70%)",
        }}
      />

      <Container className="relative pt-20 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <BrandMark tone="light" />
            <p className="mt-6 text-paper-50/70 max-w-sm leading-relaxed">
              {site.description}
            </p>

            <div className="mt-8 flex flex-col gap-3 text-sm">
              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-3 text-paper-50/80 hover:text-copper-400 transition-colors"
              >
                <Mail className="w-4 h-4 text-copper-400" />
                {site.email}
              </a>
              <a
                href={`tel:${site.phone.replace(/[^+\d]/g, "")}`}
                className="flex items-center gap-3 text-paper-50/80 hover:text-copper-400 transition-colors"
              >
                <Phone className="w-4 h-4 text-copper-400" />
                {site.phone}
              </a>
              <span className="flex items-start gap-3 text-paper-50/70">
                <MapPin className="w-4 h-4 mt-1 text-copper-400" />
                {site.address}
              </span>
              <span className="flex items-center gap-3 text-paper-50/70">
                <Clock className="w-4 h-4 text-copper-400" />
                {site.hours}
              </span>
            </div>
          </div>

          <div className="lg:col-span-3">
            <h4 className="font-display font-semibold text-sm tracking-[0.18em] uppercase text-paper-50/60">
              Products
            </h4>
            <ul className="mt-5 space-y-3">
              {productLinks.map((product) => (
                <li key={product.id}>
                  <Link
                    to={`/products/${product.id}`}
                    className="text-paper-50/80 hover:text-copper-400 transition-colors text-sm"
                  >
                    {product.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-display font-semibold text-sm tracking-[0.18em] uppercase text-paper-50/60">
              Company
            </h4>
            <ul className="mt-5 space-y-3 text-sm">
              <li><Link to="/about" className="text-paper-50/80 hover:text-copper-400 transition-colors">About</Link></li>
              <li><Link to="/capabilities" className="text-paper-50/80 hover:text-copper-400 transition-colors">Capabilities</Link></li>
              <li><Link to="/industries" className="text-paper-50/80 hover:text-copper-400 transition-colors">Industries</Link></li>
              <li><Link to="/contact" className="text-paper-50/80 hover:text-copper-400 transition-colors">Contact</Link></li>
              <li><Link to="/products" className="text-paper-50/80 hover:text-copper-400 transition-colors">All Machines</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="font-display font-semibold text-sm tracking-[0.18em] uppercase text-paper-50/60">
              Stay in the loop
            </h4>
            <p className="mt-5 text-paper-50/70 text-sm leading-relaxed">
              Quarterly product updates and engineering notes, no marketing fluff.
            </p>
            <form
              className="mt-5 flex items-center gap-2 bg-paper-50/5 border border-paper-50/15 rounded-full p-1.5"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="you@company.com"
                aria-label="Email address"
                className="flex-1 bg-transparent px-4 py-2 text-sm text-paper-50 placeholder:text-paper-50/40 focus:outline-none"
              />
              <button
                type="submit"
                className="inline-flex items-center gap-1.5 bg-copper-500 hover:bg-copper-600 text-paper-50 px-4 py-2 rounded-full text-sm font-semibold transition-colors"
              >
                Subscribe
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>

        <div className="hairline-light mt-16" />

        <div className="pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-xs text-paper-50/55">
          <span>© {year} {site.brand}. Engineered in California.</span>
          <div className="flex items-center gap-5">
            <Link to="/contact" className="hover:text-copper-400">Press</Link>
            <Link to="/contact" className="hover:text-copper-400">Careers</Link>
            <Link to="/contact" className="hover:text-copper-400">Privacy</Link>
            <span>Founded {site.foundedYear}</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}