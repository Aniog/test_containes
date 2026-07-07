import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Plus, Minus, ChevronDown, ChevronUp, Truck, RotateCcw } from 'lucide-react';
import { getProductById, getRelatedProducts } from '../products';
import ProductCard from '../components/ProductCard';
import { useCart } from '../CartContext';

export default function ProductDetail() {
  const { id } = useParams();
  const product = getProductById(id);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(product?.variants[0] || '');
  const [quantity, setQuantity] = useState(1);
  const [expandedAccordion, setExpandedAccordion] = useState(null);
  const { addToCart } = useCart();

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <h2 className="font-serif text-3xl">Product Not Found</h2>
          <Link to="/shop" className="btn-primary inline-block">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = getRelatedProducts(product.id, product.category);

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedVariant);
  };

  const toggleAccordion = (section) => {
    setExpandedAccordion(expandedAccordion === section ? null : section);
  };

  return (
    <div className="min-h-screen bg-velmora-cream pt-20">
      <div className="container-padding py-12">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <div className="flex items-center space-x-2 font-sans text-sm text-velmora-stone">
            <Link to="/" className="hover:text-velmora-gold">Home</Link>
            <span>/</span>
            <Link to="/shop" className="hover:text-velmora-gold">Shop</Link>
            <span>/</span>
            <span className="text-velmora-charcoal">{product.name}</span>
          </div>
        </nav>

        {/* Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-square overflow-hidden">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex space-x-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 overflow-hidden border-2 transition-colors ${
                    selectedImage === index ? 'border-velmora-gold' : 'border-transparent'
                  }`}
                >
                  <img src={image} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="product-name text-3xl mb-2">{product.name}</h1>
              <p className="font-sans text-velmora-stone text-lg">{product.description}</p>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className={i < Math.floor(product.rating) ? 'text-velmora-gold fill-velmora-gold' : 'text-velmora-stone'}
                  />
                ))}
              </div>
              <span className="font-sans text-sm text-velmora-stone">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            <p className="font-serif text-3xl">${product.price}</p>

            {/* Variant Selector */}
            {product.variants.length > 1 && (
              <div className="space-y-3">
                <h3 className="font-sans text-sm font-medium tracking-wide uppercase">Tone</h3>
                <div className="flex space-x-3">
                  {product.variants.map((variant) => (
                    <button
                      key={variant}
                      onClick={() => setSelectedVariant(variant)}
                      className={`px-6 py-2 font-sans text-sm border transition-all duration-300 ${
                        selectedVariant === variant
                          ? 'border-velmora-gold bg-velmora-gold text-white'
                          : 'border-velmora-sand hover:border-velmora-gold'
                      }`}
                    >
                      {variant}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="space-y-3">
              <h3 className="font-sans text-sm font-medium tracking-wide uppercase">Quantity</h3>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 border border-velmora-sand hover:border-velmora-gold transition-colors"
                >
                  <Minus size={16} />
                </button>
                <span className="font-sans text-lg w-12 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 border border-velmora-sand hover:border-velmora-gold transition-colors"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="btn-primary w-full text-center"
            >
              Add to Cart — ${((product.price * quantity)).toFixed(2)}
            </button>

            {/* Trust Badges */}
            <div className="flex items-center space-x-6 pt-4 border-t border-velmora-sand">
              <div className="flex items-center space-x-2">
                <Truck size={18} className="text-velmora-gold" />
                <span className="font-sans text-xs text-velmora-stone">Free Shipping</span>
              </div>
              <div className="flex items-center space-x-2">
                <RotateCcw size={18} className="text-velmora-gold" />
                <span className="font-sans text-xs text-velmora-stone">30-Day Returns</span>
              </div>
            </div>

            {/* Accordions */}
            <div className="space-y-4 pt-6 border-t border-velmora-sand">
              {['Description', 'Materials & Care', 'Shipping & Returns'].map((section) => (
                <div key={section} className="border-b border-velmora-sand pb-4">
                  <button
                    onClick={() => toggleAccordion(section)}
                    className="flex items-center justify-between w-full font-sans text-sm font-medium tracking-wide uppercase hover:text-velmora-gold transition-colors"
                  >
                    {section}
                    {expandedAccordion === section ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </button>
                  {expandedAccordion === section && (
                    <div className="mt-4 font-sans text-sm text-velmora-charcoal-light leading-relaxed">
                      {section === 'Description' && (
                        <p>
                          {product.name} - {product.description}. Crafted with meticulous attention to detail, 
                          this piece embodies the Velmora commitment to quality and timeless elegance. 
                          Perfect for everyday wear or special occasions.
                        </p>
                      )}
                      {section === 'Materials & Care' && (
                        <div className="space-y-2">
                          <p><strong>Materials:</strong> 18K Gold Plated over brass, hypoallergenic</p>
                          <p><strong>Care:</strong> Avoid contact with water, perfume, and lotions. Store in provided pouch when not in use. Clean gently with a soft cloth.</p>
                        </div>
                      )}
                      {section === 'Shipping & Returns' && (
                        <div className="space-y-2">
                          <p><strong>Shipping:</strong> Free worldwide shipping on all orders. 3-5 business days for domestic, 7-14 for international.</p>
                          <p><strong>Returns:</strong> 30-day hassle-free returns. Item must be unworn and in original packaging.</p>
                        </div>
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
          <div>
            <h2 className="font-serif text-3xl mb-8 text-center">You May Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
