import React, { useEffect, useMemo } from "react"
import { Link, useParams, Navigate } from "react-router-dom"
import { ChevronRight } from "lucide-react"
import { getProductById, getCategoryLabel } from "@/data/products"
import ProductGallery from "@/components/product/ProductGallery"
import ProductInfo from "@/components/product/ProductInfo"
import RelatedProducts from "@/components/product/RelatedProducts"

export default function ProductDetail() {
  const { productId } = useParams()
  const product = getProductById(productId)

  useEffect(() => {
    if (product) {
      document.title = `${product.name} — Velmora Fine Jewelry`
    }
  }, [product])

  const breadcrumb = useMemo(() => {
    if (!product) return null
    return [
      { label: "Home", to: "/" },
      { label: "Shop", to: "/shop" },
      { label: getCategoryLabel(product.category), to: `/shop?category=${product.category}` },
      { label: product.name },
    ]
  }, [product])

  if (!product) {
    return <Navigate to="/shop" replace />
  }

  return (
    <>
      <article className="pt-24 md:pt-28">
        {/* Breadcrumbs */}
        <nav
          aria-label="Breadcrumb"
          className="container-velmora pt-2"
        >
          <ol className="flex flex-wrap items-center gap-1.5 font-sans text-[11px] uppercase tracking-widest2 text-stone-300">
            {breadcrumb.map((item, i) => (
              <li key={i} className="flex items-center gap-1.5">
                {item.to ? (
                  <Link
                    to={item.to}
                    className="transition-colors hover:text-espresso"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-espresso">{item.label}</span>
                )}
                {i < breadcrumb.length - 1 && (
                  <ChevronRight
                    className="h-3 w-3 text-stone-200"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                )}
              </li>
            ))}
          </ol>
        </nav>

        <div className="container-velmora mt-8 pb-20 md:mt-12 md:pb-28">
          <div className="grid gap-10 md:grid-cols-2 md:gap-14 lg:gap-20">
            <div>
              <ProductGallery product={product} />
            </div>
            <div>
              <ProductInfo product={product} />
            </div>
          </div>
        </div>
      </article>

      <div className="border-t border-sand-200 bg-ivory-50">
        <RelatedProducts currentProductId={product.id} />
      </div>
    </>
  )
}
