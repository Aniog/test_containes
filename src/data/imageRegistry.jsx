// ----------------------------------------------------------------------------
// Image Registry
// ----------------------------------------------------------------------------
// This file declares every dynamic data-strk-img-id used across the storefront
// as a STATIC string literal in JSX. The strk-img Vite plugin walks this
// file's AST at build / dev-start time and pre-fetches an image for each
// literal ID, then stores the resolved URL in src/strk-img-config.json.
//
// Why we need it:
//   - ProductCard, ImageGallery and CartDrawer compose IDs from runtime data,
//     e.g.  `data-strk-img-id={\`pdp-main-${product.id}-${i}\`}`.
//   - The plugin's AST evaluator cannot resolve `product.id` at parse time, so
//     it skips those slots and never fetches an image for them.
//   - By declaring every concrete ID here as a literal, we hand the plugin a
//     complete, fully-resolvable list up front. The runtime ImageHelper then
//     matches those IDs to the DOM tags the components render.
//
// This component renders the registry as a hidden, zero-size block so the IDs
// also appear in the DOM at runtime — the runtime helper is happy either way,
// but rendering them gives the MutationObserver something to hook onto.
// ----------------------------------------------------------------------------

import React from 'react';

export default function ImageRegistry() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: 'absolute',
        width: 0,
        height: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
        opacity: 0,
      }}
    >
      {/* ===== vivid-aura-jewels (earrings / ear cuff) ===== */}
      <img alt="" data-strk-img-id="pdp-main-vivid-aura-jewels-0" data-strk-img="gold crystal ear cuff editorial warm light" data-strk-img-ratio="4x5" data-strk-img-width="1400" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" />
      <img alt="" data-strk-img-id="pdp-main-vivid-aura-jewels-1" data-strk-img="gold ear cuff with crystal on ear closeup" data-strk-img-ratio="4x5" data-strk-img-width="1400" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" />
      <img alt="" data-strk-img-id="pdp-main-vivid-aura-jewels-2" data-strk-img="gold crystal jewelry on warm dark background" data-strk-img-ratio="4x5" data-strk-img-width="1400" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" />
      <img alt="" data-strk-img-id="pdp-main-vivid-aura-jewels-3" data-strk-img="crystal ear cuff detail macro photography" data-strk-img-ratio="4x5" data-strk-img-width="1400" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" />

      <img alt="" data-strk-img-id="pdp-thumb-vivid-aura-jewels-0" data-strk-img="gold crystal ear cuff editorial warm light" data-strk-img-ratio="4x5" data-strk-img-width="200" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" />
      <img alt="" data-strk-img-id="pdp-thumb-vivid-aura-jewels-1" data-strk-img="gold ear cuff with crystal on ear closeup" data-strk-img-ratio="4x5" data-strk-img-width="200" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" />
      <img alt="" data-strk-img-id="pdp-thumb-vivid-aura-jewels-2" data-strk-img="gold crystal jewelry on warm dark background" data-strk-img-ratio="4x5" data-strk-img-width="200" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" />
      <img alt="" data-strk-img-id="pdp-thumb-vivid-aura-jewels-3" data-strk-img="crystal ear cuff detail macro photography" data-strk-img-ratio="4x5" data-strk-img-width="200" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" />

      <img alt="" data-strk-img-id="pdp-thumb-mob-vivid-aura-jewels-0" data-strk-img="gold crystal ear cuff editorial warm light" data-strk-img-ratio="4x5" data-strk-img-width="160" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" />
      <img alt="" data-strk-img-id="pdp-thumb-mob-vivid-aura-jewels-1" data-strk-img="gold ear cuff with crystal on ear closeup" data-strk-img-ratio="4x5" data-strk-img-width="160" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" />
      <img alt="" data-strk-img-id="pdp-thumb-mob-vivid-aura-jewels-2" data-strk-img="gold crystal jewelry on warm dark background" data-strk-img-ratio="4x5" data-strk-img-width="160" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" />
      <img alt="" data-strk-img-id="pdp-thumb-mob-vivid-aura-jewels-3" data-strk-img="crystal ear cuff detail macro photography" data-strk-img-ratio="4x5" data-strk-img-width="160" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" />

      <img alt="" data-strk-img-id="cart-vivid-aura-jewels" data-strk-img="gold crystal ear cuff editorial warm light" data-strk-img-ratio="4x5" data-strk-img-width="200" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" />

      {/* ===== majestic-flora-nectar (necklaces / multicolor crystal) ===== */}
      <img alt="" data-strk-img-id="pdp-main-majestic-flora-nectar-0" data-strk-img="multicolor floral crystal pendant necklace editorial" data-strk-img-ratio="4x5" data-strk-img-width="1400" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" />
      <img alt="" data-strk-img-id="pdp-main-majestic-flora-nectar-1" data-strk-img="gold chain necklace with crystal pendant closeup" data-strk-img-ratio="4x5" data-strk-img-width="1400" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" />
      <img alt="" data-strk-img-id="pdp-main-majestic-flora-nectar-2" data-strk-img="crystal necklace on neckline warm portrait" data-strk-img-ratio="4x5" data-strk-img-width="1400" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" />
      <img alt="" data-strk-img-id="pdp-main-majestic-flora-nectar-3" data-strk-img="gold crystal necklace on dark background detail" data-strk-img-ratio="4x5" data-strk-img-width="1400" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" />

      <img alt="" data-strk-img-id="pdp-thumb-majestic-flora-nectar-0" data-strk-img="multicolor floral crystal pendant necklace editorial" data-strk-img-ratio="4x5" data-strk-img-width="200" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" />
      <img alt="" data-strk-img-id="pdp-thumb-majestic-flora-nectar-1" data-strk-img="gold chain necklace with crystal pendant closeup" data-strk-img-ratio="4x5" data-strk-img-width="200" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" />
      <img alt="" data-strk-img-id="pdp-thumb-majestic-flora-nectar-2" data-strk-img="crystal necklace on neckline warm portrait" data-strk-img-ratio="4x5" data-strk-img-width="200" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" />
      <img alt="" data-strk-img-id="pdp-thumb-majestic-flora-nectar-3" data-strk-img="gold crystal necklace on dark background detail" data-strk-img-ratio="4x5" data-strk-img-width="200" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" />

      <img alt="" data-strk-img-id="pdp-thumb-mob-majestic-flora-nectar-0" data-strk-img="multicolor floral crystal pendant necklace editorial" data-strk-img-ratio="4x5" data-strk-img-width="160" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" />
      <img alt="" data-strk-img-id="pdp-thumb-mob-majestic-flora-nectar-1" data-strk-img="gold chain necklace with crystal pendant closeup" data-strk-img-ratio="4x5" data-strk-img-width="160" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" />
      <img alt="" data-strk-img-id="pdp-thumb-mob-majestic-flora-nectar-2" data-strk-img="crystal necklace on neckline warm portrait" data-strk-img-ratio="4x5" data-strk-img-width="160" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" />
      <img alt="" data-strk-img-id="pdp-thumb-mob-majestic-flora-nectar-3" data-strk-img="gold crystal necklace on dark background detail" data-strk-img-ratio="4x5" data-strk-img-width="160" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" />

      <img alt="" data-strk-img-id="cart-majestic-flora-nectar" data-strk-img="multicolor floral crystal pendant necklace editorial" data-strk-img-ratio="4x5" data-strk-img-width="200" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" />

      {/* ===== golden-sphere-huggies (huggies / chunky gold dome) ===== */}
      <img alt="" data-strk-img-id="pdp-main-golden-sphere-huggies-0" data-strk-img="gold dome huggie earring editorial closeup" data-strk-img-ratio="4x5" data-strk-img-width="1400" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" />
      <img alt="" data-strk-img-id="pdp-main-golden-sphere-huggies-1" data-strk-img="chunky gold huggie earring on ear warm light" data-strk-img-ratio="4x5" data-strk-img-width="1400" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" />
      <img alt="" data-strk-img-id="pdp-main-golden-sphere-huggies-2" data-strk-img="gold huggie hoop earring detail macro" data-strk-img-ratio="4x5" data-strk-img-width="1400" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" />
      <img alt="" data-strk-img-id="pdp-main-golden-sphere-huggies-3" data-strk-img="gold dome earrings on warm neutral background" data-strk-img-ratio="4x5" data-strk-img-width="1400" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" />

      <img alt="" data-strk-img-id="pdp-thumb-golden-sphere-huggies-0" data-strk-img="gold dome huggie earring editorial closeup" data-strk-img-ratio="4x5" data-strk-img-width="200" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" />
      <img alt="" data-strk-img-id="pdp-thumb-golden-sphere-huggies-1" data-strk-img="chunky gold huggie earring on ear warm light" data-strk-img-ratio="4x5" data-strk-img-width="200" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" />
      <img alt="" data-strk-img-id="pdp-thumb-golden-sphere-huggies-2" data-strk-img="gold huggie hoop earring detail macro" data-strk-img-ratio="4x5" data-strk-img-width="200" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" />
      <img alt="" data-strk-img-id="pdp-thumb-golden-sphere-huggies-3" data-strk-img="gold dome earrings on warm neutral background" data-strk-img-ratio="4x5" data-strk-img-width="200" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" />

      <img alt="" data-strk-img-id="pdp-thumb-mob-golden-sphere-huggies-0" data-strk-img="gold dome huggie earring editorial closeup" data-strk-img-ratio="4x5" data-strk-img-width="160" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" />
      <img alt="" data-strk-img-id="pdp-thumb-mob-golden-sphere-huggies-1" data-strk-img="chunky gold huggie earring on ear warm light" data-strk-img-ratio="4x5" data-strk-img-width="160" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" />
      <img alt="" data-strk-img-id="pdp-thumb-mob-golden-sphere-huggies-2" data-strk-img="gold huggie hoop earring detail macro" data-strk-img-ratio="4x5" data-strk-img-width="160" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" />
      <img alt="" data-strk-img-id="pdp-thumb-mob-golden-sphere-huggies-3" data-strk-img="gold dome earrings on warm neutral background" data-strk-img-ratio="4x5" data-strk-img-width="160" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" />

      <img alt="" data-strk-img-id="cart-golden-sphere-huggies" data-strk-img="gold dome huggie earring editorial closeup" data-strk-img-ratio="4x5" data-strk-img-width="200" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" />

      {/* ===== amber-lace-earrings (earrings / textured gold filigree drop) ===== */}
      <img alt="" data-strk-img-id="pdp-main-amber-lace-earrings-0" data-strk-img="gold filigree drop earring editorial warm light" data-strk-img-ratio="4x5" data-strk-img-width="1400" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" />
      <img alt="" data-strk-img-id="pdp-main-amber-lace-earrings-1" data-strk-img="textured gold drop earring closeup on ear" data-strk-img-ratio="4x5" data-strk-img-width="1400" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" />
      <img alt="" data-strk-img-id="pdp-main-amber-lace-earrings-2" data-strk-img="gold filigree jewelry on warm dark background" data-strk-img-ratio="4x5" data-strk-img-width="1400" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" />
      <img alt="" data-strk-img-id="pdp-main-amber-lace-earrings-3" data-strk-img="vintage gold lace earring detail macro" data-strk-img-ratio="4x5" data-strk-img-width="1400" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" />

      <img alt="" data-strk-img-id="pdp-thumb-amber-lace-earrings-0" data-strk-img="gold filigree drop earring editorial warm light" data-strk-img-ratio="4x5" data-strk-img-width="200" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" />
      <img alt="" data-strk-img-id="pdp-thumb-amber-lace-earrings-1" data-strk-img="textured gold drop earring closeup on ear" data-strk-img-ratio="4x5" data-strk-img-width="200" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" />
      <img alt="" data-strk-img-id="pdp-thumb-amber-lace-earrings-2" data-strk-img="gold filigree jewelry on warm dark background" data-strk-img-ratio="4x5" data-strk-img-width="200" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" />
      <img alt="" data-strk-img-id="pdp-thumb-amber-lace-earrings-3" data-strk-img="vintage gold lace earring detail macro" data-strk-img-ratio="4x5" data-strk-img-width="200" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" />

      <img alt="" data-strk-img-id="pdp-thumb-mob-amber-lace-earrings-0" data-strk-img="gold filigree drop earring editorial warm light" data-strk-img-ratio="4x5" data-strk-img-width="160" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" />
      <img alt="" data-strk-img-id="pdp-thumb-mob-amber-lace-earrings-1" data-strk-img="textured gold drop earring closeup on ear" data-strk-img-ratio="4x5" data-strk-img-width="160" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" />
      <img alt="" data-strk-img-id="pdp-thumb-mob-amber-lace-earrings-2" data-strk-img="gold filigree jewelry on warm dark background" data-strk-img-ratio="4x5" data-strk-img-width="160" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" />
      <img alt="" data-strk-img-id="pdp-thumb-mob-amber-lace-earrings-3" data-strk-img="vintage gold lace earring detail macro" data-strk-img-ratio="4x5" data-strk-img-width="160" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" />

      <img alt="" data-strk-img-id="cart-amber-lace-earrings" data-strk-img="gold filigree drop earring editorial warm light" data-strk-img-ratio="4x5" data-strk-img-width="200" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" />

      {/* ===== royal-heirloom-set (sets / earrings + necklace gift set) ===== */}
      <img alt="" data-strk-img-id="pdp-main-royal-heirloom-set-0" data-strk-img="gift boxed jewelry set earrings necklace editorial" data-strk-img-ratio="4x5" data-strk-img-width="1400" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" />
      <img alt="" data-strk-img-id="pdp-main-royal-heirloom-set-1" data-strk-img="jewelry set in kraft gift box warm light" data-strk-img-ratio="4x5" data-strk-img-width="1400" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" />
      <img alt="" data-strk-img-id="pdp-main-royal-heirloom-set-2" data-strk-img="gold earrings and necklace set on linen" data-strk-img-ratio="4x5" data-strk-img-width="1400" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" />
      <img alt="" data-strk-img-id="pdp-main-royal-heirloom-set-3" data-strk-img="jewelry gift set unboxing on cream background" data-strk-img-ratio="4x5" data-strk-img-width="1400" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" />

      <img alt="" data-strk-img-id="pdp-thumb-royal-heirloom-set-0" data-strk-img="gift boxed jewelry set earrings necklace editorial" data-strk-img-ratio="4x5" data-strk-img-width="200" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" />
      <img alt="" data-strk-img-id="pdp-thumb-royal-heirloom-set-1" data-strk-img="jewelry set in kraft gift box warm light" data-strk-img-ratio="4x5" data-strk-img-width="200" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" />
      <img alt="" data-strk-img-id="pdp-thumb-royal-heirloom-set-2" data-strk-img="gold earrings and necklace set on linen" data-strk-img-ratio="4x5" data-strk-img-width="200" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" />
      <img alt="" data-strk-img-id="pdp-thumb-royal-heirloom-set-3" data-strk-img="jewelry gift set unboxing on cream background" data-strk-img-ratio="4x5" data-strk-img-width="200" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" />

      <img alt="" data-strk-img-id="pdp-thumb-mob-royal-heirloom-set-0" data-strk-img="gift boxed jewelry set earrings necklace editorial" data-strk-img-ratio="4x5" data-strk-img-width="160" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" />
      <img alt="" data-strk-img-id="pdp-thumb-mob-royal-heirloom-set-1" data-strk-img="jewelry set in kraft gift box warm light" data-strk-img-ratio="4x5" data-strk-img-width="160" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" />
      <img alt="" data-strk-img-id="pdp-thumb-mob-royal-heirloom-set-2" data-strk-img="gold earrings and necklace set on linen" data-strk-img-ratio="4x5" data-strk-img-width="160" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" />
      <img alt="" data-strk-img-id="pdp-thumb-mob-royal-heirloom-set-3" data-strk-img="jewelry gift set unboxing on cream background" data-strk-img-ratio="4x5" data-strk-img-width="160" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" />

      <img alt="" data-strk-img-id="cart-royal-heirloom-set" data-strk-img="gift boxed jewelry set earrings necklace editorial" data-strk-img-ratio="4x5" data-strk-img-width="200" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" />
    </div>
  );
}
