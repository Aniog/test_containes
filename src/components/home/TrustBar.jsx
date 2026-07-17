import { Truck, RotateCcw, Sparkles, Shield } from 'lucide-react';

const items = [
  { icon: Truck,     label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Sparkles,  label: '18K Gold Plated' },
  { icon: Shield,    label: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <div className="bg-obsidian border-b border-ivory/8">
      <div className="max-w-7xl mx-auto px-6 py-3 flex flex-wrap items-center justify-center gap-6 md:gap-12">
        {items.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-2">
            <Icon size={13} className="text-champagne flex-shrink-0" strokeWidth={1.5} />
            <span className="font-sans text-[11px] tracking-widest uppercase text-ivory/60">
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
