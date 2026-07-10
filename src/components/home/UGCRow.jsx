import { ugcContent } from '../../data/products';

const UGCRow = () => {
  return (
    <section className="py-16 md:py-20 bg-velmora-bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10">
          <span className="text-xs tracking-widest uppercase text-velmora-accent mb-4 block">
            Real Style, Real You
          </span>
          <h2 className="font-serif text-2xl md:text-3xl text-velmora-text-primary">
            Styled by Our Community
          </h2>
        </div>

        {/* Horizontal Scroll Container */}
        <div className="overflow-x-auto scrollbar-hide -mx-4 px-4 pb-4">
          <div className="flex gap-4" style={{ width: 'max-content' }}>
            {ugcContent.map((item) => (
              <div
                key={item.id}
                className="relative w-56 md:w-64 flex-shrink-0 overflow-hidden group"
              >
                {/* Image */}
                <div className="aspect-[9/16] bg-velmora-bg-dark overflow-hidden">
                  <img
                    src={item.image}
                    alt={`Styled by ${item.author}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="font-serif text-white text-sm italic leading-snug mb-2">
                    "{item.caption}"
                  </p>
                  <p className="text-white/60 text-xs tracking-wider">
                    {item.author}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll hint for mobile */}
        <div className="flex justify-center mt-4 gap-1">
          {ugcContent.map((_, i) => (
            <div
              key={i}
              className="w-2 h-1 bg-velmora-border-dark rounded-full"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default UGCRow;
