import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import Button from '@/components/ui/Button';
import { Accordion, AccordionItem } from '@/components/ui/Accordion';
import StarRating from '@/components/ui/StarRating';
import ProductCard from '@/components/shop/ProductCard';
import { formatPrice } from '@/lib/utils';

const ProductDetail = () => {
  const { slug } = useParams();
  const { addToCart } = useCart();
  
  const product = products.find(p => p.slug === slug) || products[0];
  
  const [selectedVariant, setSelectedVariant] = useState(product.variants?.[0] || { id: 'gold', label: 'Gold' });
  const [quantity, setQuantity] = useState(1);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [addedToCart, setAddedToCart] = useState(false);

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 1500);
  };

  const images = product.images || ["https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80"];

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
        {/* LEFT: Image Gallery */}
        <div>
          <div className="aspect-[4/3] bg-[#EDE9E3] overflow-hidden mb-3">
            <img 
              src={images[selectedImageIndex]} 
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          
          {images.length > 1 && (
            <div className="flex gap-3">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImageIndex(idx)}
                  className={`w-20 h-20 overflow-hidden border-2 transition-all ${selectedImageIndex === idx ? 'border-[#C5A46E]' : 'border-transparent'}`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* RIGHT: Product Info */}
        <div className="pt-2">
          <div className="mb-6">
            <h1 className="font-serif text-3xl tracking-[2px] mb-2">{product.name}</h1>
            <div className="flex items-center gap-3">
              <span className="text-xl font-medium">{formatPrice(product.price)}</span>
              <div className="flex items-center gap-2 text-sm">
                <StarRating rating={product.rating} size={14} />
                <span className="text-[#9A9590]">({product.reviewCount})</span>
              </div>
            </div>
          </div>

          <p className="text-[#4A4640] leading-relaxed mb-8 pr-4">
            {product.description}
          </p>

          {/* Variant Selector */}
          {product.variants && product.variants.length > 0 && (
            <div className="mb-6">
              <div className="text-xs tracking-[1.5px] text-[#9A9590] mb-3">TONE</div>
              <div className="flex flex-wrap gap-2">
                {product.variants.map((variant) => (
                  <button
                    key={variant.id}
                    onClick={() => setSelectedVariant(variant)}
                    className={`variant-pill ${selectedVariant.id === variant.id ? 'active' : ''}`}
                    disabled={!variant.available}
                  >
                    {variant.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quantity */}
          <div className="mb-8">
            <div className="text-xs tracking-[1.5px] text-[#9A9590] mb-3">QUANTITY</div>
            <div className="flex items-center border border-[#EDE9E3] w-fit">
              <button 
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-4 py-2 text-lg hover:bg-[#F8F6F2] transition-colors"
              >
                −
              </button>
              <span className="px-6 py-2 text-sm tabular-nums border-x border-[#EDE9E3]">{quantity}</span>
              <button 
                onClick={() => setQuantity(quantity + 1)}
                className="px-4 py-2 text-lg hover:bg-[#F8F6F2] transition-colors"
              >
                +
              </button>
            </div>
          </div>

          {/* Add to Cart */}
          <Button 
            size="lg" 
            className="w-full mb-3" 
            onClick={handleAddToCart}
          >
            {addedToCart ? 'ADDED TO CART' : 'ADD TO CART'}
          </Button>
          
          <p className="text-center text-xs text-[#9A9590] tracking-wide">Free shipping on all orders • 30-day returns</p>

          {/* Accordions */}
          <div className="mt-10 border-t border-[#EDE9E3]">
            <Accordion>
              <AccordionItem title="DESCRIPTION" defaultOpen>
                <p>{product.longDescription || product.description}</p>
                <p className="mt-3">Each piece is hand-finished in our atelier and inspected before shipping.</p>
              </AccordionItem>
              
              <AccordionItem title="MATERIALS & CARE">
                <ul className="space-y-1.5">
                  <li>• 18K gold-plated brass</li>
                  <li>• Hypoallergenic and nickel-free</li>
                  <li>• Natural and lab-grown crystal accents</li>
                  <li className="pt-2">Care: Avoid contact with perfume, lotions, and harsh chemicals. Store in the provided pouch. Polish gently with a soft cloth.</li>
                </ul>
              </AccordionItem>
              
              <AccordionItem title="SHIPPING & RETURNS">
                <p>Free worldwide shipping on all orders. Delivery in 3–7 business days for most destinations.</p>
                <p className="mt-3">30-day returns for unworn items in original packaging. Contact us to initiate a return.</p>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>

      {/* YOU MAY ALSO LIKE */}
      <section className="mt-20 pt-10 border-t border-[#EDE9E3]">
        <h3 className="font-serif text-xl tracking-[1px] mb-8">You May Also Like</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-10">
          {relatedProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
