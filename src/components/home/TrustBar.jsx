import React from "react";
import { Truck, RefreshCw, Sparkles, ShieldCheck } from "lucide-react";

const ITEMS = [
  { icon: Truck, label: "Free Worldwide Shipping" },
  { icon: RefreshCw, label: "30-Day Returns" },
  { icon: Sparkles, label: "18K Gold Plated" },
  { icon: ShieldCheck, label: "Hypoallergenic" },
];

export default function TrustBar() {
  return (
    <section
      aria-label="Trust"
      className="bg-ivory-200 border-y border-sable/10"
    >
      <div className="container-page py-4 sm:py-5">
        <ul className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-0">
          {ITEMS.map((item, idx) => (
            <li
              key={item.label}
              className={`flex items-center justify-center sm:justify-start gap-2 sm:gap-3 ${
                idx > 0 ? "sm:pl-6 lg:pl-10" : ""
              }`}
            >
              <item.icon className="w-4 h-4 text-gold flex-shrink-0" strokeWidth={1.5} />
              <span className="font-sans text-[11px] sm:text-[12px] tracking-widest2 uppercase text-sable/80 font-medium">
                {item.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
