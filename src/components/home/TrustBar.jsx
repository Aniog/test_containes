import { Truck, RotateCcw, Shield, Sparkles } from 'lucide-react';

const items = [
  { icon: Truck, text: 'Free Worldwide Shipping' },
  { icon: RotateCcw, text: '30-Day Returns' },
  { icon: Shield, text: '18K Gold Plated' },
  { icon: Sparkles, text: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <div className="bg-velmora-base text-velmora-cream/70">
      <div className="section-padding py-3 md:py-4">
        <div className="flex items-center justify-center flex-wrap gap-x-8 gap-y-2">
          {items.map((item) => (
            <div key={item.text} className="flex items-center gap-2">
              <item.icon className="w-3.5 h-3.5 text-velmora-gold" />
              <span className="text-[11px] md:text-xs tracking-wider uppercase font-sans font-medium">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}