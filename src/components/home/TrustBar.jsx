import { Truck, RotateCcw, Sparkles, Heart } from 'lucide-react';

const items = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Sparkles, label: '18K Gold Plated' },
  { icon: Heart, label: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <div className="bg-obsidian-light border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-center md:justify-between flex-wrap gap-0">
          {items.map((item, i) => (
            <div
              key={item.label}
              className={`flex items-center gap-2.5 py-3.5 px-4 md:px-6 ${
                i < items.length - 1 ? 'border-r border-white/10' : ''
              } flex-1 justify-center`}
            >
              <item.icon size={14} className="text-gold flex-shrink-0" />
              <span className="font-sans text-[11px] uppercase tracking-widest text-taupe-light whitespace-nowrap">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
