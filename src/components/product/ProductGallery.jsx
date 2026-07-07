import { useState } from 'react'
import { cn } from '@/lib/utils'
import { StockImage } from '@/components/ui/StockImage'

export function ProductGallery({ product }) {
  const [selected, setSelected] = useState(0)
  const titleId = `pdp-title-${product.slug}`
  const images = [
    { id: `pdp-main-${product.id}`, ratio: '3x4', width: 900 },
    { id: `pdp-alt-1-${product.id}`, ratio: '1x1', width: 600 },
    { id: `pdp-alt-2-${product.id}`, ratio: '1x1', width: 600 },
    { id: `pdp-alt-3-${product.id}`, ratio: '1x1', width: 600 },
  ]

  return (
    <div className="flex flex-col gap-4 md:flex-row-reverse">
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#F2EFE9] md:w-[calc(100%-88px)]">
        <StockImage
          id={images[selected].id}
          query={`[${titleId}]`}
          ratio={images[selected].ratio}
          width={images[selected].width}
          alt={product.name}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex gap-3 overflow-x-auto md:w-20 md:flex-col md:gap-3 md:overflow-visible">
        {images.map((img, idx) => (
          <button
            key={img.id}
            type="button"
            onClick={() => setSelected(idx)}
            className={cn(
              'relative h-20 w-20 flex-shrink-0 overflow-hidden bg-[#F2EFE9] ring-1 transition-all',
              selected === idx ? 'ring-[#B9975B]' : 'ring-transparent hover:ring-[#E2DDD5]'
            )}
            aria-label={`View image ${idx + 1}`}
          >
            <StockImage
              id={img.id}
              query={`[${titleId}]`}
              ratio="1x1"
              width="200"
              alt={`${product.name} view ${idx + 1}`}
              className="h-full w-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  )
}
