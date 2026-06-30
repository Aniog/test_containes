import { Package, RotateCcw, Sparkles, Shield } from 'lucide-react';

const items = [
  { icon: Package, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Sparkles, label: '18K Gold Plated' },
  { icon: Shield, label: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <div className="bg-obsidian border-b border-gold/20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-wrap items-center justify-center md:justify-between gap-4 py-3">
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <item.icon size={13} className="text-gold flex-shrink-0" />
              <span className="text-ivory/70 text-[11px] tracking-widest uppercase font-medium whitespace-nowrap">
                {item.label}
              </span>
              {i < items.length - 1 && (
                <span className="hidden md:block text-gold/30 ml-4">·</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
