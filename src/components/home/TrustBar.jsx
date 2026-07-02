import { Truck, RotateCcw, Sparkles, Shield } from 'lucide-react';

const items = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Sparkles, label: '18K Gold Plated' },
  { icon: Shield, label: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <div className="bg-obsidian border-b border-ivory/10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-center md:justify-between flex-wrap gap-4 py-3.5">
          {items.map(({ icon: Icon, label }, i) => (
            <div key={label} className="flex items-center gap-2">
              {i > 0 && <span className="hidden md:block w-px h-3 bg-ivory/20 mr-2" />}
              <Icon size={13} className="text-gold flex-shrink-0" />
              <span className="font-manrope text-[11px] tracking-widest uppercase text-ivory/70">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
