import React from "react";
import { Linkedin, Youtube, Facebook } from "lucide-react";
import BrandWordmark from "./BrandWordmark";

const COLUMNS = [
  {
    title: "Products",
    links: [
      { label: "Double Folding Machine", href: "#products" },
      { label: "Double Folder", href: "#products" },
      { label: "Sheet Metal Folder", href: "#products" },
      { label: "Sheet Metal Folding Machine", href: "#products" },
      { label: "Metal Folder", href: "#products" },
      { label: "Metal Folder Machine", href: "#products" },
      { label: "Metal Folding Machine", href: "#products" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#about" },
      { label: "Technology", href: "#technology" },
      { label: "Applications", href: "#applications" },
      { label: "Process", href: "#process" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Specifications", href: "#specifications" },
      { label: "Customer stories", href: "#testimonials" },
      { label: "Service network", href: "#contact" },
      { label: "Spare parts catalogue", href: "#contact" },
    ],
  },
];

export default function SiteFooter() {
  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-20 md:py-24">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <BrandWordmark tone="light" />
            <p className="mt-8 max-w-md text-sm text-paper/70 leading-relaxed">
              ARTITECT MACHINERY engineers high-tonnage double folding
              machines, sheet metal folders, and metal folding systems for
              manufacturers who measure quality in microns.
            </p>
            <div className="mt-8 flex items-center gap-3">
              {[
                { icon: Linkedin, label: "LinkedIn" },
                { icon: Youtube, label: "YouTube" },
                { icon: Facebook, label: "Facebook" },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="inline-flex h-10 w-10 items-center justify-center border border-paper/20 hover:border-brass hover:text-brass transition-colors"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-3 gap-10">
            {COLUMNS.map((col) => (
              <div key={col.title}>
                <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-brass">
                  {col.title}
                </h3>
                <ul className="mt-6 space-y-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-paper/75 hover:text-brass transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-paper/15 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-xs uppercase tracking-[0.25em] text-paper/50">
            © {new Date().getFullYear()} ARTITECT MACHINERY Co., Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs uppercase tracking-[0.25em] text-paper/50">
            <a href="#" className="hover:text-brass transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-brass transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-brass transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
