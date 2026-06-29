import { useState, useRef, useEffect } from 'react'
import { ShoppingBag, Eye } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { StarRating } from './StarRating'
import { useCart } from '@/hooks/useCart'
import { productTitleId, productDescId, productImgId, PLACEHOLDER_SVG } from '@/lib/images'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export const ProductCard = ({ product }) => {
  const [hovered, setHovered] = useState(false)
  const { addItem } = useCart()
  const cardRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, cardRef.current)
  }, [])

  return (
    <article
      ref={cardRef}
      className="group relative bg-card rounded-sm border border-border overflow-hidden transition-shadow hover:shadow-lg"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/products/${product.id}`} className="block relative aspect-[3/4] bg-muted overflow-hidden">
        {product.badge && (
          <Badge className="absolute top-3 left-3 z-10 bg-primary text-primary-foreground hover:bg-primary uppercase text-[10px] tracking-brand px-2 py-0.5">
            {product.badge}
          </Badge>
        )}
        <img
          data-strk-img-id={productImgId(product)}
          data-strk-img={`[${productDescId(product)}] [${productTitleId(product)}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src={PLACEHOLDER_SVG}
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div
          className={`absolute inset-x-0 bottom-0 p-3 flex gap-2 transition-all duration-300 ${
            hovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}
        >
          <Button
            size="sm"
            className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 uppercase text-[11px] tracking-brand"
            onClick={(e) => {
              e.preventDefault()
              addItem(product)
            }}
          >
            <ShoppingBag size={14} className="mr-2" />
            Add
          </Button>
          <Button
            size="icon"
            variant="secondary"
            className="bg-white/90 hover:bg-white"
            asChild
          >
            <Link to={`/products/${product.id}`} aria-label="View product">
              <Eye size={14} />
            </Link>
          </Button>
        </div>
      </Link>
      <div className="p-4 text-center">
        <StarRating rating={product.rating} size={12} />
        <p className="text-[10px] text-muted-foreground mt-1.5 mb-1 uppercase tracking-brand">
          {product.category}
        </p>
        <h3 id={productTitleId(product)} className="font-heading text-lg uppercase tracking-brand">
          {product.name}
        </h3>
        <p id={productDescId(product)} className="sr-only">{product.description}</p>
        <p className="text-sm font-medium mt-2">${product.price}</p>
      </div>
    </article>
  )
}
