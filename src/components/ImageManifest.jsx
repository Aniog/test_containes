// Hidden no-op component whose ONLY job is to expose literal <img>
// tags to the vite-plugin-strk-img scanner, so product images get
// pre-registered in src/strk-img-config.json at startup.
//
// The plugin evaluates `<img data-strk-img="..." data-strk-img-id="..."/>`
// only when the string values are static literals. Wrapping them in a
// helper function would re-introduce dynamic `props.x` and the plugin
// would skip them (see "Skipped unresolved" warnings).
//
// Once registered, the actual UI uses <ProductImage primaryId="..." />
// which reads its `src` from strk-img-config.json (NOT from this file).
// This file's tags are never rendered to the DOM in any user-facing view.

const img = (id, query) => (
  <img
    alt=""
    data-strk-img-id={id}
    data-strk-img={query}
    data-strk-img-ratio="1x1"
    data-strk-img-width="900"
    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
    style={{ display: 'none' }}
  />
)

export default function ImageManifest() {
  return (
    <div style={{ display: 'none' }} aria-hidden="true">
      {img('vivid-aura-1', 'gold ear cuff with crystal accent on model earring')}
      {img('vivid-aura-2', 'gold ear cuff with crystal detail close up jewelry')}
      {img('vivid-aura-3', 'gold crystal ear cuff product photo warm light')}
      {img('vivid-aura-4', 'gold ear cuff on woman editorial portrait')}

      {img('majestic-flora-1', 'multicolor floral crystal necklace gold chain product photo')}
      {img('majestic-flora-2', 'floral crystal pendant necklace warm gold editorial')}
      {img('majestic-flora-3', 'gold floral crystal necklace close up detail')}
      {img('majestic-flora-4', 'woman wearing floral crystal gold necklace portrait')}

      {img('golden-sphere-1', 'chunky gold dome huggie earring product photo')}
      {img('golden-sphere-2', 'gold sphere huggie earring close up on neutral background')}
      {img('golden-sphere-3', 'gold huggie hoops on model ear editorial')}
      {img('golden-sphere-4', 'chunky gold dome earrings styled shot warm light')}

      {img('amber-lace-1', 'textured gold filigree drop earrings product photo')}
      {img('amber-lace-2', 'gold filigree drop earrings detail close up')}
      {img('amber-lace-3', 'vintage gold lace drop earrings on model')}
      {img('amber-lace-4', 'gold filigree earrings editorial portrait warm tones')}

      {img('royal-heirloom-1', 'gift-boxed gold jewelry set earring and necklace')}
      {img('royal-heirloom-2', 'gold jewelry gift set in box editorial product photo')}
      {img('royal-heirloom-3', 'gold earring and necklace set styled on neutral background')}
      {img('royal-heirloom-4', 'gold heirloom jewelry gift set portrait warm light')}
    </div>
  )
}
