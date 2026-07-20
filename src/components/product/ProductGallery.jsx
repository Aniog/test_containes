
const angles = [
  { key: 'hero', label: 'Warm editorial close-up', ratio: '3x4' },
  { key: 'model', label: 'Styled on model', ratio: '3x4' },
  { key: 'detail', label: 'Polished material detail', ratio: '3x4' },
  { key: 'box', label: 'Gift packaging moment', ratio: '3x4' },
]

export default function ProductGallery({ product, selectedIndex, onSelect }) {
  const active = angles[selectedIndex] || angles[0]
  const titleId = `detail-${product.slug}-title`
  const descId = `detail-${product.slug}-desc`
  const angleId = `detail-${product.slug}-${active.key}-angle`

  return (
    <div className="grid gap-4 lg:grid-cols-[92px_1fr]">
      <div className="order-2 flex gap-3 overflow-x-auto lg:order-1 lg:flex-col lg:overflow-visible">
        {angles.map((angle, index) => (
          <button
            key={angle.key}
            type="button"
            onClick={() => onSelect(index)}
            className={`shrink-0 overflow-hidden border bg-velmora-blush transition ${
              index === selectedIndex ? 'border-velmora-champagne' : 'border-velmora-ink/10 hover:border-velmora-ink/30'
            }`}
            aria-label={`View ${angle.label}`}
          >
            <img
              alt={`${product.name} ${angle.label}`}
              className="h-24 w-20 object-cover"
              data-strk-img-id={`detail-thumb-${product.slug}-${angle.key}`}
              data-strk-img={`[detail-${product.slug}-${angle.key}-angle] [${descId}] [${titleId}]`}
              data-strk-img-ratio="3x4"
              data-strk-img-width="240"
              src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=="
            />
            <span id={`detail-${product.slug}-${angle.key}-angle`} className="sr-only">{angle.label}</span>
          </button>
        ))}
      </div>
      <div className="order-1 overflow-hidden rounded-t-full bg-velmora-blush shadow-soft lg:order-2">
        <img
          alt={`${product.name} ${active.label}`}
          className="aspect-[3/4] w-full object-cover"
          data-strk-img-id={`detail-main-${product.slug}-${active.key}`}
          data-strk-img={`[${angleId}] [${descId}] [${titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="1000"
          src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=="
        />
      </div>
      <span id={angleId} className="sr-only">{active.label}</span>
      <span id={titleId} className="sr-only">{product.name}</span>
      <span id={descId} className="sr-only">{product.description}</span>
    </div>
  )
}
