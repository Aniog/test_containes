import React, { useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import { ChevronRight } from "lucide-react"
import { findProduct } from "@/data/products"
import ProductGallery from "@/components/product/ProductGallery"
import ProductInfo from "@/components/product/ProductInfo"
import Accordion from "@/components/ui/Accordion"
import RelatedProducts from "@/components/product/RelatedProducts"

export default function ProductDetail() {
  const { id } = useParams()
  const product = findProduct(id)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" })
  }, [id])

  if (!product) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center px-5 text-center">
        <p className="font-serif text-3xl text-ink">Piece not found</p>
        <Link
          to="/shop"
          className="mt-6 text-[11px] tracking-widest3 uppercase text-ink hover:text-champagne-deep"
        >
          Back to Shop
        </Link>
      </div>
    )
  }

  const accordionItems = [
    {
      id: "description",
      title: "Description",
      content: <p>{product.description}</p>,
    },
    {
      id: "materials",
      title: "Materials & Care",
      content: (
        <>
          <p>
            <span className="text-ink font-medium">Materials — </span>
            {product.materialsAndCare.materials}
          </p>
          <p>
            <span className="text-ink font-medium">Care — </span>
            {product.materialsAndCare.care}
          </p>
        </>
      ),
    },
    {
      id: "shipping",
      title: "Shipping & Returns",
      content: (
        <>
          <p>
            <span className="text-ink font-medium">Shipping — </span>
            {product.shippingAndReturns.shipping}
          </p>
          <p>
            <span className="text-ink font-medium">Returns — </span>
            {product.shippingAndReturns.returns}
          </p>
        </>
      ),
    },
  ]

  return (
    <>
      {/* Breadcrumb */}
      <div className="pt-24 md:pt-28 bg-bone">
        <div className="max-w-8xl mx-auto px-5 md:px-8 lg:px-12 py-4">
          <nav aria-label="Breadcrumb" className="text-[10px] tracking-widest3 uppercase text-muted">
            <ol className="flex items-center gap-2 flex-wrap">
              <li>
                <Link to="/" className="hover:text-ink transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <ChevronRight className="w-3 h-3 inline-block text-muted/60" strokeWidth={1.5} />
              </li>
              <li>
                <Link to="/shop" className="hover:text-ink transition-colors">
                  Shop
                </Link>
              </li>
              <li>
                <ChevronRight className="w-3 h-3 inline-block text-muted/60" strokeWidth={1.5} />
              </li>
              <li className="text-ink truncate max-w-[200px] md:max-w-none">
                {product.name}
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <section className="bg-bone pb-16 md:pb-24">
        <div className="max-w-8xl mx-auto px-5 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 xl:gap-20">
            <ProductGallery product={product} />
            <div className="lg:pt-4">
              <ProductInfo product={product} />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-bone pb-20 md:pb-28">
        <div className="max-w-3xl mx-auto px-5 md:px-8 lg:px-12">
          <Accordion items={accordionItems} defaultOpen={0} />
        </div>
      </section>

      <RelatedProducts productId={product.id} />
    </>
  )
}
