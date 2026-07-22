import { Truck, RotateCcw, Gem, Heart } from 'lucide-react';

const trustItems = [
  { icon: Truck, text: 'Free Worldwide Shipping' },
  { icon: RotateCcw, text: '30-Day Returns' },
  { icon: Gem, text: '18K Gold Plated' },
  { icon: Heart, text: 'Hypoallergenic' }
];

export default function TrustBar() {
  return (
    <section className="bg-velmora-sand py-5 border-b border-velmora-taupe/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {trustItems.map((item, index) => (
            <div 
              key={index} 
              className="flex items-center space-x-2 text-velmora-charcoal/70"
            >
              <item.icon size={16} strokeWidth={1.5} className="text-velmora-gold" />
              <span className="font-sans text-xs tracking-wide">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}