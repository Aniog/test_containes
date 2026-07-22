import { Shield, RotateCcw, Sparkles, Heart } from 'lucide-react';

const trustItems = [
  { icon: Sparkles, text: 'Free Worldwide Shipping' },
  { icon: RotateCcw, text: '30-Day Returns' },
  { icon: Shield, text: '18K Gold Plated' },
  { icon: Heart, text: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <div className="border-b border-[#E8E2D8] bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between py-4 md:py-5 overflow-x-auto gap-6 md:gap-0">
          {trustItems.map((item) => (
            <div
              key={item.text}
              className="flex items-center gap-2 text-xs md:text-sm text-[#6B6B6B] whitespace-nowrap"
            >
              <item.icon className="w-4 h-4 text-[#C8A45C]" />
              <span className="tracking-wide">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}