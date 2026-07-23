import { Truck, RotateCcw, Shield, Sparkle } from 'lucide-react';

const items = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Shield, label: '18K Gold Plated' },
  { icon: Sparkle, label: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <div className="bg-[#1A1A1A] text-white/70">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="flex items-center justify-center md:justify-between py-3 gap-6 md:gap-0 overflow-x-auto text-nowrap">
          {items.map((item) => (
            <div key={item.label} className="flex items-center gap-2 text-[11px] uppercase tracking-[0.12em]">
              <item.icon className="w-3 h-3 text-gold" />
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
