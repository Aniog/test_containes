import { Truck, RotateCcw, Shield, Sparkles } from 'lucide-react';

const trustItems = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Shield, label: '18K Gold Plated' },
  { icon: Sparkles, label: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <div className="border-t border-b border-[#2A2A2A] bg-[#0F0F0F]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[#2A2A2A]">
          {trustItems.map((item) => (
            <div key={item.label} className="flex items-center justify-center gap-2.5 py-4 px-2">
              <item.icon className="w-3.5 h-3.5 text-[#C9A96E] flex-shrink-0" />
              <span className="text-[10px] md:text-xs tracking-wider uppercase text-[#A0988E] whitespace-nowrap">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}