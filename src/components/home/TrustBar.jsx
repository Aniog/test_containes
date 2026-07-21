const items = [
  { label: "Free Worldwide Shipping", note: "On orders over $75" },
  { label: "30-Day Returns", note: "Effortless, on us" },
  { label: "18K Gold Plated", note: "2 microns, demi-fine" },
  { label: "Hypoallergenic", note: "Nickel-free, skin-safe" },
];

export default function TrustBar() {
  return (
    <section
      aria-label="Our promise"
      className="bg-champagne border-y border-sand"
    >
      {/* Hidden reference id so hero/section queries can include it */}
      <h2 id="trust-bar-title" className="sr-only">
        What we promise
      </h2>
      <div className="container-velmora py-5 md:py-6">
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-y-3 gap-x-4 text-center">
          {items.map((item, idx) => (
            <li
              key={item.label}
              className={`flex flex-col items-center justify-center ${
                idx > 0 ? "md:border-l md:border-sand/70" : ""
              }`}
            >
              <span className="font-serif text-sm md:text-base text-espresso tracking-wide">
                {item.label}
              </span>
              <span className="mt-0.5 font-sans text-[10px] md:text-[11px] uppercase tracking-widest2 text-ink-soft">
                {item.note}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
