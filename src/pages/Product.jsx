import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronRight, Star, Minus, Plus, Check } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import ProductCard from '@/components/home/ProductCard';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CartDrawer from '@/components/layout/CartDrawer';

const Product = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const [selectedVariant, setSelectedVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const containerRef = useRef(null);
  const { addItem, setCartOpen } = useCart();

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <CartDrawer />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <p className="text-[#3d3229]">Product not found.</p>
          <Link to="/shop" className="mt-4 inline-block text-[#b08d57] underline">Back to shop</Link>
        </div>
        <Footer />
      </div>
    );
  }

  const relatedProducts = products
    .filter((p) => product.relatedIds.includes(p.id))
    .slice(0, 4);

  const handleAddToCart = () => {
    addItem(product.id, selectedVariant, quantity);
    setCartOpen(true);
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-white">
      <Navbar />
      <CartDrawer />
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-[#8c7b6b] mb-8">
            <Link to="/" className="hover:text-[#b08d57]">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link to="/shop" className="hover:text-[#b08d57]">Shop</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-[#3d3229]">{product.name}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            <div className="space-y-4">
              <div className="aspect-[3/4] bg-[#f5f0e8] rounded-sm overflow-hidden">
                <img
                  data-strk-img-id={`product-detail-${product.id}-1`}
                  data-strk-img={`[product-detail-${product.id}-name]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="900"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-4 gap-3">
                {product.images.map((img, idx) => (
                  <div key={img.id} className="aspect-square bg-[#f5f0e8] rounded-sm overflow-hidden">
                    <img
                      data-strk-img-id={`product-detail-${product.id}-${idx + 2}`}
                      data-strk-img={`[product-detail-${product.id}-name]`}
                      data-strk-img-ratio="1x1"
                      data-strk-img-width="300"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={`${product.name} thumbnail ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h1 id={`product-detail-${product.id}-name`} className="font-serif text-2xl md:text-3xl tracking-wider uppercase text-[#3d3229]">
                {product.name}
              </h1>
              <p className="mt-3 text-xl text-[#3d3229]">${product.price}</p>
              <div className="flex items-center gap-2 mt-3">
                <div className="flex text-[#b08d57]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-current' : 'text-[#e8e0d5]'}`} />
                  ))}
                </div>
                <span className="text-xs text-[#8c7b6b]">({product.reviewCount} reviews)</span>
              </div>
              <p className="mt-6 text-sm text-[#8c7b6b] leading-relaxed">{product.description}</p>

              <div className="mt-8">
                <p className="text-xs tracking-widest uppercase text-[#3d3229] mb-3">Finish</p>
                <div className="flex gap-3">
                  {product.variants.map((variant) => (
                    <button
                      key={variant}
                      onClick={() => setSelectedVariant(variant)}
                      className={`px-5 py-2 rounded-full text-xs tracking-widest uppercase border transition-colors ${
                        selectedVariant === variant
                          ? 'border-[#b08d57] bg-[#b08d57] text-white'
                          : 'border-[#e8e0d5] text-[#3d3229] hover:border-[#b08d57]'
                      }`}
                    >
                      {variant}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <p className="text-xs tracking-widest uppercase text-[#3d3229] mb-3">Quantity</p>
                <div className="inline-flex items-center border border-[#e8e0d5] rounded-full">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-2 text-[#3d3229] hover:text-[#b08d57]" aria-label="Decrease quantity">
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-4 text-sm text-[#3d3229]">{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)} className="p-2 text-[#3d3229] hover:text-[#b08d57]" aria-label="Increase quantity">
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <button
                onClick={handleAddToCart}
                className="mt-8 w-full bg-[#b08d57] text-white py-3.5 rounded-full text-sm tracking-widest uppercase hover:bg-[#9a7a48] transition-colors"
              >
                Add to Cart
              </button>

              <div className="mt-10 border-t border-[#e8e0d5]">
                {['description', 'materials', 'shipping'].map((tab) => (
                  <div key={tab} className="border-b border-[#e8e0d5] last:border-b-0">
                    <button
                      onClick={() => setActiveTab(tab)}
                      className="w-full flex items-center justify-between py-4 text-left"
                    >
                      <span className="text-sm tracking-widest uppercase text-[#3d3229]">
                        {tab === 'description' ? 'Description' : tab === 'materials' ? 'Materials & Care' : 'Shipping & Returns'}
                      </span>
                      <ChevronRight className={`w-4 h-4 text-[#8c7b6b] transition-transform ${activeTab === tab ? 'rotate-90' : ''}`} />
                    </button>
                    {activeTab === tab && (
                      <div className="pb-4 text-sm text-[#8c7b6b] leading-relaxed">
                        {tab === 'description' && product.description}
                        {tab === 'materials' && (
                          <>
                            <p className="mb-2">{product.materials}</p>
                            <p>{product.care}</p>
                          </>
                        )}
                        {tab === 'shipping' && (
                          <>
                            <p className="mb-2">Free worldwide shipping on all orders over $75.</p>
                            <p>30-day hassle-free returns. Items must be unworn and in original packaging.</p>
                          </>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {relatedProducts.length > 0 && (
            <section className="mt-20">
              <h2 className="font-serif text-2xl md:text-3xl text-center text-[#3d3229] mb-10">You May Also Like</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                {relatedProducts.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            </section>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Product;
