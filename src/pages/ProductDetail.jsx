import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Plus, Minus, ChevronDown, ChevronUp } from 'lucide-react';
import { seedProducts } from '@/data';
import { useCart } from '@/lib/CartContext';

export default function ProductDetail() {
  const { id } = useParams();
  const { addItem } = useCart();
  const [product, setProduct] = useState(null);
  const [activeImage, setActiveImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeVariant, setActiveVariant] = useState('gold');
  const [openAccordion, setOpenAccordion] = useState('description');

  useEffect(() => {
    // In a real app, fetch from API. For now, find in seed data.
    // If no ID is provided, just show the first product for demo purposes
    const foundProduct = id ? seedProducts.find(p => p.id === id) : seedProducts[0];
    
    if (foundProduct) {
      setProduct(foundProduct);
      setQuantity(1);
      window.scrollTo(0, 0);
    }
  }, [id]);

  if (!product) {
    return <div className="min-h-screen pt-32 pb-20 px-4 text-center">Product not found.</div>;
  }

  const images = [product.image, product.hoverImage || product.image];
  const relatedProducts = seedProducts.filter(p => p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    addItem({ ...product, variant: activeVariant }, quantity);
  };

  const toggleAccordion = (section) => {
    setOpenAccordion(openAccordion === section ? null : section);
  };

  return (
    <div className="pt-24 pb-20 md:pt-32">
      {/* Product Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Images Left */}
          <div className="flex flex-col-reverse lg:flex-row gap-4 lg:gap-6">
            <div className="flex lg:flex-col gap-4 overflow-x-auto lg:overflow-visible hide-scrollbar lg:w-24 flex-shrink-0">
              {images.map((img, idx) => (
                <button 
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`relative aspect-[4/5] w-20 lg:w-full flex-shrink-0 overflow-hidden border ${activeImage === idx ? 'border-primary' : 'border-transparent'}`}
                >
                  <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
            <div className="relative aspect-[4/5] flex-1 bg-secondary overflow-hidden">
              <img src={images[activeImage]} alt={product.name} className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Details Right */}
          <div className="flex flex-col justify-start lg:py-8">
            <h1 className="font-serif text-3xl md:text-4xl tracking-widest uppercase mb-4">{product.name}</h1>
            <p className="text-xl mb-6">${product.price}</p>
            
            <div className="flex items-center space-x-2 mb-8">
              <div className="flex text-primary">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill={i < Math.floor(product.rating) ? "currentColor" : "none"} strokeWidth={1.5} />
                ))}
              </div>
              <span className="text-sm text-foreground/60">{product.reviews} reviews</span>
            </div>

            <div className="mb-8 hidden md:block">
              <p className="text-foreground/80 leading-relaxed text-balance">{product.description}</p>
            </div>

            {/* Variants */}
            <div className="mb-8">
              <p className="text-xs tracking-widest uppercase mb-4 font-medium">Color: {activeVariant}</p>
              <div className="flex space-x-3">
                <button 
                  onClick={() => setActiveVariant('gold')}
                  className={`w-10 h-10 rounded-full bg-[#D4AF37] border-2 transition-all ${activeVariant === 'gold' ? 'border-foreground ring-2 ring-background' : 'border-transparent'}`}
                  aria-label="Gold"
                />
                <button 
                  onClick={() => setActiveVariant('silver')}
                  className={`w-10 h-10 rounded-full bg-[#E0E0E0] border-2 transition-all ${activeVariant === 'silver' ? 'border-foreground ring-2 ring-background' : 'border-transparent'}`}
                  aria-label="Silver"
                />
              </div>
            </div>

            {/* Add to Cart Actions */}
            <div className="flex space-x-4 mb-12">
              <div className="flex items-center border border-border w-32 justify-between">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-4 hover:bg-muted transition-colors text-foreground/60 hover:text-foreground"
                >
                  <Minus size={16} />
                </button>
                <span className="text-sm">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-4 hover:bg-muted transition-colors text-foreground/60 hover:text-foreground"
                >
                  <Plus size={16} />
                </button>
              </div>
              <button 
                onClick={handleAddToCart}
                className="flex-1 bg-primary text-primary-foreground text-sm tracking-widest uppercase hover:bg-primary/90 transition-colors font-medium"
              >
                Add to Cart - ${(product.price * quantity).toFixed(2)}
              </button>
            </div>

            {/* Accordions */}
            <div className="border-t border-border -mx-4 sm:mx-0 px-4 sm:px-0">
              {[
                { id: 'description', title: 'Description', content: product.description },
                { id: 'details', title: 'Materials & Care', content: `Material: ${product.material}. To clean, gently wipe the surface with a soft cloth. Keep away from water, humidity, and chemical products.` },
                { id: 'shipping', title: 'Shipping & Returns', content: 'Free worldwide shipping on original orders. Returns are accepted within 30 days of the delivery date.' }
              ].map((section) => (
                <div key={section.id} className="border-b border-border">
                  <button 
                    onClick={() => toggleAccordion(section.id)}
                    className="w-full flex justify-between items-center py-5 text-sm tracking-widest uppercase"
                  >
                    {section.title}
                    {openAccordion === section.id ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${openAccordion === section.id ? 'max-h-96 pb-5' : 'max-h-0'}`}>
                    <p className="text-foreground/70 text-sm leading-relaxed">{section.content}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-32">
        <h2 className="font-serif text-3xl mb-10 text-center">You May Also Like</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {relatedProducts.map((p) => (
            <div key={p.id} className="group relative flex flex-col">
              <Link to={`/product/${p.id}`} className="block relative aspect-[4/5] bg-secondary mb-4 overflow-hidden">
                <img 
                  src={p.image} 
                  alt={p.name} 
                  className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                />
                <img 
                  src={p.hoverImage || p.image} 
                  alt={`${p.name} alternate view`} 
                  className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
              </Link>
              <h3 className="font-serif text-sm tracking-wider uppercase mb-1 text-center">
                <Link to={`/product/${p.id}`}>{p.name}</Link>
              </h3>
              <p className="text-foreground/70 text-center">${p.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
