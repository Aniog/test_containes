import React from 'react'
import { Link } from 'react-router-dom'
import { getRelatedProducts } from '../../data/products'

export default function RelatedProducts({ currentProduct }) {
  const related = getRelatedProducts(currentProduct)

  if (related.length === 0) return null

  return (
    <section className="py-16 md:py-24 border-t border-velvet-200">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <h2 className="font-serif text-2xl md:text-3xl text-velvet-900 font-light text-center mb-10 md:mb-12">
          You May Also Like
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6">
          {related.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.slug}`}
              className="group"
            >
              <div className="aspect-[3/4] overflow-hidden bg-velvet-100">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="mt-3 space-y-1">
                <h3 className="text-xs uppercase tracking-[0.15em] text-velvet-900 font-medium truncate">
                  {product.name}
                </h3>
                <p className="text-gold text-sm font-medium">${product.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}