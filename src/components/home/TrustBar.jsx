import { Truck, RotateCcw, Gem, ShieldCheck } from 'lucide-react';

const items = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Gem, label: '18K Gold Plated' },
  { icon: ShieldCheck, label: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <section className="bg-charcoal-800 border-b border-charcoal-700">
      <div className="container-narrow">
        <div className="flex items-center justify-center gap-6 md:gap-12 py-3.5 overflow-x-auto scrollbar-hide">
          {items.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2 flex-shrink-0">
              <Icon className="w-3.5 h-3.5 text-gold-400" />
              <span className="text-[11px] font-medium tracking-wider uppercase text-cream-300 whitespace-nowrap">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
