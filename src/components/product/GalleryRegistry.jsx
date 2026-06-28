// This component renders 20 hidden img tags with literal `data-strk-img-id` values,
// so the strk-img Vite plugin can statically resolve and pre-fetch each gallery image
// at build/transform time. At runtime, the IDs are reused by the visible PDP gallery.
// The element is visually hidden but kept in the DOM so the plugin parser sees it.

const HIDDEN = {
  position: "absolute",
  width: 0,
  height: 0,
  overflow: "hidden",
  opacity: 0,
  pointerEvents: "none",
};

const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E";

export default function GalleryRegistry() {
  return (
    <div aria-hidden="true" style={HIDDEN}>
      {/* Vivid Aura Jewels */}
      <img
        data-strk-img-id="velmora-pdp-vivid-aura-g1-3a91"
        data-strk-img="gold ear cuff with crystal close up warm light hero shot"
        data-strk-img-ratio="4x3"
        data-strk-img-width="1100"
        src={PLACEHOLDER}
        alt=""
      />
      <img
        data-strk-img-id="velmora-pdp-vivid-aura-g2-3a92"
        data-strk-img="gold ear cuff on model close up earring editorial"
        data-strk-img-ratio="4x3"
        data-strk-img-width="1100"
        src={PLACEHOLDER}
        alt=""
      />
      <img
        data-strk-img-id="velmora-pdp-vivid-aura-g3-3a93"
        data-strk-img="gold ear cuff macro texture detail crystal"
        data-strk-img-ratio="4x3"
        data-strk-img-width="1100"
        src={PLACEHOLDER}
        alt=""
      />
      <img
        data-strk-img-id="velmora-pdp-vivid-aura-g4-3a94"
        data-strk-img="gold ear cuff flatlay linen warm light still life"
        data-strk-img-ratio="4x3"
        data-strk-img-width="1100"
        src={PLACEHOLDER}
        alt=""
      />

      {/* Majestic Flora Nectar */}
      <img
        data-strk-img-id="velmora-pdp-flora-nectar-g1-7c12"
        data-strk-img="floral crystal necklace gold pastel editorial hero shot warm light"
        data-strk-img-ratio="4x3"
        data-strk-img-width="1100"
        src={PLACEHOLDER}
        alt=""
      />
      <img
        data-strk-img-id="velmora-pdp-flora-nectar-g2-7c13"
        data-strk-img="floral necklace on model neck close up editorial"
        data-strk-img-ratio="4x3"
        data-strk-img-width="1100"
        src={PLACEHOLDER}
        alt=""
      />
      <img
        data-strk-img-id="velmora-pdp-flora-nectar-g3-7c14"
        data-strk-img="floral crystal necklace macro detail texture stones"
        data-strk-img-ratio="4x3"
        data-strk-img-width="1100"
        src={PLACEHOLDER}
        alt=""
      />
      <img
        data-strk-img-id="velmora-pdp-flora-nectar-g4-7c15"
        data-strk-img="floral necklace flatlay linen still life warm"
        data-strk-img-ratio="4x3"
        data-strk-img-width="1100"
        src={PLACEHOLDER}
        alt=""
      />

      {/* Golden Sphere Huggies */}
      <img
        data-strk-img-id="velmora-pdp-sphere-huggies-g1-5d31"
        data-strk-img="chunky gold dome huggie hoop earrings hero shot minimal"
        data-strk-img-ratio="4x3"
        data-strk-img-width="1100"
        src={PLACEHOLDER}
        alt=""
      />
      <img
        data-strk-img-id="velmora-pdp-sphere-huggies-g2-5d32"
        data-strk-img="gold huggie hoop earrings on model ear close up"
        data-strk-img-ratio="4x3"
        data-strk-img-width="1100"
        src={PLACEHOLDER}
        alt=""
      />
      <img
        data-strk-img-id="velmora-pdp-sphere-huggies-g3-5d33"
        data-strk-img="gold hoop huggie earring macro detail texture"
        data-strk-img-ratio="4x3"
        data-strk-img-width="1100"
        src={PLACEHOLDER}
        alt=""
      />
      <img
        data-strk-img-id="velmora-pdp-sphere-huggies-g4-5d34"
        data-strk-img="gold huggie earrings flatlay linen warm light"
        data-strk-img-ratio="4x3"
        data-strk-img-width="1100"
        src={PLACEHOLDER}
        alt=""
      />

      {/* Amber Lace Earrings */}
      <img
        data-strk-img-id="velmora-pdp-amber-lace-g1-8e44"
        data-strk-img="vintage gold filigree drop earrings textured hero shot editorial"
        data-strk-img-ratio="4x3"
        data-strk-img-width="1100"
        src={PLACEHOLDER}
        alt=""
      />
      <img
        data-strk-img-id="velmora-pdp-amber-lace-g2-8e45"
        data-strk-img="gold filigree drop earrings on model ear close up portrait"
        data-strk-img-ratio="4x3"
        data-strk-img-width="1100"
        src={PLACEHOLDER}
        alt=""
      />
      <img
        data-strk-img-id="velmora-pdp-amber-lace-g3-8e46"
        data-strk-img="gold filigree earring macro detail metalwork texture"
        data-strk-img-ratio="4x3"
        data-strk-img-width="1100"
        src={PLACEHOLDER}
        alt=""
      />
      <img
        data-strk-img-id="velmora-pdp-amber-lace-g4-8e47"
        data-strk-img="gold filigree drop earrings flatlay linen still life"
        data-strk-img-ratio="4x3"
        data-strk-img-width="1100"
        src={PLACEHOLDER}
        alt=""
      />

      {/* Royal Heirloom Set */}
      <img
        data-strk-img-id="velmora-pdp-heirloom-set-g1-6b23"
        data-strk-img="gold necklace earring jewelry gift set linen box flatlay hero"
        data-strk-img-ratio="4x3"
        data-strk-img-width="1100"
        src={PLACEHOLDER}
        alt=""
      />
      <img
        data-strk-img-id="velmora-pdp-heirloom-set-g2-6b24"
        data-strk-img="gold jewelry set on model neck and ear lifestyle editorial"
        data-strk-img-ratio="4x3"
        data-strk-img-width="1100"
        src={PLACEHOLDER}
        alt=""
      />
      <img
        data-strk-img-id="velmora-pdp-heirloom-set-g3-6b25"
        data-strk-img="gold jewelry set macro detail necklace earring close up"
        data-strk-img-ratio="4x3"
        data-strk-img-width="1100"
        src={PLACEHOLDER}
        alt=""
      />
      <img
        data-strk-img-id="velmora-pdp-heirloom-set-g4-6b26"
        data-strk-img="gold jewelry gift set in linen lined box warm light"
        data-strk-img-ratio="4x3"
        data-strk-img-width="1100"
        src={PLACEHOLDER}
        alt=""
      />
    </div>
  );
}
