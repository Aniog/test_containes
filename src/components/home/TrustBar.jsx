import { Truck, RotateCcw, Gem, Shield } from 'lucide-react';

const trustItems = [
  { label: 'Free Worldwide Shipping', icon: Truck },
  { label: '30-Day Returns', icon: RotateCcw },
  { label: '18K Gold Plated', icon: Gem },
  { label: 'Hypoallergenic', icon: Shield },
];

export default function TrustBar() {
  return (
    <div className="bg-brand-espresso text-white/80">
      <div className="max-w-7xl mx-auto section-padding py-3.5">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 md:gap-x-10">
          {trustItems.map((item, i) => (
            <div key={item.label} className="flex items-center gap-2 md:gap-3">
              <item.icon className="w-3.5 h-3.5 text-brand-gold/70" />
              <span className="font-sans text-[11px] md:text-xs tracking-[0.12em] uppercase">
                {item.label}
              </span>
              {i < trustItems.length - 1 && (
                <span className="hidden md:inline text-brand-gold/30 mx-1">·</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
