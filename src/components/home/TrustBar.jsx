import { Truck, RotateCcw, Sparkles, Shield } from 'lucide-react';

const items = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Sparkles, label: '18K Gold Plated' },
  { icon: Shield, label: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <div className="bg-obsidian border-b border-cream/10">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex items-center justify-center md:justify-between flex-wrap gap-4 py-3.5">
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <item.icon size={13} strokeWidth={1.5} className="text-gold flex-shrink-0" />
              <span className="font-sans text-[11px] font-medium tracking-widest uppercase text-cream/70">
                {item.label}
              </span>
              {i < items.length - 1 && (
                <span className="hidden md:block w-px h-3 bg-cream/20 ml-4" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
