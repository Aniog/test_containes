import { Minus, Plus } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import ProductCard from '../components/shop/ProductCard.jsx'
import Stars from '../components/ui/Stars.jsx'
import { getProductBySlug, getRelatedProducts } from '../data/products.js'
import { useCart } from '../context/CartContext.jsx'
import { useStrkImages } from '../hooks/useStrkImages.js'
import { formatPrice } from '../lib/formatters.js'

const ProductPage = () => {
  const { slug } = useParams()
  const { addItem } = useCart()
  const product = getProductBySlug(slug)
  const [selectedVariant, setSelectedVariant] = useState(product?.variants?.[0] ?? 'Gold Tone')
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState(0)
  const [openSection, setOpenSection] = useState('Description')
  const containerRef = useStrkImages([slug, activeImage])

  const gallery = useMemo(() => {
    if (!product) {
      return []
    }

    return [
      {
        id: `${product.id}-gallery-main`,
        label: 'Front view',
      },
      {
        id: `${product.id}-gallery-detail`,
        label: 'Detail view',
      },
      {
        id: `${product.id}-gallery-worn`,
        label: 'Worn view',
      },
    ]
  }, [product])

  useEffect(() => {
    if (!product) {
      return
    }

    setSelectedVariant(product.variants[0])
    setQuantity(1)
    setActiveImage(0)
    setOpenSection('Description')
  }, [product])

  if (!product) {
    return (
      <div className="container-shell flex min-h-screen items-center justify-center bg-velmora-ivory pt-28 text-center">
        <div className="space-y-4">
          <h1 className="text-5xl">Product not found</h1>
          <Link to="/shop" className="premium-button">Return to shop</Link>
        </div>
      </div>
    )
  }

  const accordionItems = [
    { title: 'Description', content: product.description },
    { title: 'Materials & Care', content: `${product.materials.join(' · ')}. ${product.care}` },
    { title: 'Shipping & Returns', content: product.shipping },
  ]

  return (
    <div ref={containerRef} className="bg-velmora-ivory pt-28 md:pt-32">
      <p id={`product-${product.id}-visual-note`} className="sr-only">{product.imageNote}</p>
      <section className="container-shell pb-20 md:pb-28">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-5">
            <div className="velmora-product-gallery overflow-hidden rounded-[2rem] border border-velmora-line bg-velmora-pearl shadow-card">
              <img alt={product.name} className="velmora-image-fill" data-strk-img-id={`${gallery[activeImage].id}-image-c220`} data-strk-img={`[product-${product.id}-visual-note] [product-${product.id}-desc] [product-${product.id}-title] [product-${product.id}-category]`} data-strk-img-ratio="4x3" data-strk-img-width="1200" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {gallery.map((item, index) => (
                <button key={item.id} className={`overflow-hidden rounded-[1.25rem] border ${activeImage === index ? 'border-velmora-ink' : 'border-velmora-line'} bg-velmora-pearl`} onClick={() => setActiveImage(index)}>
                  <div className="aspect-square">
                    <img alt={item.label} className="velmora-image-fill" data-strk-img-id={`${item.id}-thumb-9ad1`} data-strk-img={`[product-${product.id}-visual-note] [product-${product.id}-title] [product-${product.id}-desc] [product-${product.id}-category]`} data-strk-img-ratio="1x1" data-strk-img-width="400" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" />
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-8 rounded-[2rem] border border-velmora-line bg-velmora-pearl/35 p-6 shadow-card md:p-8">
            <div className="space-y-4 border-b border-velmora-line pb-8">
              <p id={`product-${product.id}-category`} className="text-xs uppercase tracking-[0.22em] text-velmora-mocha">{product.category}</p>
              <div className="space-y-3">
                <h1 id={`product-${product.id}-title`} className="text-4xl uppercase leading-tight tracking-[0.22em] md:text-5xl">{product.name}</h1>
                <p className="text-2xl text-velmora-ink">{formatPrice(product.price)}</p>
              </div>
              <Stars rating={product.rating} reviews={product.reviews} />
              <p id={`product-${product.id}-desc`} className="max-w-xl text-base leading-8 text-velmora-mocha">{product.shortDescription}</p>
            </div>

            <div className="space-y-6">
              <div className="space-y-3">
                <p className="text-sm uppercase tracking-[0.18em] text-velmora-mocha">Tone</p>
                <div className="flex flex-wrap gap-3">
                  {product.variants.map((variant) => {
                    const active = variant === selectedVariant
                    return (
                      <button key={variant} className={`rounded-full border px-5 py-3 text-sm uppercase tracking-[0.16em] transition ${active ? 'border-velmora-ink bg-velmora-ink text-velmora-ivory' : 'border-velmora-line bg-velmora-ivory text-velmora-ink hover:border-velmora-ink'}`} onClick={() => setSelectedVariant(variant)}>{variant}</button>
                    )
                  })}
                </div>
              </div>

              <div className="space-y-3">
                <p className="text-sm uppercase tracking-[0.18em] text-velmora-mocha">Quantity</p>
                <div className="flex w-fit items-center rounded-full border border-velmora-line bg-velmora-ivory px-3 py-2">
                  <button className="text-velmora-mocha" onClick={() => setQuantity((value) => Math.max(1, value - 1))} aria-label="Decrease quantity"><Minus className="h-4 w-4" /></button>
                  <span className="min-w-14 text-center text-sm">{quantity}</span>
                  <button className="text-velmora-mocha" onClick={() => setQuantity((value) => value + 1)} aria-label="Increase quantity"><Plus className="h-4 w-4" /></button>
                </div>
              </div>

              <button className="premium-button w-full" onClick={() => addItem(product, selectedVariant, quantity)}>Add to Cart</button>
            </div>

            <div className="space-y-3 border-t border-velmora-line pt-6">
              {accordionItems.map((item) => {
                const active = openSection === item.title
                return (
                  <div key={item.title} className="rounded-[1.4rem] border border-velmora-line bg-velmora-ivory/75 px-5 py-4">
                    <button className="flex w-full items-center justify-between gap-4 text-left" onClick={() => setOpenSection(active ? '' : item.title)}>
                      <span className="text-sm uppercase tracking-[0.18em] text-velmora-ink">{item.title}</span>
                      <span className="text-xl text-velmora-mocha">{active ? '−' : '+'}</span>
                    </button>
                    {active ? <p className="pt-4 text-sm leading-7 text-velmora-mocha">{item.content}</p> : null}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="container-shell pb-20 md:pb-28">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <p className="eyebrow-label">Recommended</p>
            <h2 className="mt-3 text-4xl md:text-5xl">You may also like</h2>
          </div>
          <Link to="/shop" className="hidden text-sm uppercase tracking-[0.18em] text-velmora-mocha transition hover:text-velmora-ink md:block">View all</Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {getRelatedProducts(slug).map((relatedProduct) => <ProductCard key={relatedProduct.id} product={relatedProduct} compact />)}
        </div>
      </section>
    </div>
  )
}

export default ProductPage
