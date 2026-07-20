import { Link } from 'react-router-dom'
import { products } from '@/lib/products'

export default function RelatedProducts({ currentId }) {
  const related = products.filter((p) => p.id !== currentId).slice(0, 4)

  return (
    <section className="mt-16 md:mt-20">
      <h2 className="font-serif text-2xl md:text-3xl text-[#1A1A1A] mb-6 md:mb-8">
        You May Also Like
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {related.map((product) => (
          <Link key={product.id} to={`/product/${product.id}`} className="group">
            <div className="aspect-[3/4] bg-warm rounded overflow-hidden">
              <img
                src={product.images.front}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="mt-2.5">
              <h3 className="font-serif text-sm tracking-[0.15em] uppercase text-[#1A1A1A]">
                {product.name}
              </h3>
              <p className="text-sm text-muted-text mt-0.5">${product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}