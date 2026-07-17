import { Truck, RotateCcw, Award, Heart } from 'lucide-react';

const trustItems = [
  { icon: Truck, text: 'Free Worldwide Shipping' },
  { icon: RotateCcw, text: '30-Day Returns' },
  { icon: Award, text: '18K Gold Plated' },
  { icon: Heart, text: 'Hypoallergenic' }
];

export default function TrustBar() {
  return (
    <section className="bg-velmora-sand/30 py-4 border-y border-velmora-sand/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {trustItems.map((item, index) => (
            <div 
              key={item.text} 
              className="flex items-center gap-2 text-velmora-charcoal/70"
            >
              <item.icon size={18} strokeWidth={1.5} className="text-velmora-gold" />
              <span className="text-xs tracking-wider uppercase">{item.text}</span>
              {index < trustItems.length - 1 && (
                <span className="hidden md:inline text-velmora-sand">|</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}