export default function TrustBar() {
  const items = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic',
  ];

  return (
    <div className="bg-espresso border-b border-white/5">
      <div className="section-padding py-3.5">
        <div className="flex items-center justify-center gap-6 md:gap-10 lg:gap-14 flex-wrap">
          {items.map((item, i) => (
            <span
              key={item}
              className="text-[11px] text-cream/50 tracking-[0.1em] uppercase"
            >
              {item}
              {i < items.length - 1 && (
                <span className="ml-6 md:ml-10 lg:ml-14 text-cream/15">·</span>
              )}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}