import { Truck, RotateCcw, Shield, Sparkles } from 'lucide-react';

const TrustBar = () => {
  const items = [
    { icon: Truck, text: 'Free Worldwide Shipping' },
    { icon: RotateCcw, text: '30-Day Returns' },
    { icon: Sparkles, text: '18K Gold Plated' },
    { icon: Shield, text: 'Hypoallergenic' },
  ];

  return (
    <section className="border-b border-sand bg-cream/50">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex flex-wrap items-center justify-center gap-6 md:gap-12">
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-2">
            <item.icon className="w-4 h-4 text-gold" />
            <span className="text-xs font-medium text-stone uppercase tracking-wider">{item.text}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustBar;
