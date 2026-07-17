import { ugcPosts } from '@/data/products';

const UGCStrip = () => {
  return (
    <section className="py-12 bg-[var(--color-surface)]">
      <div className="overflow-hidden">
        {/* Section Header */}
        <div className="container mb-8">
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-[var(--color-accent)] mb-2 text-center">
            Styled by You
          </p>
          <h2 className="font-serif text-2xl md:text-3xl text-[var(--color-dark)] text-center">
            @velmorajewelry
          </h2>
        </div>

        {/* Scrolling Cards */}
        <div className="flex gap-4 px-4 md:px-0 overflow-x-auto scrollbar-hide pb-4">
          <div className="flex gap-4" style={{ minWidth: 'max-content' }}>
            {ugcPosts.map((post) => (
              <div
                key={post.id}
                className="relative w-[180px] md:w-[220px] aspect-[9/16] flex-shrink-0 overflow-hidden group cursor-pointer"
              >
                <img
                  src={post.image}
                  alt={post.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="font-serif text-white text-sm italic">
                    "{post.caption}"
                  </p>
                </div>

                {/* Hover Indicator */}
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg 
                    className="w-6 h-6 text-white" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View More Link */}
        <div className="container mt-6 text-center">
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-sans text-sm text-[var(--color-secondary)] hover:text-[var(--color-accent)] transition-colors"
          >
            <span>View more on Instagram</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default UGCStrip;
