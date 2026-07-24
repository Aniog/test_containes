import { ugcContent } from '../../data/products';

export default function UGCSection() {
  return (
    <section className="py-16 bg-[#F5F1EB] overflow-hidden">
      <div className="container mb-8">
        <h2 className="font-serif text-2xl md:text-3xl text-[#2C2824] text-center">
          Worn by You
        </h2>
      </div>

      {/* Reel-style horizontal scroll */}
      <div className="flex gap-4 px-4 md:px-8 overflow-x-auto hide-scrollbar pb-4">
        {/* Duplicate for infinite scroll effect */}
        {[...ugcContent, ...ugcContent].map((item, index) => (
          <div
            key={`${item.id}-${index}`}
            className="flex-shrink-0 w-40 md:w-48 relative group"
          >
            <div className="aspect-[9/16] overflow-hidden bg-[#E8E2D9]">
              <img
                src={item.image}
                alt={item.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A1714]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <p className="absolute bottom-4 left-4 right-4 font-serif text-sm text-[#FAF8F5] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {item.caption}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}