import React from "react";

export default function Logo({ invert = false, size = "md" }) {
  const color = invert ? "var(--color-cream)" : "var(--color-ink)";
  const accent = "var(--color-gold)";

  const fontSize = size === "lg" ? "text-3xl" : size === "sm" ? "text-lg" : "text-2xl";

  return (
    <span className={`inline-flex items-center gap-2 font-serif tracking-[0.28em] ${fontSize}`} style={{ color }}>
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M12 1.5l2.6 6.4 6.9.6-5.2 4.5 1.6 6.8L12 16.6 6.1 19.8l1.6-6.8L2.5 8.5l6.9-.6L12 1.5z"
          fill={accent}
          opacity="0.95"
        />
        <path
          d="M12 7l1.1 2.7 3 .3-2.3 2 .7 2.9L12 13.4l-2.5 1.5.7-2.9-2.3-2 3-.3L12 7z"
          fill={color}
          opacity="0.35"
        />
      </svg>
      <span style={{ fontWeight: 500 }}>VELMORA</span>
    </span>
  );
}
