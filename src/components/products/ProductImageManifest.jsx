import { products } from '@/data/store.js'

export default function ProductImageManifest() {
  return (
    <div className="hidden" aria-hidden="true">
      {products.map((product) => {
        const titleId = `product-manifest-${product.id}-title`
        const descId = `product-manifest-${product.id}-desc`
        const categoryId = `product-manifest-${product.id}-category`

        return (
          <div key={product.id}>
            <span id={titleId}>{product.name}</span>
            <span id={descId}>{product.shortDescription}</span>
            <span id={categoryId}>{product.category}</span>
            {product.galleryPrompts.map((prompt, index) => {
              const promptId = `product-manifest-${product.id}-prompt-${index}`

              return (
                <div key={promptId}>
                  <span id={promptId}>{prompt}</span>
                  <img
                    alt={product.name}
                    data-strk-img-id={`product-${product.id}-image-${index}`}
                    data-strk-img={`[${promptId}] [${titleId}] [${descId}] [${categoryId}]`}
                    data-strk-img-ratio={index === 2 || index === 3 ? '1x1' : '4x3'}
                    data-strk-img-width={index === 2 || index === 3 ? '480' : '1200'}
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
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
