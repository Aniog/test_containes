import { Truck, RotateCcw, Gem, Heart } from 'lucide-react';

export default function TrustBar() {
  const trustItems = [
    { icon: Truck, text: 'Free Worldwide Shipping' },
    { icon: RotateCcw, text: '30-Day Returns' },
    { icon: Gem, text: '18K Gold Plated' },
    { icon: Heart, text: 'Hypoallergenic' }
  ];

  return (
    <section className="bg-velmora-sand/50 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {trustItems.map((item, index) => (
            <div 
              key={index}
              className="flex items-center gap-2 text-velmora-charcoal/70"
            >
              <item.icon size={18} strokeWidth={1.5} className="text-velmora-gold" />
              <span className="text-xs uppercase tracking-widest">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}