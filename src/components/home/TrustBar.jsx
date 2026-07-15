import { Truck, RotateCcw, Gem, Shield } from 'lucide-react';

const TrustBar = () => {
  const items = [
    { label: 'Free Worldwide Shipping', icon: Truck },
    { label: '30-Day Returns', icon: RotateCcw },
    { label: '18K Gold Plated', icon: Gem },
    { label: 'Hypoallergenic', icon: Shield },
  ];

  return (
    <div className="bg-brand-charcoal">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-4 md:py-5">
        <div className="grid grid-cols-2 md:flex md:items-center md:justify-center gap-y-3 gap-x-6 md:gap-x-10">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={item.label} className="flex items-center justify-center gap-2.5">
                <Icon className="w-3.5 h-3.5 text-brand-gold" />
                <span className="font-sans text-[10px] md:text-[11px] tracking-super-wide uppercase text-white/70">
                  {item.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TrustBar;
