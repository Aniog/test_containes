import { Truck, RotateCcw, ShieldCheck, Leaf } from 'lucide-react';
import FadeIn from '@/components/FadeIn';

const items = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: ShieldCheck, label: '18K Gold Plated' },
  { icon: Leaf, label: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <FadeIn>
      <div className="border-b border-ink-100 bg-paper">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 py-4 md:py-5">
            {items.map((item) => (
              <div key={item.label} className="flex items-center gap-2 text-ink-600">
                <item.icon className="w-4 h-4 text-brand-700" />
                <span className="text-[11px] md:text-xs font-medium tracking-wide">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </FadeIn>
  );
}
