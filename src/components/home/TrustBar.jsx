import { Truck, RotateCcw, Shield, Sparkles } from 'lucide-react';

const items = [
  { icon: Truck, text: 'Free Worldwide Shipping' },
  { icon: RotateCcw, text: '30-Day Returns' },
  { icon: Sparkles, text: '18K Gold Plated' },
  { icon: Shield, text: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <section className="bg-linen border-y border-taupe/20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
        <div className="flex items-center justify-center gap-6 md:gap-12 overflow-x-auto hide-scrollbar">
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-2 whitespace-nowrap">
              <item.icon className="w-4 h-4 text-gold flex-shrink-0" />
              <span className="text-xs md:text-sm text-charcoal/70 font-light">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
