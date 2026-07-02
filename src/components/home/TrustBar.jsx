import { Truck, RotateCcw, Shield, Sparkles } from 'lucide-react';

const items = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Sparkles, label: '18K Gold Plated' },
  { icon: Shield, label: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <div className="bg-ivory-100 border-y border-charcoal-100">
      <div className="section-padding py-4">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 md:gap-x-16">
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <item.icon size={15} className="text-brand-gold" strokeWidth={1.5} />
              <span className="font-sans text-[11px] tracking-[0.08em] uppercase text-charcoal-600 font-medium">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
