import { ugcImages } from '@/data/products';

export default function UGCSection() {
  return (
    <section className="py-16 md:py-24 bg-creamLight overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="text-center">
          <h2 className="font-serif text-3xl md:text-h2 mb-4">Styled by You</h2>
          <p className="text-warmGray">
            Tag @velmora to be featured
          </p>
        </div>
      </div>

      {/* Horizontal Scroll Container */}
      <div className="flex gap-4 px-4 overflow-x-auto hide-scrollbar pb-4">
        {ugcImages.map((item) => (
          <div
            key={item.id}
            className="flex-shrink-0 w-40 sm:w-48 md:w-56"
          >
            <div className="relative aspect-[9/16] overflow-hidden bg-cream">
              <img
                src={item.image}
                alt={item.caption}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
              <p className="absolute bottom-4 left-4 right-4 font-serif text-sm text-cream italic">
                {item.caption}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}