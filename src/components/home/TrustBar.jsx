import { Truck, RotateCcw, ShieldCheck, Heart } from 'lucide-react';

export function TrustBar() {
  const benefits = [
    { icon: Truck, text: "Free Worldwide Shipping" },
    { icon: RotateCcw, text: "30-Day Returns" },
    { icon: ShieldCheck, text: "18K Gold Plated" },
    { icon: Heart, text: "Hypoallergenic" },
  ];

  return (
    <div className="bg-background border-b border-border py-4 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center sm:justify-between items-center gap-y-4 gap-x-8 text-xs md:text-sm font-light tracking-wide text-foreground/80 uppercase">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center space-x-2">
              <benefit.icon className="h-4 w-4 stroke-[1.5] text-primary" />
              <span>{benefit.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}