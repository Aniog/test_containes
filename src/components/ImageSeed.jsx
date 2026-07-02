// ImageSeed is rendered off-screen so the strk-img plugin can build config
// entries for product/UGC/editorial imagery. It is not visible to users.
import { products, ugcPosts } from '@/data/products'

const svgPlaceholder = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

const queries = {
  'vivid-aura-jewels': {
    main: 'gold ear cuff crystal accent luxury jewelry product dark background',
    hover: 'gold ear cuff crystal worn on ear close up editorial jewelry',
    gallery: [
      'gold ear cuff crystal accent luxury jewelry product dark background',
      'gold ear cuff crystal model ear editorial warm light',
      'gold ear cuff crystal packaging jewelry box',
    ],
  },
  'majestic-flora-nectar': {
    main: 'multicolor floral crystal necklace gold luxury jewelry product',
    hover: 'floral crystal gold necklace worn on neck editorial',
    gallery: [
      'multicolor floral crystal necklace gold luxury jewelry product',
      'floral crystal gold necklace close up warm background',
      'gold necklace floral crystals layering editorial',
    ],
  },
  'golden-sphere-huggies': {
    main: 'chunky gold dome hoop earrings huggies luxury jewelry product',
    hover: 'gold dome huggie earrings worn ear close up editorial',
    gallery: [
      'chunky gold dome hoop earrings huggies luxury jewelry product',
      'gold huggie earrings pair on neutral background',
      'gold dome huggies worn double piercing editorial',
    ],
  },
  'amber-lace-earrings': {
    main: 'textured gold filigree drop earrings luxury jewelry product',
    hover: 'gold filigree drop earrings worn on ear editorial warm',
    gallery: [
      'textured gold filigree drop earrings luxury jewelry product',
      'gold filigree drop earrings detail close up',
      'gold drop earrings model portrait jewelry editorial',
    ],
  },
  'royal-heirloom-set': {
    main: 'gold earring necklace gift set jewelry box velvet luxury product',
    hover: 'gold necklace earrings gift set worn editorial',
    gallery: [
      'gold earring necklace gift set jewelry box velvet luxury product',
      'gold jewelry gift set velvet box necklace earrings',
      'gold pendant earrings set on model close up',
    ],
  },
}

export function ImageSeed() {
  return (
    <div hidden>
      {products.map((product) => (
        <div key={product.id}>
          <h3 id={`product-title-${product.id}`}>{product.name}</h3>
          <img
            data-strk-img-id={`product-card-main-${product.id}`}
            data-strk-img={`[product-title-${product.id}] ${queries[product.id].main}`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="800"
            src={svgPlaceholder}
            alt={product.name}
          />
          <img
            data-strk-img-id={`product-card-hover-${product.id}`}
            data-strk-img={`[product-title-${product.id}] ${queries[product.id].hover}`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="800"
            src={svgPlaceholder}
            alt={`${product.name} alternate view`}
          />
          {queries[product.id].gallery.map((q, idx) => (
            <img
              key={idx}
              data-strk-img-id={`product-gallery-${product.id}-${idx}`}
              data-strk-img={`[product-title-${product.id}] ${q}`}
              data-strk-img-ratio="1x1"
              data-strk-img-width="800"
              src={svgPlaceholder}
              alt={`${product.name} gallery ${idx + 1}`}
            />
          ))}
        </div>
      ))}

      {ugcPosts.map((post, idx) => (
        <div key={post.id}>
          <p id={`ugc-caption-${idx}`}>{post.caption}</p>
          <img
            data-strk-img-id={`ugc-img-${post.id}`}
            data-strk-img={`[ugc-caption-${idx}] gold jewelry worn ear neck close up editorial`}
            data-strk-img-ratio="9x16"
            data-strk-img-width="400"
            src={svgPlaceholder}
            alt="Customer style"
          />
        </div>
      ))}

      <div>
        <h2 id="brand-story-title">Designed for the Everyday Muse</h2>
        <p id="brand-story-body">
          Velmora was born from a simple belief: luxury should feel effortless.
        </p>
        <img
          data-strk-img-id="brand-story-img"
          data-strk-img="[brand-story-title] [brand-story-body] gold jewelry making hands artisan editorial"
          data-strk-img-ratio="1x1"
          data-strk-img-width="900"
          src={svgPlaceholder}
          alt="Velmora craftsmanship"
        />
      </div>
    </div>
  )
}
