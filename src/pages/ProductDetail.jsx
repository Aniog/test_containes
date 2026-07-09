import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchProductById, fetchProducts } from '../api/products';
import { useCart } from '../context/CartContext';
import { ChevronDown, ChevronUp, Star, Truck, RefreshCw, ShieldCheck, ShoppingBag, ArrowLeft } from 'lucide-react';
import { cn } from '../lib/utils';

import ProductCard from '../components/common/ProductCard';

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [activeAccordion, setActiveAccordion] = useState('description');

  useEffect(() => {
    const loadProduct = async () => {
      setLoading(true);
      try {
        const data = await fetchProductById(id);
        setProduct(data);
        
        const allProducts = await fetchProducts();
        setRelatedProducts(allProducts.filter(p => p.id !== id).slice(0, 4));
      } catch (error) {
        console.error('Error loading product:', error);
      } finally {
        setLoading(false);
      }
    };
    loadProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="pt-32 pb-24 px-4 max-w-7xl mx-auto flex justify-center items-center min-h-[60vh]">
        <div className="animate-pulse text-stone-400 font-serif text-xl italic">Loading your treasure...</div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="pt-32 pb-24 px-4 max-w-7xl mx-auto text-center">
        <h1 className="text-2xl font-serif mb-8">Product not found</h1>
        <Link to="/shop" className="text-xs uppercase tracking-widest border-b border-charcoal pb-1">Return to Shop</Link>
      </div>
    );
  }

  const { name, price, description, material, category, variants } = product.data;
  const availableVariants = variants && variants.length > 0 ? variants : ['Gold', 'Silver'];

  const accordions = [
    { id: 'description', title: 'Description', content: description },
    { id: 'materials', title: 'Materials & Care', content: `Crafted in ${material}. To maintain its luster, avoid contact with water, perfumes, and lotions. Store in its original pouch when not in use.` },
    { id: 'shipping', title: 'Shipping & Returns', content: 'Free worldwide shipping on all orders. Returns accepted within 30 days of delivery for a full refund or exchange.' }
  ];

  return (
    <div className="pt-24 sm:pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <Link to="/shop" className="inline-flex items-center text-[10px] uppercase tracking-[0.2em] text-stone-400 hover:text-charcoal transition-colors mb-8 group">
          <ArrowLeft className="w-3 h-3 mr-2 transition-transform group-hover:-translate-x-1" />
          Back to Shop
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Left: Image Gallery */}
          <div className="space-y-6">
            <div className="aspect-[3/4] bg-stone-50 overflow-hidden relative group">
              <img 
                data-strk-img-id={`product-detail-main-${product.id}`}
                data-strk-img={`[pd-detail-name] [pd-detail-desc] jewelry gold model`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="1200"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                alt={name}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="aspect-square bg-stone-50 overflow-hidden cursor-pointer hover:opacity-80 transition-opacity">
                  <img 
                    data-strk-img-id={`product-detail-thumb-${product.id}-${i}`}
                    data-strk-img={`[pd-detail-name] jewelry detail close up ${i}`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="300"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'/%3E"
                    alt={`${name} view ${i}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right: Info */}
          <div className="flex flex-col">
            <div className="mb-8">
              <span className="text-[10px] uppercase tracking-[0.3em] text-stone-400 block mb-4">{category}</span>
              <h1 id="pd-detail-name" className="text-3xl sm:text-4xl font-serif uppercase tracking-[0.1em] text-charcoal mb-4">
                {name}
              </h1>
              <div className="flex items-baseline space-x-6">
                <span className="text-2xl font-medium">${price}</span>
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-gold text-gold" />
                  ))}
                  <span className="text-[10px] text-stone-400 ml-2 uppercase tracking-widest">(24 reviews)</span>
                </div>
              </div>
            </div>

            <p id="pd-detail-desc" className="text-stone-600 leading-relaxed mb-10 font-light">
              {description}. Elevate your everyday style with this timeless piece from our signature collection.
            </p>

            {/* Variant Selector */}
            <div className="mb-10 space-y-4">
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-charcoal">Tone: <span className="font-normal text-stone-500 ml-2">{selectedVariant}</span></span>
              <div className="flex space-x-4">
                {availableVariants.map((v) => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={cn(
                      "px-6 py-2 text-[10px] uppercase tracking-[0.2em] border transition-all duration-300",
                      selectedVariant === v ? "border-charcoal bg-charcoal text-white" : "border-stone-200 text-stone-400 hover:border-stone-400"
                    )}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity & Add to Cart */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <div className="flex items-center border border-stone-200 h-14 w-full sm:w-32 justify-between px-4">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 hover:bg-stone-50 transition-colors"
                >
                  <ChevronDown className="w-4 h-4" />
                </button>
                <span className="text-sm font-medium">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 hover:bg-stone-50 transition-colors"
                >
                  <ChevronUp className="w-4 h-4" />
                </button>
              </div>
              <button 
                onClick={() => addToCart(product, quantity, selectedVariant)}
                className="flex-grow bg-charcoal text-white h-14 flex items-center justify-center gap-3 text-xs uppercase tracking-[0.2em] font-bold hover:bg-gold transition-colors duration-300"
              >
                <ShoppingBag className="w-4 h-4" />
                Add to Bag
              </button>
            </div>

            {/* Trust Points */}
            <div className="border-t border-stone-100 py-10 grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center space-x-3 text-[10px] uppercase tracking-widest text-stone-500">
                <Truck className="w-4 h-4 text-gold" />
                <span>Free Shipping</span>
              </div>
              <div className="flex items-center space-x-3 text-[10px] uppercase tracking-widest text-stone-500">
                <RefreshCw className="w-4 h-4 text-gold" />
                <span>30-Day Returns</span>
              </div>
              <div className="flex items-center space-x-3 text-[10px] uppercase tracking-widest text-stone-500">
                <ShieldCheck className="w-4 h-4 text-gold" />
                <span>Secure Checkout</span>
              </div>
            </div>

            {/* Accordions */}
            <div className="space-y-4 border-t border-stone-100">
              {accordions.map((acc) => (
                <div key={acc.id} className="border-b border-stone-100">
                  <button 
                    onClick={() => setActiveAccordion(activeAccordion === acc.id ? '' : acc.id)}
                    className="w-full py-4 flex justify-between items-center text-[10px] uppercase tracking-[0.2em] font-bold text-charcoal"
                  >
                    {acc.title}
                    {activeAccordion === acc.id ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                  <div className={cn(
                    "overflow-hidden transition-all duration-300",
                    activeAccordion === acc.id ? "max-h-40 pb-6 opacity-100" : "max-h-0 opacity-0"
                  )}>
                    <p className="text-sm text-stone-500 leading-relaxed font-light">{acc.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <section className="mt-32 pt-24 border-t border-stone-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-serif text-center mb-16">You May Also Like</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;

