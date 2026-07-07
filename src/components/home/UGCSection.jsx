import { ugcContent } from '@/data/products';

const UGCSection = () => {
  return (
    <section className="py-16 md:py-24 bg-sand/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-gold font-sans text-xs tracking-ultra-wide uppercase mb-3">
            Community
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal">
            Styled by You
          </h2>
        </div>
      </div>

      {/* Horizontal Scroll Container */}
      <div className="relative">
        <div className="flex gap-4 overflow-x-auto hide-scrollbar px-4 sm:px-6 lg:px-8 pb-4">
          {ugcContent.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0 w-48 sm:w-56 md:w-64 relative group"
            >
              {/* Vertical Card */}
              <div className="aspect-[9/16] overflow-hidden bg-sand relative">
                <img
                  src={item.image}
                  alt={item.caption}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent" />

                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="font-serif text-ivory text-sm italic leading-relaxed mb-2">
                    "{item.caption}"
                  </p>
                  <p className="text-ivory/60 font-sans text-xs">
                    {item.author}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Fade Edges */}
        <div className="absolute top-0 left-0 bottom-0 w-8 bg-gradient-to-r from-sand/30 to-transparent pointer-events-none" />
        <div className="absolute top-0 right-0 bottom-0 w-8 bg-gradient-to-l from-sand/30 to-transparent pointer-events-none" />
      </div>
    </section>
  );
};

export default UGCSection;
