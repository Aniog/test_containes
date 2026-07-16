import { trustBarItems } from '@/data/products';

export default function TrustBar() {
  return (
    <div className="bg-noir py-4 overflow-hidden">
      <div className="flex items-center justify-center gap-6 md:gap-12 flex-wrap px-6">
        {trustBarItems.map((item) => (
          <span key={item} className="text-xs text-warmgray-400 tracking-wider uppercase whitespace-nowrap">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}