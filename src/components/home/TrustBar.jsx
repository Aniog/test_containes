const items = [
  "Free Worldwide Shipping",
  "30-Day Returns",
  "18K Gold Plated",
  "Hypoallergenic",
];

export default function TrustBar() {
  return (
    <div className="bg-espresso text-ivory border-y border-ivory/10">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-4">
        <ul className="flex flex-wrap items-center justify-center md:justify-between gap-x-8 gap-y-2 text-center md:text-left">
          {items.map((it) => (
            <li
              key={it}
              className="text-[11px] uppercase tracking-[0.2em] text-ivory/80 flex items-center gap-2"
            >
              <span className="w-1 h-1 rounded-full bg-gold hidden md:block" />
              {it}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
