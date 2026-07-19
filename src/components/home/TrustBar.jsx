const trustItems = [
  'Free Worldwide Shipping',
  '30-Day Returns',
  '18K Gold Plated',
  'Hypoallergenic',
];

const TrustBar = () => {
  return (
    <div className="border-b border-brand-border bg-white">
      <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-[11px] font-medium tracking-widest uppercase text-brand-muted">
          {trustItems.map(item => (
            <span key={item} className="flex items-center gap-2">
              <span className="inline-block h-1 w-1 rounded-full bg-brand-accent" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBar;
