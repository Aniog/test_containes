import { Truck, RotateCcw, Sparkles, ShieldCheck } from 'lucide-react';

const items = [
  { icon: Truck, text: 'Free Worldwide Shipping' },
  { icon: RotateCcw, text: '30-Day Returns' },
  { icon: Sparkles, text: '18K Gold Plated' },
  { icon: ShieldCheck, text: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <div className="bg-surface border-b border-border">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex items-center justify-center gap-6 md:gap-12 py-3 overflow-x-auto">
          {items.map((item) => (
            <div key={item.text} className="flex items-center gap-2 text-xs text-muted tracking-wider whitespace-nowrap">
              <item.icon className="w-3.5 h-3.5 text-gold flex-shrink-0" />
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}