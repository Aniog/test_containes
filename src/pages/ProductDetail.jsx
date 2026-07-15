import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronDown, ChevronUp, Minus, Plus, ShoppingBag, ArrowLeft } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

export default function ProductDetail() {
  const { id } = useParams();
  const containerRef = useRef(null);
  const product = products.find((p) => p.id === id);
  const { addItem } = useCart();

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(product?.variants[0] || '18K Gold');
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState(null);
  const [adding, setAdding] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream-50">
        <div className="text-center">
          <h2 className="font-serif text-2xl text-ink-900">Product Not Found</h2>
          <Link to="/shop" className="mt-4 inline-block text-gold-600 hover:text-gold-700 text-sm tracking-wider uppercase font-sans">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    setAdding(true);
    addItem(product, selectedVariant, quantity);
    setTimeout(() => setAdding(false), 1200);
  };

  const accordionItems = [
    {
      id: 'description',
      title: 'Description',
      content: product.description,
    },
    {
      id: 'materials',
      title: 'Materials & Care',
      content: (
        <div className="space-y-3">
          <p className="text-sm text-ink-600 leading-relaxed">{product.materials}</p>
          <p className="text-sm text-ink-600 leading-relaxed">{product.care}</p>
        </div>
      ),
    },
    {
      id: 'shipping',
      title: 'Shipping & Returns',
      content: (
        <div className="space-y-3">
          <p className="text-sm text-ink-600 leading-relaxed">
            Free worldwide shipping on all orders. Orders are processed within 1-2 business days.
          </p>
          <p className="text-sm text-ink-600 leading-relaxed">
            30-day return policy. Items must be returned in original condition with packaging.
          </p>
        </div>
      ),
    },
  ];

  return (
    <div ref={containerRef} className="min-h-screen bg-cream-50 pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back link */}
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 text-ink-500 hover:text-ink-900 text-sm font-sans transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Shop
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          {/* Left: Image gallery */}
          <div>
            <div className="aspect-[4/5] bg-cream-100 overflow-hidden mb-4">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {product.images.length > 1 && (
              <div className="flex gap-3">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`w-16 h-16 md:w-20 md:h-20 overflow-hidden border-2 transition-all ${
                      selectedImage === idx
                        ? 'border-gold-500 opacity-100'
                        : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={img}
                      alt={`${product.name} view ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right: Product details */}
          <div className="flex flex-col">
            <p className="font-sans text-xs tracking-widest uppercase text-ink-400 mb-2">
              {product.category}
            </p>
            <h1 className="font-serif text-2xl md:text-3xl text-ink-900 tracking-wider uppercase">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-2">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating)
                        ? 'fill-gold-400 text-gold-400'
                        : 'text-ink-200'
                    }`}
                  />
                ))}
              </div>
              <span className="text-xs text-ink-500 font-sans">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="font-serif text-2xl text-gold-600 mt-4">${product.price}</p>

            {/* Description */}
            <p className="mt-4 text-sm text-ink-600 leading-relaxed font-sans">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mt-6">
              <p className="text-xs tracking-widest uppercase text-ink-500 font-sans mb-2">
                Finish
              </p>
              <div className="flex gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-5 py-2.5 text-xs tracking-wider uppercase font-sans border transition-all ${
                      selectedVariant === variant
                        ? 'border-ink-900 bg-ink-900 text-white'
                        : 'border-ink-300 text-ink-600 hover:border-ink-900'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <p className="text-xs tracking-widest uppercase text-ink-500 font-sans mb-2">
                Quantity
              </p>
              <div className="flex items-center border border-ink-300 w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 hover:bg-ink-100 transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-6 text-sm font-sans">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 hover:bg-ink-100 transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="mt-8 w-full bg-gold-500 text-white py-3.5 text-sm tracking-widest uppercase hover:bg-gold-600 transition-all font-sans flex items-center justify-center gap-2"
            >
              <ShoppingBag className="w-4 h-4" />
              {adding ? 'Added to Cart!' : 'Add to Cart — $' + (product.price * quantity).toFixed(2)}
            </button>

            {/* Accordions */}
            <div className="mt-8 border-t border-ink-200">
              {accordionItems.map((item) => (
                <div key={item.id} className="border-b border-ink-200">
                  <button
                    onClick={() =>
                      setOpenAccordion(openAccordion === item.id ? null : item.id)
                    }
                    className="w-full flex items-center justify-between py-4 text-sm text-ink-900 font-sans tracking-wider uppercase hover:text-ink-600 transition-colors"
                  >
                    {item.title}
                    {openAccordion === item.id ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openAccordion === item.id ? 'max-h-40 pb-4' : 'max-h-0'
                    }`}
                  >
                    {typeof item.content === 'string' ? (
                      <p className="text-sm text-ink-600 leading-relaxed font-sans">{item.content}</p>
                    ) : (
                      item.content
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="mt-16 md:mt-24 pb-16 md:pb-24">
            <div className="text-center mb-10">
              <h2 className="font-serif text-2xl md:text-3xl text-ink-900 font-light">
                You May Also Like
              </h2>
              <div className="w-12 h-[1px] bg-gold-500 mx-auto mt-3" />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((p) => (
                <Link
                  key={p.id}
                  to={`/product/${p.id}`}
                  className="group"
                >
                  <div className="aspect-[3/4] bg-cream-100 overflow-hidden mb-3">
                    <img
                      src={p.images[0]}
                      alt={p.name}
                      className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="font-serif text-xs tracking-widest text-ink-900 uppercase">
                    {p.name}
                  </h3>
                  <p className="font-serif text-gold-600 text-sm mt-1">${p.price}</p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}