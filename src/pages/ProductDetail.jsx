import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { getProductBySlug, getRelatedProducts } from '../lib/products';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';
import Accordion from '../components/Accordion';

const ProductDetail = () => {
  const { slug } = useParams();
  const product = getProductBySlug(slug);
  const { addToCart } = useCart();

  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  if (!product) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <p className="text-[#6B6359] mb-4">Product not found.</p>
          <Link to="/shop" className="text-[#B8976A] hover:underline">Return to shop</Link>
        </div>
      </div>
    );
  }

  const images = [product.images.primary, product.images.secondary];
  const related = getRelatedProducts(product.id, 4);

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
  };

  return (
    <div className="min-h-screen bg-[#F8F5F1] pt-20">
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Breadcrumb */}
        <div className="text-xs tracking-[0.1em] text-[#6B6359] mb-8">
          <Link to="/shop" className="hover:text-[#B8976A]">SHOP</Link>
          <span className="mx-2">/</span>
          <span>{product.category.toUpperCase()}</span>
        </div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
          {/* Left: Image Gallery */}
          <div>
            <div className="aspect-[4/3.5] bg-[#F5F2ED] rounded-sm overflow-hidden mb-3">
              <img
                src={images[selectedImageIndex]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-3">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImageIndex(idx)}
                  className={`w-20 h-20 rounded-sm overflow-hidden border-2 transition-all ${
                    selectedImageIndex === idx ? 'border-[#B8976A]' : 'border-transparent'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="pt-2">
            <h1 className="product-name text-3xl md:text-4xl tracking-[0.12em] leading-tight mb-3">
              {product.name}
            </h1>

            <div className="flex items-center gap-3 mb-2">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} className={i < Math.floor(product.rating) ? 'fill-[#B8976A] text-[#B8976A]' : 'text-[#E5DFD6]'} />
                ))}
              </div>
              <span className="text-sm text-[#6B6359]">
                {product.rating} · {product.reviewCount} reviews
              </span>
            </div>

            <div className="text-2xl font-medium tracking-tight mb-6">${product.price}</div>

            <p className="text-[#6B6359] leading-relaxed mb-8 pr-4">
              {product.description}
            </p>

            {/* Variant Selector */}
            <div className="mb-6">
              <div className="text-xs tracking-[0.1em] text-[#6B6359] mb-2">TONE</div>
              <div className="flex gap-2">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`variant-pill px-5 py-2 border rounded-full transition-all ${
                      selectedVariant === variant
                        ? 'active border-[#2C2823]'
                        : 'border-[#E5DFD6] text-[#6B6359]'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <div className="text-xs tracking-[0.1em] text-[#6B6359] mb-2">QUANTITY</div>
              <div className="flex items-center border border-[#E5DFD6] rounded w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2 text-[#6B6359] hover:text-[#2C2823]"
                >
                  −
                </button>
                <span className="px-5 tabular-nums">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2 text-[#6B6359] hover:text-[#2C2823]"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="btn-premium btn-premium-solid w-full py-4 text-sm tracking-[0.12em] mb-3"
            >
              ADD TO CART
            </button>
            <p className="text-center text-xs text-[#6B6359] tracking-widest">FREE SHIPPING ON ALL ORDERS</p>

            {/* Accordions */}
            <div className="mt-10">
              <Accordion title="DESCRIPTION" defaultOpen>
                {product.longDescription}
              </Accordion>
              <Accordion title="MATERIALS & CARE">
                18K gold-plated brass with hypoallergenic posts. Avoid contact with perfumes, lotions, and harsh chemicals. 
                Store in the provided pouch. Clean gently with a soft cloth. Not suitable for swimming or showering.
              </Accordion>
              <Accordion title="SHIPPING & RETURNS">
                Complimentary worldwide shipping on all orders. Delivered in 3–7 business days domestically, 7–14 internationally. 
                30-day returns for unworn items in original packaging. Please contact us for assistance.
              </Accordion>
            </div>
          </div>
        </div>

        {/* You May Also Like */}
        {related.length > 0 && (
          <div className="mt-20">
            <div className="mb-8">
              <div className="text-xs tracking-[0.15em] text-[#B8976A] mb-1">DISCOVER MORE</div>
              <h3 className="font-serif text-2xl tracking-[0.02em]">You May Also Like</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-10">
              {related.map((p) => (
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
