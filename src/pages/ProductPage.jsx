import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { seedProducts } from '../data/products';
import { Star, ChevronDown, Plus, Minus, ArrowRight } from 'lucide-react';
import { useStore } from '../lib/store';

const ProductPage = () => {
  const { id } = useParams();
  // In a real app we'd fetch by ID. Here we'll just show the first product if not found
  const product = seedProducts.find(p => p.id === parseInt(id)) || seedProducts[0];
  
  const [quantity, setQuantity] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState('gold');
  const [openAccordion, setOpenAccordion] = useState('description');
  
  const { addToCart } = useStore();

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedVariant);
  };

  return (
    <div className="bg-background pt-12 pb-24">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Breadcrumbs */}
        <div className="text-xs tracking-widest uppercase text-muted-foreground mb-8">
          <a href="/" className="hover:text-foreground">Home</a>
          <span className="mx-2">/</span>
          <a href="/shop" className="hover:text-foreground">Shop</a>
          <span className="mx-2">/</span>
          <a href={`/category/${product.category.toLowerCase()}`} className="hover:text-foreground">{product.category}</a>
          <span className="mx-2">/</span>
          <span className="text-foreground">{product.name}</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          
          {/* Left: Images */}
          <div className="w-full lg:w-1/2 flex flex-col-reverse md:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-4 overflow-x-auto md:w-20 lg:w-24 shrink-0">
              {[product.image, product.hoverImage].map((img, i) => (
                <button key={i} className="relative aspect-[3/4] w-20 md:w-full shrink-0 border border-transparent hover:border-border transition-colors">
                  <img src={img} alt={`Thumbnail ${i+1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
            
            {/* Main Image */}
            <div className="w-full aspect-[3/4] bg-secondary/20 relative group overflow-hidden">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Right: Info */}
          <div className="w-full lg:w-1/2 flex flex-col">
            <h1 className="font-serif text-3xl md:text-4xl tracking-wide uppercase mb-4">{product.name}</h1>
            
            <div className="flex items-center gap-4 mb-6">
              <span className="text-xl md:text-2xl">${product.price}</span>
              <div className="flex items-center text-accent">
                {[1,2,3,4,5].map(star => (
                   <Star key={star} size={16} fill="currentColor" />
                ))}
                <span className="text-muted-foreground text-sm ml-2">(124 reviews)</span>
              </div>
            </div>

            <p className="text-foreground/80 leading-relaxed mb-8">
              A stunning piece that brings quiet luxury to your every day. Crafted with meticulous attention to detail, this design layers beautifully or makes a statement on its own.
            </p>

            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm tracking-widest uppercase">Metal</span>
                <span className="text-sm text-muted-foreground">{selectedVariant === 'gold' ? '18K Gold Vermeil' : 'Sterling Silver'}</span>
              </div>
              <div className="flex gap-4">
                <button 
                  onClick={() => setSelectedVariant('gold')}
                  className={`w-12 h-12 rounded-full border-2 transition-all ${selectedVariant === 'gold' ? 'border-primary p-1 bg-clip-content' : 'border-transparent'} bg-[#E5C158]`}
                  aria-label="Gold Variant"
                />
                <button 
                  onClick={() => setSelectedVariant('silver')}
                  className={`w-12 h-12 rounded-full border-2 transition-all ${selectedVariant === 'silver' ? 'border-primary p-1 bg-clip-content' : 'border-transparent'} bg-[#D1D5DB]`}
                  aria-label="Silver Variant"
                />
              </div>
            </div>

            <div className="flex gap-4 mb-8">
              <div className="flex items-center border border-border">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-4 hover:bg-secondary/50 transition-colors">
                  <Minus size={16} />
                </button>
                <span className="w-8 text-center">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="p-4 hover:bg-secondary/50 transition-colors">
                  <Plus size={16} />
                </button>
              </div>
              
              <button 
                onClick={handleAddToCart}
                className="flex-1 bg-primary text-primary-foreground text-sm tracking-widest uppercase hover:bg-primary/90 transition-colors"
              >
                Add to Cart — ${(product.price * quantity).toFixed(2)}
              </button>
            </div>

            {/* Accordions */}
            <div className="border-t border-border mt-8">
              {[
                { id: 'description', title: 'Description', content: 'Crafted ethically from recycled metals. Our vermeil is a thick layer of 18k solid gold on sterling silver, meaning it will last longer than standard plating.' },
                { id: 'materials', title: 'Materials & Care', content: 'To maintain the luster of your 18K gold vermeil piece, remove when showering, exercising, or swimming. Clean gently with a soft cloth.' },
                { id: 'shipping', title: 'Shipping & Returns', content: 'Free standard worldwide shipping. 30-day returns for all unworn items (excluding pierced earrings for hygiene reasons).' }
              ].map(section => (
                <div key={section.id} className="border-b border-border">
                  <button 
                    onClick={() => setOpenAccordion(openAccordion === section.id ? '' : section.id)}
                    className="w-full py-6 flex justify-between items-center bg-transparent group"
                  >
                    <span className="text-sm tracking-widest uppercase font-medium">{section.title}</span>
                    <ChevronDown size={20} className={`transform transition-transform duration-300 ${openAccordion === section.id ? 'rotate-180' : ''}`} />
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${openAccordion === section.id ? 'max-h-40 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <p className="text-sm text-foreground/80 leading-relaxed max-w-xl">
                      {section.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
      
      {/* You may also like - Simplified version for now */}
      <div className="container mx-auto px-4 md:px-8 mt-32">
        <h2 className="font-serif text-2xl md:text-3xl tracking-wide mb-8 text-center">You May Also Like</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {seedProducts.slice(1, 5).map(p => (
            <a href={`/product/${p.id}`} key={p.id} className="group cursor-pointer flex flex-col block">
              <div className="relative aspect-[3/4] overflow-hidden bg-secondary/20 mb-4">
                <img src={p.image} alt={p.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="flex flex-col items-center text-center">
                <h3 className="font-serif text-xs md:text-sm tracking-widest uppercase mb-1">{p.name}</h3>
                <p className="text-sm text-foreground/80">${p.price}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default ProductPage;
