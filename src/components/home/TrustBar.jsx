import { Truck, RotateCcw, Sparkles, Heart } from 'lucide-react';

const trustItems = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Sparkles, label: '18K Gold Plated' },
  { icon: Heart, label: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <section className="bg-surface border-y border-white/5">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-0">
          {trustItems.map((item) => (
            <div
              key={item.label}
              className="flex items-center justify-center gap-3 py-5 md:py-4"
            >
              <item.icon className="w-4 h-4 text-gold flex-shrink-0" />
              <span className="text-[11px] uppercase tracking-widest text-muted font-sans">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
