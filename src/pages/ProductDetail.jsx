import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp, ArrowLeft } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { fetchProductBySlug, fetchProducts } from '@/api/products';
import { Button } from '@/components/ui/button';
import { useCart } from '@/lib/CartContext';
import ProductCard from '@/components/shop/ProductCard';
import { cn } from '@/lib/utils';

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-stone-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-[10px] uppercase tracking-[0.2em] font-semibold text-stone-900"
      >
        <span>{title}</span>
        {isOpen ? <ChevronUp className="w-4 h-4 text-stone-400" /> : <ChevronDown className="w-4 h-4 text-stone-400" />}
      </button>
      <div className={cn(
        "overflow-hidden transition-all duration-300",
        isOpen ? "max-h-96 pb-6" : "max-h-0"
      )}>
        <div className="text-stone-500 font-sans text-sm leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
};

const ProductDetail = () => {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const [activeImgIdx, setActiveImgIdx] = useState(0);
  const containerRef = useRef(null);
  const { addToCart } = useCart();

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        const prodData = await fetchProductBySlug(slug);
        setProduct(prodData);

        const allProds = await fetchProducts();
        setRelatedProducts(allProds.filter(p => p.slug !== slug).slice(0, 4));
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    loadData();
    window.scrollTo(0, 0);
    setActiveImgIdx(0);
  }, [slug]);

  useEffect(() => {
    if (!loading && product) {
      const frameId = window.requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      });
      return () => window.cancelAnimationFrame(frameId);
    }
  }, [loading, product, activeImgIdx]);

  if (loading) return <div className="pt-40 pb-24 text-center italic font-serif text-stone-400">Loading treasures...</div>;
  if (!product) return <div className="pt-40 pb-24 text-center font-serif">Product not found.</div>;

  return (
    <div ref={containerRef} className="pt-32 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Breadcrumbs */}
        <Link to="/shop" className="inline-flex items-center text-[10px] uppercase tracking-widest font-semibold text-stone-400 hover:text-stone-900 mb-12 transition-colors">
          <ArrowLeft className="w-3 h-3 mr-2" /> Back to Collection
        </Link>

        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left: Gallery */}
          <div className="lg:w-[60%] flex flex-col-reverse md:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex md:flex-col space-x-4 md:space-x-0 md:space-y-4 overflow-x-auto md:overflow-visible no-scrollbar">
              {[0, 1, 2].map((idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImgIdx(idx)}
                  className={cn(
                    "w-20 md:w-24 aspect-[3/4] bg-stone-100 flex-none overflow-hidden border transition-all duration-300",
                    activeImgIdx === idx ? "border-[#9a7b4f]" : "border-transparent"
                  )}
                >
                  <img
                    data-strk-img-id={`pdp-thumb-${product.id}-${idx}`}
                    data-strk-img={`[pdp-name] gold jewelry view ${idx}`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} thumbnail ${idx}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main Image */}
            <div className="flex-1 aspect-[3/4] bg-stone-100 overflow-hidden relative">
              <img
                data-strk-img-id={`pdp-main-${product.id}`}
                data-strk-img={`[pdp-name] gold jewelry lifestyle close up view ${activeImgIdx}`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="1200"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right: Info */}
          <div className="lg:w-[40%] space-y-8">
            <div className="space-y-4">
              <h1 id="pdp-name" className="text-3xl md:text-4xl font-serif text-stone-900 uppercase tracking-widest leading-tight">
                {product.name}
              </h1>
              <div className="flex items-center space-x-4">
                <span className="text-xl font-sans font-light text-stone-900">${product.price}</span>
                <div className="flex items-center space-x-1">
                  {[1, 2, 3, 4, 5].map(n => <Star key={n} className="w-3 h-3 fill-[#9a7b4f] text-[#9a7b4f]" />)}
                  <span className="text-[10px] text-stone-400 font-sans tracking-widest ml-2">(24 Reviews)</span>
                </div>
              </div>
              <p id="pdp-desc" className="text-stone-500 font-sans text-sm leading-relaxed">
                {product.description || `Enhance your jewelry collection with the ${product.name}. A testament to quiet luxury, this piece is designed to be a timeless staple in your wardrobe.`}
              </p>
            </div>

            {/* Variant Selector */}
            <div className="space-y-4">
              <h4 className="text-[10px] uppercase tracking-widest font-semibold text-stone-900">Finish: {selectedVariant}</h4>
              <div className="flex space-x-3">
                {['Gold', 'Silver'].map((v) => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={cn(
                      "px-6 py-2 border text-[10px] uppercase tracking-widest font-sans transition-all duration-300",
                      selectedVariant === v ? "bg-stone-900 text-white border-stone-900" : "border-stone-200 text-stone-500 hover:border-stone-400"
                    )}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity & CTA */}
            <div className="space-y-6 pt-4">
              <div className="flex items-center space-x-12">
                <div className="flex items-center space-x-6 border border-stone-200 px-4 py-3">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="text-stone-400 hover:text-stone-900 transition-colors">
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="text-sm font-sans w-6 text-center">{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)} className="text-stone-400 hover:text-stone-900 transition-colors">
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <Button
                size="lg"
                className="w-full bg-[#1a1a1a] text-white hover:bg-stone-800 h-16"
                onClick={() => addToCart(product, selectedVariant, quantity)}
              >
                Add to Cart
              </Button>
            </div>

            {/* Accordions */}
            <div className="pt-8">
              <Accordion title="Description">
                Handcrafted with meticulous attention to detail. This piece embodies our brand philosophy of refined simplicity and quiet luxury.
              </Accordion>
              <Accordion title="Materials & Care">
                Made from 18K Gold Vermeil (a thick layer of gold over sterling silver) or high-polished Sterling Silver. To maintain its shine, avoid prolonged contact with water, perfumes, and body oils.
              </Accordion>
              <Accordion title="Shipping & Returns">
                We offer free worldwide shipping on all orders. Returns are accepted within 30 days of purchase for a full refund or exchange.
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <section className="mt-32">
          <div className="flex flex-col items-center mb-16 text-center">
            <h2 className="text-2xl md:text-3xl font-serif mb-4">You May Also Like</h2>
            <div className="h-0.5 w-12 bg-[#9a7b4f]" />
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {relatedProducts.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProductDetail;
