const trustItems = [
  "Free Worldwide Shipping",
  "30-Day Returns",
  "18K Gold Plated",
  "Hypoallergenic",
];

export default function TrustBar() {
  return (
    <section className="bg-ink text-cream py-3.5 border-b border-cream/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-1 text-[11px] md:text-xs tracking-widest uppercase text-cream/80">
          {trustItems.map((item, idx) => (
            <li key={item} className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-gold" />
              {item}
              {idx < trustItems.length - 1 && (
                <span className="hidden md:inline ml-6 text-cream/20">|</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
