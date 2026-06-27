const items = [
  'Free Worldwide Shipping',
  '30-Day Returns',
  '18K Gold Plated',
  'Hypoallergenic',
];

export default function TrustBar() {
  return (
    <div className="bg-velmora-charcoal">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 py-3 sm:py-4">
          {items.map((item) => (
            <span
              key={item}
              className="text-velmora-sand/80 text-[11px] sm:text-xs font-medium tracking-editorial uppercase whitespace-nowrap"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
