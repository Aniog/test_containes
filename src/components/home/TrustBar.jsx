const items = [
  "Free Worldwide Shipping",
  "30-Day Returns",
  "18K Gold Plated",
  "Hypoallergenic",
];

export default function TrustBar() {
  return (
    <section
      aria-label="Trust badges"
      className="bg-cream-200 border-y border-hairline/60"
    >
      <div className="container-wide py-4 md:py-5">
        <ul className="grid grid-cols-2 md:flex md:items-center md:justify-between gap-y-2 gap-x-6">
          {items.map((it) => (
            <li
              key={it}
              className="flex items-center justify-center gap-2 text-center"
            >
              <span className="h-1 w-1 rounded-full bg-gold-400 hidden md:block" />
              <span className="font-sans text-[11px] md:text-[12px] uppercase tracking-widest2 text-muted">
                {it}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
