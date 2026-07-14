import { Minus, Plus, Star } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { useMemo, useState } from 'react'
import { useCart } from '@/components/CartContext'
import AccordionItem from '@/components/AccordionItem'
import ProductCard from '@/components/ProductCard'
import { getProductBySlug, getRelatedProducts } from '@/data/storefront'

const ProductPage = () => {
  const { slug } = useParams()
  const product = getProductBySlug(slug)
  const [selectedVariant, setSelectedVariant] = useState('Gold Tone')
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState('primary')
  const { addItem } = useCart()

  const relatedProducts = useMemo(
    () => (product ? getRelatedProducts(product.id) : []),
    [product],
  )

  if (!product) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-velmora-ivory px-5 text-center text-velmora-espresso">
        <div className="space-y-5">
          <p className="text-xs uppercase tracking-[0.35em] text-velmora-cacao/55">
            Product not found
          </p>
          <h1 className="font-serif text-4xl">This piece has moved on.</h1>
          <Link
            to="/shop"
            className="inline-flex rounded-full bg-velmora-gold px-6 py-3 text-xs uppercase tracking-[0.3em] text-velmora-espresso"
          >
            Return to shop
          </Link>
        </div>
      </div>
    )
  }

  const imageMap = {
    primary: {
      id: product.imageIds.primary,
      query: product.imageQueryPrimary,
      label: 'Front',
    },
    secondary: {
      id: product.imageIds.secondary,
      query: product.imageQuerySecondary,
      label: 'Detail',
    },
  }

  const activeImage = imageMap[selectedImage]

  return (
    <div className="bg-velmora-ivory px-5 pb-16 pt-28 text-velmora-espresso md:px-8 md:pb-24 md:pt-36">
      <div className="mx-auto max-w-7xl space-y-16">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="space-y-4">
            <div className="overflow-hidden rounded-[34px] bg-velmora-sand/70 shadow-[0_24px_80px_rgba(43,31,25,0.10)]">
              <img
                alt={product.name}
                className="aspect-[4/5] h-full w-full object-cover"
                data-strk-img-id={activeImage.id}
                data-strk-img={activeImage.query}
                data-strk-img-ratio="4x3"
                data-strk-img-width="1200"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
            </div>
            <div className="grid grid-cols-2 gap-4 sm:max-w-md">
              {Object.entries(imageMap).map(([key, image]) => (
                <button
                  key={key}
                  type="button"
                  className={`overflow-hidden rounded-[22px] border bg-white/70 ${
                    selectedImage === key
                      ? 'border-velmora-goldDeep'
                      : 'border-velmora-taupe/30'
                  }`}
                  onClick={() => setSelectedImage(key)}
                >
                  <img
                    alt={`${product.name} ${image.label}`}
                    className="aspect-[4/5] h-full w-full object-cover"
                    data-strk-img-id={`${image.id}-thumb`}
                    data-strk-img={image.query}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="500"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-7 lg:sticky lg:top-32">
            <div className="space-y-4 border-b border-velmora-taupe/20 pb-7">
              <p className="text-xs uppercase tracking-[0.4em] text-velmora-cacao/58">
                {product.category}
              </p>
              <h1 className="font-serif text-4xl uppercase tracking-[0.18em] text-velmora-espresso md:text-5xl">
                {product.name}
              </h1>
              <div className="flex items-center gap-3 text-sm text-velmora-cacao/75">
                <div className="flex items-center gap-1 text-velmora-gold">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} className="h-4 w-4 fill-velmora-gold text-velmora-gold" />
                  ))}
                </div>
                <span>{product.rating}</span>
                <span>({product.reviewCount} reviews)</span>
              </div>
              <p className="text-3xl text-velmora-espresso">${product.price}</p>
              <p className="max-w-xl text-base leading-8 text-velmora-cacao/78">
                {product.description}
              </p>
            </div>

            <div className="space-y-6">
              <div className="space-y-3">
                <p className="text-xs uppercase tracking-[0.35em] text-velmora-cacao/58">
                  Tone
                </p>
                <div className="flex flex-wrap gap-3">
                  {product.variants.map((variant) => (
                    <button
                      key={variant}
                      type="button"
                      className={`rounded-full border px-5 py-3 text-xs uppercase tracking-[0.25em] transition ${
                        selectedVariant === variant
                          ? 'border-velmora-goldDeep bg-velmora-gold/20 text-velmora-espresso'
                          : 'border-velmora-taupe/30 bg-white/70 text-velmora-cacao/74 hover:border-velmora-goldDeep'
                      }`}
                      onClick={() => setSelectedVariant(variant)}
                    >
                      {variant}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <p className="text-xs uppercase tracking-[0.35em] text-velmora-cacao/58">
                  Quantity
                </p>
                <div className="inline-flex items-center rounded-full border border-velmora-taupe/35 bg-white/70 px-2 py-1">
                  <button
                    type="button"
                    className="rounded-full p-3 text-velmora-cacao/70 transition hover:text-velmora-espresso"
                    onClick={() => setQuantity((current) => Math.max(1, current - 1))}
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="min-w-12 text-center text-sm text-velmora-espresso">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    className="rounded-full p-3 text-velmora-cacao/70 transition hover:text-velmora-espresso"
                    onClick={() => setQuantity((current) => current + 1)}
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <button
                type="button"
                className="w-full rounded-full bg-velmora-espresso px-6 py-4 text-xs font-medium uppercase tracking-[0.35em] text-velmora-ivory transition hover:bg-velmora-espressoSoft"
                onClick={() => addItem(product, quantity, selectedVariant)}
              >
                Add to Cart
              </button>
            </div>

            <div className="rounded-[28px] border border-velmora-taupe/25 bg-velmora-cream px-6 py-2 shadow-[0_18px_50px_rgba(43,31,25,0.06)]">
              <AccordionItem title="Description" defaultOpen>
                <p>{product.details.description}</p>
              </AccordionItem>
              <AccordionItem title="Materials & Care">
                <p>{product.details.materials}</p>
              </AccordionItem>
              <AccordionItem title="Shipping & Returns">
                <p>{product.details.shipping}</p>
              </AccordionItem>
            </div>
          </div>
        </div>

        <section className="space-y-8">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.35em] text-velmora-goldDeep">
              You may also like
            </p>
            <h2 className="font-serif text-4xl text-velmora-espresso">
              More Velmora favorites
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {relatedProducts.map((relatedProduct) => (
              <ProductCard key={relatedProduct.id} product={relatedProduct} />
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default ProductPage
