import { Truck, RotateCcw, Gem, Heart } from 'lucide-react';

export default function TrustBar() {
  const trustItems = [
    { icon: Truck, text: 'Free Worldwide Shipping' },
    { icon: RotateCcw, text: '30-Day Returns' },
    { icon: Gem, text: '18K Gold Plated' },
    { icon: Heart, text: 'Hypoallergenic' }
  ];

  return (
    <div className="bg-velmora-soft border-y border-velmora-border">
      <div className="max-w-content mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between py-4 overflow-x-auto">
          {trustItems.map((item, index) => (
            <div 
              key={item.text} 
              className="flex items-center gap-2 px-4 whitespace-nowrap"
            >
              <item.icon className="w-4 h-4 text-velmora-gold flex-shrink-0" />
              <span className="text-xs md:text-sm text-velmora-muted uppercase tracking-wider">
                {item.text}
              </span>
              {index < trustItems.length - 1 && (
                <span className="hidden md:inline text-velmora-border">·</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}