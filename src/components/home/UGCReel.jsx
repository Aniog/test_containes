import { ugcItems } from '@/data/products';

export default function UGCReel() {
  return (
    <section className="py-16 md:py-24 bg-base">
      <div className="max-w-container mx-auto px-6 md:px-12 mb-8">
        <h2 className="font-serif text-3xl md:text-4xl text-white font-normal">
          As Worn By You
        </h2>
      </div>
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-4 px-6 md:px-12 pb-2" style={{ minWidth: 'max-content' }}>
          {ugcItems.map((item) => (
            <div
              key={item.id}
              className="relative w-[220px] md:w-[260px] aspect-[9/16] flex-shrink-0 overflow-hidden group cursor-pointer"
            >
              <img
                data-strk-img-id={`ugc-${item.id}`}
                data-strk-img={`[ugc-caption-${item.id}]`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="500"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={item.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <p
                id={`ugc-caption-${item.id}`}
                className="absolute bottom-4 left-4 right-4 font-serif text-white text-base md:text-lg italic leading-snug"
              >
                {item.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
