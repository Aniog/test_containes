const ITEMS = [
  "Free Worldwide Shipping",
  "30-Day Returns",
  "18K Gold Plated",
  "Hypoallergenic",
];

export function TrustBar() {
  return (
    <section className="border-y border-hairline bg-bone">
      <div className="px-6 md:px-10 lg:px-16 py-4 md:py-5 flex items-center justify-center">
        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 md:gap-x-12">
          {ITEMS.map((item, i) => (
            <li
              key={item}
              className="flex items-center gap-3 text-[10px] md:text-[11px] uppercase tracking-wider2 text-ink/80"
            >
              {i > 0 && (
                <span
                  aria-hidden
                  className="hidden md:inline-block w-px h-3 bg-hairline"
                />
              )}
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
