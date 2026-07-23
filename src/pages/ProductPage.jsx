import { useEffect, useRef, useState } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronRight } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

export default function ProductPage() {
  const { id } = useParams();
  const { addItem, openCart } = useCart();
  const containerRef = useRef(null);
  const [quantity, setQuantity] = useState(1);
  const [variant, setVariant] = useState('gold');
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);

  const product = products.find(p => p.id === id);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [id]);

  useEffect(() => {
    setQuantity(1);
    setVariant('gold');
    setSelectedImage(0);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-3xl mb-4">Piece Not Found</h1>
          <Link to="/shop" className="btn-primary inline-block">Back to Shop</Link>
        </div>
      </div>
    );
  }

  const related = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    addItem(product, quantity, variant);
    openCart();
  };

  const accordions = [
    { id: 'description', label: 'Description', content: product.description },
    { id: 'materials', label: 'Materials & Care', content: `${product.materials}. Avoid contact with water, perfume, and lotions. Store in a dry place. Clean gently with a soft cloth.` },
    { id: 'shipping', label: 'Shipping & Returns', content: 'Free worldwide shipping on orders over $100. Standard delivery: 5–10 business days. Express: 2–3 business days. 30-day return window for unworn items in original packaging.' },
  ];

  return (
    <section className="py-8 md:py-16" ref={containerRef}>
      <div className="max-w-content mx-auto px-4 md:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-sans uppercase tracking-wider text-text-secondary mb-8">
          <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-gold transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-text-primary">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Left: Image Gallery */}
          <div>
            {/* Main image */}
            <div className="aspect-[4/5] bg-cream-dark rounded overflow-hidden mb-4">
              <img
                data-strk-img-id={`detail-${product.id}-main`}
                data-strk-img={`[detail-title-${product.id}] [detail-cat-${product.id}]`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Thumbnails */}
            <div className="flex gap-3">
              {[0, 1, 2].map(i => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`w-16 md:w-20 aspect-[4/5] bg-cream-dark rounded overflow-hidden transition-all duration-300 ${
                    selectedImage === i ? 'ring-1 ring-gold' : 'opacity-60 hover:opacity-100'
                  }`}
                >
                  <img
                    data-strk-img-id={`detail-${product.id}-thumb-${i}`}
                    data-strk-img={`[detail-title-${product.id}]`}
                    data-strk-img-ratio="4x5"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} view ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Product Details */}
          <div className="md:sticky md:top-24 h-fit">
            <span id={`detail-cat-${product.id}`} className="text-[10px] uppercase tracking-widest text-text-secondary font-sans">
              {product.category}
            </span>
            <h1
              id={`detail-title-${product.id}`}
              className="font-serif text-3xl md:text-4xl uppercase tracking-widest mt-1 mb-4"
            >
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-gold fill-gold' : 'text-divider'}`}
                  />
                ))}
              </div>
              <span className="text-xs text-text-secondary font-sans">{product.rating} ({product.reviews} reviews)</span>
            </div>

            <p className="font-serif text-2xl md:text-3xl mb-6">${product.price}</p>

            {/* Description */}
            <p className="text-text-secondary font-sans text-sm leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <h4 className="text-xs uppercase tracking-widest font-sans text-text-primary mb-3">Finish</h4>
              <div className="flex gap-3">
                {['gold', 'silver'].map(v => (
                  <button
                    key={v}
                    onClick={() => setVariant(v)}
                    className={`px-6 py-2.5 text-xs uppercase tracking-widest font-sans transition-all duration-300 ${
                      variant === v
                        ? 'bg-gold text-white'
                        : 'border border-divider text-text-secondary hover:border-gold'
                    }`}
                  >
                    {v} Tone
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity + Add to Cart */}
            <div className="flex gap-4 mb-8">
              <div className="flex items-center border border-divider">
                <button
                  className="p-3 hover:text-gold transition-colors"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-4 font-sans min-w-[2rem] text-center text-sm">{quantity}</span>
                <button
                  className="p-3 hover:text-gold transition-colors"
                  onClick={() => setQuantity(quantity + 1)}
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <button
                onClick={handleAddToCart}
                className="flex-1 btn-primary text-center"
              >
                Add to Cart — ${(product.price * quantity).toFixed(2)}
              </button>
            </div>

            {/* Accordions */}
            <div className="space-y-0 hairline">
              {accordions.map(acc => (
                <div key={acc.id} className="border-b border-divider">
                  <button
                    onClick={() => setActiveAccordion(activeAccordion === acc.id ? null : acc.id)}
                    className="w-full flex items-center justify-between py-4 text-sm font-sans uppercase tracking-wider transition-colors hover:text-gold"
                  >
                    {acc.label}
                    {activeAccordion === acc.id ? (
                      <ChevronDown className="w-4 h-4" />
                    ) : (
                      <ChevronRight className="w-4 h-4" />
                    )}
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      activeAccordion === acc.id ? 'max-h-48 pb-4' : 'max-h-0'
                    }`}
                  >
                    <p className="text-text-secondary font-sans text-sm leading-relaxed">
                      {acc.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related products */}
        {related.length > 0 && (
          <div className="mt-16 md:mt-24 pt-12 md:pt-16 hairline">
            <h2 className="font-serif text-2xl md:text-3xl text-center mb-8">You May Also Like</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {related.map(p => (
                <Link key={p.id} to={`/product/${p.id}`} className="group block">
                  <div className="aspect-[3/4] bg-cream-dark rounded overflow-hidden mb-3">
                    <img
                      data-strk-img-id={`related-${p.id}`}
                      data-strk-img={`[related-name-${p.id}]`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="500"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={p.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 id={`related-name-${p.id}`} className="product-name">{p.name}</h3>
                  <p className="font-sans text-sm mt-1">${p.price}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
