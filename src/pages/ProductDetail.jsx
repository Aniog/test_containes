import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '@/api/mockData';
import { useCart } from '@/context/CartContext';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ChevronRight, Minus, Plus, ShoppingBag, Truck, RotateCcw, ShieldCheck } from 'lucide-react';
import { toast } from 'sonner';

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = products.find(p => p.id === parseInt(id));
  const [selectedTone, setSelectedTone] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const containerRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [id]);

  if (!product) {
    return <div className="min-h-screen flex items-center justify-center font-serif">Product not found.</div>;
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
    toast.success(`${product.name} added to bag`);
  };

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

  return (
    <div ref={containerRef} className="pt-24 pb-16 px-4 max-w-7xl mx-auto">
      {/* Breadcrumbs */}
      <nav className="flex items-center space-x-2 text-[10px] uppercase tracking-widest text-luxury-black/40 mb-8">
        <Link to="/" className="hover:text-luxury-black transition-colors">Home</Link>
        <ChevronRight className="w-3 h-3" />
        <Link to="/shop" className="hover:text-luxury-black transition-colors">Shop</Link>
        <ChevronRight className="w-3 h-3" />
        <span className="text-luxury-black font-semibold tracking-widest">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        {/* Gallery */}
        <div className="space-y-4">
          <div className="aspect-[4/5] bg-[#F7F7F7] overflow-hidden group">
            <img
              data-strk-img-id={`pdp-main-${product.id}`}
              data-strk-img={`[pdp-desc] [pdp-name] jewelry gold luxury`}
              data-strk-img-ratio="4x5"
              data-strk-img-width="1000"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {[1, 2, 3, 4].map(idx => (
              <div key={idx} className="aspect-square bg-[#F7F7F7] overflow-hidden cursor-pointer hover:opacity-80 transition-opacity">
                <img
                  data-strk-img-id={`pdp-thumb-${product.id}-${idx}`}
                  data-strk-img={`[pdp-name] jewelry gold detail view ${idx}`}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="300"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  alt={`${product.name} detail ${idx}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="flex flex-col">
          <div className="mb-8 border-b border-gray-100 pb-8">
            <h1 id="pdp-name" className="text-3xl font-serif text-luxury-black mb-4 tracking-wider uppercase">
              {product.name}
            </h1>
            <p className="text-2xl text-luxury-black/80 font-serif mb-4 tracking-widest">${product.price}.00</p>
            <div id="pdp-desc" className="text-sm text-luxury-black/70 leading-relaxed font-light">
              <p>Timeless elegance reimagined. Handcrafted with attention to detail, this piece is designed to be worn and treasured for years to come.</p>
            </div>
          </div>

          <div className="space-y-8">
            {/* Tone Selector */}
            <div>
              <span className="text-[10px] uppercase tracking-widest font-bold text-luxury-black mb-3 block">Material Tone</span>
              <div className="flex gap-3">
                {['gold', 'silver'].map(tone => (
                  <button
                    key={tone}
                    onClick={() => setSelectedTone(tone)}
                    className={`px-6 py-2 border text-[10px] uppercase tracking-widest transition-all duration-300 ${
                      selectedTone === tone
                        ? 'border-luxury-black bg-luxury-black text-white'
                        : 'border-gray-200 text-luxury-black hover:border-luxury-black'
                    }`}
                  >
                    {tone}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <span className="text-[10px] uppercase tracking-widest font-bold text-luxury-black mb-3 block">Quantity</span>
              <div className="flex items-center border border-gray-200 w-32 h-12">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-full flex items-center justify-center hover:bg-gray-50 transition-colors border-r border-gray-200"
                >
                  <Minus className="w-3 h-3" />
                </button>
                <span className="flex-1 text-center font-serif text-sm">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-full flex items-center justify-center hover:bg-gray-50 transition-colors border-l border-gray-200"
                >
                  <Plus className="w-3 h-3" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="w-full h-14 bg-luxury-black text-white text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-luxury-black/90 transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              <ShoppingBag className="w-4 h-4" />
              Add to Bag
            </button>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-8 border-y border-gray-100 mt-8">
              <div className="flex flex-col items-center text-center space-y-2">
                <Truck className="w-5 h-5 text-gold-600" />
                <span className="text-[8px] uppercase tracking-widest font-bold">Fast Delivery</span>
              </div>
              <div className="flex flex-col items-center text-center space-y-2">
                <RotateCcw className="w-5 h-5 text-gold-600" />
                <span className="text-[8px] uppercase tracking-widest font-bold">30-Day Returns</span>
              </div>
              <div className="flex flex-col items-center text-center space-y-2">
                <ShieldCheck className="w-5 h-5 text-gold-600" />
                <span className="text-[8px] uppercase tracking-widest font-bold">2-Year Warranty</span>
              </div>
            </div>

            {/* Content Accordions */}
            <div className="space-y-4 pt-4">
              {['Description', 'Materials & Care', 'Shipping & Returns'].map(tab => (
                <div key={tab} className="border-b border-gray-100 pb-4">
                  <div className="flex items-center justify-between w-full uppercase tracking-widest text-[10px] font-bold">
                    {tab}
                    <Plus className="w-3 h-3" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Recommended */}
      <section className="mt-24">
        <h2 className="text-xl font-serif text-center mb-12 tracking-widest uppercase">You May Also Like</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {relatedProducts.map(rp => (
            <Link key={rp.id} to={`/product/${rp.id}`} className="group block">
              <div className="aspect-[4/5] bg-[#F7F7F7] overflow-hidden mb-4 relative">
                <img
                  data-strk-img-id={`pdp-related-${rp.id}`}
                  data-strk-img={`[pdp-related-name-${rp.id}] jewelry`}
                  data-strk-img-ratio="4/5"
                  data-strk-img-width="400"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  alt={rp.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h3 id={`pdp-related-name-${rp.id}`} className="text-[10px] font-bold uppercase tracking-widest text-luxury-black mb-1 group-hover:text-gold-600 transition-colors text-center">
                {rp.name}
              </h3>
              <p className="text-xs font-serif text-luxury-black/60 text-center">${rp.price}.00</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
