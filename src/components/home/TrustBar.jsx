import { Truck, RotateCcw, Shield, Heart } from 'lucide-react';

const trustItems = [
  { icon: Truck, text: 'Free Worldwide Shipping' },
  { icon: RotateCcw, text: '30-Day Returns' },
  { icon: Shield, text: '18K Gold Plated' },
  { icon: Heart, text: 'Hypoallergenic' },
];

export function TrustBar() {
  return (
    <div className="bg-secondary/50 border-y border-border/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-4">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 lg:gap-16">
          {trustItems.map((item, index) => (
            <div key={index} className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground">
              <item.icon className="h-4 w-4 text-primary" />
              <span className="tracking-wide">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
