export default function TrustBar() {
  const items = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic',
  ];

  return (
    <div className="bg-velmora-espresso text-velmora-cream">
      <div className="section-padding py-3 md:py-4">
        <div className="flex items-center justify-center gap-4 md:gap-10 overflow-x-auto scrollbar-hide">
          {items.map((item, i) => (
            <span key={item} className="flex items-center gap-4 md:gap-10 whitespace-nowrap">
              <span className="font-sans text-[10px] md:text-xs tracking-widest uppercase text-velmora-goldlight">
                {item}
              </span>
              {i < items.length - 1 && (
                <span className="hidden md:inline-block w-px h-3 bg-velmora-cocoa" />
              )}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
