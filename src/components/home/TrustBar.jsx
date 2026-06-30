import { Truck, RotateCcw, Award, Heart } from 'lucide-react';

const trustItems = [
  { icon: Truck, text: 'Free Worldwide Shipping' },
  { icon: RotateCcw, text: '30-Day Returns' },
  { icon: Award, text: '18K Gold Plated' },
  { icon: Heart, text: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <section className="bg-cream-100 border-y border-pearl">
      <div className="section-container py-4">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
          {trustItems.map((item, index) => (
            <div
              key={item.text}
              className="flex items-center gap-2 text-warm-600"
            >
              <item.icon size={18} strokeWidth={1.5} className="text-gold-500" />
              <span className="text-xs md:text-sm font-medium uppercase tracking-wide">
                {item.text}
              </span>
              {index < trustItems.length - 1 && (
                <span className="hidden md:block w-px h-4 bg-pearl ml-4" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
