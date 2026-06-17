import React from "react";

const linkGroups = [
  {
    title: "Products",
    items: [
      "Double folding machine",
      "Double folder",
      "Sheet metal folder",
      "Sheet metal folding machine",
      "Metal folder",
      "Metal folder machine",
      "Metal folding machine",
    ],
  },
  {
    title: "Company",
    items: ["About us", "Engineering", "Sustainability", "Careers", "Press"],
  },
  {
    title: "Support",
    items: ["Documentation", "Spare parts", "Training", "Service request", "Contact"],
  },
];

export default function Footer() {
  return (
    <footer className="bg-graphite text-white/80">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-20 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-4">
          <div className="font-display text-2xl text-white tracking-wide">
            ARTITECT
            <span className="block text-[10px] uppercase tracking-[0.3em] text-brass mt-1">
              Machinery
            </span>
          </div>
          <p className="mt-6 text-sm leading-relaxed text-white/60 max-w-sm">
            Designers and manufacturers of precision sheet metal folding
            machines for architectural, industrial, and bespoke fabricators
            since 1987.
          </p>
        </div>

        {linkGroups.map((g) => (
          <div key={g.title} className="md:col-span-2">
            <div className="text-[11px] uppercase tracking-[0.22em] text-brass mb-5">
              {g.title}
            </div>
            <ul className="space-y-3 text-sm">
              {g.items.map((it) => (
                <li key={it}>
                  <a
                    href="#contact"
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    {it}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="md:col-span-2">
          <div className="text-[11px] uppercase tracking-[0.22em] text-brass mb-5">
            Visit
          </div>
          <p className="text-sm text-white/70 leading-relaxed">
            14 Foundry Way
            <br />
            Eindhoven, NL
            <br />
            Mon–Fri, 08:00–18:00
          </p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs text-white/50">
          <div>© {new Date().getFullYear()} ARTITECT MACHINERY. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Imprint</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
