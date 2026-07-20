import { trustItems } from '@/data/products';

export default function TrustBar() {
  return (
    <div className="bg-primary text-primary-foreground py-4">
      <div className="section-padding">
        <div className="flex flex-wrap justify-center gap-6 lg:gap-12">
          {trustItems.map((item, i) => (
            <span key={i} className="text-xs tracking-wider uppercase flex items-center gap-2">
              <span className="w-1 h-1 bg-accent rounded-full" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
