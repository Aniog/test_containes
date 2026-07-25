import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Plus } from 'lucide-react'
import ProductImage from '@/components/product/product-image'
import Stars from '@/components/ui/stars'
import { formatPrice } from '@/data/products'
import { useCart } from '@/lib/cart'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function ProductCard({ product, eager = false }) {
  const { addItem } = useCart()
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <article ref={containerRef} className="group flex flex-col">
      <div className="relative overflow-hidden bg-sand">
        <Link
          to={`/product/${product.id}`}
          aria-label={`View ${product.name}`}
          className="block aspect-[3/4]"
        >
          <ProductImage
            product={product}
            index={0}
            eager={eager}
            className="transition-opacity duration-700 ease-luxe group-hover:opacity-0"
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
          />
          <ProductImage
            product={product}
            index={1}
            className="absolute inset-0 opacity-0 transition-all duration-700 ease-luxe group-hover:scale-105 group-hover:opacity-100"
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
          />
        </Link>

        {product.badge && (
          <span className="absolute left-3 top-3 bg-cream/90 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-luxe text-ink backdrop-blur-sm">
            {product.badge}
          </span>
        )}

        <button
          type="button"
          onClick={() => addItem(product.id)}
          aria-label={`Add ${product.name} to cart`}
          className="absolute inset-x-0 bottom-0 flex translate-y-full items-center justify-center gap-2 bg-ink/90 py-3.5 text-[11px] font-semibold uppercase tracking-luxe text-cream backdrop-blur-sm transition-transform duration-400 ease-luxe hover:bg-gold hover:text-ink group-hover:translate-y-0 max-lg:translate-y-0 max-lg:bg-cream/95 max-lg:text-ink"
        >
          <Plus className="h-3.5 w-3.5" strokeWidth={1.5} />
          Add to Cart
        </button>
      </div>

      <div className="flex flex-1 flex-col items-center gap-1.5 pt-4 text-center">
        <Stars rating={product.rating} />
        <h3 className="font-serif text-base font-medium uppercase tracking-[0.12em] text-ink sm:text-lg">
          <Link to={`/product/${product.id}`} className="transition-colors duration-300 hover:text-gold-deep">
            {product.name}
          </Link>
        </h3>
        <p className="text-sm font-medium text-mocha">
          {product.compareAtPrice && (
            <span className="mr-2 text-mocha/60 line-through">
              {formatPrice(product.compareAtPrice)}
            </span>
          )}
          {formatPrice(product.price)}
        </p>
      </div>
    </article>
  )
}
