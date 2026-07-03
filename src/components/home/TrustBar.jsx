const items = [
  'Free Worldwide Shipping',
  '30-Day Returns',
  '18K Gold Plated',
  'Hypoallergenic',
];

export default function TrustBar() {
  return (
    <div className="border-b border-ivory/5" style={{ backgroundColor: '#1A1714' }}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-center md:justify-between flex-wrap gap-0 divide-x divide-ivory/10">
          {items.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-2 px-4 md:px-6 py-3 flex-1 justify-center min-w-[140px]"
            >
              <span className="text-champagne text-xs">✦</span>
              <span className="font-manrope text-[11px] uppercase tracking-widest whitespace-nowrap" style={{ color: 'rgba(250,247,242,0.60)' }}>
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
