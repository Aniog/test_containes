import { Truck, RotateCcw, Shield, Heart } from 'lucide-react';

const items = [
  { icon: Truck, text: 'Free Worldwide Shipping' },
  { icon: RotateCcw, text: '30-Day Returns' },
  { icon: Shield, text: '18K Gold Plated' },
  { icon: Heart, text: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <div className="bg-velmora-espresso text-white/70">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-3.5 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 font-sans text-[10px] md:text-xs tracking-[0.15em] uppercase">
        {items.map((item) => (
          <div key={item.text} className="flex items-center gap-2">
            <item.icon size={14} strokeWidth={1} className="text-velmora-gold-light/70" />
            <span>{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
