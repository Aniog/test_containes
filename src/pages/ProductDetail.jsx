import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { getProductById, getRelatedProducts, products } from '../data/products';
import ProductCard from '../components/products/ProductCard';

export default function ProductDetail() {
  const { id } = useParams();
  const product = getProductById(id);
  const relatedProducts = getRelatedProducts(id);
  const { addToCart } = useCart();

  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedMaterial, setSelectedMaterial] = useState('Gold');

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-light font-['Cormorant_Garamond'] mb-4">Product Not Found</h2>
          <Link to="/shop" className="text-velmora-gold hover:underline">
            Return to Shop
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart({ ...product, material: selectedMaterial }, quantity);
  };

  return (
    <div className="min-h-screen py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-velmora-text-light">
          <Link to="/" className="hover:text-velmora-text">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-velmora-text">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-velmora-text">{product.name}</span>
        </nav>

        {/* Product Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-square overflow-hidden bg-velmora-warm-white">
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
                  className={`w-20 h-20 border-2 overflow-hidden ${
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
              <h1 className="text-4xl font-light font-['Cormorant_Garamond'] uppercase tracking-wider mb-2">
                {product.name}
              </h1>
              <p className="text-3xl font-light font-['Cormorant_Garamond']">${product.price}</p>
            </div>

            {/* Rating */}
            <div className="flex items-center space-x-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={i < Math.floor(product.rating) ? 'text-velmora-gold fill-current' : 'text-gray-300'}
                  />
                ))}
              </div>
              <span className="text-sm text-velmora-text-light">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            <p className="text-velmora-text-light leading-relaxed">{product.details}</p>

            {/* Material Selector */}
            <div>
              <label className="text-sm tracking-wider mb-2 block">MATERIAL</label>
              <div className="flex space-x-2">
                {['Gold', 'Silver'].map((material) => (
                  <button
                    key={material}
                    onClick={() => setSelectedMaterial(material)}
                    className={`px-6 py-2 border text-sm tracking-wider ${
                      selectedMaterial === material
                        ? 'bg-velmora-charcoal text-white border-velmora-charcoal'
                        : 'bg-white text-velmora-text border-velmora-border hover:border-velmora-charcoal'
                    }`}
                  >
                    {material}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <label className="text-sm tracking-wider mb-2 block">QUANTITY</label>
              <div className="flex items-center space-x-4">
                <div className="flex items-center border border-velmora-border">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-2 hover:bg-velmora-warm-white transition-colors"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="px-4 py-2 min-w-[3rem] text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-2 hover:bg-velmora-warm-white transition-colors"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="w-full bg-velmora-gold text-white py-4 hover:bg-velmora-gold-dark transition-colors tracking-wider text-sm flex items-center justify-center space-x-2"
            >
              <ShoppingBag size={18} />
              <span>ADD TO CART</span>
            </button>

            {/* Accordions */}
            <div className="space-y-4 pt-6 border-t border-velmora-border">
              <details className="group">
                <summary className="flex items-center justify-between cursor-pointer py-3">
                  <span className="text-sm tracking-wider">DESCRIPTION</span>
                  <span className="group-open:hidden">+</span>
                  <span className="hidden group-open:inline">−</span>
                </summary>
                <p className="text-sm text-velmora-text-light leading-relaxed pb-3">
                  {product.details}
                </p>
              </details>

              <details className="group">
                <summary className="flex items-center justify-between cursor-pointer py-3 border-t border-velmora-border">
                  <span className="text-sm tracking-wider">MATERIALS & CARE</span>
                  <span className="group-open:hidden">+</span>
                  <span className="hidden group-open:inline">−</span>
                </summary>
                <div className="text-sm text-velmora-text-light leading-relaxed pb-3 space-y-2">
                  <p><strong>Materials:</strong> {product.materials}</p>
                  <p><strong>Care:</strong> To maintain the beauty of your Velmora jewelry, avoid contact with water, perfume, and lotions. Store in a cool, dry place when not wearing.</p>
                </div>
              </details>

              <details className="group">
                <summary className="flex items-center justify-between cursor-pointer py-3 border-t border-velmora-border">
                  <span className="text-sm tracking-wider">SHIPPING & RETURNS</span>
                  <span className="group-open:hidden">+</span>
                  <span className="hidden group-open:inline">−</span>
                </summary>
                <div className="text-sm text-velmora-text-light leading-relaxed pb-3 space-y-2">
                  <p>Free worldwide shipping on all orders.</p>
                  <p>30-day hassle-free returns. If you're not completely satisfied, return your order for a full refund.</p>
                </div>
              </details>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-3xl font-light font-['Cormorant_Garamond'] text-center mb-12">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
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
