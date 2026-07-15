import { Globe, RotateCcw, Gem, Sparkles } from 'lucide-react';

const items = [
  { icon: Globe, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Gem, label: '18K Gold Plated' },
  { icon: Sparkles, label: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <div className="bg-white border-b border-velmora-muted">
      <div className="container-site py-3 md:py-4">
        <div className="flex items-center justify-center md:justify-center gap-6 md:gap-12 flex-wrap">
          {items.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2 text-velmora-base/60">
              <Icon className="w-3.5 h-3.5 text-velmora-accent flex-shrink-0" strokeWidth={1.5} />
              <span className="text-[11px] md:text-xs font-medium tracking-wide uppercase">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
