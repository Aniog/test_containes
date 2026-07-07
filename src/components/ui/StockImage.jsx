import { cn } from '@/lib/utils'

const ratioClasses = {
  '3x2': 'aspect-[3/2]',
  '16x9': 'aspect-[16/9]',
  '4x3': 'aspect-[4/3]',
  '1x1': 'aspect-square',
  '3x4': 'aspect-[3/4]',
  '9x16': 'aspect-[9/16]',
  '2x3': 'aspect-[2/3]',
}

export const STOCK_IMG_PLACEHOLDER =
  'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'

export function StockImage({
  id,
  query,
  ratio = '1x1',
  width = 600,
  alt = '',
  className,
  containerClassName,
  objectFit = 'cover',
}) {
  return (
    <div className={cn('overflow-hidden bg-velmora-sand/30', ratioClasses[ratio], containerClassName)}>
      <img
        data-strk-img-id={id}
        data-strk-img={query}
        data-strk-img-ratio={ratio}
        data-strk-img-width={width}
        src={STOCK_IMG_PLACEHOLDER}
        alt={alt}
        className={cn(
          'w-full h-full transition-transform duration-700 ease-out',
          objectFit === 'cover' && 'object-cover',
          objectFit === 'contain' && 'object-contain',
          className
        )}
        loading="lazy"
      />
    </div>
  )
}
