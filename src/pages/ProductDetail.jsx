import { useMemo, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Minus, Plus, ShoppingBag, ArrowLeft } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { PRODUCTS, getProductById } from '@/data/products'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import CartDrawer from '@/components/cart/CartDrawer'
import StarRating from '@/components/products/StarRating'
import Accordion from '@/components/products/Accordion'
import { useImageLoader } from '@/hooks/useImageLoader'

const PRODUCT_DETAIL_IMAGES = [
  { id: 'vivid-aura-jewels', name: 'Vivid Aura Jewels', category: 'earrings', imgId: 'pd-vivid-aura-main', titleId: 'pd-title-vivid-aura', descId: 'pd-desc-vivid-aura' },
  { id: 'majestic-flora-nectar', name: 'Majestic Flora Nectar', category: 'necklaces', imgId: 'pd-flora-nectar-main', titleId: 'pd-title-flora-nectar', descId: 'pd-desc-flora-nectar' },
  { id: 'golden-sphere-huggies', name: 'Golden Sphere Huggies', category: 'huggies', imgId: 'pd-sphere-huggies-main', titleId: 'pd-title-sphere-huggies', descId: 'pd-desc-sphere-huggies' },
  { id: 'amber-lace-earrings', name: 'Amber Lace Earrings', category: 'earrings', imgId: 'pd-amber-lace-main', titleId: 'pd-title-amber-lace', descId: 'pd-desc-amber-lace' },
  { id: 'royal-heirloom-set', name: 'Royal Heirloom Set', category: 'sets', imgId: 'pd-heirloom-set-main', titleId: 'pd-title-heirloom-set', descId: 'pd-desc-heirloom-set' },
]

const RELATED_PRODUCTS = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    price: 42,
    rating: 4.8,
    reviewCount: 124,
    category: 'earrings',
    tone: ['gold', 'silver'],
    imgId: 'rel-vivid-aura',
    hoverImgId: 'rel-vivid-aura-hover',
    titleId: 'rel-title-vivid-aura',
    descId: 'rel-desc-vivid-aura',
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    price: 68,
    rating: 4.9,
    reviewCount: 89,
    category: 'necklaces',
    tone: ['gold'],
    imgId: 'rel-flora-nectar',
    hoverImgId: 'rel-flora-nectar-hover',
    titleId: 'rel-title-flora-nectar',
    descId: 'rel-desc-flora-nectar',
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    price: 38,
    rating: 4.7,
    reviewCount: 210,
    category: 'huggies',
    tone: ['gold', 'silver'],
    imgId: 'rel-sphere-huggies',
    hoverImgId: 'rel-sphere-huggies-hover',
    titleId: 'rel-title-sphere-huggies',
    descId: 'rel-desc-sphere-huggies',
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    price: 54,
    rating: 4.6,
    reviewCount: 76,
    category: 'earrings',
    tone: ['gold'],
    imgId: 'rel-amber-lace',
    hoverImgId: 'rel-amber-lace-hover',
    titleId: 'rel-title-amber-lace',
    descId: 'rel-desc-amber-lace',
  },
]

function useHover() {
  const [hovered, setHovered] = useState(false)
  return {
    hovered,
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false),
  }
}

export default function ProductDetail() {
  const { id } = useParams()
  const product = useMemo(() => getProductById(id), [id])
  const imageMeta = PRODUCT_DETAIL_IMAGES.find((p) => p.id === id) || PRODUCT_DETAIL_IMAGES[0]
  const { addItem } = useCart()

  const [tone, setTone] = useState(product?.tone?.[0] || 'gold')
  const [quantity, setQuantity] = useState(1)

  const containerRef = useImageLoader([id])

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream">
        <p className="font-serif text-xl text-espresso">Product not found.</p>
      </div>
    )
  }

  const accordionItems = [
    { title: 'Description', content: product.description },
    { title: 'Materials & Care', content: `${product.materials} ${product.care}` },
    {
      title: 'Shipping & Returns',
      content:
        'Free worldwide shipping on orders over $50. Orders ship within 1–2 business days. We offer 30-day hassle-free returns on unworn items in original packaging.',
    },
  ]

  return (
    <div className="min-h-screen bg-cream" ref={containerRef}>
      <Navbar />
      <main className="pt-24 md:pt-28 pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.12em] text-stone hover:text-gold transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Shop
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            <div className="space-y-4">
              <div className="relative aspect-[4/5] bg-taupe overflow-hidden">
                {PRODUCT_DETAIL_IMAGES.map((item) => (
                  <div
                    key={item.id}
                    className={`absolute inset-0 ${item.id === id ? '' : 'hidden'}`}
                    aria-hidden={item.id !== id}
                  >
                    <span id={item.titleId} className="sr-only">
                      {item.name}
                    </span>
                    <span id={item.descId} className="sr-only">
                      {item.category}
                    </span>
                    <img
                      data-strk-img-id={item.imgId}
                      data-strk-img={`[${item.descId}] [${item.titleId}]`}
                      data-strk-img-ratio="4x5"
                      data-strk-img-width="900"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              {PRODUCT_DETAIL_IMAGES.map((item) => (
                <div
                  key={item.id}
                  className={`grid grid-cols-4 gap-3 ${item.id === id ? '' : 'hidden'}`}
                >
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={`${item.id}-thumb-${i}`}
                      className="relative aspect-square bg-taupe overflow-hidden"
                    >
                      <img
                        data-strk-img-id={`${item.imgId}-thumb-${i}`}
                        data-strk-img={`[${item.descId}] [${item.titleId}]`}
                        data-strk-img-ratio="1x1"
                        data-strk-img-width="300"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        alt={`${item.name} view ${i}`}
                        className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity"
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>

            <div className="lg:sticky lg:top-28 lg:self-start">
              <div className="flex items-center gap-2 mb-3">
                <StarRating rating={product.rating} reviewCount={product.reviewCount} />
              </div>
              <h1
                id={imageMeta.titleId}
                className="font-serif text-3xl md:text-4xl lg:text-5xl tracking-[0.12em] uppercase text-espresso"
              >
                {product.name}
              </h1>
              <p className="mt-2 font-serif text-2xl text-gold">
                ${product.price}
              </p>
              <p
                id={imageMeta.descId}
                className="mt-5 text-stone leading-relaxed"
              >
                {product.description}
              </p>

              <div className="mt-7">
                <span className="text-xs uppercase tracking-[0.12em] text-stone block mb-2">
                  Metal Tone
                </span>
                <div className="flex gap-3">
                  {product.tone.map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setTone(t)}
                      className={`px-5 py-2 text-xs uppercase tracking-[0.12em] border transition-colors ${
                        tone === t
                          ? 'bg-espresso text-cream border-espresso'
                          : 'bg-transparent text-espresso border-warm hover:border-espresso'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-7">
                <span className="text-xs uppercase tracking-[0.12em] text-stone block mb-2">
                  Quantity
                </span>
                <div className="inline-flex items-center border border-warm">
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="p-3 text-espresso hover:bg-taupe transition-colors"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-12 text-center text-espresso">{quantity}</span>
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => q + 1)}
                    className="p-3 text-espresso hover:bg-taupe transition-colors"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <button
                type="button"
                onClick={() => addItem(product, tone, quantity)}
                className="mt-8 w-full bg-gold text-cream py-4 uppercase tracking-[0.14em] text-xs font-semibold hover:bg-gold-dark transition-colors flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-4 h-4" />
                Add to Cart — ${product.price * quantity}
              </button>

              <div className="mt-10">
                <Accordion items={accordionItems} />
              </div>
            </div>
          </div>

          <section className="mt-20 md:mt-28">
            <h2 className="font-serif text-2xl md:text-3xl text-espresso mb-8">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {RELATED_PRODUCTS.filter((p) => p.id !== id).map((product) => {
                const hover = useHover()
                return (
                  <article key={product.id} {...hover} className="group">
                    <Link
                      to={`/product/${product.id}`}
                      className="block relative overflow-hidden bg-taupe aspect-[3/4]"
                    >
                      <img
                        data-strk-img-id={product.imgId}
                        data-strk-img={`[${product.descId}] [${product.titleId}]`}
                        data-strk-img-ratio="3x4"
                        data-strk-img-width="600"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        alt={product.name}
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                          hover.hovered ? 'opacity-0' : 'opacity-100'
                        }`}
                      />
                      <img
                        data-strk-img-id={product.hoverImgId}
                        data-strk-img={`[${product.descId}] [${product.titleId}]`}
                        data-strk-img-ratio="3x4"
                        data-strk-img-width="600"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        alt={product.name}
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                          hover.hovered ? 'opacity-100' : 'opacity-0'
                        }`}
                      />
                      <button
                        type="button"
                        onClick={(e) => {
                          e.preventDefault()
                          addItem(product, product.tone[0])
                        }}
                        className="absolute bottom-3 left-3 right-3 bg-cream text-espresso py-2.5 uppercase tracking-[0.12em] text-[10px] font-semibold opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 flex items-center justify-center gap-2 hover:bg-espresso hover:text-cream"
                      >
                        <ShoppingBag className="w-3.5 h-3.5" />
                        Quick Add
                      </button>
                    </Link>
                    <div className="mt-4 text-center">
                      <h3
                        id={product.titleId}
                        className="font-serif text-sm tracking-[0.18em] uppercase text-espresso"
                      >
                        <Link
                          to={`/product/${product.id}`}
                          className="hover:text-gold transition-colors"
                        >
                          {product.name}
                        </Link>
                      </h3>
                      <p id={product.descId} className="text-xs text-stone mt-1 capitalize">
                        {product.category}
                      </p>
                      <p className="text-sm font-medium text-espresso mt-1">
                        ${product.price}
                      </p>
                    </div>
                  </article>
                )
              })}
            </div>
          </section>
        </div>
      </main>
      <Footer />
      <CartDrawer />
    </div>
  )
}
