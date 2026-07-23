const ITEMS = [
  "Free Worldwide Shipping",
  "30-Day Returns",
  "18K Gold Plated",
  "Hypoallergenic",
];

export default function TrustBar() {
  return (
    <section className="border-b border-champagne bg-cream" aria-label="Our promises">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-3 px-5 py-4 md:justify-between md:px-8">
        {ITEMS.map((item, i) => (
          <p
            key={item}
            className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.26em] text-mocha md:text-[11px]"
          >
            {i > 0 && (
              <span className="hidden h-1 w-1 rotate-45 bg-gold md:inline-block" />
            )}
            {item}
          </p>
        ))}
      </div>
    </section>
  );
}
