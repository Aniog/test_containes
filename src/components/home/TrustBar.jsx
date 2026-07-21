import { Truck, RotateCcw, Gem, Heart } from 'lucide-react';

const trustItems = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Gem, label: '18K Gold Plated' },
  { icon: Heart, label: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <section className="bg-velmora-espresso text-velmora-cream py-4 border-y border-velmora-coffee">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-3 gap-x-4">
          {trustItems.map((item) => (
            <div key={item.label} className="flex items-center justify-center gap-2 md:gap-3">
              <item.icon size={16} className="text-velmora-gold" strokeWidth={1.5} />
              <span className="text-[10px] md:text-xs uppercase tracking-wider text-velmora-taupe">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
