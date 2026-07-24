import { trustBadges } from '@/data/products';

export default function TrustBar() {
  return (
    <div className="bg-velvet-950 border-b border-velvet-800">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-3.5 overflow-hidden">
        <div className="flex items-center justify-center lg:justify-between gap-6 lg:gap-0 whitespace-nowrap">
          {trustBadges.map((badge, i) => (
            <div key={i} className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-gold-500 flex-shrink-0" />
              <span className="text-[11px] tracking-wider uppercase text-velvet-300 font-medium">
                {badge}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
