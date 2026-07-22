import { ugcImages } from '../../data/products';

export default function UGCStrip() {
  return (
    <section className="section bg-bg-alt overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 mb-8">
        <div className="text-center">
          <span className="text-xs font-medium tracking-extra-wide uppercase text-accent mb-2 block">
            Community Love
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-text">
            Styled by You
          </h2>
        </div>
      </div>

      {/* Horizontal Scroll Container */}
      <div className="scroll-x scroll-snap-x">
        <div className="flex gap-3 px-4 md:px-8" style={{ width: 'max-content' }}>
          {ugcImages.map((item) => (
            <div
              key={item.id}
              className="relative flex-shrink-0 w-[140px] md:w-[200px] overflow-hidden rounded"
              style={{ aspectRatio: item.aspectRatio }}
            >
              <img
                src={item.image}
                alt={item.caption}
                className="w-full h-full object-cover"
              />
              {/* Caption Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-3">
                <p className="font-serif text-sm text-white italic">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Hint - Mobile */}
      <div className="flex justify-center mt-6 md:hidden">
        <span className="text-xs text-text-light">Swipe to explore</span>
      </div>
    </section>
  );
}
