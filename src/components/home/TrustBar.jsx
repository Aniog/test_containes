import { Shield, RotateCcw, Gem, Sparkles } from 'lucide-react';

const trustItems = [
  { icon: Gem, label: '18K Gold Plated' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Shield, label: 'Free Worldwide Shipping' },
  { icon: Sparkles, label: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <section className="border-b border-ink-100 bg-cream-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between py-3 sm:py-4 overflow-x-auto scrollbar-hide gap-6">
          {trustItems.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.label} className="flex items-center gap-2 flex-shrink-0">
                <Icon className="w-3.5 h-3.5 text-gold-500" />
                <span className="text-[11px] sm:text-xs text-ink-600 font-medium whitespace-nowrap tracking-wide">
                  {item.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}