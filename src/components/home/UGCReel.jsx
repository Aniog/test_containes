import { ugcItems } from '../../data/products';

export default function UGCReel() {
  return (
    <section className="py-16 md:py-24 bg-surface overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-10">
        <h2 className="font-serif text-3xl md:text-4xl text-fg text-center">
          Styled by You
        </h2>
        <p className="text-sm text-muted-fg text-center mt-2 tracking-wide">
          Tag @velmora to be featured
        </p>
      </div>

      <div className="flex gap-4 overflow-x-auto px-4 md:px-8 pb-4 snap-x snap-mandatory scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {ugcItems.map((item, i) => (
          <div
            key={item.id}
            className="flex-shrink-0 w-[180px] md:w-[220px] aspect-[9/16] relative snap-start overflow-hidden group cursor-pointer"
          >
            <img
              data-strk-img-id={`ugc-${item.id}`}
              data-strk-img="[ugc-caption] gold jewelry worn on ear neck model"
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={item.caption}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <p className="absolute bottom-4 left-4 right-4 font-serif text-base text-white italic">
              {item.caption}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
