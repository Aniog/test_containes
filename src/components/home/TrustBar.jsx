const trustItems = [
  'Free Worldwide Shipping',
  '30-Day Returns',
  '18K Gold Plated',
  'Hypoallergenic',
];

export default function TrustBar() {
  return (
    <div className="bg-velmora-obsidian py-3 overflow-hidden">
      {/* Marquee on mobile, static on desktop */}
      <div className="hidden md:flex items-center justify-center gap-0">
        {trustItems.map((item, i) => (
          <div key={item} className="flex items-center">
            <span className="font-sans text-xs tracking-[0.2em] uppercase text-velmora-cream/80 px-8">
              {item}
            </span>
            {i < trustItems.length - 1 && (
              <span className="text-velmora-gold text-xs">·</span>
            )}
          </div>
        ))}
      </div>

      {/* Mobile marquee */}
      <div className="md:hidden flex overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...trustItems, ...trustItems].map((item, i) => (
            <span key={i} className="font-sans text-xs tracking-[0.2em] uppercase text-velmora-cream/80 px-6">
              {item} <span className="text-velmora-gold mx-2">·</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
