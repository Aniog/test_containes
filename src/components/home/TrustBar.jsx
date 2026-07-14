import { Truck, RefreshCw, Gem, Shield } from 'lucide-react';
import { cn } from '@/lib/utils';

const iconMap = {
  truck: Truck,
  refresh: RefreshCw,
  gem: Gem,
  shield: Shield,
};

function TrustBar({ badges }) {
  return (
    <section className="bg-secondary py-4 border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {badges.map((badge, index) => {
            const Icon = iconMap[badge.icon] || Gem;
            return (
              <div
                key={index}
                className="flex items-center justify-center gap-3 py-2"
              >
                <Icon className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-sm font-medium text-text-primary">
                  {badge.text}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default TrustBar;
