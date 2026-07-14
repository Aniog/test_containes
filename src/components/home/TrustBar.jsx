import { Truck, RotateCcw, Sparkles, Shield } from 'lucide-react';

const items = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Sparkles, label: '18K Gold Plated' },
  { icon: Shield, label: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <div className="bg-velmora-obsidian border-b border-velmora-stone/30">
      <div className="section-container">
        <div className="flex flex-wrap items-center justify-center md:justify-between gap-4 py-3.5">
          {items.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2">
              <Icon size={13} strokeWidth={1.5} className="text-velmora-gold flex-shrink-0" />
              <span className="font-inter text-[11px] uppercase tracking-widest text-velmora-cream/80">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
