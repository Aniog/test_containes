import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronDown, ChevronUp, Minus, Plus, ShoppingBag, ArrowLeft } from 'lucide-react';
import { getProductBySlug, products } from '../data/products';
import { useCart } from '../context/CartContext';
import JewelryPlaceholder from '../components/ui/JewelryPlaceholder';
import ProductCard from '../components/product/ProductCard';

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t border-linen">
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="font-sans text-sm font-semibold uppercase tracking-widest text-ink group-hover:text-gold transition-colors duration-200">
          {title}
        </span>
        {open
          ? <ChevronUp className="w-4 h-4 text-ink-muted flex-shrink-0" />
          : <ChevronDown className="w-4 h-4 text-ink-muted flex-shrink-0" />
        }
      </button>
      {open && (
        <div className="pb-5">
          <p className="font-sans text-sm text-ink-muted leading-relaxed">{children}</p>
        </div>
      )}
    </div>
  );
}

export default function ProductDetail() {
  const { slug } = useParams();
  const product = getProductBySlug(slug);
  const { addItem } = useCart();

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(product?.variants[0] || 'Gold Tone');
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen bg-parchment flex items-center justify-center">
        <div className="text-center">
          <p className="font-serif text-3xl text-ink mb-4">Product not found</p>
          <Link to="/shop" className="font-sans text-sm text-gold border-b border-gold">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const related = products.filter(p => p.id !== product.id && (p.category === product.category || p.tags.some(t => product.tags.includes(t)))).slice(0, 4);

  return (
    <div className="bg-parchment min-h-screen">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-6">
        <Link to="/shop" className="inline-flex items-center gap-2 font-sans text-xs text-ink-muted hover:text-gold transition-colors duration-200 uppercase tracking-widest">
          <ArrowLeft className="w-3.5 h-3.5" />
          Back to Shop
        </Link>
      </div>

      {/* Main product section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

          {/* Left: Image gallery */}
          <div className="space-y-4">
            {/* Main image */}
            <div className="overflow-hidden">
              <JewelryPlaceholder
                bg={product.images[selectedImage].bg}
                label={product.images[selectedImage].label}
                ratio="4x3"
              />
            </div>

            {/* Thumbnails */}
            <div className="flex gap-3">
              {product.images.map((img, i) => (
                <button
                  key={img.id}
                  onClick={() => setSelectedImage(i)}
                  className={`w-20 h-20 overflow-hidden border-2 transition-all duration-200 flex-shrink-0 ${
                    selectedImage === i ? 'border-gold' : 'border-transparent hover:border-linen'
                  }`}
                  aria-label={`View image ${i + 1}`}
                >
                  <JewelryPlaceholder bg={img.bg} label={img.label} ratio="1x1" />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Product info */}
          <div className="lg:pt-4 space-y-6">
            {/* Category */}
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-gold">
              {product.category}
            </p>

            {/* Name */}
            <h1 className="font-serif text-3xl md:text-4xl uppercase tracking-[0.12em] text-ink leading-tight">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-3">
              <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4"
                  fill={i < Math.floor(product.rating) ? '#C9A96E' : '#EDE8DF'}
                  stroke={i < Math.floor(product.rating) ? '#C9A96E' : '#EDE8DF'}
                />
              ))}
            </div>
              <span className="font-sans text-sm text-ink-muted">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="font-sans text-3xl font-semibold text-ink">
              ${product.price}
            </p>

            {/* Short description */}
            <p className="font-sans text-sm text-ink-muted leading-relaxed border-t border-linen pt-6">
              {product.shortDescription}
            </p>

            {/* Variant selector */}
            <div className="space-y-3">
              <p className="font-sans text-xs font-semibold uppercase tracking-widest text-ink">
                Finish: <span style={{ color: '#C9A96E' }}>{selectedVariant}</span>
              </p>
              <div className="flex gap-3">
                {product.variants.map(variant => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className="font-sans text-xs font-semibold uppercase tracking-widest px-5 py-2.5 border transition-all duration-200"
                    style={selectedVariant === variant
                      ? { borderColor: '#C9A96E', backgroundColor: '#C9A96E', color: '#1A1714' }
                      : { borderColor: '#EDE8DF', color: '#8A8078' }
                    }
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity + Add to cart */}
            <div className="flex gap-3 pt-2">
              {/* Quantity */}
              <div className="flex items-center border border-linen">
                <button
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="w-10 h-12 flex items-center justify-center text-ink-muted hover:text-gold transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="w-10 text-center font-sans text-sm font-semibold text-ink">{quantity}</span>
                <button
                  onClick={() => setQuantity(q => q + 1)}
                  className="w-10 h-12 flex items-center justify-center text-ink-muted hover:text-gold transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Add to cart */}
              <button
                onClick={handleAddToCart}
                className="flex-1 flex items-center justify-center gap-2 font-sans text-xs font-semibold uppercase tracking-widest py-4 transition-all duration-300"
                style={added
                  ? { backgroundColor: '#1A1714', color: '#C9A96E' }
                  : { backgroundColor: '#C9A96E', color: '#1A1714' }
                }
              >
                <ShoppingBag className="w-4 h-4" />
                {added ? 'Added to Cart!' : 'Add to Cart'}
              </button>
            </div>

            {/* Trust signals */}
            <div className="flex flex-wrap gap-4 pt-2 border-t border-linen">
              {['Free Worldwide Shipping', '30-Day Returns', 'Hypoallergenic'].map(item => (
                <span key={item} className="font-sans text-xs text-ink-faint uppercase tracking-wider">
                  ✦ {item}
                </span>
              ))}
            </div>

            {/* Accordions */}
            <div className="pt-4">
              <Accordion title="Description">
                {product.description}
              </Accordion>
              <Accordion title="Materials & Care">
                {product.materials}
              </Accordion>
              <Accordion title="Shipping & Returns">
                {product.shipping}
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      {related.length > 0 && (
        <div className="bg-cream border-t border-linen py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-gold mb-3">
                Complete the Look
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-ink">You May Also Like</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {related.map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
