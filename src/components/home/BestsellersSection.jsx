import React from 'react';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';

// Import seed products
const bestsellers = [
  {
    id: 1,
    name: "Vivid Aura Jewels",
    price: 42,
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=600&fit=crop",
    hoverImage: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=600&h=600&fit=crop",
    isBestseller: true
  },
  {
    id: 2,
    name: "Majestic Flora Nectar",
    price: 68,
    image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=600&h=600&fit=crop",
    hoverImage: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=600&fit=crop",
    isBestseller: true
  },
  {
    id: 3,
    name: "Golden Sphere Huggies",
    price: 38,
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=600&fit=crop",
    hoverImage: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=600&h=600&fit=crop",
    isBestseller: true
  },
  {
    id: 4,
    name: "Amber Lace Earrings",
    price: 54,
    image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=600&h=600&fit=crop",
    hoverImage: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=600&fit=crop",
    isBestseller: false
  },
  {
    id: 5,
    name: "Royal Heirloom Set",
    price: 95,
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=600&fit=crop",
    hoverImage: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=600&h=600&fit=crop",
    isBestseller: true
  }
];

export default function BestsellersSection() {
  const { addToCart, openCart } = useCart();
  
  const handleAddToCart = (product) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image
    });
    openCart();
  };
  
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="font-serif text-4xl md:text-5xl mb-4">Bestsellers</h2>
        <div className="w-16 h-px bg-velmora-gold mx-auto"></div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {bestsellers.map((product, index) => (
          <div
            key={product.id}
            className="group cursor-pointer fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {/* Product Image with Hover */}
            <div className="relative overflow-hidden bg-velmora-cream aspect-square mb-4">
              <a href={`/product/${product.id}`}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:opacity-0 transition-opacity duration-500"
                />
                <img
                  src={product.hoverImage}
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
              </a>
              
              {/* Quick Add to Cart Button */}
              <button
                onClick={(e) => {
                  e.preventDefault();
                  handleAddToCart(product);
                }}
                className="absolute bottom-4 left-1/2 transform -translate-x-1/2 translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 bg-velmora-black text-velmora-white px-6 py-2 text-sm uppercase tracking-wider hover:bg-velmora-charcoal"
              >
                <span className="flex items-center space-x-2">
                  <ShoppingBag className="w-4 h-4" />
                  <span>Add to Cart</span>
                </span>
              </button>
              
              {/* Bestseller Badge */}
              {product.isBestseller && (
                <div className="absolute top-4 left-4 bg-velmora-gold text-velmora-white px-3 py-1 text-xs uppercase tracking-wider">
                  Bestseller
                </div>
              )}
            </div>
            
            {/* Product Info */}
            <div className="space-y-2">
              <a href={`/product/${product.id}`}>
                <h3 className="product-name text-sm">{product.name}</h3>
              </a>
              <p className="font-medium">${product.price}</p>
            </div>
          </div>
        ))}
      </div>
      
      {/* View All Link */}
      <div className="text-center mt-12">
        <a
          href="/shop"
          className="btn-secondary inline-block"
        >
          View All Products
        </a>
      </div>
    </section>
  );
}
