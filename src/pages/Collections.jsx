import { Link } from 'react-router-dom'
import { products, categories } from '@/data/products'
import ProductCard from '@/components/product/ProductCard'

export default function Collections() {
  const collections = [
    {
      id: 'bestsellers',
      title: 'Bestsellers',
      description: 'Our most loved pieces — customer favorites that sell out again and again.',
      products: products.filter((p) => p.badge === 'Bestseller'),
    },
    {
      id: 'new-arrivals',
      title: 'New Arrivals',
      description: 'The latest additions to the Velmora collection, fresh from our design studio.',
      products: products.filter((p) => p.badge === 'New'),
    },
    {
      id: 'gift-sets',
      title: 'Gift Sets',
      description: 'Beautifully packaged sets for the special someone — or yourself.',
      products: products.filter((p) => p.category === 'sets'),
    },
  ]

  return (
    <main className="pt-20 md:pt-24 min-h-screen bg-brand-ivory">
      {/* Page header */}
      <div className="section-padding py-10 md:py-16 text-center border-b border-brand-taupe/10">
        <p className="font-sans text-[0.65rem] tracking-[0.3em] uppercase text-brand-gold mb-3">
          Curated
        </p>
        <h1 className="section-title text-3xl md:text-heading">
          Collections
        </h1>
        <p className="font-sans text-sm text-brand-taupe mt-3 max-w-lg mx-auto">
          Explore our curated collections — from everyday essentials to statement pieces.
        </p>
      </div>

      {/* Collections */}
      <div className="section-padding py-12 md:py-20">
        {collections.map((collection, index) => (
          <section
            key={collection.id}
            className={`mb-16 md:mb-24 ${index > 0 ? 'pt-16 md:pt-24 border-t border-brand-taupe/10' : ''}`}
          >
            <div className="text-center mb-10">
              <h2 className="section-title text-2xl md:text-3xl mb-2">
                {collection.title}
              </h2>
              <p className="font-sans text-sm text-brand-taupe max-w-md mx-auto">
                {collection.description}
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
              {collection.products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            <div className="text-center mt-10">
              <Link to={`/shop?collection=${collection.id}`} className="btn-outline text-xs">
                View Collection
              </Link>
            </div>
          </section>
        ))}

        {/* Shop by category */}
        <section className="pt-16 md:pt-24 border-t border-brand-taupe/10">
          <div className="text-center mb-10">
            <h2 className="section-title text-2xl md:text-3xl">
              Browse by Category
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((cat) => (
              <Link
                key={cat.id}
                to={`/shop?category=${cat.id}`}
                className="btn-outline text-xs"
              >
                {cat.name}
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
