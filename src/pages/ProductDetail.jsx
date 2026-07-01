import { useState, useEffect, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, ChevronDown, ChevronUp, Minus, Plus, ShoppingBag } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'

function StarRating({ rating, count }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-0.5">
        {[1, 2, 3, 4, 5].map(i => (
          <Star
            key={i}
            size={13}
            strokeWidth={1}
            color={i <= Math.round(rating) ? '#C9A96E' : '#E0D5C5'}
            fill={i <= Math.round(rating) ? '#C9A96E' : '#E0D5C5'}
          />
        ))}
      </div>
      <span className="font-sans text-xs text-mink">{rating} ({count} reviews)</span>
    </div>
  )
}

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-t border-linen">
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="font-sans text-xs uppercase tracking-widest text-velvet">{title}</span>
        {open ? <ChevronUp size={16} strokeWidth={1.5} className="text-mink" /> : <ChevronDown size={16} strokeWidth={1.5} className="text-mink" />}
      </button>
      {open && (
        <div className="pb-5">
          <p className="font-sans text-sm text-mink leading-relaxed">{children}</p>
        </div>
      )}
    </div>
  )
}

/* Static image gallery — all data-strk-img-id values are literal strings
   so the build-time plugin can resolve them into the config. */
function ProductImageGallery({ product, activeImg, setActiveImg }) {
  // Each product gets 3 static image slots (main + 2 alternates)
  const GALLERIES = {
    1: {
      titleId: 'pdp-title-1', descId: 'pdp-desc-1',
      images: [
        { mainId: 'pdp-1-a', thumbId: 'pdp-1-a-t', query: '[pdp-desc-1] [pdp-title-1]' },
        { mainId: 'pdp-1-b', thumbId: 'pdp-1-b-t', query: '[pdp-title-1] gold ear cuff worn model' },
        { mainId: 'pdp-1-c', thumbId: 'pdp-1-c-t', query: '[pdp-title-1] jewelry detail close-up' },
      ],
    },
    2: {
      titleId: 'pdp-title-2', descId: 'pdp-desc-2',
      images: [
        { mainId: 'pdp-2-a', thumbId: 'pdp-2-a-t', query: '[pdp-desc-2] [pdp-title-2]' },
        { mainId: 'pdp-2-b', thumbId: 'pdp-2-b-t', query: '[pdp-title-2] gold necklace worn model' },
        { mainId: 'pdp-2-c', thumbId: 'pdp-2-c-t', query: '[pdp-title-2] necklace detail close-up' },
      ],
    },
    3: {
      titleId: 'pdp-title-3', descId: 'pdp-desc-3',
      images: [
        { mainId: 'pdp-3-a', thumbId: 'pdp-3-a-t', query: '[pdp-desc-3] [pdp-title-3]' },
        { mainId: 'pdp-3-b', thumbId: 'pdp-3-b-t', query: '[pdp-title-3] gold huggie earrings worn' },
        { mainId: 'pdp-3-c', thumbId: 'pdp-3-c-t', query: '[pdp-title-3] huggie earring detail' },
      ],
    },
    4: {
      titleId: 'pdp-title-4', descId: 'pdp-desc-4',
      images: [
        { mainId: 'pdp-4-a', thumbId: 'pdp-4-a-t', query: '[pdp-desc-4] [pdp-title-4]' },
        { mainId: 'pdp-4-b', thumbId: 'pdp-4-b-t', query: '[pdp-title-4] gold filigree earrings worn' },
        { mainId: 'pdp-4-c', thumbId: 'pdp-4-c-t', query: '[pdp-title-4] earring detail close-up' },
      ],
    },
    5: {
      titleId: 'pdp-title-5', descId: 'pdp-desc-5',
      images: [
        { mainId: 'pdp-5-a', thumbId: 'pdp-5-a-t', query: '[pdp-desc-5] [pdp-title-5]' },
        { mainId: 'pdp-5-b', thumbId: 'pdp-5-b-t', query: '[pdp-title-5] gold jewelry gift set' },
        { mainId: 'pdp-5-c', thumbId: 'pdp-5-c-t', query: '[pdp-title-5] jewelry set detail' },
      ],
    },
  }

  const gallery = GALLERIES[product.id] || GALLERIES[1]

  return (
    <div className="flex flex-col-reverse md:flex-row gap-3">
      {/* Hidden text anchors */}
      <span id={gallery.titleId} className="hidden">{product.name}</span>
      <span id={gallery.descId} className="hidden">{product.shortDescription}</span>

      {/* Thumbnails */}
      <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible">
        {/* Product 1 thumbnails */}
        <button onClick={() => setActiveImg(0)} className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 overflow-hidden border-2 transition-colors ${product.id === 1 ? (activeImg === 0 ? 'border-gold' : 'border-transparent') : 'hidden'}`}>
          <img data-strk-img-id="pdp-1-a-t" data-strk-img="[pdp-desc-1] [pdp-title-1]" data-strk-img-ratio="1x1" data-strk-img-width="120" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" alt="View 1" className="w-full h-full object-cover" />
        </button>
        <button onClick={() => setActiveImg(1)} className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 overflow-hidden border-2 transition-colors ${product.id === 1 ? (activeImg === 1 ? 'border-gold' : 'border-transparent') : 'hidden'}`}>
          <img data-strk-img-id="pdp-1-b-t" data-strk-img="[pdp-title-1] gold ear cuff worn model" data-strk-img-ratio="1x1" data-strk-img-width="120" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" alt="View 2" className="w-full h-full object-cover" />
        </button>
        <button onClick={() => setActiveImg(2)} className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 overflow-hidden border-2 transition-colors ${product.id === 1 ? (activeImg === 2 ? 'border-gold' : 'border-transparent') : 'hidden'}`}>
          <img data-strk-img-id="pdp-1-c-t" data-strk-img="[pdp-title-1] jewelry detail close-up" data-strk-img-ratio="1x1" data-strk-img-width="120" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" alt="View 3" className="w-full h-full object-cover" />
        </button>
        {/* Product 2 thumbnails */}
        <button onClick={() => setActiveImg(0)} className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 overflow-hidden border-2 transition-colors ${product.id === 2 ? (activeImg === 0 ? 'border-gold' : 'border-transparent') : 'hidden'}`}>
          <img data-strk-img-id="pdp-2-a-t" data-strk-img="[pdp-desc-2] [pdp-title-2]" data-strk-img-ratio="1x1" data-strk-img-width="120" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" alt="View 1" className="w-full h-full object-cover" />
        </button>
        <button onClick={() => setActiveImg(1)} className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 overflow-hidden border-2 transition-colors ${product.id === 2 ? (activeImg === 1 ? 'border-gold' : 'border-transparent') : 'hidden'}`}>
          <img data-strk-img-id="pdp-2-b-t" data-strk-img="[pdp-title-2] gold necklace worn model" data-strk-img-ratio="1x1" data-strk-img-width="120" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" alt="View 2" className="w-full h-full object-cover" />
        </button>
        <button onClick={() => setActiveImg(2)} className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 overflow-hidden border-2 transition-colors ${product.id === 2 ? (activeImg === 2 ? 'border-gold' : 'border-transparent') : 'hidden'}`}>
          <img data-strk-img-id="pdp-2-c-t" data-strk-img="[pdp-title-2] necklace detail close-up" data-strk-img-ratio="1x1" data-strk-img-width="120" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" alt="View 3" className="w-full h-full object-cover" />
        </button>
        {/* Product 3 thumbnails */}
        <button onClick={() => setActiveImg(0)} className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 overflow-hidden border-2 transition-colors ${product.id === 3 ? (activeImg === 0 ? 'border-gold' : 'border-transparent') : 'hidden'}`}>
          <img data-strk-img-id="pdp-3-a-t" data-strk-img="[pdp-desc-3] [pdp-title-3]" data-strk-img-ratio="1x1" data-strk-img-width="120" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" alt="View 1" className="w-full h-full object-cover" />
        </button>
        <button onClick={() => setActiveImg(1)} className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 overflow-hidden border-2 transition-colors ${product.id === 3 ? (activeImg === 1 ? 'border-gold' : 'border-transparent') : 'hidden'}`}>
          <img data-strk-img-id="pdp-3-b-t" data-strk-img="[pdp-title-3] gold huggie earrings worn" data-strk-img-ratio="1x1" data-strk-img-width="120" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" alt="View 2" className="w-full h-full object-cover" />
        </button>
        <button onClick={() => setActiveImg(2)} className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 overflow-hidden border-2 transition-colors ${product.id === 3 ? (activeImg === 2 ? 'border-gold' : 'border-transparent') : 'hidden'}`}>
          <img data-strk-img-id="pdp-3-c-t" data-strk-img="[pdp-title-3] huggie earring detail" data-strk-img-ratio="1x1" data-strk-img-width="120" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" alt="View 3" className="w-full h-full object-cover" />
        </button>
        {/* Product 4 thumbnails */}
        <button onClick={() => setActiveImg(0)} className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 overflow-hidden border-2 transition-colors ${product.id === 4 ? (activeImg === 0 ? 'border-gold' : 'border-transparent') : 'hidden'}`}>
          <img data-strk-img-id="pdp-4-a-t" data-strk-img="[pdp-desc-4] [pdp-title-4]" data-strk-img-ratio="1x1" data-strk-img-width="120" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" alt="View 1" className="w-full h-full object-cover" />
        </button>
        <button onClick={() => setActiveImg(1)} className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 overflow-hidden border-2 transition-colors ${product.id === 4 ? (activeImg === 1 ? 'border-gold' : 'border-transparent') : 'hidden'}`}>
          <img data-strk-img-id="pdp-4-b-t" data-strk-img="[pdp-title-4] gold filigree earrings worn" data-strk-img-ratio="1x1" data-strk-img-width="120" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" alt="View 2" className="w-full h-full object-cover" />
        </button>
        <button onClick={() => setActiveImg(2)} className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 overflow-hidden border-2 transition-colors ${product.id === 4 ? (activeImg === 2 ? 'border-gold' : 'border-transparent') : 'hidden'}`}>
          <img data-strk-img-id="pdp-4-c-t" data-strk-img="[pdp-title-4] earring detail close-up" data-strk-img-ratio="1x1" data-strk-img-width="120" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" alt="View 3" className="w-full h-full object-cover" />
        </button>
        {/* Product 5 thumbnails */}
        <button onClick={() => setActiveImg(0)} className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 overflow-hidden border-2 transition-colors ${product.id === 5 ? (activeImg === 0 ? 'border-gold' : 'border-transparent') : 'hidden'}`}>
          <img data-strk-img-id="pdp-5-a-t" data-strk-img="[pdp-desc-5] [pdp-title-5]" data-strk-img-ratio="1x1" data-strk-img-width="120" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" alt="View 1" className="w-full h-full object-cover" />
        </button>
        <button onClick={() => setActiveImg(1)} className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 overflow-hidden border-2 transition-colors ${product.id === 5 ? (activeImg === 1 ? 'border-gold' : 'border-transparent') : 'hidden'}`}>
          <img data-strk-img-id="pdp-5-b-t" data-strk-img="[pdp-title-5] gold jewelry gift set" data-strk-img-ratio="1x1" data-strk-img-width="120" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" alt="View 2" className="w-full h-full object-cover" />
        </button>
        <button onClick={() => setActiveImg(2)} className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 overflow-hidden border-2 transition-colors ${product.id === 5 ? (activeImg === 2 ? 'border-gold' : 'border-transparent') : 'hidden'}`}>
          <img data-strk-img-id="pdp-5-c-t" data-strk-img="[pdp-title-5] jewelry set detail" data-strk-img-ratio="1x1" data-strk-img-width="120" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" alt="View 3" className="w-full h-full object-cover" />
        </button>
      </div>

      {/* Main image — all 15 slots always in DOM, only active product+index visible */}
      <div className="flex-1 relative overflow-hidden bg-parchment aspect-[3/4]">
        {/* Product 1 */}
        <img data-strk-img-id="pdp-1-a" data-strk-img="[pdp-desc-1] [pdp-title-1]" data-strk-img-ratio="3x4" data-strk-img-width="800" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" alt={product.name} className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${product.id === 1 && activeImg === 0 ? 'opacity-100' : 'opacity-0'}`} />
        <img data-strk-img-id="pdp-1-b" data-strk-img="[pdp-title-1] gold ear cuff worn model" data-strk-img-ratio="3x4" data-strk-img-width="800" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" alt={product.name} className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${product.id === 1 && activeImg === 1 ? 'opacity-100' : 'opacity-0'}`} />
        <img data-strk-img-id="pdp-1-c" data-strk-img="[pdp-title-1] jewelry detail close-up" data-strk-img-ratio="3x4" data-strk-img-width="800" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" alt={product.name} className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${product.id === 1 && activeImg === 2 ? 'opacity-100' : 'opacity-0'}`} />
        {/* Product 2 */}
        <img data-strk-img-id="pdp-2-a" data-strk-img="[pdp-desc-2] [pdp-title-2]" data-strk-img-ratio="3x4" data-strk-img-width="800" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" alt={product.name} className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${product.id === 2 && activeImg === 0 ? 'opacity-100' : 'opacity-0'}`} />
        <img data-strk-img-id="pdp-2-b" data-strk-img="[pdp-title-2] gold necklace worn model" data-strk-img-ratio="3x4" data-strk-img-width="800" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" alt={product.name} className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${product.id === 2 && activeImg === 1 ? 'opacity-100' : 'opacity-0'}`} />
        <img data-strk-img-id="pdp-2-c" data-strk-img="[pdp-title-2] necklace detail close-up" data-strk-img-ratio="3x4" data-strk-img-width="800" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" alt={product.name} className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${product.id === 2 && activeImg === 2 ? 'opacity-100' : 'opacity-0'}`} />
        {/* Product 3 */}
        <img data-strk-img-id="pdp-3-a" data-strk-img="[pdp-desc-3] [pdp-title-3]" data-strk-img-ratio="3x4" data-strk-img-width="800" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" alt={product.name} className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${product.id === 3 && activeImg === 0 ? 'opacity-100' : 'opacity-0'}`} />
        <img data-strk-img-id="pdp-3-b" data-strk-img="[pdp-title-3] gold huggie earrings worn" data-strk-img-ratio="3x4" data-strk-img-width="800" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" alt={product.name} className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${product.id === 3 && activeImg === 1 ? 'opacity-100' : 'opacity-0'}`} />
        <img data-strk-img-id="pdp-3-c" data-strk-img="[pdp-title-3] huggie earring detail" data-strk-img-ratio="3x4" data-strk-img-width="800" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" alt={product.name} className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${product.id === 3 && activeImg === 2 ? 'opacity-100' : 'opacity-0'}`} />
        {/* Product 4 */}
        <img data-strk-img-id="pdp-4-a" data-strk-img="[pdp-desc-4] [pdp-title-4]" data-strk-img-ratio="3x4" data-strk-img-width="800" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" alt={product.name} className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${product.id === 4 && activeImg === 0 ? 'opacity-100' : 'opacity-0'}`} />
        <img data-strk-img-id="pdp-4-b" data-strk-img="[pdp-title-4] gold filigree earrings worn" data-strk-img-ratio="3x4" data-strk-img-width="800" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" alt={product.name} className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${product.id === 4 && activeImg === 1 ? 'opacity-100' : 'opacity-0'}`} />
        <img data-strk-img-id="pdp-4-c" data-strk-img="[pdp-title-4] earring detail close-up" data-strk-img-ratio="3x4" data-strk-img-width="800" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" alt={product.name} className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${product.id === 4 && activeImg === 2 ? 'opacity-100' : 'opacity-0'}`} />
        {/* Product 5 */}
        <img data-strk-img-id="pdp-5-a" data-strk-img="[pdp-desc-5] [pdp-title-5]" data-strk-img-ratio="3x4" data-strk-img-width="800" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" alt={product.name} className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${product.id === 5 && activeImg === 0 ? 'opacity-100' : 'opacity-0'}`} />
        <img data-strk-img-id="pdp-5-b" data-strk-img="[pdp-title-5] gold jewelry gift set" data-strk-img-ratio="3x4" data-strk-img-width="800" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" alt={product.name} className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${product.id === 5 && activeImg === 1 ? 'opacity-100' : 'opacity-0'}`} />
        <img data-strk-img-id="pdp-5-c" data-strk-img="[pdp-title-5] jewelry set detail" data-strk-img-ratio="3x4" data-strk-img-width="800" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" alt={product.name} className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${product.id === 5 && activeImg === 2 ? 'opacity-100' : 'opacity-0'}`} />
      </div>
    </div>
  )
}

function RelatedProducts({ currentId }) {
  const containerRef = useRef(null)
  const related = products.filter(p => p.id !== currentId).slice(0, 4)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [currentId])

  return (
    <section ref={containerRef} className="py-16 md:py-20 border-t border-linen">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-10">
          <p className="font-sans text-xs uppercase tracking-widest text-gold mb-2">You May Also Like</p>
          <h3 className="font-serif text-2xl md:text-3xl text-velvet font-light">Complete Your Look</h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {related.map(p => (
            <Link key={p.id} to={`/product/${p.slug}`} className="group">
              <div className="relative overflow-hidden bg-parchment aspect-[3/4] mb-3">
                <img
                  data-strk-img-id={`rel-${p.imgId}`}
                  data-strk-img={`[rel-desc-${p.id}] [rel-title-${p.id}]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={p.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <p id={`rel-title-${p.id}`} className="font-sans text-xs uppercase tracking-widest2 text-velvet group-hover:text-gold transition-colors mb-1">
                {p.name}
              </p>
              <p id={`rel-desc-${p.id}`} className="hidden">{p.shortDescription}</p>
              <p className="font-sans text-sm text-velvet">${p.price}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function ProductDetail() {
  const { slug } = useParams()
  const product = products.find(p => p.slug === slug) || products[0]
  const { addItem } = useCart()

  const [selectedVariant, setSelectedVariant] = useState(product.variants[0])
  const [quantity, setQuantity] = useState(1)
  const [activeImg, setActiveImg] = useState(0)
  const [added, setAdded] = useState(false)
  const containerRef = useRef(null)

  useEffect(() => {
    setSelectedVariant(product.variants[0])
    setQuantity(1)
    setActiveImg(0)
    setAdded(false)
  }, [slug, product])

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [slug])

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <div ref={containerRef} className="bg-cream min-h-screen pt-20">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
        <div className="flex items-center gap-2">
          <Link to="/" className="font-sans text-xs text-mink hover:text-gold transition-colors">Home</Link>
          <span className="text-linen text-xs">/</span>
          <Link to="/shop" className="font-sans text-xs text-mink hover:text-gold transition-colors">Shop</Link>
          <span className="text-linen text-xs">/</span>
          <span className="font-sans text-xs text-velvet">{product.name}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Left: Image gallery — static render of all products */}
          <ProductImageGallery product={product} activeImg={activeImg} setActiveImg={setActiveImg} />

          {/* Right: Product info */}
          <div className="flex flex-col">
            {/* Tags */}
            <div className="flex gap-2 mb-4">
              {product.tags.includes('bestseller') && (
                <span className="bg-gold text-velvet font-sans text-[9px] uppercase tracking-widest px-2 py-0.5">Bestseller</span>
              )}
              {product.tags.includes('new') && (
                <span className="bg-velvet text-cream font-sans text-[9px] uppercase tracking-widest px-2 py-0.5">New</span>
              )}
            </div>

            {/* Name */}
            <h1 className="font-sans text-sm md:text-base uppercase tracking-widest2 text-velvet font-medium mb-3 leading-tight">
              {product.name}
            </h1>

            {/* Rating */}
            <StarRating rating={product.rating} count={product.reviewCount} />

            {/* Price */}
            <div className="flex items-center gap-3 mt-4 mb-6">
              <span className="font-serif text-3xl text-velvet font-light">${product.price}</span>
              {product.originalPrice && (
                <span className="font-sans text-base text-mink line-through">${product.originalPrice}</span>
              )}
            </div>

            <hr className="border-linen mb-6" />

            {/* Short description */}
            <p className="font-sans text-sm text-mink leading-relaxed mb-6">
              {product.shortDescription}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="font-sans text-xs uppercase tracking-widest text-velvet mb-3">
                Finish: <span className="text-mink normal-case tracking-normal">{selectedVariant}</span>
              </p>
              <div className="flex gap-2">
                {product.variants.map(v => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`px-4 py-2 font-sans text-xs uppercase tracking-widest border transition-colors duration-200 ${
                      selectedVariant === v
                        ? 'border-velvet bg-velvet text-cream'
                        : 'border-linen text-mink hover:border-velvet hover:text-velvet'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <p className="font-sans text-xs uppercase tracking-widest text-velvet mb-3">Quantity</p>
              <div className="flex items-center gap-0 border border-linen w-fit">
                <button
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center text-mink hover:text-velvet hover:bg-parchment transition-colors"
                >
                  <Minus size={14} strokeWidth={1.5} />
                </button>
                <span className="w-10 h-10 flex items-center justify-center font-sans text-sm text-velvet border-x border-linen">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(q => q + 1)}
                  className="w-10 h-10 flex items-center justify-center text-mink hover:text-velvet hover:bg-parchment transition-colors"
                >
                  <Plus size={14} strokeWidth={1.5} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className={`w-full py-4 font-sans text-xs uppercase tracking-widest flex items-center justify-center gap-3 transition-all duration-300 ${
                added
                  ? 'bg-velvet/80 text-cream cursor-default'
                  : 'bg-gold text-velvet hover:bg-gold-dark'
              }`}
            >
              <ShoppingBag size={15} strokeWidth={1.5} />
              {added ? 'Added to Cart' : 'Add to Cart'}
            </button>

            {/* Material badge */}
            <p className="font-sans text-xs text-mink text-center mt-4">
              {product.material} · Hypoallergenic · Tarnish-Resistant
            </p>

            {/* Accordions */}
            <div className="mt-8">
              <Accordion title="Description">
                {product.description}
              </Accordion>
              <Accordion title="Materials & Care">
                {product.care}
              </Accordion>
              <Accordion title="Shipping & Returns">
                {product.shipping}
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      <RelatedProducts currentId={product.id} />
    </div>
  )
}

