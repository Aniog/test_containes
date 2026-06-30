import { Truck, RotateCcw, Sparkles, Shield } from 'lucide-react';

const items = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Sparkles, label: '18K Gold Plated' },
  { icon: Shield, label: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <div className="bg-charcoal-light border-b border-white/10">
      <div className="max-w-screen-xl mx-auto px-6 py-3">
        <div className="flex items-center justify-center gap-6 md:gap-12 overflow-x-auto scroll-hide">
          {items.map((item, i) => (
            <div key={item.label} className="flex items-center gap-2 flex-shrink-0">
              {i > 0 && <span className="hidden md:block w-px h-3 bg-white/20 mr-4" />}
              <item.icon size={12} strokeWidth={1.5} className="text-gold-light flex-shrink-0" />
              <span className="font-sans text-[10px] tracking-widest uppercase text-white/70 whitespace-nowrap">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
