import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Star, ShoppingBag } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { useCart } from '@/context/CartContext'
import { products } from '@/data/products'

function RelatedCard({ product }) {
  const { addItem } = useCart()
  const [added, setAdded] = useState(false)

  const handleAddToCart = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product, 'gold', 1)
    setAdded(true)
    setTimeout(() => setAdded(false), 1500)
  }

  return (
    <Link to={`/product/${product.id}`} className="group block">
      <div className="relative aspect-[3/4] bg-[#E8E4DF] overflow-hidden mb-3">
        <div
          className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
          data-strk-bg-id={`related-${product.images[0].id}`}
          data-strk-bg={`[${product.id}-desc] [${product.id}-title]`}
          data-strk-bg-ratio={product.images[0].ratio}
          data-strk-bg-width={product.images[0].width}
        />
        <div
          className={`absolute bottom-3 left-3 right-3 transition-all duration-300 ${
            added ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0'
          }`}
        >
          <button
            onClick={handleAddToCart}
            className={`w-full py-2.5 text-xs tracking-widest uppercase font-medium transition-all duration-300 flex items-center justify-center gap-2 ${
              added
                ? 'bg-[#4A7C59] text-white'
                : 'bg-white/95 text-[#1A1A1A] hover:bg-[#B8860B] hover:text-white'
            }`}
          >
            {added ? 'Added' : <><ShoppingBag className="w-3.5 h-3.5" /> Add to Bag</>}
          </button>
        </div>
      </div>
      <h3
        className="text-sm tracking-widest uppercase text-[#1A1A1A] group-hover:text-[#B8860B] transition-colors text-center"
        style={{ fontFamily: "'Cormorant Garamond', serif" }}
      >
        {product.name}
      </h3>
      <div className="flex items-center justify-center gap-1 mt-1">
        <Star className="w-3 h-3 fill-[#C9A96E] text-[#C9A96E]" />
        <span className="text-xs text-[#6B6560]">{product.rating}</span>
      </div>
      <p className="mt-1 text-sm text-[#1A1A1A] font-medium text-center">${product.price.toFixed(2)}</p>
    </Link>
  )
}

export default function RelatedProducts({ product }) {
  const containerRef = useRef(null)
  const related = products.filter((p) => product.related?.includes(p.id))

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  if (related.length === 0) return null

  return (
    <section ref={containerRef} className="mt-16 pt-16 border-t border-[#E8E4DF]">
      <h2
        className="font-serif text-2xl md:text-3xl text-[#1A1A1A] tracking-wide text-center mb-10"
        style={{ fontFamily: "'Cormorant Garamond', serif" }}
      >
        You May Also Like
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {related.map((p) => (
          <RelatedCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  )
}
