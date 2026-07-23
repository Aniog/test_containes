export default function TrustBar() {
  const items = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic',
  ];

  return (
    <div className="border-y border-warmgray-muted bg-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 py-3">
          {items.map((item) => (
            <span
              key={item}
              className="text-[11px] tracking-widest uppercase text-warmgray font-medium"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
