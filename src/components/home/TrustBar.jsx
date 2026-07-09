import { Truck, RotateCcw, Shield, Sparkles } from 'lucide-react';

const trustItems = [
  { icon: Truck, text: 'Free Worldwide Shipping' },
  { icon: RotateCcw, text: '30-Day Returns' },
  { icon: Sparkles, text: '18K Gold Plated' },
  { icon: Shield, text: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <section className="bg-ivory border-y border-border">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12 py-4">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
          {trustItems.map(item => (
            <div key={item.text} className="flex items-center gap-2">
              <item.icon size={16} className="text-gold" />
              <span className="text-xs md:text-sm text-muted font-medium tracking-wide">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
