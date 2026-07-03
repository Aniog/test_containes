import { useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import { ChevronRight } from "lucide-react"
import { getProductById, getRelatedProducts } from "@/data/products"
import ProductGallery from "@/components/product/ProductGallery"
import ProductInfo from "@/components/product/ProductInfo"
import ProductAccordion from "@/components/product/ProductAccordion"
import RelatedProducts from "@/components/product/RelatedProducts"

export default function ProductPage() {
  const { id } = useParams()
  const product = getProductById(id)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" })
  }, [id])

  if (!product) {
    return (
      <main className="container-site pt-32 pb-24 text-center">
        <h1 className="display text-3xl">Product not found</h1>
        <Link to="/shop" className="btn-outline mt-8 inline-flex">
          Browse the collection
        </Link>
      </main>
    )
  }

  const related = getRelatedProducts(product.id, 4)

  return (
    <main className="pt-24 md:pt-28">
      {/* Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className="container-site py-5 text-[11px] uppercase tracking-eyebrow text-ink-muted flex items-center gap-2"
      >
        <Link to="/" className="hover:text-ink-primary">Home</Link>
        <ChevronRight className="h-3 w-3" strokeWidth={1.5} />
        <Link to="/shop" className="hover:text-ink-primary">Shop</Link>
        <ChevronRight className="h-3 w-3" strokeWidth={1.5} />
        <span className="text-ink-secondary">{product.name}</span>
      </nav>

      <div className="container-site">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 lg:gap-24">
          <ProductGallery product={product} />
          <div className="md:sticky md:top-28 md:self-start">
            <ProductInfo product={product} />
          </div>
        </div>
      </div>

      <div className="container-site mt-16 md:mt-24 max-w-3xl">
        <ProductAccordion product={product} />
      </div>

      <RelatedProducts products={related} />
    </main>
  )
}
