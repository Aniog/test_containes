import { Truck, RotateCcw, Shield, Heart } from 'lucide-react';

const trustItems = [
  { icon: Truck, text: 'Free Worldwide Shipping' },
  { icon: RotateCcw, text: '30-Day Returns' },
  { icon: Shield, text: '18K Gold Plated' },
  { icon: Heart, text: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <div className="bg-stone-900 text-white py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-6 md:gap-10 lg:gap-16">
          {trustItems.map((item, index) => (
            <div key={index} className="flex items-center gap-2 text-xs sm:text-sm tracking-wide">
              <item.icon className="w-4 h-4 text-primary flex-shrink-0" />
              <span className="text-stone-300">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
