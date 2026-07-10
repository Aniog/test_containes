import React from "react";

const items = [
  { id: 1, label: "Free Worldwide Shipping" },
  { id: 2, label: "30-Day Returns" },
  { id: 3, label: "18K Gold Plated" },
  { id: 4, label: "Hypoallergenic" },
];

export default function TrustBar({ tone = "light" }) {
  const isLight = tone === "light";
  return (
    <div
      className={`w-full border-y ${
        isLight ? "border-ink/10 bg-cream-50" : "border-white/10 bg-ink"
      }`}
    >
      <div
        className={`max-w-editorial mx-auto px-5 sm:px-8 py-4 grid grid-cols-2 sm:grid-cols-4 gap-y-3 gap-x-6 text-center ${
          isLight ? "text-ink/70" : "text-cream/70"
        }`}
      >
        {items.map((it, i) => (
          <React.Fragment key={it.id}>
            <div className="text-[10.5px] sm:text-[11px] tracking-widest2 uppercase font-medium font-sans">
              {it.label}
            </div>
            {i < items.length - 1 && (
              <span
                className={`hidden sm:block w-px h-3 mx-auto ${
                  isLight ? "bg-ink/15" : "bg-white/15"
                }`}
                aria-hidden="true"
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
