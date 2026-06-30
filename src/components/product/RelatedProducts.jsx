import { Link } from 'react-router-dom'
import { products } from '../../data/products'
import { useCart } from '../../context/CartContext'

export default function RelatedProducts({ currentId }) {
  const related = products.filter((p) => p.id !== currentId).slice(0, 4)
  const { addItem } = useCart()

  return (
    <section className="py-16 lg:py-20 border-t border-brand-200/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="font-serif text-2xl text-brand-900 tracking-wide text-center mb-10">
          You May Also Like
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {related.map((product) => (
            <div key={product.id} className="group bg-white rounded-sm overflow-hidden border border-brand-100">
              <Link to={`/products/${product.id}`} className="block">
                <div className="aspect-[4/5] overflow-hidden bg-brand-100">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                  />
                </div>
              </Link>
              <div className="p-3">
                <Link to={`/products/${product.id}`}>
                  <h3 className="font-serif text-xs uppercase tracking-widest text-brand-900">
                    {product.name}
                  </h3>
                </Link>
                <div className="flex items-center justify-between mt-2">
                  <span className="font-sans text-sm font-medium text-gold-700">${product.price}</span>
                  <button
                    onClick={() => addItem(product)}
                    className="text-[10px] tracking-widest uppercase font-sans text-brand-500 border border-brand-300 px-2 py-1 rounded-sm hover:bg-brand-900 hover:text-cream-50 transition-colors"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}