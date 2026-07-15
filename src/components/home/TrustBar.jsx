const items = [
  'Free Worldwide Shipping',
  '30-Day Returns',
  '18K Gold Plated',
  'Hypoallergenic',
];

export function TrustBar() {
  return (
    <div className="border-b border-velmora-border bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-14 py-4">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
          {items.map((item, idx) => (
            <span
              key={idx}
              className="text-[10px] md:text-xs uppercase tracking-widest text-velmora-taupe"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
