import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ArrowLeft } from 'lucide-react';
import Button from '@/components/ui/Button';
import Accordion from '@/components/ui/Accordion';
import ProductCard from '@/components/ui/ProductCard';
import { getProductBySlug, getRelatedProducts } from '@/data/products';
import { useCart } from '@/context/CartContext';

const ProductDetail = () => {
  const { slug } = useParams();
  const product = getProductBySlug(slug);
  const { addToCart } = useCart();

  const [selectedVariant, setSelectedVariant] = useState(product?.variants?.[0] || 'Gold');
  const [quantity, setQuantity] = useState(1);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isAdding, setIsAdding] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen bg-[#F8F5F0] flex items-center justify-center pt-20">
        <div className="text-center">
          <p className="text-[#4A4640] mb-4">Product not found.</p>
          <Link to="/shop" className="text-[#C5A46E] hover:underline">Return to Shop</Link>
        </div>
      </div>
    );
  }

  const relatedProducts = getRelatedProducts(product.id, 4);

  const accordionItems = [
    {
      title: 'Description',
      content: product.longDescription,
    },
    {
      title: 'Materials & Care',
      content: `${product.material}. ${product.care}`,
    },
    {
      title: 'Shipping & Returns',
      content: 'Free worldwide shipping on all orders. Returns accepted within 30 days of delivery. Items must be unworn and in original packaging. Please contact us for return authorization.',
    },
  ];

  const handleAddToCart = () => {
    setIsAdding(true);
    addToCart(product, selectedVariant, quantity);
    setTimeout(() => {
      setIsAdding(false);
      setQuantity(1);
    }, 700);
  };

  const currentImage = product.images?.[selectedImageIndex] || product.image;

  return (
    <div className="min-h-screen bg-[#F8F5F0] pt-20">
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Back Link */}
        <Link to="/shop" className="inline-flex items-center text-sm text-[#8B8178] hover:text-[#1A1A1A] mb-8 tracking-wide">
          <ArrowLeft className="h-4 w-4 mr-2" /> BACK TO SHOP
        </Link>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
          {/* IMAGE GALLERY */}
          <div>
            <div className="aspect-[4/3.6] bg-[#E5E0D8] overflow-hidden mb-3">
              <img
                src={currentImage}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnails */}
            {product.images && product.images.length > 1 && (
              <div className="flex gap-3">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImageIndex(idx)}
                    className={`w-20 h-20 bg-[#E5E0D8] overflow-hidden border-2 transition-all ${
                      selectedImageIndex === idx ? 'border-[#C5A46E]' : 'border-transparent'
                    }`}
                  >
                    <img src={img} alt={`${product.name} view ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* PRODUCT INFO */}
          <div className="pt-2">
            <h1 className="font-serif text-3xl md:text-4xl uppercase tracking-[2.5px] text-[#1A1A1A] leading-tight mb-3">
              {product.name}
            </h1>

            <div className="flex items-center gap-3 mb-6">
              <span className="font-medium text-xl text-[#1A1A1A]">${product.price}</span>
              <div className="flex items-center gap-1 text-[#C5A46E]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <span className="text-sm text-[#8B8178]">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            <p className="text-[#4A4640] leading-relaxed mb-8 pr-4">
              {product.description}
            </p>

            {/* VARIANT SELECTOR */}
            <div className="mb-8">
              <p className="text-xs tracking-[2px] text-[#8B8178] mb-3">TONE</p>
              <div className="flex gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-6 py-2 text-sm tracking-[1px] border transition-all ${
                      selectedVariant === variant
                        ? 'border-[#C5A46E] bg-[#C5A46E] text-[#0F0F0F]'
                        : 'border-[#E5E0D8] text-[#1A1A1A] hover:border-[#C5A46E]'
                    }`}
                  >
                    {variant.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            {/* QUANTITY */}
            <div className="mb-8">
              <p className="text-xs tracking-[2px] text-[#8B8178] mb-3">QUANTITY</p>
              <div className="flex items-center border border-[#E5E0D8] w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2 text-lg hover:bg-[#F5F1E9] transition-colors"
                >
                  −
                </button>
                <span className="px-6 py-2 text-sm tabular-nums border-x border-[#E5E0D8]">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2 text-lg hover:bg-[#F5F1E9] transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            {/* ADD TO CART */}
            <Button
              variant="solid"
              size="lg"
              className="w-full mb-4"
              onClick={handleAddToCart}
              disabled={isAdding}
            >
              {isAdding ? 'ADDED TO CART' : 'ADD TO CART'}
            </Button>

            <p className="text-center text-xs text-[#8B8178] tracking-wide">
              Free shipping • 30-day returns
            </p>

            {/* ACCORDIONS */}
            <div className="mt-12">
              <Accordion items={accordionItems} />
            </div>
          </div>
        </div>

        {/* YOU MAY ALSO LIKE */}
        <div className="mt-20 pt-12 border-t border-[#E5E0D8]">
          <h3 className="font-serif text-2xl text-[#1A1A1A] mb-8 tracking-wide">You May Also Like</h3>
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
