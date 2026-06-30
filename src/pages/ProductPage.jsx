import { Navigate, useParams } from 'react-router-dom'
import ProductGallery from '@/components/product/ProductGallery'
import ProductInfo from '@/components/product/ProductInfo'
import RelatedProducts from '@/components/product/RelatedProducts'
import { getProductBySlug, getRelatedProducts } from '@/data/products'

const ProductPage = ({ onAddToCart }) => {
  const { slug } = useParams()
  const product = getProductBySlug(slug)

  if (!product) {
    return <Navigate to="/shop" replace />
  }

  return (
    <main className="bg-stone-50 pb-20 pt-8">
      <div className="page-shell">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <ProductGallery product={product} />
          <ProductInfo product={product} onAddToCart={onAddToCart} />
        </div>
      </div>
      <RelatedProducts
        products={getRelatedProducts(product.slug)}
        onAddToCart={onAddToCart}
      />
    </main>
  )
}

export default ProductPage
