const ITEMS = [
  { label: 'Free Worldwide Shipping' },
  { label: '30-Day Returns' },
  { label: '18K Gold Plated' },
  { label: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <section
      aria-label="Our promise"
      className="bg-ivory border-y border-hairline"
    >
      <div className="container-page py-5 md:py-6">
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-y-3 gap-x-6 md:gap-x-4 text-center md:flex md:items-center md:justify-between">
          {ITEMS.map((item, idx) => (
            <li
              key={item.label}
              className="flex items-center justify-center gap-3"
            >
              <span
                aria-hidden="true"
                className="hidden md:inline-block w-1 h-1 rounded-full bg-gold"
              />
              <span className="text-[10px] md:text-[11px] font-sans font-medium uppercase tracking-widest-2 text-ink-soft">
                {item.label}
              </span>
              {idx < ITEMS.length - 1 && (
                <span
                  aria-hidden="true"
                  className="hidden md:inline-block w-px h-3 bg-hairline"
                />
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
