import { Truck, RotateCcw, Gem, Heart } from 'lucide-react';

export default function TrustBar() {
  const trustItems = [
    { icon: Truck, text: 'Free Worldwide Shipping' },
    { icon: RotateCcw, text: '30-Day Returns' },
    { icon: Gem, text: '18K Gold Plated' },
    { icon: Heart, text: 'Hypoallergenic' }
  ];

  return (
    <div className="bg-[var(--color-secondary-dark)] py-4 border-b border-[var(--color-border)]">
      <div className="container-main">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
          {trustItems.map((item, index) => (
            <div 
              key={index}
              className="flex items-center gap-2 text-sm text-[var(--color-muted)]"
            >
              <item.icon className="w-4 h-4 text-[var(--color-accent)]" />
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}