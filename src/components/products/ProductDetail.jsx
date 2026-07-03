// Velmora Fine Jewelry - Product Detail Page Component
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp, Check } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { getProductById, getRelatedProducts } from '../../data/products';
import { formatPrice } from '../../lib/utils';
import ProductCard from './ProductCard';

const ProductDetail = () => {
  const { id } = useParams();
  const product = getProductById(id);
  const { addToCart, isLoading } = useCart();
  
  const [selectedVariant, setSelectedVariant] = useState(product?.variants?.[0] || null);
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [openAccordion, setOpenAccordion] = useState('description');
  
  const [addedToCart, setAddedToCart] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen bg-[#FAF8F5] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl mb-4" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
            Product not found
          </h1>
          <Link to="/collections/all" className="btn-primary">
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = getRelatedProducts(product.id, 4);
  const images = [product.image, product.hoverImage || product.image];

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedVariant);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const accordions = [
    {
      id: 'description',
      title: 'Description',
      content: product.description,
    },
    {
      id: 'materials',
      title: 'Materials & Care',
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-medium text-[#1A1A1A] mb-2">Materials</h4>
            <p className="text-[#6B6560]">{product.materials}</p>
          </div>
          <div>
            <h4 className="font-medium text-[#1A1A1A] mb-2">Care Instructions</h4>
            <p className="text-[#6B6560]">{product.care}</p>
          </div>
        </div>
      ),
    },
    {
      id: 'shipping',
      title: 'Shipping & Returns',
      content: product.shipping,
    },
  ];

  return (
    <div className="min-h-screen bg-[#FAF8F5] pt-20 md:pt-24">
      <div className="container-custom py-8 md:py-12">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center gap-2 text-xs uppercase tracking-wider">
            <li>
              <Link to="/" className="text-[#6B6560] hover:text-[#B8860B] transition-colors">
                Home
              </Link>
            </li>
            <li className="text-[#6B6560]">/</li>
            <li>
              <Link to="/collections/all" className="text-[#6B6560] hover:text-[#B8860B] transition-colors">
                Shop
              </Link>
            </li>
            <li className="text-[#6B6560]">/</li>
            <li>
              <Link 
                to={`/collections/${product.category}`} 
                className="text-[#6B6560] hover:text-[#B8860B] transition-colors capitalize"
              >
                {product.category}
              </Link>
            </li>
            <li className="text-[#6B6560]">/</li>
            <li className="text-[#1A1A1A]">{product.name}</li>
          </ol>
        </nav>

        {/* Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Image Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-square bg-[#F5F2EE] overflow-hidden">
              <img
                src={images[activeImage]}
                alt={product.name}
                className="w-full h-full object-cover transition-opacity duration-300"
              />
            </div>
            
            {/* Thumbnails */}
            {images.length > 1 && (
              <div className="flex gap-3">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(idx)}
                    className={`w-20 h-20 bg-[#F5F2EE] overflow-hidden border-2 transition-colors ${
                      activeImage === idx ? 'border-[#B8860B]' : 'border-transparent'
                    }`}
                  >
                    <img
                      src={img}
                      alt={`${product.name} view ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            {/* Badge */}
            {product.badge && (
              <span className="inline-block text-[10px] font-medium uppercase tracking-wider px-3 py-1 bg-[#B8860B] text-white mb-4">
                {product.badge}
              </span>
            )}

            {/* Product Name */}
            <h1
              className="text-2xl md:text-3xl text-[#1A1A1A] font-normal uppercase tracking-[0.1em] mb-2"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            >
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={i < Math.floor(product.rating) ? 'text-[#B8860B] fill-[#B8860B]' : 'text-[#E8E2D9]'}
                    strokeWidth={1.5}
                  />
                ))}
              </div>
              <span className="text-sm text-[#6B6560]">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            {/* Price */}
            <p
              className="text-2xl font-semibold text-[#1A1A1A] mb-6"
              style={{ fontFamily: "'Manrope', sans-serif" }}
            >
              {formatPrice(product.price)}
            </p>

            {/* Short Description */}
            <p
              className="text-[#6B6560] leading-relaxed mb-8"
              style={{ fontFamily: "'Manrope', sans-serif" }}
            >
              {product.shortDescription}
            </p>

            {/* Variant Selector */}
            {product.variants && product.variants.length > 0 && (
              <div className="mb-6">
                <p
                  className="text-xs uppercase tracking-[0.15em] text-[#1A1A1A] mb-3"
                  style={{ fontFamily: "'Manrope', sans-serif" }}
                >
                  Finish: {selectedVariant}
                </p>
                <div className="flex flex-wrap gap-2">
                  {product.variants.map((variant) => (
                    <button
                      key={variant}
                      onClick={() => setSelectedVariant(variant)}
                      className={`px-4 py-2 text-sm border transition-all ${
                        selectedVariant === variant
                          ? 'border-[#B8860B] bg-[#B8860B] text-white'
                          : 'border-[#E8E2D9] text-[#1A1A1A] hover:border-[#1A1A1A]'
                      }`}
                      style={{ fontFamily: "'Manrope', sans-serif" }}
                    >
                      {variant}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity Selector */}
            <div className="mb-6">
              <p
                className="text-xs uppercase tracking-[0.15em] text-[#1A1A1A] mb-3"
                style={{ fontFamily: "'Manrope', sans-serif" }}
              >
                Quantity
              </p>
              <div className="flex items-center border border-[#E8E2D9] w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 hover:bg-[#F5F2EE] transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus size={16} strokeWidth={1.5} />
                </button>
                <span
                  className="w-12 text-center text-[#1A1A1A] font-medium"
                  style={{ fontFamily: "'Manrope', sans-serif" }}
                >
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 hover:bg-[#F5F2EE] transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus size={16} strokeWidth={1.5} />
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              disabled={isLoading || addedToCart}
              className={`w-full py-4 text-sm font-semibold uppercase tracking-widest transition-all duration-300 mb-4 flex items-center justify-center gap-2 ${
                addedToCart
                  ? 'bg-green-600 text-white'
                  : 'bg-[#1A1A1A] text-white hover:bg-[#B8860B]'
              }`}
              style={{ fontFamily: "'Manrope', sans-serif" }}
            >
              {addedToCart ? (
                <>
                  <Check size={18} />
                  Added to Bag
                </>
              ) : isLoading ? (
                'Adding...'
              ) : (
                'Add to Bag'
              )}
            </button>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4 text-xs text-[#6B6560]">
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="#B8860B" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                </svg>
                Free Shipping
              </span>
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="#B8860B" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                </svg>
                30-Day Returns
              </span>
            </div>

            {/* Accordions */}
            <div className="mt-10 border-t border-[#E8E2D9]">
              {accordions.map((accordion) => (
                <div key={accordion.id} className="border-b border-[#E8E2D9]">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === accordion.id ? null : accordion.id)}
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span
                      className="text-sm font-medium uppercase tracking-[0.1em] text-[#1A1A1A]"
                      style={{ fontFamily: "'Manrope', sans-serif" }}
                    >
                      {accordion.title}
                    </span>
                    {openAccordion === accordion.id ? (
                      <ChevronUp size={18} className="text-[#6B6560]" />
                    ) : (
                      <ChevronDown size={18} className="text-[#6B6560]" />
                    )}
                  </button>
                  {openAccordion === accordion.id && (
                    <div
                      className="pb-6 text-sm text-[#6B6560] leading-relaxed"
                      style={{ fontFamily: "'Manrope', sans-serif" }}
                    >
                      {typeof accordion.content === 'string' ? (
                        <p>{accordion.content}</p>
                      ) : (
                        accordion.content
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="mt-20 pt-12 border-t border-[#E8E2D9]">
            <div className="text-center mb-10">
              <h2
                className="text-2xl md:text-3xl text-[#1A1A1A] font-normal"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
              >
                You May Also Love
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((item) => (
                <ProductCard key={item.id} product={item} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
