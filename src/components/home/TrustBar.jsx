import { trustedBadges } from '@/data/products';
import { ShieldCheck, Truck, RefreshCw, Sparkles } from 'lucide-react';

const icons = [Truck, RefreshCw, Sparkles, ShieldCheck];

export default function TrustBar() {
  return (
    <div className="bg-[#1A1514] py-4 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="flex items-center justify-center md:justify-between gap-6 md:gap-10 flex-wrap">
          {trustedBadges.map((badge, i) => {
            const Icon = icons[i];
            return (
              <div key={badge} className="flex items-center gap-2 text-xs tracking-[0.08em] uppercase text-[#D4BC8B]">
                <Icon className="w-3.5 h-3.5 text-[#C8A96E]" />
                <span>{badge}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
