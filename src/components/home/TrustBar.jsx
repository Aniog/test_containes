const trustItems = [
  { icon: '✦', label: 'Free Worldwide Shipping' },
  { icon: '✦', label: '30-Day Returns' },
  { icon: '✦', label: '18K Gold Plated' },
  { icon: '✦', label: 'Hypoallergenic' },
];

const TrustBar = () => (
  <div className="bg-espresso py-3.5 px-4">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
        {trustItems.map((item, i) => (
          <span key={i} className="flex items-center gap-2">
            <span className="text-gold text-[8px]">{item.icon}</span>
            <span className="font-inter text-[10px] tracking-widest uppercase text-cream/80">
              {item.label}
            </span>
          </span>
        ))}
      </div>
    </div>
  </div>
);

export default TrustBar;
