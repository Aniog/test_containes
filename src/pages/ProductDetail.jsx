import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { getProductBySlug, getRelatedProducts } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';
import Button from '@/components/ui/Button';
import { Accordion, AccordionItem } from '@/components/ui/Accordion';
import ProductCard from '@/components/ProductCard';

const ProductDetail = () => {
  const { slug } = useParams();
  const product = getProductBySlug(slug);
  const relatedProducts = getRelatedProducts(product?.id || 0, 4);
  
  const [selectedVariant, setSelectedVariant] = useState(product?.variants?.[0] || 'Gold');
  const [quantity, setQuantity] = useState(1);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  
  const { addToCart } = useCart();

  if (!product) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center bg-[#F8F5F0]">
        <div className="text-center">
          <p className="text-[#6B665F] mb-4">Product not found.</p>
          <Link to="/shop" className="text-[#B89778] tracking-[1.5px] text-sm hover:underline">BACK TO SHOP</Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
  };

  const images = product.images;

  return (
    <div className="min-h-screen bg-[#F8F5F0] pt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Breadcrumb */}
        <div className="text-xs tracking-[1.5px] text-[#6B665F] mb-8">
          <Link to="/shop" className="hover:text-[#B89778]">SHOP</Link>
          <span className="mx-2">/</span>
          <span>{product.category.toUpperCase()}</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-x-16 gap-y-12">
          {/* Left: Image Gallery */}
          <div>
            <div className="aspect-[4/3.5] bg-[#EDE8E0] overflow-hidden mb-3">
              <img 
                src={images[selectedImageIndex]} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Thumbnails */}
            {images.length > 1 && (
              <div className="flex gap-3">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImageIndex(idx)}
                    className={`gallery-thumb w-20 h-20 bg-[#EDE8E0] overflow-hidden ${selectedImageIndex === idx ? 'active' : ''}`}
                  >
                    <img src={img} alt={`${product.name} view ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right: Product Info */}
          <div className="lg:pt-2">
            <h1 className="product-name font-serif text-3xl md:text-4xl tracking-[2px] text-[#1C1C1C] leading-tight">
              {product.name}
            </h1>
            
            <div className="flex items-center gap-4 mt-4">
              <p className="text-2xl text-[#1C1C1C]">{formatPrice(product.price)}</p>
              <div className="flex items-center gap-1 text-sm text-[#B89778]">
                <Star className="h-4 w-4 fill-current" />
                <span>{product.rating}</span>
                <span className="text-[#6B665F]">({product.reviewCount})</span>
              </div>
            </div>

            <p className="mt-6 text-[#6B665F] leading-relaxed">
              {product.description}
            </p>

            {/* Variant Selector */}
            <div className="mt-8">
              <label className="block text-xs tracking-[2px] text-[#6B665F] mb-3">TONE</label>
              <div className="flex gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`variant-pill ${selectedVariant === variant ? 'active' : ''}`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <label className="block text-xs tracking-[2px] text-[#6B665F] mb-3">QUANTITY</label>
              <div className="flex items-center border border-[#EDE8E0] w-fit">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2 text-[#6B665F] hover:text-[#1C1C1C] transition-colors"
                >
                  −
                </button>
                <span className="px-6 py-2 text-sm tabular-nums border-x border-[#EDE8E0]">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2 text-[#6B665F] hover:text-[#1C1C1C] transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <Button 
              onClick={handleAddToCart}
              className="w-full mt-8" 
              size="lg"
            >
              ADD TO CART
            </Button>

            <p className="text-center text-xs tracking-[1.5px] text-[#6B665F] mt-4">
              FREE SHIPPING • 30-DAY RETURNS
            </p>

            {/* Accordions */}
            <div className="mt-10 border-t border-[#EDE8E0]">
              <Accordion>
                <AccordionItem title="Description">
                  <p>{product.longDescription}</p>
                  <p className="mt-3">Each piece is hand-finished in our atelier and comes with a lifetime guarantee against manufacturing defects.</p>
                </AccordionItem>
                <AccordionItem title="Materials & Care">
                  <p>18K gold-plated brass with hypoallergenic posts. Cubic zirconia accents where noted.</p>
                  <ul className="mt-3 space-y-1 list-disc list-inside">
                    <li>Avoid contact with perfumes, lotions, and harsh chemicals</li>
                    <li>Store in the provided pouch when not wearing</li>
                    <li>Clean gently with a soft, dry cloth</li>
                    <li>Remove before swimming or showering</li>
                  </ul>
                </AccordionItem>
                <AccordionItem title="Shipping & Returns">
                  <p>Complimentary worldwide shipping on all orders. Delivered in 3–7 business days.</p>
                  <p className="mt-3">30-day returns for unworn items in original packaging. Exchanges available for size or tone.</p>
                  <p className="mt-3 text-xs">For questions, email <a href="mailto:hello@velmora.com" className="underline">hello@velmora.com</a></p>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>

        {/* You May Also Like */}
        {relatedProducts.length > 0 && (
          <div className="mt-20 pt-12 border-t border-[#EDE8E0]">
            <h3 className="font-serif text-2xl tracking-[1px] mb-8">You May Also Like</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-10">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
