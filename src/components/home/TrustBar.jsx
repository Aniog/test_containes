import { Truck, RotateCcw, Shield, Heart } from 'lucide-react';
import { trustItems } from '@/data/products';

const icons = [Shield, Truck, Heart, RotateCcw];

export default function TrustBar() {
  return (
    <div className="py-4" style={{ backgroundColor: 'var(--velmora-bg-alt)', borderBottom: '1px solid var(--velmora-border-light)' }}>
      <div className="velmora-container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
          {trustItems.map((item, i) => {
            const Icon = icons[i];
            return (
              <div key={item} className="flex items-center gap-2">
                <Icon className="w-4 h-4 flex-shrink-0" style={{ color: 'var(--velmora-accent)' }} />
                <span className="text-xs tracking-[0.08em] uppercase font-medium" style={{ color: 'var(--velmora-text-muted)' }}>
                  {item}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
