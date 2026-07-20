import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProductById, products } from '../data/products';
import { useCart } from '../components/CartContext';
import { Star, ChevronDown, ChevronUp, ArrowRight, Minus, Plus } from 'lucide-react';

const Accordion = ({ title, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-border">
      <button 
        className="w-full py-4 flex justify-between items-center text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-serif uppercase tracking-widest text-sm">{title}</span>
        {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 mb-4' : 'max-h-0 opacity-0'}`}
      >
        <div className="text-muted-foreground text-sm leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
};

const ProductDetail = () => {
  const { id } = useParams();
  const product = getProductById(id);
  const { addToCart } = useCart();
  
  const [quantity, setQuantity] = useState(1);
  const [variant, setVariant] = useState('Gold');
  const [activeImage, setActiveImage] = useState(0);

  // Reset state when product changes
  useEffect(() => {
    setQuantity(1);
    setVariant('Gold');
    setActiveImage(0);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen pt-32 pb-20 flex flex-col items-center justify-center">
        <h1 className="font-serif text-3xl mb-4">Product not found</h1>
        <Link to="/shop" className="text-primary hover:underline uppercase tracking-widest text-sm">Return to Shop</Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity, variant);
  };

  const relatedProducts = products.filter(p => p.id !== id && p.category === product.category).slice(0, 4);
  if (relatedProducts.length < 4) {
      const extra = products.filter(p => !relatedProducts.includes(p) && p.id !== id).slice(0, 4 - relatedProducts.length);
      relatedProducts.push(...extra);
  }

  return (
    <div className="pt-20 pb-20">
      <div className="container mx-auto px-4 md:px-8 py-8 md:py-16">
        
        {/* Breadcrumb */}
        <div className="text-xs uppercase tracking-widest text-muted-foreground mb-8">
            <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link to={`/shop?category=${product.category}`} className="hover:text-foreground transition-colors">{product.category}</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Image Gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-4">
             {/* Thumbnails */}
             <div className="flex md:flex-col gap-4 overflow-x-auto md:overflow-visible">
                {product.images.map((img, idx) => (
                    <button 
                        key={idx}
                        className={`flex-shrink-0 w-20 h-24 bg-muted border transition-colors ${activeImage === idx ? 'border-primary' : 'border-transparent hover:border-border'}`}
                        onClick={() => setActiveImage(idx)}
                    >
                        <img src={img} alt={`${product.name} ${idx + 1}`} className="w-full h-full object-cover" />
                    </button>
                ))}
             </div>
             {/* Main Image */}
             <div className="flex-1 bg-muted aspect-[4/5] relative">
                 <img src={product.images[activeImage]} alt={product.name} className="absolute inset-0 w-full h-full object-cover" />
             </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl uppercase tracking-widest mb-4">{product.name}</h1>
            
            <div className="flex items-center gap-2 mb-6">
                <div className="flex text-primary">
                    {[1,2,3,4,5].map(star => <Star key={star} className="w-4 h-4 fill-current" />)}
                </div>
                <span className="text-sm text-muted-foreground mr-4">(124 Reviews)</span>
                <span className="text-xl md:text-2xl">${product.price}</span>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-8">
                {product.description}
            </p>

            {/* Variants */}
            <div className="mb-8">
                <span className="block text-sm uppercase tracking-widest mb-3">Metal: <span className="text-muted-foreground ml-1">{variant}</span></span>
                <div className="flex gap-3">
                    <button 
                        className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all ${variant === 'Gold' ? 'border-foreground border-[3px]' : 'border-transparent ring-1 ring-border'}`}
                        onClick={() => setVariant('Gold')}
                    >
                        <span className="w-6 h-6 rounded-full bg-[#E5D0A1]" /> {/* Gold hex */}
                    </button>
                    <button 
                        className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all ${variant === 'Silver' ? 'border-foreground border-[3px]' : 'border-transparent ring-1 ring-border'}`}
                        onClick={() => setVariant('Silver')}
                    >
                        <span className="w-6 h-6 rounded-full bg-[#E3E4E5]" /> {/* Silver hex */}
                    </button>
                </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <div className="flex items-center border border-border w-fit sm:w-auto h-14">
                    <button 
                    className="px-4 h-full hover:bg-muted transition-colors"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    >
                    <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-12 text-center text-sm">{quantity}</span>
                    <button 
                    className="px-4 h-full hover:bg-muted transition-colors"
                    onClick={() => setQuantity(quantity + 1)}
                    >
                    <Plus className="w-4 h-4" />
                    </button>
                </div>
                <button 
                    onClick={handleAddToCart}
                    className="flex-1 h-14 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors uppercase tracking-widest text-sm"
                >
                    Add to Cart
                </button>
            </div>

            {/* Accordions */}
            <div className="border-t border-border mt-auto">
                <Accordion title="Description" defaultOpen={true}>
                    <p>Designed in house, our demi-fine pieces are created to bridge the gap between high street and heirloom. The {product.name} is a testament to our commitment to craftsmanship and timeless style.</p>
                </Accordion>
                <Accordion title="Materials & Care">
                    <ul className="list-disc pl-4 space-y-2">
                        <li>18k Gold Vermeil: A thick layer of 18k solid gold on sterling silver</li>
                        <li>Hypoallergenic and Nickel-free</li>
                        <li>To maintain the shine, avoid contact with water, perfumes, and lotions</li>
                        <li>Store in the provided Velmora pouch when not in use</li>
                    </ul>
                </Accordion>
                <Accordion title="Shipping & Returns">
                    <p className="mb-2">Free standard shipping on all worldwide orders. Express options available at checkout.</p>
                    <p>We accept returns within 30 days of receipt. Items must be unworn and in original packaging.</p>
                </Accordion>
            </div>
            
          </div>
        </div>
      </div>

      {/* Related Products */}
      <section className="mt-20 border-t border-border pt-20 container mx-auto px-4 md:px-8">
         <h2 className="font-serif text-3xl mb-10 text-center">You May Also Like</h2>
         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {relatedProducts.map(p => (
                <div key={p.id} className="group text-center">
                    <Link to={`/product/${p.id}`} className="block relative aspect-[4/5] bg-muted mb-4 overflow-hidden">
                        <img src={p.images[0]} alt={p.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    </Link>
                    <h3 className="font-serif text-lg"><Link to={`/product/${p.id}`}>{p.name}</Link></h3>
                    <p className="text-muted-foreground text-sm mt-1">${p.price}</p>
                </div>
            ))}
         </div>
      </section>
    </div>
  );
};

export default ProductDetail;
