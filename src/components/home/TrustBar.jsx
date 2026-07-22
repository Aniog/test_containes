import { Globe, RotateCcw, Sparkles, Heart } from 'lucide-react';

const trustItems = [
  { icon: Globe, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Sparkles, label: '18K Gold Plated' },
  { icon: Heart, label: 'Hypoallergenic' },
];

export function TrustBar() {
  return (
    <div className="bg-cream border-y border-divider">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-center md:justify-between flex-wrap gap-4 py-4">
          {trustItems.map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <item.icon className="w-3.5 h-3.5 text-gold flex-shrink-0" />
              <span className="font-sans text-xs tracking-widest uppercase text-muted-warm whitespace-nowrap">
                {item.label}
              </span>
              {i < trustItems.length - 1 && (
                <span className="hidden md:block w-px h-3 bg-divider ml-4" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
