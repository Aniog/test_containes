import { Truck, ShieldCheck, Sparkles, Heart } from 'lucide-react';

const items = [
  { icon: Truck, text: 'Free Worldwide Shipping' },
  { icon: ShieldCheck, text: '30-Day Returns' },
  { icon: Sparkles, text: '18K Gold Plated' },
  { icon: Heart, text: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <div className="bg-velvet-900 border-b border-velvet-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-center md:justify-between py-3 gap-6 md:gap-0 overflow-x-auto">
          {items.map((item) => (
            <div key={item.text} className="flex items-center gap-2 text-velvet-400 whitespace-nowrap flex-shrink-0">
              <item.icon className="w-3.5 h-3.5 text-sand-500" />
              <span className="text-[11px] tracking-wide font-medium">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
