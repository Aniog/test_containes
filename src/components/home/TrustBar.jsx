import { Shield, RotateCcw, Award, Heart } from 'lucide-react';

const trusts = [
  { icon: Award, label: '18K Gold Plated' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Shield, label: 'Free Shipping' },
  { icon: Heart, label: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <div className="bg-dark-forest text-warm-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-6 md:gap-12 py-3 overflow-x-auto scrollbar-hide">
          {trusts.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2 text-xs md:text-sm whitespace-nowrap">
              <Icon size={14} className="text-muted-gold flex-shrink-0" />
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}