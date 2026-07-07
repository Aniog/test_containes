import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import products from '@/data/products';

export default function CollectionsPage() {
  const collections = [
    {
      id: 'everyday-essentials',
      title: 'Everyday Essentials',
      description: 'The pieces you reach for every morning. Understated, versatile, and built to last.',
      query: 'minimal gold jewelry everyday essentials editorial flat lay',
      imgId: 'collection-everyday',
      filter: (p) => p.price <= 50,
    },
    {
      id: 'statement-pieces',
      title: 'Statement Pieces',
      description: 'For the moments that call for something more. Bold designs with quiet confidence.',
      query: 'statement gold jewelry editorial luxury close up',
      imgId: 'collection-statement',
      filter: (p) => p.price > 50,
    },
    {
      id: 'the-gift-edit',
      title: 'The Gift Edit',
      description: 'Curated gift sets and standout pieces, beautifully boxed and ready to delight.',
      query: 'luxury jewelry gift box set gold elegant packaging',
      imgId: 'collection-gift',
      filter: (p) => p.category === 'sets' || p.badge,
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-20 lg:pt-24 min-h-screen bg-brand-ivory">
      {/* Header */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 pt-10 lg:pt-16 pb-6 text-center">
        <p className="text-brand-gold text-[11px] tracking-[0.3em] uppercase font-sans mb-3">
          Curated
        </p>
        <h1 className="font-serif text-3xl lg:text-5xl text-brand-charcoal font-light">
          Collections
        </h1>
        <p className="text-brand-warm-gray text-sm mt-3 max-w-md mx-auto">
          Thoughtfully curated selections for every occasion and style.
        </p>
        <div className="w-16 h-px bg-brand-gold/40 mx-auto mt-6" />
      </div>

      {/* Collection cards */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 pb-20 pt-8">
        <div className="space-y-8 lg:space-y-12">
          {collections.map((col) => {
            const collectionProducts = products.filter(col.filter);
            return (
              <Link
                key={col.id}
                to={`/shop?collection=${col.id}`}
                className="group block"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden bg-brand-cream">
                  <div className="aspect-[16/10] lg:aspect-auto overflow-hidden">
                    <img
                      data-strk-img-id={col.imgId}
                      data-strk-img={`[col-title-${col.id}] [col-desc-${col.id}]`}
                      data-strk-img-ratio="16x9"
                      data-strk-img-width="800"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={col.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-col justify-center p-8 lg:p-14">
                    <h2
                      id={`col-title-${col.id}`}
                      className="font-serif text-2xl lg:text-4xl text-brand-charcoal font-light mb-3"
                    >
                      {col.title}
                    </h2>
                    <p
                      id={`col-desc-${col.id}`}
                      className="text-brand-warm-gray text-[15px] leading-relaxed mb-2 max-w-md"
                    >
                      {col.description}
                    </p>
                    <p className="text-brand-taupe text-xs font-sans mb-6">
                      {collectionProducts.length} {collectionProducts.length === 1 ? 'piece' : 'pieces'}
                    </p>
                    <span className="inline-flex items-center gap-1 text-sm text-brand-charcoal tracking-[0.1em] uppercase font-sans group-hover:text-brand-gold transition-colors">
                      Explore Collection
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="transition-transform group-hover:translate-x-1">
                        <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.2" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
}
