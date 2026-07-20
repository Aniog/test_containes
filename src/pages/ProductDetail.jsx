import React from 'react'
import { useParams, Link } from 'react-router-dom'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import ProductGallery from '../components/product/ProductGallery'
import ProductInfo from '../components/product/ProductInfo'
import Accordion from '../components/product/Accordion'
import RelatedProducts from '../components/product/RelatedProducts'
import { getProductBySlug } from '../data/products'

export default function ProductDetail() {
  const { slug } = useParams()
  const product = getProductBySlug(slug)

  if (!product) {
    return (
      <div className="min-h-screen bg-velmora-bg pt-20">
        <Navbar />
        <div className="max-w-2xl mx-auto px-6 py-20 text-center">
          <h1 className="serif text-3xl mb-4">Product Not Found</h1>
          <p className="text-velmora-text-light mb-8">The piece you're looking for doesn't exist or has been moved.</p>
          <Link to="/shop" className="btn btn-primary">Browse Collection</Link>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-velmora-bg pt-20">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Breadcrumb */}
        <div className="text-xs tracking-wider text-velmora-text-light mb-8">
          <Link to="/shop" className="hover:text-velmora-gold">Shop</Link>
          <span className="mx-2">/</span>
          <span>{product.category}</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-x-16 gap-y-10">
          {/* Gallery */}
          <div>
            <ProductGallery images={product.images} productName={product.name} />
          </div>

          {/* Info */}
          <div className="lg:pt-2">
            <ProductInfo product={product} />

            {/* Accordions */}
            <div className="mt-10 pt-6 border-t border-velmora-border space-y-1">
              <Accordion title="DESCRIPTION" defaultOpen>
                <p>{product.longDescription}</p>
              </Accordion>
              <Accordion title="MATERIALS & CARE">
                <p className="mb-3"><strong>Materials:</strong> {product.material}</p>
                <p>{product.care}</p>
              </Accordion>
              <Accordion title="SHIPPING & RETURNS">
                <p className="mb-3">Free worldwide shipping on all orders. Ships within 1-2 business days.</p>
                <p>30-day returns. Items must be unworn and in original packaging.</p>
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <RelatedProducts currentProductId={product.id} />

      <Footer />
    </div>
  )
}
