const items = [
  'Free Worldwide Shipping',
  '30-Day Returns',
  '18K Gold Plated',
  'Hypoallergenic',
];

export default function TrustBar() {
  return (
    <div className="bg-charcoal border-b border-cream/5">
      <div className="section-padding py-3 flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
        {items.map((item, i) => (
          <span key={i} className="text-xs text-cream/50 tracking-wider uppercase font-light">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
