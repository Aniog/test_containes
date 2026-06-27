import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import CartDrawer from '../components/cart/CartDrawer';
import Button from '../components/ui/Button';
import StarRating from '../components/ui/StarRating';
import Accordion from '../components/ui/Accordion';
import ProductCard from '../components/ui/ProductCard';
import { getProductBySlug, getRelatedProducts } from '../data/products';
import { useCart } from '../context/CartContext';

const ProductDetail = () => {
  const { slug } = useParams();
  const product = getProductBySlug(slug);
  const { addToCart } = useCart();

  const [selectedVariant, setSelectedVariant] = useState(product?.variants[0] || { id: 'gold', label: 'Gold' });
  const [quantity, setQuantity] = useState(1);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  if (!product) {
    return (
      <div className="min-h-screen bg-[#F5F2ED] flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl mb-4">Product not found</p>
          <Link to="/shop" className="text-[#C5A46E] underline">Return to shop</Link>
        </div>
      </div>
    );
  }

  const relatedProducts = getRelatedProducts(product.id, 4);

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
  };

  return (
    <div className="min-h-screen bg-[#F5F2ED] text-[#2C2823]">
      <Navbar />
      
      <div className="max-w-[1280px] mx-auto px-6 pt-24 pb-20">
        {/* Back link */}
        <Link to="/shop" className="inline-flex items-center gap-2 text-xs tracking-[2px] text-[#6B665F] hover:text-[#C5A46E] mb-8 transition-colors">
          <ArrowLeft size={14} /> BACK TO COLLECTION
        </Link>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
          {/* Image Gallery */}
          <div>
            <div className="aspect-[4/3.6] bg-[#E8E4DC] overflow-hidden mb-3">
              <img 
                src={product.images[activeImageIndex]} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Thumbnails */}
            <div className="flex gap-3">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`w-20 h-20 bg-[#E8E4DC] overflow-hidden border-2 transition-all ${activeImageIndex === idx ? 'border-[#C5A46E]' : 'border-transparent opacity-70 hover:opacity-100'}`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="pt-1">
            <h1 className="font-serif text-[28px] md:text-[32px] tracking-[3px] leading-tight mb-2">{product.name}</h1>
            
            <div className="flex items-center gap-4 mb-4">
              <StarRating rating={product.rating} size={15} />
              <span className="text-xs text-[#6B665F]">({product.reviewCount} reviews)</span>
            </div>

            <p className="text-2xl font-medium mb-6 tabular-nums">${product.price}</p>

            <p className="text-[#6B665F] leading-relaxed mb-8 pr-4">{product.description}</p>

            {/* Variant Selector */}
            <div className="mb-6">
              <p className="text-xs tracking-[2px] mb-3 text-[#6B665F]">TONE</p>
              <div className="flex gap-2">
                {product.variants.map((variant) => (
                  <button
                    key={variant.id}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-6 py-2.5 text-sm tracking-[1.5px] border transition-all ${selectedVariant.id === variant.id 
                      ? 'border-[#C5A46E] bg-[#C5A46E] text-[#0F0E0C]' 
                      : 'border-[#E8E4DC] hover:border-[#C5A46E]'}`}
                  >
                    {variant.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="text-xs tracking-[2px] mb-3 text-[#6B665F]">QUANTITY</p>
              <div className="flex items-center border border-[#E8E4DC] w-fit">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-4 py-2 hover:bg-[#E8E4DC] transition-colors">-</button>
                <span className="px-6 py-2 tabular-nums border-x border-[#E8E4DC]">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="px-4 py-2 hover:bg-[#E8E4DC] transition-colors">+</button>
              </div>
            </div>

            {/* Add to Cart */}
            <Button 
              variant="solid" 
              size="lg" 
              className="w-full mb-3 tracking-[2.5px]"
              onClick={handleAddToCart}
            >
              ADD TO CART
            </Button>
            <p className="text-center text-xs text-[#6B665F] tracking-wide">Ships in 1-2 business days</p>

            {/* Accordions */}
            <div className="mt-10">
              <Accordion title="DESCRIPTION" defaultOpen>
                {product.description} Each piece is hand-finished in our atelier and comes with a lifetime guarantee against manufacturing defects.
              </Accordion>
              <Accordion title="MATERIALS & CARE">
                {product.material}. To maintain the finish, avoid contact with perfumes, lotions, and harsh chemicals. Clean gently with a soft cloth. Store in the provided pouch when not in use.
              </Accordion>
              <Accordion title="SHIPPING & RETURNS">
                Complimentary worldwide shipping on all orders. Returns accepted within 30 days of delivery for unworn items in original packaging. Custom and personalized pieces are final sale.
              </Accordion>
            </div>
          </div>
        </div>

        {/* You May Also Like */}
        {relatedProducts.length > 0 && (
          <div className="mt-20 pt-12 border-t border-[#E8E4DC]">
            <h3 className="font-serif text-2xl tracking-[-0.3px] mb-8">You May Also Like</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-10">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>

      <Footer />
      <CartDrawer />
    </div>
  );
};

export default ProductDetail;