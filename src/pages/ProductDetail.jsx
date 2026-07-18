import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ShoppingBag } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState(null);
  const { addToCart } = useCart();

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h2 className="font-serif text-3xl mb-4">Product Not Found</h2>
        <Link to="/shop" className="text-velmora-gold hover:underline">
          Return to Shop
        </Link>
      </div>
    );
  }

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 3);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Image Gallery */}
        <div className="space-y-4">
          <div className="aspect-square bg-velmora-cream overflow-hidden">
            <img
              src={product.images[selectedImage]}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex gap-2">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`w-20 h-20 bg-velmora-cream overflow-hidden border-2 ${
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
            <h1 className="font-serif text-3xl md:text-4xl font-light uppercase tracking-wider">
              {product.name}
            </h1>
            <div className="flex items-center gap-2 mt-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
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
          </div>

          <p className="text-2xl font-light">${product.price}</p>

          <p className="text-velmora-warm-gray leading-relaxed">
            {product.description}
          </p>

          {/* Variant Selector */}
          <div className="space-y-2">
            <p className="text-sm uppercase tracking-wider">Material</p>
            <div className="flex gap-2">
              {['Gold', 'Silver'].map((material) => (
                <button
                  key={material}
                  onClick={() => setSelectedVariant(material)}
                  className={`px-6 py-2 border text-sm uppercase tracking-wider transition-colors ${
                    selectedVariant === material
                      ? 'bg-velmora-black text-white border-velmora-black'
                      : 'border-velmora-border hover:border-velmora-black'
                  }`}
                >
                  {material}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="space-y-2">
            <p className="text-sm uppercase tracking-wider">Quantity</p>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="p-2 border border-velmora-border hover:border-velmora-black transition-colors"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="w-12 text-center">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="p-2 border border-velmora-border hover:border-velmora-black transition-colors"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Add to Cart */}
          <button
            onClick={() => addToCart(product, quantity, selectedVariant)}
            className="w-full bg-velmora-black text-white py-4 text-sm uppercase tracking-wider font-medium hover:bg-velmora-charcoal transition-colors duration-300 flex items-center justify-center gap-2"
          >
            <ShoppingBag className="w-5 h-5" />
            Add to Cart
          </button>

          {/* Accordions */}
          <div className="space-y-4 pt-6 border-t border-velmora-border">
            <details className="group">
              <summary className="flex items-center justify-between cursor-pointer py-3">
                <span className="text-sm uppercase tracking-wider">Description</span>
                <span className="transform group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="pt-2 text-sm text-velmora-warm-gray leading-relaxed">
                {product.description} Each piece is crafted with 18K gold plating for lasting beauty and durability.
              </p>
            </details>
            <details className="group">
              <summary className="flex items-center justify-between cursor-pointer py-3">
                <span className="text-sm uppercase tracking-wider">Materials & Care</span>
                <span className="transform group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="pt-2 text-sm text-velmora-warm-gray leading-relaxed space-y-2">
                <p>• 18K Gold Plated</p>
                <p>• Hypoallergenic & Nickel-Free</p>
                <p>• Avoid contact with water and perfumes</p>
                <p>• Store in provided jewelry pouch</p>
              </div>
            </details>
            <details className="group">
              <summary className="flex items-center justify-between cursor-pointer py-3">
                <span className="text-sm uppercase tracking-wider">Shipping & Returns</span>
                <span className="transform group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="pt-2 text-sm text-velmora-warm-gray leading-relaxed space-y-2">
                <p>• Free worldwide shipping on all orders</p>
                <p>• 30-day return policy</p>
                <p>• Ships within 1-2 business days</p>
              </div>
            </details>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="mt-20 pt-12 border-t border-velmora-border">
        <h2 className="font-serif text-3xl font-light mb-8 text-center">You May Also Like</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {relatedProducts.map((related) => (
            <Link key={related.id} to={`/product/${related.id}`} className="group">
              <div className="aspect-square bg-velmora-cream overflow-hidden mb-4">
                <img
                  src={related.images[0]}
                  alt={related.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-sm uppercase tracking-wider font-medium">{related.name}</h3>
              <p className="text-lg font-light mt-1">${related.price}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
