import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Minus, Plus, ChevronDown, ChevronUp, Star } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../contexts/CartContext';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';

export default function ProductPDP() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const containerRef = useRef(null);
  
  const product = products.find(p => p.id === id) || products[0];
  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

  const [activeImage, setActiveImage] = useState(product.image);
  const [quantity, setQuantity] = useState(1);
  const [variant, setVariant] = useState('gold');
  const [openAccordion, setOpenAccordion] = useState('description');

  useEffect(() => {
    window.scrollTo(0, 0);
    setActiveImage("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E");
    setQuantity(1);
  }, [product.id]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [product.id]);

  const handleAddToCart = () => {
    addToCart(product, quantity, variant);
  };

  const images = [
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E", 
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
  ];

  const accordions = [
    {
      id: 'description',
      title: 'Description',
      content: product.description
    },
    {
      id: 'materials',
      title: 'Materials & Care',
      content: 'Crafted with a thick layer of 18K gold over a durable brass core. Hypoallergenic and nickel-free. To maintain its shine, avoid contact with water, perfumes, and lotions. Store in the provided pouch when not in use.'
    },
    {
      id: 'shipping',
      title: 'Shipping & Returns',
      content: 'Free worldwide shipping on orders over $100. We offer a 30-day return policy for unworn items in their original packaging.'
    }
  ];

  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full" ref={containerRef}>
      {/* Breadcrumbs */}
      <div className="text-xs uppercase tracking-widest font-medium text-muted-foreground mb-8">
        <Link to="/" className="hover:text-accent transition-colors">Home</Link>
        <span className="mx-2">/</span>
        <Link to={`/collections?category=${product.category}`} className="hover:text-accent transition-colors">{product.category}</Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">{product.name}</span>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 mb-24">
        {/* Gallery */}
        <div className="w-full lg:w-1/2 flex flex-col md:flex-row-reverse gap-4">
          <div className="w-full aspect-[4/5] bg-muted overflow-hidden">
            <img 
              data-strk-img-id={`pdp-active-img-${activeImage === images[0] ? '0' : '1'}`}
              data-strk-img={`[pdp-product-name] detail view`}
              data-strk-img-ratio="4x5"
              data-strk-img-width="1200"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={product.name} 
              className="w-full h-full object-cover" 
            />
          </div>
          <div className="flex md:flex-col gap-4 overflow-x-auto md:overflow-visible">
            {images.map((img, idx) => (
              <button 
                key={idx} 
                onClick={() => setActiveImage(img)}
                className={`w-20 md:w-24 aspect-[4/5] flex-shrink-0 border-2 transition-colors ${activeImage === img ? 'border-foreground' : 'border-transparent hover:border-border'}`}
              >
                <img 
                  data-strk-img-id={`pdp-thumb-${idx}`}
                  data-strk-img={`[pdp-product-name] thumbnail ${idx}`}
                  data-strk-img-ratio="4x5"
                  data-strk-img-width="200"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={`Thumbnail ${idx + 1}`} 
                  className="w-full h-full object-cover" 
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="w-full lg:w-1/2 flex flex-col lg:py-6">
          <h1 id="pdp-product-name" className="text-3xl md:text-4xl font-serif tracking-widest uppercase mb-4">{product.name}</h1>
          
          <div className="flex items-center gap-4 mb-6 text-sm">
            <div className="flex gap-1 text-accent">
              {[1,2,3,4,5].map(star => <Star key={star} size={14} fill="currentColor" />)}
            </div>
            <span className="text-muted-foreground underline cursor-pointer hover:text-foreground">24 Reviews</span>
          </div>

          <p className="text-2xl mb-8">${product.price}</p>
          <p className="font-serif italic text-muted-foreground mb-8 text-lg">{product.description}</p>
          
          {/* Variants */}
          <div className="mb-8">
            <p className="text-xs uppercase tracking-widest font-medium mb-4">Color: {variant}</p>
            <div className="flex gap-3">
              <button 
                onClick={() => setVariant('gold')}
                className={`w-10 h-10 rounded-full border-2 focus:outline-none ${variant === 'gold' ? 'border-foreground p-0.5' : 'border-transparent'}`}
                aria-label="Gold variant"
              >
                <div className="w-full h-full rounded-full bg-[#D4AF37]"></div>
              </button>
              <button 
                onClick={() => setVariant('silver')}
                className={`w-10 h-10 rounded-full border-2 focus:outline-none ${variant === 'silver' ? 'border-foreground p-0.5' : 'border-transparent'}`}
                aria-label="Silver variant"
              >
                <div className="w-full h-full rounded-full bg-[#E0E0E0]"></div>
              </button>
            </div>
          </div>

          {/* Add to Cart */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <div className="flex items-center border border-border sm:w-1/3">
              <button 
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-12 h-12 flex items-center justify-center text-muted-foreground hover:bg-muted"
                aria-label="Decrease quantity"
              >
                <Minus size={16} />
              </button>
              <span className="flex-1 text-center font-medium">{quantity}</span>
              <button 
                onClick={() => setQuantity(quantity + 1)}
                className="w-12 h-12 flex items-center justify-center text-muted-foreground hover:bg-muted"
                aria-label="Increase quantity"
              >
                <Plus size={16} />
              </button>
            </div>
            <button 
              onClick={handleAddToCart}
              className="bg-primary text-primary-foreground hover:bg-primary/90 flex-1 py-4 text-sm tracking-widest uppercase font-medium transition-colors"
            >
              Add to Cart
            </button>
          </div>

          {/* Accordions */}
          <div className="border-t border-border mt-auto">
            {accordions.map((acc) => (
              <div key={acc.id} className="border-b border-border">
                <button 
                  onClick={() => setOpenAccordion(openAccordion === acc.id ? null : acc.id)}
                  className="w-full py-5 flex justify-between items-center text-left"
                >
                  <span className="text-sm font-medium tracking-widest uppercase">{acc.title}</span>
                  {openAccordion === acc.id ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </button>
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openAccordion === acc.id ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {acc.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="border-t border-border pt-16">
          <h2 className="text-2xl font-serif mb-10 text-center">You May Also Like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {relatedProducts.map(prod => (
              <div key={prod.id} className="group flex flex-col cursor-pointer">
                <Link to={`/product/${prod.id}`} className="relative aspect-[4/5] overflow-hidden bg-muted mb-4 block">
                  <img 
                    data-strk-img-id={`related-${prod.id}-img1`}
                    data-strk-img={`[related-${prod.id}-name]`}
                    data-strk-img-ratio="4x5"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={prod.name} 
                    className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0" 
                  />
                  <img 
                    data-strk-img-id={`related-${prod.id}-img2`}
                    data-strk-img={`[related-${prod.id}-name] details`}
                    data-strk-img-ratio="4x5"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${prod.name} worn`} 
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 opacity-0 group-hover:opacity-100" 
                  />
                  <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
                    <button 
                      onClick={(e) => { e.preventDefault(); addToCart(prod); }}
                      className="w-full bg-foreground text-background py-3 text-xs uppercase tracking-widest font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
                    >
                      Quick Add
                    </button>
                  </div>
                </Link>
                <Link id={`related-${prod.id}-name`} to={`/product/${prod.id}`} className="text-xs tracking-widest uppercase font-medium mb-1 hover:text-accent transition-colors">
                  {prod.name}
                </Link>
                <p className="text-sm font-serif italic text-muted-foreground mb-2">{prod.material}</p>
                <p className="text-sm">${prod.price}</p>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}