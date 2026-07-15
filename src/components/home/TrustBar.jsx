import { Truck, RotateCcw, Shield, Sparkles } from 'lucide-react';

const TrustBar = () => {
  const items = [
    { icon: Truck, text: 'Free Worldwide Shipping' },
    { icon: RotateCcw, text: '30-Day Returns' },
    { icon: Sparkles, text: '18K Gold Plated' },
    { icon: Shield, text: 'Hypoallergenic' },
  ];

  return (
    <section className="border-y border-border bg-ivory">
      <div className="px-6 md:px-12 lg:px-20 py-4 flex flex-wrap items-center justify-center gap-6 md:gap-12">
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-2 text-muted">
            <item.icon className="w-4 h-4 text-accent" />
            <span className="text-xs md:text-sm font-medium tracking-wide">{item.text}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustBar;
