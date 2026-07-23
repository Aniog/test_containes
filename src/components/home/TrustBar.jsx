import { Link } from 'react-router-dom';
import { Truck, RotateCcw, Shield, Heart } from 'lucide-react';

const trustItems = [
  { icon: Truck, text: 'Free Worldwide Shipping' },
  { icon: RotateCcw, text: '30-Day Returns' },
  { icon: Shield, text: '18K Gold Plated' },
  { icon: Heart, text: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <div className="bg-[#2C2420] text-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex flex-wrap justify-center gap-6 md:gap-12 py-4">
          {trustItems.map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-2">
              <Icon size={16} className="text-[#B8956A]" />
              <span className="text-xs tracking-wider uppercase">{text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
