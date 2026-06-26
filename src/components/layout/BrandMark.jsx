import React from "react";

export default function BrandMark({ className = "", tone = "dark" }) {
  // tones: dark (for light surfaces) | light (for dark surfaces)
  const fg = tone === "light" ? "#F8F6F2" : "#0B1220";
  const accent = "#B8754A";
  const subtle = tone === "light" ? "rgba(248,246,242,0.65)" : "rgba(11,18,32,0.55)";

  return (
    <div className={`flex items-center gap-3 ${className}`} aria-label="ARTITECT MACHINERY">
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Outer precision ring */}
        <circle cx="20" cy="20" r="18.5" stroke={fg} strokeWidth="1" opacity="0.25" />
        {/* Folding geometry: two mirrored beams meeting at the copper spine */}
        <path
          d="M6 22 L34 22"
          stroke={fg}
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M6 28 L34 28"
          stroke={fg}
          strokeWidth="2.5"
          strokeLinecap="round"
          opacity="0.55"
        />
        {/* Copper fold accent */}
        <path
          d="M14 22 L14 14 L26 14 L26 22"
          stroke={accent}
          strokeWidth="2.5"
          strokeLinejoin="round"
          strokeLinecap="round"
          fill="none"
        />
        {/* Center dot */}
        <circle cx="20" cy="22" r="2" fill={accent} />
      </svg>

      <div className="flex flex-col leading-tight">
        <span
          className="font-display font-extrabold tracking-[0.18em] text-[0.95rem]"
          style={{ color: fg }}
        >
          ARTITECT
        </span>
        <span
          className="font-display text-[0.6rem] font-medium tracking-[0.32em] uppercase"
          style={{ color: subtle }}
        >
          Machinery
        </span>
      </div>
    </div>
  );
}