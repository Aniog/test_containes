import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { ChevronLeft, ChevronRight, Minus, Plus } from 'lucide-react';
import products from '../data/products';

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(product?.variants[0] || 'Gold');
  const [quantity, setQuantity] = useState(1);
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(true);
  const [isMaterialsOpen, setIsMaterialsOpen] = useState(false);
  const [isShippingOpen, setIsShippingOpen] = useState(false);
  const { addItem } = useCart();

  if (!product) {
    return (
      <div className="container-premium py-20 text-center">
        <h2 className="font-serif text-3xl mb-4">Product Not Found</h2>
        <Link to="/shop" className="text-[#C9A96E] hover:underline">
          Return to Shop
        </Link>
      </div>
    );
  }

  const relatedProducts = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

  return (
    <div className="container-premium py-12">
      {/* Breadcrumb */}
      <div className="mb-8 text-sm text-[#6B6B6B]">
        <Link to="/" className="hover:text-[#C9A96E]">Home</Link>
        <span className="mx-2">/</span>
        <Link to="/shop" className="hover:text-[#C9A96E]">Shop</Link>
        <span className="mx-2">/</span>
        <span className="text-[#1A1A1A]">{product.name}</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left: Image Gallery */}
        <div>
          {/* Main Image */}
          <div className="relative aspect-[3/4] overflow-hidden bg-[#F5F0EB]">
            <img
              src={product.images[selectedImage]}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            {product.images.length > 1 && (
              <>
                <button
                  onClick={() => setSelectedImage(selectedImage === 0 ? product.images.length - 1 : selectedImage - 1)}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white p-2 hover:bg-[#F5F0EB] transition-premium"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={() => setSelectedImage(selectedImage === product.images.length - 1 ? 0 : selectedImage + 1)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white p-2 hover:bg-[#F5F0EB] transition-premium"
                >
                  <ChevronRight size={20} />
                </button>
              </>
            )}
          </div>

          {/* Thumbnails */}
          {product.images.length > 1 && (
            <div className="flex gap-4 mt-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 border-2 transition-premium ${
                    selectedImage === index ? 'border-[#C9A96E]' : 'border-transparent'
                  }`}
                >
                  <img src={image} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right: Product Info */}
        <div className="space-y-6">
          <div>
            <h1 className="font-serif text-3xl md:text-4xl tracking-wider uppercase mb-2">
              {product.name}
            </h1>
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex text-[#C9A96E]">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>{i < Math.floor(product.rating) ? '★' : '☆'}</span>
                ))}
              </div>
              <span className="text-sm text-[#6B6B6B]">({product.reviews} reviews)</span>
            </div>
            <p className="text-2xl font-light">${product.price}</p>
          </div>

          <p className="text-[#6B6B6B] leading-relaxed">{product.description}</p>

          {/* Variant Selector */}
          {product.variants && (
            <div>
              <label className="block text-sm font-medium mb-3">Tone</label>
              <div className="flex gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`variant-pill ${
                      selectedVariant === variant ? 'active' : ''
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quantity */}
          <div>
            <label className="block text-sm font-medium mb-3">Quantity</label>
            <div className="quantity-selector inline-flex">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>
                <Minus size={16} />
              </button>
              <input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                min="1"
              />
              <button onClick={() => setQuantity(quantity + 1)}>
                <Plus size={16} />
              </button>
            </div>
          </div>

          {/* Add to Cart */}
          <button
            onClick={() => addItem(product, selectedVariant, quantity)}
            className="btn-primary w-full"
          >
            Add to Cart - ${(product.price * quantity).toFixed(2)}
          </button>

          {/* Accordions */}
          <div className="space-y-4 pt-6 border-t border-[#E5E5E5]">
            {/* Description */}
            <div>
              <button
                onClick={() => setIsDescriptionOpen(!isDescriptionOpen)}
                className="flex items-center justify-between w-full py-3 font-medium"
              >
                <span>Description</span>
                <span className={`transform transition-transform ${isDescriptionOpen ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>
              <div className={`accordion-content ${isDescriptionOpen ? 'open' : ''}`}>
                <p className="pb-4 text-[#6B6B6B] leading-relaxed">
                  {product.description}. Each piece is carefully crafted with attention to detail,
                  using high-quality materials that ensure longevity and timeless elegance.
                  Perfect for everyday wear or special occasions.
                </p>
              </div>
            </div>

            {/* Materials & Care */}
            <div className="border-t border-[#E5E5E5]">
              <button
                onClick={() => setIsMaterialsOpen(!isMaterialsOpen)}
                className="flex items-center justify-between w-full py-3 font-medium"
              >
                <span>Materials & Care</span>
                <span className={`transform transition-transform ${isMaterialsOpen ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>
              <div className={`accordion-content ${isMaterialsOpen ? 'open' : ''}`}>
                <div className="pb-4 text-[#6B6B6B] leading-relaxed space-y-2">
                  <p><strong>Materials:</strong> 18K Gold Plated over brass, hypoallergenic</p>
                  <p><strong>Care:</strong> Avoid contact with water, perfume, and lotions. Store in a cool, dry place.</p>
                  <p><strong>Nickel-free</strong> and safe for sensitive skin.</p>
                </div>
              </div>
            </div>

            {/* Shipping & Returns */}
            <div className="border-t border-[#E5E5E5]">
              <button
                onClick={() => setIsShippingOpen(!isShippingOpen)}
                className="flex items-center justify-between w-full py-3 font-medium"
              >
                <span>Shipping & Returns</span>
                <span className={`transform transition-transform ${isShippingOpen ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>
              <div className={`accordion-content ${isShippingOpen ? 'open' : ''}`}>
                <div className="pb-4 text-[#6B6B6B] leading-relaxed space-y-2">
                  <p><strong>Shipping:</strong> Free worldwide shipping on all orders.</p>
                  <p><strong>Returns:</strong> 30-day hassle-free returns. See our return policy for details.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="mt-20 pt-12 border-t border-[#E5E5E5]">
          <h2 className="font-serif text-3xl mb-8 text-center">You May Also Like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {relatedProducts.map((product) => (
              <div key={product.id} className="group cursor-pointer">
                <Link to={`/product/${product.id}`}>
                  <div className="relative overflow-hidden bg-[#F5F0EB] aspect-[3/4]">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="mt-4 space-y-1">
                    <h3 className="font-serif text-sm tracking-wider uppercase">{product.name}</h3>
                    <p className="text-sm text-[#6B6B6B]">${product.price}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
