import { Link } from 'react-router-dom'
import { products } from '@/data/products'

export default function RelatedProducts({ currentId }) {
  const related = products.filter((p) => p.id !== currentId).slice(0, 4)

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="font-serif text-2xl md:text-3xl font-light text-ink">
            You May Also Like
          </h2>
          <div className="w-10 h-[1px] bg-velvet-300 mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {related.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="group"
            >
              <div className="aspect-square bg-velvet-100 overflow-hidden">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="mt-3">
                <h3 className="font-serif text-xs md:text-sm font-medium uppercase tracking-[0.12em] text-ink group-hover:text-velvet-700 transition-colors">
                  {product.name}
                </h3>
                <p className="font-serif text-sm italic text-velvet-600 mt-0.5">
                  ${product.price}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}