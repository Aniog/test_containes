import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronDown, ChevronUp, Plus, Minus } from 'lucide-react';
import { getProductById, getProducts } from '../data/products';
import { useCart } from '../context/CartContext';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json'; 

const ProductDetail = () => {
  const { id } = useParams();
  const containerRef = useRef(null);
  const { addToCart } = useCart();
  
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [variant, setVariant] = useState('Gold');
  const [expandedSection, setExpandedSection] = useState('description');
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Simulate API fetch
    const fetchedProduct = getProductById(id);
    setProduct(fetchedProduct);
    
    if (fetchedProduct) {
      // Get related products (same category, excluding this one)
      const related = getProducts()
        .filter(p => p.category === fetchedProduct.category && p.id !== fetchedProduct.id)
        .slice(0, 4);
      
      // If we don't have enough related, just get random ones
      if (related.length < 4) {
        const more = getProducts()
            .filter(p => p.id !== fetchedProduct.id && !related.find(r => r.id === p.id))
            .slice(0, 4 - related.length);
        setRelatedProducts([...related, ...more]);
      } else {
        setRelatedProducts(related);
      }
    }
    
    setLoading(false);
  }, [id]);

  useEffect(() => {
    window.requestAnimationFrame(() => {
      // Small timeout to allow DOM to commit
      setTimeout(() => {
        try {
          if (strkImgConfig && containerRef.current) {
            ImageHelper.loadImages(strkImgConfig, containerRef.current);
          }
        } catch (e) {}
      }, 0);
    });
  }, [loading, product, relatedProducts]);

  const handleAddToCart = () => {
    if (product) {
      addToCart({ ...product, variant }, quantity);
      setQuantity(1); // Reset after adding
    }
  };

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  if (loading) return <div className="min-h-screen pt-32 pb-24 flex justify-center"><div className="w-8 h-8 border-4 border-muted-foreground border-t-velmora-gold rounded-full animate-spin"></div></div>;
  if (!product) return <div className="min-h-screen pt-32 pb-24 text-center">Product not found. <Link to="/shop" className="underline hover:text-velmora-gold ml-2">Return to shop</Link></div>;

  return (
    <div ref={containerRef} className="pt-24 pb-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
        
        {/* Left: Image Gallery */}
        <div className="flex flex-col-reverse md:flex-row gap-4 h-fit sticky top-32">
          {/* Thumbnails */}
          <div className="flex md:flex-col gap-4 overflow-x-auto md:overflow-visible shrink-0 md:w-20 lg:w-24 hide-scrollbar">
            {[1, 2, 3].map((imgNum) => (
              <div key={imgNum} className="w-20 h-24 md:w-full md:h-32 shrink-0 bg-secondary cursor-pointer ring-1 ring-border opacity-70 hover:opacity-100 transition-opacity">
                 <img 
                    data-strk-img-id={product[`pdpThumb${imgNum}`]}
                    data-strk-img={`[pdp-title] detail view ${imgNum} gold jewelry`}
                    data-strk-img-ratio="4x5"
                    data-strk-img-width="200"
                    src={"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"}
                    className="w-full h-full object-cover"
                    alt={`Thumbnail ${imgNum}`}
                    style={{
                      backgroundImage: `url('https://images.unsplash.com/photo-1629813292150-13f518e38dcc?q=80&w=200')`,
                      backgroundSize: 'cover'
                    }}
                  />
              </div>
            ))}
          </div>

          {/* Main Image */}
          <div className="flex-1 bg-secondary aspect-[4/5] relative">
             <img 
                data-strk-img-id={product.pdpMain}
                data-strk-img={`[pdp-title] main view gold jewelry editorial`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="1200"
                src={"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"}
                className="absolute inset-0 w-full h-full object-cover"
                alt={product.name}
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1629813292150-13f518e38dcc?q=80&w=1200')`,
                  backgroundSize: 'cover'
                }}
              />
          </div>
        </div>

        {/* Right: Product Info */}
        <div className="flex flex-col py-4 md:py-8 lg:pr-12">
           <nav className="text-xs text-muted-foreground tracking-widest uppercase mb-6 flex gap-2">
             <Link to="/" className="hover:text-foreground">Home</Link>
             <span>/</span>
             <Link to="/shop" className="hover:text-foreground">Shop</Link>
             <span>/</span>
             <span className="text-foreground">{product.category}</span>
           </nav>

           <h1 id="pdp-title" className="font-serif text-3xl md:text-4xl lg:text-5xl uppercase tracking-widest leading-tight mb-4 text-velmora-ink">
             {product.name}
           </h1>

           <div className="flex items-center gap-4 mb-4">
             <span className="text-xl font-medium text-velmora-charcoal">${product.price}</span>
             <div className="flex text-velmora-gold">
               {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill={i < Math.floor(product.rating) ? "currentColor" : "none"} className={i >= Math.floor(product.rating) && i < Math.ceil(product.rating) ? "opacity-50" : ""} />
               ))}
               <span className="text-sm text-muted-foreground ml-2">({product.rating})</span>
             </div>
           </div>

           <p className="text-muted-foreground font-light leading-relaxed mb-8">
             {product.description}
           </p>

           <div className="mb-8">
             <div className="flex justify-between mb-3 text-sm">
               <span className="tracking-widest uppercase text-xs">Finish</span>
               <span className="text-muted-foreground">{variant}</span>
             </div>
             <div className="flex gap-4">
                <button 
                  onClick={() => setVariant('Gold')}
                  className={`w-10 h-10 rounded-full border-2 ${variant === 'Gold' ? 'border-foreground p-1' : 'border-transparent'}`}
                  aria-label="Gold"
                >
                  <span className="block w-full h-full rounded-full bg-gradient-to-tr from-[#d4af37] to-[#f3e5ab]" />
                </button>
                <button 
                  onClick={() => setVariant('Silver')}
                  className={`w-10 h-10 rounded-full border-2 ${variant === 'Silver' ? 'border-foreground p-1' : 'border-transparent'}`}
                  aria-label="Silver"
                >
                  <span className="block w-full h-full rounded-full bg-gradient-to-tr from-[#c0c0c0] to-[#e0e0e0]" />
                </button>
             </div>
           </div>

           <div className="flex gap-4 mb-10">
              <div className="flex items-center justify-between border border-border w-32 px-4 py-3 shrink-0">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="text-muted-foreground hover:text-foreground"><Minus size={16}/></button>
                  <span className="text-sm">{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)} className="text-muted-foreground hover:text-foreground"><Plus size={16}/></button>
              </div>
              <button 
                onClick={handleAddToCart}
                className="flex-1 bg-foreground text-background tracking-widest text-sm uppercase hover:bg-velmora-gold transition-colors py-3"
              >
                Add to Bag
              </button>
           </div>

           {/* Accordions */}
           <div className="border-t border-border mt-4">
              {[
                { id: 'description', title: 'Details', content: 'Crafted with intention. This piece pairs perfectly with everyday minimalist looks or layered for a more dramatic evening style.' },
                { id: 'materials', title: 'Materials & Care', content: `Material: ${product.material}.\n\nTo preserve the plating, avoid contact with water, perfumes, and lotions. Store in the provided pouch when not in use.` },
                { id: 'shipping', title: 'Shipping & Returns', content: 'Free worldwide shipping on orders over $150. Returns accepted within 30 days of delivery in original unused condition.' },
              ].map(section => (
                 <div key={section.id} className="border-b border-border">
                    <button 
                      onClick={() => toggleSection(section.id)}
                      className="w-full flex justify-between items-center py-5 text-sm tracking-widest uppercase hover:text-velmora-gold transition-colors"
                    >
                      {section.title}
                      {expandedSection === section.id ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </button>
                    <div 
                      className={`overflow-hidden transition-all duration-300 ${expandedSection === section.id ? 'max-h-40 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}
                    >
                       <p className="text-muted-foreground text-sm font-light leading-relaxed whitespace-pre-wrap">{section.content}</p>
                    </div>
                 </div>
              ))}
           </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="max-w-7xl mx-auto px-6 mt-32">
          <h2 className="text-2xl tracking-widest uppercase mb-10 text-center text-velmora-ink">You may also like</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((p) => (
               <Link key={p.id} to={`/product/${p.id}`} className="group flex flex-col">
                  <div className="aspect-[4/5] bg-secondary relative overflow-hidden mb-4">
                    <img 
                      data-strk-img-id={p.relatedImg}
                      data-strk-img={`[related-title-${p.id}] ${p.category} gold jewelry`}
                      data-strk-img-ratio="4x5"
                      data-strk-img-width="400"
                      src={"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      alt={p.name}
                      style={{
                        backgroundImage: `url('https://images.unsplash.com/photo-1629813292150-13f518e38dcc?q=80&w=400')`,
                        backgroundSize: 'cover'
                      }}
                    />
                  </div>
                  <h3 id={`related-title-${p.id}`} className="text-sm font-medium tracking-wide uppercase mb-1 truncate text-velmora-ink">{p.name}</h3>
                  <span className="text-sm text-velmora-charcoal">${p.price}</span>
               </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
