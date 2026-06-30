import { Truck, RotateCcw, Shield, Droplets } from 'lucide-react';

const features = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Shield, label: '18K Gold Plated' },
  { icon: Droplets, label: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <div className="bg-cream-100 border-y border-cream-300/50">
      <div className="max-w-[1440px] mx-auto section-padding py-4">
        <div className="flex items-center justify-center gap-6 md:gap-12 lg:gap-16 overflow-x-auto scrollbar-hide">
          {features.map((feature) => (
            <div
              key={feature.label}
              className="flex items-center gap-2 flex-shrink-0"
            >
              <feature.icon size={16} strokeWidth={1.5} className="text-brand" />
              <span className="text-[11px] md:text-xs font-medium tracking-wider text-charcoal-600 uppercase whitespace-nowrap">
                {feature.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
