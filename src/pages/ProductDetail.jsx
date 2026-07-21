import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCartStore } from '../store/cartStore';
import { seedProducts } from '../data/products';
import { ImageHelper } from '@strikingly/sdk';
import { ChevronRight, Star, Minus, Plus } from 'lucide-react';

const strkImgConfig = {};

export default function ProductDetail() {
  const { id } = useParams();
  const addItem = useCartStore(state => state.addItem);
  const openCart = useCartStore(state => state.openCart);
  const containerRef = useRef(null);
  
  const product = seedProducts.find(p => p.id === id) || seedProducts[0];
  const [selectedVariant, setSelectedVariant] = useState(product.material);
  const [quantity, setQuantity] = useState(1);
  const [activeAccordion, setActiveAccordion] = useState('description');

  useEffect(() => {
    // Only load if SDK is available
    if (ImageHelper && typeof ImageHelper.loadImages === 'function') {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [product.id]);

  // Reset quantity on product change
  useEffect(() => {
    setQuantity(1);
    window.scrollTo(0,0);
  }, [product.id]);

  const handleAddToCart = () => {
    addItem({
      ...product,
      variant: selectedVariant,
      quantity
    });
    openCart();
  };

  const relatedProducts = seedProducts.filter(p => p.id !== product.id).slice(0, 4);

  return (
    <div ref={containerRef} className="pb-24">
      {/* Breadcrumbs */}
      <div className="container mx-auto px-4 py-6">
        <nav className="flex text-xs uppercase tracking-widest text-muted-foreground whitespace-nowrap overflow-x-auto">
          <Link to="/" className="hover:text-foreground">Home</Link>
          <ChevronRight size={14} className="mx-2" />
          <Link to={`/shop?category=${product.category.toLowerCase()}`} className="hover:text-foreground">{product.category}</Link>
          <ChevronRight size={14} className="mx-2" />
          <span className="text-foreground truncate">{product.name}</span>
        </nav>
      </div>

      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 mb-24">
          
          {/* Left: Gallery */}
          <div className="w-full lg:w-1/2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {product.images.map((img, idx) => (
                <div key={img.id} className={`aspect-[4/5] bg-muted relative overflow-hidden ${idx === 0 ? 'md:col-span-2' : ''}`}>
                  <img
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
                    alt={`${product.name} view ${idx + 1}`}
                    data-strk-img-id={img.id + '-detail'}
                    data-strk-img={img.query + ' high resolution details'}
                    data-strk-img-ratio="4x5"
                    data-strk-img-width={idx === 0 ? "1200" : "800"}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="w-full lg:w-1/2 max-w-md lg:py-10">
            <h1 id="product-title" className="text-3xl md:text-4xl font-serif uppercase tracking-widest mb-4">
              {product.name}
            </h1>
            
            <div className="flex justify-between items-center mb-6">
              <span className="text-xl text-muted-foreground">${product.price}</span>
              <div className="flex items-center gap-1 text-primary">
                {[1,2,3,4,5].map(s => <Star key={s} size={16} fill="currentColor" />)}
                <span className="text-foreground text-sm ml-2 font-medium">128 Reviews</span>
              </div>
            </div>

            <p id="product-desc" className="text-muted-foreground font-light leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Material Selector */}
            <div className="mb-8">
              <label className="block text-xs uppercase tracking-widest mb-3">
                Material: <span className="text-muted-foreground ml-1">{selectedVariant}</span>
              </label>
              <div className="flex gap-3">
                <button 
                  onClick={() => setSelectedVariant('18K Gold Plated')}
                  className={`w-12 h-12 rounded-full border-2 transition-all p-1 ${selectedVariant === '18K Gold Plated' ? 'border-foreground' : 'border-transparent hover:border-border'}`}
                  title="18K Gold Plated"
                >
                  <div className="w-full h-full rounded-full bg-[#E5D2A8]"></div>
                </button>
                <button 
                  onClick={() => setSelectedVariant('Sterling Silver')}
                  className={`w-12 h-12 rounded-full border-2 transition-all p-1 ${selectedVariant === 'Sterling Silver' ? 'border-foreground' : 'border-transparent hover:border-border'}`}
                  title="Sterling Silver"
                >
                  <div className="w-full h-full rounded-full bg-[#D8D8D8]"></div>
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-4 mb-12">
              <div className="flex items-center border border-border w-32 justify-between">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-4 hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
                >
                  <Minus size={16} />
                </button>
                <span className="font-medium text-sm">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-4 hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
                >
                  <Plus size={16} />
                </button>
              </div>
              <button 
                onClick={handleAddToCart}
                className="flex-1 bg-primary text-primary-foreground font-sans uppercase tracking-widest text-sm hover:bg-primary/90 transition-colors"
              >
                Add to Cart — ${(product.price * quantity).toFixed(2)}
              </button>
            </div>

            {/* Accordions */}
            <div className="border-t border-border">
              {[
                { id: 'description', title: 'Description', content: product.description },
                { id: 'materials', title: 'Materials & Care', content: 'Crafted from a thick layer of 18k gold over sterling silver. To maintain the pieces brilliance, avoid wearing while swimming, bathing, or applying cosmetics. Store in the provided Velmora pouch.' },
                { id: 'shipping', title: 'Shipping & Returns', content: 'Free worldwide shipping on all orders. We offer a 30-day return policy for unworn items in their original packaging.' }
              ].map((acc) => (
                <div key={acc.id} className="border-b border-border">
                  <button 
                    onClick={() => setActiveAccordion(activeAccordion === acc.id ? '' : acc.id)}
                    className="w-full py-5 flex justify-between items-center text-left text-sm uppercase tracking-widest opacity-80 hover:opacity-100 transition-opacity"
                  >
                    {acc.title}
                    <span className="text-xl leading-none">{activeAccordion === acc.id ? '-' : '+'}</span>
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${activeAccordion === acc.id ? 'max-h-40 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <p className="text-muted-foreground font-light text-sm leading-relaxed">{acc.content}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* You May Also Like */}
        <div>
          <h2 className="text-2xl font-serif mb-10 border-b border-border pb-4">You May Also Like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {relatedProducts.map((p) => (
              <Link key={p.id} to={`/product/${p.id}`} className="group block relative">
                <div className="aspect-[3/4] overflow-hidden bg-muted mb-4 relative">
                  <img
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                    alt={p.name}
                    data-strk-img-id={`related-${p.id}`}
                    data-strk-img={p.images[0].query}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="400"
                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105 absolute inset-0"
                  />
                </div>
                <div>
                  <h3 id={`related-${p.id}-title`} className="text-sm font-serif uppercase tracking-wider mb-1 group-hover:text-primary transition-colors">
                    {p.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">${p.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}