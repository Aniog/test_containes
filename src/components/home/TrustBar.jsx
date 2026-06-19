import React from "react";
import { Truck, RotateCcw, ShieldCheck, Sparkles } from "lucide-react";
import { TRUST_BAR } from "@/data/products";

const ICONS = [Truck, RotateCcw, ShieldCheck, Sparkles];

export default function TrustBar() {
  return (
    <section className="border-y border-ink/10 bg-cream-50">
      <div className="mx-auto max-w-page px-5 md:px-10">
        <ul className="grid grid-cols-2 md:grid-cols-4 divide-x divide-ink/10">
          {TRUST_BAR.map((t, i) => {
            const Icon = ICONS[i] || Sparkles;
            return (
              <li
                key={t.label}
                className={`flex items-center gap-3 md:gap-4 py-4 md:py-5 ${i > 0 ? "md:pl-8" : ""} ${i % 2 !== 0 ? "pl-4 md:pl-8" : ""} ${i > 1 ? "md:border-l md:border-ink/10" : ""}`}
              >
                <Icon className="w-5 h-5 text-gold-dark flex-shrink-0" strokeWidth={1.4} />
                <div className="min-w-0">
                  <p className="text-[13px] md:text-sm text-ink font-medium truncate">{t.label}</p>
                  <p className="text-[11px] text-ink-muted truncate">{t.sub}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
