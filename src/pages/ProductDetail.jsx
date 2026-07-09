import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import useCartStore from '../store/useCartStore';
import { ChevronRight, Plus, Minus, Heart } from 'lucide-react';
import ProductCard from '../components/ui/ProductCard';
import * as Accordion from '@radix-ui/react-accordion';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const [selectedVariant, setSelectedVariant] = useState(product?.variants[0]);
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(product?.image1);
  const addItem = useCartStore(state => state.addItem);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-24 text-center">
        <div>
          <h1 className="font-serif text-4xl mb-4">Product Not Found</h1>
          <Link to="/shop" className="text-velmora-gold border-b border-velmora-gold uppercase tracking-widest text-sm">Return to Shop</Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);
  const allImages = [product.image1, product.image2];

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
  };

  return (
    <div className="pt-24 pb-16">
      {/* Breadcrumbs */}
      <div className="container mx-auto px-4 md:px-8 py-4">
        <nav className="flex items-center space-x-2 text-xs uppercase tracking-wider text-velmora-muted font-medium mb-8">
          <Link to="/" className="hover:text-velmora-dark">Home</Link>
          <ChevronRight size={14} />
          <Link to="/shop" className="hover:text-velmora-dark">Shop</Link>
          <ChevronRight size={14} />
          <span className="text-velmora-dark">{product.name}</span>
        </nav>
      </div>

      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-24">
          
          {/* Left: Image Gallery */}
          <div className="md:w-1/2 flex flex-col-reverse md:flex-row gap-4">
            <div className="flex md:flex-col gap-4 overflow-x-auto md:w-24 flex-shrink-0 hide-scrollbar">
              {allImages.map((img, idx) => (
                <button 
                  key={idx}
                  className={`border-2 transition-colors ${activeImage === img ? 'border-velmora-dark' : 'border-transparent hover:border-velmora-border'}`}
                  onClick={() => setActiveImage(img)}
                >
                  <img src={img} alt={`${product.name} view ${idx + 1}`} className="w-full h-auto object-cover aspect-[3/4]" />
                </button>
              ))}
            </div>
            <div className="flex-1 bg-velmora-light aspect-[3/4] relative">
              <img src={activeImage} alt={product.name} className="absolute inset-0 w-full h-full object-cover" />
            </div>
          </div>

          {/* Right: Product Details */}
          <div className="md:w-1/2 flex flex-col justify-center max-w-lg pt-4 md:pt-0">
            <div className="mb-8 border-b border-velmora-border pb-8">
              <h1 className="font-serif text-3xl md:text-5xl uppercase tracking-widest leading-tight mb-4">{product.name}</h1>
              <div className="flex items-center justify-between mb-6">
                <p className="text-2xl">${product.price}</p>
                <div className="flex text-velmora-gold">
                  {[...Array(5)].map((_, i) => <Heart key={i} size={16} fill="currentColor" className="stroke-none" />)}
                  <span className="text-xs text-velmora-muted ml-2 uppercase font-medium">(24 Reviews)</span>
                </div>
              </div>
              <p className="text-velmora-muted leading-relaxed text-sm md:text-base border-l-2 border-velmora-gold pl-4 italic font-serif">
                {product.description}
              </p>
            </div>

            <div className="mb-8">
              <div className="flex justify-between items-center mb-3">
                <p className="text-xs uppercase tracking-widest font-medium text-velmora-muted">Finish: <span className="text-velmora-dark">{selectedVariant}</span></p>
              </div>
              <div className="flex space-x-3">
                {product.variants.map(variant => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-6 py-2 text-xs uppercase tracking-wider font-medium border transition-colors
                      ${selectedVariant === variant 
                        ? 'border-velmora-dark bg-velmora-dark text-velmora-base' 
                        : 'border-velmora-border hover:border-velmora-dark'}`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex space-x-4 mb-10">
              <div className="flex items-center border border-velmora-border">
                <button 
                  className="px-4 py-3 text-velmora-muted hover:text-velmora-dark transition-colors"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  disabled={quantity <= 1}
                >
                  <Minus size={18} />
                </button>
                <span className="px-4 py-3 text-sm font-medium min-w-[3rem] text-center">
                  {quantity}
                </span>
                <button 
                  className="px-4 py-3 text-velmora-muted hover:text-velmora-dark transition-colors"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <Plus size={18} />
                </button>
              </div>
              <button 
                onClick={handleAddToCart}
                className="flex-1 bg-velmora-dark text-velmora-base uppercase tracking-widest text-sm font-medium hover:bg-velmora-gold transition-colors"
              >
                Add to Cart - ${(product.price * quantity).toFixed(2)}
              </button>
            </div>

            <Accordion.Root type="single" collapsible className="border-t border-velmora-border">
              <Accordion.Item value="description" className="border-b border-velmora-border">
                <Accordion.Header>
                  <Accordion.Trigger className="w-full flex items-center justify-between py-5 text-sm uppercase tracking-wider font-medium group">
                    <span>Details & Fit</span>
                    <Plus size={18} className="text-velmora-muted group-data-[state=open]:rotate-45 transition-transform" />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                  <div className="pb-5 text-sm text-velmora-muted leading-relaxed">
                    Designed for everyday wear, this piece is lightweight and comfortable. 
                    Hypoallergenic and free of lead and nickel.
                  </div>
                </Accordion.Content>
              </Accordion.Item>

              <Accordion.Item value="materials" className="border-b border-velmora-border">
                <Accordion.Header>
                  <Accordion.Trigger className="w-full flex items-center justify-between py-5 text-sm uppercase tracking-wider font-medium group">
                    <span>Materials & Care</span>
                    <Plus size={18} className="text-velmora-muted group-data-[state=open]:rotate-45 transition-transform" />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                  <div className="pb-5 text-sm text-velmora-muted leading-relaxed">
                    <p className="mb-2"><strong>Materials:</strong> {product.material}</p>
                    <p><strong>Care:</strong> {product.care}</p>
                  </div>
                </Accordion.Content>
              </Accordion.Item>
              
              <Accordion.Item value="shipping" className="border-b border-velmora-border">
                <Accordion.Header>
                  <Accordion.Trigger className="w-full flex items-center justify-between py-5 text-sm uppercase tracking-wider font-medium group">
                    <span>Shipping & Returns</span>
                    <Plus size={18} className="text-velmora-muted group-data-[state=open]:rotate-45 transition-transform" />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                  <div className="pb-5 text-sm text-velmora-muted leading-relaxed">
                    Free worldwide shipping on all orders. You may return unworn items in their original packaging within 30 days of receipt.
                  </div>
                </Accordion.Content>
              </Accordion.Item>
            </Accordion.Root>
          </div>
        </div>
      </div>

      {relatedProducts.length > 0 && (
        <section className="mt-32 border-t border-velmora-border pt-24 bg-velmora-light">
          <div className="container mx-auto px-4 md:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl tracking-wider uppercase mb-4">Complete the Look</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {relatedProducts.map(rp => (
                <ProductCard key={rp.id} product={rp} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default ProductDetail;