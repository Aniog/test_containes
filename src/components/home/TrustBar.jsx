export default function TrustBar() {
  const items = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic',
  ];

  return (
    <div className="bg-velmora-base border-b border-velmora-divider">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 py-3 md:py-4">
          {items.map((item, i) => (
            <span key={i} className="font-sans text-[10px] md:text-xs uppercase tracking-widest text-velmora-muted whitespace-nowrap">
              {item}
              {i < items.length - 1 && (
                <span className="hidden md:inline ml-6 text-velmora-divider">|</span>
              )}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
