import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { Star, Plus, Minus, ChevronRight } from 'lucide-react';
import products from '../../data/products';

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const { addToCart } = useCart();

  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(true);
  const [isMaterialsOpen, setIsMaterialsOpen] = useState(false);
  const [isShippingOpen, setIsShippingOpen] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="font-serif text-3xl mb-4">Product Not Found</h2>
          <Link to="/shop" className="text-velmora-gold hover:underline">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen pt-20">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center gap-2 text-sm text-velmora-warm-gray">
          <Link to="/" className="hover:text-velmora-gold">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <Link to="/shop" className="hover:text-velmora-gold">Shop</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-velmora-charcoal">{product.name}</span>
        </div>
      </div>

      {/* Product Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left - Image Gallery */}
          <div>
            {/* Main Image */}
            <div className="aspect-square bg-velmora-light-gray mb-4">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnails */}
            <div className="flex gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 bg-velmora-light-gray border-2 transition-colors ${
                    selectedImage === index
                      ? 'border-velmora-gold'
                      : 'border-transparent'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right - Product Info */}
          <div>
            <h1 className="font-serif text-3xl uppercase tracking-wider mb-4">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating)
                        ? 'fill-velmora-gold text-velmora-gold'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-velmora-warm-gray">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="text-2xl text-velmora-gold font-medium mb-6">
              ${product.price}
            </p>

            {/* Description */}
            <p className="text-velmora-charcoal mb-8 leading-relaxed">
              {product.details}
            </p>

            {/* Quantity */}
            <div className="mb-8">
              <label className="block text-sm text-velmora-warm-gray mb-3">
                Quantity
              </label>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 border border-velmora-border flex items-center justify-center hover:border-velmora-gold transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-12 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 border border-velmora-border flex items-center justify-center hover:border-velmora-gold transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={() => {
                for (let i = 0; i < quantity; i++) {
                  addToCart(product);
                }
              }}
              className="w-full bg-velmora-black text-white py-4 text-sm tracking-widest hover:bg-velmora-charcoal transition-colors mb-8"
            >
              ADD TO CART — ${(product.price * quantity).toFixed(2)}
            </button>

            {/* Accordions */}
            <div className="border-t border-velmora-border">
              {/* Description Accordion */}
              <div className="border-b border-velmora-border">
                <button
                  onClick={() => setIsDescriptionOpen(!isDescriptionOpen)}
                  className="w-full flex items-center justify-between py-4 text-left"
                >
                  <span className="font-medium text-sm uppercase tracking-wider">
                    Description
                  </span>
                  <span className="text-velmora-gold">
                    {isDescriptionOpen ? '−' : '+'}
                  </span>
                </button>
                {isDescriptionOpen && (
                  <div className="pb-4">
                    <p className="text-sm text-velmora-warm-gray leading-relaxed">
                      {product.details}
                    </p>
                  </div>
                )}
              </div>

              {/* Materials Accordion */}
              <div className="border-b border-velmora-border">
                <button
                  onClick={() => setIsMaterialsOpen(!isMaterialsOpen)}
                  className="w-full flex items-center justify-between py-4 text-left"
                >
                  <span className="font-medium text-sm uppercase tracking-wider">
                    Materials & Care
                  </span>
                  <span className="text-velmora-gold">
                    {isMaterialsOpen ? '−' : '+'}
                  </span>
                </button>
                {isMaterialsOpen && (
                  <div className="pb-4">
                    <p className="text-sm text-velmora-warm-gray leading-relaxed">
                      {product.materials}
                    </p>
                    <p className="text-sm text-velmora-warm-gray leading-relaxed mt-2">
                      To care for your Velmora jewelry, avoid contact with water, perfume, and cosmetics. 
                      Store in a cool, dry place when not wearing.
                    </p>
                  </div>
                )}
              </div>

              {/* Shipping Accordion */}
              <div className="border-b border-velmora-border">
                <button
                  onClick={() => setIsShippingOpen(!isShippingOpen)}
                  className="w-full flex items-center justify-between py-4 text-left"
                >
                  <span className="font-medium text-sm uppercase tracking-wider">
                    Shipping & Returns
                  </span>
                  <span className="text-velmora-gold">
                    {isShippingOpen ? '−' : '+'}
                  </span>
                </button>
                {isShippingOpen && (
                  <div className="pb-4">
                    <p className="text-sm text-velmora-warm-gray leading-relaxed">
                      Free worldwide shipping on all orders. 30-day return policy for unworn items in original packaging.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl mb-4">You May Also Like</h2>
            <div className="w-16 h-px bg-velmora-gold mx-auto" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedProducts.map((related) => (
              <Link
                key={related.id}
                to={`/product/${related.id}`}
                className="group block"
              >
                <div className="aspect-square bg-velmora-light-gray mb-4 overflow-hidden">
                  <img
                    src={related.images[0]}
                    alt={related.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <h3 className="font-serif text-sm uppercase tracking-wider mb-2">
                  {related.name}
                </h3>
                <p className="text-velmora-gold font-medium">${related.price}</p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
