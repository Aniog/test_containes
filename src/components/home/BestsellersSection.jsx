import { Link } from 'react-router-dom';
import { products } from '../../data/products';
import ProductCard from '../ui/ProductCard';

const IMG_CLASS = 'w-full h-full object-cover';
const PLACEHOLDER = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E";

export default function BestsellersSection() {
  return (
    <section className="py-20 md:py-28 bg-ivory">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="font-sans text-xs font-medium uppercase tracking-widest text-gold mb-3">
            Most Loved
          </p>
          <h2 className="font-serif font-medium text-4xl md:text-5xl text-espresso">
            Bestsellers
          </h2>
          <div className="w-12 h-px bg-gold mx-auto mt-5" />
        </div>

        {/* Hidden text nodes for image queries */}
        <span id="prod-vivid-aura-title-a1b2c3" className="sr-only">Vivid Aura Jewels</span>
        <span id="prod-vivid-aura-desc-a1b2c3" className="sr-only">Gold ear cuff with crystal accent</span>
        <span id="prod-majestic-flora-title-d4e5f6" className="sr-only">Majestic Flora Nectar</span>
        <span id="prod-majestic-flora-desc-d4e5f6" className="sr-only">Multicolor floral crystal necklace</span>
        <span id="prod-golden-sphere-title-g7h8i9" className="sr-only">Golden Sphere Huggies</span>
        <span id="prod-golden-sphere-desc-g7h8i9" className="sr-only">Chunky gold dome huggie earrings</span>
        <span id="prod-amber-lace-title-j1k2l3" className="sr-only">Amber Lace Earrings</span>
        <span id="prod-amber-lace-desc-j1k2l3" className="sr-only">Textured gold filigree drop earrings</span>
        <span id="prod-royal-heirloom-title-m4n5o6" className="sr-only">Royal Heirloom Set</span>
        <span id="prod-royal-heirloom-desc-m4n5o6" className="sr-only">Gift-boxed earring + necklace set</span>

        {/* Product grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 md:gap-6">
          <ProductCard
            product={products[0]}
            primaryImg={<img data-strk-img-id="prod-vivid-aura-img-a1b2c3" data-strk-img="[prod-vivid-aura-desc-a1b2c3] [prod-vivid-aura-title-a1b2c3]" data-strk-img-ratio="4x3" data-strk-img-width="600" src={PLACEHOLDER} alt="Vivid Aura Jewels" className={IMG_CLASS} />}
            hoverImg={<img data-strk-img-id="prod-vivid-aura-img2-a1b2c4" data-strk-img="[prod-vivid-aura-desc-a1b2c3] [prod-vivid-aura-title-a1b2c3]" data-strk-img-ratio="4x3" data-strk-img-width="600" src={PLACEHOLDER} alt="Vivid Aura Jewels alternate" className={IMG_CLASS} />}
          />
          <ProductCard
            product={products[1]}
            primaryImg={<img data-strk-img-id="prod-majestic-flora-img-d4e5f6" data-strk-img="[prod-majestic-flora-desc-d4e5f6] [prod-majestic-flora-title-d4e5f6]" data-strk-img-ratio="4x3" data-strk-img-width="600" src={PLACEHOLDER} alt="Majestic Flora Nectar" className={IMG_CLASS} />}
            hoverImg={<img data-strk-img-id="prod-majestic-flora-img2-d4e5f7" data-strk-img="[prod-majestic-flora-desc-d4e5f6] [prod-majestic-flora-title-d4e5f6]" data-strk-img-ratio="4x3" data-strk-img-width="600" src={PLACEHOLDER} alt="Majestic Flora Nectar alternate" className={IMG_CLASS} />}
          />
          <ProductCard
            product={products[2]}
            primaryImg={<img data-strk-img-id="prod-golden-sphere-img-g7h8i9" data-strk-img="[prod-golden-sphere-desc-g7h8i9] [prod-golden-sphere-title-g7h8i9]" data-strk-img-ratio="4x3" data-strk-img-width="600" src={PLACEHOLDER} alt="Golden Sphere Huggies" className={IMG_CLASS} />}
            hoverImg={<img data-strk-img-id="prod-golden-sphere-img2-g7h8j0" data-strk-img="[prod-golden-sphere-desc-g7h8i9] [prod-golden-sphere-title-g7h8i9]" data-strk-img-ratio="4x3" data-strk-img-width="600" src={PLACEHOLDER} alt="Golden Sphere Huggies alternate" className={IMG_CLASS} />}
          />
          <ProductCard
            product={products[3]}
            primaryImg={<img data-strk-img-id="prod-amber-lace-img-j1k2l3" data-strk-img="[prod-amber-lace-desc-j1k2l3] [prod-amber-lace-title-j1k2l3]" data-strk-img-ratio="4x3" data-strk-img-width="600" src={PLACEHOLDER} alt="Amber Lace Earrings" className={IMG_CLASS} />}
            hoverImg={<img data-strk-img-id="prod-amber-lace-img2-j1k2l4" data-strk-img="[prod-amber-lace-desc-j1k2l3] [prod-amber-lace-title-j1k2l3]" data-strk-img-ratio="4x3" data-strk-img-width="600" src={PLACEHOLDER} alt="Amber Lace Earrings alternate" className={IMG_CLASS} />}
          />
          <ProductCard
            product={products[4]}
            primaryImg={<img data-strk-img-id="prod-royal-heirloom-img-m4n5o6" data-strk-img="[prod-royal-heirloom-desc-m4n5o6] [prod-royal-heirloom-title-m4n5o6]" data-strk-img-ratio="4x3" data-strk-img-width="600" src={PLACEHOLDER} alt="Royal Heirloom Set" className={IMG_CLASS} />}
            hoverImg={<img data-strk-img-id="prod-royal-heirloom-img2-m4n5o7" data-strk-img="[prod-royal-heirloom-desc-m4n5o6] [prod-royal-heirloom-title-m4n5o6]" data-strk-img-ratio="4x3" data-strk-img-width="600" src={PLACEHOLDER} alt="Royal Heirloom Set alternate" className={IMG_CLASS} />}
          />
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="inline-block border border-espresso text-espresso font-sans text-xs font-medium uppercase tracking-widest px-10 py-4 hover:bg-espresso hover:text-ivory transition-colors duration-300"
          >
            View All Jewelry
          </Link>
        </div>
      </div>
    </section>
  );
}
