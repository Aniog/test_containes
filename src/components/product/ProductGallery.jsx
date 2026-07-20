import JewelryVisual from '@/components/product/JewelryVisual'

const galleryNotes = [
  { label: 'close-up demi-fine gold jewelry product detail on dark velvet', variant: 'primary' },
  { label: 'close-up jewelry worn on ear or neckline in warm soft light', variant: 'worn' },
  { label: 'gift-ready Velmora jewelry packaging with gold pieces', variant: 'packaging' },
]

export default function ProductGallery({ product, activeImage, setActiveImage }) {
  const titleId = `pdp-${product.id}-title`
  const descId = `pdp-${product.id}-desc`

  return (
    <div className="grid gap-4 lg:grid-cols-[88px_1fr]">
      <div className="order-2 flex gap-3 overflow-x-auto lg:order-1 lg:flex-col">
        {galleryNotes.map((note, index) => (
          <button
            key={note.label}
            type="button"
            onClick={() => setActiveImage(index)}
            className={`aspect-square min-w-20 overflow-hidden border bg-velmora-sand/30 transition ${activeImage === index ? 'border-velmora-gold' : 'border-velmora-sand'}`}
            aria-label={`View image ${index + 1}`}
          >
            <JewelryVisual product={product} variant={note.variant} />
          </button>
        ))}
      </div>
      <div className="order-1 relative aspect-[4/5] overflow-hidden bg-velmora-sand/30 lg:order-2">
        {galleryNotes.map((note, index) => (
          <JewelryVisual
            key={note.label}
            product={product}
            variant={note.variant}
            className={`absolute inset-0 transition duration-500 ${activeImage === index ? 'opacity-100' : 'opacity-0'}`}
          />
        ))}
      </div>
      <div className="sr-only">
        {galleryNotes.map((note, index) => <span key={note.label} id={`pdp-${product.id}-gallery-${index}`}>{note.label}</span>)}
      </div>
    </div>
  )
}
