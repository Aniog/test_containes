import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import { Star, Minus, Plus, Heart } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="font-serif text-4xl mb-4">Product Not Found</h2>
          <Link to="/shop" className="btn-primary">Back to Shop</Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedVariant);
  };

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Breadcrumb */}
      <div className="py-6">
        <Link to="/shop" className="text-sm uppercase tracking-wider text-gray-600 hover:text-velmora-gold">
          ← Back to Shop
        </Link>
      </div>

      {/* Product Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
        {/* Image Gallery */}
        <div>
          <div className="mb-4 bg-velmora-warm aspect-square overflow-hidden">
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
                className={`w-20 h-20 bg-velmora-warm overflow-hidden border-2 transition-colors ${
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
            <p className="text-gray-600 uppercase tracking-wider text-sm mb-4">{product.category}</p>
            <p className="text-2xl font-serif">${product.price}</p>
          </div>

          {/* Rating */}
          <div className="flex items-center space-x-2">
            <div className="flex text-velmora-gold">
              {'★'.repeat(Math.floor(product.rating))}
            </div>
            <span className="text-sm text-gray-600">({product.reviews} reviews)</span>
          </div>

          {/* Description */}
          <p className="text-gray-700 leading-relaxed">{product.description}</p>

          {/* Variant Selector */}
          <div>
            <label className="text-sm uppercase tracking-wider mb-3 block">Tone</label>
            <div className="flex gap-3">
              {['Gold', 'Silver'].map(variant => (
                <button
                  key={variant}
                  onClick={() => setSelectedVariant(variant)}
                  className={`px-6 py-2 border uppercase tracking-wider text-sm transition-colors ${
                    selectedVariant === variant
                      ? 'bg-velmora-charcoal text-white border-velmora-charcoal'
                      : 'border-gray-300 hover:border-velmora-gold'
                  }`}
                >
                  {variant}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div>
            <label className="text-sm uppercase tracking-wider mb-3 block">Quantity</label>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="p-2 border border-gray-300 hover:border-velmora-gold transition-colors"
              >
                <Minus size={16} />
              </button>
              <span className="w-12 text-center">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="p-2 border border-gray-300 hover:border-velmora-gold transition-colors"
              >
                <Plus size={16} />
              </button>
            </div>
          </div>

          {/* Add to Cart */}
          <div className="flex gap-4">
            <button
              onClick={handleAddToCart}
              className="flex-1 bg-velmora-gold text-white py-3 uppercase tracking-wider hover:bg-velmora-gold-dark transition-colors"
            >
              Add to Cart
            </button>
            <button className="p-3 border border-gray-300 hover:border-velmora-gold transition-colors">
              <Heart size={20} />
            </button>
          </div>

          {/* Accordions */}
          <div className="space-y-4 pt-6 border-t">
            {[
              { title: 'Description', content: product.description },
              { title: 'Materials & Care', content: '18K Gold Plated over brass. Hypoallergenic and nickel-free. Avoid contact with water, perfume, and lotions to maintain plating.' },
              { title: 'Shipping & Returns', content: 'Free worldwide shipping on all orders. 30-day return policy. See our returns page for details.' }
            ].map((accordion) => (
              <details key={accordion.title} className="group">
                <summary className="flex items-center justify-between cursor-pointer py-3 uppercase tracking-wider text-sm hover:text-velmora-gold transition-colors">
                  {accordion.title}
                  <span className="transform group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="pt-3 pb-6 text-gray-700 leading-relaxed">{accordion.content}</p>
              </details>
            ))}
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="border-t pt-12 pb-20">
        <h2 className="font-serif text-3xl text-center mb-12 uppercase tracking-wider">You May Also Like</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {relatedProducts.map(related => (
            <Link key={related.id} to={`/product/${related.id}`} className="group">
              <div className="bg-velmora-warm aspect-square mb-4 overflow-hidden">
                <img
                  src={related.images[0]}
                  alt={related.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="product-name text-sm">{related.name}</h3>
              <p className="text-sm text-gray-600 mt-1">${related.price}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}