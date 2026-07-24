import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ProductCard from "@/components/product/ProductCard";
import Reveal from "@/components/ui/Reveal";

const BESTSELLERS = [
  {
    id: "vivid-aura-jewels",
    name: "Vivid Aura Jewels",
    tagline: "Gold ear cuff with crystal accent",
    price: 42,
    category: "earrings",
    rating: 4.9,
    badge: "Bestseller",
    nameId: "prod-vivid-aura-name",
    taglineId: "prod-vivid-aura-tag",
    mainImgId: "prod-vivid-aura-main-a1",
    hoverImgId: "prod-vivid-aura-hover-a1",
    mainQuery: "[prod-vivid-aura-tag] [prod-vivid-aura-name] [bestsellers-sub] [bestsellers-title]",
    hoverQuery: "[prod-vivid-aura-tag] worn on ear close-up, model lifestyle [bestsellers-title]",
  },
  {
    id: "majestic-flora-nectar",
    name: "Majestic Flora Nectar",
    tagline: "Multicolor floral crystal necklace",
    price: 68,
    category: "necklaces",
    rating: 4.8,
    badge: "New",
    nameId: "prod-majestic-flora-name",
    taglineId: "prod-majestic-flora-tag",
    mainImgId: "prod-majestic-flora-main-b2",
    hoverImgId: "prod-majestic-flora-hover-b2",
    mainQuery: "[prod-majestic-flora-tag] [prod-majestic-flora-name] [bestsellers-sub] [bestsellers-title]",
    hoverQuery: "[prod-majestic-flora-tag] worn on neck close-up, model lifestyle [bestsellers-title]",
  },
  {
    id: "golden-sphere-huggies",
    name: "Golden Sphere Huggies",
    tagline: "Chunky gold dome huggie earrings",
    price: 38,
    category: "huggies",
    rating: 5.0,
    badge: "Bestseller",
    nameId: "prod-golden-sphere-name",
    taglineId: "prod-golden-sphere-tag",
    mainImgId: "prod-golden-sphere-main-c3",
    hoverImgId: "prod-golden-sphere-hover-c3",
    mainQuery: "[prod-golden-sphere-tag] [prod-golden-sphere-name] [bestsellers-sub] [bestsellers-title]",
    hoverQuery: "[prod-golden-sphere-tag] worn on ear close-up, model lifestyle [bestsellers-title]",
  },
  {
    id: "amber-lace-earrings",
    name: "Amber Lace Earrings",
    tagline: "Textured gold filigree drop earrings",
    price: 54,
    category: "earrings",
    rating: 4.7,
    badge: null,
    nameId: "prod-amber-lace-name",
    taglineId: "prod-amber-lace-tag",
    mainImgId: "prod-amber-lace-main-d4",
    hoverImgId: "prod-amber-lace-hover-d4",
    mainQuery: "[prod-amber-lace-tag] [prod-amber-lace-name] [bestsellers-sub] [bestsellers-title]",
    hoverQuery: "[prod-amber-lace-tag] worn on ear close-up, model lifestyle [bestsellers-title]",
  },
  {
    id: "royal-heirloom-set",
    name: "Royal Heirloom Set",
    tagline: "Gift-boxed earring and necklace set in linen box",
    price: 95,
    compareAt: 116,
    category: "sets",
    rating: 4.9,
    badge: "Gift Ready",
    nameId: "prod-royal-heirloom-name",
    taglineId: "prod-royal-heirloom-tag",
    mainImgId: "prod-royal-heirloom-main-e5",
    hoverImgId: "prod-royal-heirloom-hover-e5",
    mainQuery: "[prod-royal-heirloom-tag] [prod-royal-heirloom-name] [bestsellers-sub] [bestsellers-title]",
    hoverQuery: "[prod-royal-heirloom-tag] elegant flat lay, lifestyle [bestsellers-title]",
  },
];

export default function Bestsellers() {
  return (
    <section className="bg-cream py-16 md:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="mb-10 flex flex-col gap-4 md:mb-14 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-widest2 text-gold">
              Most Loved
            </p>
            <h2
              id="bestsellers-title"
              className="mt-3 font-serif text-3xl font-light text-ink md:text-5xl"
            >
              The Bestsellers
            </h2>
            <p id="bestsellers-sub" className="mt-3 max-w-md text-sm leading-relaxed text-taupe">
              Warm 18K gold plated demi-fine jewelry on soft neutral backgrounds —
              the five pieces our community reaches for again and again.
            </p>
          </div>
          <Link
            to="/shop"
            className="group inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-widest2 text-ink transition-colors hover:text-gold-deep"
          >
            View All
            <ArrowRight
              size={14}
              strokeWidth={1.5}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </Reveal>

        <div className="grid grid-cols-2 gap-5 md:grid-cols-3 md:gap-8 lg:grid-cols-5">
          {BESTSELLERS.map((product, i) => (
            <Reveal key={product.id} delay={i * 80}>
              <ProductCard product={product} eager={i < 3} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
