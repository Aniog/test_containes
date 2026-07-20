import { useRef, useState } from 'react'
import { imagePlaceholder } from '../../lib/utils'
import { useStrkImageLoader } from '../../lib/useStrkImageLoader'

export default function ProductGallery({ product }) {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const containerRef = useRef(null)
  const selectedImage = product.gallery[selectedIndex]

  useStrkImageLoader(containerRef, [product.slug, selectedIndex])

  return (
    <div ref={containerRef} className="space-y-4">
      <div className="sr-only">
        {product.gallery.map((item) => (
          <div key={item.id}>
            <h3 id={item.titleId}>{item.title}</h3>
            <p id={item.descId}>{item.description}</p>
          </div>
        ))}
      </div>

      <div className="overflow-hidden rounded-3xl border border-sandDeep/70 bg-sand shadow-card">
        <div className="aspect-[3/4] overflow-hidden">
          <img
            src={imagePlaceholder}
            alt={selectedImage.title}
            data-strk-img-id={`${selectedImage.imgId}-main`}
            data-strk-img={`[${selectedImage.descId}] [${selectedImage.titleId}]`}
            data-strk-img-ratio={selectedImage.ratio}
            data-strk-img-width="1200"
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3 sm:grid-cols-4">
        {product.gallery.map((item, index) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setSelectedIndex(index)}
            className={`overflow-hidden rounded-2xl border bg-white/70 transition ${
              index === selectedIndex
                ? 'border-champagne shadow-card'
                : 'border-sandDeep/70 hover:border-rosewood'
            }`}
          >
            <div className="aspect-square overflow-hidden">
              <img
                src={imagePlaceholder}
                alt={item.title}
                data-strk-img-id={`${item.imgId}-thumb`}
                data-strk-img={`[${item.descId}] [${item.titleId}]`}
                data-strk-img-ratio="1x1"
                data-strk-img-width="300"
                className="h-full w-full object-cover"
              />
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
