import { Globe, RotateCcw, Sparkles, Heart } from 'lucide-react';

const items = [
  { icon: Globe, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Sparkles, label: '18K Gold Plated' },
  { icon: Heart, label: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <div className="border-y" style={{ backgroundColor: '#2C2825', borderColor: 'rgba(74,69,64,0.3)' }}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center md:justify-between gap-4 py-4">
          {items.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2">
              <Icon className="w-3.5 h-3.5 flex-shrink-0" style={{ color: '#C9A96E' }} />
              <span className="font-sans text-xs font-semibold uppercase tracking-widest whitespace-nowrap" style={{ color: '#C8C0B5' }}>
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
