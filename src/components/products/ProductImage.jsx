import { cn } from '@/lib/utils'

export default function ProductImage({ product, className }) {
  const titleId = `product-visual-${product.id}`
  const descId = `${titleId}-desc`

  return (
    <div
      role="img"
      aria-labelledby={`${titleId} ${descId}`}
      className={cn('velmora-image-fallback pointer-events-none relative overflow-hidden bg-velmora-blush', className)}
    >
      <span id={titleId} className="sr-only">{product.name}</span>
      <span id={descId} className="sr-only">{product.description}</span>
    </div>
  )
}
