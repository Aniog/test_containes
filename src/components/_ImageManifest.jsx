/**
 * Hidden image manifest — exists only so the strk-img Vite plugin
 * can statically discover every image slot used dynamically across
 * the app (product detail galleries, etc.) and pre-fetch them at
 * build time. This component renders nothing visible.
 *
 * Adding a new image slot:
 *   1. Add a literal <img data-strk-img-id="..." data-strk-img="..." ... />
 *      tag below using exact string literals.
 *   2. The build plugin will pick it up and add it to strk-img-config.json.
 */
import React from 'react';

const placeholder =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E";

export default function ImageManifest() {
  return (
    <div aria-hidden="true" style={{ display: 'none' }}>
      {/* === VIVID AURA JEWELS === */}
      <img
        data-strk-img-id="velmora-vivid-aura-detail-3e5b1f"
        data-strk-img="gold ear cuff macro detail crystal jewelry product photo"
        data-strk-img-ratio="4x3"
        data-strk-img-width="1200"
        src={placeholder}
        alt=""
      />
      <img
        data-strk-img-id="velmora-vivid-aura-flatlay-8a201d"
        data-strk-img="gold ear cuff flat lay editorial luxury jewelry"
        data-strk-img-ratio="4x3"
        data-strk-img-width="1200"
        src={placeholder}
        alt=""
      />

      {/* === MAJESTIC FLORA NECTAR === */}
      <img
        data-strk-img-id="velmora-flora-nectar-detail-1a44b2"
        data-strk-img="gold floral pendant macro detail jewelry product photo"
        data-strk-img-ratio="4x3"
        data-strk-img-width="1200"
        src={placeholder}
        alt=""
      />
      <img
        data-strk-img-id="velmora-flora-nectar-flatlay-6cc019"
        data-strk-img="gold floral necklace flat lay luxury editorial jewelry"
        data-strk-img-ratio="4x3"
        data-strk-img-width="1200"
        src={placeholder}
        alt=""
      />

      {/* === GOLDEN SPHERE HUGGIES === */}
      <img
        data-strk-img-id="velmora-sphere-huggies-detail-7f30aa"
        data-strk-img="gold hoop earring macro detail luxury jewelry product"
        data-strk-img-ratio="4x3"
        data-strk-img-width="1200"
        src={placeholder}
        alt=""
      />
      <img
        data-strk-img-id="velmora-sphere-huggies-flatlay-220bd9"
        data-strk-img="gold hoop huggie earrings flat lay editorial jewelry"
        data-strk-img-ratio="4x3"
        data-strk-img-width="1200"
        src={placeholder}
        alt=""
      />

      {/* === AMBER LACE EARRINGS === */}
      <img
        data-strk-img-id="velmora-amber-lace-detail-d5f102"
        data-strk-img="gold filigree earring macro detail texture jewelry"
        data-strk-img-ratio="4x3"
        data-strk-img-width="1200"
        src={placeholder}
        alt=""
      />
      <img
        data-strk-img-id="velmora-amber-lace-flatlay-93bb55"
        data-strk-img="gold drop earrings filigree flat lay luxury jewelry"
        data-strk-img-ratio="4x3"
        data-strk-img-width="1200"
        src={placeholder}
        alt=""
      />

      {/* === ROYAL HEIRLOOM SET === */}
      <img
        data-strk-img-id="velmora-heirloom-set-detail-2b8800"
        data-strk-img="gold pendant necklace macro detail jewelry product"
        data-strk-img-ratio="4x3"
        data-strk-img-width="1200"
        src={placeholder}
        alt=""
      />
      <img
        data-strk-img-id="velmora-heirloom-set-flatlay-c1e30f"
        data-strk-img="gold jewelry gift set linen box ribbon flat lay luxury"
        data-strk-img-ratio="4x3"
        data-strk-img-width="1200"
        src={placeholder}
        alt=""
      />
    </div>
  );
}
