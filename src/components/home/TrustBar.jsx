import { Shield, Truck, Sparkles, Award } from "lucide-react";
import { TRUST_ITEMS } from "@/data/site";

const ICONS = [Truck, Award, Sparkles, Shield];

export default function TrustBar() {
  return (
    <section className="bg-cream-200 border-y border-onyx-800/10">
      <div className="container-wide">
        <ul className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-onyx-800/10">
          {TRUST_ITEMS.map((label, idx) => {
            const Icon = ICONS[idx] || Sparkles;
            return (
              <li
                key={label}
                className="flex items-center justify-center gap-3 py-4 md:py-5"
              >
                <Icon size={16} strokeWidth={1.4} className="text-gold-500" />
                <span className="font-sans uppercase tracking-widest-2 text-[10px] sm:text-[11px] text-onyx-800 text-center">
                  {label}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
