import { Truck, RotateCcw, Gem, Heart } from 'lucide-react';

export default function TrustBar() {
  const trustItems = [
    { icon: Truck, text: 'Free Worldwide Shipping' },
    { icon: RotateCcw, text: '30-Day Returns' },
    { icon: Gem, text: '18K Gold Plated' },
    { icon: Heart, text: 'Hypoallergenic' },
  ];

  return (
    <section className="bg-[var(--color-ivory)] py-4 border-y border-[var(--color-sand)]">
      <div className="container">
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-4 md:gap-0">
          {trustItems.map((item, index) => (
            <div
              key={item.text}
              className="flex items-center gap-2 px-4"
            >
              <item.icon className="w-4 h-4 text-[var(--color-gold)]" />
              <span className="text-xs tracking-[0.1em] uppercase text-[var(--color-warm-gray)]">
                {item.text}
              </span>
              {index < trustItems.length - 1 && (
                <span className="hidden md:block absolute right-0 text-[var(--color-sand)]">
                  |
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
