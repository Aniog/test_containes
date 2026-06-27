const trustItems = [
  'Free Worldwide Shipping',
  '30-Day Returns',
  '18K Gold Plated',
  'Hypoallergenic',
];

export default function TrustBar() {
  return (
    <div className="border-b border-vel-border bg-vel-surface">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-center gap-4 md:gap-12 py-4 overflow-x-auto scrollbar-hide">
          {trustItems.map((item, i) => (
            <div key={i} className="flex items-center gap-2 whitespace-nowrap">
              <span className="w-1 h-1 rounded-full bg-vel-gold flex-shrink-0" />
              <span className="text-xs md:text-sm text-vel-taupe tracking-wide">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
