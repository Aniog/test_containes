import { Truck, RotateCcw, Gem, Heart } from 'lucide-react';

const trustItems = [
  { icon: Truck, text: 'Free Worldwide Shipping' },
  { icon: RotateCcw, text: '30-Day Returns' },
  { icon: Gem, text: '18K Gold Plated' },
  { icon: Heart, text: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <section className="bg-brand-bg-secondary border-y border-brand-border-subtle">
      <div className="container-main">
        <div className="flex flex-wrap items-center justify-center">
          {trustItems.map((item, index) => (
            <div
              key={item.text}
              className="flex items-center gap-3 px-6 py-4"
            >
              {index > 0 && (
                <div className="hidden md:block w-px h-8 bg-brand-border-subtle mr-2" />
              )}
              <item.icon className="w-4 h-4 text-brand-gold" />
              <span className="text-sm text-brand-text-secondary whitespace-nowrap">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
