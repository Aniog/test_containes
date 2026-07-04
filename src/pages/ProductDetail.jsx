import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, Minus, Plus, ChevronDown, Check } from 'lucide-react'
import { client, getRows } from '@/lib/db'
import { useCart } from '@/hooks/useCart'
import ProductCard from '@/components/ProductCard'

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="border-b border-divider">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between py-4 font-sans text-sm uppercase tracking-[0.1em] text-foreground"
      >
        {title}
        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? 'max-h-96 pb-4' : 'max-h-0'
        }`}
      >
        <div className="font-sans text-sm text-muted leading-relaxed">{children}</div>
      </div>
    </div>
  )
}

export default function ProductDetail() {
  const { slug } = useParams()
  const [product, setProduct] = useState(null)
  const [related, setRelated] = useState([])
  const [status, setStatus] = useState('loading')
  const [selectedVariant, setSelectedVariant] = useState('')
  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)
  const { addItem } = useCart()

  useEffect(() => {
    async function fetchProduct() {
      setStatus('loading')
      try {
        const { data: response, error } = await client
          .from('Products')
          .select('*')
          .eq('slug', slug)
          .maybeSingle()

        if (error) throw error
        const row = response?.data ?? null
        if (!row) {
          setStatus('notfound')
          return
        }
        const fields = row.data || row
        setProduct(row)
        setSelectedVariant(fields.variants?.[0] || '')
        setQuantity(1)
        setAdded(false)

        // Fetch related products
        const { data: relResponse } = await client
          .from('Products')
          .select('*')
          .eq('category', fields.category)
          .neq('slug', slug)
          .limit(4)
        setRelated(getRows(relResponse))
        setStatus('ready')
      } catch (err) {
        console.error(err)
        setStatus('error')
      }
    }
    fetchProduct()
  }, [slug])

  const handleAddToCart = () => {
    if (!product) return
    const fields = product.data || product
    addItem(fields, selectedVariant, quantity)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  if (status === 'loading') {
    return (
      <div className="min-h-screen bg-base pt-24 flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin" />
      </div>
    )
  }

  if (status === 'notfound') {
    return (
      <div className="min-h-screen bg-base pt-24 px-5 text-center">
        <h1 className="font-serif text-3xl text-foreground mt-20">Product Not Found</h1>
        <Link to="/shop" className="inline-block mt-6 text-accent text-sm uppercase tracking-[0.12em] hover:underline">
          Back to Shop
        </Link>
      </div>
    )
  }

  const fields = product.data || product
  const titleId = `pd-title-${product.id}`
  const descId = `pd-desc-${product.id}`

  return (
    <div className="min-h-screen bg-base pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-16 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Image gallery */}
          <div className="space-y-4">
            <div className="aspect-[4/5] bg-surface-warm overflow-hidden">
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={fields.name}
                data-strk-img-id={`pd-main-${product.id}`}
                data-strk-img={`[${descId}] [${titleId}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="900"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-3">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="aspect-square bg-surface-warm overflow-hidden">
                  <img
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${fields.name} view ${i + 1}`}
                    data-strk-img-id={`pd-thumb-${product.id}-${i}`}
                    data-strk-img={`[${descId}] [${titleId}]`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="300"
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="py-0 md:py-8">
            <div className="flex items-center gap-2 mb-3">
              {fields.rating && (
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-accent text-accent" />
                  <span className="font-sans text-sm">{fields.rating}</span>
                </div>
              )}
              {fields.review_count > 0 && (
                <span className="font-sans text-xs text-muted">({fields.review_count} reviews)</span>
              )}
            </div>

            <h1
              id={titleId}
              className="font-serif text-2xl md:text-3xl uppercase tracking-ultra-wide text-foreground"
            >
              {fields.name}
            </h1>
            <p id={descId} className="hidden">{fields.category} jewelry gold</p>

            <p className="mt-3 font-sans text-xl font-light text-foreground">
              ${fields.price.toFixed(2)}
            </p>

            <p className="mt-6 font-sans text-sm text-muted leading-relaxed">
              {fields.description}
            </p>

            {/* Variant selector */}
            {fields.variants && fields.variants.length > 0 && (
              <div className="mt-8">
                <p className="font-sans text-xs uppercase tracking-[0.12em] text-muted mb-3">
                  Tone
                </p>
                <div className="flex gap-3">
                  {fields.variants.map((variant) => (
                    <button
                      key={variant}
                      onClick={() => setSelectedVariant(variant)}
                      className={`px-5 py-2.5 font-sans text-xs uppercase tracking-[0.1em] border transition-colors ${
                        selectedVariant === variant
                          ? 'border-foreground bg-foreground text-white'
                          : 'border-divider text-foreground hover:border-foreground'
                      }`}
                    >
                      {variant}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mt-8">
              <p className="font-sans text-xs uppercase tracking-[0.12em] text-muted mb-3">
                Quantity
              </p>
              <div className="inline-flex items-center border border-divider">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="p-3 hover:bg-surface-warm transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-12 text-center font-sans text-sm font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="p-3 hover:bg-surface-warm transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className={`w-full mt-8 py-4 font-sans text-xs uppercase tracking-[0.15em] transition-all duration-300 flex items-center justify-center gap-2 ${
                added
                  ? 'bg-green-700 text-white'
                  : 'bg-accent text-white hover:bg-accent-hover'
              }`}
            >
              {added ? (
                <>
                  <Check className="w-4 h-4" />
                  Added to Cart
                </>
              ) : (
                'Add to Cart'
              )}
            </button>

            {/* Accordions */}
            <div className="mt-10">
              <Accordion title="Description" defaultOpen>
                <p>{fields.description}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p>{fields.materials || '18K gold-plated. Nickel-free and hypoallergenic. Avoid contact with water, perfumes, and lotions. Store in a dry place.'}</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p>{fields.shipping_info || 'Free worldwide shipping on all orders. Orders ship within 1-2 business days. 30-day hassle-free returns.'}</p>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related products */}
        {related.length > 0 && (
          <div className="mt-20 md:mt-28">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground text-center mb-10 md:mb-14">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
