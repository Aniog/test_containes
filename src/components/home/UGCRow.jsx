import { ugcImages } from '../../data/products';

export default function UGCRow() {
  return (
    <section className="py-12 md:py-16 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="font-serif text-2xl md:text-3xl text-charcoal">
            Styled by You
          </h2>
          <p className="mt-2 text-sm text-taupe font-sans">
            Share your look with @velmorajewelry
          </p>
        </div>
      </div>

      {/* Horizontal Scroll Container */}
      <div className="overflow-x-auto hide-scrollbar">
        <div className="flex gap-3 px-4 sm:px-6 lg:px-8 pb-4" style={{ width: 'max-content' }}>
          {ugcImages.map((item) => (
            <div
              key={item.id}
              className="relative flex-shrink-0 w-40 md:w-52 aspect-[9/16] overflow-hidden group cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="font-serif text-sm text-cream italic">
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
