import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { products } from '@/data/products'
import ProductGallery from '@/components/product/ProductGallery'
import ProductInfo from '@/components/product/ProductInfo'
import RelatedProducts from '@/components/product/RelatedProducts'

const ProductPage = () => {
  const { slug } = useParams()
  const product = products.find(p => p.slug === slug)

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="serif-heading text-3xl mb-4">Product Not Found</h1>
          <Link to="/shop" className="btn-outline">Back to Shop</Link>
        </div>
      </div>
    )
  }

  return (
    <main className="pt-20 md:pt-24">
      {/* Breadcrumb */}
      <div className="container-padding py-4">
        <nav className="text-xs text-muted-foreground">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-primary transition-colors">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">{product.name}</span>
        </nav>
      </div>

      {/* Product detail */}
      <div className="container-padding pb-16">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
          <ProductGallery images={product.images} name={product.name} />
          <ProductInfo product={product} />
        </div>
      </div>

      {/* Related products */}
      <RelatedProducts currentProductId={product.id} />
    </main>
  )
}

export default ProductPage
