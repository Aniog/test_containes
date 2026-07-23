import { ugcContent } from '../../data/products';

export default function UGCReelStrip() {
  return (
    <section className="py-12 md:py-16 bg-[var(--color-ivory-warm)]">
      <div className="container-wide mb-8">
        <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-gold)] mb-2 text-center">
          Styled by You
        </p>
        <h2 className="font-serif text-2xl md:text-3xl text-center">@velmorajewelry</h2>
      </div>

      {/* Horizontal scroll container */}
      <div className="scroll-container pl-4 md:pl-8">
        <div className="flex gap-3 md:gap-4 pb-4" style={{ width: 'max-content' }}>
          {ugcContent.map((item) => (
            <div
              key={item.id}
              className="scroll-item w-40 md:w-52 aspect-9/16 bg-[var(--color-cream)] overflow-hidden relative group cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="font-serif text-sm text-[var(--color-ivory)] italic">
                    "{item.caption}"
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <p className="text-xs text-[var(--color-text-muted)] text-center mt-6">
        Scroll to explore more
      </p>
    </section>
  );
}
