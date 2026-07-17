import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Star, Minus, Plus, ChevronLeft } from 'lucide-react';
import { products } from '../data/products';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const { addToCart } = useCart();

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="font-serif text-3xl mb-4">Product Not Found</h2>
          <Link to="/shop" className="text-velmora-gold hover:underline">
            Return to Shop
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedVariant);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="min-h-screen py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 text-sm text-velmora-charcoal-light hover:text-velmora-gold mb-8"
        >
          <ChevronLeft size={16} />
          Back to Shop
        </Link>

        {/* Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-square overflow-hidden bg-velmora-warm">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-4">
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
              <h1 className="font-serif text-4xl tracking-widest mb-2">{product.name}</h1>
              <p className="text-2xl font-serif">${product.price}</p>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className={i < Math.floor(product.rating) ? 'text-velmora-gold fill-velmora-gold' : 'text-gray-300'}
                  />
                ))}
              </div>
              <span className="text-sm text-velmora-charcoal-light">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            <p className="text-velmora-charcoal-light leading-relaxed">
              {product.description}
            </p>

            {/* Variant Selector */}
            <div className="space-y-3">
              <label className="text-sm tracking-wide">MATERIAL</label>
              <div className="flex gap-3">
                {['Gold', 'Silver'].map(variant => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-6 py-2 border text-sm tracking-wide transition-colors ${
                      selectedVariant === variant
                        ? 'border-velmora-gold bg-velmora-gold text-white'
                        : 'border-velmora-charcoal hover:border-velmora-gold'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="space-y-3">
              <label className="text-sm tracking-wide">QUANTITY</label>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 border border-velmora-charcoal hover:border-velmora-gold"
                >
                  <Minus size={16} />
                </button>
                <span className="w-12 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 border border-velmora-charcoal hover:border-velmora-gold"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className={`w-full py-4 tracking-wider text-sm transition-all duration-300 ${
                isAdded
                  ? 'bg-green-600 text-white'
                  : 'bg-velmora-charcoal text-white hover:bg-velmora-gold'
              }`}
            >
              {isAdded ? '✓ ADDED TO CART' : 'ADD TO CART'}
            </button>

            {/* Accordions */}
            <div className="space-y-4 pt-6 border-t">
              <details className="group">
                <summary className="flex items-center justify-between cursor-pointer py-3">
                  <span className="font-serif text-lg">Description</span>
                  <span className="transform group-open:rotate-180 transition-transform">↓</span>
                </summary>
                <p className="pt-3 text-velmora-charcoal-light leading-relaxed">
                  Each Velmora piece is crafted with meticulous attention to detail, using premium
                  18K gold plated materials that are hypoallergenic and designed for everyday wear.
                  Our demi-fine jewelry bridges the gap between costume and fine jewelry, offering
                  luxury quality at an accessible price point.
                </p>
              </details>

              <details className="group">
                <summary className="flex items-center justify-between cursor-pointer py-3 border-t">
                  <span className="font-serif text-lg">Materials & Care</span>
                  <span className="transform group-open:rotate-180 transition-transform">↓</span>
                </summary>
                <div className="pt-3 text-velmora-charcoal-light leading-relaxed space-y-2">
                  <p><strong>Materials:</strong> 18K Gold Plated over brass, hypoallergenic</p>
                  <p><strong>Care:</strong> Avoid contact with water, perfumes, and lotions. Store in a cool, dry place. Clean gently with a soft cloth.</p>
                </div>
              </details>

              <details className="group">
                <summary className="flex items-center justify-between cursor-pointer py-3 border-t">
                  <span className="font-serif text-lg">Shipping & Returns</span>
                  <span className="transform group-open:rotate-180 transition-transform">↓</span>
                </summary>
                <div className="pt-3 text-velmora-charcoal-light leading-relaxed space-y-2">
                  <p><strong>Shipping:</strong> Free worldwide shipping on all orders. Delivery within 5-7 business days.</p>
                  <p><strong>Returns:</strong> 30-day hassle-free returns. Items must be unworn and in original packaging.</p>
                </div>
              </details>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="border-t pt-16">
            <h2 className="font-serif text-3xl mb-8 text-center">You May Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map(related => (
                <Link key={related.id} to={`/product/${related.id}`} className="group">
                  <div className="aspect-square overflow-hidden bg-velmora-warm mb-4">
                    <img
                      src={related.images[0]}
                      alt={related.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="font-serif text-sm tracking-widest">{related.name}</h3>
                  <p className="text-velmora-charcoal-light text-sm mt-1">{related.description}</p>
                  <p className="font-serif text-lg mt-2">${related.price}</p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;