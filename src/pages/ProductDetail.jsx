import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronLeft } from 'lucide-react';
import { getProductBySlug, getRelatedProducts } from '../data/products';
import { formatPrice } from '../lib/utils';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';

function ProductDetail() {
  const { slug } = useParams();
  const product = getProductBySlug(slug);
  const { addToCart } = useCart();

  const [selectedVariant, setSelectedVariant] = useState(product?.variants?.[0] || { id: 'gold', label: 'Gold Tone' });
  const [quantity, setQuantity] = useState(1);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [openAccordion, setOpenAccordion] = useState('description');

  if (!product) {
    return (
      <div className="pt-20 min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <p className="text-muted mb-4">Product not found.</p>
          <Link to="/shop" className="text-gold-600 hover:text-gold-700">Back to shop →</Link>
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

  const images = product.images.length > 0 ? product.images : ["https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80"];

  return (
    <div className="pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Breadcrumb */}
        <div className="py-6">
          <Link to="/shop" className="inline-flex items-center text-sm text-muted hover:text-gold-600">
            <ChevronLeft size={16} className="mr-1" /> Back to Collection
          </Link>
        </div>

        <div className="grid lg:grid-cols-2 gap-x-12 gap-y-10">
          {/* IMAGE GALLERY */}
          <div>
            {/* Main Image */}
            <div className="aspect-[4/3.6] bg-base-100 rounded-lg overflow-hidden mb-3">
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
                    className={`w-20 h-20 rounded overflow-hidden border-2 transition-all ${selectedImageIndex === idx ? 'border-gold-600' : 'border-transparent opacity-70 hover:opacity-100'}`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* PRODUCT INFO */}
          <div className="lg:pt-2">
            <div className="product-name text-3xl md:text-4xl tracking-[0.06em] leading-tight mb-2">
              {product.name}
            </div>

            <div className="flex items-center gap-3 mb-4">
              <div className="text-2xl font-medium tracking-tight">{formatPrice(product.price)}</div>
              <div className="flex items-center gap-1 text-gold-600">
                {Array.from({ length: Math.floor(product.rating) }).map((_, i) => (
                  <Star key={i} size={15} fill="currentColor" />
                ))}
                <span className="text-xs text-muted ml-1.5">({product.reviewCount})</span>
              </div>
            </div>

            <p className="text-muted leading-relaxed mb-6 pr-4">
              {product.shortDescription}. {product.description.split('.')[0]}.
            </p>

            {/* Variant Selector */}
            <div className="mb-6">
              <div className="text-xs tracking-[0.1em] text-muted mb-2">FINISH</div>
              <div className="flex gap-2">
                {product.variants.map((variant) => (
                  <button
                    key={variant.id}
                    onClick={() => setSelectedVariant(variant)}
                    disabled={!variant.available}
                    className={`variant-pill px-5 py-2 text-sm rounded-full ${selectedVariant.id === variant.id ? 'active' : ''} ${!variant.available ? 'opacity-40 cursor-not-allowed' : ''}`}
                  >
                    {variant.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <div className="text-xs tracking-[0.1em] text-muted mb-2">QUANTITY</div>
              <div className="flex items-center border border-gold-400 rounded w-fit">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2 text-lg hover:bg-base-100"
                >
                  −
                </button>
                <span className="px-5 py-2 tabular-nums border-x border-gold-400">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2 text-lg hover:bg-base-100"
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
            <p className="text-center text-xs text-muted tracking-wide">Free shipping • 30-day returns</p>

            {/* Accordions */}
            <div className="mt-10 space-y-px border-t border-gold-400">
              {/* Description */}
              <div>
                <button 
                  onClick={() => toggleAccordion('description')}
                  className="w-full flex justify-between items-center py-4 text-left text-sm tracking-[0.08em] border-b border-gold-400"
                >
                  DESCRIPTION
                  <span className="text-gold-600">{openAccordion === 'description' ? '−' : '+'}</span>
                </button>
                <div className={`accordion-content text-sm text-muted leading-relaxed ${openAccordion === 'description' ? 'open' : ''}`}>
                  <div className="py-4 pr-4">{product.description}</div>
                </div>
              </div>

              {/* Materials & Care */}
              <div>
                <button 
                  onClick={() => toggleAccordion('materials')}
                  className="w-full flex justify-between items-center py-4 text-left text-sm tracking-[0.08em] border-b border-gold-400"
                >
                  MATERIALS & CARE
                  <span className="text-gold-600">{openAccordion === 'materials' ? '−' : '+'}</span>
                </button>
                <div className={`accordion-content text-sm text-muted leading-relaxed ${openAccordion === 'materials' ? 'open' : ''}`}>
                  <div className="py-4 pr-4 space-y-2">
                    <p>• 18K gold plating over hypoallergenic brass</p>
                    <p>• Cubic zirconia crystal accents (where applicable)</p>
                    <p>• Wipe gently with a soft, dry cloth after wear</p>
                    <p>• Avoid contact with perfumes, lotions, and harsh chemicals</p>
                    <p>• Store in the provided pouch to prevent tarnishing</p>
                  </div>
                </div>
              </div>

              {/* Shipping & Returns */}
              <div>
                <button 
                  onClick={() => toggleAccordion('shipping')}
                  className="w-full flex justify-between items-center py-4 text-left text-sm tracking-[0.08em] border-b border-gold-400"
                >
                  SHIPPING & RETURNS
                  <span className="text-gold-600">{openAccordion === 'shipping' ? '−' : '+'}</span>
                </button>
                <div className={`accordion-content text-sm text-muted leading-relaxed ${openAccordion === 'shipping' ? 'open' : ''}`}>
                  <div className="py-4 pr-4 space-y-2">
                    <p>• Free worldwide shipping on all orders</p>
                    <p>• Ships from New York within 1–2 business days</p>
                    <p>• 30-day returns for unworn items in original packaging</p>
                    <p>• International duties and taxes may apply</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* YOU MAY ALSO LIKE */}
        {relatedProducts.length > 0 && (
          <div className="mt-16 pt-10 border-t border-gold-400">
            <div className="flex items-end justify-between mb-6">
              <h3 className="font-serif text-2xl tracking-[0.02em]">You May Also Like</h3>
              <Link to="/shop" className="text-sm text-muted hover:text-gold-600 hidden sm:block">VIEW ALL →</Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} showQuickAdd />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductDetail;