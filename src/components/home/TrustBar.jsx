const items = [
  'Free Worldwide Shipping',
  '30-Day Returns',
  '18K Gold Plated',
  'Hypoallergenic',
];

export default function TrustBar() {
  return (
    <div className="bg-espresso text-sand-light">
      <div className="container-max section-padding">
        <div className="flex items-center justify-center gap-6 md:gap-12 py-3 overflow-x-auto">
          {items.map((text, i) => (
            <span key={text} className="text-[10px] md:text-xs tracking-widest uppercase whitespace-nowrap flex items-center gap-6">
              {text}
              {i < items.length - 1 && <span className="w-px h-3 bg-stone/40 inline-block" />}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
