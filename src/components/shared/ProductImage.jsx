import {
  buildImageQuery,
  getEditorialPlaceholder,
} from '@/lib/images'

const ProductImage = ({
  product,
  kind = 'primary',
  ratio = '4x3',
  width = '900',
  className = '',
  alt,
}) => {
  const titleId = `product-${product.slug}-title`
  const descId = `product-${product.slug}-desc`
  const noteId = `product-${product.slug}-${kind}-note`

  const noteMap = {
    primary: `warm gold jewelry product close-up ${product.categoryLabel}`,
    secondary: `editorial model wearing ${product.categoryLabel}`,
    detail: product.galleryNotes[0],
    lifestyle: product.galleryNotes[1],
    closeup: product.galleryNotes[2],
    packaging: product.galleryNotes[3],
  }

  const query = buildImageQuery(noteId, descId, titleId)

  return (
    <>
      <img
        alt={alt || product.name}
        className={className}
        data-strk-img-id={`product-${product.slug}-${kind}-img`}
        data-strk-img={query}
        data-strk-img-ratio={ratio}
        data-strk-img-width={width}
        src={getEditorialPlaceholder(`${product.name} ${kind}`)}
      />
      <span id={noteId} className="sr-only">
        {noteMap[kind] || noteMap.primary}
      </span>
    </>
  )
}

export default ProductImage
