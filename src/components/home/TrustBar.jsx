import { Truck, RotateCcw, Sparkles, Shield } from 'lucide-react';

const trustItems = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Sparkles, label: '18K Gold Plated' },
  { icon: Shield, label: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <div className="bg-velmora-cream border-b border-velmora-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center flex-wrap gap-x-8 gap-y-3 py-3.5">
          {trustItems.map((item, i) => (
            <div key={item.label} className="flex items-center gap-2">
              {i > 0 && (
                <span className="hidden sm:block w-px h-3 bg-velmora-border mx-2" />
              )}
              <item.icon className="w-3.5 h-3.5 text-velmora-gold flex-shrink-0" />
              <span className="font-manrope text-[11px] tracking-widest uppercase text-velmora-text-muted whitespace-nowrap">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
