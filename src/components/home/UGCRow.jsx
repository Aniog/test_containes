import { ugcImages } from '../../data/products';

const UGCRow = () => {
  return (
    <section className="py-16 sm:py-20 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="font-serif text-2xl sm:text-3xl text-charcoal">
            Styled by You
          </h2>
          <p className="mt-2 font-sans text-sm text-softGray">
            Tag @velmorajewelry to be featured
          </p>
        </div>
      </div>

      {/* Horizontal Scroll Container */}
      <div className="relative">
        <div 
          className="flex gap-4 px-4 sm:px-6 lg:px-8 overflow-x-auto scrollbar-hide"
          style={{
            scrollSnapType: 'x mandatory',
            scrollBehavior: 'smooth',
            WebkitOverflowScrolling: 'touch',
          }}
        >
          {ugcImages.map((item) => (
            <div 
              key={item.id}
              className="flex-shrink-0 w-40 sm:w-52 md:w-60"
              style={{ scrollSnapAlign: 'start' }}
            >
              <div className="relative aspect-[9/16] overflow-hidden group cursor-pointer">
                <img
                  src={item.image}
                  alt={item.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
                
                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="font-serif text-sm text-warm-white italic text-center">
                    {item.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Fade Edges */}
        <div className="absolute top-0 left-0 bottom-0 w-8 bg-gradient-to-r from-cream to-transparent pointer-events-none" />
        <div className="absolute top-0 right-0 bottom-0 w-8 bg-gradient-to-l from-cream to-transparent pointer-events-none" />
      </div>
    </section>
  );
};

export default UGCRow;
