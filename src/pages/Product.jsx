import { useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import { ChevronRight } from "lucide-react"
import ProductGallery from "@/components/product/ProductGallery"
import ProductInfo from "@/components/product/ProductInfo"
import RelatedProducts from "@/components/product/RelatedProducts"
import { getProductBySlug } from "@/lib/products"

export default function Product() {
  const { slug } = useParams()
  const product = getProductBySlug(slug)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" })
  }, [slug])

  if (!product) {
    return (
      <section className="section pt-40 bg-cream">
        <div className="max-w-md mx-auto px-5 text-center">
          <p className="eyebrow text-gold">Not Found</p>
          <h1 className="mt-4 font-serif text-ink text-4xl">We couldn't find that piece.</h1>
          <p className="mt-3 text-muted">
            It may have sold out or moved. Browse the rest of the collection.
          </p>
          <Link to="/shop" className="btn btn-primary mt-7">
            Shop the Collection
          </Link>
        </div>
      </section>
    )
  }

  return (
    <>
      <section className="pt-28 md:pt-32 bg-cream">
        <div className="max-w-8xl mx-auto px-5 md:px-8 lg:px-12">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="py-4 text-[11px] uppercase tracking-wider text-muted">
            <ol className="flex items-center gap-2">
              <li><Link to="/" className="hover:text-ink">Home</Link></li>
              <li><ChevronRight size={12} strokeWidth={1.5} /></li>
              <li><Link to="/shop" className="hover:text-ink">Shop</Link></li>
              <li><ChevronRight size={12} strokeWidth={1.5} /></li>
              <li><Link to={`/shop?cat=${product.category}`} className="hover:text-ink capitalize">{product.category}</Link></li>
              <li><ChevronRight size={12} strokeWidth={1.5} /></li>
              <li className="text-ink truncate">{product.name}</li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 py-8 md:py-10">
            <ProductGallery product={product} />
            <div className="lg:pl-4">
              <ProductInfo product={product} />
            </div>
          </div>
        </div>
      </section>

      <RelatedProducts productId={product.id} />
    </>
  )
}
