import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const Bestsellers = () => {
  const { addToCart } = useCart();
  const [hoveredProduct, setHoveredProduct] = useState(null);

  const products = [
    {
      id: 1,
      name: "Vivid Aura Jewels",
      price: 42,
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=600&fit=crop",
      hoverImage: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&h=800&fit=crop",
      rating: 4.8
    },
    {
      id: 2,
      name: "Majestic Flora Nectar",
      price: 68,
      image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=600&h=600&fit=crop",
      hoverImage: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=600&fit=crop",
      rating: 4.9
    },
    {
      id: 3,
      name: "Golden Sphere Huggies",
      price: 38,
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&h=800&fit=crop",
      hoverImage: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=600&fit=crop",
      rating: 4.7
    },
    {
      id: 4,
      name: "Amber Lace Earrings",
      price: 54,
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=600&fit=crop",
      hoverImage: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=600&h=600&fit=crop",
      rating: 4.6
    },
    {
      id: 5,
      name: "Royal Heirloom Set",
      price: 95,
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=600&fit=crop",
      hoverImage: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=600&h=600&fit=crop",
      rating: 5.0
    }
  ];

  const handleAddToCart = (product) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      images: [product.image]
    });
  };

  return (
    <section className="py-20 lg:py-32 px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 
          className="font-serif text-4xl lg:text-5xl mb-4"
          style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300 }}
        >
          Bestsellers
        </h2>
        <div className="w-16 h-px bg-gold mx-auto" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="product-card group cursor-pointer"
            onMouseEnter={() => setHoveredProduct(product.id)}
            onMouseLeave={() => setHoveredProduct(null)}
          >
            <Link to={`/product/${product.id}`}>
              <div className="relative overflow-hidden bg-cream aspect-square">
                <img
                  src={hoveredProduct === product.id ? product.hoverImage : product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                
                {/* Quick Add Button */}
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    handleAddToCart(product);
                  }}
                  className={`absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-charcoal text-white px-6 py-2 text-xs uppercase tracking-wider transition-all duration-300 ${
                    hoveredProduct === product.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                  }`}
                >
                  <ShoppingBag size={14} className="inline-block mr-2" />
                  Add to Cart
                </button>
              </div>

              <div className="p-4 text-center">
                <h3 className="product-name text-sm mb-2">{product.name}</h3>
                <div className="flex items-center justify-center space-x-1 mb-2">
                  <Star size={14} fill="currentColor" className="text-gold" />
                  <span className="text-xs text-charcoal/60">{product.rating}</span>
                </div>
                <p className="text-sm font-medium">${product.price}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Bestsellers;
