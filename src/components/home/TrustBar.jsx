const items = [
  { label: "Free Worldwide Shipping" },
  { label: "30-Day Returns" },
  { label: "18K Gold Plated" },
  { label: "Hypoallergenic" },
];

export default function TrustBar() {
  return (
    <section className="bg-cream border-y border-hairline">
      <div className="container-editorial">
        <ul className="flex flex-wrap items-center justify-center md:justify-between gap-y-3 py-4 md:py-5">
          {items.map((it, i) => (
            <li
              key={it.label}
              className="flex items-center gap-3 md:gap-4 text-[10px] md:text-[11px] uppercase tracking-widest-2 text-ink/80"
            >
              {i > 0 && (
                <span className="hidden md:inline-block w-px h-3 bg-hairline" aria-hidden="true" />
              )}
              <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" aria-hidden="true" />
              <span>{it.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
