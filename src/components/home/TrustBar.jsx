import { Truck, RotateCcw, Gem, Heart } from 'lucide-react';

const trustItems = [
  { icon: Truck, text: 'Free Worldwide Shipping' },
  { icon: RotateCcw, text: '30-Day Returns' },
  { icon: Gem, text: '18K Gold Plated' },
  { icon: Heart, text: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <section className="bg-ivory py-4 md:py-5 border-y border-sand">
      <div className="container-custom">
        <div className="flex items-center justify-center flex-wrap gap-6 md:gap-12">
          {trustItems.map((item, index) => (
            <div 
              key={item.text}
              className="flex items-center gap-2 text-xs md:text-sm text-charcoal/70"
            >
              <item.icon className="w-4 h-4 text-gold" strokeWidth={1.5} />
              <span className="tracking-wide whitespace-nowrap">{item.text}</span>
              {index < trustItems.length - 1 && (
                <span className="hidden md:inline text-sand">·</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
