export default function TrustBar() {
  const items = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic',
  ];

  return (
    <div className="border-y border-border-light bg-white">
      <div className="max-w-[1200px] mx-auto px-6 py-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
        {items.map((item, i) => (
          <div key={item} className="flex items-center gap-2">
            {i > 0 && (
              <span className="hidden sm:block w-1 h-1 rounded-full bg-gold -ml-5 mr-3" aria-hidden="true" />
            )}
            <span className="text-[11px] uppercase tracking-[0.12em] text-text-secondary">
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
