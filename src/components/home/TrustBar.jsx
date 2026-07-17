const trustItems = [
  'Free Worldwide Shipping',
  '30-Day Returns',
  '18K Gold Plated',
  'Hypoallergenic',
];

export default function TrustBar() {
  return (
    <div className="bg-velmora-ink text-white/80">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-3.5">
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
          {trustItems.map((item, i) => (
            <div key={item} className="flex items-center gap-2 md:gap-3">
              <span className="text-xs md:text-sm font-sans tracking-wide uppercase">{item}</span>
              {i < trustItems.length - 1 && (
                <span className="hidden md:inline text-velmora-gold/40">·</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
