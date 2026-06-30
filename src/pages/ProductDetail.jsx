import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import products from '../data/products';

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const [selectedMaterial, setSelectedMaterial] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const { addToCart } = useCart();

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="font-serif text-3xl mb-4">Product Not Found</h2>
          <Link to="/shop" className="btn-primary">Back to Shop</Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedMaterial);
  };

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left - Image Gallery */}
          <div>
            <div className="aspect-square bg-card mb-4 overflow-hidden">
              <img
                src={product.images[selectedImageIndex]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex space-x-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImageIndex(index)}
                  className={`w-20 h-20 border-2 overflow-hidden ${
                    selectedImageIndex === index ? 'border-accent' : 'border-transparent'
                  }`}
                >
                  <img src={image} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Right - Product Info */}
          <div>
            <h1 className="product-name text-3xl md:text-4xl mb-4 text-foreground">
              {product.name}
            </h1>

            <div className="flex items-center space-x-2 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className={i < Math.floor(product.rating) ? 'fill-accent text-accent' : 'text-muted/30'}
                  />
                ))}
              </div>
              <span className="text-sm text-muted">({product.reviews} reviews)</span>
            </div>

            <p className="text-2xl font-medium text-foreground mb-6">
              ${product.price}
            </p>

            <p className="text-muted leading-relaxed mb-8">
              {product.description}. Crafted with the finest materials, this piece embodies 
              quiet luxury and timeless elegance. Perfect for both everyday wear and special occasions.
            </p>

            {/* Material Selector */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-foreground mb-3">Material</label>
              <div className="flex space-x-3">
                {['Gold', 'Silver'].map((material) => (
                  <button
                    key={material}
                    onClick={() => setSelectedMaterial(material)}
                    className={`px-6 py-2 border transition-all duration-300 ${
                      selectedMaterial === material
                        ? 'border-accent bg-accent text-white'
                        : 'border-border/50 hover:border-accent'
                    }`}
                  >
                    {material}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-foreground mb-3">Quantity</label>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 border border-border/50 hover:border-accent transition-colors"
                >
                  <Minus size={16} />
                </button>
                <span className="w-12 text-center font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 border border-border/50 hover:border-accent transition-colors"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="btn-primary w-full flex items-center justify-center space-x-2 mb-8"
            >
              <ShoppingBag size={20} />
              <span>Add to Cart</span>
            </button>

            {/* Accordions */}
            <div className="space-y-4">
              <details className="border-b border-border/30 pb-4">
                <summary className="cursor-pointer font-medium text-foreground hover:text-accent transition-colors">
                  Description
                </summary>
                <p className="mt-4 text-muted leading-relaxed">
                  Each Velmora piece is thoughtfully designed and crafted with attention to detail. 
                  Our demi-fine jewelry uses 18k gold plating over high-quality base metals, 
                  ensuring durability and a luxurious finish that lasts.
                </p>
              </details>

              <details className="border-b border-border/30 pb-4">
                <summary className="cursor-pointer font-medium text-foreground hover:text-accent transition-colors">
                  Materials & Care
                </summary>
                <div className="mt-4 text-muted leading-relaxed space-y-2">
                  <p><strong>Materials:</strong> 18k Gold Plated, Hypoallergenic</p>
                  <p><strong>Care:</strong> Avoid contact with water, perfumes, and lotions. 
                  Store in a cool, dry place. Clean gently with a soft cloth.</p>
                </div>
              </details>

              <details className="border-b border-border/30 pb-4">
                <summary className="cursor-pointer font-medium text-foreground hover:text-accent transition-colors">
                  Shipping & Returns
                </summary>
                <div className="mt-4 text-muted leading-relaxed space-y-2">
                  <p><strong>Shipping:</strong> Free worldwide shipping on all orders.</p>
                  <p><strong>Returns:</strong> 30-day hassle-free returns. Item must be in original condition.</p>
                </div>
              </details>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-20">
          <h2 className="font-serif text-3xl text-center mb-12 text-foreground">
            You May Also Like
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <div key={relatedProduct.id} className="product-card">
                <Link to={`/product/${relatedProduct.id}`}>
                  <div className="aspect-square bg-card overflow-hidden">
                    <img
                      src={relatedProduct.images[0]}
                      alt={relatedProduct.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="product-name text-lg mb-2">{relatedProduct.name}</h3>
                    <p className="text-foreground font-medium">${relatedProduct.price}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
