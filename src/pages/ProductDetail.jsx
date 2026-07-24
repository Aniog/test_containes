import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, Check } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const ProductDetail = () => {
  const { id } = useParams();
  const { addItem, setCartOpen } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [activeAccordion, setActiveAccordion] = useState('description');
  const containerRef = useRef(null);

  const product = products.find(p => p.id === id);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-4xl text-brand-charcoal">Product Not Found</h1>
          <Link to="/shop" className="mt-4 inline-flex items-center justify-center rounded-full bg-brand-gold px-8 py-3 text-sm font-semibold uppercase tracking-widest text-white transition-all duration-300 hover:bg-brand-gold-dark hover:shadow-lg inline-block">
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
    setCartOpen(true);
  };

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div ref={containerRef} className="min-h-screen bg-brand-warm-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm text-brand-warm-gray">
            <li><Link to="/" className="hover:text-brand-gold">Home</Link></li>
            <li>/</li>
            <li><Link to="/shop" className="hover:text-brand-gold">Shop</Link></li>
            <li>/</li>
            <li className="text-brand-charcoal">{product.name}</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-[3/4] overflow-hidden rounded-2xl bg-brand-cream">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square w-20 overflow-hidden rounded-lg border-2 transition-colors ${
                    selectedImage === index
                      ? 'border-brand-gold'
                      : 'border-transparent'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} view ${index + 1}`}
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <h1 className="font-serif text-lg uppercase tracking-widest text-brand-charcoal text-2xl md:text-3xl">{product.name}</h1>
            <div className="mt-4 flex items-center gap-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className={i < Math.floor(product.rating) ? 'fill-brand-gold text-brand-gold' : 'text-brand-warm-gray/30'}
                  />
                ))}
              </div>
              <span className="text-sm text-brand-warm-gray">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>
            <p className="mt-6 font-serif text-3xl text-brand-charcoal">${product.price}</p>
            <p className="mt-6 text-brand-warm-gray leading-relaxed">{product.description}</p>

            {/* Variant Selector */}
            <div className="mt-8">
              <label className="text-sm font-medium text-brand-charcoal">Finish</label>
              <div className="mt-3 flex gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`flex items-center gap-2 rounded-full border px-4 py-2 text-sm capitalize transition-colors ${
                      selectedVariant === variant
                        ? 'border-brand-gold bg-brand-gold/10 text-brand-charcoal'
                        : 'border-brand-charcoal/20 text-brand-charcoal hover:border-brand-gold'
                    }`}
                  >
                    {selectedVariant === variant && <Check size={14} />}
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-8">
              <label className="text-sm font-medium text-brand-charcoal">Quantity</label>
              <div className="mt-3 flex items-center">
                <div className="flex items-center rounded-full border border-brand-charcoal/20">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-3 text-brand-charcoal/60 transition-colors hover:text-brand-charcoal"
                    aria-label="Decrease quantity"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="w-12 text-center text-sm text-brand-charcoal">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-3 text-brand-charcoal/60 transition-colors hover:text-brand-charcoal"
                    aria-label="Increase quantity"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>
            </div>

            {/* Add to Cart */}
            <button onClick={handleAddToCart} className="mt-8 inline-flex items-center justify-center rounded-full bg-brand-gold px-8 py-3 text-sm font-semibold uppercase tracking-widest text-white transition-all duration-300 hover:bg-brand-gold-dark hover:shadow-lg w-full">
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            {/* Accordions */}
            <div className="mt-12 border-t border-brand-charcoal/10">
              {[
                { id: 'description', label: 'Description', content: product.description },
                { id: 'materials', label: 'Materials & Care', content: product.care },
                { id: 'shipping', label: 'Shipping & Returns', content: product.shipping }
              ].map((item) => (
                <div key={item.id} className="border-b border-brand-charcoal/10">
                  <button
                    onClick={() => setActiveAccordion(activeAccordion === item.id ? '' : item.id)}
                    className="flex w-full items-center justify-between py-4 text-left"
                  >
                    <span className="font-serif text-lg text-brand-charcoal">{item.label}</span>
                    <ChevronDown
                      size={20}
                      className={`text-brand-warm-gray transition-transform duration-300 ${
                        activeAccordion === item.id ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {activeAccordion === item.id && (
                    <div className="pb-4">
                      <p className="text-brand-warm-gray leading-relaxed">{item.content}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="mt-24">
            <h2 className="font-serif text-3xl md:text-4xl text-brand-charcoal text-center">You May Also Like</h2>
            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {relatedProducts.map((relatedProduct) => (
                <Link
                  key={relatedProduct.id}
                  to={`/product/${relatedProduct.id}`}
                  className="group"
                >
                  <div className="aspect-[3/4] overflow-hidden rounded-lg bg-brand-cream">
                    <img
                      src={relatedProduct.images[0]}
                      alt={relatedProduct.name}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-4 text-center">
                    <h3 className="font-serif text-lg uppercase tracking-widest text-brand-charcoal text-sm">{relatedProduct.name}</h3>
                    <p className="mt-1 font-serif text-lg text-brand-charcoal">${relatedProduct.price}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
