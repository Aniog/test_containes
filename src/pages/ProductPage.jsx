import { Link, useParams } from 'react-router-dom'
import ProductGallery from '@/components/product/ProductGallery'
import ProductSummary from '@/components/product/ProductSummary'
import ProductCard from '@/components/home/ProductCard'
import { getProductBySlug, getRelatedProducts } from '@/data/products'

export default function ProductPage() {
  const { slug } = useParams()
  const product = getProductBySlug(slug)

  if (!product) {
    return (
      <div className="bg-velmora-mist px-5 pb-16 pt-32 text-center sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl rounded-[2rem] border border-velmora-line bg-velmora-ivory px-6 py-14 shadow-velmora-sm">
          <p className="text-xs uppercase tracking-[0.35em] text-velmora-bronze">
            Product not found
          </p>
          <h1 className="mt-4 font-serif text-4xl text-velmora-espresso">
            This Velmora piece is no longer available.
          </h1>
          <Link
            to="/shop"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-velmora-bronze px-6 py-3 text-sm font-medium text-velmora-ivory transition hover:bg-velmora-bronze-dark"
          >
            Return to Shop
          </Link>
        </div>
      </div>
    )
  }

  const relatedProducts = getRelatedProducts(product.slug, 3)

  return (
    <div className="bg-velmora-mist pb-16 pt-28 md:pt-32">
      <section className="mx-auto grid w-full max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14 lg:px-8">
        <ProductGallery product={product} />
        <ProductSummary product={product} />
      </section>

      <section className="mx-auto mt-20 w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between border-b border-velmora-line pb-5">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-velmora-bronze">
              Curated for you
            </p>
            <h2 className="mt-3 font-serif text-4xl text-velmora-espresso">
              You may also like
            </h2>
          </div>
          <Link to="/shop" className="hidden text-sm text-velmora-ink/70 md:inline">
            View all pieces
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {relatedProducts.map((relatedProduct) => (
            <ProductCard
              key={relatedProduct.id}
              product={relatedProduct}
              contextId={`related-${product.slug}`}
              sectionId={`related-section-${product.slug}`}
            />
          ))}
        </div>
        <span id={`related-section-${product.slug}`} className="sr-only">
          Related Velmora products
        </span>
      </section>
    </div>
  )
}
