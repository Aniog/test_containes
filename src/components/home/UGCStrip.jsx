import { ugcImages } from '../../data/products';

export default function UGCStrip() {
  return (
    <section className="section-padding bg-[var(--color-surface)]">
      <div className="container-main">
        {/* Section Header */}
        <div className="text-center mb-10">
          <p className="text-[var(--color-accent)] text-sm tracking-[0.3em] uppercase mb-3">
            Styled by You
          </p>
          <h2 className="font-serif text-2xl md:text-3xl text-[var(--color-text)]">
            @velmorajewelry
          </h2>
        </div>
      </div>

      {/* Horizontal Scroll Container */}
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-4 px-4 md:px-6 lg:px-8 pb-4" style={{ width: 'max-content' }}>
          {ugcImages.map((item, index) => (
            <div
              key={item.id}
              className="relative flex-shrink-0 w-[240px] md:w-[280px] aspect-[9/16] overflow-hidden group cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.caption}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="font-serif text-sm text-[var(--color-text)] italic text-center">
                  {item.caption}
                </p>
              </div>

              {/* Instagram Icon */}
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-white"
                >
                  <rect
                    x="2"
                    y="2"
                    width="20"
                    height="20"
                    rx="5"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
                  <circle cx="18" cy="6" r="1.5" fill="currentColor" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
