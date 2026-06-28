import { useState } from 'react'
import { cn } from '@/lib/utils'
import EditorialVisual from '@/components/ui/EditorialVisual'

const moods = ['portrait', 'still', 'gift']

export default function ProductGallery({ product }) {
  const [selectedIndex, setSelectedIndex] = useState(0)

  return (
    <div className="grid gap-4 lg:grid-cols-[120px_minmax(0,1fr)]">
      <div className="order-2 flex gap-3 overflow-x-auto lg:order-1 lg:flex-col">
        {product.gallery.map((item, index) => (
          <button
            key={item.caption}
            type="button"
            onClick={() => setSelectedIndex(index)}
            className={cn(
              'min-w-24 overflow-hidden rounded-[1.5rem] border p-2 transition duration-300 lg:min-w-0',
              selectedIndex === index
                ? 'border-velmora-gold bg-velmora-champagne/60'
                : 'border-velmora-line bg-velmora-ivory',
            )}
          >
            <EditorialVisual
              mood={moods[index % moods.length]}
              accent={index % 2 === 0 ? 'left' : 'right'}
              className="aspect-[4/5] rounded-[1rem]"
            >
              <div className="absolute inset-x-4 bottom-4 text-center text-[10px] uppercase tracking-product text-velmora-ivory/90">
                View {index + 1}
              </div>
            </EditorialVisual>
          </button>
        ))}
      </div>

      <div className="order-1 rounded-[2rem] border border-velmora-line bg-velmora-ivory p-3 shadow-velmora-soft lg:order-2">
        <EditorialVisual
          mood={moods[selectedIndex % moods.length]}
          accent={selectedIndex % 2 === 0 ? 'left' : 'right'}
          className="aspect-[4/5] rounded-[1.5rem]"
        >
          <div className="absolute inset-x-8 bottom-8 text-center text-xs uppercase tracking-brand text-velmora-ivory/90">
            {product.category}
          </div>
        </EditorialVisual>
        <p className="px-2 pt-4 text-sm leading-7 text-velmora-taupe">
          {product.gallery[selectedIndex].caption}
        </p>
      </div>
    </div>
  )
}
