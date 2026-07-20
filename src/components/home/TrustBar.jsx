import { Truck, RotateCcw, Sparkles, Shield } from 'lucide-react';

const items = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Sparkles, label: '18K Gold Plated' },
  { icon: Shield, label: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <div className="bg-charcoal text-ivory">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-wrap items-center justify-center lg:justify-between gap-4 py-3.5">
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <item.icon className="w-3.5 h-3.5 text-gold flex-shrink-0" strokeWidth={1.5} />
              <span className="text-xs uppercase tracking-widest font-sans text-ivory/90 whitespace-nowrap">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
