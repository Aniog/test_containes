import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { PRODUCTS } from '@/config';
import { useCart } from '@/context/CartContext';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Star, Minus, Plus, ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';
import ProductCard from '@/components/shop/ProductCard';
import { toast } from 'sonner';

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-black/5">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-xs uppercase tracking-[0.2em] font-semibold hover:opacity-70 transition-opacity"
      >
        <span>{title}</span>
        {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
      </button>
      {isOpen && (
        <div className="pb-8 text-sm text-muted-foreground leading-relaxed font-sans">
          {children}
        </div>
      )}
    </div>
  );
};

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [variant, setVariant] = useState('Gold');
  const containerRef = useRef(null);

  const product = PRODUCTS.find(p => p.id === id);

  useEffect(() => {
    if (product) {
      window.scrollTo(0, 0);
      setSelectedImage(0);
      setQuantity(1);
      const timer = requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      });
      return () => cancelAnimationFrame(timer);
    }
  }, [id, product]);

  if (!product) {
    return (
      <Layout>
        <div className="pt-40 pb-20 text-center">
          <h2 className="text-2xl font-serif mb-4">Product not found</h2>
          <Link to="/shop" className="text-accent hover:underline uppercase tracking-widest text-sm">Back to Shop</Link>
        </div>
      </Layout>
    );
  }

  const relatedProducts = PRODUCTS.filter(p => p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    toast.success(`${quantity} ${product.title} added to bag`);
  };

  return (
    <Layout>
      <div ref={containerRef} className="pt-32 pb-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mb-32">
            {/* Gallery */}
            <div className="lg:col-span-7 flex flex-col-reverse md:flex-row gap-6">
              {/* Thumbnails */}
              <div className="flex md:flex-col gap-4 overflow-x-auto md:overflow-x-visible pb-4 md:pb-0">
                {[0, 1, 2].map((i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImage(i)}
                    className={cn(
                      "w-20 aspect-[3/4] bg-muted flex-shrink-0 border transition-all",
                      selectedImage === i ? "border-primary" : "border-transparent opacity-60 hover:opacity-100"
                    )}
                  >
                    <img
                      alt={`${product.title} thumb ${i}`}
                      data-strk-img-id={`prod-thumb-${id}-${i}`}
                      data-strk-img={`[${product.descId}] [${product.titleId}] jewelry view ${i}`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="200"
                      className="w-full h-full object-cover"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    />
                  </button>
                ))}
              </div>
              {/* Main Image */}
              <div className="flex-grow aspect-[3/4] bg-muted overflow-hidden">
                <img
                  alt={product.title}
                  data-strk-img-id={`prod-main-${id}-${selectedImage}`}
                  data-strk-img={`[${product.descId}] [${product.titleId}] jewelry main focus view`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="1200"
                  className="w-full h-full object-cover"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
            </div>

            {/* Info */}
            <div className="lg:col-span-5 space-y-10">
              <div className="space-y-4">
                <nav className="text-[10px] uppercase tracking-widest text-muted-foreground flex items-center space-x-2">
                  <Link to="/shop" className="hover:text-primary transition-colors">Shop</Link>
                  <span>/</span>
                  <span className="text-primary">{product.category}</span>
                </nav>
                <h1 id={product.titleId} className="text-4xl md:text-5xl font-serif">
                  {product.title}
                </h1>
                <div className="flex items-center justify-between">
                  <p className="text-2xl font-serif italic text-accent">
                    ${product.price}
                  </p>
                  <div className="flex items-center space-x-2">
                    <div className="flex space-x-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-accent text-accent" />
                      ))}
                    </div>
                    <span className="text-[10px] uppercase tracking-widest text-muted-foreground opacity-70">(12 reviews)</span>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <p id={product.descId} className="text-muted-foreground text-sm leading-relaxed font-sans">
                  {product.description}
                </p>

                {/* Variant Selector */}
                <div className="space-y-4">
                  <span className="text-[10px] uppercase tracking-[0.2em] font-bold">Finish: {variant}</span>
                  <div className="flex space-x-3">
                    {['Gold', 'Silver'].map((v) => (
                      <button
                        key={v}
                        onClick={() => setVariant(v)}
                        className={cn(
                          "px-6 py-2 border text-[10px] uppercase tracking-widest transition-all",
                          variant === v ? "border-primary bg-primary text-white" : "border-black/10 text-muted-foreground hover:border-black/30"
                        )}
                      >
                        {v} Tone
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quantity */}
                <div className="space-y-4">
                  <span className="text-[10px] uppercase tracking-[0.2em] font-bold">Quantity</span>
                  <div className="flex items-center border border-black/10 w-32">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-3 hover:bg-muted flex-grow flex justify-center"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-10 text-center text-sm font-sans">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="p-3 hover:bg-muted flex-grow flex justify-center"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Add to Cart */}
                <button
                  onClick={handleAddToCart}
                  className="w-full bg-primary text-white py-5 uppercase tracking-[0.2em] text-xs font-semibold hover:opacity-95 transition-opacity active:scale-[0.98] duration-150"
                >
                  Add to Bag — ${ (product.price * quantity).toFixed(2) }
                </button>
              </div>

              {/* Accordions */}
              <div className="pt-4 border-t border-black/5">
                <Accordion title="Details & Dimensions">
                  <p>Materials: {product.materials}</p>
                </Accordion>
                <Accordion title="Care Guide">
                  <p>{product.care}</p>
                </Accordion>
                <Accordion title="Shipping & Returns">
                  <p>{product.shipping}</p>
                  <p className="mt-2">Available for worldwide shipping. 30-day effortless returns policy.</p>
                </Accordion>
              </div>
            </div>
          </div>

          {/* Related Products */}
          <div className="border-t border-black/5 pt-32">
            <div className="flex justify-between items-end mb-12">
              <h3 className="text-3xl md:text-4xl font-serif">You May Also Like</h3>
              <Link to="/shop" className="text-xs uppercase tracking-widest border-b border-black pb-1 mb-2 hover:opacity-70 transition-opacity">
                Shop All
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {relatedProducts.map(rp => (
                <ProductCard key={rp.id} product={rp} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;
