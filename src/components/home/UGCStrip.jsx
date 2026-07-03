import { ugcItems } from '../../data/products';

export default function UGCStrip() {
  return (
    <section className="py-16 overflow-hidden bg-[#F5F2ED]">
      <div className="container mb-8">
        <div className="text-center">
          <p className="label-uppercase text-xs tracking-[0.2em] mb-3" style={{ color: 'var(--color-gold)' }}>
            Community Love
          </p>
          <h2 className="heading-2" style={{ color: 'var(--color-text)' }}>
            Styled by You
          </h2>
        </div>
      </div>

      {/* Scrolling Container */}
      <div className="relative">
        {/* Gradient Edges */}
        <div className="absolute left-0 top-0 bottom-0 w-12 md:w-24 bg-gradient-to-r from-[#F5F2ED] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 md:w-24 bg-gradient-to-l from-[#F5F2ED] to-transparent z-10 pointer-events-none" />

        {/* Scrolling Track */}
        <div className="flex gap-4 px-6 md:px-12 overflow-x-auto hide-scrollbar">
          {[...ugcItems, ...ugcItems].map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="flex-shrink-0 w-[140px] sm:w-[160px] md:w-[180px]"
            >
              <div className="relative aspect-[9/16] overflow-hidden bg-[#E8E4DC] group">
                <img
                  src={item.image}
                  alt={item.caption}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="font-serif text-white text-sm italic leading-snug mb-1">
                    {item.caption}
                  </p>
                  <p className="text-white/60 text-[10px] uppercase tracking-wider">
                    {item.tag}
                  </p>
                </div>

                {/* Instagram Icon */}
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg 
                    className="w-5 h-5 text-white/80" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
