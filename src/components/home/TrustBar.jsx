export default function TrustBar() {
  const items = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic',
  ];

  return (
    <div className="bg-velmora-charcoal text-white/60">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="flex items-center justify-center gap-6 md:gap-12 py-3 overflow-x-auto text-[11px] md:text-xs tracking-wider uppercase font-medium whitespace-nowrap">
          {items.map((item) => (
            <span key={item} className="flex items-center gap-6 md:gap-12">
              <span>{item}</span>
              <span className="w-px h-3 bg-white/15 last:hidden" />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
