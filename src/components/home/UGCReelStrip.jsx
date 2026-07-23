import { ugcItems } from '@/data/products';

export default function UGCReelStrip() {
  return (
    <section className="py-12 bg-ivory overflow-hidden">
      <div className="container-wide mb-6">
        <h2
          className="text-2xl md:text-3xl text-charcoal text-center"
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontWeight: 400,
            letterSpacing: '0.02em',
          }}
        >
          Styled by You
        </h2>
      </div>

      {/* Horizontal Scroll Container */}
      <div className="relative">
        <div
          className="flex gap-4 px-4 md:px-8 overflow-x-auto scrollbar-hide pb-4"
          style={{
            scrollSnapType: 'x mandatory',
            scrollPaddingLeft: '1rem',
          }}
        >
          {ugcItems.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0 w-[200px] md:w-[240px] aspect-[9/16] relative overflow-hidden bg-charcoal scroll-snap-align-start"
              style={{ scrollSnapAlign: 'start' }}
            >
              <img
                src={item.image}
                alt={item.caption}
                className="w-full h-full object-cover"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
              {/* Caption */}
              <div className="absolute bottom-4 left-4 right-4">
                <p
                  className="text-sm text-white italic"
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontStyle: 'italic',
                  }}
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
