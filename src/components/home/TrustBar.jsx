const items = [
  'Free Worldwide Shipping',
  '30-Day Returns',
  '18K Gold Plated',
  'Hypoallergenic',
];

export default function TrustBar() {
  return (
    <div className="bg-obsidian border-b border-ivory/10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-center md:justify-between flex-wrap gap-0 divide-x divide-ivory/10">
          {items.map((item) => (
            <div
              key={item}
              className="flex items-center gap-2 px-4 md:px-6 py-3"
            >
              <span className="text-gold text-xs">✦</span>
              <span className="font-sans text-xs uppercase tracking-widest-sm font-medium text-ivory/70 whitespace-nowrap">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
