import React from 'react'
import { getStrkImage } from '@/lib/strkImages.js'

const imageClass = 'aspect-[4/5] w-full object-cover'
const thumbClass = 'h-24 w-20 object-cover lg:h-28 lg:w-24'

function StaticImage({ productId, slot, className, alt }) {
  if (productId === 'vivid-aura-jewels') {
    if (slot === 'main') return <img className={className} alt={alt} data-strk-img-id="detail-vivid-main-a1b2c3" data-strk-img="[detail-vivid-desc] [detail-vivid-title]" data-strk-img-ratio="3x4" data-strk-img-width="1000" src={getStrkImage('detail-vivid-main-a1b2c3')} />
    if (slot === 'worn') return <img className={className} alt={alt} data-strk-img-id="detail-vivid-worn-a1b2c3" data-strk-img="[detail-vivid-desc] [detail-vivid-title]" data-strk-img-ratio="3x4" data-strk-img-width="1000" src={getStrkImage('detail-vivid-worn-a1b2c3')} />
    return <img className={className} alt={alt} data-strk-img-id="detail-vivid-close-a1b2c3" data-strk-img="[detail-vivid-desc] [detail-vivid-title]" data-strk-img-ratio="3x4" data-strk-img-width="1000" src={getStrkImage('detail-vivid-close-a1b2c3')} />
  }

  if (productId === 'majestic-flora-nectar') {
    if (slot === 'main') return <img className={className} alt={alt} data-strk-img-id="detail-flora-main-d4e5f6" data-strk-img="[detail-flora-desc] [detail-flora-title]" data-strk-img-ratio="3x4" data-strk-img-width="1000" src={getStrkImage('detail-flora-main-d4e5f6')} />
    if (slot === 'worn') return <img className={className} alt={alt} data-strk-img-id="detail-flora-worn-d4e5f6" data-strk-img="[detail-flora-desc] [detail-flora-title]" data-strk-img-ratio="3x4" data-strk-img-width="1000" src={getStrkImage('detail-flora-worn-d4e5f6')} />
    return <img className={className} alt={alt} data-strk-img-id="detail-flora-close-d4e5f6" data-strk-img="[detail-flora-desc] [detail-flora-title]" data-strk-img-ratio="3x4" data-strk-img-width="1000" src={getStrkImage('detail-flora-close-d4e5f6')} />
  }

  if (productId === 'golden-sphere-huggies') {
    if (slot === 'main') return <img className={className} alt={alt} data-strk-img-id="detail-sphere-main-g7h8i9" data-strk-img="[detail-sphere-desc] [detail-sphere-title]" data-strk-img-ratio="3x4" data-strk-img-width="1000" src={getStrkImage('detail-sphere-main-g7h8i9')} />
    if (slot === 'worn') return <img className={className} alt={alt} data-strk-img-id="detail-sphere-worn-g7h8i9" data-strk-img="[detail-sphere-desc] [detail-sphere-title]" data-strk-img-ratio="3x4" data-strk-img-width="1000" src={getStrkImage('detail-sphere-worn-g7h8i9')} />
    return <img className={className} alt={alt} data-strk-img-id="detail-sphere-close-g7h8i9" data-strk-img="[detail-sphere-desc] [detail-sphere-title]" data-strk-img-ratio="3x4" data-strk-img-width="1000" src={getStrkImage('detail-sphere-close-g7h8i9')} />
  }

  if (productId === 'amber-lace-earrings') {
    if (slot === 'main') return <img className={className} alt={alt} data-strk-img-id="detail-amber-main-j1k2l3" data-strk-img="[detail-amber-desc] [detail-amber-title]" data-strk-img-ratio="3x4" data-strk-img-width="1000" src={getStrkImage('detail-amber-main-j1k2l3')} />
    if (slot === 'worn') return <img className={className} alt={alt} data-strk-img-id="detail-amber-worn-j1k2l3" data-strk-img="[detail-amber-desc] [detail-amber-title]" data-strk-img-ratio="3x4" data-strk-img-width="1000" src={getStrkImage('detail-amber-worn-j1k2l3')} />
    return <img className={className} alt={alt} data-strk-img-id="detail-amber-close-j1k2l3" data-strk-img="[detail-amber-desc] [detail-amber-title]" data-strk-img-ratio="3x4" data-strk-img-width="1000" src={getStrkImage('detail-amber-close-j1k2l3')} />
  }

  if (slot === 'main') return <img className={className} alt={alt} data-strk-img-id="detail-heirloom-main-m4n5o6" data-strk-img="[detail-heirloom-desc] [detail-heirloom-title]" data-strk-img-ratio="3x4" data-strk-img-width="1000" src={getStrkImage('detail-heirloom-main-m4n5o6')} />
  if (slot === 'worn') return <img className={className} alt={alt} data-strk-img-id="detail-heirloom-worn-m4n5o6" data-strk-img="[detail-heirloom-desc] [detail-heirloom-title]" data-strk-img-ratio="3x4" data-strk-img-width="1000" src={getStrkImage('detail-heirloom-worn-m4n5o6')} />
  return <img className={className} alt={alt} data-strk-img-id="detail-heirloom-close-m4n5o6" data-strk-img="[detail-heirloom-desc] [detail-heirloom-title]" data-strk-img-ratio="3x4" data-strk-img-width="1000" src={getStrkImage('detail-heirloom-close-m4n5o6')} />
}

export default function ProductDetailGallery({ product, selectedImage, onSelect }) {
  return (
    <div className="grid gap-4 lg:grid-cols-[96px_1fr]">
      <div className="sr-only" aria-hidden="true">
        <span id="detail-vivid-title">Vivid Aura Jewels</span>
        <span id="detail-vivid-desc">A sculptural gold ear cuff finished with a single crystal accent for everyday glow.</span>
        <span id="detail-flora-title">Majestic Flora Nectar</span>
        <span id="detail-flora-desc">A delicate floral crystal necklace with warm gold details and soft multicolor sparkle.</span>
        <span id="detail-sphere-title">Golden Sphere Huggies</span>
        <span id="detail-sphere-desc">Chunky gold dome huggie earrings with a smooth high-polish profile for daily wear.</span>
        <span id="detail-amber-title">Amber Lace Earrings</span>
        <span id="detail-amber-desc">Textured gold filigree drop earrings with an heirloom-inspired lace finish.</span>
        <span id="detail-heirloom-title">Royal Heirloom Set</span>
        <span id="detail-heirloom-desc">A gift-boxed earring and necklace set with timeless gold shine and polished crystal detail.</span>
      </div>

      <div className="order-2 flex gap-3 lg:order-1 lg:flex-col">
        {['main', 'worn', 'detail'].map((image) => (
          <button key={image} type="button" className={`velmora-focus overflow-hidden border bg-velmora-blush ${selectedImage === image ? 'border-velmora-espresso' : 'border-transparent'}`} onClick={() => onSelect(image)}>
            <StaticImage productId={product.id} slot={image} className={thumbClass} alt={`${product.name} ${image}`} />
          </button>
        ))}
      </div>
      <div className="order-1 overflow-hidden bg-velmora-blush shadow-velvet lg:order-2">
        <StaticImage productId={product.id} slot={selectedImage} className={imageClass} alt={product.name} />
      </div>
    </div>
  )
}
