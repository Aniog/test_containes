import { Shield, RotateCcw, Sparkles, CheckCircle } from 'lucide-react';

const trusts = [
  { icon: Sparkles, text: 'Free Worldwide Shipping' },
  { icon: RotateCcw, text: '30-Day Returns' },
  { icon: Shield, text: '18K Gold Plated' },
  { icon: CheckCircle, text: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <section className="border-b border-warm-200 bg-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-3 md:py-4">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
          {trusts.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.text} className="flex items-center gap-2">
                <Icon className="w-3.5 h-3.5 text-gold-500" />
                <span className="text-[11px] md:text-xs tracking-wide-lg uppercase font-sans text-ink/80">
                  {item.text}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}