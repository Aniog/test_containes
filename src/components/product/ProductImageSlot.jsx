export default function ProductImageSlot({
  productId,
  ratio = '3x4',
  width = '600',
  className = '',
  alt,
}) {
  // Explicit literal branches so the build-time image helper can resolve
  // data-strk-img-id values even though this component is rendered in maps.
  if (productId === 'vivid-aura-jewels') {
    return (
      <>
        <img
          data-strk-img-id="product-card-vivid-aura-jewels"
          data-strk-img="[product-title-vivid-aura-jewels]"
          data-strk-img-ratio={ratio}
          data-strk-img-width={width}
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={alt || 'Vivid Aura Jewels'}
          className={className}
        />
        <span id="product-title-vivid-aura-jewels" className="sr-only">
          Vivid Aura Jewels
        </span>
      </>
    )
  }

  if (productId === 'majestic-flora-nectar') {
    return (
      <>
        <img
          data-strk-img-id="product-card-majestic-flora-nectar"
          data-strk-img="[product-title-majestic-flora-nectar]"
          data-strk-img-ratio={ratio}
          data-strk-img-width={width}
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={alt || 'Majestic Flora Nectar'}
          className={className}
        />
        <span id="product-title-majestic-flora-nectar" className="sr-only">
          Majestic Flora Nectar
        </span>
      </>
    )
  }

  if (productId === 'golden-sphere-huggies') {
    return (
      <>
        <img
          data-strk-img-id="product-card-golden-sphere-huggies"
          data-strk-img="[product-title-golden-sphere-huggies]"
          data-strk-img-ratio={ratio}
          data-strk-img-width={width}
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={alt || 'Golden Sphere Huggies'}
          className={className}
        />
        <span id="product-title-golden-sphere-huggies" className="sr-only">
          Golden Sphere Huggies
        </span>
      </>
    )
  }

  if (productId === 'amber-lace-earrings') {
    return (
      <>
        <img
          data-strk-img-id="product-card-amber-lace-earrings"
          data-strk-img="[product-title-amber-lace-earrings]"
          data-strk-img-ratio={ratio}
          data-strk-img-width={width}
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={alt || 'Amber Lace Earrings'}
          className={className}
        />
        <span id="product-title-amber-lace-earrings" className="sr-only">
          Amber Lace Earrings
        </span>
      </>
    )
  }

  if (productId === 'royal-heirloom-set') {
    return (
      <>
        <img
          data-strk-img-id="product-card-royal-heirloom-set"
          data-strk-img="[product-title-royal-heirloom-set]"
          data-strk-img-ratio={ratio}
          data-strk-img-width={width}
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={alt || 'Royal Heirloom Set'}
          className={className}
        />
        <span id="product-title-royal-heirloom-set" className="sr-only">
          Royal Heirloom Set
        </span>
      </>
    )
  }

  return null
}
