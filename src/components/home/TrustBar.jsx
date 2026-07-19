import { Truck, RotateCcw, Shield, Heart } from 'lucide-react';

const trustItems = [
  { icon: Truck, text: 'Free Worldwide Shipping' },
  { icon: RotateCcw, text: '30-Day Returns' },
  { icon: Shield, text: '18K Gold Plated' },
  { icon: Heart, text: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <div className="bg-foreground text-background py-4">
      <div className="container-padding">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
          {trustItems.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <item.icon className="w-4 h-4 text-primary" />
              <span className="text-xs tracking-wider uppercase">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
