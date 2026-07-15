import { Link } from 'react-router-dom';
import { products } from '@/data/products';

export default function CollectionsPage() {
  const collections = [
    {
      id: 'everyday-elegance',
      name: 'Everyday Elegance',
      description: 'Effortless pieces for daily wear — minimal, warm, refined.',
      products: products.slice(0, 3),
    },
    {
      id: 'evening-glow',
      name: 'Evening Glow',
      description: 'Statement pieces that catch the light and elevate any evening look.',
      products: products.slice(2, 5),
    },
    {
      id: 'the-gift-edit',
      name: 'The Gift Edit',
      description: 'Curated sets and pairings, beautifully boxed and ready to give.',
      products: products.filter((p) => p.id === 'royal-heirloom-set' || p.id === 'golden-sphere-huggies'),
    },
  ];

  return (
    <div className="pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-5xl text-ink">Collections</h1>
          <p className="mt-3 text-taupe text-sm md:text-base font-light max-w-lg mx-auto">
            Thoughtfully curated edits to suit every occasion.
          </p>
        </div>

        <div className="space-y-20">
          {collections.map((col) => (
            <div key={col.id}>
              <div className="mb-8">
                <h2 className="font-serif text-2xl md:text-3xl text-ink">{col.name}</h2>
                <p className="mt-1 text-taupe text-sm font-light">{col.description}</p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                {col.products.map((p) => (
                  <Link key={p.id} to={`/product/${p.id}`} className="group">
                    <div className="relative aspect-[4/5] bg-warm-light overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-cream/20 to-ink/10" />
                    </div>
                    <div className="mt-3 px-0.5">
                      <h3 className="text-product-name text-ink truncate">{p.name}</h3>
                      <p className="font-serif italic text-base text-ink mt-1">${p.price}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}