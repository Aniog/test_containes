import { products } from '@/data/products'
import { imagePlaceholder } from '@/lib/media'

export default function ProductImageManifest() {
  return (
    <div aria-hidden="true" className="hidden">
      <p id="manifest-velmora-product-photography">
        Warm editorial product photography of gold jewelry on refined neutral and dark surfaces.
      </p>

      {products.map((product) => {
        const titleRef = `manifest-${product.id}-title`
        const descRef = `manifest-${product.id}-desc`
        const primaryLabelRef = `manifest-${product.id}-${product.gallery[0]?.id}-label`
        const secondaryLabelRef = `manifest-${product.id}-${(product.gallery[1] ?? product.gallery[0])?.id}-label`

        return (
          <div key={product.id}>
            <p id={titleRef}>{product.name}</p>
            <p id={descRef}>{product.description}</p>

            {product.gallery.map((image) => (
              <p key={image.id} id={`manifest-${product.id}-${image.id}-label`}>
                {image.label}
              </p>
            ))}

            <img
              alt=""
              data-strk-img-id={`product-card-${product.id}-primary`}
              data-strk-img={`[${descRef}] [${titleRef}] [${primaryLabelRef}] [manifest-velmora-product-photography]`}
              data-strk-img-ratio="4x3"
              data-strk-img-width="900"
              src={imagePlaceholder}
            />
            <img
              alt=""
              data-strk-img-id={`product-card-${product.id}-secondary`}
              data-strk-img={`[${descRef}] [${titleRef}] [${secondaryLabelRef}] [manifest-velmora-product-photography]`}
              data-strk-img-ratio="4x3"
              data-strk-img-width="900"
              src={imagePlaceholder}
            />
            <img
              alt=""
              data-strk-img-id={`product-cart-${product.id}`}
              data-strk-img={`[${descRef}] [${titleRef}] [${primaryLabelRef}] [manifest-velmora-product-photography]`}
              data-strk-img-ratio="1x1"
              data-strk-img-width="320"
              src={imagePlaceholder}
            />

            {product.gallery.map((image) => {
              const labelRef = `manifest-${product.id}-${image.id}-label`

              return (
                <div key={`${product.id}-${image.id}`}>
                  <img
                    alt=""
                    data-strk-img-id={`product-detail-${product.id}-${image.id}`}
                    data-strk-img={`[${descRef}] [${titleRef}] [${labelRef}] [manifest-velmora-product-photography]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="1200"
                    src={imagePlaceholder}
                  />
                  <img
                    alt=""
                    data-strk-img-id={`product-detail-${product.id}-${image.id}-thumb`}
                    data-strk-img={`[${descRef}] [${titleRef}] [${labelRef}] [manifest-velmora-product-photography]`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="320"
                    src={imagePlaceholder}
                  />
                </div>
              )
            })}
          </div>
        )
      })}
    </div>
  )
}
