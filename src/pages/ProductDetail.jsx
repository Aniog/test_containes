import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProductBySlug, getProducts } from '../api/products';
import { useCart } from '../context/CartContext';
import { formatCurrency, cn } from '../lib/utils';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';
import { Minus, Plus, Star, ChevronDown, ChevronUp, ChevronLeft, ChevronRight } from 'lucide-react';
import { toast } from 'sonner';
import ProductCard from '../components/shop/ProductCard';

const ProductDetail = () => {
  const { slug } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const [activeAccordion, setActiveAccordion] = useState('description');
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const pageRef = useRef(null);

  useEffect(() => {
    const fetchProductData = async () => {
      setLoading(true);
      try {
        const prod = await getProductBySlug(slug);
        if (prod) {
          setProduct(prod);
          const related = await getProducts({ category: prod.data.category });
          setRelatedProducts(related.filter(p => p.id !== prod.id).slice(0, 4));
        }
      } catch (err) {
        console.error('Failed to fetch product:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchProductData();
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    if (!loading && product) {
      ImageHelper.loadImages(strkImgConfig, pageRef.current);
    }
  }, [loading, product, relatedProducts]);

  if (loading) return <div className="min-h-screen flex items-center justify-center pt-24"><div className="w-8 h-8 border-b-2 border-brand-accent rounded-full animate-spin"></div></div>;
  if (!product) return <div className="min-h-screen flex flex-col items-center justify-center pt-24 space-y-4"><p className="text-xl font-serif">Product not found.</p><Link to="/shop" className="btn-outline">Back to Shop</Link></div>;

  const AccordionItem = ({ id, title, children }) => (
    <div className="border-b border-brand-text/10">
      <button 
        onClick={() => setActiveAccordion(activeAccordion === id ? '' : id)}
        className="w-full py-6 flex justify-between items-center text-xs uppercase tracking-widest font-bold hover:text-brand-accent transition-colors"
      >
        <span>{title}</span>
        {activeAccordion === id ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </button>
      <div className={cn(
        "overflow-hidden transition-all duration-300 ease-in-out",
        activeAccordion === id ? "max-h-[500px] pb-8 opacity-100" : "max-h-0 opacity-0"
      )}>
        <div className="text-sm text-brand-neutral leading-relaxed font-light space-y-4">
          {children}
        </div>
      </div>
    </div>
  );

  const images = [
    { id: 'img-1', query: `[prod-title] jewelry editorial product close-up` },
    { id: 'img-2', query: `[prod-title] jewelry model worn side view` },
    { id: 'img-3', query: `[prod-title] jewelry detail macros photography` },
  ];

  return (
    <div ref={pageRef} className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        {/* Breadcrumbs */}
        <nav className="flex items-center space-x-2 text-[10px] uppercase tracking-widest text-brand-neutral/60 mb-12">
          <Link to="/" className="hover:text-brand-text">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-brand-text">Shop</Link>
          <span>/</span>
          <Link to={`/shop?category=${product.data.category}`} className="hover:text-brand-text">{product.data.category}</Link>
          <span>/</span>
          <span className="text-brand-text font-bold">{product.data.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-32">
          {/* Left: Image Gallery */}
          <div className="space-y-6">
            <div className="relative aspect-[3/4] bg-brand-neutral/5 overflow-hidden group">
              <img
                data-strk-img-id={`gallery-main-${images[activeImageIndex].id}`}
                data-strk-img={images[activeImageIndex].query}
                data-strk-img-ratio="3x4"
                data-strk-img-width="1200"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                alt={product.data.name}
                className="w-full h-full object-cover transition-all duration-700"
              />
              <button 
                onClick={() => setActiveImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/50 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={() => setActiveImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/50 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <ChevronRight size={20} />
              </button>
            </div>
            
            <div className="grid grid-cols-3 gap-4">
              {images.map((img, idx) => (
                <button 
                  key={img.id}
                  onClick={() => setActiveImageIndex(idx)}
                  className={cn(
                    "aspect-[3/4] bg-brand-neutral/5 overflow-hidden transition-all duration-300",
                    activeImageIndex === idx ? "ring-1 ring-brand-text" : "opacity-60 hover:opacity-100"
                  )}
                >
                  <img
                    data-strk-img-id={`gallery-thumb-${img.id}`}
                    data-strk-img={img.query}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                    alt={`${product.data.name} thumb ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Product Details */}
          <div className="space-y-10">
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-[0.3em] text-brand-neutral font-medium block">{product.data.category}</span>
              <h1 id="prod-title" className="text-4xl md:text-5xl font-serif uppercase tracking-wider leading-tight">{product.data.name}</h1>
              <div className="flex items-center justify-between">
                <p className="text-2xl font-light">{formatCurrency(product.data.price)}</p>
                <div className="flex items-center space-x-2">
                  <div className="flex text-brand-accent">
                    {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                  </div>
                  <span className="text-[10px] uppercase tracking-widest text-brand-neutral">(42 Reviews)</span>
                </div>
              </div>
            </div>

            <p className="text-brand-neutral text-base font-light italic leading-relaxed">
              {product.data.description || "A centerpiece of effortless sophistication. This piece is meticulously crafted to capture a sense of quiet luxury, making it the perfect addition to both your everyday and evening ensembles."}
            </p>

            {/* Variant Selector */}
            <div className="space-y-4">
              <h4 className="text-[10px] uppercase tracking-widest font-bold">Select Tone</h4>
              <div className="flex space-x-4">
                {['Gold', 'Silver'].map((v) => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={cn(
                      "px-8 py-3 text-[10px] uppercase tracking-widest border rounded-full transition-all",
                      selectedVariant === v ? "bg-brand-text text-white border-brand-text" : "border-brand-text/10 hover:border-brand-text"
                    )}
                  >
                    {v} Tone
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity & Add to Cart */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center border border-brand-text/20 h-14">
                <button 
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="px-6 hover:bg-brand-neutral/5 transition-colors h-full flex items-center"
                >
                  <Minus size={16} />
                </button>
                <span className="w-12 text-center text-sm font-medium">{quantity}</span>
                <button 
                  onClick={() => setQuantity(q => q + 1)}
                  className="px-6 hover:bg-brand-neutral/5 transition-colors h-full flex items-center"
                >
                  <Plus size={16} />
                </button>
              </div>
              <button 
                onClick={() => {
                  addToCart(product, quantity, selectedVariant);
                  toast.success(`Added ${product.data.name} to cart`);
                }}
                className="flex-1 btn-primary h-14 text-sm"
              >
                Add to Cart
              </button>
            </div>

            {/* Accordions */}
            <div className="pt-10 space-y-2">
              <AccordionItem id="description" title="Description">
                <p>Designed for daily elegance, our {product.data.name} is a testament to Velmora's commitment to "Quiet Luxury". Featuring refined lines and a timeless silhouette, it transitions effortlessly from morning meetings to evening soirées.</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Hand-set crystal accents</li>
                  <li>Polished finish for lasting shine</li>
                  <li>Lightweight for all-day comfort</li>
                </ul>
              </AccordionItem>
              <AccordionItem id="materials" title="Materials & Care">
                <p>Velmora utilizes only high-quality materials for our demi-fine collection.</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>18K Gold Plated or 925 Sterling Silver over premium brass base</li>
                  <li>Hypoallergenic; nickel and lead-free for sensitive skin</li>
                  <li>To maintain shine, avoid contact with perfumes, lotions, and chlorine. Wipe clean with a soft polishing cloth after wear.</li>
                </ul>
              </AccordionItem>
              <AccordionItem id="shipping" title="Shipping & Returns">
                <p>We take pride in our service as much as our craftsmanship.</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Complimentary Worldwide Shipping:</strong> Standard delivery in 3-5 business days.</li>
                  <li><strong>30-Day Returns:</strong> If you're not completely in love, return within 30 days for a full refund or exchange.</li>
                  <li><strong>Gift Ready:</strong> Arrives in our signature Velmora editorial box and satin pouch.</li>
                </ul>
              </AccordionItem>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="space-y-12">
            <div className="text-center">
              <span className="text-xs uppercase tracking-[0.3em] text-brand-neutral font-medium mb-4 block">Complete the set</span>
              <h2 className="text-4xl font-serif">You May Also Like</h2>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
