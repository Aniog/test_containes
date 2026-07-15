import { cn } from '@/lib/utils'
import ProductImage from '@/components/ui/ProductImage'

export default function ProductGallery({ product, activeIndex, onChange }) {
  return (
    <div className="grid gap-4 lg:grid-cols-[88px_1fr]">
      <div className="order-2 flex gap-3 overflow-x-auto lg:order-1 lg:flex-col">
        {product.gallery.map((image, index) => (
          <button
            key={image.id}
            type="button"
            className={cn(
              'overflow-hidden rounded-2xl border bg-velmora-ivory',
              activeIndex === index ? 'border-velmora-gold' : 'border-velmora-sand',
            )}
            onClick={() => onChange(index)}
          >
            <ProductImage image={image} className="h-24 w-20 object-cover" width="300" />
          </button>
        ))}
      </div>

      <div className="order-1 overflow-hidden rounded-[2rem] border border-velmora-sand bg-velmora-mist shadow-velmora lg:order-2">
        <ProductImage image={product.gallery[activeIndex]} className="aspect-[4/5] w-full object-cover" width="1200" />
      </div>
    </div>
  )
}
