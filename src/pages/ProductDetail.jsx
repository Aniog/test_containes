import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ShoppingBag, ChevronDown, ChevronUp, ArrowLeft } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductImage from '../components/ui/ProductImage';
import ProductCard from '../components/ui/ProductCard';

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t border-blush">
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="font-sans text-xs tracking-widest uppercase text-obsidian">{title}</span>
        {open ? <ChevronUp size={14} className="text-stone" /> : <ChevronDown size={14} className="text-stone" />}
      </button>
      {open && (
        <div className="pb-5">
          <p className="font-sans text-sm text-stone leading-relaxed">{children}</p>
        </div>
      )}
    </div>
  );
}

export default function ProductDetail() {
  const { slug } = useParams();
  const product = products.find(p => p.slug === slug) || products[0];
  const related = products.filter(p => p.id !== product.id).slice(0, 4);

  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const [quantity, setQuantity] = useState(1);
  const [activeImg, setActiveImg] = useState(0);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const imgVariants = [
    { bg: 'dark', gold: product.imgColor, accent: product.imgAccent },
    { bg: 'warm', gold: product.imgAccent, accent: product.imgColor },
    { bg: 'neutral', gold: product.imgColor, accent: '#ffffff' },
  ];

  return (
    <div className="bg-cream min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-8">
          <Link to="/shop" className="flex items-center gap-1.5 font-sans text-xs text-stone hover:text-gold transition-colors">
            <ArrowLeft size={12} />
            Back to Shop
          </Link>
          <span className="text-blush">/</span>
          <span className="font-sans text-xs text-stone capitalize">{product.category}</span>
          <span className="text-blush">/</span>
          <span className="font-sans text-xs text-obsidian uppercase tracking-wider">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {/* Left: Image Gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-3">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible">
              {imgVariants.map((v, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className={`flex-shrink-0 w-16 h-20 overflow-hidden border-2 transition-colors duration-200 ${
                    activeImg === i ? 'border-gold' : 'border-transparent hover:border-blush'
                  }`}
                  aria-label={`View image ${i + 1}`}
                >
                  <ProductImage
                    shape={product.imgShape}
                    gold={v.gold}
                    accent={v.accent}
                    bg={v.bg}
                    className="w-full h-full"
                    alt={`${product.name} view ${i + 1}`}
                  />
                </button>
              ))}
            </div>

            {/* Main image */}
            <div className="flex-1 aspect-[3/4] overflow-hidden relative">
              <ProductImage
                shape={product.imgShape}
                gold={imgVariants[activeImg].gold}
                accent={imgVariants[activeImg].accent}
                bg={imgVariants[activeImg].bg}
                className="w-full h-full"
                alt={product.name}
              />
              {/* Gold corner accent */}
              <div className="absolute top-4 left-4 right-4 bottom-4 border border-gold/15 pointer-events-none" />
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="flex flex-col">
            {/* Category */}
            <p className="font-sans text-xs tracking-widest uppercase text-gold mb-2">
              {product.category}
            </p>

            {/* Name */}
            <h1 className="font-serif text-3xl md:text-4xl uppercase tracking-widest text-obsidian font-light leading-tight mb-3">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={12}
                    className={i < Math.floor(product.rating) ? 'text-gold fill-gold' : 'text-blush fill-blush'}
                  />
                ))}
              </div>
              <span className="font-sans text-xs text-stone">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="font-serif text-2xl text-obsidian mb-5">${product.price}</p>

            {/* Short description */}
            <p className="font-sans text-sm text-stone leading-relaxed mb-6 border-t border-blush pt-5">
              {product.shortDescription}
            </p>

            {/* Variant selector */}
            <div className="mb-5">
              <p className="font-sans text-xs tracking-widest uppercase text-obsidian mb-3">
                Finish: <span className="text-gold">{selectedVariant}</span>
              </p>
              <div className="flex gap-2">
                {product.variants.map(v => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`font-sans text-xs tracking-wider uppercase px-4 py-2 border transition-all duration-200 ${
                      selectedVariant === v
                        ? 'border-gold bg-gold text-obsidian'
                        : 'border-blush text-stone hover:border-gold hover:text-obsidian'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <p className="font-sans text-xs tracking-widest uppercase text-obsidian mb-3">Quantity</p>
              <div className="flex items-center border border-blush w-fit">
                <button
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center text-stone hover:text-obsidian hover:bg-ivory transition-colors"
                  aria-label="Decrease quantity"
                >
                  −
                </button>
                <span className="w-10 text-center font-sans text-sm text-obsidian">{quantity}</span>
                <button
                  onClick={() => setQuantity(q => q + 1)}
                  className="w-10 h-10 flex items-center justify-center text-stone hover:text-obsidian hover:bg-ivory transition-colors"
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className={`w-full flex items-center justify-center gap-3 py-4 font-sans text-xs tracking-widest uppercase transition-all duration-300 ${
                added
                  ? 'bg-obsidian text-gold'
                  : 'bg-gold text-obsidian hover:bg-gold-light'
              }`}
            >
              <ShoppingBag size={14} />
              {added ? 'Added to Cart!' : 'Add to Cart'}
            </button>

            {/* Trust signals */}
            <div className="flex flex-wrap gap-4 mt-4 pt-4 border-t border-blush">
              {['Free Shipping', '30-Day Returns', 'Secure Checkout'].map(t => (
                <span key={t} className="font-sans text-[11px] tracking-wider text-stone uppercase">
                  ✓ {t}
                </span>
              ))}
            </div>

            {/* Accordions */}
            <div className="mt-6">
              <Accordion title="Description">{product.description}</Accordion>
              <Accordion title="Materials & Care">
                <strong className="text-obsidian">Material:</strong> {product.material}
                <br /><br />
                <strong className="text-obsidian">Care:</strong> {product.care}
              </Accordion>
              <Accordion title="Shipping & Returns">{product.shipping}</Accordion>
            </div>
          </div>
        </div>

        {/* You May Also Like */}
        <div className="mt-20 md:mt-28">
          <div className="text-center mb-10">
            <p className="font-sans text-xs tracking-widest uppercase text-gold mb-2">Discover More</p>
            <h2 className="font-serif text-2xl md:text-3xl text-obsidian font-light">You May Also Like</h2>
            <div className="w-10 h-px bg-gold mx-auto mt-3" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {related.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
