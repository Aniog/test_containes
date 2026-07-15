import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import products from '../data/products';

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const [selectedMaterial, setSelectedMaterial] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="font-serif text-3xl mb-4">Product Not Found</h2>
          <Link to="/shop" className="text-yellow-600 hover:text-yellow-700">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem({
      ...product,
      material: selectedMaterial,
      quantity
    });
    alert('Added to cart!');
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-4">
          <div className="aspect-square bg-gray-100 overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h1 className="font-serif text-4xl mb-2 tracking-wider uppercase">
              {product.name}
            </h1>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className={i < Math.floor(product.rating) ? 'fill-yellow-500 text-yellow-500' : 'text-gray-300'}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-600">({product.reviews} reviews)</span>
            </div>
            <p className="text-3xl font-medium mb-6">${product.price}</p>
          </div>

          <p className="text-gray-600 leading-relaxed">{product.description}</p>

          <div>
            <label className="block text-sm font-medium mb-3 uppercase tracking-wider">
              Material
            </label>
            <div className="flex gap-3">
              {['Gold', 'Silver'].map(material => (
                <button
                  key={material}
                  onClick={() => setSelectedMaterial(material)}
                  className={`px-6 py-2 border transition-colors ${
                    selectedMaterial === material
                      ? 'border-yellow-600 bg-yellow-50 text-yellow-600'
                      : 'border-gray-300 hover:border-gray-400'
                  }`}
                >
                  {material}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-3 uppercase tracking-wider">
              Quantity
            </label>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="p-2 border border-gray-300 hover:border-gray-400 transition-colors"
              >
                <Minus size={18} />
              </button>
              <span className="w-12 text-center text-xl">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="p-2 border border-gray-300 hover:border-gray-400 transition-colors"
              >
                <Plus size={18} />
              </button>
            </div>
          </div>

          <button
            onClick={handleAddToCart}
            className="w-full bg-yellow-600 text-white py-4 hover:bg-yellow-700 transition-colors flex items-center justify-center gap-3 text-lg font-medium"
          >
            <ShoppingBag size={20} />
            Add to Cart
          </button>

          <div className="border-t pt-6 space-y-4">
            <details className="group">
              <summary className="cursor-pointer font-medium uppercase tracking-wider text-sm flex items-center justify-between">
                Description
                <span className="transform group-open:rotate-180 transition-transform">↓</span>
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                {product.description}. Crafted with the finest materials, this piece embodies
                timeless elegance and exceptional quality. Perfect for everyday wear or special occasions.
              </p>
            </details>
            <details className="group">
              <summary className="cursor-pointer font-medium uppercase tracking-wider text-sm flex items-center justify-between">
                Materials & Care
                <span className="transform group-open:rotate-180 transition-transform">↓</span>
              </summary>
              <div className="mt-4 text-gray-600 leading-relaxed space-y-2">
                <p>• 18K Gold Plated or Sterling Silver</p>
                <p>• Hypoallergenic and nickel-free</p>
                <p>• Avoid contact with water, perfume, and chemicals</p>
                <p>• Store in a cool, dry place</p>
              </div>
            </details>
            <details className="group">
              <summary className="cursor-pointer font-medium uppercase tracking-wider text-sm flex items-center justify-between">
                Shipping & Returns
                <span className="transform group-open:rotate-180 transition-transform">↓</span>
              </summary>
              <div className="mt-4 text-gray-600 leading-relaxed space-y-2">
                <p>• Free worldwide shipping on all orders</p>
                <p>• 30-day return policy</p>
                <p>• Ships within 1-2 business days</p>
                <p>• Eco-friendly packaging</p>
              </div>
            </details>
          </div>

          <div className="border-t pt-6">
            <h3 className="font-medium mb-4 uppercase tracking-wider text-sm">You May Also Like</h3>
            <div className="grid grid-cols-3 gap-4">
              {products
                .filter(p => p.id !== product.id)
                .slice(0, 3)
                .map(related => (
                  <Link key={related.id} to={`/product/${related.id}`} className="group">
                    <div className="aspect-square bg-gray-100 overflow-hidden mb-2">
                      <img
                        src={related.image}
                        alt={related.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <p className="text-sm font-medium uppercase tracking-wider">{related.name}</p>
                    <p className="text-sm text-gray-600">${related.price}</p>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
