import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { getProductBySlug, getRelatedProducts } from '@/data/products';
import { useCart } from '@/data/cartContext';
import ProductGallery from '@/components/product/ProductGallery';
import ProductCard from '@/components/product/ProductCard';
import Button from '@/components/ui/Button';
import { Accordion } from '@/components/ui/Accordion';
import Navigation from '@/components/ui/Navigation';
import Footer from '@/components/ui/Footer';
import CartDrawer from '@/components/ui/CartDrawer';

const ProductDetail = () => {
  const { slug } = useParams();
  const product = getProductBySlug(slug);
  const { addToCart } = useCart();

  const [selectedVariant, setSelectedVariant] = useState(
    product?.variants?.[0] || 'Gold'
  );
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="min-h-screen bg-[#F8F5F1] text-[#1C1917]">
        <Navigation />
        <div className="min-h-[60vh] pt-20 flex items-center justify-center">
          <div className="text-center">
            <p className="text-[#8A8178] mb-4">Product not found</p>
            <Link to="/shop" className="text-[#A67C52] hover:underline">
              Return to Shop
            </Link>
          </div>
        </div>
        <Footer />
        <CartDrawer />
      </div>
    );
  }

  const relatedProducts = getRelatedProducts(product.id, 4);

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
  };

  return (
    <div className="min-h-screen bg-[#F8F5F1] text-[#1C1917]">
      <Navigation />
      <div className="max-w-7xl mx-auto px-6 py-12 pt-20">
        {/* Breadcrumb */}
        <div className="text-xs tracking-[1.5px] text-[#8A8178] mb-8">
          <Link to="/shop" className="hover:text-[#1C1917]">SHOP</Link>
          <span className="mx-2">/</span>
          <span>{product.category.toUpperCase()}</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Gallery */}
          <div>
            <ProductGallery images={product.images} productName={product.name} />
          </div>

          {/* Right: Details */}
          <div className="lg:pt-2">
            <h1 className="font-serif text-3xl md:text-4xl tracking-[2px] text-[#1C1917] leading-tight">
              {product.name}
            </h1>

            <div className="flex items-center gap-3 mt-3">
              <p className="text-xl text-[#A67C52]">${product.price}</p>
              <div className="flex items-center gap-1 text-sm text-[#8A8178]">
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-3.5 w-3.5 ${
                        i < Math.floor(product.rating)
                          ? 'fill-[#A67C52] text-[#A67C52]'
                          : 'text-[#C4B8A8]'
                      }`}
                    />
                  ))}
                </div>
                <span>
                  {product.rating} ({product.reviewCount})
                </span>
              </div>
            </div>

            <p className="mt-6 text-[#4A4640] leading-relaxed">
              {product.description}
            </p>

            {/* Variant Selector */}
            <div className="mt-8">
              <p className="text-xs tracking-[2px] text-[#8A8178] mb-3">TONE</p>
              <div className="flex gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-6 py-2 text-sm tracking-[1px] border transition-all ${
                      selectedVariant === variant
                        ? 'border-[#A67C52] bg-[#A67C52] text-white'
                        : 'border-[#C4B8A8] text-[#1C1917] hover:border-[#A67C52]'
                    }`}
                  >
                    {variant.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <p className="text-xs tracking-[2px] text-[#8A8178] mb-3">QUANTITY</p>
              <div className="flex items-center border border-[#C4B8A8] w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2 text-[#8A8178] hover:text-[#1C1917] transition-colors"
                  aria-label="Decrease quantity"
                >
                  −
                </button>
                <span className="px-6 py-2 text-sm tabular-nums border-x border-[#C4B8A8]">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2 text-[#8A8178] hover:text-[#1C1917] transition-colors"
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <Button
              onClick={handleAddToCart}
              size="lg"
              className="w-full mt-8"
            >
              ADD TO CART
            </Button>

            <p className="text-center text-xs tracking-[1px] text-[#8A8178] mt-4">
              FREE SHIPPING • 30-DAY RETURNS
            </p>

            {/* Accordions */}
            <div className="mt-10">
              <Accordion title="DESCRIPTION" defaultOpen>
                <p>
                  {product.description} Each piece is hand-finished in our studio and
                  inspected for quality before being carefully packaged.
                </p>
              </Accordion>
              <Accordion title="MATERIALS & CARE">
                <div className="space-y-3">
                  <p>
                    <strong>Material:</strong> {product.material}
                  </p>
                  <p>
                    To maintain the beauty of your jewelry, avoid contact with
                    perfumes, lotions, and harsh chemicals. Store in the provided
                    pouch when not wearing. Clean gently with a soft cloth.
                  </p>
                  <p>
                    Our 18K gold plating is designed to last with proper care.
                    Occasional wear is recommended to maintain shine.
                  </p>
                </div>
              </Accordion>
              <Accordion title="SHIPPING & RETURNS">
                <div className="space-y-3">
                  <p>
                    <strong>Shipping:</strong> Complimentary worldwide shipping on all
                    orders. Standard delivery takes 5–10 business days.
                  </p>
                  <p>
                    <strong>Returns:</strong> We offer a 30-day return window for
                    unworn items in original packaging. Return shipping is free.
                  </p>
                  <p>
                    For questions about your order, please email
                    care@velmora.com.
                  </p>
                </div>
              </Accordion>
            </div>
          </div>
        </div>

        {/* You May Also Like */}
        {relatedProducts.length > 0 && (
          <div className="mt-20 pt-12 border-t border-[#C4B8A8]">
            <h3 className="font-serif text-2xl tracking-[1px] text-[#1C1917] mb-8">
              You May Also Like
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10">
              {relatedProducts.map((related) => (
                <ProductCard key={related.id} product={related} />
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
