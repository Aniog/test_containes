import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { seedProducts } from '@/data/mockData';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/Button';
import { ChevronDown, ChevronUp, Star, ChevronLeft } from 'lucide-react';
import { cn } from '@/lib/utils';

export function ProductDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const product = seedProducts.find(p => p.slug === slug);
  
  const [selectedColor, setSelectedColor] = useState(product?.colors?.[0] || 'Gold');
  const [quantity, setQuantity] = useState(1);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [openAccordion, setOpenAccordion] = useState('description');

  useEffect(() => {
    // Reset state when product changes
    if (product) {
       setSelectedColor(product.colors[0] || 'Gold');
       setQuantity(1);
       setActiveImageIndex(0);
       window.scrollTo(0, 0);
    }
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-6 text-center pt-24">
        <h2 className="font-serif text-3xl mb-4">Product Not Found</h2>
        <p className="text-muted-foreground mb-8">The piece you're looking for might have been archived.</p>
        <Button onClick={() => navigate('/shop')} variant="solid">Return to Shop</Button>
      </div>
    );
  }

  const galleryImages = [product.images.primary, product.images.hover, ...(product.images.gallery || [])].slice(0, 4);
  const relatedProducts = seedProducts.filter(p => p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedColor);
  };

  const accordions = [
    { id: 'description', title: 'Description', content: product.description },
    { id: 'details', title: 'Materials & Care', content: `${product.material}. Avoid contact with water, lotions, and perfumes to preserve the finish.` },
    { id: 'shipping', title: 'Shipping & Returns', content: 'Free worldwide shipping on all orders. 30-day return policy for unworn items in original packaging.' }
  ];

  return (
    <div className="pt-24 pb-24 px-6 max-w-7xl mx-auto">
      {/* Breadcrumb */}
      <div className="flex items-center text-xs font-medium tracking-widest uppercase text-muted-foreground mb-8 cursor-pointer hover:text-foreground transition-colors w-fit" onClick={() => navigate(-1)}>
        <ChevronLeft className="w-4 h-4 mr-1" />
        Back
      </div>

      <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
        
        {/* Gallery */}
        <div className="w-full lg:w-1/2 flex flex-col lg:flex-row-reverse gap-4">
          {/* Main Image */}
          <div className="w-full flex-1 aspect-[4/5] bg-stone-100 relative">
            <img 
              data-strk-img={galleryImages[activeImageIndex]}
              data-strk-img-id={`pdp-main-${product.id}-${activeImageIndex}`}
              data-strk-img-ratio="4x5"
              data-strk-img-width="1000"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={`${product.name} view ${activeImageIndex + 1}`}
              className="w-full h-full object-cover transition-opacity duration-300"
            />
          </div>
          
          {/* Thumbnails */}
          <div className="flex lg:flex-col gap-4 lg:w-24 overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0">
             {galleryImages.map((img, idx) => (
                <button 
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={cn(
                    "flex-none w-20 lg:w-full aspect-[4/5] bg-stone-100 relative overflow-hidden transition-all",
                    activeImageIndex === idx ? "ring-1 ring-offset-2 ring-stone-900 opacity-100" : "opacity-60 hover:opacity-100"
                  )}
                >
                  <img 
                    data-strk-img={img}
                    data-strk-img-id={`pdp-thumb-${product.id}-${idx}`}
                    data-strk-img-ratio="4x5"
                    data-strk-img-width="150"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`Thumbnail ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
             ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="w-full lg:w-1/2 flex flex-col">
          <div className="mb-8">
            <h1 className="font-serif text-3xl md:text-5xl uppercase tracking-wider mb-4 leading-tight">{product.name}</h1>
            <p className="text-2xl font-light mb-6">${product.price}</p>
            
            <div className="flex items-center gap-2 mb-6 text-sm">
              <div className="flex text-accent">
                {[...Array(5)].map((_, i) => (
                   <Star key={i} fill={i < Math.floor(product.rating) ? "currentColor" : "none"} className="w-4 h-4" />
                ))}
              </div>
              <span className="text-muted-foreground">{product.rating} ({product.reviews} reviews)</span>
            </div>

            <p className="text-muted-foreground text-sm uppercase tracking-widest mb-2 font-medium">Material</p>
            <p className="text-foreground mb-8">{product.material}</p>
          </div>

          {/* Selectors */}
          <div className="mb-8 space-y-6">
            <div>
               <div className="flex justify-between items-center mb-3">
                 <p className="text-xs font-medium tracking-widest uppercase">Color</p>
                 <span className="text-xs text-muted-foreground">{selectedColor}</span>
               </div>
               <div className="flex gap-3">
                  {product.colors.map(color => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={cn(
                        "w-full py-3 text-xs uppercase tracking-widest font-medium border transition-colors",
                        selectedColor === color 
                          ? "border-stone-900 bg-stone-900 text-stone-50" 
                          : "border-border text-foreground hover:border-stone-400"
                      )}
                    >
                      {color}
                    </button>
                  ))}
               </div>
            </div>

            <div className="flex gap-4 h-14">
               <div className="flex items-center border border-border w-1/3">
                  <button 
                    className="flex-1 h-full flex items-center justify-center hover:bg-stone-50 transition-colors"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    -
                  </button>
                  <span className="w-12 text-center text-sm">{quantity}</span>
                  <button 
                    className="flex-1 h-full flex items-center justify-center hover:bg-stone-50 transition-colors"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    +
                  </button>
               </div>
               
               <Button 
                 variant="solid" 
                 size="lg" 
                 className="flex-1 text-sm tracking-[0.2em]"
                 onClick={handleAddToCart}
               >
                 Add to Cart
               </Button>
            </div>
            
            <Button variant="outline" className="w-full text-xs font-medium">
               Add to Wishlist
            </Button>
          </div>

          {/* Accordions */}
          <div className="border-t border-border mt-auto pt-4">
             {accordions.map((acc) => (
                <div key={acc.id} className="border-b border-border">
                  <button 
                    className="w-full py-5 flex justify-between items-center hover:opacity-70 transition-opacity text-left"
                    onClick={() => setOpenAccordion(openAccordion === acc.id ? null : acc.id)}
                  >
                    <span className="text-sm font-medium tracking-widest uppercase">{acc.title}</span>
                    {openAccordion === acc.id ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </button>
                  <div 
                    className={cn(
                      "overflow-hidden transition-all duration-300",
                      openAccordion === acc.id ? "max-h-40 pb-6 opacity-100" : "max-h-0 opacity-0"
                    )}
                  >
                    <p className="text-muted-foreground font-light leading-relaxed">{acc.content}</p>
                  </div>
                </div>
             ))}
          </div>
        </div>
      </div>

      {/* Related Products */}
      <section className="mt-32 pt-16 border-t border-border">
        <h2 className="font-serif text-3xl text-center mb-12">You May Also Like</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {relatedProducts.map((p) => (
            <div key={p.id} className="group text-center">
              <Link to={`/product/${p.slug}`} className="block relative aspect-[4/5] bg-stone-100 mb-4 overflow-hidden">
                <img 
                  data-strk-img={p.images.primary}
                  data-strk-img-id={`related-primary-${p.id}`}
                  data-strk-img-ratio="4x5"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={p.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </Link>
              <h3 className="font-serif uppercase tracking-wider text-sm mb-1">
                <Link to={`/product/${p.slug}`} className="hover:text-accent transition-colors">{p.name}</Link>
              </h3>
              <p className="text-sm">${p.price}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
