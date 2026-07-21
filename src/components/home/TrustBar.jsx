const ITEMS = [
  "Free Worldwide Shipping",
  "30-Day Returns",
  "18K Gold Plated",
  "Hypoallergenic",
];

export default function TrustBar() {
  return (
    <section className="bg-cream-warm border-y border-hairline" aria-label="Trust and quality">
      <div className="mx-auto max-w-editorial px-5 md:px-10 py-4 md:py-5">
        <ul className="flex flex-wrap items-center justify-center md:justify-between gap-y-2 gap-x-8 text-ink">
          {ITEMS.map((item, i) => (
            <li key={item} className="flex items-center gap-3 text-xs md:text-sm">
              {i > 0 && <span className="hidden md:inline-block w-1 h-1 rounded-full bg-champagne" aria-hidden="true" />}
              <span className="eyebrow text-[0.66rem] text-ink/80">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
