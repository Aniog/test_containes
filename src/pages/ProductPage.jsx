import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { products } from '../data/products'
import ProductGallery from '../components/product/ProductGallery'
import ProductInfo from '../components/product/ProductInfo'
import Accordion from '../components/product/Accordion'
import Bestsellers from '../components/home/Bestsellers'

export default function ProductPage() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const product = products.find(p => p.slug === slug)

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-velmora-cream">
        <div className="text-center">
          <h1 className="font-serif text-4xl text-velmora-base mb-4">Product Not Found</h1>
          <button
            onClick={() => navigate('/collection')}
            className="px-8 py-3 bg-velmora-base text-velmora-cream text-xs tracking-super-wide uppercase hover:bg-velmora-gold hover:text-velmora-base transition-colors"
          >
            Back to Shop
          </button>
        </div>
      </div>
    )
  }

  return (
    <main className="bg-velmora-cream">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="text-xs text-velmora-muted">
          <button onClick={() => navigate('/')} className="hover:text-velmora-base transition-colors">Home</button>
          <span className="mx-2">/</span>
          <button onClick={() => navigate('/collection')} className="hover:text-velmora-base transition-colors">Shop</button>
          <span className="mx-2">/</span>
          <span className="text-velmora-base">{product.name}</span>
        </nav>
      </div>

      {/* Product Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          <ProductGallery images={product.images} name={product.name} />
          <ProductInfo product={product} />
        </div>

        {/* Accordions */}
        <div className="mt-16 max-w-2xl">
          <Accordion title="Description">
            <p>{product.description}</p>
            <p className="mt-4">Each Velmora piece is designed with attention to detail and crafted to the highest standards. Our demi-fine jewelry bridges the gap between everyday accessories and luxury heirlooms.</p>
          </Accordion>
          <Accordion title="Materials & Care">
            <p><strong>Materials:</strong> {product.materials}</p>
            <p className="mt-4"><strong>Care:</strong> {product.care}</p>
          </Accordion>
          <Accordion title="Shipping & Returns">
            <p><strong>Shipping:</strong> Free worldwide shipping on all orders. Standard delivery takes 5-7 business days. Express shipping available at checkout.</p>
            <p className="mt-4"><strong>Returns:</strong> 30-day hassle-free returns. Items must be unworn and in original packaging. Refunds processed within 5 business days of receiving the return.</p>
          </Accordion>
        </div>
      </section>

      {/* Related Products */}
      <section className="bg-velmora-warm py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-serif text-3xl text-velmora-base">You May Also Like</h2>
            <div className="w-12 h-px bg-velmora-gold mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {products
              .filter(p => p.id !== product.id)
              .slice(0, 4)
              .map((related) => (
                <div key={related.id} className="group">
                  <button
                    onClick={() => navigate(`/product/${related.slug}`)}
                    className="block relative overflow-hidden bg-velmora-warm aspect-[3/4] w-full"
                  >
                    <img
                      src={related.images[0]}
                      alt={related.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </button>
                  <div className="mt-3 text-center">
                    <h3 className="font-serif text-sm tracking-wide text-velmora-base group-hover:text-velmora-gold transition-colors">
                      {related.name}
                    </h3>
                    <p className="text-sm text-velmora-muted mt-1">${related.price}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </main>
  )
}
