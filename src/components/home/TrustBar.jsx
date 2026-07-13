import { Truck, RotateCcw, Sparkles, Heart } from 'lucide-react';

const items = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Sparkles, label: '18K Gold Plated' },
  { icon: Heart, label: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <div className="bg-espresso border-b border-ivory/10">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-3">
        <div className="flex items-center justify-center gap-6 md:gap-12 overflow-x-auto scrollbar-hide">
          {items.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2 flex-shrink-0">
              <Icon size={13} className="text-gold" />
              <span className="font-sans text-[11px] font-medium uppercase tracking-widest text-ivory/70 whitespace-nowrap">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
