import { trustBarItems } from '@/lib/data';

export default function TrustBar() {
  return (
    <div className="bg-espresso text-cream/80">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-center flex-wrap gap-x-10 gap-y-2 py-4 text-xs tracking-widest uppercase">
          {trustBarItems.map((item, i) => (
            <span key={i} className="text-center">
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
