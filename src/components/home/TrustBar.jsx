const trustItems = [
  'Free Worldwide Shipping',
  '30-Day Returns',
  '18K Gold Plated',
  'Hypoallergenic',
];

export default function TrustBar() {
  return (
    <div className="bg-brand-espresso text-white/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
          {trustItems.map((item, i) => (
            <div key={item} className="flex items-center gap-2">
              <span className="text-[10px] font-sans font-medium tracking-ultra-wide uppercase">
                {item}
              </span>
              {i < trustItems.length - 1 && (
                <span className="hidden sm:inline text-brand-gold/40 mx-2">·</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
