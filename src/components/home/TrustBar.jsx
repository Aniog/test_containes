const ITEMS = [
  { id: "ship", label: "Free Worldwide Shipping" },
  { id: "returns", label: "30-Day Returns" },
  { id: "gold", label: "18k Gold Plated" },
  { id: "hypo", label: "Hypoallergenic" },
];

export default function TrustBar() {
  return (
    <section className="bg-ivory border-y border-hairline">
      <div className="container-x py-5 md:py-6">
        <ul className="flex flex-wrap items-center justify-center md:justify-between gap-y-3 gap-x-8 text-[11px] tracking-widest2 uppercase text-charcoal">
          {ITEMS.map((item, i) => (
            <li key={item.id} className="flex items-center gap-8">
              <span className="inline-flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-gold rotate-45" aria-hidden />
                {item.label}
              </span>
              {i < ITEMS.length - 1 && (
                <span className="hidden md:inline-block w-[1px] h-3 bg-hairline" aria-hidden />
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}