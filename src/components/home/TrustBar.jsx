import { Truck, RotateCcw, Gem, Shield } from 'lucide-react';

const items = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Gem, label: '18K Gold Plated' },
  { icon: Shield, label: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <div className="bg-charcoal-900 text-cream-100">
      <div className="section-padding py-3 md:py-3.5">
        <div className="flex items-center justify-center gap-6 md:gap-12 overflow-x-auto scrollbar-hide">
          {items.map((item) => (
            <div key={item.label} className="flex items-center gap-2 flex-shrink-0">
              <item.icon className="w-3.5 h-3.5 text-gold-400" strokeWidth={1.5} />
              <span className="font-sans text-[10px] md:text-xs tracking-ultra-wide uppercase text-cream-200 whitespace-nowrap">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
