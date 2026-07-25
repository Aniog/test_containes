import { cn } from '@/lib/utils'

export default function ProductImage({
  product,
  index = 0,
  ratio = '3x4',
  width = 700,
  className,
  sizes,
  eager = false,
}) {
  const image = product.images[index] ?? product.images[0]
  return (
    <img
      data-strk-img-id={image.id}
      data-strk-img={image.query}
      data-strk-img-ratio={ratio}
      data-strk-img-width={String(width)}
      alt={`${product.name} — ${product.category} by Velmora Fine Jewelry`}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      sizes={sizes}
      className={cn('h-full w-full object-cover', className)}
    />
  )
}
