import { Truck, RotateCcw, Gem, Heart } from 'lucide-react';

export default function TrustBar() {
  const trustItems = [
    { icon: Truck, text: 'Free Worldwide Shipping' },
    { icon: RotateCcw, text: '30-Day Returns' },
    { icon: Gem, text: '18K Gold Plated' },
    { icon: Heart, text: 'Hypoallergenic' },
  ];

  return (
    <section className="py-6 bg-[var(--color-ivory)]">
      <div className="container-custom">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {trustItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-2"
            >
              <item.icon
                className="w-4 h-4"
                style={{ color: 'var(--color-gold)' }}
              />
              <span
                className="font-sans text-xs tracking-wide uppercase"
                style={{ color: 'var(--color-muted)' }}
              >
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}