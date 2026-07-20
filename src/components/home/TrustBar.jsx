import { Package, RotateCcw, Sparkles, Shield } from 'lucide-react';

const trustItems = [
  { icon: Package, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Sparkles, label: '18K Gold Plated' },
  { icon: Shield, label: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <div className="bg-obsidian border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-center md:justify-between flex-wrap gap-4 py-3.5">
          {trustItems.map((item, i) => (
            <div key={item.label} className="flex items-center gap-2.5">
              <item.icon className="w-3.5 h-3.5 text-gold flex-shrink-0" />
              <span className="font-manrope text-xs uppercase tracking-widest text-cream/70 whitespace-nowrap">
                {item.label}
              </span>
              {i < trustItems.length - 1 && (
                <span className="hidden md:block w-px h-3 bg-white/20 ml-4" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
