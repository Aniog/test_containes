import React from 'react'
import { useParams, Link } from 'react-router-dom'
import products from '../data/products'

export default function ProductDetailPage() {
  const { slug } = useParams()
  const product = products.find(p => p.slug === slug)
  
  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 className="font-serif text-3xl mb-4">Product Not Found</h1>
        <Link to="/shop" className="text-velmora-gold hover:underline">
          Back to Shop
        </Link>
      </div>
    )
  }
  
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Product Images */}
        <div className="bg-velmora-beige aspect-square flex items-center justify-center">
          <span className="text-velmora-warmGray text-lg">Product Image</span>
        </div>
        
        {/* Product Info */}
        <div>
          <h1 className="font-serif text-3xl md:text-4xl tracking-wider mb-4">
            {product.name}
          </h1>
          <p className="text-2xl text-velmora-gold mb-6">${product.price}</p>
          <p className="text-velmora-warmGray mb-8">{product.description}</p>
          
          {/* Variant Selector */}
          <div className="mb-6">
            <label className="block text-sm tracking-wide mb-3">MATERIAL</label>
            <div className="flex gap-3">
              <button className="px-6 py-2 border-2 border-velmora-charcoal text-sm tracking-wide">
                GOLD
              </button>
              <button className="px-6 py-2 border border-velmora-beige text-sm tracking-wide hover:border-velmora-charcoal">
                SILVER
              </button>
            </div>
          </div>
          
          {/* Quantity */}
          <div className="mb-8">
            <label className="block text-sm tracking-wide mb-3">QUANTITY</label>
            <div className="flex items-center gap-4">
              <button className="w-10 h-10 border border-velmora-beige">-</button>
              <span className="w-10 text-center">1</span>
              <button className="w-10 h-10 border border-velmora-beige">+</button>
            </div>
          </div>
          
          {/* Add to Cart */}
          <button className="w-full bg-velmora-charcoal text-white py-4 tracking-widest text-sm hover:bg-velmora-gold transition-colors mb-8">
            ADD TO CART
          </button>
          
          {/* Accordions */}
          <div className="border-t border-velmora-beige">
            <details className="py-4 border-b border-velmora-beige">
              <summary className="cursor-pointer text-sm tracking-wide">DESCRIPTION</summary>
              <p className="mt-4 text-sm text-velmora-warmGray">
                {product.description}. Crafted with care using 18K gold plated materials.
              </p>
            </details>
            <details className="py-4 border-b border-velmora-beige">
              <summary className="cursor-pointer text-sm tracking-wide">MATERIALS & CARE</summary>
              <p className="mt-4 text-sm text-velmora-warmGray">
                18K Gold Plated. Hypoallergenic. Avoid contact with water and perfumes.
              </p>
            </details>
            <details className="py-4">
              <summary className="cursor-pointer text-sm tracking-wide">SHIPPING & RETURNS</summary>
              <p className="mt-4 text-sm text-velmora-warmGray">
                Free worldwide shipping. 30-day returns.
              </p>
            </details>
          </div>
        </div>
      </div>
      
      {/* Related Products */}
      <div className="mt-20 pt-12 border-t border-velmora-beige">
        <h2 className="font-serif text-2xl text-center tracking-wider mb-8">YOU MAY ALSO LIKE</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {products.filter(p => p.id !== product.id).slice(0, 4).map(related => (
            <Link key={related.id} to={`/product/${related.slug}`} className="group">
              <div className="bg-velmora-beige aspect-square mb-3 flex items-center justify-center">
                <span className="text-velmora-warmGray text-sm">Related Item</span>
              </div>
              <h3 className="font-serif text-sm tracking-wider">{related.name}</h3>
              <p className="text-velmora-gold">${related.price}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
