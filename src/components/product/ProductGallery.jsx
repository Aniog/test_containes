// Static per-product gallery — literal data-strk-img-id values required by the strk-img plugin.
// Each product branch renders all 3 main images (show/hide via className) and all 3 thumbnails.

const P = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E";

function thumbBtnCls(active) {
  return `flex-shrink-0 w-16 h-20 md:w-20 md:h-24 overflow-hidden border transition-colors ${
    active ? "border-gold" : "border-border hover:border-stone"
  }`;
}

function mainImgCls(visible) {
  return `w-full h-full object-cover ${visible ? "block" : "hidden"}`;
}

export default function ProductGallery({ productId, activeImg, onThumbClick, productName }) {
  if (productId === "vivid-aura-jewels") {
    return (
      <div className="flex flex-col-reverse md:flex-row gap-3">
        <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible scrollbar-hide">
          {[
            ["vivid-aura-main-a1b2c3-g1-thumb", "gold ear cuff crystal accent earrings jewelry"],
            ["vivid-aura-main-a1b2c3-g2-thumb", "gold ear cuff worn on model earrings"],
            ["vivid-aura-main-a1b2c3-g3-thumb", "gold ear cuff crystal detail close-up"],
          ].map(([id, q], i) => (
            <button key={id} onClick={() => onThumbClick(i)} className={thumbBtnCls(activeImg === i)}>
              <img data-strk-img-id={id} data-strk-img={q} data-strk-img-ratio="3x4" data-strk-img-width="200" src={P} alt={`${productName} view ${i + 1}`} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
        <div className="flex-1 aspect-[3/4] bg-parchment overflow-hidden">
          <img data-strk-img-id="vivid-aura-main-a1b2c3-g1" data-strk-img="gold ear cuff crystal accent earrings demi-fine jewelry" data-strk-img-ratio="3x4" data-strk-img-width="800" src={P} alt={productName} className={mainImgCls(activeImg === 0)} />
          <img data-strk-img-id="vivid-aura-main-a1b2c3-g2" data-strk-img="gold ear cuff worn on model earrings close-up" data-strk-img-ratio="3x4" data-strk-img-width="800" src={P} alt={productName} className={mainImgCls(activeImg === 1)} />
          <img data-strk-img-id="vivid-aura-main-a1b2c3-g3" data-strk-img="gold ear cuff crystal detail close-up jewelry" data-strk-img-ratio="3x4" data-strk-img-width="800" src={P} alt={productName} className={mainImgCls(activeImg === 2)} />
        </div>
      </div>
    );
  }

  if (productId === "majestic-flora-nectar") {
    return (
      <div className="flex flex-col-reverse md:flex-row gap-3">
        <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible scrollbar-hide">
          {[
            ["flora-main-d4e5f6-g1-thumb", "floral crystal necklace multicolor gold jewelry"],
            ["flora-main-d4e5f6-g2-thumb", "floral necklace worn on model collarbone gold"],
            ["flora-main-d4e5f6-g3-thumb", "floral crystal necklace detail close-up jewelry"],
          ].map(([id, q], i) => (
            <button key={id} onClick={() => onThumbClick(i)} className={thumbBtnCls(activeImg === i)}>
              <img data-strk-img-id={id} data-strk-img={q} data-strk-img-ratio="3x4" data-strk-img-width="200" src={P} alt={`${productName} view ${i + 1}`} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
        <div className="flex-1 aspect-[3/4] bg-parchment overflow-hidden">
          <img data-strk-img-id="flora-main-d4e5f6-g1" data-strk-img="floral crystal necklace multicolor gold demi-fine jewelry" data-strk-img-ratio="3x4" data-strk-img-width="800" src={P} alt={productName} className={mainImgCls(activeImg === 0)} />
          <img data-strk-img-id="flora-main-d4e5f6-g2" data-strk-img="floral necklace worn on model collarbone gold" data-strk-img-ratio="3x4" data-strk-img-width="800" src={P} alt={productName} className={mainImgCls(activeImg === 1)} />
          <img data-strk-img-id="flora-main-d4e5f6-g3" data-strk-img="floral crystal necklace detail close-up jewelry" data-strk-img-ratio="3x4" data-strk-img-width="800" src={P} alt={productName} className={mainImgCls(activeImg === 2)} />
        </div>
      </div>
    );
  }

  if (productId === "golden-sphere-huggies") {
    return (
      <div className="flex flex-col-reverse md:flex-row gap-3">
        <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible scrollbar-hide">
          {[
            ["huggies-main-g7h8i9-g1-thumb", "gold dome huggie earrings chunky mirror-polished jewelry"],
            ["huggies-main-g7h8i9-g2-thumb", "gold huggie earrings worn on ear model close-up"],
            ["huggies-main-g7h8i9-g3-thumb", "gold huggie earrings detail close-up jewelry"],
          ].map(([id, q], i) => (
            <button key={id} onClick={() => onThumbClick(i)} className={thumbBtnCls(activeImg === i)}>
              <img data-strk-img-id={id} data-strk-img={q} data-strk-img-ratio="3x4" data-strk-img-width="200" src={P} alt={`${productName} view ${i + 1}`} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
        <div className="flex-1 aspect-[3/4] bg-parchment overflow-hidden">
          <img data-strk-img-id="huggies-main-g7h8i9-g1" data-strk-img="gold dome huggie earrings chunky mirror-polished jewelry" data-strk-img-ratio="3x4" data-strk-img-width="800" src={P} alt={productName} className={mainImgCls(activeImg === 0)} />
          <img data-strk-img-id="huggies-main-g7h8i9-g2" data-strk-img="gold huggie earrings worn on ear model close-up" data-strk-img-ratio="3x4" data-strk-img-width="800" src={P} alt={productName} className={mainImgCls(activeImg === 1)} />
          <img data-strk-img-id="huggies-main-g7h8i9-g3" data-strk-img="gold huggie earrings detail close-up jewelry" data-strk-img-ratio="3x4" data-strk-img-width="800" src={P} alt={productName} className={mainImgCls(activeImg === 2)} />
        </div>
      </div>
    );
  }

  if (productId === "amber-lace-earrings") {
    return (
      <div className="flex flex-col-reverse md:flex-row gap-3">
        <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible scrollbar-hide">
          {[
            ["amber-main-j1k2l3-g1-thumb", "gold filigree drop earrings lattice heirloom jewelry"],
            ["amber-main-j1k2l3-g2-thumb", "gold filigree drop earrings worn on model ear"],
            ["amber-main-j1k2l3-g3-thumb", "gold filigree earrings detail close-up jewelry"],
          ].map(([id, q], i) => (
            <button key={id} onClick={() => onThumbClick(i)} className={thumbBtnCls(activeImg === i)}>
              <img data-strk-img-id={id} data-strk-img={q} data-strk-img-ratio="3x4" data-strk-img-width="200" src={P} alt={`${productName} view ${i + 1}`} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
        <div className="flex-1 aspect-[3/4] bg-parchment overflow-hidden">
          <img data-strk-img-id="amber-main-j1k2l3-g1" data-strk-img="gold filigree drop earrings lattice heirloom jewelry" data-strk-img-ratio="3x4" data-strk-img-width="800" src={P} alt={productName} className={mainImgCls(activeImg === 0)} />
          <img data-strk-img-id="amber-main-j1k2l3-g2" data-strk-img="gold filigree drop earrings worn on model ear" data-strk-img-ratio="3x4" data-strk-img-width="800" src={P} alt={productName} className={mainImgCls(activeImg === 1)} />
          <img data-strk-img-id="amber-main-j1k2l3-g3" data-strk-img="gold filigree earrings detail close-up jewelry" data-strk-img-ratio="3x4" data-strk-img-width="800" src={P} alt={productName} className={mainImgCls(activeImg === 2)} />
        </div>
      </div>
    );
  }

  if (productId === "royal-heirloom-set") {
    return (
      <div className="flex flex-col-reverse md:flex-row gap-3">
        <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible scrollbar-hide">
          {[
            ["royal-main-m4n5o6-g1-thumb", "gold jewelry gift set earrings necklace luxury box"],
            ["royal-main-m4n5o6-g2-thumb", "gold jewelry set worn on model earrings necklace"],
            ["royal-main-m4n5o6-g3-thumb", "gold jewelry gift set detail close-up luxury"],
          ].map(([id, q], i) => (
            <button key={id} onClick={() => onThumbClick(i)} className={thumbBtnCls(activeImg === i)}>
              <img data-strk-img-id={id} data-strk-img={q} data-strk-img-ratio="3x4" data-strk-img-width="200" src={P} alt={`${productName} view ${i + 1}`} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
        <div className="flex-1 aspect-[3/4] bg-parchment overflow-hidden">
          <img data-strk-img-id="royal-main-m4n5o6-g1" data-strk-img="gold jewelry gift set earrings necklace luxury box" data-strk-img-ratio="3x4" data-strk-img-width="800" src={P} alt={productName} className={mainImgCls(activeImg === 0)} />
          <img data-strk-img-id="royal-main-m4n5o6-g2" data-strk-img="gold jewelry set worn on model earrings necklace" data-strk-img-ratio="3x4" data-strk-img-width="800" src={P} alt={productName} className={mainImgCls(activeImg === 1)} />
          <img data-strk-img-id="royal-main-m4n5o6-g3" data-strk-img="gold jewelry gift set detail close-up luxury" data-strk-img-ratio="3x4" data-strk-img-width="800" src={P} alt={productName} className={mainImgCls(activeImg === 2)} />
        </div>
      </div>
    );
  }

  // Fallback for any future products
  return (
    <div className="flex-1 aspect-[3/4] bg-parchment" />
  );
}
