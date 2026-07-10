import { Truck, RotateCcw, Gem, Heart } from 'lucide-react';

const trustItems = [
  { icon: Truck, text: 'Free Worldwide Shipping' },
  { icon: RotateCcw, text: '30-Day Returns' },
  { icon: Gem, text: '18K Gold Plated' },
  { icon: Heart, text: 'Hypoallergenic' }
];

export default function TrustBar() {
  return (
    <div className="bg-velmora-creamDark py-5 border-b border-velmora-charcoal/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {trustItems.map((item, index) => (
            <div key={index} className="flex items-center gap-2 text-velmora-charcoal/70">
              <item.icon className="w-4 h-4 text-velmora-gold" />
              <span className="font-sans text-xs tracking-wider uppercase">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}