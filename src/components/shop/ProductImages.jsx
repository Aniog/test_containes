/**
 * Static image components per product — all data-strk-img-id values are
 * string literals so the build plugin can pre-resolve every image.
 */

const PLACEHOLDER = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E";

const BASE = 'absolute inset-0 w-full h-full object-cover transition-all duration-500';

/* ─── Card images (3x4, 600px) ─────────────────────────────────────────── */

function VividAuraCardImages() {
  return (
    <>
      <img
        data-strk-img-id="pc-vivid-aura-main-a1b2c3"
        data-strk-img="gold ear cuff crystal accent demi-fine jewelry woman wearing close up"
        data-strk-img-ratio="3x4" data-strk-img-width="600"
        src={PLACEHOLDER} alt="Vivid Aura Jewels"
        className={`${BASE} group-hover:opacity-0`}
      />
      <img
        data-strk-img-id="pc-vivid-aura-alt-d4e5f6"
        data-strk-img="gold ear cuff crystal worn model alternate view demi-fine jewelry"
        data-strk-img-ratio="3x4" data-strk-img-width="600"
        src={PLACEHOLDER} alt="Vivid Aura Jewels — alternate view"
        className={`${BASE} opacity-0 group-hover:opacity-100 scale-105`}
      />
    </>
  );
}

function MajesticFloraCardImages() {
  return (
    <>
      <img
        data-strk-img-id="pc-flora-main-g7h8i9"
        data-strk-img="multicolor floral crystal necklace demi-fine gold woman wearing"
        data-strk-img-ratio="3x4" data-strk-img-width="600"
        src={PLACEHOLDER} alt="Majestic Flora Nectar"
        className={`${BASE} group-hover:opacity-0`}
      />
      <img
        data-strk-img-id="pc-flora-alt-j1k2l3"
        data-strk-img="floral crystal necklace worn model alternate view demi-fine gold"
        data-strk-img-ratio="3x4" data-strk-img-width="600"
        src={PLACEHOLDER} alt="Majestic Flora Nectar — alternate view"
        className={`${BASE} opacity-0 group-hover:opacity-100 scale-105`}
      />
    </>
  );
}

function GoldenSphereCardImages() {
  return (
    <>
      <img
        data-strk-img-id="pc-huggies-main-m4n5o6"
        data-strk-img="chunky gold dome huggie earrings demi-fine woman wearing close up"
        data-strk-img-ratio="3x4" data-strk-img-width="600"
        src={PLACEHOLDER} alt="Golden Sphere Huggies"
        className={`${BASE} group-hover:opacity-0`}
      />
      <img
        data-strk-img-id="pc-huggies-alt-p7q8r9"
        data-strk-img="gold huggie earrings worn model alternate view demi-fine jewelry"
        data-strk-img-ratio="3x4" data-strk-img-width="600"
        src={PLACEHOLDER} alt="Golden Sphere Huggies — alternate view"
        className={`${BASE} opacity-0 group-hover:opacity-100 scale-105`}
      />
    </>
  );
}

function AmberLaceCardImages() {
  return (
    <>
      <img
        data-strk-img-id="pc-amber-main-s1t2u3"
        data-strk-img="textured gold filigree drop earrings demi-fine woman wearing close up"
        data-strk-img-ratio="3x4" data-strk-img-width="600"
        src={PLACEHOLDER} alt="Amber Lace Earrings"
        className={`${BASE} group-hover:opacity-0`}
      />
      <img
        data-strk-img-id="pc-amber-alt-v4w5x6"
        data-strk-img="gold filigree drop earrings worn model alternate view demi-fine"
        data-strk-img-ratio="3x4" data-strk-img-width="600"
        src={PLACEHOLDER} alt="Amber Lace Earrings — alternate view"
        className={`${BASE} opacity-0 group-hover:opacity-100 scale-105`}
      />
    </>
  );
}

function RoyalHeirloomCardImages() {
  return (
    <>
      <img
        data-strk-img-id="pc-heirloom-main-y7z8a9"
        data-strk-img="gold earring necklace gift set demi-fine jewelry box luxury"
        data-strk-img-ratio="3x4" data-strk-img-width="600"
        src={PLACEHOLDER} alt="Royal Heirloom Set"
        className={`${BASE} group-hover:opacity-0`}
      />
      <img
        data-strk-img-id="pc-heirloom-alt-b1c2d3"
        data-strk-img="gold jewelry gift set worn model alternate view demi-fine earrings necklace"
        data-strk-img-ratio="3x4" data-strk-img-width="600"
        src={PLACEHOLDER} alt="Royal Heirloom Set — alternate view"
        className={`${BASE} opacity-0 group-hover:opacity-100 scale-105`}
      />
    </>
  );
}

export function ProductCardImages({ productId }) {
  switch (productId) {
    case 'vivid-aura-jewels':      return <VividAuraCardImages />;
    case 'majestic-flora-nectar':  return <MajesticFloraCardImages />;
    case 'golden-sphere-huggies':  return <GoldenSphereCardImages />;
    case 'amber-lace-earrings':    return <AmberLaceCardImages />;
    case 'royal-heirloom-set':     return <RoyalHeirloomCardImages />;
    default:                       return null;
  }
}

/* ─── Detail images (4x5, 900px main / 200px thumb) ────────────────────── */

const DETAIL_BASE = 'w-full h-full object-cover';

function VividAuraDetailImages({ activeImg }) {
  return (
    <>
      {activeImg === 0 && (
        <img
          data-strk-img-id="pdp-vivid-aura-main-e1f2g3"
          data-strk-img="gold ear cuff crystal accent demi-fine jewelry close up product detail"
          data-strk-img-ratio="4x5" data-strk-img-width="900"
          src={PLACEHOLDER} alt="Vivid Aura Jewels" className={DETAIL_BASE}
        />
      )}
      {activeImg === 1 && (
        <img
          data-strk-img-id="pdp-vivid-aura-alt-h4i5j6"
          data-strk-img="gold ear cuff crystal worn model alternate view demi-fine portrait"
          data-strk-img-ratio="4x5" data-strk-img-width="900"
          src={PLACEHOLDER} alt="Vivid Aura Jewels — alternate view" className={DETAIL_BASE}
        />
      )}
    </>
  );
}

function MajesticFloraDetailImages({ activeImg }) {
  return (
    <>
      {activeImg === 0 && (
        <img
          data-strk-img-id="pdp-flora-main-k7l8m9"
          data-strk-img="multicolor floral crystal necklace demi-fine gold close up product detail"
          data-strk-img-ratio="4x5" data-strk-img-width="900"
          src={PLACEHOLDER} alt="Majestic Flora Nectar" className={DETAIL_BASE}
        />
      )}
      {activeImg === 1 && (
        <img
          data-strk-img-id="pdp-flora-alt-n1o2p3"
          data-strk-img="floral crystal necklace worn model alternate view demi-fine gold portrait"
          data-strk-img-ratio="4x5" data-strk-img-width="900"
          src={PLACEHOLDER} alt="Majestic Flora Nectar — alternate view" className={DETAIL_BASE}
        />
      )}
    </>
  );
}

function GoldenSphereDetailImages({ activeImg }) {
  return (
    <>
      {activeImg === 0 && (
        <img
          data-strk-img-id="pdp-huggies-main-q4r5s6"
          data-strk-img="chunky gold dome huggie earrings demi-fine close up product detail"
          data-strk-img-ratio="4x5" data-strk-img-width="900"
          src={PLACEHOLDER} alt="Golden Sphere Huggies" className={DETAIL_BASE}
        />
      )}
      {activeImg === 1 && (
        <img
          data-strk-img-id="pdp-huggies-alt-t7u8v9"
          data-strk-img="gold huggie earrings worn model alternate view demi-fine portrait"
          data-strk-img-ratio="4x5" data-strk-img-width="900"
          src={PLACEHOLDER} alt="Golden Sphere Huggies — alternate view" className={DETAIL_BASE}
        />
      )}
    </>
  );
}

function AmberLaceDetailImages({ activeImg }) {
  return (
    <>
      {activeImg === 0 && (
        <img
          data-strk-img-id="pdp-amber-main-w1x2y3"
          data-strk-img="textured gold filigree drop earrings demi-fine close up product detail"
          data-strk-img-ratio="4x5" data-strk-img-width="900"
          src={PLACEHOLDER} alt="Amber Lace Earrings" className={DETAIL_BASE}
        />
      )}
      {activeImg === 1 && (
        <img
          data-strk-img-id="pdp-amber-alt-z4a5b6"
          data-strk-img="gold filigree drop earrings worn model alternate view demi-fine portrait"
          data-strk-img-ratio="4x5" data-strk-img-width="900"
          src={PLACEHOLDER} alt="Amber Lace Earrings — alternate view" className={DETAIL_BASE}
        />
      )}
    </>
  );
}

function RoyalHeirloomDetailImages({ activeImg }) {
  return (
    <>
      {activeImg === 0 && (
        <img
          data-strk-img-id="pdp-heirloom-main-c7d8e9"
          data-strk-img="gold earring necklace gift set demi-fine jewelry box luxury close up"
          data-strk-img-ratio="4x5" data-strk-img-width="900"
          src={PLACEHOLDER} alt="Royal Heirloom Set" className={DETAIL_BASE}
        />
      )}
      {activeImg === 1 && (
        <img
          data-strk-img-id="pdp-heirloom-alt-f1g2h3"
          data-strk-img="gold jewelry gift set worn model alternate view demi-fine earrings necklace portrait"
          data-strk-img-ratio="4x5" data-strk-img-width="900"
          src={PLACEHOLDER} alt="Royal Heirloom Set — alternate view" className={DETAIL_BASE}
        />
      )}
    </>
  );
}

export function ProductDetailMainImage({ productId, activeImg }) {
  switch (productId) {
    case 'vivid-aura-jewels':      return <VividAuraDetailImages activeImg={activeImg} />;
    case 'majestic-flora-nectar':  return <MajesticFloraDetailImages activeImg={activeImg} />;
    case 'golden-sphere-huggies':  return <GoldenSphereDetailImages activeImg={activeImg} />;
    case 'amber-lace-earrings':    return <AmberLaceDetailImages activeImg={activeImg} />;
    case 'royal-heirloom-set':     return <RoyalHeirloomDetailImages activeImg={activeImg} />;
    default:                       return null;
  }
}

/* ─── Thumbnail images (4x5, 200px) ────────────────────────────────────── */

const THUMB_BASE = 'w-full h-full object-cover';

export function ProductDetailThumbs({ productId, thumbIndex }) {
  if (productId === 'vivid-aura-jewels') {
    if (thumbIndex === 0) return <img data-strk-img-id="pdp-vivid-aura-thumb1-i4j5k6" data-strk-img="gold ear cuff crystal demi-fine jewelry thumbnail" data-strk-img-ratio="4x5" data-strk-img-width="200" src={PLACEHOLDER} alt="View 1" className={THUMB_BASE} />;
    if (thumbIndex === 1) return <img data-strk-img-id="pdp-vivid-aura-thumb2-l7m8n9" data-strk-img="gold ear cuff crystal alternate view thumbnail" data-strk-img-ratio="4x5" data-strk-img-width="200" src={PLACEHOLDER} alt="View 2" className={THUMB_BASE} />;
  }
  if (productId === 'majestic-flora-nectar') {
    if (thumbIndex === 0) return <img data-strk-img-id="pdp-flora-thumb1-o1p2q3" data-strk-img="floral crystal necklace demi-fine gold thumbnail" data-strk-img-ratio="4x5" data-strk-img-width="200" src={PLACEHOLDER} alt="View 1" className={THUMB_BASE} />;
    if (thumbIndex === 1) return <img data-strk-img-id="pdp-flora-thumb2-r4s5t6" data-strk-img="floral crystal necklace alternate view thumbnail" data-strk-img-ratio="4x5" data-strk-img-width="200" src={PLACEHOLDER} alt="View 2" className={THUMB_BASE} />;
  }
  if (productId === 'golden-sphere-huggies') {
    if (thumbIndex === 0) return <img data-strk-img-id="pdp-huggies-thumb1-u7v8w9" data-strk-img="gold dome huggie earrings demi-fine thumbnail" data-strk-img-ratio="4x5" data-strk-img-width="200" src={PLACEHOLDER} alt="View 1" className={THUMB_BASE} />;
    if (thumbIndex === 1) return <img data-strk-img-id="pdp-huggies-thumb2-x1y2z3" data-strk-img="gold huggie earrings alternate view thumbnail" data-strk-img-ratio="4x5" data-strk-img-width="200" src={PLACEHOLDER} alt="View 2" className={THUMB_BASE} />;
  }
  if (productId === 'amber-lace-earrings') {
    if (thumbIndex === 0) return <img data-strk-img-id="pdp-amber-thumb1-a4b5c6" data-strk-img="gold filigree drop earrings demi-fine thumbnail" data-strk-img-ratio="4x5" data-strk-img-width="200" src={PLACEHOLDER} alt="View 1" className={THUMB_BASE} />;
    if (thumbIndex === 1) return <img data-strk-img-id="pdp-amber-thumb2-d7e8f9" data-strk-img="gold filigree drop earrings alternate view thumbnail" data-strk-img-ratio="4x5" data-strk-img-width="200" src={PLACEHOLDER} alt="View 2" className={THUMB_BASE} />;
  }
  if (productId === 'royal-heirloom-set') {
    if (thumbIndex === 0) return <img data-strk-img-id="pdp-heirloom-thumb1-g1h2i3" data-strk-img="gold jewelry gift set demi-fine thumbnail" data-strk-img-ratio="4x5" data-strk-img-width="200" src={PLACEHOLDER} alt="View 1" className={THUMB_BASE} />;
    if (thumbIndex === 1) return <img data-strk-img-id="pdp-heirloom-thumb2-j4k5l6" data-strk-img="gold jewelry gift set alternate view thumbnail" data-strk-img-ratio="4x5" data-strk-img-width="200" src={PLACEHOLDER} alt="View 2" className={THUMB_BASE} />;
  }
  return null;
}
