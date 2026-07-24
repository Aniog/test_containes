import { ugcItems } from '@/data/products';

export default function UgcReel() {
  return (
    <section className="py-16 md:py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="font-serif text-3xl md:text-4xl font-light">
            Styled by You
          </h2>
          <p className="mt-3 text-stone-500">
            Tag @velmora to be featured
          </p>
        </div>

        {/* Horizontal Scroll */}
        <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-4 -mx-4 px-4">
          {ugcItems.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0 relative group cursor-pointer"
            >
              {/* Vertical Card (9:16) */}
              <div className="relative w-48 h-80 md:w-56 md:h-96 overflow-hidden bg-stone-200">
                <img
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={item.caption}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  data-strk-img-id={item.imgId}
                  data-strk-img={`[ugc-caption-${item.id}] gold jewelry worn ear necklace`}
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="400"
                />

                {/* Caption Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <p
                  id={`ugc-caption-${item.id}`}
                  className="absolute bottom-4 left-4 right-4 font-serif text-lg text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
