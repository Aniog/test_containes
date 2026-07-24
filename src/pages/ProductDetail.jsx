import { useParams, Link } from 'react-router-dom'
import { ChevronLeft } from 'lucide-react'
import { useStrkImages } from '@/hooks/useStrkImages.jsx'
import ProductGallery from '@/components/products/ProductGallery'
import ProductDetails from '@/components/products/ProductDetails'
import RelatedProducts from '@/components/products/RelatedProducts'
import { useProduct, useProducts } from '@/hooks/useProducts'
import { Skeleton } from '@/components/ui/skeleton'

export default function ProductDetail() {
  const { slug } = useParams()
  const { product, loading, error } = useProduct(slug)
  const { products: allProducts } = useProducts()
  const pageRef = useStrkImages([loading, product?.id])

  const related = allProducts
    .filter((p) => p.id !== product?.id)
    .slice(0, 4)

  if (loading) {
    return (
      <div className="mx-auto max-w-[1440px] px-4 py-24 md:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16">
          <Skeleton className="aspect-[3/4] w-full" />
          <div className="space-y-6">
            <Skeleton className="h-8 w-2/3" />
            <Skeleton className="h-6 w-1/3" />
            <Skeleton className="h-24 w-full" />
            <Skeleton className="h-12 w-full" />
          </div>
        </div>
      </div>
    )
  }

  if (error || !product) {
    return (
      <div className="mx-auto max-w-[1440px] px-4 py-24 text-center md:px-8">
        <p className="font-serif text-2xl text-velmora-espresso">Product not found</p>
        <Link to="/shop" className="mt-4 inline-block text-velmora-gold hover:underline">
          Continue shopping
        </Link>
      </div>
    )
  }

  return (
    <div className="animate-fade-in" ref={pageRef}>
      <div className="mx-auto max-w-[1440px] px-4 py-6 pt-24 md:px-8 md:pt-28">
        <Link
          to="/shop"
          className="inline-flex items-center gap-1.5 text-sm text-velmora-taupe hover:text-velmora-espresso transition-colors"
        >
          <ChevronLeft className="h-4 w-4" />
          Back to Shop
        </Link>
      </div>

      <section className="mx-auto max-w-[1440px] px-4 pb-16 md:px-8 md:pb-24">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16 lg:gap-24">
          <ProductGallery product={product} />
          <ProductDetails product={product} relatedProducts={related} />
        </div>
      </section>

      <RelatedProducts products={related} />
    </div>
  )
}
