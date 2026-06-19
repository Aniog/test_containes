import { Truck, RotateCcw, Shield, Sparkles } from 'lucide-react';

const items = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Sparkles, label: '18K Gold Plated' },
  { icon: Shield, label: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <div className="bg-charcoal-400 py-4 overflow-hidden">
      <div className="max-w-[1400px] mx-auto flex items-center justify-center gap-8 md:gap-14 flex-wrap section-padding">
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-2.5">
            <item.icon className="w-4 h-4 text-gold-400" strokeWidth={1.5} />
            <span className="text-[11px] text-cream-100/70 uppercase tracking-widest-xl font-sans font-medium whitespace-nowrap">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
