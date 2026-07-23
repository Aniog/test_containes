import { products } from "@/data/products";
import { ProductCard } from "./ProductCard";


const baseClasses =
  "absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-luxury group-hover:scale-105";

export function ProductCardById({ productId }) {
  const product = products.find((p) => p.id === productId);
  if (!product) return null;

  switch (productId) {
    case "vivid-aura-jewels":
      return (
        <ProductCard
          product={product}
          image={
            <img
              data-strk-img-id="card-vivid-aura"
              data-strk-img="gold ear cuff crystal accent demi fine jewelry"
              data-strk-img-ratio="3x4"
              data-strk-img-width="600"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Vivid Aura Jewels"
              className={baseClasses}
            />
          }
        />
      );
    case "majestic-flora-nectar":
      return (
        <ProductCard
          product={product}
          image={
            <img
              data-strk-img-id="card-flora-nectar"
              data-strk-img="multicolor floral crystal necklace gold plated"
              data-strk-img-ratio="3x4"
              data-strk-img-width="600"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Majestic Flora Nectar"
              className={baseClasses}
            />
          }
        />
      );
    case "golden-sphere-huggies":
      return (
        <ProductCard
          product={product}
          image={
            <img
              data-strk-img-id="card-sphere-huggies"
              data-strk-img="chunky gold dome huggie earrings polished"
              data-strk-img-ratio="3x4"
              data-strk-img-width="600"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Golden Sphere Huggies"
              className={baseClasses}
            />
          }
        />
      );
    case "amber-lace-earrings":
      return (
        <ProductCard
          product={product}
          image={
            <img
              data-strk-img-id="card-amber-lace"
              data-strk-img="textured gold filigree drop earrings vintage"
              data-strk-img-ratio="3x4"
              data-strk-img-width="600"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Amber Lace Earrings"
              className={baseClasses}
            />
          }
        />
      );
    case "royal-heirloom-set":
      return (
        <ProductCard
          product={product}
          image={
            <img
              data-strk-img-id="card-heirloom-set"
              data-strk-img="gold earring necklace gift box set jewelry"
              data-strk-img-ratio="3x4"
              data-strk-img-width="600"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Royal Heirloom Set"
              className={baseClasses}
            />
          }
        />
      );
    default:
      return null;
  }
}
