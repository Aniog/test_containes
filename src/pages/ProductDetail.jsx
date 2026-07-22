import React, { useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '../lib/data';
import { useStore } from '../store/useStore';
import { Star, Minus, Plus, ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '../lib/utils';
import * as Accordion from '@radix-ui/react-accordion';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === id) || products[0]; // fallback to first product if not found
  const [activeImage, setActiveImage] = React.useState(0);
  const [quantity, setQuantity] = React.useState(1);
  const [selectedVariant, setSelectedVariant] = React.useState('Gold');
  const containerRef = useRef(null);
  const addToCart = useStore((state) => state.addToCart);

  const images = [
    {
      id: product.imgId1,
      query: `[prod-name] minimalist jewelry photography white background`,
      alt: `${product.name} Front`
    },
    {
      id: product.imgId2,
      query: `[prod-name] close up worn on model editorial`,
      alt: `${product.name} Worn`
    },
    {
      id: `${product.id}-img3`,
      query: `[prod-name] packaging soft warm lighting`,
      alt: `${product.name} Packaging`
    }
  ];

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [product.id, activeImage]); // Rerun if image changes

  const handleAddToCart = () => {
    addToCart({
      ...product,
      variant: selectedVariant,
      quantity,
    });
  };

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

  return (
    <div ref={containerRef} className="pt-24 pb-16"> {/* Add padding for fixed nav */}
      <div className="container mx-auto px-6">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-muted mb-8">
          <Link to="/" className="hover:text-foreground">Home</Link>
          <span>/</span>
          <Link to={`/shop?category=${product.category}`} className="hover:text-foreground">{product.category}</Link>
          <span>/</span>
          <span className="text-foreground">{product.name}</span>
        </div>

        <div className="flex flex-col md:flex-row gap-12 lg:gap-24 mb-24">
          
          {/* Gallery */}
          <div className="w-full md:w-1/2 flex flex-col-reverse md:flex-row gap-4 h-[600px]">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-4 overflow-x-auto md:overflow-y-auto w-full md:w-24 shrink-0 hide-scrollbar">
              {images.map((img, idx) => (
                <button 
                  key={idx} 
                  onClick={() => setActiveImage(idx)}
                  className={cn(
                    "w-20 md:w-full aspect-[3/4] overflow-hidden shrink-0 border relative",
                    activeImage === idx ? "border-primary" : "border-transparent opacity-70 hover:opacity-100"
                  )}
                >
                  <img
                    data-strk-img-id={`thumb-${img.id}`}
                    data-strk-img={img.query}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="150"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`Thumbnail ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
            
            {/* Main Image */}
            <div className="flex-1 bg-secondary relative overflow-hidden aspect-[3/4] md:aspect-auto">
                <img
                  key={activeImage} // Force re-render of image tag on change
                  data-strk-img-id={`main-${images[activeImage].id}`}
                  data-strk-img={images[activeImage].query}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="1000"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={images[activeImage].alt}
                  className="w-full h-full object-cover animate-in fade-in duration-500"
                />
            </div>
          </div>

          {/* Product Info */}
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            
            <h1 id="prod-name" className="font-serif text-3xl md:text-5xl uppercase tracking-widest mb-4">{product.name}</h1>
            
            <div className="flex items-center gap-4 mb-6">
              <span className="text-xl">${product.price}</span>
              <div className="flex items-center gap-2 text-sm">
                <div className="flex text-primary">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill={i < Math.floor(product.rating) ? "currentColor" : "none"} />
                  ))}
                </div>
                <span className="text-muted border-b border-transparent hover:border-muted cursor-pointer transition-colors">
                  {product.reviews} Reviews
                </span>
              </div>
            </div>

            <p className="text-muted leading-relaxed font-light mb-8">
              {product.description}
            </p>

            {/* Variant Selector */}
            <div className="mb-8">
              <span className="text-xs uppercase tracking-widest font-medium mb-3 block">Color Tone</span>
              <div className="flex gap-4">
                {['Gold', 'Silver'].map((tone) => (
                  <button
                    key={tone}
                    onClick={() => setSelectedVariant(tone)}
                    className={cn(
                      "px-6 py-2 text-sm tracking-widest uppercase transition-all duration-300 border",
                      selectedVariant === tone 
                        ? "border-primary bg-primary/5 text-foreground" 
                        : "border-gray-200 text-muted hover:border-gray-300"
                    )}
                  >
                    {tone}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity & Add to Cart */}
            <div className="flex gap-4 mb-12 h-14">
              <div className="flex items-center justify-between border border-gray-200 px-4 w-32 shrink-0">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="text-muted hover:text-foreground transition-colors disabled:opacity-50"
                  disabled={quantity <= 1}
                >
                  <Minus size={16} />
                </button>
                <span className="text-sm">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="text-muted hover:text-foreground transition-colors"
                >
                  <Plus size={16} />
                </button>
              </div>
              
              <button 
                onClick={handleAddToCart}
                className="flex-1 bg-primary text-primary-foreground uppercase tracking-widest text-sm font-medium hover:bg-foreground transition-colors duration-300"
              >
                Add to Cart
              </button>
            </div>

            {/* Accordions */}
            <Accordion.Root type="multiple" className="border-t border-gray-200">
              
              <Accordion.Item value="materials" className="border-b border-gray-200 group">
                <Accordion.Header>
                  <Accordion.Trigger className="flex items-center justify-between w-full py-4 text-left uppercase tracking-widest text-sm font-medium">
                    Materials & Care
                    <ChevronDown className="w-4 h-4 transition-transform group-data-[state=open]:rotate-180" />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up mb-4 text-muted text-sm leading-relaxed font-light">
                  <p><strong>Material:</strong> {product.material}</p>
                  <p className="mt-2 text-gray-500">To maintain the brilliance of your piece, avoid contact with perfumes, lotions, and water. Store in the provided Velmora pouch when not in use.</p>
                </Accordion.Content>
              </Accordion.Item>

              <Accordion.Item value="shipping" className="border-b border-gray-200 group">
                <Accordion.Header>
                  <Accordion.Trigger className="flex items-center justify-between w-full py-4 text-left uppercase tracking-widest text-sm font-medium">
                    Shipping & Returns
                    <ChevronDown className="w-4 h-4 transition-transform group-data-[state=open]:rotate-180" />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up mb-4 text-muted text-sm leading-relaxed font-light">
                  <p>We offer free worldwide shipping on all orders.</p>
                  <ul className="list-disc pl-4 mt-2 text-gray-500 space-y-1">
                    <li>Standard Domestic: 3-5 business days</li>
                    <li>Express Domestic: 1-2 business days</li>
                  </ul>
                  <p className="mt-2 text-gray-500">If you are not completely satisfied, you may return the item within 30 days of purchase.</p>
                </Accordion.Content>
              </Accordion.Item>

            </Accordion.Root>

          </div>
        </div>

        {/* Related Products */}
        <div className="border-t border-gray-200 pt-16">
          <h2 className="text-2xl font-serif mb-8 text-center uppercase tracking-widest">You May Also Like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map((p) => (
              <Link key={p.id} to={`/product/${p.id}`} className="group block text-center">
                <div className="relative aspect-[3/4] mb-4 overflow-hidden bg-secondary">
                  <img
                    data-strk-img-id={`related-${p.imgId1}`}
                    data-strk-img={`[related-name-${p.id}] minimalist jewelry photography white background`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="300"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={p.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 id={`related-name-${p.id}`} className="font-serif text-md mb-1">{p.name}</h3>
                <p className="text-muted text-sm">${p.price}</p>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProductDetail;