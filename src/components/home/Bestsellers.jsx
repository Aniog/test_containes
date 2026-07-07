import { Link } from 'react-router-dom'
import { useCart } from '@/context/CartContext'
import { products } from '@/data/products'

export default function Bestsellers() {
  const { addItem } = useCart()
  const bestsellers = products.filter(p => p.tags.includes('bestseller')).slice(0, 5)

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal">Bestsellers</h2>
          <p className="mt-3 text-muted font-sans text-sm">The pieces our community reaches for again and again.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map(product => (
            <div key={product.id} className="group">
              <Link to={`/product/${product.slug}`} className="block no-underline">
                <div className="relative aspect-[3/4] bg-muted-light overflow-hidden mb-3">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xs text-muted/60 font-sans uppercase tracking-wider">
                      {product.category}
                    </span>
                  </div>
                  {/* Quick add overlay */}
                  <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <button
                      onClick={(e) => {
                        e.preventDefault()
                        e.stopPropagation()
                        addItem(product)
                      }}
                      className="w-full bg-charcoal/90 text-white py-2.5 text-xs uppercase tracking-wider font-sans border-none hover:bg-accent transition-colors"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </Link>
              <Link to={`/product/${product.slug}`} className="no-underline">
                <h3 className="font-serif text-sm text-charcoal uppercase tracking-product leading-tight">
                  {product.name}
                </h3>
                <p className="mt-1 text-sm text-muted font-sans">${product.price}</p>
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/shop"
            className="inline-block border border-accent text-accent px-8 py-3 text-sm uppercase tracking-wide-btn font-sans font-medium hover:bg-accent hover:text-white transition-colors no-underline"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  )
}
