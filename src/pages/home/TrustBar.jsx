import { Truck, RotateCcw, Gem, Heart } from 'lucide-react';

const TRUST_ITEMS = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Gem, label: '18K Gold Plated' },
  { icon: Heart, label: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <section className="bg-velmora-cream border-b border-velmora-border">
      <div className="section-padding py-4 md:py-5">
        <div className="flex items-center justify-between md:justify-center gap-4 md:gap-12 overflow-x-auto no-scrollbar">
          {TRUST_ITEMS.map((item) => (
            <div key={item.label} className="flex items-center gap-2.5 flex-shrink-0">
              <item.icon size={16} className="text-velmora-gold" />
              <span className="font-sans text-[11px] md:text-xs font-medium tracking-wider uppercase text-velmora-gray whitespace-nowrap">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}