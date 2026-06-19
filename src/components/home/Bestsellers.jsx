import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Plus } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function Bestsellers({ products: propProducts }) {
  const { addToCart } = useCart();

  const defaultProducts = [
    {
      id: 1,
      name: 'VIVID AURA JEWELS',
      price: 42,
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9f8195dd?w=600&q=80',
      rating: 4.8,
      reviews: 124,
    },
    {
      id: 2,
      name: 'MAJESTIC FLORA NECTAR',
      price: 68,
      image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=600&q=80',
      rating: 4.9,
      reviews: 89,
    },
    {
      id: 3,
      name: 'GOLDEN SPHERE HUGGIES',
      price: 38,
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9f8195dd?w=600&q=80',
      rating: 4.7,
      reviews: 156,
    },
    {
      id: 4,
      name: 'AMBER LACE EARRINGS',
      price: 54,
      image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=600&q=80',
      rating: 4.6,
      reviews: 97,
    },
    {
      id: 5,
      name: 'ROYAL HEIRLOOM SET',
      price: 95,
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9f8195dd?w=600&q=80',
      rating: 5.0,
      reviews: 68,
    },
  ];

  const displayProducts = propProducts || defaultProducts;

  const handleQuickAdd = (e, product) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    });
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2
          className="text-3xl sm:text-4xl font-light mb-4"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          Best Sellers
        </h2>
        <div className="w-16 h-px bg-velmora-gold mx-auto" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {displayProducts.map((product) => (
          <div key={product.id} className="product-card group cursor-pointer">
            <Link to={`/product/${product.id}`} className="block">
              <div className="relative overflow-hidden mb-4 bg-velmora-warm">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full aspect-square object-cover"
                />

                {/* Quick Add Button */}
                <button
                  onClick={(e) => handleQuickAdd(e, product)}
                  className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-velmora-charcoal px-4 py-2 text-sm tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center space-x-2 hover:bg-velmora-gold hover:text-white"
                >
                  <Plus size={16} />
                  <span>Quick Add</span>
                </button>
              </div>

              <div className="text-center">
                <h3 className="text-sm font-medium tracking-wider uppercase mb-2">
                  {product.name}
                </h3>
                <div className="flex items-center justify-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className={`${
                        i < Math.floor(product.rating)
                          ? 'text-velmora-gold fill-velmora-gold'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                  <span className="text-xs text-gray-500 ml-2">({product.reviews})</span>
                </div>
                <p className="text-base font-medium">${product.price}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
