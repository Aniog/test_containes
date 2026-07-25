import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, Heart, Truck, RefreshCw } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import products from '../../data/products';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const { addToCart } = useCart();
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);
  
  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="font-serif text-3xl mb-4">Product Not Found</h2>
          <Link to="/shop" className="text-accent hover:underline">
            Return to Shop
          </Link>
        </div>
      </div>
    );
  }
  
  const handleAddToCart = () => {
    addToCart({ ...product, quantity });
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };
  
  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <nav className="text-sm text-gray-500">
          <Link to="/" className="hover:text-gray-900">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-gray-900">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">{product.name}</span>
        </nav>
      </div>
      
      {/* Product Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left - Image Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-square overflow-hidden bg-cream">
              <img 
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Thumbnail Images */}
            <div className="flex gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 overflow-hidden border-2 transition-colors ${
                    selectedImage === index ? 'border-accent' : 'border-transparent'
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
          <div className="space-y-6">
            {/* Product Name */}
            <h1 className="product-name text-3xl font-semibold">
              {product.name}
            </h1>
            
            {/* Price */}
            <p className="text-2xl font-medium text-gray-900">
              ${product.price}
            </p>
            
            {/* Rating */}
            <div className="flex items-center space-x-2">
              <div className="flex text-accent">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={18} 
                    fill={i < Math.floor(product.rating) ? 'currentColor' : 'none'}
                    className={i < Math.floor(product.rating) ? '' : 'text-gray-300'}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-500">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>
            
            {/* Description */}
            <p className="text-gray-600 leading-relaxed">
              {product.description}
            </p>
            
            {/* Material */}
            <div className="border-t border-b py-4">
              <p className="text-sm text-gray-500 mb-1">Material</p>
              <p className="font-medium">{product.material}</p>
            </div>
            
            {/* Quantity */}
            <div className="space-y-2">
              <label className="text-sm text-gray-500">Quantity</label>
              <div className="flex items-center space-x-4">
                <div className="flex items-center border border-gray-300">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-2 hover:bg-gray-100 transition-colors"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="px-6 py-2 border-x">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-2 hover:bg-gray-100 transition-colors"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>
            </div>
            
            {/* Add to Cart Button */}
            <button 
              onClick={handleAddToCart}
              className={`w-full py-4 font-medium tracking-wide uppercase transition-all ${
                isAdded 
                  ? 'bg-green-600 text-white' 
                  : 'btn-accent'
              }`}
            >
              {isAdded ? 'Added to Cart!' : 'Add to Cart'}
            </button>
            
            {/* Secondary Actions */}
            <div className="flex items-center space-x-6">
              <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors">
                <Heart size={20} />
                <span className="text-sm">Add to Wishlist</span>
              </button>
            </div>
            
            {/* Shipping Info */}
            <div className="space-y-3 pt-6 border-t">
              <div className="flex items-center space-x-3 text-sm">
                <Truck size={18} className="text-gray-400" />
                <span>Free shipping on orders over $50</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <RefreshCw size={18} className="text-gray-400" />
                <span>30-day hassle-free returns</span>
              </div>
            </div>
            
            {/* Accordions */}
            <div className="space-y-4 pt-6">
              <details className="border-b pb-4">
                <summary className="font-medium cursor-pointer hover:text-accent transition-colors">
                  Description
                </summary>
                <p className="mt-4 text-sm text-gray-600 leading-relaxed">
                  {product.description} Each piece is carefully crafted with attention to detail, 
                  using premium 18K gold plating that maintains its luster over time. Our hypoallergenic 
                  materials ensure comfort for sensitive skin.
                </p>
              </details>
              
              <details className="border-b pb-4">
                <summary className="font-medium cursor-pointer hover:text-accent transition-colors">
                  Materials & Care
                </summary>
                <div className="mt-4 text-sm text-gray-600 leading-relaxed space-y-2">
                  <p><strong>Materials:</strong> 18K Gold Plated over brass, hypoallergenic</p>
                  <p><strong>Care:</strong> Avoid contact with water, perfumes, and lotions. Store in a cool, dry place. Clean gently with a soft cloth.</p>
                </div>
              </details>
              
              <details className="border-b pb-4">
                <summary className="font-medium cursor-pointer hover:text-accent transition-colors">
                  Shipping & Returns
                </summary>
                <div className="mt-4 text-sm text-gray-600 leading-relaxed space-y-2">
                  <p><strong>Shipping:</strong> Free worldwide shipping on orders over $50. Standard delivery 3-7 business days.</p>
                  <p><strong>Returns:</strong> 30-day return policy. Items must be unworn and in original packaging.</p>
                </div>
              </details>
            </div>
          </div>
        </div>
      </div>
      
      {/* Related Products */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="font-serif text-3xl font-light text-center mb-12">
          You May Also Like
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products
            .filter(p => p.id !== product.id)
            .slice(0, 4)
            .map(relatedProduct => (
              <Link 
                key={relatedProduct.id}
                to={`/product/${relatedProduct.id}`}
                className="group"
              >
                <div className="aspect-square overflow-hidden bg-cream mb-4">
                  <img 
                    src={relatedProduct.images[0]}
                    alt={relatedProduct.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="product-name text-sm mb-2">{relatedProduct.name}</h3>
                <p className="text-gray-900 font-medium">${relatedProduct.price}</p>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
