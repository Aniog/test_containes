import { useEffect, useRef } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Container } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'
import { ProductCard } from '@/components/products/ProductCard'
import { getProductBySlug, products } from '@/data/products'
import { CheckCircle2, ArrowLeft, ArrowRight } from 'lucide-react'

const PLACEHOLDER =
  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"%3E%3C/svg%3E'

export default function ProductDetail() {
  const { slug } = useParams()
  const containerRef = useRef(null)
  const product = getProductBySlug(slug)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [slug])

  if (!product) {
    return <Navigate to="/products" replace />
  }

  const related = products
    .filter((p) => p.slug !== product.slug && p.category === product.category)
    .slice(0, 3)
  const fallback = products
    .filter((p) => p.slug !== product.slug)
    .slice(0, 3)
  const relatedProducts = related.length ? related : fallback

  return (
    <div ref={containerRef}>
      {/* Breadcrumb / header */}
      <section className="bg-ink text-ink-fg py-14 md:py-16">
        <Container>
          <nav className="flex items-center gap-2 text-sm text-ink-muted mb-5">
            <Link to="/" className="hover:text-copper">Home</Link>
            <span>/</span>
            <Link to="/products" className="hover:text-copper">Products</Link>
            <span>/</span>
            <span className="text-ink-fg">{product.name}</span>
          </nav>
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-8 bg-copper" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-copper">
              {product.category}
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-3">
            {product.name}
          </h1>
          <p className="text-lg text-ink-muted max-w-2xl">{product.tagline}</p>
        </Container>
      </section>

      {/* Main */}
      <section className="py-16 md:py-20 bg-surface">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <div className="aspect-[4/3] rounded-xl overflow-hidden border border-line bg-white">
              <img
                alt={product.name}
                data-strk-img-id={product.imgId}
                data-strk-img={`[${product.descId}] [${product.titleId}]`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="1000"
                src={PLACEHOLDER}
                className="h-full w-full object-cover"
              />
            </div>

            <div>
              <h2 className="text-2xl font-bold text-ink mb-4">Overview</h2>
              <p className="text-muted leading-relaxed mb-8">
                {product.description}
              </p>

              <h3 className="text-lg font-bold text-ink mb-4">
                Key Features
              </h3>
              <ul className="space-y-3 mb-8">
                {product.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-copper shrink-0 mt-0.5" />
                    <span className="text-muted">{f}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button to="/contact" variant="accent">
                  Request a Quote
                </Button>
                <Button to="/products" variant="outline">
                  <ArrowLeft className="h-4 w-4" />
                  All Products
                </Button>
              </div>
            </div>
          </div>

          {/* Specs */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-ink mb-6">
              Technical Specifications
            </h2>
            <div className="bg-white border border-line rounded-xl overflow-hidden">
              <dl className="divide-y divide-line">
                {product.specs.map((s) => (
                  <div
                    key={s.label}
                    className="grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-4 px-6 py-4"
                  >
                    <dt className="text-sm font-semibold text-ink">
                      {s.label}
                    </dt>
                    <dd className="text-sm text-muted sm:col-span-2">
                      {s.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </Container>
      </section>

      {/* Related */}
      <section className="py-16 md:py-20 bg-white">
        <Container>
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-ink">
              Related Machinery
            </h2>
            <Link
              to="/products"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-steel hover:text-copper transition-colors"
            >
              View all
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {relatedProducts.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </Container>
      </section>
    </div>
  )
}
