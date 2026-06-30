import { useParams, Navigate } from "react-router-dom"
import { getProductById } from "@/data/products"
import ProductGallery from "@/components/product/ProductGallery"
import ProductInfo from "@/components/product/ProductInfo"
import ProductAccordions from "@/components/product/ProductAccordions"
import RelatedProducts from "@/components/product/RelatedProducts"

export default function ProductDetail() {
  const { id } = useParams()
  const product = getProductById(id)

  if (!product) return <Navigate to="/shop" replace />

  return (
    <main className="bg-ink">
      <section className="pt-24 md:pt-32 pb-12 md:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <ProductGallery product={product} />
            <div>
              <ProductInfo product={product} />
              <ProductAccordions product={product} />
            </div>
          </div>
        </div>
      </section>
      <RelatedProducts product={product} />
    </main>
  )
}
