import { useEffect, useRef, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Layout } from '../components/layout/Layout';
import { products } from '../data/products';
import { ProductCard } from '../components/ui/ProductCard';
import { useCart } from '../components/cart/CartProvider';
import { Star, Plus, Minus, ChevronDown } from 'lucide-react';

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const [quantity, setQuantity] = useState(1);
  const [activeVariant, setActiveVariant] = useState('Gold');
  const [openAccordion, setOpenAccordion] = useState('description');
  const { addItem } = useCart();

  const product = products.find(p => p.id === id);
  const relatedProducts = products.filter(p => p.category === product?.category && p.id !== id).slice(0, 4);

  useEffect(() => {
    // Scroll to top on mount or id change
    window.scrollTo(0, 0);
    setQuantity(1);
  }, [id]);

  useEffect(() => {
    if (containerRef.current) {
      const frameId = window.requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      });
      return () => window.cancelAnimationFrame(frameId);
    }
  }, [id]);

  if (!product) {
    return (
      <Layout>
        <div className="pt-32 pb-24 text-center">
          <h1 className="text-3xl font-serif text-brand-900 mb-4">Product Not Found</h1>
          <button onClick={() => navigate('/shop')} className="btn-primary">Return to Shop</button>
        </div>
      </Layout>
    );
  }

  const handleAddToCart = () => {
    const imgEl = document.querySelector(`[data-strk-img-id="pdp-main-${product.id}"]`);
    const actualSrc = imgEl && imgEl.src && !imgEl.src.includes('data:image/svg') ? imgEl.src : product.image;
    addItem({ ...product, quantity, variant: activeVariant, image: actualSrc });
  };

  return (
    <Layout>
      <div ref={containerRef} className="pt-24 pb-24 bg-brand-50 text-brand-900">
        <div className="container mx-auto px-4 md:px-8">
          
          <div className="flex flex-col md:flex-row gap-8 lg:gap-16 mb-24">
            
            {/* Image Gallery */}
            <div className="md:w-1/2 flex flex-col-reverse md:flex-row gap-4 h-[60vh] md:h-[80vh] min-h-[500px]">
              {/* Thumbnails (vertical on desktop, horizontal on mobile) */}
              <div className="flex md:flex-col gap-4 overflow-auto no-scrollbar shrink-0 md:w-20">
                {[1, 2, 3].map((num) => (
                  <button key={num} className="w-20 h-24 shrink-0 bg-brand-100 border border-transparent hover:border-brand-300 focus:border-brand-900 transition-colors">
                    <img 
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={`${product.title} view ${num}`}
                      className="w-full h-full object-cover"
                      data-strk-img-id={`pdp-thumb-${product.id}-${num}`}
                      data-strk-img={`[pdp-title] detail view ${num}`}
                      data-strk-img-ratio="4x5"
                      data-strk-img-width="150"
                    />
                  </button>
                ))}
              </div>
              
              {/* Main Image */}
              <div className="flex-1 bg-brand-100 h-full">
                <img 
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.title}
                  className="w-full h-full object-cover"
                  data-strk-img-id={`pdp-main-${product.id}`}
                  data-strk-img={`[pdp-title] ${product.category} model editorial close`}
                  data-strk-img-ratio="4x5"
                  data-strk-img-width="1200"
                />
              </div>
            </div>

            {/* Product Info */}
            <div className="md:w-1/2 flex flex-col">
              <nav className="text-xs uppercase tracking-widest text-brand-500 mb-6 flex gap-2">
                <a href="/" className="hover:text-brand-900">Home</a>
                <span>/</span>
                <a href="/shop" className="hover:text-brand-900">Shop</a>
                <span>/</span>
                <span className="text-brand-900">{product.title}</span>
              </nav>

              <h1 id="pdp-title" className="text-3xl lg:text-4xl font-serif text-brand-900 mb-2 uppercase tracking-widest leading-tight">
                {product.title}
              </h1>
              
              <div className="flex items-center gap-4 mb-6">
                <p className="text-2xl font-serif">${product.price.toFixed(2)}</p>
                <div className="flex items-center text-accent">
                  {[1, 2, 3, 4, 5].map(star => (
                    <Star key={star} className="w-4 h-4 fill-current" />
                  ))}
                  <span className="text-brand-500 text-sm ml-2 font-sans">(124)</span>
                </div>
              </div>

              <div className="hairline-divider mb-8" />

              <div className="mb-8">
                <span className="text-sm font-medium tracking-widest uppercase block mb-3">Color / Tone: {activeVariant}</span>
                <div className="flex gap-3">
                  <button 
                    onClick={() => setActiveVariant('Gold')}
                    className={`px-4 py-2 border text-sm font-medium tracking-wider uppercase transition-colors ${
                      activeVariant === 'Gold' ? 'border-brand-900 bg-brand-900 text-brand-50' : 'border-brand-200 text-brand-700 hover:border-brand-400'
                    }`}
                  >
                    18K Gold
                  </button>
                  <button 
                    onClick={() => setActiveVariant('Silver')}
                    className={`px-4 py-2 border text-sm font-medium tracking-wider uppercase transition-colors ${
                      activeVariant === 'Silver' ? 'border-brand-900 bg-brand-900 text-brand-50' : 'border-brand-200 text-brand-700 hover:border-brand-400'
                    }`}
                  >
                    Silver
                  </button>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <div className="flex items-center border border-brand-900 w-full sm:w-32 h-12">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-3 text-brand-600 hover:bg-brand-100 transition-colors h-full flex items-center"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="flex-1 text-center font-medium">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-3 text-brand-600 hover:bg-brand-100 transition-colors h-full flex items-center"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                <button 
                  onClick={handleAddToCart}
                  className="btn-primary flex-1 h-12"
                >
                  Add to Cart — ${(product.price * quantity).toFixed(2)}
                </button>
              </div>

              {/* Accordions */}
              <div className="border-t border-brand-200 mt-auto">
                <div className="border-b border-brand-200">
                  <button 
                    className="w-full py-4 flex justify-between items-center text-sm font-medium tracking-widest uppercase"
                    onClick={() => setOpenAccordion(openAccordion === 'description' ? '' : 'description')}
                  >
                    Description
                    <ChevronDown className={`w-4 h-4 transition-transform ${openAccordion === 'description' ? 'rotate-180' : ''}`} />
                  </button>
                  {openAccordion === 'description' && (
                    <div className="pb-4 font-light text-brand-700 leading-relaxed">
                      <p>{product.description}</p>
                    </div>
                  )}
                </div>

                <div className="border-b border-brand-200">
                  <button 
                    className="w-full py-4 flex justify-between items-center text-sm font-medium tracking-widest uppercase"
                    onClick={() => setOpenAccordion(openAccordion === 'details' ? '' : 'details')}
                  >
                    Materials & Care
                    <ChevronDown className={`w-4 h-4 transition-transform ${openAccordion === 'details' ? 'rotate-180' : ''}`} />
                  </button>
                  {openAccordion === 'details' && (
                    <div className="pb-4 font-light text-brand-700">
                      <ul className="list-disc pl-5 space-y-2">
                        {product.details.map((detail, idx) => (
                          <li key={idx}>{detail}</li>
                        ))}
                      </ul>
                      <p className="mt-4 text-sm">To maintain the luster of your Velmora jewelry, simply wipe with a soft, dry cloth after wear. Store in a cool, dry place.</p>
                    </div>
                  )}
                </div>

                <div className="border-b border-brand-200">
                  <button 
                    className="w-full py-4 flex justify-between items-center text-sm font-medium tracking-widest uppercase"
                    onClick={() => setOpenAccordion(openAccordion === 'shipping' ? '' : 'shipping')}
                  >
                    Shipping & Returns
                    <ChevronDown className={`w-4 h-4 transition-transform ${openAccordion === 'shipping' ? 'rotate-180' : ''}`} />
                  </button>
                  {openAccordion === 'shipping' && (
                    <div className="pb-4 font-light text-brand-700 space-y-2 text-sm">
                      <p><strong>Free Standard Shipping</strong> on all orders within the US (3-5 business days).</p>
                      <p><strong>Express Shipping</strong> available for $15 (1-2 business days).</p>
                      <p>We accept returns of unworn items in their original packaging within 30 days of delivery.</p>
                    </div>
                  )}
                </div>
              </div>

            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div className="pt-16 border-t border-brand-200">
              <h2 className="text-3xl font-serif text-center mb-12 text-brand-900">You May Also Like</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                {relatedProducts.map(p => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
    </Layout>
  );
}