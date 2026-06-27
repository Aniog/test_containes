import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import { useImageLoader } from '@/hooks/useImageLoader'
import { useCart } from '@/context/CartContext'
import StarRating from '@/components/products/StarRating'

const BESTSELLERS = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    price: 42,
    rating: 4.8,
    reviewCount: 124,
    category: 'earrings',
    tone: ['gold', 'silver'],
    imgId: 'bs-vivid-aura-1a2b3c',
    hoverImgId: 'bs-vivid-aura-hover-4d5e6f',
    titleId: 'bs-title-vivid-aura',
    descId: 'bs-desc-vivid-aura',
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    price: 68,
    rating: 4.9,
    reviewCount: 89,
    category: 'necklaces',
    tone: ['gold'],
    imgId: 'bs-flora-nectar-2b3c4d',
    hoverImgId: 'bs-flora-nectar-hover-5e6f7a',
    titleId: 'bs-title-flora-nectar',
    descId: 'bs-desc-flora-nectar',
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    price: 38,
    rating: 4.7,
    reviewCount: 210,
    category: 'huggies',
    tone: ['gold', 'silver'],
    imgId: 'bs-sphere-huggies-3c4d5e',
    hoverImgId: 'bs-sphere-huggies-hover-6f7a8b',
    titleId: 'bs-title-sphere-huggies',
    descId: 'bs-desc-sphere-huggies',
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    price: 54,
    rating: 4.6,
    reviewCount: 76,
    category: 'earrings',
    tone: ['gold'],
    imgId: 'bs-amber-lace-4d5e6f',
    hoverImgId: 'bs-amber-lace-hover-7a8b9c',
    titleId: 'bs-title-amber-lace',
    descId: 'bs-desc-amber-lace',
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    price: 95,
    rating: 5.0,
    reviewCount: 52,
    category: 'sets',
    tone: ['gold'],
    imgId: 'bs-heirloom-set-5e6f7a',
    hoverImgId: 'bs-heirloom-set-hover-8b9c0d',
    titleId: 'bs-title-heirloom-set',
    descId: 'bs-desc-heirloom-set',
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

export default function Bestsellers() {
  const containerRef = useImageLoader()
  const { addItem } = useCart()

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="font-serif text-3xl md:text-4xl text-espresso">
            Bestsellers
          </h2>
          <p className="mt-3 text-sm text-stone max-w-md mx-auto">
            Our most-loved pieces, chosen for their effortless elegance.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {BESTSELLERS.map((product) => {
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
                  <div className="flex items-center justify-center gap-2 mt-2">
                    <StarRating rating={product.rating} size={12} />
                    <span className="text-sm font-medium text-espresso">
                      ${product.price}
                    </span>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
