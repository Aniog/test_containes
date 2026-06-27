import { Truck, RotateCcw, Gem, Shield } from 'lucide-react';

const items = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Gem, label: '18K Gold Plated' },
  { icon: Shield, label: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <div className="bg-velmora-cream border-b border-velmora-border">
      <div className="max-w-[1400px] mx-auto px-5 md:px-8">
        <div className="flex items-center justify-center md:justify-between py-3.5 gap-5 md:gap-0 overflow-x-auto hide-scrollbar">
          {items.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2 flex-shrink-0">
              <Icon className="w-3.5 h-3.5 text-velmora-warm-gray" strokeWidth={1.5} />
              <span className="font-sans text-[11px] md:text-[12px] text-velmora-warm-gray tracking-[0.04em] whitespace-nowrap">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}