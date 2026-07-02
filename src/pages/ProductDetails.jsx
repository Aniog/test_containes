import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Plus, Minus, MoveLeft, ChevronDown, ChevronUp } from 'lucide-react';
import { getProductById, getProductsByCategory } from '@/lib/data';
import { useCart } from '../components/cart/CartContext';
import { ProductCard } from '../components/product/ProductCard';

export function ProductDetails() {
  const { id } = useParams();
  const product = getProductById(id);
  const { addToCart } = useCart();
  
  const [quantity, setQuantity] = useState(1);
  const [variant, setVariant] = useState('18K Gold');
  const [activeImage, setActiveImage] = useState(0);
  const [openAccordion, setOpenAccordion] = useState('description');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-32 text-center h-[60vh] flex flex-col items-center justify-center">
        <h1 className="text-3xl font-serif mb-4">Product Not Found</h1>
        <Link to="/collections/all" className="uppercase tracking-widest text-sm border-b border-foreground pb-1 hover:text-primary transition-colors">
          Return to Shop
        </Link>
      </div>
    );
  }

  const images = [product.image, product.hoverImage || product.image];
  const relatedProducts = getProductsByCategory(product.category).filter(p => p.id !== product.id).slice(0, 4);

  const handleAdd = () => {
    addToCart(product, quantity, variant);
  };

  const toggleAccordion = (section) => {
    setOpenAccordion(openAccordion === section ? null : section);
  };

  return (
    <div className="bg-background pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Breadcrumb */}
        <div className="mb-8 flex items-center text-xs uppercase tracking-widest text-muted-foreground gap-2">
          <Link to="/" className="hover:text-foreground">Home</Link>
          <span>/</span>
          <Link to={`/collections/${product.category.toLowerCase()}`} className="hover:text-foreground">{product.category}</Link>
          <span>/</span>
          <span className="text-foreground">{product.name}</span>
        </div>

        {/* Product Area */}
        <div className="flex flex-col md:flex-row gap-12 lg:gap-24 mb-24">
          
          {/* Images */}
          <div className="w-full md:w-1/2 flex gap-4">
            <div className="hidden md:flex flex-col gap-4 w-20">
              {images.map((img, idx) => (
                <button 
                  key={idx} 
                  onClick={() => setActiveImage(idx)}
                  className={`w-full aspect-[3/4] bg-muted overflow-hidden border ${activeImage === idx ? 'border-primary' : 'border-transparent'}`}
                >
                  <img src={img} alt={`Thumbnail ${idx}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
            <div className="flex-1 aspect-[3/4] bg-muted relative">
              <img src={images[activeImage]} alt={product.name} className="w-full h-full object-cover" />
              {/* Mobile pagination dots */}
              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 md:hidden">
                {images.map((_, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setActiveImage(idx)} 
                    className={`w-2 h-2 rounded-full ${activeImage === idx ? 'bg-primary' : 'bg-white/50'}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Details */}
          <div className="w-full md:w-1/2 lg:py-8">
            <h1 className="text-3xl lg:text-4xl font-serif uppercase tracking-wider mb-2 text-foreground">{product.name}</h1>
            <p className="text-xl mb-6 text-foreground font-medium">${product.price.toFixed(2)}</p>
            
            <div className="flex items-center gap-2 mb-8">
              <div className="flex text-primary">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="text-sm text-muted-foreground underline decoration-border underline-offset-4">{product.reviews} Reviews</span>
            </div>

            {/* Variants */}
            <div className="mb-8">
              <p className="text-sm uppercase tracking-widest mb-3 font-medium text-foreground">Finish: <span className="text-muted-foreground">{variant}</span></p>
              <div className="flex gap-3">
                <button 
                  onClick={() => setVariant('18K Gold')}
                  className={`px-6 py-2 border text-sm uppercase tracking-wider transition-colors ${variant === '18K Gold' ? 'border-primary bg-primary/5' : 'border-border hover:border-foreground'}`}
                >
                  18K Gold
                </button>
                <button 
                  onClick={() => setVariant('Sterling Silver')}
                  className={`px-6 py-2 border text-sm uppercase tracking-wider transition-colors ${variant === 'Sterling Silver' ? 'border-primary bg-primary/5' : 'border-border hover:border-foreground'}`}
                >
                  Sterling Silver
                </button>
              </div>
            </div>

            {/* Quantity & Add */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <div className="flex items-center border border-border h-14 w-full sm:w-32 justify-between px-4">
                <button onClick={() => setQuantity(q => Math.max(1, q-1))} className="text-muted-foreground hover:text-foreground"><Minus className="w-4 h-4" /></button>
                <span className="text-sm font-medium">{quantity}</span>
                <button onClick={() => setQuantity(q => q+1)} className="text-muted-foreground hover:text-foreground"><Plus className="w-4 h-4" /></button>
              </div>
              <button 
                onClick={handleAdd}
                className="flex-1 h-14 bg-primary text-primary-foreground uppercase tracking-widest text-sm font-medium hover:bg-primary/90 transition-colors"
              >
                Add to Cart - ${(product.price * quantity).toFixed(2)}
              </button>
            </div>

            {/* Accordions */}
            <div className="border-t border-border mt-8">
              <div className="border-b border-border">
                <button onClick={() => toggleAccordion('description')} className="w-full flex justify-between items-center py-5 uppercase tracking-widest text-sm font-medium group">
                  Description
                  {openAccordion === 'description' ? <ChevronUp className="w-4 h-4 text-muted-foreground group-hover:text-foreground" /> : <ChevronDown className="w-4 h-4 text-muted-foreground group-hover:text-foreground" />}
                </button>
                {openAccordion === 'description' && (
                  <div className="pb-5 pt-1 text-muted-foreground text-sm leading-relaxed max-w-prose">
                    <p>{product.description}</p>
                    <p className="mt-4">Elevate your daily uniform. Designed in-house and sustainably crafted.</p>
                  </div>
                )}
              </div>
              <div className="border-b border-border">
                <button onClick={() => toggleAccordion('materials')} className="w-full flex justify-between items-center py-5 uppercase tracking-widest text-sm font-medium group">
                  Materials & Care
                  {openAccordion === 'materials' ? <ChevronUp className="w-4 h-4 text-muted-foreground group-hover:text-foreground" /> : <ChevronDown className="w-4 h-4 text-muted-foreground group-hover:text-foreground" />}
                </button>
                {openAccordion === 'materials' && (
                  <div className="pb-5 pt-1 text-muted-foreground text-sm leading-relaxed max-w-prose space-y-2">
                    <p><strong>Material:</strong> 18K Gold Plated over brass. Hypoallergenic, nickel and lead-free.</p>
                    <p><strong>Care:</strong> To maintain its luster, avoid contact with perfumes, lotions, and harsh chemicals. Store in the provided Velmora pouch when not in use.</p>
                  </div>
                )}
              </div>
              <div className="border-b border-border">
                <button onClick={() => toggleAccordion('shipping')} className="w-full flex justify-between items-center py-5 uppercase tracking-widest text-sm font-medium group">
                  Shipping & Returns
                  {openAccordion === 'shipping' ? <ChevronUp className="w-4 h-4 text-muted-foreground group-hover:text-foreground" /> : <ChevronDown className="w-4 h-4 text-muted-foreground group-hover:text-foreground" />}
                </button>
                {openAccordion === 'shipping' && (
                  <div className="pb-5 pt-1 text-muted-foreground text-sm leading-relaxed max-w-prose space-y-2">
                    <p>Free worldwide shipping on all orders. Expedited options available at checkout.</p>
                    <p>We accept returns of unworn items in their original packaging within 30 days of delivery.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="border-t border-border pt-16">
            <h2 className="text-2xl font-serif text-center mb-10">You May Also Like</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {relatedProducts.map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
