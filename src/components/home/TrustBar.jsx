export default function TrustBar() {
  const items = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic',
  ];

  return (
    <div className="bg-velvet-900/50 border-y border-warm-800/20">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-3">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
          {items.map((item, i) => (
            <div key={item} className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-gold-500/60 flex-shrink-0" />
              <span className="text-xs tracking-wider uppercase text-warm-400">
                {item}
              </span>
              {i < items.length - 1 && (
                <span className="hidden md:block w-px h-3 bg-warm-700/40 ml-8" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
