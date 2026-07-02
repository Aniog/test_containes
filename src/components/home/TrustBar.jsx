import { Truck, RotateCcw, Shield, Sparkles } from 'lucide-react';

const items = [
  { icon: Truck, text: 'Free Worldwide Shipping' },
  { icon: RotateCcw, text: '30-Day Returns' },
  { icon: Sparkles, text: '18K Gold Plated' },
  { icon: Shield, text: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <section className="border-b border-border bg-muted">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
        <div className="flex items-center justify-center md:justify-between gap-6 md:gap-4 overflow-x-auto">
          {items.map((item) => (
            <div key={item.text} className="flex items-center gap-2 flex-shrink-0">
              <item.icon className="w-4 h-4 text-gold" />
              <span className="text-xs tracking-[0.05em] text-muted-fg whitespace-nowrap">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
