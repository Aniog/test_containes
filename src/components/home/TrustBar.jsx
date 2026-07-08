import { Truck, RotateCcw, Sparkles, Shield } from 'lucide-react';

const items = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Sparkles, label: '18K Gold Plated' },
  { icon: Shield, label: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <div className="bg-obsidian border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-center md:justify-between overflow-x-auto no-scrollbar py-3 gap-6 md:gap-0">
          {items.map((item, i) => (
            <div key={item.label} className="flex items-center gap-2 flex-shrink-0">
              {i > 0 && <span className="hidden md:block w-px h-3 bg-white/20 mr-6" />}
              <item.icon size={12} strokeWidth={1.5} className="text-gold flex-shrink-0" />
              <span className="font-manrope text-[10px] tracking-widest uppercase text-cream/60 whitespace-nowrap">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
