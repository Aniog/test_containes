import { Truck, RotateCcw, Sparkles, Shield } from 'lucide-react';

const items = [
  { icon: Truck, text: 'Free Worldwide Shipping' },
  { icon: RotateCcw, text: '30-Day Returns' },
  { icon: Sparkles, text: '18K Gold Plated' },
  { icon: Shield, text: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <section className="bg-velmora-cream border-y border-velmora-light/60">
      <div className="max-w-[1400px] mx-auto px-5 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-0 py-4 md:py-5">
          {items.map((item, index) => (
            <div
              key={item.text}
              className={`flex items-center justify-center gap-2.5 py-2 ${
                index < items.length - 1 ? 'md:border-r md:border-velmora-light/60' : ''
              }`}
            >
              <item.icon size={16} className="text-velmora-gold flex-shrink-0" strokeWidth={1.5} />
              <span className="text-caption uppercase tracking-wider text-velmora-graphite font-medium whitespace-nowrap">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
