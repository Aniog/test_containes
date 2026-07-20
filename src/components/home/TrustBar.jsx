export default function TrustBar() {
  const items = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic',
  ];

  return (
    <div className="bg-velmora-ink py-4 overflow-hidden">
      <div className="flex items-center justify-center gap-8 md:gap-14 flex-wrap px-6">
        {items.map((text, i) => (
          <div key={i} className="flex items-center gap-2">
            <span className="w-1 h-1 rounded-full bg-velmora-gold flex-shrink-0" />
            <span className="text-xs tracking-[0.12em] uppercase text-velmora-sand/70 font-medium">
              {text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
