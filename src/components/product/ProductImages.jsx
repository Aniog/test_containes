// Static per-product image pairs with literal data-strk-img-id values.
// The strk-img plugin requires static string literals for IDs — no variables or
// template literals — so each product branch must be written out explicitly.

const P = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E";

function imgCls(visible) {
  return `absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
    visible ? "opacity-100 scale-100" : "opacity-0 scale-105"
  }`;
}

export default function ProductImages({ productId, hovered, name }) {
  if (productId === "vivid-aura-jewels") {
    return (
      <>
        <img
          data-strk-img-id="vivid-aura-main-a1b2c3"
          data-strk-img="gold ear cuff crystal accent earrings demi-fine jewelry"
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src={P}
          alt={name}
          className={imgCls(!hovered)}
        />
        <img
          data-strk-img-id="vivid-aura-hover-a1b2c3"
          data-strk-img="gold ear cuff worn on model earrings close-up"
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src={P}
          alt={`${name} worn`}
          className={imgCls(hovered)}
        />
      </>
    );
  }

  if (productId === "majestic-flora-nectar") {
    return (
      <>
        <img
          data-strk-img-id="flora-main-d4e5f6"
          data-strk-img="floral crystal necklace multicolor gold demi-fine jewelry"
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src={P}
          alt={name}
          className={imgCls(!hovered)}
        />
        <img
          data-strk-img-id="flora-hover-d4e5f6"
          data-strk-img="floral necklace worn on model collarbone gold"
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src={P}
          alt={`${name} worn`}
          className={imgCls(hovered)}
        />
      </>
    );
  }

  if (productId === "golden-sphere-huggies") {
    return (
      <>
        <img
          data-strk-img-id="huggies-main-g7h8i9"
          data-strk-img="gold dome huggie earrings chunky mirror-polished jewelry"
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src={P}
          alt={name}
          className={imgCls(!hovered)}
        />
        <img
          data-strk-img-id="huggies-hover-g7h8i9"
          data-strk-img="gold huggie earrings worn on ear model close-up"
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src={P}
          alt={`${name} worn`}
          className={imgCls(hovered)}
        />
      </>
    );
  }

  if (productId === "amber-lace-earrings") {
    return (
      <>
        <img
          data-strk-img-id="amber-main-j1k2l3"
          data-strk-img="gold filigree drop earrings lattice heirloom jewelry"
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src={P}
          alt={name}
          className={imgCls(!hovered)}
        />
        <img
          data-strk-img-id="amber-hover-j1k2l3"
          data-strk-img="gold filigree drop earrings worn on model ear"
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src={P}
          alt={`${name} worn`}
          className={imgCls(hovered)}
        />
      </>
    );
  }

  if (productId === "royal-heirloom-set") {
    return (
      <>
        <img
          data-strk-img-id="royal-main-m4n5o6"
          data-strk-img="gold jewelry gift set earrings necklace luxury box"
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src={P}
          alt={name}
          className={imgCls(!hovered)}
        />
        <img
          data-strk-img-id="royal-hover-m4n5o6"
          data-strk-img="gold jewelry set worn on model earrings necklace"
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src={P}
          alt={`${name} worn`}
          className={imgCls(hovered)}
        />
      </>
    );
  }

  // Fallback: plain placeholder for any future products
  return (
    <div className="absolute inset-0 w-full h-full bg-parchment" />
  );
}
