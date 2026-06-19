import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../lib/data';
import { useCartStore } from '../store/useCartStore';
import { ChevronRight, Star, Minus, Plus, ChevronDown, ChevronUp } from 'lucide-react';
import ProductCard from '../components/ProductCard';

const ProductPage = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [expandedSection, setExpandedSection] = useState('description');
  const { addItem, openCart } = useCartStore();

  // Scroll to top when product changes
  useEffect(() => {
    window.scrollTo(0, 0);
    setQuantity(1);
    setActiveImage(0);
    setExpandedSection('description');
  }, [id]);

  if (!product) {
    return (
      <div className="pt-32 pb-20 text-center min-h-[60vh] flex flex-col justify-center items-center">
        <h1 className="text-3xl font-serif mb-4">Product not found</h1>
        <Link to="/shop" className="text-primary hover:underline underline-offset-4 tracking-widest uppercase text-sm">
          Return to Shop
        </Link>
      </div>
    );
  }

  const images = [product.image, product.hoverImage || product.image];
  const relatedProducts = products.filter(p => p.id !== id && p.category === product.category).slice(0, 4);
  
  if (relatedProducts.length < 4) {
    const more = products.filter(p => !relatedProducts.find(rp => rp.id === p.id) && p.id !== id);
    relatedProducts.push(...more.slice(0, 4 - relatedProducts.length));
  }

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      variant: 'Gold', // Defaulting to gold as requested
      quantity
    });
    openCart();
  };

  const toggleSection = (section) => {
    if (expandedSection === section) {
      setExpandedSection('');
    } else {
      setExpandedSection(section);
    }
  };

  return (
    <div className="pt-24 pb-20">
      {/* Breadcrumbs */}
      <div className="container mx-auto px-4 md:px-8 mb-8">
        <div className="flex items-center text-xs tracking-widest uppercase text-muted-foreground">
          <Link to="/" className="hover:text-foreground">Home</Link>
          <ChevronRight size={12} className="mx-2" />
          <Link to="/shop" className="hover:text-foreground">Shop</Link>
          <ChevronRight size={12} className="mx-2" />
          <Link to={`/shop?category=${product.category}`} className="hover:text-foreground">{product.category}</Link>
          <ChevronRight size={12} className="mx-2" />
          <span className="text-foreground">{product.name}</span>
        </div>
      </div>

      {/* Main Product Area */}
      <div className="container mx-auto px-4 md:px-8 mb-24">
        <div className="flex flex-col md:flex-row gap-10 lg:gap-16">
          
          {/* Images */}
          <div className="w-full md:w-1/2 flex flex-col md:flex-row-reverse gap-4">
            <div className="flex-1 bg-muted aspect-[4/5] relative">
              <img 
                src={images[activeImage]} 
                alt={product.name} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex md:flex-col gap-4 overflow-x-auto md:overflow-visible">
              {images.map((img, idx) => (
                <button 
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`w-20 md:w-24 flex-shrink-0 aspect-[4/5] border-2 transition-colors ${
                    activeImage === idx ? 'border-primary' : 'border-transparent'
                  }`}
                >
                  <img src={img} alt={`${product.name} view ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="w-full md:w-1/2 md:py-8 lg:pr-12">
            <h1 className="font-serif text-3xl md:text-4xl mb-4 uppercase tracking-wide">{product.name}</h1>
            
            <div className="flex items-center gap-4 mb-6">
              <span className="text-2xl">${product.price}</span>
              <div className="flex items-center gap-1 text-primary">
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <span className="text-sm text-muted-foreground ml-2 tracking-widest">(12)</span>
              </div>
            </div>
            
            <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
              {product.description}
            </p>

            <div className="mb-8 p-4 bg-secondary/50 border border-border">
              <p className="text-sm flex items-center justify-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                In stock and ready to ship
              </p>
            </div>

            <div className="mb-6 border-t border-border pt-8">
              <h3 className="text-sm uppercase tracking-widest font-medium mb-3">Metal Finish</h3>
              <div className="flex gap-4">
                <button className="border border-foreground bg-background px-6 py-2 text-sm tracking-widest uppercase relative min-w-[120px]">
                  18k Gold
                </button>
                <button className="border border-border text-muted-foreground px-6 py-2 text-sm tracking-widest uppercase cursor-not-allowed min-w-[120px]">
                  Silver
                  <span className="absolute -top-2 -right-2 bg-muted text-[10px] px-2 py-0.5 border border-border">Soon</span>
                </button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-12 border-t border-border pt-8">
              <div className="flex items-center border border-border sm:w-32 bg-background">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="flex-1 py-4 flex justify-center hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
                >
                  <Minus size={16} />
                </button>
                <span className="w-12 text-center font-medium">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="flex-1 py-4 flex justify-center hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
                >
                  <Plus size={16} />
                </button>
              </div>
              
              <button 
                onClick={handleAddToCart}
                className="flex-1 bg-foreground text-white hover:bg-primary py-4 tracking-widest uppercase text-sm font-medium transition-colors border border-transparent hover:border-primary"
              >
                Add to Cart - ${(product.price * quantity).toFixed(2)}
              </button>
            </div>

            {/* Accordions */}
            <div className="border-t border-border">
              {/* Description Accordion */}
              <div className="border-b border-border">
                <button 
                  onClick={() => toggleSection('description')}
                  className="w-full py-5 flex items-center justify-between uppercase tracking-widest text-sm font-medium"
                >
                  Details & Features
                  {expandedSection === 'description' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>
                {expandedSection === 'description' && (
                  <div className="pb-6 text-muted-foreground text-sm">
                    <ul className="list-disc pl-5 space-y-2">
                       {product.features?.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                       ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Materials Accordion */}
              <div className="border-b border-border">
                <button 
                  onClick={() => toggleSection('materials')}
                  className="w-full py-5 flex items-center justify-between uppercase tracking-widest text-sm font-medium"
                >
                  Materials & Care
                  {expandedSection === 'materials' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>
                {expandedSection === 'materials' && (
                  <div className="pb-6 text-muted-foreground text-sm space-y-4">
                    <p>
                      <strong>Gold Vermeil:</strong> Not to be confused with regular gold plating, our vermeil is a thick layer of 18k solid gold on sterling silver or jeweler's brass meaning it will last longer.
                    </p>
                    <p>
                      <strong>Care:</strong> To keep your pieces looking their best, avoid wearing them in water, and limit exposure to perfumes and lotions. Store in the provided pouch when not in use.
                    </p>
                  </div>
                )}
              </div>

              {/* Shipping Accordion */}
              <div className="border-b border-border">
                <button 
                  onClick={() => toggleSection('shipping')}
                  className="w-full py-5 flex items-center justify-between uppercase tracking-widest text-sm font-medium"
                >
                  Shipping & Returns
                  {expandedSection === 'shipping' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>
                {expandedSection === 'shipping' && (
                  <div className="pb-6 text-muted-foreground text-sm space-y-4">
                    <p>
                      <strong>Free standard shipping</strong> on all orders. Expedited options available at checkout.
                    </p>
                    <p>
                      We accept returns within 30 days of purchase. Items must be unworn and in their original packaging.
                    </p>
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="bg-muted py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif">You May Also Like</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {relatedProducts.map(prod => (
              <ProductCard key={prod.id} product={prod} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;