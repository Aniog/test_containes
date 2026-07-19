export default function Logo({ light = false, className = "" }) {
  const color = light ? "#F6F0E6" : "#1B1612";
  const accent = light ? "#D9C29A" : "#B08A4A";
  return (
    <span
      className={`inline-flex items-baseline gap-1 ${className}`}
      style={{ lineHeight: 1 }}
    >
      <span
        className="font-serif text-2xl tracking-display"
        style={{ color }}
      >
        Velmora
      </span>
      <span
        aria-hidden="true"
        className="font-serif text-2xl"
        style={{ color: accent }}
      >
        ◆
      </span>
    </span>
  );
}
