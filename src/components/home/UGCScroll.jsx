import { ugcContent } from '../../data/products';

export default function UGCScroll() {
  return (
    <section className="py-16 bg-velmora-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-8">
        <div className="text-center">
          <span className="text-xs uppercase tracking-widest text-velmora-taupe">
            Community
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-velmora-charcoal mt-2">
            Styled by You
          </h2>
        </div>
      </div>

      {/* Horizontal Scroll Container */}
      <div className="ugc-scroll flex gap-4 px-4 overflow-x-auto pb-4 snap-x">
        {ugcContent.map((item) => (
          <div
            key={item.id}
            className="flex-shrink-0 w-40 md:w-56 snap-center"
          >
            <div className="relative aspect-[2/3] overflow-hidden bg-velmora-sand group">
              <img
                src={item.image}
                alt={item.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Caption Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-velmora-charcoal/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="font-serif text-sm text-white italic">
                    "{item.caption}"
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Scroll hint */}
      <div className="flex justify-center mt-4">
        <span className="text-xs text-velmora-taupe uppercase tracking-widest">
          Scroll to explore
        </span>
      </div>
    </section>
  );
}