import { Truck, RotateCcw, Gem, Heart } from 'lucide-react';

const trustItems = [
  { icon: Truck, text: 'Free Worldwide Shipping' },
  { icon: RotateCcw, text: '30-Day Returns' },
  { icon: Gem, text: '18K Gold Plated' },
  { icon: Heart, text: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <section className="bg-cream border-y border-sand">
      <div className="section-container">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 py-5">
          {trustItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-2 text-charcoal-light"
            >
              <item.icon className="w-4 h-4 text-gold" strokeWidth={1.5} />
              <span className="text-caption font-medium">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
