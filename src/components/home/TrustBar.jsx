import { Truck, RotateCcw, Sparkles, Shield } from 'lucide-react';

const items = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Sparkles, label: '18K Gold Plated' },
  { icon: Shield, label: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <div className="bg-obsidian border-b border-ivory/10">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-center flex-wrap gap-x-8 gap-y-3 py-3.5">
          {items.map((item, i) => (
            <div key={item.label} className="flex items-center gap-2">
              {i > 0 && (
                <span className="hidden sm:block w-px h-3 bg-ivory/20 mr-6" />
              )}
              <item.icon size={13} strokeWidth={1.5} className="text-gold flex-shrink-0" />
              <span className="font-sans text-[11px] font-semibold uppercase tracking-widest text-ivory/70">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
