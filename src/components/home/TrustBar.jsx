import React from "react";

const items = [
  "Free Worldwide Shipping",
  "30-Day Returns",
  "18K Gold Plated",
  "Hypoallergenic",
];

export default function TrustBar() {
  return (
    <section className="bg-espresso text-ivory border-y border-espresso/0">
      <div className="container-wide">
        <ul className="flex flex-wrap items-center justify-center md:justify-between py-4 md:py-5 gap-y-2">
          {items.map((label, i) => (
            <React.Fragment key={label}>
              <li className="font-sans text-[10px] md:text-[11px] uppercase tracking-widest2 text-ivory/85 px-4 py-1.5 text-center">
                {label}
              </li>
              {i < items.length - 1 && (
                <li
                  aria-hidden
                  className="hidden md:block text-ivory/30 text-[11px]"
                >
                  ·
                </li>
              )}
            </React.Fragment>
          ))}
        </ul>
      </div>
    </section>
  );
}
