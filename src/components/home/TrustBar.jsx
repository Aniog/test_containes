import { trustItems } from '@/data/products';

export default function TrustBar() {
  return (
    <div className="bg-[#1a1a1a] py-3 md:py-4">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 lg:gap-12">
          {trustItems.map((item, index) => (
            <span
              key={item}
              className="text-xs tracking-wider text-[#faf8f5]/80 flex items-center gap-2"
            >
              {index > 0 && (
                <span className="w-1 h-1 rounded-full bg-[#c9a96e] hidden md:inline-block" />
              )}
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
