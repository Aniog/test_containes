import React from "react";
import { INDUSTRIES } from "@/data/site";
import { ArrowUpRight } from "lucide-react";

const Eyebrow = ({ children }) => (
  <p className="inline-flex items-center gap-3 text-xs font-medium tracking-eyebrow uppercase text-brand-brass">
    <span className="block w-8 h-px bg-brand-brass" />
    {children}
  </p>
);

const Industries = () => {
  return (
    <section
      id="industries"
      className="bg-brand-ink text-white"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <Eyebrow>Where our machines live</Eyebrow>
            <h2 className="mt-5 font-display font-semibold text-white text-3xl md:text-4xl lg:text-5xl leading-[1.1]">
              Built for the shops
              <span className="text-brand-brass"> other folders can't reach.</span>
            </h2>
            <p className="mt-5 text-white/70 text-base lg:text-lg leading-relaxed max-w-md">
              From a single-shift job shop to a Tier-1 automotive line, we
              have shipped a folder into that environment. Below are the
              industries we know best.
            </p>

            <a
              href="#contact"
              className="mt-10 inline-flex items-center gap-2 text-brand-brass hover:text-brand-brass-soft transition-colors text-sm font-medium"
            >
              See the application notes
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          <div className="lg:col-span-7">
            <ul className="grid sm:grid-cols-2 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden">
              {INDUSTRIES.map((it) => (
                <li
                  key={it.name}
                  className="bg-brand-ink p-6 lg:p-7 hover:bg-brand-steel transition-colors group"
                >
                  <div className="flex items-center gap-3 text-brand-brass">
                    <span className="block w-6 h-px bg-brand-brass" />
                    <span className="text-[11px] tracking-eyebrow uppercase">
                      Industry
                    </span>
                  </div>
                  <h3 className="mt-4 font-display font-semibold text-white text-lg">
                    {it.name}
                  </h3>
                  <p className="mt-2 text-sm text-white/65 leading-relaxed">
                    {it.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;
