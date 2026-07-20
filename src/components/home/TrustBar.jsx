export default function TrustBar() {
  const items = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic',
  ];

  return (
    <div className="bg-primary text-primary-foreground py-3">
      <div className="section-padding">
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs tracking-wider uppercase">
          {items.map((item, index) => (
            <span key={index} className="flex items-center gap-2">
              <span className="w-1 h-1 bg-accent rounded-full hidden sm:block" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
