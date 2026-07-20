import { Globe, RotateCcw, Sparkles, Heart } from 'lucide-react';

const trustItems = [
  { icon: Globe, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Sparkles, label: '18K Gold Plated' },
  { icon: Heart, label: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <div className="bg-velmora-obsidian py-4">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
          {trustItems.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2">
              <Icon className="w-3.5 h-3.5 text-velmora-gold flex-shrink-0" strokeWidth={1.5} />
              <span className="font-inter text-xs font-medium uppercase tracking-widest text-velmora-white/80 whitespace-nowrap">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
