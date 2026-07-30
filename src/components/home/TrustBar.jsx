import { Shield, RotateCcw, Sparkles, Heart } from 'lucide-react';

const items = [
  { icon: Shield, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Sparkles, label: '18K Gold Plated' },
  { icon: Heart, label: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <div className="bg-cream border-b border-linen">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-wrap items-center justify-center md:justify-between gap-4 py-4">
          {items.map(({ icon: Icon, label }, i) => (
            <div key={label} className="flex items-center gap-2">
              <Icon className="w-3.5 h-3.5 text-gold flex-shrink-0" />
              <span className="font-sans text-xs text-stone tracking-widest uppercase whitespace-nowrap">
                {label}
              </span>
              {i < items.length - 1 && (
                <span className="hidden md:block w-px h-3 bg-linen ml-4" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
