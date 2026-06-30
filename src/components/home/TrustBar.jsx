export default function TrustBar() {
  const items = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic',
  ];

  return (
    <section className="bg-brand-ivory border-y border-black/[0.05]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-brand-gold" />
              <span className="text-xs tracking-wider uppercase text-brand-muted font-sans">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
