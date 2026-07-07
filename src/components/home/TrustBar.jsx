import { Truck, RotateCcw, Gem, Heart } from 'lucide-react';

const items = [
  { icon: Truck, text: 'Free Worldwide Shipping' },
  { icon: RotateCcw, text: '30-Day Returns' },
  { icon: Gem, text: '18K Gold Plated' },
  { icon: Heart, text: 'Hypoallergenic' },
];

const TrustBar = () => (
  <section className="bg-charcoal-950 border-b border-charcoal-800">
    <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
      <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 py-4">
        {items.map((item) => (
          <div key={item.text} className="flex items-center gap-2 text-charcoal-400">
            <item.icon size={13} className="text-gold-500/70" />
            <span className="text-[10px] tracking-widest uppercase font-medium">{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustBar;