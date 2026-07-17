import { Truck, RotateCcw, Sparkles, Shield } from 'lucide-react';

const items = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Sparkles, label: '18K Gold Plated' },
  { icon: Shield, label: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <div className="bg-velmora-obsidian py-3.5">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-center flex-wrap gap-x-8 gap-y-2">
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <item.icon size={13} className="text-velmora-gold flex-shrink-0" />
              <span className="font-inter text-[10px] tracking-widest uppercase text-velmora-linen/80 whitespace-nowrap">
                {item.label}
              </span>
              {i < items.length - 1 && (
                <span className="hidden md:block w-px h-3 bg-velmora-stone ml-4" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
