const TrustBar = () => {
  const items = [
    "Free Worldwide Shipping",
    "30-Day Returns",
    "18K Gold Plated",
    "Hypoallergenic",
  ];

  return (
    <div className="border-b border-[var(--color-border-soft)] bg-white">
      <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
        <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-[11px] font-semibold tracking-[0.16em] uppercase text-[var(--color-ink-secondary)]">
          {items.map((item) => (
            <li key={item} className="flex items-center gap-2">
              <span className="inline-block h-1 w-1 rounded-full bg-[var(--color-accent)]" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TrustBar;
