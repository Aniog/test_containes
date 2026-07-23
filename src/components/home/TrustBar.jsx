import { Truck, RotateCcw, Shield, Heart } from 'lucide-react';

const trustItems = [
  { icon: Truck, text: 'Free Worldwide Shipping' },
  { icon: RotateCcw, text: '30-Day Returns' },
  { icon: Shield, text: '18K Gold Plated' },
  { icon: Heart, text: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <div className="bg-[#1A1A1A] text-[#FAF9F7]">
      <div className="container-velmora">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 py-4">
          {trustItems.map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <item.icon className="w-4 h-4 text-[#C9A96E]" />
              <span className="text-xs tracking-wider">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
