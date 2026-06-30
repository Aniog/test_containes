import { Truck, RotateCcw, Sparkles, Shield } from 'lucide-react';

const items = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Sparkles, label: '18K Gold Plated' },
  { icon: Shield, label: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <div className="bg-obsidian border-b border-mink/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center md:justify-between flex-wrap gap-4 py-3">
          {items.map(({ icon: Icon, label }, i) => (
            <div key={i} className="flex items-center gap-2">
              <Icon size={13} className="text-gold flex-shrink-0" />
              <span className="font-sans text-xs tracking-wider text-velvet-200 whitespace-nowrap">
                {label}
              </span>
              {i < items.length - 1 && (
                <span className="hidden md:block w-px h-3 bg-mink/60 ml-4" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
