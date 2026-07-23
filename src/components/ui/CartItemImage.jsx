export function CartItemImage({ productId, name }) {
  const className = "w-full h-full object-cover";

  switch (productId) {
    case "vivid-aura-jewels":
      return (
        <img
          data-strk-img-id="cart-vivid-aura"
          data-strk-img="gold ear cuff crystal accent demi fine jewelry"
          data-strk-img-ratio="3x4"
          data-strk-img-width="200"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={name}
          className={className}
        />
      );
    case "majestic-flora-nectar":
      return (
        <img
          data-strk-img-id="cart-flora-nectar"
          data-strk-img="multicolor floral crystal necklace gold jewelry"
          data-strk-img-ratio="3x4"
          data-strk-img-width="200"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={name}
          className={className}
        />
      );
    case "golden-sphere-huggies":
      return (
        <img
          data-strk-img-id="cart-sphere-huggies"
          data-strk-img="chunky gold dome huggie earrings polished"
          data-strk-img-ratio="3x4"
          data-strk-img-width="200"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={name}
          className={className}
        />
      );
    case "amber-lace-earrings":
      return (
        <img
          data-strk-img-id="cart-amber-lace"
          data-strk-img="textured gold filigree drop earrings luxury"
          data-strk-img-ratio="3x4"
          data-strk-img-width="200"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={name}
          className={className}
        />
      );
    case "royal-heirloom-set":
      return (
        <img
          data-strk-img-id="cart-heirloom-set"
          data-strk-img="gold earring necklace gift box set jewelry"
          data-strk-img-ratio="3x4"
          data-strk-img-width="200"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={name}
          className={className}
        />
      );
    default:
      return (
        <img
          src="https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/f_auto,q_auto,w_4096/unsplashcom/photo-1593370626845-1ca41c4983cb"
          alt={name}
          className={className}
        />
      );
  }
}
