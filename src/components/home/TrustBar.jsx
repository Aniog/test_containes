import { Truck, RotateCcw, Sparkles, ShieldCheck } from 'lucide-react';

const items = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Sparkles, label: '18K Gold Plated' },
  { icon: ShieldCheck, label: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <div className="bg-surface border-b border-hairline">
      <div className="max-w-container mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between md:justify-center gap-4 md:gap-12 py-4 overflow-x-auto">
          {items.map((item) => (
            <div key={item.label} className="flex items-center gap-2 whitespace-nowrap">
              <item.icon size={16} className="text-accent flex-shrink-0" />
              <span className="font-sans text-[11px] md:text-xs uppercase tracking-label text-text-secondary">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
