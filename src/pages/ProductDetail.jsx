import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProductBySlug, getRelatedProducts } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';

const ProductDetail = () => {
  const { slug } = useParams();
  const product = getProductBySlug(slug);
  const { addToCart } = useCart();

  const [selectedVariant, setSelectedVariant] = useState(product?.variants?.[0] || { id: 'gold', label: 'Gold', value: 'gold' });
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState(null);

  if (!product) {
    return (
      <div className="pt-20 min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <p className="text-[#6B6058] mb-4">Product not found.</p>
          <Link to="/shop" className="btn btn-gold">Back to Shop</Link>
        </div>
      </div>
    );
  }

  const relatedProducts = getRelatedProducts(product.id, 4);

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
  };

  const toggleAccordion = (key) => {
    setOpenAccordion(openAccordion === key ? null : key);
  };

  const accordions = [
    {
      key: 'description',
      title: 'Description',
      content: product.longDescription,
    },
    {
      key: 'materials',
      title: 'Materials & Care',
      content: 'Crafted from premium brass with 18K gold or silver plating. Hypoallergenic and nickel-free. To care for your piece, avoid contact with water, lotions, and perfumes. Store in the provided pouch when not in use. Gently polish with a soft cloth to maintain shine.',
    },
    {
      key: 'shipping',
      title: 'Shipping & Returns',
      content: 'Free worldwide shipping on all orders. Ships within 1-2 business days. Returns accepted within 30 days of delivery. Items must be unworn and in original packaging. Please contact us for return authorization.',
    },
  ];

  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-6 py-10 md:py-16">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
          {/* Left: Image Gallery */}
          <div>
            <div className="aspect-square bg-gradient-to-br from-[#E8E0D5] to-[#D4C9B8] mb-4 flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full border-2 border-[#B89778]/30 flex items-center justify-center">
                  <span className="text-[#B89778] tracking-[3px] text-sm">VELMORA</span>
                </div>
                <div className="text-[#9A8F85] text-xs tracking-[2px]">{product.name}</div>
              </div>
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-3">
              {product.images.map((img, idx) => (
                <div
                  key={idx}
                  className="aspect-square bg-gradient-to-br from-[#F1EDE6] to-[#E8E0D5] flex items-center justify-center border border-[#D9D0C4]"
                >
                  <span className="text-[#9A8F85] text-[10px] tracking-widest">VIEW {idx + 1}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="pt-2">
            <div className="product-name text-2xl md:text-3xl tracking-[0.1em] mb-2">{product.name}</div>
            
            <div className="flex items-center gap-4 mb-6">
              <span className="text-xl font-medium">${product.price}</span>
              <div className="flex items-center gap-1 text-sm">
                <span className="text-[#B89778]">{'★'.repeat(Math.floor(product.rating))}</span>
                <span className="text-[#6B6058]">({product.reviewCount})</span>
              </div>
            </div>

            <p className="text-[#6B6058] mb-8 leading-relaxed">{product.description}</p>

            {/* Variant Selector */}
            <div className="mb-6">
              <div className="text-xs tracking-[0.1em] uppercase text-[#6B6058] mb-3">Tone</div>
              <div className="flex gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant.id}
                    onClick={() => setSelectedVariant(variant)}
                    className={`variant-pill ${selectedVariant.id === variant.id ? 'active' : ''}`}
                  >
                    {variant.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <div className="text-xs tracking-[0.1em] uppercase text-[#6B6058] mb-3">Quantity</div>
              <div className="qty-selector inline-flex">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="qty-btn"
                  aria-label="Decrease"
                >
                  −
                </button>
                <span className="qty-value">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="qty-btn"
                  aria-label="Increase"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="btn btn-primary w-full mb-4"
            >
              Add to Cart
            </button>

            <p className="text-center text-xs text-[#6B6058] tracking-[0.05em]">
              Ships in 1-2 business days • 30-day returns
            </p>

            {/* Accordions */}
            <div className="mt-10 border-t border-[#D9D0C4]">
              {accordions.map((acc) => (
                <div key={acc.key}>
                  <button
                    onClick={() => toggleAccordion(acc.key)}
                    className="accordion-header w-full text-left"
                  >
                    <span>{acc.title}</span>
                    <span className="text-[#B89778]">{openAccordion === acc.key ? '−' : '+'}</span>
                  </button>
                  {openAccordion === acc.key && (
                    <div className="accordion-content">{acc.content}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* You May Also Like */}
        {relatedProducts.length > 0 && (
          <div className="mt-20 pt-10 border-t border-[#D9D0C4]">
            <div className="mb-8">
              <div className="text-xs tracking-[0.15em] uppercase text-[#B89778] mb-2">Curated For You</div>
              <h3 className="text-2xl">You May Also Like</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
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
