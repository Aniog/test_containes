import { useMemo } from "react"
import { useParams, Link } from "react-router-dom"
import { products } from "@/data/products"
import { ProductGallery } from "@/components/product/ProductGallery"
import { ProductInfo } from "@/components/product/ProductInfo"
import { ProductGrid } from "@/components/shop/ProductGrid"
import { ChevronLeft } from "lucide-react"

export default function ProductDetail() {
  const { id } = useParams()
  const product = useMemo(
    () => products.find((p) => p.id === id),
    [id],
  )

  const related = useMemo(
    () => products.filter((p) => p.id !== id).slice(0, 4),
    [id],
  )

  if (!product) {
    return (
      <main className="mx-auto max-w-7xl px-4 py-32 text-center sm:px-6 lg:px-8">
        <h1 className="font-serif text-3xl text-foreground">Product not found</h1>
        <Link to="/shop" className="mt-4 inline-block text-primary underline">
          Back to shop
        </Link>
      </main>
    )
  }

  return (
    <main className="bg-background pt-24 sm:pt-28">
      <div className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <Link
          to="/shop"
          className="mb-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-foreground"
        >
          <ChevronLeft className="h-4 w-4" /> Back to Shop
        </Link>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <ProductGallery product={product} />
          <ProductInfo product={product} />
        </div>
      </div>

      <section className="border-t border-border bg-background py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center font-serif text-3xl font-medium text-foreground">
            You May Also Like
          </h2>
          <ProductGrid products={related} />
        </div>
      </section>
    </main>
  )
}
