import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Check } from 'lucide-react'

export default function ProductCard({ product, index }) {
  const cardRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, cardRef.current)
  }, [])

  return (
    <article
      ref={cardRef}
      className="group bg-white border border-brand-border hover:shadow-xl hover:shadow-brand-navy/5 transition-all duration-300 hover:-translate-y-1"
    >
      {/* Image */}
      <div className="relative overflow-hidden bg-brand-cream">
        <img
          alt={product.title}
          data-strk-img-id={`product-${product.id}-${product.imgId}`}
          data-strk-img={`[product-desc-${product.id}] [product-title-${product.id}] [products-heading]`}
          data-strk-img-ratio={product.imgRatio || '4x3'}
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-brand-navy/0 group-hover:bg-brand-navy/10 transition-colors duration-300" />
      </div>

      {/* Content */}
      <div className="p-6 md:p-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-6 h-0.5 bg-brand-gold" />
          <span className="text-xs uppercase tracking-[0.15em] text-brand-text-muted font-medium">
            {product.category}
          </span>
        </div>

        <h3
          id={`product-title-${product.id}`}
          className="font-heading text-xl md:text-2xl font-semibold text-brand-navy mb-3"
        >
          {product.title}
        </h3>

        <p
          id={`product-desc-${product.id}`}
          className="text-brand-text-muted leading-relaxed mb-5"
        >
          {product.description}
        </p>

        {/* Specs */}
        <div className="space-y-2 mb-6">
          {product.specs.map((spec, i) => (
            <div key={i} className="flex items-start gap-2.5">
              <Check className="w-4 h-4 text-brand-gold mt-0.5 shrink-0" />
              <span className="text-sm text-brand-text-muted">{spec}</span>
            </div>
          ))}
        </div>

        <a
          href="#contact"
          className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-brand-navy hover:text-brand-gold transition-colors group/link"
        >
          Inquire Now
          <span className="w-5 h-0.5 bg-brand-gold group-hover/link:w-8 transition-all duration-300" />
        </a>
      </div>
    </article>
  )
}