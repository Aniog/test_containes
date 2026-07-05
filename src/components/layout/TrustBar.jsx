export default function TrustBar() {
  const items = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic',
  ];

  return (
    <div className="bg-velmora-surface py-3 overflow-hidden">
      <div className="flex items-center justify-center gap-6 md:gap-12 px-6 flex-wrap">
        {items.map((text, i) => (
          <span
            key={i}
            className="font-sans text-[11px] md:text-xs tracking-wider uppercase text-white/70 whitespace-nowrap"
          >
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}
