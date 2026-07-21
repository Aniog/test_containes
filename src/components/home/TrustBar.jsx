const ITEMS = [
  "Free Worldwide Shipping",
  "30-Day Returns",
  "18K Gold Plated",
  "Hypoallergenic",
];

export default function TrustBar() {
  return (
    <section className="border-b border-line bg-cream">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 py-4 md:justify-between">
          {ITEMS.map((item, i) => (
            <li
              key={item}
              className="flex items-center gap-8 text-[10px] font-semibold uppercase tracking-[0.24em] text-taupe md:text-[11px]"
            >
              <span className={i === 0 ? "" : "hidden h-1 w-1 rounded-full bg-gold sm:block"} />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
