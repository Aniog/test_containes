const items = [
  'Free Worldwide Shipping',
  '30-Day Returns',
  '18K Gold Plated',
  'Hypoallergenic',
];

export default function TrustBar() {
  return (
    <div className="bg-obsidian border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-center md:justify-between flex-wrap gap-0 divide-x divide-white/10">
          {items.map(item => (
            <div
              key={item}
              className="flex-1 min-w-[140px] text-center py-3 px-4"
            >
              <span className="text-[10px] font-manrope uppercase tracking-widest text-parchment/60">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
