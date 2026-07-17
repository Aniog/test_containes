import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown } from 'lucide-react';
import { useCartStore } from '../store/cartStore';
import { MOCK_PRODUCTS } from '../data';
import ProductCard from '../components/ProductCard';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ProductThumbImage, ProductMainImage } from '../components/ProductImage';

const Accordion = ({ title, content, isOpen, onClick }) => {
  return (
    <div className="border-b border-border">
      <button 
        className="w-full flex items-center justify-between py-5 uppercase tracking-widest text-xs font-semibold hover:text-primary transition-colors"
        onClick={onClick}
      >
        <span>{title}</span>
        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 mb-6' : 'max-h-0 opacity-0'}`}
      >
        <div className="text-sm text-muted-foreground leading-relaxed">
          {content}
        </div>
      </div>
    </div>
  );
};

export default function ProductDetail() {
  const containerRef = useRef(null);
  const { productId } = useParams();
  const { addItem, openCart } = useCartStore();
  
  const [product, setProduct] = useState(null);
  const [variant, setVariant] = useState('18k gold');
  const [quantity, setQuantity] = useState(1);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [openAccordion, setOpenAccordion] = useState('description');

  useEffect(() => {
    // Find product from mock data
    const p = MOCK_PRODUCTS.find(item => item.id === productId);
    if (p) {
      setProduct(p);
    }
  }, [productId]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [product, activeImageIndex]); // Rerun when product changes

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [productId]);

  if (!product) {
    return <div className="min-h-screen pt-24 pb-12 px-6 text-center font-serif text-2xl">Product not found</div>;
  }

  const handleAddToCart = () => {
    addItem(product, variant, quantity);
    openCart();
  };

  const decreaseQuantity = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));
  const increaseQuantity = () => setQuantity(prev => prev + 1);

  // Recommendations: exclude current product, take first 4
  const relatedProducts = MOCK_PRODUCTS.filter(p => p.id !== product.id).slice(0, 4);

  return (
    <div className="pt-24 pb-24 min-h-screen" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground mb-8">
          <Link to="/" className="hover:text-foreground">Home</Link>
          <span>/</span>
          <Link to={`/shop?category=${product.category.toLowerCase()}`} className="hover:text-foreground">{product.category}</Link>
          <span>/</span>
          <span className="text-foreground">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-24">
          
          {/* Left: Image Gallery */}
          <div className="flex flex-col-reverse lg:flex-row gap-4 lg:gap-6">
            {/* Thumbnails */}
            <div className="flex lg:flex-col gap-4 overflow-x-auto lg:overflow-visible no-scrollbar pb-2 lg:pb-0 lg:w-20 snap-x">
              {[0, 1, 2, 3].map((i) => (
                <button 
                  key={i}
                  onClick={() => setActiveImageIndex(i)}
                  className={`flex-none w-20 flex-shrink-0 aspect-[3/4] relative snap-start overflow-hidden border-2 ${activeImageIndex === i ? 'border-foreground' : 'border-transparent opacity-60 hover:opacity-100'} transition-all`}
                >
                  <ProductThumbImage
                    productId={product.id}
                    index={i}
                    alt={`${product.name} view ${i}`}
                    className="object-cover w-full h-full"
                    idQuery={`[product-title] view ${i}`}
                  />
                </button>
              ))}
            </div>

            {/* Main Image */}
            <div className="flex-1 aspect-[3/4] bg-muted relative overflow-hidden">
              <ProductMainImage
                productId={product.id}
                index={activeImageIndex}
                alt={product.name}
                className="object-cover w-full h-full"
                idQuery={`[product-title] view ${activeImageIndex + 1}`}
              />
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="flex flex-col">
            <h1 id="product-title" className="font-serif text-3xl lg:text-4xl uppercase tracking-wide mb-2">{product.name}</h1>
            
            <div className="flex items-center gap-4 mb-6">
              <span className="font-serif text-2xl tracking-widest">${product.price}</span>
              <div className="flex items-center gap-1 text-primary">
                {[1, 2, 3, 4, 5].map(star => <Star key={star} className="w-4 h-4 fill-current" />)}
                <span className="text-xs uppercase tracking-widest text-muted-foreground ml-2">(42 Reviews)</span>
              </div>
            </div>

            <p className="text-sm text-foreground/80 leading-relaxed mb-8">{product.description}</p>

            {/* Variant Selector */}
            <div className="mb-8">
              <p className="text-xs uppercase tracking-widest font-semibold mb-3">Metal: <span className="text-muted-foreground font-normal ml-2">{variant}</span></p>
              <div className="flex gap-4">
                <button 
                  onClick={() => setVariant('18k gold')}
                  className={`w-12 h-12 rounded-full border flex items-center justify-center p-1 transition-colors ${variant === '18k gold' ? 'border-foreground' : 'border-transparent'}`}
                >
                  <span className="w-full h-full rounded-full bg-gradient-to-br from-[#F5D78D] to-[#CF9B2A]"></span>
                </button>
                <button 
                  onClick={() => setVariant('sterling silver')}
                  className={`w-12 h-12 rounded-full border flex items-center justify-center p-1 transition-colors ${variant === 'sterling silver' ? 'border-foreground' : 'border-transparent'}`}
                >
                  <span className="w-full h-full rounded-full bg-gradient-to-br from-[#EAEAEA] to-[#B0B0B0]"></span>
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-4 mb-12">
              <div className="flex items-center border border-border h-12 w-32">
                <button 
                  onClick={decreaseQuantity}
                  className="flex-1 flex justify-center items-center text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="text-sm px-2 text-center">{quantity}</span>
                <button 
                  onClick={increaseQuantity}
                  className="flex-1 flex justify-center items-center text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>

              <button 
                onClick={handleAddToCart}
                className="flex-1 bg-foreground text-background h-12 uppercase tracking-widest text-sm hover:bg-primary transition-colors flex items-center justify-center"
              >
                Add to Cart — ${(product.price * quantity).toFixed(2)}
              </button>
            </div>

            {/* Accordions */}
            <div className="mt-8 border-t border-border">
              <Accordion 
                title="Description" 
                content={product.description} 
                isOpen={openAccordion === 'description'}
                onClick={() => setOpenAccordion(openAccordion === 'description' ? null : 'description')}
              />
              <Accordion 
                title="Materials & Care" 
                content={<>
                  <p className="mb-2">Crafted from a thick layer of 18k gold on sterling silver, creating a finish that is durable and luxurious.</p>
                  <p>To preserve the beauty of your jewelry, avoiding letting it come into contact with perfumes, lotions, and harsh chemicals. When not being worn, store it in its original pouch.</p>
                </>} 
                isOpen={openAccordion === 'materials'}
                onClick={() => setOpenAccordion(openAccordion === 'materials' ? null : 'materials')}
              />
              <Accordion 
                title="Shipping & Returns" 
                content={<>
                  <p className="mb-2">We offer free standard shipping on all orders worldwide.</p>
                  <p>If you're not completely satisfied with your purchase, you may return the item in its original condition within 30 days of receiving your order for a full refund or exchange.</p>
                </>} 
                isOpen={openAccordion === 'shipping'}
                onClick={() => setOpenAccordion(openAccordion === 'shipping' ? null : 'shipping')}
              />
            </div>

          </div>
        </div>

        {/* Related Products */}
        <section className="pt-16 border-t border-border">
          <div className="flex items-end justify-between mb-12">
            <h2 id="related-title" className="font-serif text-2xl md:text-3xl tracking-wide uppercase text-foreground">You May Also Like</h2>
            <Link to="/shop" className="hidden md:inline-block text-sm uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors border-b border-transparent hover:border-primary pb-1">
              Shop All
            </Link>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}