const items = [
  'Free Worldwide Shipping',
  '30-Day Returns',
  '18K Gold Plated',
  'Hypoallergenic',
];

export default function TrustBar() {
  return (
    <div className="bg-charcoal text-ivory/80 py-3">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-center flex-wrap gap-x-8 gap-y-1">
          {items.map((item, i) => (
            <span key={item} className="flex items-center gap-2">
              {i > 0 && <span className="hidden sm:inline text-gold/40 text-xs">·</span>}
              <span className="font-sans text-xs tracking-wider text-ivory/70">{item}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
