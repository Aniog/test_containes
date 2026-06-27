import { trustBadges } from '@/data/products';
import { Check } from 'lucide-react';

export default function TrustBar() {
  return (
    <div className="bg-velmora-gold-light border-b border-velmora-divider">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-center md:justify-between gap-4 md:gap-10 py-3 overflow-x-auto whitespace-nowrap text-xs md:text-sm text-velmora-text-secondary">
          {trustBadges.map((badge) => (
            <span key={badge} className="flex items-center gap-1.5 flex-shrink-0">
              <Check className="w-3.5 h-3.5 text-velmora-gold" />
              {badge}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
