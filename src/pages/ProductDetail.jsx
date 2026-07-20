import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Plus, Minus, ChevronRight } from 'lucide-react';
import useCartStore from '@/store/useCartStore';
import Accordion from '@/components/ui/Accordion';
import ProductCard from '@/components/ui/ProductCard';
import { products } from '@/data';

const ProductDetail = () => {
  const { id } = useParams();
  const { addItem } = useCartStore();
  const containerRef = useRef(null);
  
  // Find product or use default
  const product = products.find(p => p.id === id) || products[0];
  
  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    // Reset state when product changes
    setQuantity(1);
    setActiveImage(0);
  }, [id]);

  useEffect(() => {
    if (window.ImageHelper && containerRef.current) {
      import('@/strk-img-config.json').then(config => {
        window.ImageHelper.loadImages(config.default || config, containerRef.current);
      }).catch(() => {});
    }
  }, [id]);

  const handleAddToCart = () => {
    addItem({ ...product, variant: selectedVariant, quantity });
  };

  const images = [
    `https://images.unsplash.com/photo-1599643478524-fb66f70a00ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80`,
    `https://images.unsplash.com/photo-1611085583191-a3b181a88401?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80`,
    `https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80`
  ];

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

  return (
    <div ref={containerRef} className="bg-background pt-8 pb-24">
      <div className="container mx-auto px-6 lg:px-12">
        
        {/* Breadcrumb */}
        <nav className="flex text-xs font-medium tracking-widest uppercase text-muted mb-8">
          <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4 mx-2" />
          <Link to="/shop" className="hover:text-foreground transition-colors">Shop</Link>
          <ChevronRight className="w-4 h-4 mx-2" />
          <span className="text-foreground">{product.name}</span>
        </nav>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 mb-24">
          
          {/* Gallery */}
          <div className="w-full lg:w-1/2 flex flex-col-reverse lg:flex-row gap-4 lg:h-[700px]">
            {/* Thumbnails */}
            <div className="flex lg:flex-col gap-4 overflow-x-auto lg:overflow-y-auto no-scrollbar w-full lg:w-24 flex-shrink-0">
              {images.map((img, idx) => (
                <button 
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`relative aspect-[3/4] w-20 lg:w-full flex-shrink-0 overflow-hidden ${activeImage === idx ? 'ring-1 ring-foreground ring-offset-2' : 'opacity-70 hover:opacity-100'}`}
                >
                  <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
            
            {/* Main Image */}
            <div className="flex-1 bg-secondary relative overflow-hidden aspect-[4/5] lg:aspect-auto">
              <img 
                src={images[activeImage]} 
                alt={product.name} 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Details */}
          <div className="w-full lg:w-1/2 flex flex-col lg:py-8 lg:pr-12 md:pl-10">
            <h1 className="text-3xl md:text-4xl font-serif uppercase tracking-widest mb-4">
              {product.name}
            </h1>
            
            <div className="flex items-center justify-between border-b border-borders pb-6 mb-8">
              <span className="text-xl">${product.price}</span>
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <span className="text-xs text-muted uppercase tracking-widest">(42 Reviews)</span>
              </div>
            </div>

            <p className="text-foreground/80 font-light leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variant Selector */}
            <div className="mb-8">
              <div className="flex justify-between items-end mb-3">
                <span className="text-xs font-medium tracking-widest uppercase">Metal Tone</span>
                <span className="text-xs text-muted capitalize">{selectedVariant}</span>
              </div>
              <div className="flex gap-3">
                <button 
                  onClick={() => setSelectedVariant('Gold')}
                  className={`w-1/2 py-3 text-xs font-medium tracking-widest uppercase transition-all ${selectedVariant === 'Gold' ? 'border border-foreground bg-foreground text-background' : 'border border-borders bg-transparent hover:border-foreground/50'}`}
                >
                  Gold
                </button>
                <button 
                  onClick={() => setSelectedVariant('Silver')}
                  className={`w-1/2 py-3 text-xs font-medium tracking-widest uppercase transition-all ${selectedVariant === 'Silver' ? 'border border-foreground bg-foreground text-background' : 'border border-borders bg-transparent hover:border-foreground/50'}`}
                >
                  Silver
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-4 mb-12">
              <div className="flex items-center border border-borders rounded-sm w-32 shrink-0">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-4 hover:bg-secondary transition-colors text-muted hover:text-foreground"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="flex-1 text-center font-medium">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-4 hover:bg-secondary transition-colors text-muted hover:text-foreground"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              
              <button 
                onClick={handleAddToCart}
                className="flex-1 bg-primary text-foreground font-medium tracking-widest uppercase text-sm hover:bg-primary-dark transition-colors duration-300"
              >
                Add to Cart
              </button>
            </div>

            {/* Accordions */}
            <div className="border-t border-borders">
              <Accordion title="Description" defaultOpen={true}>
                {product.description} Handcrafted with precision to ensure elegance in every facet. This piece is meant to seamlessly integrate into your daily wardrobe offering a subtle touch of luxury.
              </Accordion>
              <Accordion title="Materials & Care">
                <ul className="list-disc pl-5 space-y-2 mb-4 text-foreground/80">
                  <li>Base metal: Solid 925 Sterling Silver</li>
                  <li>Plating: Extra thick 3-micron layer of 18k Gold</li>
                  <li>Nickel-free and hypoallergenic</li>
                </ul>
                <p>To preserve your piece's longevity, avoid prolonged exposure to water, perfumes, and harsh chemicals. Store in the provided pouch when not in use.</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p className="mb-2"><strong>Shipping:</strong> Free worldwide shipping on all orders. Standard delivery takes 3-7 business days.</p>
                <p><strong>Returns:</strong> We accept returns for unworn items in their original packaging within 30 days of delivery. Custom pieces are final sale.</p>
              </Accordion>
            </div>
            
          </div>
        </div>

        {/* Related Products */}
        <div className="border-t border-borders pt-20">
          <h2 className="text-2xl font-serif tracking-widest uppercase mb-10 text-center">You May Also Like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {relatedProducts.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProductDetail;
