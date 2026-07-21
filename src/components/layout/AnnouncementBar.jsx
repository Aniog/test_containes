import React from "react";

const items = [
  "Free Worldwide Shipping",
  "30-Day Returns",
  "18K Gold Plated",
  "Hypoallergenic",
];

export default function AnnouncementBar() {
  return (
    <div className="bg-ink-900 text-cream-100">
      <div className="mx-auto max-w-editorial px-4 sm:px-6 lg:px-10">
        <ul className="flex items-center justify-center gap-3 sm:gap-6 py-2.5 text-[10px] sm:text-[11px] tracking-[0.28em] uppercase font-medium">
          {items.map((it, i) => (
            <li key={it} className="flex items-center gap-3 sm:gap-6">
              <span className="text-cream-200/90">{it}</span>
              {i < items.length - 1 && (
                <span aria-hidden className="h-[10px] w-px bg-cream-200/30" />
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
