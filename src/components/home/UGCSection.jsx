import { ugcContent } from '../../data/products';

export default function UGCSection() {
  return (
    <section
      className="py-12 md:py-16 overflow-hidden"
      style={{ backgroundColor: 'var(--color-ivory)' }}
    >
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-12">
          <h2
            className="font-serif text-2xl md:text-3xl mb-2"
            style={{ color: 'var(--color-text-primary)' }}
          >
            Styled by You
          </h2>
          <p
            className="text-sm"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            Tag @velmora to be featured
          </p>
        </div>
      </div>

      {/* Horizontal Scroll Container */}
      <div className="flex gap-3 md:gap-4 overflow-x-auto pb-4 px-4 md:px-0 md:justify-center scrollbar-hide">
        {ugcContent.map((item, index) => (
          <div
            key={item.id}
            className="flex-shrink-0 w-32 md:w-48 animate-fade-in-up"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="relative aspect-[9/16] overflow-hidden group">
              <img
                src={item.image}
                alt={item.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Overlay */}
              <div
                className="absolute inset-0 flex items-end p-3 md:p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 50%)'
                }}
              >
                <p
                  className="font-serif text-xs md:text-sm text-white italic"
                >
                  {item.caption}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Scroll Hint for Desktop */}
      <div className="hidden md:flex justify-center mt-4">
        <p
          className="text-xs tracking-wider animate-pulse"
          style={{ color: 'var(--color-stone-light)' }}
        >
          Scroll to explore
        </p>
      </div>
    </section>
  );
}