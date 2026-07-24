import React from 'react'
import { Link } from 'react-router-dom'
import { products } from '@/data/products'

const RelatedProducts = ({ currentProductId }) => {
  const related = products.filter(p => p.id !== currentProductId).slice(0, 4)

  return (
    <section className="section-padding bg-secondary/20">
      <div className="container-padding">
        <div className="text-center mb-12">
          <h2 className="serif-heading text-3xl">You May Also Like</h2>
          <div className="w-12 h-px bg-primary mx-auto mt-4" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {related.map((product) => (
            <Link key={product.id} to={`/product/${product.slug}`} className="group block">
              <div className="aspect-[3/4] overflow-hidden bg-secondary mb-3">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h3 className="product-name text-xs text-center">{product.name}</h3>
              <p className="text-center text-sm font-medium mt-1">${product.price}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default RelatedProducts
