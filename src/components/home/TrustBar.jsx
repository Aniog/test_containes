import { Truck, RotateCcw, Gem, ShieldCheck } from 'lucide-react';

const items = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Gem, label: '18K Gold Plated' },
  { icon: ShieldCheck, label: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <div className="bg-charcoal-800 py-4 border-t border-b border-gold-700/20">
      <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-x-8 gap-y-2 md:gap-x-16">
        {items.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-2.5">
            <Icon className="w-4 h-4 text-gold-400" />
            <span className="text-xs tracking-wider text-cream-200/80 font-sans uppercase">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
