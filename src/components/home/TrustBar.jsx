import { Truck, RotateCcw, Shield, Sparkles } from 'lucide-react';

const items = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Shield, label: '18K Gold Plated' },
  { icon: Sparkles, label: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <div className="bg-velmora-cream border-b border-velmora-border">
      <div className="section-padding py-3.5">
        <div className="flex items-center justify-center gap-6 md:gap-12 overflow-x-auto no-scrollbar">
          {items.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2 whitespace-nowrap flex-shrink-0">
              <Icon size={15} className="text-velmora-gold" strokeWidth={1.5} />
              <span className="font-sans text-[11px] md:text-xs tracking-wider uppercase text-velmora-stone">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
