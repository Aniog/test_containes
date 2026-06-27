const ITEMS = [
  { label: "Free Worldwide Shipping" },
  { label: "30-Day Returns" },
  { label: "18K Gold Plated" },
  { label: "Hypoallergenic" },
];

export function TrustBar() {
  return (
    <section className="bg-ivory border-y border-hairline">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <ul className="grid grid-cols-2 md:grid-cols-4 divide-x divide-hairline">
          {ITEMS.map((item, i) => (
            <li
              key={item.label}
              className="py-5 md:py-6 text-center"
            >
              <span className="text-[10px] md:text-[11px] uppercase tracking-eyebrow font-medium text-ink-muted">
                {item.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
