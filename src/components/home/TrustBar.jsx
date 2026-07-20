import { Truck, RotateCcw, Gem, ShieldCheck } from 'lucide-react';

const items = [
  { icon: Truck, text: 'Free Worldwide Shipping' },
  { icon: RotateCcw, text: '30-Day Returns' },
  { icon: Gem, text: '18K Gold Plated' },
  { icon: ShieldCheck, text: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <section className="bg-parchment py-4 border-y border-sand">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-4 md:gap-0">
          {items.map((item) => (
            <div key={item.text} className="flex items-center gap-2 text-umber">
              <item.icon size={16} strokeWidth={1.5} />
              <span className="text-[11px] tracking-wider uppercase font-medium">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}