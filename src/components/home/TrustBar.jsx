import { Globe, RotateCcw, Shield, Droplets } from 'lucide-react';

export default function TrustBar() {
  const items = [
    { icon: Globe, label: 'Free Worldwide Shipping' },
    { icon: RotateCcw, label: '30-Day Returns' },
    { icon: Shield, label: '18K Gold Plated' },
    { icon: Droplets, label: 'Hypoallergenic' },
  ];

  return (
    <div className="border-y border-obsidian-800/30 bg-obsidian-950/80 backdrop-blur-sm">
      <div className="max-w-[1400px] mx-auto px-5 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4 md:py-5">
          {items.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center justify-center gap-2.5">
              <Icon className="w-4 h-4 text-gold-500 flex-shrink-0" />
              <span className="text-[11px] md:text-xs text-obsidian-300 tracking-wider uppercase whitespace-nowrap">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
