import { Truck, RotateCcw, Gem, Heart } from 'lucide-react';

const trustItems = [
  { icon: Truck, text: 'Free Worldwide Shipping' },
  { icon: RotateCcw, text: '30-Day Returns' },
  { icon: Gem, text: '18K Gold Plated' },
  { icon: Heart, text: 'Hypoallergenic' }
];

export default function TrustBar() {
  return (
    <div className="bg-ivory py-4 border-b border-warm-gray/10">
      <div className="max-w-content mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-center gap-8 lg:gap-16 flex-wrap">
          {trustItems.map((item, index) => (
            <div key={index} className="flex items-center gap-2 text-warm-gray">
              <item.icon className="w-4 h-4 text-gold" />
              <span className="text-xs font-sans font-medium tracking-wide">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}