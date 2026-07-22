import { Truck, RotateCcw, Shield, Heart } from 'lucide-react';

const trustItems = [
  { icon: Truck, text: 'Free Worldwide Shipping' },
  { icon: RotateCcw, text: '30-Day Returns' },
  { icon: Shield, text: '18K Gold Plated' },
  { icon: Heart, text: 'Hypoallergenic' },
];

const TrustBar = () => {
  return (
    <div className="bg-ivory border-y border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex flex-wrap items-center justify-center gap-6 md:gap-12">
        {trustItems.map(item => (
          <div key={item.text} className="flex items-center gap-2">
            <item.icon className="w-4 h-4 text-gold" />
            <span className="text-xs md:text-sm text-muted font-sans tracking-wide">{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustBar;
