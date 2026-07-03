const trustItems = [
  'Free Worldwide Shipping',
  '30-Day Returns',
  '18K Gold Plated',
  'Hypoallergenic',
];

export default function TrustBar() {
  return (
    <div className="bg-charcoal-900 py-3.5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 md:gap-10">
          {trustItems.map((item, i) => (
            <div key={item} className="flex items-center gap-2">
              {i > 0 && (
                <span className="hidden sm:block w-px h-3 bg-charcoal-700" />
              )}
              <span className="text-[11px] font-sans font-medium uppercase tracking-ultra-wide text-cream-200/80 whitespace-nowrap">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
