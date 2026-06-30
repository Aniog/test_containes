import { products } from '@/data/products'

const placeholder =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

export default function ImageRegistry() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed -left-[9999px] top-0 h-px w-px overflow-hidden opacity-0">
      {products.map((product) => (
        <div key={product.id}>
          <span id={`registry-${product.id}-title`}>{product.name}</span>
          <span id={`registry-${product.id}-desc`}>{product.description}</span>
          {[product.imgId, product.hoverImgId, product.detailImgId, product.wornImgId, product.macroImgId].map((imgId) => (
            <img
              key={imgId}
              alt=""
              data-strk-img-id={imgId}
              data-strk-img={`[registry-${product.id}-desc] [registry-${product.id}-title]`}
              data-strk-img-ratio="4x3"
              data-strk-img-width="1100"
              src={placeholder}
            />
          ))}
        </div>
      ))}
      <h2 id="hero-title-registry">Crafted to be Treasured</h2>
      <p id="hero-subtitle-registry">Warm-lit gold jewelry worn on model, quiet luxury editorial</p>
      <div data-strk-bg-id="hero-jewelry-model-bg-e72f4a" data-strk-bg="[hero-subtitle-registry] [hero-title-registry]" data-strk-bg-ratio="16x9" data-strk-bg-width="1800" />
    </div>
  )
}
