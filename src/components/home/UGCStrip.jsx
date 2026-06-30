import { ugcImages } from '@/data/products';

const UGCStrip = () => {
  return (
    <section className="py-16 bg-surface overflow-hidden">
      <div className="max-w-content mx-auto px-6 lg:px-12 mb-10">
        <div className="text-center">
          <p className="font-sans text-xs uppercase tracking-[0.2em] text-gold mb-3">
            Real Moments
          </p>
          <h2 className="font-serif text-3xl lg:text-4xl text-charcoal">
            Styled by You
          </h2>
        </div>
      </div>

      {/* Horizontal Scroll Container */}
      <div className="relative">
        <div className="flex gap-4 overflow-x-auto pb-4 px-6 lg:px-12 scrollbar-hide">
          {ugcImages.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0 w-48 md:w-56 lg:w-64"
            >
              <div className="relative aspect-[9/16] rounded overflow-hidden group">
                <img
                  src={item.image}
                  alt={item.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {/* Caption */}
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                  <p className="font-serif text-sm text-white italic">
                    {item.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Gradient Fades */}
        <div className="absolute top-0 left-0 w-12 h-full bg-gradient-to-r from-surface to-transparent pointer-events-none" />
        <div className="absolute top-0 right-0 w-12 h-full bg-gradient-to-l from-surface to-transparent pointer-events-none" />
      </div>
    </section>
  );
};

export default UGCStrip;
