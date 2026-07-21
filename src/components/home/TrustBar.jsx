export default function TrustBar() {
  const items = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic',
  ];

  return (
    <div className="bg-velvet-950 py-4 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-center md:justify-between flex-wrap gap-x-8 gap-y-2">
          {items.map((item, i) => (
            <div key={item} className="flex items-center gap-2">
              {i > 0 && (
                <span className="hidden md:block w-1 h-1 bg-gold/40 rounded-full" />
              )}
              <span className="text-xs tracking-widest uppercase text-velvet-300">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}