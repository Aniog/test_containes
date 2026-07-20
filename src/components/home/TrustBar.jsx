import { Truck, RotateCcw, Sparkles, Shield } from 'lucide-react';

const items = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Sparkles, label: '18K Gold Plated' },
  { icon: Shield, label: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <div className="bg-champagne border-y border-linen">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-wrap items-center justify-center md:justify-between gap-4 py-4">
          {items.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2">
              <Icon size={14} strokeWidth={1.5} className="text-gold-dark flex-shrink-0" />
              <span className="font-sans text-xs tracking-widest uppercase text-ink/70">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
