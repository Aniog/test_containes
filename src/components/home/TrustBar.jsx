const items = [
  'Free Worldwide Shipping',
  '30-Day Returns',
  '18K Gold Plated',
  'Hypoallergenic',
];

export default function TrustBar() {
  return (
    <div className="bg-stone-900 text-stone-300">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-2 py-3.5 text-[10px] md:text-xs tracking-[0.15em] uppercase">
          {items.map((item, i) => (
            <span key={item} className="flex items-center gap-3">
              <span className="w-1 h-1 rounded-full bg-warm-600" />
              {item}
              {i < items.length - 1 && <span className="hidden md:inline text-stone-700 mx-1">·</span>}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
