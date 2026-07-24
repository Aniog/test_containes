import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Star, Minus, Plus, ChevronRight, ChevronDown } from 'lucide-react';
import { seedProducts } from '../data/products';
import { useCart } from '../context/CartContext';
import { toast } from 'sonner';

import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const containerRef = React.useRef(null);
  
  React.useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [id]);
  
  const product = seedProducts.find(p => p.id === id);
  
  const [quantity, setQuantity] = useState(1);
  const [variant, setVariant] = useState('Gold');
  const [activeImage, setActiveImage] = useState(0);
  const [openAccordion, setOpenAccordion] = useState('description');

  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
    // Reset state if product changes
    setQuantity(1);
    setVariant('Gold');
    setActiveImage(0);
  }, [id]);

  if (!product) {
    return (
      <div className="pt-32 pb-20 text-center min-h-[60vh] flex flex-col justify-center items-center">
        <h1 className="font-serif text-3xl mb-4">Product Not Found</h1>
        <button onClick={() => navigate('/collections/all')} className="text-primary hover:underline">
          Return to Shop
        </button>
      </div>
    );
  }

  const images = [product.image, product.imageHover].filter(Boolean);
  const relatedProducts = seedProducts.filter(p => p.id !== id).slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product, quantity, variant);
    toast.success(`${quantity}x ${product.name} added to cart`);
  };

  const toggleAccordion = (name) => {
    setOpenAccordion(openAccordion === name ? null : name);
  };

  return (
    <div className="pt-20" ref={containerRef}>
      {/* Breadcrumbs */}
      <div className="bg-background py-4 border-b border-border/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center text-xs font-sans tracking-widest uppercase text-muted-foreground gap-2">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link to={`/collections/${product.category.toLowerCase()}`} className="hover:text-primary transition-colors">{product.category}</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-foreground">{product.name}</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-20">
          
          {/* Image Gallery */}
          <div className="w-full md:w-1/2 flex flex-col-reverse md:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-4 overflow-x-auto md:overflow-visible w-full md:w-20 lg:w-24 flex-shrink-0 hide-scrollbar pt-1 md:pt-0">
              {images.map((img, idx) => (
                <button 
                  key={idx} 
                  onClick={() => setActiveImage(idx)}
                  className={`relative aspect-[3/4] w-20 md:w-full flex-shrink-0 border transition-all duration-300 ${activeImage === idx ? 'border-primary opacity-100' : 'border-transparent opacity-60 hover:opacity-100'}`}
                >
                  <img src={img} alt={`${product.name} view ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
            
            {/* Main Image */}
            <div className="flex-1 aspect-[3/4] bg-muted relative overflow-hidden">
               <img 
                src={images[activeImage]} 
                alt={product.name} 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="w-full md:w-1/2 md:py-4 flex flex-col">
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium tracking-wide mb-2 uppercase">{product.name}</h1>
            
            <div className="flex items-center gap-4 mb-6">
              <span className="text-xl md:text-2xl">${product.price}</span>
              <div className="flex items-center text-primary">
                {[1, 2, 3, 4, 5].map(star => (
                   <Star 
                    key={star} 
                    className={`w-4 h-4 ${star <= Math.floor(product.rating) ? 'fill-current' : ''}`} 
                  />
                ))}
                <span className="text-muted-foreground text-sm ml-2 font-sans tracking-wide">({product.reviews} reviews)</span>
              </div>
            </div>

            <p className="text-muted-foreground text-base md:text-lg font-light leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variants */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-3">
                <span className="font-sans text-xs tracking-widest uppercase text-foreground/70">Finish</span>
                <span className="font-serif text-sm italic">{variant}</span>
              </div>
              <div className="flex gap-4">
                {['Gold', 'Silver'].map(v => (
                  <button
                    key={v}
                    onClick={() => setVariant(v)}
                    className={`w-1/2 py-3 text-sm font-sans tracking-widest uppercase border transition-colors ${
                      variant === v 
                        ? 'border-primary bg-primary/5 text-primary' 
                        : 'border-border text-foreground hover:border-foreground'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="flex gap-4 mb-12">
              <div className="flex items-center border border-border px-4 py-2 w-32 justify-between">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-2 hover:text-primary transition-colors">
                  <Minus className="w-4 h-4" />
                </button>
                <span className="font-medium text-lg">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="p-2 hover:text-primary transition-colors">
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <button 
                onClick={handleAddToCart}
                className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground font-sans text-sm tracking-widest uppercase transition-colors"
              >
                Add to Cart
              </button>
            </div>

            {/* Accordions */}
            <div className="border-t border-border mt-auto">
              {[
                { id: 'description', title: 'Details', content: product.description },
                { id: 'materials', title: 'Materials & Care', content: product.materials },
                { id: 'shipping', title: 'Shipping & Returns', content: 'Free standard worldwide shipping on all orders over $150. Returns accepted within 30 days of delivery.' }
              ].map((section) => (
                <div key={section.id} className="border-b border-border">
                  <button 
                    onClick={() => toggleAccordion(section.id)}
                    className="w-full flex justify-between items-center py-5 hover:text-primary transition-colors"
                  >
                    <span className="font-sans text-xs tracking-widest uppercase">{section.title}</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${openAccordion === section.id ? 'rotate-180' : ''}`} />
                  </button>
                  <div 
                    className={`overflow-hidden transition-all duration-300 ${openAccordion === section.id ? 'max-h-40 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}
                  >
                    <p className="text-muted-foreground font-light leading-relaxed">{section.content}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="bg-[#F9F8F6] py-24 mt-12">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="font-serif text-3xl font-medium mb-10 text-center">You May Also Like</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map(related => (
               <Link key={related.id} to={`/products/${related.id}`} className="group block">
                <div className="relative aspect-[3/4] mb-4 bg-muted overflow-hidden">
                  <img 
                    src={related.image} 
                    alt={related.name}
                    className="w-full h-full object-cover absolute inset-0 transition-opacity duration-500 group-hover:opacity-0"
                  />
                  <img 
                    src={related.imageHover || related.image} 
                    alt={`${related.name} worn`}
                    className="w-full h-full object-cover absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 scale-105 group-hover:scale-100"
                  />
                </div>
                <div className="text-center px-2">
                  <h3 className="font-serif text-base uppercase tracking-widest mb-1 truncate">{related.name}</h3>
                  <p className="text-muted-foreground">${related.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
