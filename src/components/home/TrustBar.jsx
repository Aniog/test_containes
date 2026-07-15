import { trustItems } from '@/data/products';

export default function TrustBar() {
  return (
    <div className="bg-charcoal text-cream/80 py-4">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap justify-center gap-6 md:gap-12">
          {trustItems.map((item, i) => (
            <span key={i} className="text-xs tracking-wider flex items-center gap-2">
              <span className="w-1 h-1 bg-gold rounded-full" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
