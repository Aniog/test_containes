import { Link, Navigate, useParams } from 'react-router-dom'
import ProductCard from '@/components/common/ProductCard'
import ProductGallery from '@/components/product/ProductGallery'
import ProductInfo from '@/components/product/ProductInfo'
import ProductAccordions from '@/components/product/ProductAccordions'
import SectionHeader from '@/components/common/SectionHeader'
import { getProductBySlug, getRelatedProducts } from '@/data/products'

const ProductPage = () => {
  const { slug } = useParams()
  const product = getProductBySlug(slug)

  if (!product) {
    return <Navigate to="/shop" replace />
  }

  const relatedProducts = getRelatedProducts(slug)

  return (
    <section className="bg-stone-100 px-4 pb-16 pt-32 sm:px-6 sm:pb-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Link
          to="/shop"
          className="text-xs font-medium uppercase tracking-[0.28em] text-stone-500 transition hover:text-stone-950"
        >
          Back to shop
        </Link>

        <div className="mt-6 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <ProductGallery product={product} />
          <div>
            <ProductInfo product={product} />
            <ProductAccordions product={product} />
          </div>
        </div>

        <div className="mt-16 sm:mt-20">
          <SectionHeader
            eyebrow="You may also like"
            title="More pieces in the same mood"
            description="Pair your selection with warm-toned favorites chosen to complement the same polished styling story."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {relatedProducts.map((relatedProduct) => (
              <ProductCard key={relatedProduct.id} product={relatedProduct} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductPage
