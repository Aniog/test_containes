import { Truck, RotateCcw, Gem, Heart } from 'lucide-react';

const trustItems = [
  { icon: Truck, text: 'Free Worldwide Shipping' },
  { icon: RotateCcw, text: '30-Day Returns' },
  { icon: Gem, text: '18K Gold Plated' },
  { icon: Heart, text: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <div className="bg-[#2D2926] py-4">
      <div className="container">
        <div className="flex items-center justify-center flex-wrap gap-6 md:gap-12">
          {trustItems.map((item, index) => (
            <div 
              key={item.text}
              className="flex items-center gap-2 text-white/80"
            >
              <item.icon className="w-4 h-4" style={{ color: '#C9A962' }} />
              <span className="text-xs uppercase tracking-wider font-medium">
                {item.text}
              </span>
              {index < trustItems.length - 1 && (
                <span className="hidden md:block w-px h-4 bg-white/20 ml-4" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
