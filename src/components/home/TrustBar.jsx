const items = [
  'Free Worldwide Shipping',
  '30-Day Returns',
  '18K Gold Plated',
  'Hypoallergenic',
];

export default function TrustBar() {
  return (
    <div className="bg-charcoal border-b border-ivory/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-3 flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
        {items.map((item, i) => (
          <span key={item} className="flex items-center gap-2">
            {i > 0 && (
              <span className="hidden sm:inline-block w-px h-3 bg-ivory/20" />
            )}
            <span className="font-inter text-[10px] tracking-widest uppercase text-ivory/70">
              {item}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
