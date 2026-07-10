import { Globe, RotateCcw, Sparkles, Heart } from 'lucide-react';

const items = [
  { icon: Globe, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Sparkles, label: '18K Gold Plated' },
  { icon: Heart, label: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <div className="bg-stone-100 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center flex-wrap gap-x-8 gap-y-3 py-3.5">
          {items.map((item, i) => (
            <div key={item.label} className="flex items-center gap-2">
              {i > 0 && <span className="hidden sm:block w-px h-3 bg-stone-300 -ml-4 mr-4" />}
              <item.icon size={13} strokeWidth={1.5} className="text-champagne flex-shrink-0" />
              <span className="font-manrope text-xs tracking-wide text-stone-600">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
