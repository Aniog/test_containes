import { Link, useParams } from 'react-router-dom'
import ProductGallery from '../components/product/ProductGallery'
import ProductInfo from '../components/product/ProductInfo'
import ProductAccordions from '../components/product/ProductAccordions'
import ProductRow from '../components/shared/ProductRow'
import SectionHeading from '../components/shared/SectionHeading'
import { getProductBySlug, getRelatedProducts } from '../data/products'

export default function ProductPage() {
  const { slug } = useParams()
  const product = getProductBySlug(slug)

  if (!product) {
    return (
      <section className="section-shell py-32 md:py-36">
        <div className="section-frame rounded-[34px] bg-white/70 px-8 py-14 text-center shadow-card md:px-12">
          <p className="text-xs uppercase tracking-luxe text-velmora-truffle">Product not found</p>
          <h1 className="mt-4 font-display text-5xl text-velmora-ink">This piece has moved on</h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-velmora-cocoa">
            Browse the current collection to discover another quietly luminous favorite.
          </p>
          <Link to="/shop" className="button-primary mt-8">
            Return to Shop
          </Link>
        </div>
      </section>
    )
  }

  const relatedProducts = getRelatedProducts(product.id)

  return (
    <>
      <section className="section-shell pb-16 pt-32 md:pb-20 md:pt-36">
        <div className="section-frame grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <ProductGallery product={product} />
          <div className="space-y-8">
            <ProductInfo product={product} />
            <ProductAccordions product={product} />
          </div>
        </div>
      </section>

      <section className="section-shell pb-16 md:pb-24">
        <div className="section-frame">
          <SectionHeading
            eyebrow="You May Also Like"
            title="More pieces to pair, stack, and gift"
            description="A considered edit of complementary favorites from the Velmora collection."
            titleId="related-products-title"
          />
          <ProductRow products={relatedProducts} />
        </div>
      </section>
    </>
  )
}
