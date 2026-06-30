import { Truck, RefreshCw, Shield, Heart } from 'lucide-react';

const items = [
  { icon: Truck, text: 'Free Worldwide Shipping' },
  { icon: RefreshCw, text: '30-Day Returns' },
  { icon: Shield, text: '18K Gold Plated' },
  { icon: Heart, text: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <div className="bg-surface border-b border-hairline">
      <div className="container-main">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 py-4 md:py-5">
          {items.map(({ icon: Icon, text }) => (
            <div
              key={text}
              className="flex items-center gap-2 text-text-secondary"
            >
              <Icon className="w-4 h-4 text-gold" />
              <span className="font-sans text-xs uppercase tracking-widest font-medium">
                {text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
