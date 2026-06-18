const items = [
  'Free Worldwide Shipping',
  '30-Day Returns',
  '18K Gold Plated',
  'Hypoallergenic',
];

export default function TrustBar() {
  return (
    <div className="bg-parchment border-b border-linen">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-center md:justify-between flex-wrap gap-0 divide-x divide-linen">
          {items.map(item => (
            <div
              key={item}
              className="flex items-center gap-2 px-5 md:px-8 py-3.5"
            >
              <span className="w-1 h-1 rounded-full bg-gold flex-shrink-0" />
              <span className="font-manrope text-xs uppercase tracking-widest text-bark whitespace-nowrap">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
