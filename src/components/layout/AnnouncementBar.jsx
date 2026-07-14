import React from "react";

const ITEMS = [
  "Free Worldwide Shipping",
  "30-Day Returns",
  "18K Gold Plated",
  "Hypoallergenic",
];

export default function AnnouncementBar({ tone = "light" }) {
  const isLight = tone === "light";
  return (
    <div
      className={
        "border-y " +
        (isLight
          ? "border-hairline-dark bg-ink text-bone"
          : "border-hairline bg-bone text-ink")
      }
      role="region"
      aria-label="Brand promises"
    >
      <div className="container-editorial flex items-center justify-center">
        <ul className="flex items-center divide-x divide-hairline/60 md:divide-hairline-dark/60 w-full md:w-auto overflow-x-auto scrollbar-hairline">
          {ITEMS.map((label) => (
            <li
              key={label}
              className="flex-shrink-0 px-4 md:px-8 py-3 font-sans text-[10px] md:text-[11px] uppercase tracking-editorial whitespace-nowrap"
            >
              {label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
