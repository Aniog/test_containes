import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown } from 'lucide-react';
import { seedProducts } from '../lib/data';
import { useCart } from '../lib/CartContext';
import { ImageHelper } from '@strikingly/sdk';

export default function ProductDetail() {
  const { id } = useParams();
  const product = seedProducts.find(p => p.id === id) || seedProducts[0]; // fallback to first if not found for demo
  
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const [quantity, setQuantity] = useState(1);
  const [activeAccordion, setActiveAccordion] = useState('description');
  const { addItem } = useCart();
  const containerRef = useRef(null);

  const relatedProducts = seedProducts.filter(p => p.id !== product.id).slice(0, 4);

  useEffect(() => {
    // Reset state on navigation
    setSelectedVariant(product.variants[0]);
    setQuantity(1);
    window.scrollTo(0,0);
  }, [product.id, product.variants]);

  useEffect(() => {
    if (typeof ImageHelper !== 'undefined' && ImageHelper.loadImages) {
        try {
            ImageHelper.loadImages({}, containerRef.current);
        } catch(e) {}
    }
  }, [product.id]);

  const handleAddToCart = () => {
    addItem({ ...product, variant: selectedVariant, quantity });
  };

  const toggleAccordion = (section) => {
    setActiveAccordion(activeAccordion === section ? null : section);
  };

  return (
    <div ref={containerRef} className="pt-24 pb-24">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="text-xs uppercase tracking-widest text-muted-foreground mb-8 flex gap-2">
          <Link to="/" className="hover:text-foreground">Home</Link>
          <span>/</span>
          <Link to={`/shop?category=${product.category.toLowerCase()}`} className="hover:text-foreground">{product.category}</Link>
          <span>/</span>
          <span className="text-foreground">{product.name}</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          {/* Images */}
          <div className="w-full lg:w-1/2 flex gap-4">
            {/* Thumbnails (desktop only for simplicity in demo) */}
            <div className="hidden md:flex flex-col gap-4 w-20 shrink-0">
              {[1, 2, 3].map((i) => (
                <div key={i} className="aspect-[4/5] bg-secondary border border-border cursor-pointer relative">
                    <img 
                      src={product.imgUrl} 
                      alt={`${product.name} view ${i}`}
                      className="w-full h-full object-cover"
                      data-strk-img-id={product.imgId ? `${product.imgId}-${i}` : `prod-thumb-default-${i}`}
                      data-strk-img={`[pd-title] view ${i}`}
                      data-strk-img-ratio="4x5"
                      data-strk-img-width="200"
                    />
                </div>
              ))}
            </div>
            {/* Main Image */}
            <div className="flex-1 aspect-[4/5] bg-secondary relative">
                <img 
                    src={product.imgUrl} 
                    alt={product.name}
                    className="w-full h-full object-cover"
                    data-strk-img-id={product.imgId || "pd-main-default"}
                    data-strk-img="[pd-title] [pd-desc]"
                    data-strk-img-ratio="4x5"
                    data-strk-img-width="1000"
                />
            </div>
          </div>

          {/* Product Info */}
          <div className="w-full lg:w-1/2 flex flex-col pt-4">
            <h1 id="pd-title" className="text-3xl md:text-5xl font-serif tracking-widest uppercase mb-4">{product.name}</h1>
            <div className="text-xl mb-6">${product.price}</div>
            
            <div className="flex items-center gap-1 mb-8">
              <div className="flex text-accent">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <span className="text-sm text-muted-foreground ml-2">(128 Reviews)</span>
            </div>

            <p id="pd-desc" className="text-foreground/80 leading-relaxed mb-8">
              {product.description}
            </p>

            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm uppercase tracking-widest font-medium">Metal Finish</span>
                <span className="text-sm text-muted-foreground">{selectedVariant}</span>
              </div>
              <div className="flex gap-4">
                {product.variants.map((v) => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`px-6 py-3 text-sm uppercase tracking-widest border transition-colors ${
                      selectedVariant === v 
                        ? 'border-foreground bg-foreground text-background' 
                        : 'border-border bg-background text-foreground hover:border-foreground/50'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex gap-4 mb-12 h-14">
              <div className="flex items-center border border-border w-1/3">
                <button 
                  className="flex-1 h-full flex items-center justify-center hover:bg-muted transition-colors"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-4 font-medium">{quantity}</span>
                <button 
                  className="flex-1 h-full flex items-center justify-center hover:bg-muted transition-colors"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              
              <button 
                onClick={handleAddToCart}
                className="flex-1 bg-primary text-primary-foreground font-medium uppercase tracking-widest hover:bg-primary/90 transition-colors"
              >
                Add to Cart - ${(product.price * quantity).toFixed(2)}
              </button>
            </div>

            {/* Accordions */}
            <div className="border-t border-border mt-auto">
              {[
                { id: 'description', title: 'Details', content: product.description },
                { id: 'materials', title: 'Materials & Care', content: `Material: ${product.material}\n\n${product.care}` },
                { id: 'shipping', title: 'Shipping & Returns', content: 'Free worldwide shipping on all orders. We accept returns in original condition within 30 days of receiving your order.' }
              ].map((section) => (
                <div key={section.id} className="border-b border-border">
                  <button 
                    onClick={() => toggleAccordion(section.id)}
                    className="w-full flex justify-between items-center py-6 text-left hover:text-accent transition-colors"
                  >
                    <span className="font-serif text-lg tracking-widest uppercase">{section.title}</span>
                    <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${activeAccordion === section.id ? 'rotate-180' : ''}`} />
                  </button>
                  <div 
                    className={`overflow-hidden transition-all duration-300 ${activeAccordion === section.id ? 'max-h-96 pb-6' : 'max-h-0'}`}
                  >
                    <p className="text-muted-foreground leading-relaxed whitespace-pre-wrap">{section.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <section className="mt-32 pt-24 border-t border-border bg-background">
        <div className="container mx-auto px-4">
          <h2 id="related-title" className="text-3xl font-serif text-center mb-12">You May Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 ml:grid-cols-4 gap-8">
            {relatedProducts.map((rel) => (
              <div key={rel.id} className="group relative text-center">
                <Link to={`/product/${rel.id}`} className="block relative aspect-[4/5] bg-secondary overflow-hidden mb-4">
                  <img 
                    src={rel.imgUrl} 
                    alt={rel.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    data-strk-img-id={rel.imgId || "rel-product-default"}
                    data-strk-img={`[related-title] [rel-title-${rel.id}]`}
                    data-strk-img-ratio="4x5"
                    data-strk-img-width="400"
                  />
                </Link>
                <h3 id={`rel-title-${rel.id}`} className="font-serif text-sm tracking-widest uppercase mb-1">{rel.name}</h3>
                <p className="text-muted-foreground">${rel.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}