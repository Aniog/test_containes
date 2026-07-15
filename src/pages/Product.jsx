import { useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import { ChevronRight } from "lucide-react"
import ProductGallery from "@/components/product/ProductGallery"
import ProductInfo from "@/components/product/ProductInfo"
import RelatedProducts from "@/components/product/RelatedProducts"
import { PRODUCTS } from "@/data/products"

export default function Product() {
  const { id } = useParams()
  const product = PRODUCTS.find((p) => p.id === id) || PRODUCTS[0]

  // Scroll to top on product change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" })
  }, [id])

  return (
    <>
      <div className="bg-canvas pb-16 pt-20 md:pb-24 md:pt-24">
        <div className="container-content">
          {/* Breadcrumbs */}
          <nav
            aria-label="Breadcrumb"
            className="mb-8 flex flex-wrap items-center gap-1 text-[11px] font-medium uppercase tracking-[0.22em] text-inkSoft"
          >
            <Link to="/" className="hover:text-ink">Home</Link>
            <ChevronRight className="h-3 w-3" strokeWidth={1.4} />
            <Link to="/shop" className="hover:text-ink">Shop</Link>
            <ChevronRight className="h-3 w-3" strokeWidth={1.4} />
            <Link
              to={`/shop?category=${product.category}`}
              className="hover:text-ink"
            >
              {product.category}
            </Link>
            <ChevronRight className="h-3 w-3" strokeWidth={1.4} />
            <span className="text-ink">{product.name}</span>
          </nav>

          <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-14">
            <div className="md:col-span-7">
              <ProductGallery product={product} />
            </div>
            <div className="md:col-span-5">
              <ProductInfo product={product} />
            </div>
          </div>
        </div>
      </div>

      <RelatedProducts currentId={product.id} category={product.category} />
    </>
  )
}
