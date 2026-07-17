import { Truck, RotateCcw, Gem, Heart } from 'lucide-react';

const items = [
  { icon: Truck, text: 'Free Worldwide Shipping' },
  { icon: RotateCcw, text: '30-Day Returns' },
  { icon: Gem, text: '18K Gold Plated' },
  { icon: Heart, text: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <div className="bg-espresso text-cream-dark">
      <div className="section-padding py-4">
        <div className="flex items-center justify-center flex-wrap gap-x-8 gap-y-3">
          {items.map((item) => (
            <div key={item.text} className="flex items-center gap-2.5 text-xs md:text-sm tracking-wide">
              <item.icon className="w-3.5 h-3.5 text-gold" />
              <span className="text-cream/70">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
