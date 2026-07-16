import { Truck, RotateCcw, Sparkles, Shield } from 'lucide-react';

const items = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Sparkles, label: '18K Gold Plated' },
  { icon: Shield, label: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <div className="bg-charcoal border-b border-ivory/10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-center md:justify-between overflow-x-auto scrollbar-hide py-3 gap-6 md:gap-0">
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-2 flex-shrink-0">
              <item.icon className="w-3 h-3 text-gold flex-shrink-0" />
              <span className="font-inter text-[10px] uppercase tracking-[0.14em] text-ivory/60 whitespace-nowrap">
                {item.label}
              </span>
              {i < items.length - 1 && (
                <span className="hidden md:block w-px h-3 bg-ivory/15 ml-6" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
