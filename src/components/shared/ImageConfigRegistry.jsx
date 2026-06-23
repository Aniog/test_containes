const registryProducts = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    category: 'Earrings',
    shortDescription:
      'A sculptural gold ear cuff finished with a single crystal accent for subtle evening light.',
    description:
      'Vivid Aura Jewels is designed for easy elegance with a polished gold finish and a refined crystal glint.',
    imageId: 'product-vivid-aura-primary-a1c29d',
    secondaryImageId: 'product-vivid-aura-secondary-a1c29e',
    lifestyleImageId: 'product-vivid-aura-lifestyle-a1c29f',
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    category: 'Necklaces',
    shortDescription:
      'A floral crystal necklace that layers warm gold with soft color for celebratory dressing.',
    description:
      'Majestic Flora Nectar blends jewel-toned crystal petals with a delicate chain silhouette for gift-worthy moments.',
    imageId: 'product-majestic-primary-b7d81a',
    secondaryImageId: 'product-majestic-secondary-b7d81b',
    lifestyleImageId: 'product-majestic-lifestyle-b7d81c',
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    category: 'Huggies',
    shortDescription:
      'Chunky dome huggies with a polished finish that makes everyday dressing feel elevated.',
    description:
      'Golden Sphere Huggies bring a rounded silhouette and close-to-the-ear shine to an everyday jewelry wardrobe.',
    imageId: 'product-sphere-primary-c3f55d',
    secondaryImageId: 'product-sphere-secondary-c3f55e',
    lifestyleImageId: 'product-sphere-lifestyle-c3f55f',
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    category: 'Earrings',
    shortDescription:
      'Textured filigree drops with a vintage-inspired line and a warm, luminous finish.',
    description:
      'Amber Lace Earrings bring airy movement and heirloom-inspired filigree to polished occasion dressing.',
    imageId: 'product-amber-primary-d4a70b',
    secondaryImageId: 'product-amber-secondary-d4a70c',
    lifestyleImageId: 'product-amber-lifestyle-d4a70d',
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    category: 'Gift Sets',
    shortDescription:
      'A gift-boxed necklace and earring pairing designed for milestone gifting and instant polish.',
    description:
      'Royal Heirloom Set pairs softly radiant earrings and a matching pendant necklace in a keepsake gift box.',
    imageId: 'product-royal-primary-e6b12c',
    secondaryImageId: 'product-royal-secondary-e6b12d',
    lifestyleImageId: 'product-royal-lifestyle-e6b12e',
  },
]

const cardContexts = [
  { id: 'bestsellers-title', label: 'Velmora bestsellers collection' },
  { id: 'shop-grid-title', label: 'Velmora fine jewelry collection grid' },
  { id: 'related-products-title', label: 'Velmora related products' },
]

function RegistryImage({ configId, contextLabel, detailText, name, width }) {
  const detailId = `${configId}-detail`
  const nameId = `${configId}-name`
  const contextId = `${configId}-context`

  return (
    <div>
      <span id={detailId}>{detailText}</span>
      <span id={nameId}>{name}</span>
      <span id={contextId}>{contextLabel}</span>
      <img
        alt={name}
        data-strk-img={`[${detailId}] [${nameId}] [${contextId}]`}
        data-strk-img-id={configId}
        data-strk-img-ratio="3x4"
        data-strk-img-width={width}
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
      />
    </div>
  )
}

function ImageConfigRegistry() {
  return (
    <div aria-hidden="true" className="hidden">
      {cardContexts.map((context) => (
        <div key={context.id}>
          {registryProducts.map((product) => (
            <div key={`${context.id}-${product.id}`}>
              <RegistryImage
                configId={`${context.id}-${product.imageId}`}
                contextLabel={context.label}
                detailText={product.category}
                name={product.name}
                width="900"
              />
              <RegistryImage
                configId={`${context.id}-${product.secondaryImageId}`}
                contextLabel={context.label}
                detailText={product.shortDescription}
                name={product.name}
                width="900"
              />
            </div>
          ))}
        </div>
      ))}

      {registryProducts.map((product) => (
        <div key={`cart-${product.id}`}>
          <RegistryImage
            configId={`cart-${product.imageId}`}
            contextLabel="Your Cart"
            detailText={product.category}
            name={product.name}
            width="500"
          />
        </div>
      ))}

      {registryProducts.map((product) => (
        <div key={`gallery-${product.id}`}>
          <RegistryImage
            configId={`thumb-${product.imageId}`}
            contextLabel="Velmora product gallery"
            detailText={product.category}
            name={product.name}
            width="260"
          />
          <RegistryImage
            configId={`primary-${product.imageId}`}
            contextLabel="Velmora product gallery"
            detailText={product.category}
            name={product.name}
            width="1200"
          />
          <RegistryImage
            configId={`thumb-${product.secondaryImageId}`}
            contextLabel="Velmora product gallery"
            detailText={product.shortDescription}
            name={product.name}
            width="260"
          />
          <RegistryImage
            configId={`primary-${product.secondaryImageId}`}
            contextLabel="Velmora product gallery"
            detailText={product.shortDescription}
            name={product.name}
            width="1200"
          />
          <RegistryImage
            configId={`thumb-${product.lifestyleImageId}`}
            contextLabel="Velmora product gallery"
            detailText={product.description}
            name={product.name}
            width="260"
          />
          <RegistryImage
            configId={`primary-${product.lifestyleImageId}`}
            contextLabel="Velmora product gallery"
            detailText={product.description}
            name={product.name}
            width="1200"
          />
        </div>
      ))}
    </div>
  )
}

export default ImageConfigRegistry
