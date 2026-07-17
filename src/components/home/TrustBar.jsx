export default function TrustBar() {
  const items = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic',
  ];

  return (
    <section className="bg-espresso border-y border-white/5">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="flex items-center justify-center gap-6 lg:gap-12 py-3.5 overflow-x-auto scrollbar-hide">
          {items.map((text, i) => (
            <span
              key={text}
              className="text-[10px] lg:text-[11px] tracking-[0.12em] uppercase text-cream/50 font-light whitespace-nowrap flex-shrink-0"
            >
              {text}
              {i < items.length - 1 && (
                <span className="ml-6 lg:ml-12 text-cream/15">·</span>
              )}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
