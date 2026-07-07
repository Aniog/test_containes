import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import Button from '@/components/ui/Button';
import { Accordion, AccordionItem } from '@/components/ui/Accordion';
import ProductCard from '@/components/ProductCard';
import { formatPrice } from '@/lib/utils';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const { addToCart } = useCart();
  
  const [selectedVariant, setSelectedVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  if (!product) {
    return <div className="pt-20 p-6 text-center">Product not found</div>;
  }

  const images = [product.image, product.hoverImage || product.image];
  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
  };

  return (
    <div className="bg-[#F9F6F0] pt-20">
      <div className="max-w-[1200px] mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div>
            <div className="aspect-[4/3] bg-[#EDE9E3] overflow-hidden mb-4">
              <img 
                src={images[selectedImage]} 
                alt={product.imageAlt} 
                className="w-full h-full object-cover" 
              />
            </div>
            <div className="flex gap-3">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`w-20 h-20 bg-[#EDE9E3] overflow-hidden border-2 transition-all ${selectedImage === idx ? 'border-[#C5A26F]' : 'border-transparent'}`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="pt-2">
            <div className="font-serif text-3xl tracking-[2px] mb-2">{product.name}</div>
            <div className="text-2xl font-light mb-4">{formatPrice(product.price)}</div>
            
            <div className="flex items-center gap-2 mb-6">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-[#C5A26F] text-[#C5A26F]" />
                ))}
              </div>
              <span className="text-sm text-[#5C5248]">{product.rating} ({product.reviews} reviews)</span>
            </div>

            <p className="text-[#5C5248] leading-relaxed mb-8">{product.description}</p>

            {/* Variant Selector */}
            <div className="mb-6">
              <div className="text-xs tracking-[2px] mb-3 text-[#8B7F6F]">FINISH</div>
              <div className="flex gap-3">
                {['gold', 'silver'].map((v) => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`px-6 py-2 text-sm tracking-wide border transition-all ${selectedVariant === v ? 'border-[#C5A26F] bg-[#C5A26F] text-white' : 'border-[#EDE9E3] hover:border-[#C5A26F]'}`}
                  >
                    {v === 'gold' ? 'Gold Tone' : 'Silver Tone'}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <div className="text-xs tracking-[2px] mb-3 text-[#8B7F6F]">QUANTITY</div>
              <div className="flex items-center border border-[#EDE9E3] w-fit">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-4 py-2 hover:bg-[#EDE9E3]">-</button>
                <span className="px-6 py-2 border-x border-[#EDE9E3]">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="px-4 py-2 hover:bg-[#EDE9E3]">+</button>
              </div>
            </div>

            <Button onClick={handleAddToCart} className="w-full mb-4" size="lg">Add to Cart</Button>
            <p className="text-center text-xs text-[#8B7F6F]">Ships in 1-2 business days</p>

            {/* Accordions */}
            <div className="mt-12">
              <Accordion>
                <AccordionItem title="Description">
                  Each piece is hand-finished in our studio using traditional techniques. 
                  The {product.name.toLowerCase()} features our signature attention to detail and is designed to be worn daily.
                </AccordionItem>
                <AccordionItem title="Materials & Care">
                  {product.material}. Avoid contact with perfumes, lotions, and harsh chemicals. 
                  Clean gently with a soft cloth. Store in the provided pouch when not in use.
                </AccordionItem>
                <AccordionItem title="Shipping & Returns">
                  Free worldwide shipping on all orders. 30-day returns for unworn items in original packaging. 
                  Please allow 5-10 business days for international delivery.
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-20 pt-12 border-t border-[#EDE9E3]">
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-serif text-2xl tracking-[-0.5px]">You May Also Like</h3>
            <Link to="/shop" className="text-sm tracking-wide hover:text-[#C5A26F]">View All →</Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;