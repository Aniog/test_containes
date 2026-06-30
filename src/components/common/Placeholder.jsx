// A small inline SVG that fills an <img> placeholder with a warm,
// editorial color gradient. Prevents layout collapse while the
// image-search system fetches the real photo.

const palettes = {
  warm: ["#3a2c1f", "#7a5a37", "#c2a06d"],
  cream: ["#efe6d6", "#d9c8a8", "#b89870"],
  night: ["#1c1610", "#3a2c1f", "#5b4527"],
  blush: ["#3a2c1f", "#7a4f3a", "#b8835a"],
  gold: ["#3a2c1f", "#8a6630", "#d2af72"],
};

export default function Placeholder({
  palette = "warm",
  ratio = "4x5",
  className = "",
}) {
  const [a, b, c] = palettes[palette] || palettes.warm;
  const id = `pl-${palette}-${ratio}`;
  // Aspect ratio logic for inline SVG.
  const [w, h] = ratio.split("x").map((n) => Number(n));
  const viewBox = `0 0 ${w} ${h}`;
  return (
    <svg
      viewBox={viewBox}
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="presentation"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={a} />
          <stop offset="60%" stopColor={b} />
          <stop offset="100%" stopColor={c} />
        </linearGradient>
        <radialGradient id={`${id}-glow`} cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="rgba(255,235,200,0.18)" />
          <stop offset="100%" stopColor="rgba(255,235,200,0)" />
        </radialGradient>
      </defs>
      <rect width={w} height={h} fill={`url(#${id})`} />
      <rect width={w} height={h} fill={`url(#${id}-glow)`} />
    </svg>
  );
}
