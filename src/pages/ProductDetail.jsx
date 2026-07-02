import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp, ShoppingBag, Truck, RotateCcw, Shield } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { formatPrice, cn } from '../lib/utils';
import ProductCard from '../components/product/ProductCard';

const productImages = {
  'vivid-aura-jewels': [
    'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=700&h=900&fit=crop',
    'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=700&h=900&fit=crop',
    'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=700&h=900&fit=crop',
    'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=700&h=900&fit=crop',
  ],
  'majestic-flora-nectar': [
    'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=700&h=900&fit=crop',
    'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=700&h=900&fit=crop',
    'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=700&h=900&fit=crop',
    'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=700&h=900&fit=crop',
  ],
  'golden-sphere-huggies': [
    'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=700&h=900&fit=crop',
    'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=700&h=900&fit=crop',
    'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=700&h=900&fit=crop',
    'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=700&h=900&fit=crop',
  ],
  'amber-lace-earrings': [
    'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=700&h=900&fit=crop',
    'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=700&h=900&fit=crop',
    'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=700&h=900&fit=crop',
    'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=700&h=900&fit=crop',
  ],
  'royal-heirloom-set': [
    'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=700&h=900&fit=crop',
    'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=700&h=900&fit=crop',
    'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=700&h=900&fit=crop',
    'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=700&h=900&fit=crop',
  ],
};

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-obsidian-800/30">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="font-sans text-xs tracking-widest-xl uppercase text-obsidian-300">
          {title}
        </span>
        {open ? (
          <ChevronUp className="w-4 h-4 text-obsidian-500" />
        ) : (
          <ChevronDown className="w-4 h-4 text-obsidian-500" />
        )}
      </button>
      {open && (
        <div className="pb-5 text-sm text-obsidian-400 leading-relaxed animate-fade-in">
          {children}
        </div>
      )}
    </div>
  );
}

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addItem } = useCart();
  const [selectedVariant, setSelectedVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="font-serif text-heading mb-4">Product Not Found</h1>
          <Link to="/shop" className="btn-outline text-xs">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const images = productImages[product.id] || productImages['vivid-aura-jewels'];
  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
  };

  return (
    <main className="pt-20 md:pt-24 pb-16 md:pb-24">
      <div className="max-w-[1400px] mx-auto px-5 md:px-8">
        {/* Breadcrumb */}
        <nav className="text-xs text-obsidian-500 mb-6 md:mb-8 tracking-wider">
          <Link to="/" className="hover:text-gold-400 transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-gold-400 transition-colors">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-obsidian-300">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Image Gallery */}
          <div className="space-y-4">
            {/* Main image */}
            <div className="aspect-[3/4] bg-obsidian-900 rounded-sm overflow-hidden">
              <img
                src={images[activeImage]}
                alt={product.name}
                className="w-full h-full object-cover transition-opacity duration-500"
              />
            </div>
            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-2">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={cn(
                    'aspect-square bg-obsidian-900 rounded-sm overflow-hidden border-2 transition-all duration-300',
                    activeImage === i ? 'border-gold-500' : 'border-transparent hover:border-obsidian-600'
                  )}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            {/* Badge */}
            {product.badge && (
              <span className="inline-block self-start bg-gold-500/15 text-gold-400 text-[10px] font-bold uppercase tracking-widest-xl px-3 py-1 mb-4 border border-gold-500/20">
                {product.badge}
              </span>
            )}

            <h1 className="font-serif text-2xl md:text-3xl uppercase tracking-[0.12em] text-cream-50 mb-3">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={cn(
                      'w-4 h-4',
                      i < Math.floor(product.rating) ? 'fill-gold-400 text-gold-400' : 'text-obsidian-600'
                    )}
                  />
                ))}
              </div>
              <span className="text-xs text-obsidian-400">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="text-2xl font-medium text-gold-400 mb-6">{formatPrice(product.price)}</p>

            {/* Description */}
            <p className="text-sm text-obsidian-300 leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="text-xs tracking-widest-xl uppercase text-obsidian-400 mb-3">
                Tone: <span className="text-cream-200 capitalize">{selectedVariant}</span>
              </p>
              <div className="flex gap-2">
                {product.variant.map((v) => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={cn(
                      'px-6 py-2.5 text-xs uppercase tracking-widest-xl border transition-all duration-300',
                      selectedVariant === v
                        ? 'border-gold-500 text-gold-400 bg-gold-500/10'
                        : 'border-obsidian-700 text-obsidian-400 hover:border-obsidian-500'
                    )}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="text-xs tracking-widest-xl uppercase text-obsidian-400 mb-3">Quantity</p>
              <div className="inline-flex items-center border border-obsidian-700">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-11 h-11 flex items-center justify-center text-obsidian-400 hover:text-cream-100 transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-11 h-11 flex items-center justify-center text-sm text-cream-200 border-x border-obsidian-700">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-11 h-11 flex items-center justify-center text-obsidian-400 hover:text-cream-100 transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button onClick={handleAddToCart} className="btn-primary w-full py-4 text-sm gap-2">
              <ShoppingBag className="w-5 h-5" />
              Add to Bag — {formatPrice(product.price * quantity)}
            </button>

            {/* Trust icons */}
            <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-obsidian-800/30">
              {[
                { icon: Truck, label: 'Free Shipping' },
                { icon: RotateCcw, label: '30-Day Returns' },
                { icon: Shield, label: '2-Year Warranty' },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex flex-col items-center gap-2 text-center">
                  <Icon className="w-4 h-4 text-obsidian-500" />
                  <span className="text-[10px] text-obsidian-500 tracking-wider uppercase">{label}</span>
                </div>
              ))}
            </div>

            {/* Accordions */}
            <div className="mt-8">
              <Accordion title="Description" defaultOpen>
                <p>{product.longDescription}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p className="mb-2"><strong className="text-cream-200">Materials:</strong> {product.materials}</p>
                <p><strong className="text-cream-200">Care:</strong> {product.care}</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p>{product.shipping}</p>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related products */}
        <section className="mt-20 md:mt-28">
          <div className="text-center mb-12">
            <p className="section-subtitle mb-3">Complete the Look</p>
            <h2 className="font-serif text-heading">You May Also Like</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-8 md:gap-x-6">
            {relatedProducts.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
