import { Truck, RotateCcw, Sparkles, Shield } from 'lucide-react';

const trustItems = [
  { icon: Truck, text: 'Free Worldwide Shipping' },
  { icon: RotateCcw, text: '30-Day Returns' },
  { icon: Sparkles, text: '18K Gold Plated' },
  { icon: Shield, text: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <div className="bg-charcoal-900 text-cream-100/70">
      <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-16">
        <div className="flex items-center justify-center md:justify-between gap-6 md:gap-0 py-3.5 overflow-x-auto">
          {trustItems.map((item) => (
            <div key={item.text} className="flex items-center gap-2 flex-shrink-0">
              <item.icon className="w-3.5 h-3.5 text-velvet-400" />
              <span className="text-[11px] md:text-xs tracking-wider uppercase font-medium whitespace-nowrap">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}