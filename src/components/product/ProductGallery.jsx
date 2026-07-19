import { useEffect, useRef, useState } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function ProductGallery({ product }) {
  const [active, setActive] = useState(0)
  const galleryRef = useRef(null)
  const activeLabel = product.images[active]

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, galleryRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [active, product.slug])

  return (
    <div ref={galleryRef} className="grid gap-4 lg:grid-cols-[88px_1fr]">
      <div className="order-2 flex gap-3 lg:order-1 lg:flex-col">{product.images.map((image, index) => <button key={image} type="button" onClick={() => setActive(index)} className={`overflow-hidden border ${active === index ? 'border-velmora-espresso' : 'border-velmora-line'}`}><img alt={`${product.name} thumbnail ${index + 1}`} className="h-20 w-20 object-cover" data-strk-img-id={`pdp-${product.slug}-thumb-${index}`} data-strk-img={`[pdp-${product.slug}-image-${index}] [pdp-${product.slug}-name]`} data-strk-img-ratio="1x1" data-strk-img-width="180" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" /><span id={`pdp-${product.slug}-image-${index}`} className="sr-only">{image}</span></button>)}</div>
      <div className="order-1 overflow-hidden bg-velmora-stone shadow-editorial lg:order-2"><img alt={product.name} className="aspect-[4/5] w-full object-cover" data-strk-img-id={`pdp-${product.slug}-main-${active}`} data-strk-img={`[pdp-${product.slug}-active] [pdp-${product.slug}-desc] [pdp-${product.slug}-name]`} data-strk-img-ratio="3x4" data-strk-img-width="1000" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" /><span id={`pdp-${product.slug}-active`} className="sr-only">{activeLabel}</span></div>
    </div>
  )
}
