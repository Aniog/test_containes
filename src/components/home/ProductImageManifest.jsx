import { products, getProductImageKey } from '@/data/products'

export default function ProductImageManifest() {
  return (
    <div className="hidden" aria-hidden="true">
      {products.map((product) => {
        const primaryTitleId = `manifest-${product.slug}-primary-title`
        const primaryDescId = `manifest-${product.slug}-primary-desc`
        const secondaryTitleId = `manifest-${product.slug}-secondary-title`
        const secondaryDescId = `manifest-${product.slug}-secondary-desc`

        return (
          <div key={product.slug}>
            <img
              alt=""
              data-strk-img-id={getProductImageKey(product.slug, 'primary')}
              data-strk-img={`[${primaryDescId}] [${primaryTitleId}]`}
              data-strk-img-ratio="4x3"
              data-strk-img-width="900"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
            <img
              alt=""
              data-strk-img-id={getProductImageKey(product.slug, 'secondary')}
              data-strk-img={`[${secondaryDescId}] [${secondaryTitleId}]`}
              data-strk-img-ratio="4x3"
              data-strk-img-width="900"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
            {product.gallery.map((image, index) => {
              const galleryTitleId = `manifest-${product.slug}-gallery-${index}-title`
              const galleryDescId = `manifest-${product.slug}-gallery-${index}-desc`

              return (
                <img
                  key={image.slotId}
                  alt=""
                  data-strk-img-id={image.slotId}
                  data-strk-img={`[${galleryDescId}] [${galleryTitleId}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="1400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              )
            })}
            <span id={primaryTitleId}>{product.name}</span>
            <span id={primaryDescId}>{product.shortDescription}</span>
            <span id={secondaryTitleId}>{product.name} alternate view</span>
            <span id={secondaryDescId}>
              Alternate editorial view of {product.name} in warm gold lighting
            </span>
            {product.gallery.map((image, index) => (
              <div key={`${image.slotId}-text`}>
                <span id={`manifest-${product.slug}-gallery-${index}-title`}>
                  {image.label}
                </span>
                <span id={`manifest-${product.slug}-gallery-${index}-desc`}>
                  {image.description}
                </span>
              </div>
            ))}
          </div>
        )
      })}
    </div>
  )
}
