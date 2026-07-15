import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { ProductCard } from '@/components/ProductCard';

export function Bestsellers() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="bg-velmora-cream py-16 md:py-24">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <div className="mb-10 flex flex-col items-start justify-between gap-4 md:mb-14 md:flex-row md:items-end">
          <div>
            <p className="mb-2 font-sans text-xs font-medium uppercase tracking-widest-xl text-velmora-gold">
              Most Loved
            </p>
            <h2 className="font-serif text-3xl text-velmora-charcoal md:text-4xl">
              Bestsellers
            </h2>
          </div>
          <Link
            to="/shop"
            className="font-sans text-xs uppercase tracking-widest text-velmora-charcoal underline underline-offset-4 transition-colors hover:text-velmora-gold"
          >
            View All
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 lg:grid-cols-5">
          <ProductCard
            product={products[0]}
            imgId="product-thumb-vivid-aura-jewels"
            hoverImgId="product-hover-vivid-aura-jewels"
            titleId="product-title-vivid-aura-jewels"
            descId="product-desc-vivid-aura-jewels"
            query="[product-desc-vivid-aura-jewels] [product-title-vivid-aura-jewels] gold jewelry elegant"
            hoverQuery="[product-desc-vivid-aura-jewels] [product-title-vivid-aura-jewels] gold jewelry worn on model"
          />
          <ProductCard
            product={products[1]}
            imgId="product-thumb-majestic-flora-nectar"
            hoverImgId="product-hover-majestic-flora-nectar"
            titleId="product-title-majestic-flora-nectar"
            descId="product-desc-majestic-flora-nectar"
            query="[product-desc-majestic-flora-nectar] [product-title-majestic-flora-nectar] gold jewelry elegant"
            hoverQuery="[product-desc-majestic-flora-nectar] [product-title-majestic-flora-nectar] gold jewelry worn on model"
          />
          <ProductCard
            product={products[2]}
            imgId="product-thumb-golden-sphere-huggies"
            hoverImgId="product-hover-golden-sphere-huggies"
            titleId="product-title-golden-sphere-huggies"
            descId="product-desc-golden-sphere-huggies"
            query="[product-desc-golden-sphere-huggies] [product-title-golden-sphere-huggies] gold jewelry elegant"
            hoverQuery="[product-desc-golden-sphere-huggies] [product-title-golden-sphere-huggies] gold jewelry worn on model"
          />
          <ProductCard
            product={products[3]}
            imgId="product-thumb-amber-lace-earrings"
            hoverImgId="product-hover-amber-lace-earrings"
            titleId="product-title-amber-lace-earrings"
            descId="product-desc-amber-lace-earrings"
            query="[product-desc-amber-lace-earrings] [product-title-amber-lace-earrings] gold jewelry elegant"
            hoverQuery="[product-desc-amber-lace-earrings] [product-title-amber-lace-earrings] gold jewelry worn on model"
          />
          <ProductCard
            product={products[4]}
            imgId="product-thumb-royal-heirloom-set"
            hoverImgId="product-hover-royal-heirloom-set"
            titleId="product-title-royal-heirloom-set"
            descId="product-desc-royal-heirloom-set"
            query="[product-desc-royal-heirloom-set] [product-title-royal-heirloom-set] gold jewelry elegant"
            hoverQuery="[product-desc-royal-heirloom-set] [product-title-royal-heirloom-set] gold jewelry worn on model"
          />
        </div>
      </div>
    </section>
  );
}
