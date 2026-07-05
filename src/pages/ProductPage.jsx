import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp, ShoppingBag } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { useCart } from '@/context/CartContext';
import products, { tones } from '@/data/products';
import ProductCard from '@/components/home/ProductCard';

export default function ProductPage() {
  const { id } = useParams();
  const { addItem } = useCart();
  const containerRef = useRef(null);

  const product = products.find((p) => p.id === id);
  const [selectedTone, setSelectedTone] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [addedToCart, setAddedToCart] = useState(false);
  const [openAccordion, setOpenAccordion] = useState('description');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  if (!product) {
    return (
      <div className="pt-32 pb-20 text-center">
        <p className="text-cream-300/50">Product not found.</p>
        <Link to="/shop" className="btn-outline inline-block mt-6">Back to Shop</Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem(product, selectedTone, quantity);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const relatedProducts = products
    .filter((p) => p.id !== product.id && p.category === product.category)
    .slice(0, 4);

  const accordionItems = [
    { key: 'description', label: 'Description', content: product.details },
    { key: 'care', label: 'Materials & Care', content: product.care },
    { key: 'shipping', label: 'Shipping & Returns', content: product.shipping },
  ];

  return (
    <div ref={containerRef} className="pt-24 md:pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-cream-300/40 tracking-[0.04em] mb-8">
          <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-gold transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-cream-300/60">{product.name}</span>
        </div>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
          {/* Gallery */}
          <div className="flex flex-col md:flex-row gap-3">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-3 order-2 md:order-1">
              {[0, 1, 2, 3].map((i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`w-16 h-20 flex-shrink-0 bg-espresso-700 border transition-colors ${
                    activeImage === i ? 'border-gold/60' : 'border-transparent hover:border-cream-300/20'
                  }`}
                >
                  <div className="w-full h-full flex items-center justify-center">
                    <ShoppingBag className="w-4 h-4 text-cream-300/20" />
                  </div>
                </button>
              ))}
            </div>

            {/* Main image */}
            <div className="flex-1 order-1 md:order-2 aspect-[3/4] bg-espresso-700 relative overflow-hidden">
              <div
                className="absolute inset-0"
                data-strk-bg-id={`pdp-${product.id}-main`}
                data-strk-bg={`[pdp-${product.id}-name] ${product.name} gold jewelry`}
                data-strk-bg-ratio="3x4"
                data-strk-bg-width="900"
              >
                <div className="w-full h-full bg-espresso-700 flex items-center justify-center">
                  <ShoppingBag className="w-12 h-12 text-cream-300/15" />
                </div>
              </div>
            </div>
          </div>

          {/* Product info */}
          <div>
            <p
              id={`pdp-${product.id}-name`}
              className="product-name text-lg md:text-xl lg:text-2xl text-cream-100 mb-3"
            >
              {product.name}
            </p>
            <p className="text-2xl text-gold font-light mb-4">${product.price}</p>

            {/* Rating */}
            <div className="flex items-center gap-1.5 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.floor(product.rating)
                      ? 'text-gold fill-gold'
                      : 'text-gold/30 fill-transparent'
                  }`}
                />
              ))}
              <span className="text-xs text-cream-300/50 ml-1">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            <p className="text-cream-300/60 text-sm leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Tone selector */}
            <div className="mb-6">
              <p className="text-[10px] tracking-[0.12em] uppercase text-cream-300/40 mb-3">Finish</p>
              <div className="flex gap-3">
                {tones.map((tone) => (
                  <button
                    key={tone.value}
                    onClick={() => setSelectedTone(tone.value)}
                    className={`px-5 py-2.5 text-xs tracking-[0.06em] uppercase border transition-all ${
                      selectedTone === tone.value
                        ? 'border-gold text-gold bg-gold/5'
                        : 'border-cream-400/10 text-cream-300/50 hover:border-cream-400/30'
                    }`}
                  >
                    {tone.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="text-[10px] tracking-[0.12em] uppercase text-cream-300/40 mb-3">Quantity</p>
              <div className="flex items-center border border-cream-400/10 w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 text-cream-300/60 hover:text-cream-100 transition-colors"
                >
                  <Minus className="w-3 h-3" />
                </button>
                <span className="px-4 text-sm text-cream-100 min-w-[3rem] text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 text-cream-300/60 hover:text-cream-100 transition-colors"
                >
                  <Plus className="w-3 h-3" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className="btn-accent w-full text-center mb-2"
            >
              {addedToCart ? 'Added to Bag!' : `Add to Bag — $${(product.price * quantity).toFixed(2)}`}
            </button>

            {addedToCart && (
              <p className="text-gold text-xs text-center animate-fade-in mb-6">
                Added! <Link to="/shop" className="underline">Continue shopping</Link> or view your bag.
              </p>
            )}

            {/* Accordions */}
            <div className="mt-10 border-t border-cream-400/10 pt-6">
              {accordionItems.map((item) => (
                <div key={item.key} className="border-b border-cream-400/10 py-3">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === item.key ? '' : item.key)}
                    className="w-full flex items-center justify-between py-1"
                  >
                    <span className="text-xs tracking-[0.08em] uppercase text-cream-300/60">{item.label}</span>
                    {openAccordion === item.key ? (
                      <ChevronUp className="w-3.5 h-3.5 text-cream-300/40" />
                    ) : (
                      <ChevronDown className="w-3.5 h-3.5 text-cream-300/40" />
                    )}
                  </button>
                  {openAccordion === item.key && (
                    <div className="pt-3 pb-2 text-xs text-cream-300/50 leading-relaxed animate-fade-in">
                      {item.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related products */}
        {relatedProducts.length > 0 && (
          <section className="mt-24 md:mt-32 border-t border-cream-400/10 pt-16 md:pt-20">
            <h2 className="serif-heading text-2xl md:text-3xl text-cream-100 text-center mb-10">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
