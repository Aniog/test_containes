import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { getProductBySlug, getRelatedProducts } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';
import Button from '@/components/ui/Button';
import { Accordion, AccordionItem } from '@/components/ui/Accordion';
import ProductCard from '@/components/ui/ProductCard';

const ProductDetail = () => {
  const { slug } = useParams();
  const product = getProductBySlug(slug);
  const [selectedVariant, setSelectedVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const { addToCart } = useCart();

  if (!product) {
    return (
      <div className="min-h-screen bg-[#F8F5F0] pt-20 flex items-center justify-center">
        <div className="text-center">
          <p className="text-[#4A463F]">Product not found.</p>
          <Link to="/shop" className="text-[#BFA46F] mt-2 inline-block">Back to Shop →</Link>
        </div>
      </div>
    );
  }

  const relatedProducts = getRelatedProducts(product.id, 4);
  const images = product.images || [];

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
  };

  return (
    <div className="min-h-screen bg-[#F8F5F0] pt-20">
      <div className="max-w-[1200px] mx-auto px-6 py-10">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
          {/* Image Gallery */}
          <div>
            <div className="aspect-[4/3.5] bg-[#EDE8DF] overflow-hidden mb-3">
              <img 
                src={images[selectedImageIndex] || images[0]} 
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
                    className={`w-20 h-20 bg-[#EDE8DF] overflow-hidden border-2 transition-all ${
                      selectedImageIndex === idx ? 'border-[#BFA46F]' : 'border-transparent'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="pt-2">
            <h1 className="font-serif text-3xl md:text-4xl tracking-[2px] uppercase leading-tight">
              {product.name}
            </h1>
            
            <div className="flex items-center gap-3 mt-3">
              <span className="text-xl tabular-nums">{formatPrice(product.price)}</span>
              <div className="flex items-center gap-1 text-sm text-[#BFA46F]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-current" />
                ))}
                <span className="text-[#4A463F] ml-1">
                  {product.rating} ({product.reviewCount})
                </span>
              </div>
            </div>

            <p className="mt-6 text-[#4A463F] leading-relaxed">
              {product.description}
            </p>

            {/* Variant Selector */}
            <div className="mt-8">
              <p className="text-xs tracking-[2px] mb-3">TONE</p>
              <div className="flex gap-2">
                {['gold', 'silver'].map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-5 py-2 text-sm tracking-[1.5px] border transition-all ${
                      selectedVariant === variant
                        ? 'border-[#BFA46F] bg-[#BFA46F] text-[#F8F5F0]'
                        : 'border-[#D4C9B8] hover:border-[#BFA46F]'
                    }`}
                  >
                    {variant.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <p className="text-xs tracking-[2px] mb-3">QUANTITY</p>
              <div className="flex items-center border border-[#D4C9B8] w-fit">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2 text-lg leading-none hover:bg-[#EDE8DF]"
                >
                  −
                </button>
                <span className="px-5 tabular-nums">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2 text-lg leading-none hover:bg-[#EDE8DF]"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <Button 
              size="lg" 
              className="w-full mt-8 tracking-[2px]"
              onClick={handleAddToCart}
            >
              ADD TO CART
            </Button>

            <p className="text-center text-xs tracking-[1px] text-[#8A8175] mt-3">
              Ships in 1–2 business days
            </p>

            {/* Accordions */}
            <div className="mt-10 border-t border-[#D4C9B8]">
              <Accordion>
                <AccordionItem title="DESCRIPTION" defaultOpen>
                  <p>{product.description}</p>
                  <p className="mt-3">Each piece is hand-finished in our atelier and inspected for quality before shipping.</p>
                </AccordionItem>
                <AccordionItem title="MATERIALS & CARE">
                  <p className="mb-2"><strong>Materials:</strong> {product.material}</p>
                  <p className="mb-2"><strong>Care:</strong> Avoid contact with perfumes, lotions, and harsh chemicals. Store in the provided pouch. Polish gently with a soft cloth.</p>
                  <p>Our 18K gold plating is designed for everyday wear and will maintain its luster with proper care.</p>
                </AccordionItem>
                <AccordionItem title="SHIPPING & RETURNS">
                  <p className="mb-2">• Free worldwide shipping on all orders</p>
                  <p className="mb-2">• Ships within 1–2 business days</p>
                  <p className="mb-2">• 30-day returns on unworn items in original packaging</p>
                  <p>• International duties and taxes may apply</p>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>

        {/* You May Also Like */}
        <div className="mt-20">
          <div className="flex items-end justify-between mb-8">
            <h3 className="font-serif text-2xl tracking-[1px]">You May Also Like</h3>
            <Link to="/shop" className="text-sm tracking-[1.5px] text-[#BFA46F] hover:underline hidden sm:block">
              VIEW ALL →
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-10">
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
