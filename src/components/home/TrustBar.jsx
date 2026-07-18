import { trustBarItems } from '@/data/products';

export default function TrustBar() {
  return (
    <div className="bg-velvet-900 text-velvet-300">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 py-3.5 flex flex-wrap items-center justify-center gap-x-10 gap-y-2">
        {trustBarItems.map((item, i) => (
          <span key={i} className="text-[11px] md:text-xs tracking-widest uppercase font-light">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}