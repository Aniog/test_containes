import { Truck, RotateCcw, Shield, Sparkles } from 'lucide-react';

const trustItems = [
  { icon: Truck, text: 'Free Worldwide Shipping' },
  { icon: RotateCcw, text: '30-Day Returns' },
  { icon: Sparkles, text: '18K Gold Plated' },
  { icon: Shield, text: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <section className="border-y border-border bg-muted-bg/50">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12 py-4">
        <div className="flex flex-wrap items-center justify-center md:justify-between gap-4 md:gap-6">
          {trustItems.map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <item.icon className="w-4 h-4 text-accent" />
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
