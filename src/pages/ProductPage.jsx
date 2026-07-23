import { useState, useRef, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp, Truck, Shield, RotateCcw } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import ProductCard from '@/components/home/ProductCard';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { toast } from 'sonner';

export default function ProductPage() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addItem } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState('description');
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [id]);

  if (!product) {
    return (
      <main className="pt-20 md:pt-24 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="serif-heading text-4xl text-stone-900 mb-4">Piece Not Found</h1>
          <Link to="/shop" className="btn-outline inline-block">
            Back to Shop
          </Link>
        </div>
      </main>
    );
  }

  const handleAddToCart = () => {
    addItem(product.id, selectedVariant, quantity);
    toast.success(`${product.name} added to your bag`);
  };

  const relatedProducts = products
    .filter((p) => p.id !== product.id && (p.category === product.category || p.material === product.material))
    .slice(0, 4);

  const getGradientStyle = (productId) => {
    const gradients = {
      'vivid-aura-jewels': 'linear-gradient(135deg, #2d2418 0%, #4a3728 30%, #6b5238 60%, #8b7355 100%)',
      'majestic-flora-nectar': 'linear-gradient(135deg, #1a2332 0%, #2d3a4a 30%, #4a5a6b 60%, #6b7d8b 100%)',
      'golden-sphere-huggies': 'linear-gradient(135deg, #2a1f14 0%, #4a3520 30%, #6b5030 60%, #8b6b45 100%)',
      'amber-lace-earrings': 'linear-gradient(135deg, #1f2a1a 0%, #3a4a30 30%, #5a6b45 60%, #7b8b60 100%)',
      'royal-heirloom-set': 'linear-gradient(135deg, #2a1a2a 0%, #4a304a 30%, #6b456b 60%, #8b608b 100%)',
    };
    return gradients[productId] || gradients['vivid-aura-jewels'];
  };

  const Accordion = ({ title, content, isOpen, onToggle }) => (
    <div className="border-t border-stone-200">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="text-sm tracking-widest uppercase text-stone-900">{title}</span>
        {isOpen ? <ChevronUp size={18} className="text-stone-400" /> : <ChevronDown size={18} className="text-stone-400" />}
      </button>
      {isOpen && (
        <div className="pb-4 text-sm text-stone-600 leading-relaxed">
          {content}
        </div>
      )}
    </div>
  );

  return (
    <main className="pt-20 md:pt-24" ref={containerRef}>
      <div className="container-wide py-8 md:py-12">
        {/* Breadcrumb */}
        <nav className="text-sm text-stone-500 mb-8">
          <Link to="/" className="hover:text-amber-700 transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-amber-700 transition-colors">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-stone-900">{product.name}</span>
        </nav>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          {/* Image Gallery */}
          <div>
            <div className="relative aspect-[3/4] mb-4 overflow-hidden" style={{ background: getGradientStyle(product.id) }} />
            <div className="grid grid-cols-4 gap-2">
              {[0, 1, 2, 3].map((i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`relative aspect-square overflow-hidden transition-all ${
                    selectedImage === i ? 'ring-2 ring-amber-700' : 'opacity-60 hover:opacity-100'
                  }`}
                  style={{ background: getGradientStyle(product.id) }}
                />
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="md:py-4">
            <p className="text-amber-700 text-xs tracking-[0.3em] uppercase mb-2">{product.category}</p>
            <h1
              id={`product-name-${product.id}`}
              className="product-name text-3xl md:text-4xl text-stone-900 mb-3"
            >
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={i < Math.floor(product.rating) ? 'text-amber-600 fill-amber-600' : 'text-stone-300'}
                  />
                ))}
              </div>
              <span className="text-sm text-stone-500">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="serif-heading text-3xl text-stone-900 mb-6">${product.price}</p>

            {/* Description */}
            <p
              id={`product-desc-${product.id}`}
              className="text-stone-600 leading-relaxed mb-8"
            >
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="text-sm text-stone-700 mb-3">Finish</p>
              <div className="flex gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant.id}
                    onClick={() => variant.available && setSelectedVariant(variant.id)}
                    disabled={!variant.available}
                    className={`px-5 py-2 text-xs tracking-widest uppercase border transition-all ${
                      selectedVariant === variant.id
                        ? 'border-amber-700 bg-amber-700 text-stone-50'
                        : variant.available
                        ? 'border-stone-300 text-stone-700 hover:border-amber-700'
                        : 'border-stone-200 text-stone-300 cursor-not-allowed'
                    }`}
                  >
                    {variant.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="text-sm text-stone-700 mb-3">Quantity</p>
              <div className="flex items-center border border-stone-300 w-32">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 hover:text-amber-700 transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus size={14} />
                </button>
                <span className="flex-1 text-center text-sm">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 hover:text-amber-700 transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button onClick={handleAddToCart} className="btn-primary w-full mb-4">
              Add to Bag — ${(product.price * quantity).toFixed(2)}
            </button>

            {/* Trust badges */}
            <div className="grid grid-cols-3 gap-4 py-6 border-t border-b border-stone-200">
              <div className="text-center">
                <Truck size={20} className="mx-auto mb-2 text-amber-700" />
                <p className="text-xs text-stone-600">Free Shipping</p>
              </div>
              <div className="text-center">
                <Shield size={20} className="mx-auto mb-2 text-amber-700" />
                <p className="text-xs text-stone-600">18K Gold</p>
              </div>
              <div className="text-center">
                <RotateCcw size={20} className="mx-auto mb-2 text-amber-700" />
                <p className="text-xs text-stone-600">30-Day Returns</p>
              </div>
            </div>

            {/* Accordions */}
            <div className="mt-6">
              <Accordion
                title="Description"
                content={product.description}
                isOpen={openAccordion === 'description'}
                onToggle={() => setOpenAccordion(openAccordion === 'description' ? null : 'description')}
              />
              <Accordion
                title="Materials & Care"
                content={
                  <div>
                    <p className="mb-2"><strong>Materials:</strong> {product.materials}</p>
                    <p><strong>Care:</strong> {product.care}</p>
                  </div>
                }
                isOpen={openAccordion === 'materials'}
                onToggle={() => setOpenAccordion(openAccordion === 'materials' ? null : 'materials')}
              />
              <Accordion
                title="Shipping & Returns"
                content={
                  <div>
                    <p className="mb-2">Free worldwide shipping on all orders. Standard delivery takes 5-7 business days. Express shipping available at checkout.</p>
                    <p>We offer hassle-free 30-day returns. Items must be unworn and in original packaging.</p>
                  </div>
                }
                isOpen={openAccordion === 'shipping'}
                onToggle={() => setOpenAccordion(openAccordion === 'shipping' ? null : 'shipping')}
              />
            </div>
          </div>
        </div>

        {/* Related products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16 md:mt-24">
            <h2 className="serif-heading text-3xl md:text-4xl text-stone-900 mb-8 text-center">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
