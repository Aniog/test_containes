import { Truck, RotateCcw, Gem, Heart } from 'lucide-react';

const trustItems = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Gem, label: '18K Gold Plated' },
  { icon: Heart, label: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <div className="bg-cream py-4">
      <div className="container-narrow">
        <div className="flex items-center justify-center flex-wrap gap-6 md:gap-12">
          {trustItems.map((item, index) => (
            <div key={item.label} className="flex items-center gap-2">
              {index > 0 && (
                <div className="hidden md:block w-px h-4 bg-lightGray mr-2" />
              )}
              <item.icon className="w-4 h-4 text-gold" />
              <span className="text-sm text-warmGray">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
