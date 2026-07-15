import { Truck, RotateCcw, Sparkles, Heart } from 'lucide-react';

const items = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Sparkles, label: '18K Gold Plated' },
  { icon: Heart, label: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <div className="bg-velvet py-3 md:py-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-center flex-wrap gap-x-8 gap-y-2 md:gap-x-12">
          {items.map((item, i) => (
            <div key={item.label} className="flex items-center gap-2">
              {i > 0 && (
                <span className="hidden md:block w-px h-3 bg-mink mx-2" />
              )}
              <item.icon size={13} strokeWidth={1.5} className="text-champagne flex-shrink-0" />
              <span className="font-sans text-[11px] tracking-widest uppercase text-ivory/70">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
