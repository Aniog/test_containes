import { Truck, RotateCcw, Gem, Shield } from 'lucide-react';

const features = [
  { icon: Truck, text: 'Free Worldwide Shipping' },
  { icon: RotateCcw, text: '30-Day Returns' },
  { icon: Gem, text: '18K Gold Plated' },
  { icon: Shield, text: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <section className="bg-deep-base py-4 border-b border-white/5">
      <div className="container-wide">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 md:gap-x-12">
          {features.map((feature) => (
            <div
              key={feature.text}
              className="flex items-center gap-2"
            >
              <feature.icon size={14} className="text-gold-accent" strokeWidth={1.5} />
              <span className="font-sans text-[11px] uppercase tracking-wider text-cream/70">
                {feature.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
