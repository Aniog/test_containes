import { Truck, RotateCcw, Sparkles, Shield } from 'lucide-react';

const items = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Sparkles, label: '18K Gold Plated' },
  { icon: Shield, label: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <div className="trust-bar py-3">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-center md:justify-between flex-wrap gap-4 md:gap-0">
          {items.map((item, i) => (
            <div key={item.label} className="flex items-center gap-2">
              {i > 0 && (
                <span className="hidden md:block w-px h-3 bg-gold/30 mx-4" />
              )}
              <item.icon size={13} strokeWidth={1.5} className="text-gold" />
              <span
                className="text-xs tracking-widest uppercase font-medium text-gold-light"
                style={{ fontFamily: 'Manrope, sans-serif', letterSpacing: '0.12em' }}
              >
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
