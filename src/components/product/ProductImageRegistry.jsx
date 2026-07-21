// Static, visually-hidden registry of every catalog image. Each <img> uses a
// fully literal data-strk-img-id + query so the strk-img build plugin can
// statically resolve the URL and replace the placeholder src at build time.
// Runtime components reference the same IDs via PRODUCT_IMAGE_MAP and render
// the resolved URL directly (see src/lib/strkImg.js).
export default function ProductImageRegistry() {
  return (
    <div aria-hidden="true" className="hidden">
      <img data-strk-img-id="product-vivid-aura-jewels-main" data-strk-img="gold ear cuff with crystal accent on dark elegant background, macro luxury jewelry photography" data-strk-img-ratio="4x3" data-strk-img-width="700" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" alt="" />
      <img data-strk-img-id="product-vivid-aura-jewels-worn" data-strk-img="woman wearing gold ear cuff close up on ear, warm editorial jewelry photography" data-strk-img-ratio="4x3" data-strk-img-width="700" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" alt="" />
      <img data-strk-img-id="product-vivid-aura-jewels-detail" data-strk-img="gold ear cuff with crystal accent macro detail on dark silk, luxury jewelry still life" data-strk-img-ratio="4x3" data-strk-img-width="700" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" alt="" />
      <img data-strk-img-id="product-vivid-aura-jewels-styled" data-strk-img="gold ear cuff flat lay with silk ribbon on warm neutral background, editorial jewelry photography" data-strk-img-ratio="4x3" data-strk-img-width="700" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" alt="" />

      <img data-strk-img-id="product-majestic-flora-nectar-main" data-strk-img="multicolor floral crystal gold necklace on neutral linen, editorial luxury jewelry photography" data-strk-img-ratio="4x3" data-strk-img-width="700" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" alt="" />
      <img data-strk-img-id="product-majestic-flora-nectar-worn" data-strk-img="woman neck wearing colorful floral crystal gold necklace, warm editorial jewelry photography" data-strk-img-ratio="4x3" data-strk-img-width="700" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" alt="" />
      <img data-strk-img-id="product-majestic-flora-nectar-detail" data-strk-img="multicolor crystal floral gold necklace macro detail on linen, luxury jewelry still life" data-strk-img-ratio="4x3" data-strk-img-width="700" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" alt="" />
      <img data-strk-img-id="product-majestic-flora-nectar-styled" data-strk-img="gold floral crystal necklace flat lay with dried flowers, warm editorial jewelry photography" data-strk-img-ratio="4x3" data-strk-img-width="700" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" alt="" />

      <img data-strk-img-id="product-golden-sphere-huggies-main" data-strk-img="chunky gold dome huggie earrings macro on dark warm background, luxury jewelry photography" data-strk-img-ratio="4x3" data-strk-img-width="700" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" alt="" />
      <img data-strk-img-id="product-golden-sphere-huggies-worn" data-strk-img="woman ear wearing chunky gold dome huggie earrings close up, warm editorial photography" data-strk-img-ratio="4x3" data-strk-img-width="700" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" alt="" />
      <img data-strk-img-id="product-golden-sphere-huggies-detail" data-strk-img="polished gold dome huggie earrings macro detail on dark background, luxury jewelry still life" data-strk-img-ratio="4x3" data-strk-img-width="700" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" alt="" />
      <img data-strk-img-id="product-golden-sphere-huggies-styled" data-strk-img="gold huggie earrings flat lay on warm stone surface, editorial jewelry photography" data-strk-img-ratio="4x3" data-strk-img-width="700" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" alt="" />

      <img data-strk-img-id="product-amber-lace-earrings-main" data-strk-img="textured gold filigree drop earrings on dark silk, elegant editorial jewelry photography" data-strk-img-ratio="4x3" data-strk-img-width="700" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" alt="" />
      <img data-strk-img-id="product-amber-lace-earrings-worn" data-strk-img="woman wearing gold filigree drop earrings evening look, warm editorial photography" data-strk-img-ratio="4x3" data-strk-img-width="700" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" alt="" />
      <img data-strk-img-id="product-amber-lace-earrings-detail" data-strk-img="gold filigree lace drop earrings macro detail on dark silk, luxury jewelry still life" data-strk-img-ratio="4x3" data-strk-img-width="700" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" alt="" />
      <img data-strk-img-id="product-amber-lace-earrings-styled" data-strk-img="gold drop earrings flat lay with candlelight glow on warm background, editorial photography" data-strk-img-ratio="4x3" data-strk-img-width="700" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" alt="" />

      <img data-strk-img-id="product-royal-heirloom-set-main" data-strk-img="gold earring and necklace gift set in elegant jewelry box, luxury product photography" data-strk-img-ratio="4x3" data-strk-img-width="700" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" alt="" />
      <img data-strk-img-id="product-royal-heirloom-set-worn" data-strk-img="woman wearing gold pendant necklace and huggie earrings set, warm editorial photography" data-strk-img-ratio="4x3" data-strk-img-width="700" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" alt="" />
      <img data-strk-img-id="product-royal-heirloom-set-detail" data-strk-img="gold earring and necklace set in open gift box macro, luxury jewelry still life" data-strk-img-ratio="4x3" data-strk-img-width="700" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" alt="" />
      <img data-strk-img-id="product-royal-heirloom-set-styled" data-strk-img="elegant gold jewelry gift box with ribbon on warm background, editorial photography" data-strk-img-ratio="4x3" data-strk-img-width="700" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" alt="" />
    </div>
  )
}
