import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronDown, ChevronUp, Minus, Plus } from 'lucide-react';
import { getProductBySlug, getRelatedProducts } from '../data/products';
import { useCart } from '../context/CartContext';
import StarRating from '../components/ui/StarRating';
import ProductCard from '../components/ui/ProductCard';

const P = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E";
const IC = 'w-full h-full object-cover';

// rel-* IDs are unique to this related-products context
function RelatedProductCard({ product }) {
  if (product.slug === 'vivid-aura-jewels') return (
    <ProductCard product={product}
      primaryImg={<img data-strk-img-id="rel-vivid-aura-img-r1a2b3" data-strk-img="[prod-vivid-aura-desc-a1b2c3] [prod-vivid-aura-title-a1b2c3]" data-strk-img-ratio="4x3" data-strk-img-width="400" src={P} alt="Vivid Aura Jewels" className={IC} />}
      hoverImg={<img data-strk-img-id="rel-vivid-aura-img2-r1a2b4" data-strk-img="[prod-vivid-aura-desc-a1b2c3] [prod-vivid-aura-title-a1b2c3]" data-strk-img-ratio="4x3" data-strk-img-width="400" src={P} alt="Vivid Aura Jewels alternate" className={IC} />}
    />
  );
  if (product.slug === 'majestic-flora-nectar') return (
    <ProductCard product={product}
      primaryImg={<img data-strk-img-id="rel-majestic-flora-img-r2c3d4" data-strk-img="[prod-majestic-flora-desc-d4e5f6] [prod-majestic-flora-title-d4e5f6]" data-strk-img-ratio="4x3" data-strk-img-width="400" src={P} alt="Majestic Flora Nectar" className={IC} />}
      hoverImg={<img data-strk-img-id="rel-majestic-flora-img2-r2c3d5" data-strk-img="[prod-majestic-flora-desc-d4e5f6] [prod-majestic-flora-title-d4e5f6]" data-strk-img-ratio="4x3" data-strk-img-width="400" src={P} alt="Majestic Flora Nectar alternate" className={IC} />}
    />
  );
  if (product.slug === 'golden-sphere-huggies') return (
    <ProductCard product={product}
      primaryImg={<img data-strk-img-id="rel-golden-sphere-img-r3e4f5" data-strk-img="[prod-golden-sphere-desc-g7h8i9] [prod-golden-sphere-title-g7h8i9]" data-strk-img-ratio="4x3" data-strk-img-width="400" src={P} alt="Golden Sphere Huggies" className={IC} />}
      hoverImg={<img data-strk-img-id="rel-golden-sphere-img2-r3e4f6" data-strk-img="[prod-golden-sphere-desc-g7h8i9] [prod-golden-sphere-title-g7h8i9]" data-strk-img-ratio="4x3" data-strk-img-width="400" src={P} alt="Golden Sphere Huggies alternate" className={IC} />}
    />
  );
  if (product.slug === 'amber-lace-earrings') return (
    <ProductCard product={product}
      primaryImg={<img data-strk-img-id="rel-amber-lace-img-r4g5h6" data-strk-img="[prod-amber-lace-desc-j1k2l3] [prod-amber-lace-title-j1k2l3]" data-strk-img-ratio="4x3" data-strk-img-width="400" src={P} alt="Amber Lace Earrings" className={IC} />}
      hoverImg={<img data-strk-img-id="rel-amber-lace-img2-r4g5h7" data-strk-img="[prod-amber-lace-desc-j1k2l3] [prod-amber-lace-title-j1k2l3]" data-strk-img-ratio="4x3" data-strk-img-width="400" src={P} alt="Amber Lace Earrings alternate" className={IC} />}
    />
  );
  if (product.slug === 'royal-heirloom-set') return (
    <ProductCard product={product}
      primaryImg={<img data-strk-img-id="rel-royal-heirloom-img-r5i6j7" data-strk-img="[prod-royal-heirloom-desc-m4n5o6] [prod-royal-heirloom-title-m4n5o6]" data-strk-img-ratio="4x3" data-strk-img-width="400" src={P} alt="Royal Heirloom Set" className={IC} />}
      hoverImg={<img data-strk-img-id="rel-royal-heirloom-img2-r5i6j8" data-strk-img="[prod-royal-heirloom-desc-m4n5o6] [prod-royal-heirloom-title-m4n5o6]" data-strk-img-ratio="4x3" data-strk-img-width="400" src={P} alt="Royal Heirloom Set alternate" className={IC} />}
    />
  );
  return <ProductCard product={product} />;
}

// pdp-* IDs are unique to the product detail gallery context
function PdpGallery({ slug, selectedImage, onSelect }) {
  if (slug === 'vivid-aura-jewels') return (
    <GalleryLayout selectedImage={selectedImage} onSelect={onSelect}
      thumb1={<img data-strk-img-id="pdp-vivid-aura-thumb1-p1a2b3" data-strk-img="[prod-vivid-aura-desc-a1b2c3] [prod-vivid-aura-title-a1b2c3]" data-strk-img-ratio="1x1" data-strk-img-width="80" src={P} alt="Vivid Aura Jewels view 1" className={IC} />}
      thumb2={<img data-strk-img-id="pdp-vivid-aura-thumb2-p1a2b4" data-strk-img="[prod-vivid-aura-desc-a1b2c3] [prod-vivid-aura-title-a1b2c3]" data-strk-img-ratio="1x1" data-strk-img-width="80" src={P} alt="Vivid Aura Jewels view 2" className={IC} />}
      thumb3={<img data-strk-img-id="pdp-vivid-aura-thumb3-p1a2b5" data-strk-img="[prod-vivid-aura-desc-a1b2c3] [prod-vivid-aura-title-a1b2c3]" data-strk-img-ratio="1x1" data-strk-img-width="80" src={P} alt="Vivid Aura Jewels view 3" className={IC} />}
      main1={<img data-strk-img-id="pdp-vivid-aura-main1-p1a2b3" data-strk-img="[prod-vivid-aura-desc-a1b2c3] [prod-vivid-aura-title-a1b2c3]" data-strk-img-ratio="4x3" data-strk-img-width="800" src={P} alt="Vivid Aura Jewels" className={`${IC} absolute inset-0`} />}
      main2={<img data-strk-img-id="pdp-vivid-aura-main2-p1a2b4" data-strk-img="[prod-vivid-aura-desc-a1b2c3] [prod-vivid-aura-title-a1b2c3]" data-strk-img-ratio="4x3" data-strk-img-width="800" src={P} alt="Vivid Aura Jewels view 2" className={`${IC} absolute inset-0`} />}
      main3={<img data-strk-img-id="pdp-vivid-aura-main3-p1a2b5" data-strk-img="[prod-vivid-aura-desc-a1b2c3] [prod-vivid-aura-title-a1b2c3]" data-strk-img-ratio="4x3" data-strk-img-width="800" src={P} alt="Vivid Aura Jewels view 3" className={`${IC} absolute inset-0`} />}
    />
  );
  if (slug === 'majestic-flora-nectar') return (
    <GalleryLayout selectedImage={selectedImage} onSelect={onSelect}
      thumb1={<img data-strk-img-id="pdp-majestic-flora-thumb1-p2c3d4" data-strk-img="[prod-majestic-flora-desc-d4e5f6] [prod-majestic-flora-title-d4e5f6]" data-strk-img-ratio="1x1" data-strk-img-width="80" src={P} alt="Majestic Flora Nectar view 1" className={IC} />}
      thumb2={<img data-strk-img-id="pdp-majestic-flora-thumb2-p2c3d5" data-strk-img="[prod-majestic-flora-desc-d4e5f6] [prod-majestic-flora-title-d4e5f6]" data-strk-img-ratio="1x1" data-strk-img-width="80" src={P} alt="Majestic Flora Nectar view 2" className={IC} />}
      thumb3={<img data-strk-img-id="pdp-majestic-flora-thumb3-p2c3d6" data-strk-img="[prod-majestic-flora-desc-d4e5f6] [prod-majestic-flora-title-d4e5f6]" data-strk-img-ratio="1x1" data-strk-img-width="80" src={P} alt="Majestic Flora Nectar view 3" className={IC} />}
      main1={<img data-strk-img-id="pdp-majestic-flora-main1-p2c3d4" data-strk-img="[prod-majestic-flora-desc-d4e5f6] [prod-majestic-flora-title-d4e5f6]" data-strk-img-ratio="4x3" data-strk-img-width="800" src={P} alt="Majestic Flora Nectar" className={`${IC} absolute inset-0`} />}
      main2={<img data-strk-img-id="pdp-majestic-flora-main2-p2c3d5" data-strk-img="[prod-majestic-flora-desc-d4e5f6] [prod-majestic-flora-title-d4e5f6]" data-strk-img-ratio="4x3" data-strk-img-width="800" src={P} alt="Majestic Flora Nectar view 2" className={`${IC} absolute inset-0`} />}
      main3={<img data-strk-img-id="pdp-majestic-flora-main3-p2c3d6" data-strk-img="[prod-majestic-flora-desc-d4e5f6] [prod-majestic-flora-title-d4e5f6]" data-strk-img-ratio="4x3" data-strk-img-width="800" src={P} alt="Majestic Flora Nectar view 3" className={`${IC} absolute inset-0`} />}
    />
  );
  if (slug === 'golden-sphere-huggies') return (
    <GalleryLayout selectedImage={selectedImage} onSelect={onSelect}
      thumb1={<img data-strk-img-id="pdp-golden-sphere-thumb1-p3e4f5" data-strk-img="[prod-golden-sphere-desc-g7h8i9] [prod-golden-sphere-title-g7h8i9]" data-strk-img-ratio="1x1" data-strk-img-width="80" src={P} alt="Golden Sphere Huggies view 1" className={IC} />}
      thumb2={<img data-strk-img-id="pdp-golden-sphere-thumb2-p3e4f6" data-strk-img="[prod-golden-sphere-desc-g7h8i9] [prod-golden-sphere-title-g7h8i9]" data-strk-img-ratio="1x1" data-strk-img-width="80" src={P} alt="Golden Sphere Huggies view 2" className={IC} />}
      thumb3={<img data-strk-img-id="pdp-golden-sphere-thumb3-p3e4f7" data-strk-img="[prod-golden-sphere-desc-g7h8i9] [prod-golden-sphere-title-g7h8i9]" data-strk-img-ratio="1x1" data-strk-img-width="80" src={P} alt="Golden Sphere Huggies view 3" className={IC} />}
      main1={<img data-strk-img-id="pdp-golden-sphere-main1-p3e4f5" data-strk-img="[prod-golden-sphere-desc-g7h8i9] [prod-golden-sphere-title-g7h8i9]" data-strk-img-ratio="4x3" data-strk-img-width="800" src={P} alt="Golden Sphere Huggies" className={`${IC} absolute inset-0`} />}
      main2={<img data-strk-img-id="pdp-golden-sphere-main2-p3e4f6" data-strk-img="[prod-golden-sphere-desc-g7h8i9] [prod-golden-sphere-title-g7h8i9]" data-strk-img-ratio="4x3" data-strk-img-width="800" src={P} alt="Golden Sphere Huggies view 2" className={`${IC} absolute inset-0`} />}
      main3={<img data-strk-img-id="pdp-golden-sphere-main3-p3e4f7" data-strk-img="[prod-golden-sphere-desc-g7h8i9] [prod-golden-sphere-title-g7h8i9]" data-strk-img-ratio="4x3" data-strk-img-width="800" src={P} alt="Golden Sphere Huggies view 3" className={`${IC} absolute inset-0`} />}
    />
  );
  if (slug === 'amber-lace-earrings') return (
    <GalleryLayout selectedImage={selectedImage} onSelect={onSelect}
      thumb1={<img data-strk-img-id="pdp-amber-lace-thumb1-p4g5h6" data-strk-img="[prod-amber-lace-desc-j1k2l3] [prod-amber-lace-title-j1k2l3]" data-strk-img-ratio="1x1" data-strk-img-width="80" src={P} alt="Amber Lace Earrings view 1" className={IC} />}
      thumb2={<img data-strk-img-id="pdp-amber-lace-thumb2-p4g5h7" data-strk-img="[prod-amber-lace-desc-j1k2l3] [prod-amber-lace-title-j1k2l3]" data-strk-img-ratio="1x1" data-strk-img-width="80" src={P} alt="Amber Lace Earrings view 2" className={IC} />}
      thumb3={<img data-strk-img-id="pdp-amber-lace-thumb3-p4g5h8" data-strk-img="[prod-amber-lace-desc-j1k2l3] [prod-amber-lace-title-j1k2l3]" data-strk-img-ratio="1x1" data-strk-img-width="80" src={P} alt="Amber Lace Earrings view 3" className={IC} />}
      main1={<img data-strk-img-id="pdp-amber-lace-main1-p4g5h6" data-strk-img="[prod-amber-lace-desc-j1k2l3] [prod-amber-lace-title-j1k2l3]" data-strk-img-ratio="4x3" data-strk-img-width="800" src={P} alt="Amber Lace Earrings" className={`${IC} absolute inset-0`} />}
      main2={<img data-strk-img-id="pdp-amber-lace-main2-p4g5h7" data-strk-img="[prod-amber-lace-desc-j1k2l3] [prod-amber-lace-title-j1k2l3]" data-strk-img-ratio="4x3" data-strk-img-width="800" src={P} alt="Amber Lace Earrings view 2" className={`${IC} absolute inset-0`} />}
      main3={<img data-strk-img-id="pdp-amber-lace-main3-p4g5h8" data-strk-img="[prod-amber-lace-desc-j1k2l3] [prod-amber-lace-title-j1k2l3]" data-strk-img-ratio="4x3" data-strk-img-width="800" src={P} alt="Amber Lace Earrings view 3" className={`${IC} absolute inset-0`} />}
    />
  );
  if (slug === 'royal-heirloom-set') return (
    <GalleryLayout selectedImage={selectedImage} onSelect={onSelect}
      thumb1={<img data-strk-img-id="pdp-royal-heirloom-thumb1-p5i6j7" data-strk-img="[prod-royal-heirloom-desc-m4n5o6] [prod-royal-heirloom-title-m4n5o6]" data-strk-img-ratio="1x1" data-strk-img-width="80" src={P} alt="Royal Heirloom Set view 1" className={IC} />}
      thumb2={<img data-strk-img-id="pdp-royal-heirloom-thumb2-p5i6j8" data-strk-img="[prod-royal-heirloom-desc-m4n5o6] [prod-royal-heirloom-title-m4n5o6]" data-strk-img-ratio="1x1" data-strk-img-width="80" src={P} alt="Royal Heirloom Set view 2" className={IC} />}
      thumb3={<img data-strk-img-id="pdp-royal-heirloom-thumb3-p5i6j9" data-strk-img="[prod-royal-heirloom-desc-m4n5o6] [prod-royal-heirloom-title-m4n5o6]" data-strk-img-ratio="1x1" data-strk-img-width="80" src={P} alt="Royal Heirloom Set view 3" className={IC} />}
      main1={<img data-strk-img-id="pdp-royal-heirloom-main1-p5i6j7" data-strk-img="[prod-royal-heirloom-desc-m4n5o6] [prod-royal-heirloom-title-m4n5o6]" data-strk-img-ratio="4x3" data-strk-img-width="800" src={P} alt="Royal Heirloom Set" className={`${IC} absolute inset-0`} />}
      main2={<img data-strk-img-id="pdp-royal-heirloom-main2-p5i6j8" data-strk-img="[prod-royal-heirloom-desc-m4n5o6] [prod-royal-heirloom-title-m4n5o6]" data-strk-img-ratio="4x3" data-strk-img-width="800" src={P} alt="Royal Heirloom Set view 2" className={`${IC} absolute inset-0`} />}
      main3={<img data-strk-img-id="pdp-royal-heirloom-main3-p5i6j9" data-strk-img="[prod-royal-heirloom-desc-m4n5o6] [prod-royal-heirloom-title-m4n5o6]" data-strk-img-ratio="4x3" data-strk-img-width="800" src={P} alt="Royal Heirloom Set view 3" className={`${IC} absolute inset-0`} />}
    />
  );
  return <GalleryLayout selectedImage={selectedImage} onSelect={onSelect} />;
}

function GalleryLayout({ selectedImage, onSelect, thumb1, thumb2, thumb3, main1, main2, main3 }) {
  const thumbs = [thumb1, thumb2, thumb3];
  const mains = [main1, main2, main3];
  return (
    <div className="flex flex-col-reverse md:flex-row gap-4">
      <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-visible">
        {thumbs.map((thumb, i) => (
          <button
            key={i}
            onClick={() => onSelect(i)}
            className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 overflow-hidden border-2 transition-colors duration-200 ${selectedImage === i ? 'border-espresso' : 'border-linen hover:border-taupe'}`}
          >
            {thumb}
          </button>
        ))}
      </div>
      <div className="flex-1 overflow-hidden bg-linen relative" style={{ aspectRatio: '4/5' }}>
        {mains.map((main, i) => (
          <div key={i} className={`absolute inset-0 transition-opacity duration-300 ${selectedImage === i ? 'opacity-100' : 'opacity-0'}`}>
            {main}
          </div>
        ))}
      </div>
    </div>
  );
}

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t border-linen">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="font-sans text-xs font-medium uppercase tracking-widest text-espresso">
          {title}
        </span>
        {open ? <ChevronUp size={16} className="text-taupe" /> : <ChevronDown size={16} className="text-taupe" />}
      </button>
      {open && (
        <div className="pb-5 font-sans text-sm text-taupe leading-relaxed">
          {children}
        </div>
      )}
    </div>
  );
}

export default function ProductDetail() {
  const { slug } = useParams();
  const product = getProductBySlug(slug);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-ivory pt-20">
        <p className="font-serif text-2xl text-espresso mb-4">Product not found</p>
        <Link to="/shop" className="font-sans text-xs uppercase tracking-widest text-gold border-b border-gold pb-0.5">
          Back to Shop
        </Link>
      </div>
    );
  }

  const related = getRelatedProducts(product, 4);

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="bg-ivory min-h-screen pt-20 md:pt-24">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-4">
        <nav className="flex items-center gap-2 font-sans text-xs text-taupe">
          <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-gold transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-espresso">{product.name}</span>
        </nav>
      </div>

      {/* Hidden text nodes for image queries */}
      <span id={product.titleId} className="sr-only">{product.name}</span>
      <span id={product.descId} className="sr-only">{product.description}</span>

      {/* Main product section */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 lg:gap-24">
          {/* Left: Image gallery */}
          <PdpGallery slug={product.slug} selectedImage={selectedImage} onSelect={setSelectedImage} />

          {/* Right: Product info */}
          <div className="flex flex-col">
            {product.badge && (
              <span className="self-start font-sans text-[10px] font-medium uppercase tracking-widest bg-espresso text-ivory px-3 py-1 mb-4">
                {product.badge}
              </span>
            )}

            <h1 className="font-serif font-medium text-3xl md:text-4xl text-espresso uppercase tracking-widest leading-tight mb-2">
              {product.name}
            </h1>

            <div className="flex items-center gap-4 mb-4">
              <StarRating rating={product.rating} count={product.reviews} />
            </div>

            <p className="font-serif text-3xl text-espresso mb-5">${product.price}</p>

            <p className="font-sans text-sm text-taupe leading-relaxed mb-8 border-b border-linen pb-8">
              {product.longDescription}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="font-sans text-xs font-medium uppercase tracking-widest text-espresso mb-3">
                Tone: <span className="text-taupe font-normal normal-case tracking-normal">{selectedVariant}</span>
              </p>
              <div className="flex gap-3">
                {product.variants.map((v) => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`px-5 py-2.5 font-sans text-xs font-medium uppercase tracking-widest border transition-colors duration-200 ${
                      selectedVariant === v
                        ? 'bg-espresso text-ivory border-espresso'
                        : 'bg-transparent text-taupe border-linen hover:border-espresso hover:text-espresso'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <p className="font-sans text-xs font-medium uppercase tracking-widest text-espresso mb-3">
                Quantity
              </p>
              <div className="flex items-center gap-0 border border-linen w-fit">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-11 h-11 flex items-center justify-center text-taupe hover:text-espresso hover:bg-linen transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus size={14} />
                </button>
                <span className="w-12 text-center font-sans text-sm text-espresso">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-11 h-11 flex items-center justify-center text-taupe hover:text-espresso hover:bg-linen transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className="w-full bg-espresso text-ivory font-sans text-xs font-semibold uppercase tracking-widest py-5 hover:bg-gold hover:text-espresso transition-colors duration-300 mb-3"
            >
              {added ? '✓ Added to Bag' : 'Add to Bag'}
            </button>
            <button className="w-full border border-linen text-taupe font-sans text-xs font-medium uppercase tracking-widest py-4 hover:border-espresso hover:text-espresso transition-colors duration-300">
              Add to Wishlist
            </button>

            {/* Trust signals */}
            <div className="mt-8 pt-6 border-t border-linen flex flex-col gap-2">
              {['Free worldwide shipping on all orders', '30-day hassle-free returns', 'Secure checkout · SSL encrypted'].map((t) => (
                <p key={t} className="font-sans text-xs text-taupe flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-gold flex-shrink-0" />
                  {t}
                </p>
              ))}
            </div>

            {/* Accordions */}
            <div className="mt-8">
              <Accordion title="Description">
                <p>{product.longDescription}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p className="mb-2"><strong className="text-espresso">Materials:</strong> {product.material}</p>
                <p><strong className="text-espresso">Care:</strong> {product.care}</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p className="mb-2">Free worldwide shipping on all orders. Estimated delivery: 3–7 business days.</p>
                <p>We offer a 30-day return policy on all unworn items in original packaging. Contact us to initiate a return.</p>
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      {related.length > 0 && (
        <section className="py-16 md:py-24 border-t border-linen">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <h2 className="font-serif font-medium text-3xl md:text-4xl text-espresso text-center mb-10">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6">
              {related.map((p) => (
                <RelatedProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
