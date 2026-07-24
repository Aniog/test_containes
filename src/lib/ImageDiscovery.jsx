import React from 'react';
import { SEED_PRODUCTS } from './seed-data';

/**
 * This component is used to help the Strikingly image plugin discover
 * image IDs that are used dynamically at runtime (e.g. in the cart or on PDP).
 * By rendering these tags statically here, they get added to strk-img-config.json.
 */
// Image Discovery - COMPLETELY STATIC FOR PLUGIN DISCOVERY
// The plugin regex data-strk-(?:img|bg)-id=["']([^"']+)["'] requires static quotes.
const ImageDiscovery = () => {
  return (
    <div style={{ display: 'none' }} aria-hidden="true" id="discovery-container">
      {/* 3010 - Vivid Aura Jewels */}
      <img data-strk-img-id="prod-img-3010" data-strk-img="Vivid Aura Jewels jewelry product" />
      <img data-strk-img-id="shop-img-3010" data-strk-img="Vivid Aura Jewels minimalist jewelry" />
      <img data-strk-img-id="cart-img-3010" data-strk-img="Vivid Aura Jewels cart item" />
      <img data-strk-img-id="pdp-main-3010" data-strk-img="Vivid Aura Jewels editorial main" />
      <img data-strk-img-id="pdp-thumb-3010-1" data-strk-img="Vivid Aura Jewels thumb 1" />
      <img data-strk-img-id="pdp-thumb-3010-2" data-strk-img="Vivid Aura Jewels thumb 2" />
      <img data-strk-img-id="pdp-thumb-3010-3" data-strk-img="Vivid Aura Jewels thumb 3" />
      <img data-strk-img-id="rel-img-3010" data-strk-img="Vivid Aura Jewels recommended" />

      {/* 3020 - Majestic Flora Nectar */}
      <img data-strk-img-id="prod-img-3020" data-strk-img="Majestic Flora Nectar jewelry product" />
      <img data-strk-img-id="shop-img-3020" data-strk-img="Majestic Flora Nectar minimalist jewelry" />
      <img data-strk-img-id="cart-img-3020" data-strk-img="Majestic Flora Nectar cart item" />
      <img data-strk-img-id="pdp-main-3020" data-strk-img="Majestic Flora Nectar editorial main" />
      <img data-strk-img-id="pdp-thumb-3020-1" data-strk-img="Majestic Flora Nectar thumb 1" />
      <img data-strk-img-id="pdp-thumb-3020-2" data-strk-img="Majestic Flora Nectar thumb 2" />
      <img data-strk-img-id="pdp-thumb-3020-3" data-strk-img="Majestic Flora Nectar thumb 3" />
      <img data-strk-img-id="rel-img-3020" data-strk-img="Majestic Flora Nectar recommended" />

      {/* 3030 - Golden Sphere Huggies */}
      <img data-strk-img-id="prod-img-3030" data-strk-img="Golden Sphere Huggies jewelry product" />
      <img data-strk-img-id="shop-img-3030" data-strk-img="Golden Sphere Huggies minimalist jewelry" />
      <img data-strk-img-id="cart-img-3030" data-strk-img="Golden Sphere Huggies cart item" />
      <img data-strk-img-id="pdp-main-3030" data-strk-img="Golden Sphere Huggies editorial main" />
      <img data-strk-img-id="pdp-thumb-3030-1" data-strk-img="Golden Sphere Huggies thumb 1" />
      <img data-strk-img-id="pdp-thumb-3030-2" data-strk-img="Golden Sphere Huggies thumb 2" />
      <img data-strk-img-id="pdp-thumb-3030-3" data-strk-img="Golden Sphere Huggies thumb 3" />
      <img data-strk-img-id="rel-img-3030" data-strk-img="Golden Sphere Huggies recommended" />

      {/* 3040 - Amber Lace Earrings */}
      <img data-strk-img-id="prod-img-3040" data-strk-img="Amber Lace Earrings jewelry product" />
      <img data-strk-img-id="shop-img-3040" data-strk-img="Amber Lace Earrings minimalist jewelry" />
      <img data-strk-img-id="cart-img-3040" data-strk-img="Amber Lace Earrings cart item" />
      <img data-strk-img-id="pdp-main-3040" data-strk-img="Amber Lace Earrings editorial main" />
      <img data-strk-img-id="pdp-thumb-3040-1" data-strk-img="Amber Lace Earrings thumb 1" />
      <img data-strk-img-id="pdp-thumb-3040-2" data-strk-img="Amber Lace Earrings thumb 2" />
      <img data-strk-img-id="pdp-thumb-3040-3" data-strk-img="Amber Lace Earrings thumb 3" />
      <img data-strk-img-id="rel-img-3040" data-strk-img="Amber Lace Earrings recommended" />

      {/* 3050 - Royal Heirloom Set */}
      <img data-strk-img-id="prod-img-3050" data-strk-img="Royal Heirloom Set jewelry product" />
      <img data-strk-img-id="shop-img-3050" data-strk-img="Royal Heirloom Set minimalist jewelry" />
      <img data-strk-img-id="cart-img-3050" data-strk-img="Royal Heirloom Set cart item" />
      <img data-strk-img-id="pdp-main-3050" data-strk-img="Royal Heirloom Set editorial main" />
      <img data-strk-img-id="pdp-thumb-3050-1" data-strk-img="Royal Heirloom Set thumb 1" />
      <img data-strk-img-id="pdp-thumb-3050-2" data-strk-img="Royal Heirloom Set thumb 2" />
      <img data-strk-img-id="pdp-thumb-3050-3" data-strk-img="Royal Heirloom Set thumb 3" />
      <img data-strk-img-id="rel-img-3050" data-strk-img="Royal Heirloom Set recommended" />

      {/* Home & Static */}
      <div data-strk-bg-id="hero-bg-9922a" data-strk-bg="Luxury gold jewelry hero section Crafted to be Treasured" />
      <img data-strk-img-id="story-img" data-strk-img="Our Story jewelry designer working warm lit studio editorial" />
      
      {/* Category Tiles */}
      <div data-strk-bg-id="cat-bg-Earrings" data-strk-bg="Gold Earrings category collection" />
      <div data-strk-bg-id="cat-bg-Necklaces" data-strk-bg="Gold Necklaces category collection" />
      <div data-strk-bg-id="cat-bg-Huggies" data-strk-bg="Gold Huggies category collection" />

      {/* Social Reels */}
      <img data-strk-img-id="ugc-img-1" data-strk-img="jewelry reel beauty lifestyle 1" />
      <img data-strk-img-id="ugc-img-2" data-strk-img="jewelry reel beauty lifestyle 2" />
      <img data-strk-img-id="ugc-img-3" data-strk-img="jewelry reel beauty lifestyle 3" />
      <img data-strk-img-id="ugc-img-4" data-strk-img="jewelry reel beauty lifestyle 4" />
      <img data-strk-img-id="ugc-img-5" data-strk-img="jewelry reel beauty lifestyle 5" />
      <img data-strk-img-id="ugc-img-6" data-strk-img="jewelry reel beauty lifestyle 6" />
    </div>
  );
};

export default ImageDiscovery;
