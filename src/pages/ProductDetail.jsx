import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronDown, ChevronUp, Minus, Plus, Check } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import ProductCard from '@/components/product/ProductCard';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const { addToCart } = useCart();

  const containerRef = useRef(null);
  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [id]);

  const [selectedImage, setSelectedImage] = useState(0);
  const [variant, setVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const [openAccordion, setOpenAccordion] = useState('description');

  if (!product) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-2xl text-velmora-espresso mb-4">Product Not Found</h1>
          <Link to="/shop" className="text-velmora-gold hover:underline text-sm">Back to Shop</Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product, variant, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const accordions = [
    {
      id: 'description',
      title: 'Description',
      content: product.description,
    },
    {
      id: 'materials',
      title: 'Materials & Care',
      content: `${product.materials}\n\nCare: ${product.care}`,
    },
    {
      id: 'shipping',
      title: 'Shipping & Returns',
      content: 'Free worldwide shipping on all orders over $50. Standard delivery: 5-7 business days. Express delivery: 2-3 business days.\n\nReturns accepted within 30 days of delivery. Items must be in original condition with packaging.',
    },
  ];

  return (
    <div ref={containerRef} className="pt-16 md:pt-20">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-8 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Image Gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-3">
              {[0, 1, 2].map((idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`w-16 h-16 md:w-20 md:h-20 rounded-sm overflow-hidden border-2 transition-colors ${selectedImage === idx ? 'border-velmora-gold' : 'border-transparent'}`}
                >
                  <img
                    className="w-full h-full object-cover bg-velmora-sand/30"
                    alt={`${product.name} view ${idx + 1}`}
                    data-strk-img-id={`product-${product.id}-thumb-${idx}`}
                    data-strk-img={`[product-detail-${product.id}-name] gold jewelry ${product.category} elegant`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                </button>
              ))}
            </div>
            {/* Main Image */}
            <div className="flex-1 aspect-square bg-velmora-sand/20 rounded-sm overflow-hidden">
              <img
                className="w-full h-full object-cover bg-velmora-sand/30"
                alt={product.name}
                data-strk-img-id={`product-${product.id}-main`}
                data-strk-img={`[product-detail-${product.id}-name] gold jewelry ${product.category} elegant closeup`}
                data-strk-img-ratio="1x1"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <p className="text-xs tracking-widest uppercase text-velmora-gold mb-2">{product.category}</p>
            <h1
              id={`product-detail-${product.id}-name`}
              className="font-serif text-2xl md:text-3xl lg:text-4xl text-velmora-espresso tracking-wide uppercase mb-3"
            >
              {product.name}
            </h1>

            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-velmora-gold text-velmora-gold" />
                <span className="text-sm text-velmora-espresso font-medium">{product.rating}</span>
              </div>
              <span className="text-sm text-velmora-stone">({product.reviews} reviews)</span>
            </div>

            <p className="font-serif text-2xl text-velmora-espresso mb-6">${product.price}</p>

            <p className="text-velmora-taupe leading-relaxed mb-8">{product.description}</p>

            {/* Variant Selector */}
            <div className="mb-6">
              <p className="text-xs tracking-widest uppercase text-velmora-taupe mb-3">Metal Tone</p>
              <div className="flex gap-3">
                {['gold', 'silver'].map((v) => (
                  <button
                    key={v}
                    onClick={() => setVariant(v)}
                    className={`px-5 py-2.5 rounded-full text-xs tracking-widest uppercase font-medium border transition-all ${
                      variant === v
                        ? 'bg-velmora-espresso text-velmora-ivory border-velmora-espresso'
                        : 'bg-transparent text-velmora-taupe border-velmora-sand hover:border-velmora-espresso'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="text-xs tracking-widest uppercase text-velmora-taupe mb-3">Quantity</p>
              <div className="inline-flex items-center border border-velmora-sand rounded-sm">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2.5 text-velmora-espresso hover:bg-velmora-sand/30 transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-10 text-center text-sm font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2.5 text-velmora-espresso hover:bg-velmora-sand/30 transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className={`w-full py-4 text-xs tracking-widest uppercase font-semibold rounded-sm transition-all duration-300 flex items-center justify-center gap-2 ${
                added
                  ? 'bg-velmora-gold text-velmora-charcoal'
                  : 'bg-velmora-espresso text-velmora-ivory hover:bg-velmora-charcoal'
              }`}
            >
              {added ? (
                <>
                  <Check className="w-4 h-4" />
                  Added to Cart
                </>
              ) : (
                'Add to Cart — $' + product.price * quantity
              )}
            </button>

            {/* Accordions */}
            <div className="mt-10 border-t border-velmora-sand/40">
              {accordions.map((acc) => (
                <div key={acc.id} className="border-b border-velmora-sand/40">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === acc.id ? null : acc.id)}
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span className="text-xs tracking-widest uppercase font-medium text-velmora-espresso">
                      {acc.title}
                    </span>
                    {openAccordion === acc.id ? (
                      <ChevronUp className="w-4 h-4 text-velmora-taupe" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-velmora-taupe" />
                    )}
                  </button>
                  {openAccordion === acc.id && (
                    <div className="pb-4 text-sm text-velmora-taupe leading-relaxed whitespace-pre-line">
                      {acc.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="bg-velmora-ivory py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <h2 className="font-serif text-2xl md:text-3xl text-velmora-espresso text-center mb-10 md:mb-14">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
