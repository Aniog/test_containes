import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext.jsx';

const products = [
  { id: 1, name: "VIVID AURA JEWELS", price: 42, description: "Gold ear cuff with crystal accent", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80", category: "earrings", material: "gold", rating: 4.8, reviews: 124 },
  { id: 2, name: "MAJESTIC FLORA NECTAR", price: 68, description: "Multicolor floral crystal necklace", image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80", category: "necklaces", material: "gold", rating: 4.9, reviews: 89 },
  { id: 3, name: "GOLDEN SPHERE HUGGIES", price: 38, description: "Chunky gold dome huggie earrings", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80", category: "huggies", material: "gold", rating: 4.7, reviews: 156 },
  { id: 4, name: "AMBER LACE EARRINGS", price: 54, description: "Textured gold filigree drop earrings", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80", category: "earrings", material: "gold", rating: 4.6, reviews: 97 },
  { id: 5, name: "ROYAL HEIRLOOM SET", price: 95, description: "Gift-boxed earring + necklace set", image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80", category: "sets", material: "gold", rating: 5.0, reviews: 68 }
];

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const product = products.find(p => p.id === parseInt(id));
  const [quantity, setQuantity] = React.useState(1);
  const [selectedMaterial, setSelectedMaterial] = React.useState('gold');

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="font-['Cormorant_Garamond'] text-4xl mb-4">Product Not Found</h2>
          <button onClick={() => navigate('/shop')} className="text-sm tracking-wider uppercase border-b-2 border-[#C9A96E] pb-1">
            Back to Shop
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <h1 className="font-['Cormorant_Garamond'] text-2xl tracking-[0.2em] uppercase text-[#2C2C2C]">
              Velmora
            </h1>
            <div className="flex items-center space-x-8">
              <a href="/shop" className="text-sm tracking-wider uppercase">Shop</a>
              <a href="/collections" className="text-sm tracking-wider uppercase">Collections</a>
              <a href="/about" className="text-sm tracking-wider uppercase">About</a>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 py-20 mt-20">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="aspect-square bg-[#F5F0EB]">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
          </div>

          {/* Product Info */}
          <div>
            <h1 className="font-['Cormorant_Garamond'] text-4xl mb-4">{product.name}</h1>
            <p className="text-2xl font-['Cormorant_Garamond'] mb-6">${product.price}.00</p>
            
            {/* Rating */}
            <div className="flex items-center mb-6">
              <div className="flex text-[#C9A96E]">
                {'★'.repeat(Math.floor(product.rating))}
              </div>
              <span className="ml-2 text-sm text-gray-600">({product.reviews} reviews)</span>
            </div>

            <p className="text-[#2C2C2C] mb-8">{product.description}</p>

            {/* Variant Selector */}
            <div className="mb-6">
              <label className="block text-sm tracking-wider uppercase mb-2">Material</label>
              <div className="flex gap-2">
                {['gold', 'silver'].map((material) => (
                  <button
                    key={material}
                    onClick={() => setSelectedMaterial(material)}
                    className={`px-4 py-2 text-sm uppercase tracking-wider border ${
                      selectedMaterial === material
                        ? 'border-[#C9A96E] bg-[#C9A96E] text-white'
                        : 'border-gray-300 hover:border-[#C9A96E]'
                    }`}
                  >
                    {material}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <label className="block text-sm tracking-wider uppercase mb-2">Quantity</label>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 border border-gray-300 flex items-center justify-center hover:border-[#C9A96E]"
                >
                  -
                </button>
                <span className="w-10 h-10 flex items-center justify-center border border-gray-300">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 border border-gray-300 flex items-center justify-center hover:border-[#C9A96E]"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button 
              onClick={() => addToCart({ ...product, material: selectedMaterial }, quantity)}
              className="w-full bg-[#2C2C2C] text-white py-3 text-sm tracking-wider uppercase hover:bg-[#C9A96E] transition-colors mb-8"
            >
              Add to Cart - ${product.price * quantity}.00
            </button>

            {/* Accordions */}
            <div className="border-t border-gray-200">
              {['Description', 'Materials & Care', 'Shipping & Returns'].map((section) => (
                <details key={section} className="border-b border-gray-200">
                  <summary className="py-4 text-sm tracking-wider uppercase cursor-pointer hover:text-[#C9A96E]">
                    {section}
                  </summary>
                  <div className="pb-4 text-sm text-gray-600">
                    <p>Information about {section.toLowerCase()} will be displayed here.</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-20">
          <h3 className="font-['Cormorant_Garamond'] text-3xl text-center mb-12">You May Also Like</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {products.filter(p => p.id !== product.id).slice(0, 4).map((related) => (
              <div key={related.id} onClick={() => navigate(`/product/${related.id}`)} className="cursor-pointer">
                <div className="aspect-square bg-[#F5F0EB] mb-4"></div>
                <h4 className="text-sm tracking-wider uppercase">{related.name}</h4>
                <p className="font-['Cormorant_Garamond'] text-lg">${related.price}.00</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
