export default function TrustBar() {
  const items = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic',
  ];

  return (
    <div className="bg-ink-900 text-cream-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-x-8 gap-y-2 py-3 text-[11px] tracking-wider uppercase font-medium overflow-x-auto hide-scrollbar">
          {items.map((item, i) => (
            <div key={item} className="flex items-center whitespace-nowrap">
              <span>{item}</span>
              {i < items.length - 1 && (
                <span className="mx-4 text-cream-500/40">·</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}