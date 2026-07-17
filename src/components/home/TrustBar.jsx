import { trustItems } from '@/data/products';
import { Check } from 'lucide-react';

export default function TrustBar() {
  return (
    <div className="bg-espresso border-y border-cream-200/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-2 py-4">
          {trustItems.map((item) => (
            <div key={item} className="flex items-center gap-2 text-cream-200 text-xs">
              <Check className="w-3 h-3 text-gold flex-shrink-0" />
              <span className="uppercase tracking-widest">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
