import { ugcContent } from '../../data/products';

const UGCRow = () => {
  return (
    <section className="py-16 bg-[var(--color-cream)] overflow-hidden">
      <div className="container mb-8">
        <div className="text-center">
          <p 
            className="text-sm tracking-[0.3em] uppercase text-[var(--color-gold)] mb-4"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            Real Style
          </p>
          <h2 style={{ fontFamily: 'var(--font-serif)' }}>As Seen On You</h2>
        </div>
      </div>

      {/* Horizontal Scroll Container */}
      <div className="flex gap-4 px-4 md:px-8 overflow-x-auto scrollbar-hide pb-4">
        {ugcContent.map((item) => (
          <div
            key={item.id}
            className="flex-shrink-0 w-48 md:w-64 aspect-[9/16] relative overflow-hidden group cursor-pointer"
          >
            {/* Image */}
            <img
              src={item.image}
              alt={item.caption}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <p 
                className="text-white text-sm italic leading-relaxed"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                "{item.caption}"
              </p>
            </div>

            {/* Play Indicator */}
            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <svg className="w-3 h-3 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>
        ))}

        {/* View More Card */}
        <div className="flex-shrink-0 w-48 md:w-64 aspect-[9/16] relative overflow-hidden group cursor-pointer">
          <div className="absolute inset-0 bg-[var(--color-charcoal)] flex flex-col items-center justify-center p-6">
            <p 
              className="text-white text-lg text-center mb-2"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Share your look
            </p>
            <p 
              className="text-white/60 text-sm text-center"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Tag @velmorajewelry
            </p>
            <div className="mt-6 w-12 h-12 rounded-full border-2 border-[var(--color-gold)] flex items-center justify-center">
              <svg className="w-5 h-5 text-[var(--color-gold)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Hint - Mobile */}
      <div className="flex justify-center mt-4 gap-2">
        {ugcContent.map((_, i) => (
          <div
            key={i}
            className="w-2 h-2 rounded-full bg-[var(--color-border)]"
          />
        ))}
      </div>
    </section>
  );
};

export default UGCRow;
