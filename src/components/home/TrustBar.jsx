import { Truck, RotateCcw, Award, Heart } from 'lucide-react';

const TrustBar = () => {
  const trustItems = [
    { icon: Truck, text: 'Free Worldwide Shipping' },
    { icon: RotateCcw, text: '30-Day Returns' },
    { icon: Award, text: '18K Gold Plated' },
    { icon: Heart, text: 'Hypoallergenic' }
  ];

  return (
    <div className="bg-velmora-sand/50 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {trustItems.map((item, index) => (
            <div key={index} className="flex items-center gap-2 text-velmora-charcoal/70">
              <item.icon className="w-4 h-4 text-velmora-gold" />
              <span className="text-xs uppercase tracking-widest">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBar;