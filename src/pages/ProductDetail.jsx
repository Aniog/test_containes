import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp, Truck, RotateCcw, Shield } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { formatPrice, generateStars, cn } from '@/lib/utils';
import ProductCard from '@/components/ProductCard';
import strkImgConfig from '@/strk-img-config.json';

// Helper to get resolved image URL from strk-img config
function getStrkImgUrl(imgId) {
  const entry = strkImgConfig[imgId];
  if (!entry) return '';
  const picked = entry.picked;
  if (!picked) return '';
  const result = entry.results?.find(r => r.id === picked);
  return result?.url || '';
}

const accordionItems = [
  {
    id: 'description',
    title: 'Description',
    getContent: (product) => product.longDescription,
  },
  {
    id: 'materials',
    title: 'Materials & Care',
    getContent: (product) => (
      <div className="space-y-3">
        <p><strong>Material:</strong> {product.material}</p>
        <p><strong>Hypoallergenic:</strong> Yes — safe for sensitive skin</p>
        <p><strong>Care:</strong> {product.careInstructions}</p>
      </div>
    ),
  },
  {
    id: 'shipping',
    title: 'Shipping & Returns',
    getContent: (product) => (
      <div className="space-y-3">
        <p>{product.shippingInfo}</p>
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <div className="flex items-center gap-2 text-sm">
            <Truck className="w-4 h-4 text-gold" />
            <span>Free Shipping</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <RotateCcw className="w-4 h-4 text-gold" />
            <span>30-Day Returns</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Shield className="w-4 h-4 text-gold" />
            <span>1 Year Warranty</span>
          </div>
        </div>
      </div>
    ),
  },
];

export default function ProductDetail() {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedColor, setSelectedColor] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [openAccordion, setOpenAccordion] = useState('description');
  const { addItem } = useCart();
  const containerRef = useRef(null);

  useEffect(() => {
    const found = products.find((p) => p.slug === slug);
    setProduct(found);
    setSelectedColor(found?.colors?.[0] || 'gold');
    setQuantity(1);
    setActiveImageIndex(0);
    window.scrollTo(0, 0);
  }, [slug]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <p className="text-charcoal-light">Product not found</p>
      </div>
    );
  }

  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    addItem(product, selectedColor, quantity);
  };

  return (
    <div ref={containerRef} className="pt-20 md:pt-24">
      {/* Breadcrumb */}
      <div className="max-w-[1400px] mx-auto section-padding py-4">
        <nav className="flex items-center gap-2 text-xs text-charcoal-light">
          <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-gold transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-charcoal">{product.name}</span>
        </nav>
      </div>

      {/* Product */}
      <div className="max-w-[1400px] mx-auto section-padding pb-16 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Image Gallery */}
          <div className="space-y-4">
            {/* Main image */}
            <div className="aspect-square bg-cream-dark rounded-sm overflow-hidden">
              <img
                src={getStrkImgUrl(product.imgId)}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnails */}
            <div className="flex gap-3">
              {product.images.map((img, index) => (
                <button
                  key={img.id}
                  onClick={() => setActiveImageIndex(index)}
                  className={cn(
                    'w-20 h-20 rounded-sm overflow-hidden border-2 transition-colors',
                    activeImageIndex === index ? 'border-gold' : 'border-transparent hover:border-gold/30'
                  )}
                >
                  <img
                    src={getStrkImgUrl(`${product.imgId}-hover`)}
                    alt={`${product.name} view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="lg:py-4">
            {product.badge && (
              <span className="inline-block bg-gold/10 text-gold text-[10px] tracking-widest-2xl uppercase font-medium px-3 py-1.5 mb-4">
                {product.badge}
              </span>
            )}

            <h1 id={product.titleId} className="font-serif text-3xl md:text-4xl tracking-wider uppercase text-charcoal mb-4">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-0.5">
                {generateStars(product.rating).map((filled, i) => (
                  <Star
                    key={i}
                    className={cn(
                      'w-4 h-4',
                      filled ? 'fill-gold text-gold' : 'text-gold/30'
                    )}
                  />
                ))}
              </div>
              <span className="text-sm text-charcoal-light">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-3 mb-6">
              <span className="font-serif text-3xl text-charcoal">{formatPrice(product.price)}</span>
              {product.originalPrice && (
                <span className="text-lg text-charcoal-light/50 line-through">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
            </div>

            {/* Description */}
            <p id={product.descId} className="text-charcoal-light leading-relaxed mb-8">
              {product.description}
            </p>

            <div className="divider mb-8" />

            {/* Color selector */}
            <div className="mb-6">
              <p className="text-label text-charcoal-light mb-3">Tone</p>
              <div className="flex gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={cn(
                      'px-6 py-2.5 text-xs tracking-widest uppercase font-medium border transition-all duration-300',
                      selectedColor === color
                        ? 'border-charcoal bg-charcoal text-cream'
                        : 'border-gold/30 text-charcoal hover:border-gold'
                    )}
                  >
                    {color === 'gold' ? '18K Gold' : 'Sterling Silver'}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="text-label text-charcoal-light mb-3">Quantity</p>
              <div className="inline-flex items-center gap-4 border border-gold/20 rounded-sm">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 hover:text-gold transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-8 text-center font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 hover:text-gold transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button onClick={handleAddToCart} className="btn-primary w-full justify-center py-4 text-base">
              Add to Bag — {formatPrice(product.price * quantity)}
            </button>

            {/* Trust signals */}
            <div className="flex flex-wrap justify-center gap-6 mt-6 text-xs text-charcoal-light">
              <span className="flex items-center gap-1.5">
                <Truck className="w-4 h-4 text-gold" /> Free Shipping
              </span>
              <span className="flex items-center gap-1.5">
                <RotateCcw className="w-4 h-4 text-gold" /> 30-Day Returns
              </span>
              <span className="flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-gold" /> 1 Year Warranty
              </span>
            </div>
          </div>
        </div>

        {/* Accordions */}
        <div className="mt-16 md:mt-24 max-w-3xl">
          <div className="divider mb-8" />
          {accordionItems.map((item) => (
            <div key={item.id} className="border-b border-gold/10">
              <button
                onClick={() => setOpenAccordion(openAccordion === item.id ? null : item.id)}
                className="w-full flex items-center justify-between py-5 text-left"
              >
                <span className="font-serif text-lg tracking-wider text-charcoal">
                  {item.title}
                </span>
                {openAccordion === item.id ? (
                  <ChevronUp className="w-5 h-5 text-gold" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gold" />
                )}
              </button>
              <div
                className={cn(
                  'overflow-hidden transition-all duration-300',
                  openAccordion === item.id ? 'max-h-96 pb-6' : 'max-h-0'
                )}
              >
                <div className="text-charcoal-light text-sm leading-relaxed">
                  {typeof item.getContent === 'function' ? item.getContent(product) : item.getContent}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Related Products */}
        <div className="mt-16 md:mt-24">
          <div className="text-center mb-10">
            <p className="text-label text-gold mb-3">You May Also Like</p>
            <h2 className="font-serif text-2xl md:text-3xl text-charcoal">Related Pieces</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
