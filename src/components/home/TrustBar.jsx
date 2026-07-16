import { Globe, RotateCcw, Sparkles, Shield } from 'lucide-react';

const items = [
  { icon: Globe, text: 'Free Worldwide Shipping' },
  { icon: RotateCcw, text: '30-Day Returns' },
  { icon: Sparkles, text: '18K Gold Plated' },
  { icon: Shield, text: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <div className="bg-charcoal text-cream/70">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-center md:justify-between py-4 gap-4 md:gap-0 flex-wrap">
          {items.map((item) => (
            <div key={item.text} className="flex items-center gap-2 text-xs uppercase tracking-[0.15em]">
              <item.icon className="w-3.5 h-3.5 text-gold" />
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
