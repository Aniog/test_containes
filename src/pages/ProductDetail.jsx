import { useState, useRef, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Plus, Minus, ChevronDown } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { ProductCard } from '../components/ProductCard';
import { SEED_PRODUCTS } from '../data/products';
import { ImageHelper } from '@strikingly/sdk';

const strkImgConfig = {};

const formatPrice = (price) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price);
};

export const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [activeVariant, setActiveVariant] = useState('gold');
  const [activeAccordion, setActiveAccordion] = useState('description');
  const containerRef = useRef(null);

  // In a real app we'd fetch the product, here we find it in our seed data
  const baseProduct = SEED_PRODUCTS.find(p => p.id === id);
  // Hack to make our extended shop data work if they click a fake product
  const product = baseProduct || SEED_PRODUCTS[0]; 

  useEffect(() => {
    // Reset state on navigate
    setQuantity(1);
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    if (ImageHelper && ImageHelper.loadImages && containerRef.current) {
        return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [id]);

  const relatedProducts = SEED_PRODUCTS.filter(p => p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product, quantity, activeVariant);
  };

  const toggleAccordion = (section) => {
    if (activeAccordion === section) {
      setActiveAccordion(null);
    } else {
      setActiveAccordion(section);
    }
  };

  return (
    <div className="pt-32 pb-24" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 mb-24">
        
        {/* Left: Gallery */}
        <div className="space-y-4">
          <div className="aspect-[4/5] bg-muted relative overflow-hidden">
             <img 
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={product.name}
              className="absolute inset-0 w-full h-full object-cover"
              data-strk-img-id={`pdp-${product.id}-main`}
              data-strk-img={`[pdp-title-${product.id}] main view`}
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
             <div className="aspect-[4/5] bg-muted relative overflow-hidden">
                 <img 
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} detail`}
                    className="absolute inset-0 w-full h-full object-cover"
                    data-strk-img-id={`pdp-${product.id}-detail1`}
                    data-strk-img={`[pdp-title-${product.id}] close up detail`}
                    data-strk-img-ratio="4x5"
                    data-strk-img-width="400"
                  />
             </div>
             <div className="aspect-[4/5] bg-muted relative overflow-hidden">
                  <img 
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} detail`}
                    className="absolute inset-0 w-full h-full object-cover"
                    data-strk-img-id={`pdp-${product.id}-detail2`}
                    data-strk-img={`[pdp-title-${product.id}] styled differently`}
                    data-strk-img-ratio="4x5"
                    data-strk-img-width="400"
                  />
             </div>
          </div>
        </div>

        {/* Right: Info */}
        <div className="flex flex-col md:sticky md:top-32 md:h-[calc(100vh-8rem)] overflow-y-auto hide-scrollbar pb-10">
          {/* Breadcrumbs */}
          <div className="flex items-center text-xs tracking-widest uppercase text-muted-foreground mb-6">
            <Link to="/" className="hover:text-foreground">Home</Link>
            <span className="mx-2">/</span>
            <Link to={`/shop?category=${product.category}`} className="hover:text-foreground">{product.category}</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground truncate max-w-[200px]">{product.name}</span>
          </div>

          <div className="flex items-center mb-4 text-accent">
            {[...Array(5)].map((_, i) => (
              <span key={i} className={i < Math.floor(product.rating) ? 'text-accent' : 'text-muted-foreground'}>★</span>
            ))}
            <span className="text-sm text-foreground ml-2">({product.reviews} reviews)</span>
          </div>

          <h1 id={`pdp-title-${product.id}`} className="font-serif text-3xl lg:text-4xl uppercase tracking-widest mb-4">
            {product.name}
          </h1>
          
          <p className="text-xl mb-8">{formatPrice(product.price)}</p>
          
          <p className="text-foreground/80 leading-relaxed mb-8">
            {product.description}
          </p>

          <hr className="border-border mb-8" />

          {/* Variants */}
          <div className="mb-8">
            <h3 className="font-serif text-sm uppercase tracking-widest mb-4">Select Finish</h3>
            <div className="flex gap-4">
              <button 
                onClick={() => setActiveVariant('gold')}
                className={`flex-1 py-3 px-4 border text-sm uppercase tracking-widest transition-colors ${
                  activeVariant === 'gold' 
                  ? 'border-foreground bg-foreground text-background' 
                  : 'border-border hover:border-foreground/50'
                }`}
              >
                18K Gold
              </button>
              <button 
                onClick={() => setActiveVariant('silver')}
                className={`flex-1 py-3 px-4 border text-sm uppercase tracking-widest transition-colors ${
                  activeVariant === 'silver' 
                  ? 'border-foreground bg-foreground text-background' 
                  : 'border-border hover:border-foreground/50'
                }`}
              >
                Sterling Silver
              </button>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-4 mb-12">
            <div className="flex items-center border border-foreground w-max flex-shrink-0">
              <button 
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="p-4 hover:bg-muted transition-colors"
                disabled={quantity <= 1}
              >
                <Minus size={14} />
              </button>
              <span className="w-8 text-center text-sm font-medium">{quantity}</span>
              <button 
                onClick={() => setQuantity(quantity + 1)}
                className="p-4 hover:bg-muted transition-colors"
              >
                <Plus size={14} />
              </button>
            </div>
            
            <button 
              onClick={handleAddToCart}
              className="flex-1 bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-4 tracking-widest uppercase text-sm transition-colors"
            >
              Add to Cart - {formatPrice(product.price * quantity)}
            </button>
          </div>

          {/* Accordions */}
          <div className="border-t border-border">
            {[
              {
                id: 'description',
                title: 'Description',
                content: product.description
              },
              {
                id: 'details',
                title: 'Materials & Care',
                content: `Crafted with a thick layer of ${activeVariant === 'gold' ? '18k gold' : 'rhodium'} over a solid brass core. Hypoallergenic and nickel-free. To preserve the finish, avoid contact with perfumes, lotions, and water. Store in the provided pouch when not in use.`
              },
              {
                id: 'shipping',
                title: 'Shipping & Returns',
                content: 'Free standard shipping on all orders. Returns are accepted within 30 days of delivery. Items must be unworn and in original packaging.'
              }
            ].map(section => (
              <div key={section.id} className="border-b border-border">
                <button 
                  onClick={() => toggleAccordion(section.id)}
                  className="w-full flex justify-between items-center py-5 hover:text-accent transition-colors"
                >
                  <span className="font-serif uppercase tracking-widest text-sm">{section.title}</span>
                  <ChevronDown size={16} className={`transform transition-transform duration-300 ${activeAccordion === section.id ? 'rotate-180' : ''}`} />
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ${
                    activeAccordion === section.id ? 'max-h-48 opacity-100 pb-5' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-sm text-foreground/80 leading-relaxed max-w-[90%]">
                    {section.content}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex items-center justify-center gap-4 text-xs tracking-widest uppercase text-muted-foreground">
             <span><span className="text-foreground">●</span> Secure Checkout</span>
             <span><span className="text-foreground">●</span> Fast Shipping</span>
          </div>
        </div>
      </div>

      {/* Suggested Products */}
      <div className="max-w-7xl mx-auto px-6 border-t border-border pt-24">
        <h2 className="font-serif text-3xl mb-12 text-center">You May Also Like</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {relatedProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;