const items = [
  "Free Worldwide Shipping",
  "30-Day Returns",
  "18K Gold Plated",
  "Hypoallergenic",
];

export default function TrustBar() {
  return (
    <section className="bg-ink text-cream/85 border-y border-ink-700">
      <div className="container-wide py-4 md:py-5">
        <ul className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 md:gap-x-0 md:justify-between text-center">
          {items.map((label, i) => (
            <li
              key={label}
              className="flex items-center text-[10px] md:text-[11px] uppercase tracking-widest2 font-medium text-cream/85"
            >
              <span>{label}</span>
              {i < items.length - 1 && (
                <span className="hidden md:inline-block w-px h-3 bg-cream/25 mx-8" />
              )}
              {i < items.length - 1 && (
                <span className="md:hidden mx-3 text-cream/35">·</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
