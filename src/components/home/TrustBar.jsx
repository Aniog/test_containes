import React from "react";
import { TRUST_BAR } from "@/data/products";

export default function TrustBar() {
  return (
    <div className="border-y border-hairline bg-bone">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <ul className="flex flex-wrap md:flex-nowrap items-center justify-between gap-y-3 py-4">
          {TRUST_BAR.map((item, idx) => (
            <li
              key={item}
              className="flex items-center gap-3 text-[10px] md:text-[11px] tracking-[0.25em] uppercase text-ink/80"
            >
              <span className="w-1 h-1 rounded-full bg-gold inline-block" />
              {item}
              {idx < TRUST_BAR.length - 1 && (
                <span className="hidden md:inline-block w-px h-3 bg-hairline ml-3" />
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
