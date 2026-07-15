import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    description: 'Gold ear cuff with crystal accent',
    price: 42,
    category: 'Earrings',
    imgId: 'vivid-aura-img',
    hoverImgId: 'vivid-aura-hover-img'
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    description: 'Multicolor floral crystal necklace',
    price: 68,
    category: 'Necklaces',
    imgId: 'majestic-flora-img',
    hoverImgId: 'majestic-flora-hover-img'
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    description: 'Chunky gold dome huggie earrings',
    price: 38,
    category: 'Huggies',
    imgId: 'golden-sphere-img',
    hoverImgId: 'golden-sphere-hover-img'
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    description: 'Textured gold filigree drop earrings',
    price: 54,
    category: 'Earrings',
    imgId: 'amber-lace-img',
    hoverImgId: 'amber-lace-hover-img'
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    description: 'Gift-boxed earring + necklace set',
    price: 95,
    category: 'Sets',
    imgId: 'royal-heirloom-img',
    hoverImgId: 'royal-heirloom-hover-img'
  }
];

const ProductCard = ({ product }) => {
  const [hovered, setHovered] = useState(false);
  const { addToCart } = useCart();

  return (
    <div 
      className="group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block relative aspect-[2/3] overflow-hidden bg-zinc-100">
        <img
          data-strk-img-id={product.imgId}
          data-strk-img={`[prod-title-${product.id}] jewelry gold`}
          data-strk-img-ratio="2x3"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2 3'/%3E"
          alt={product.name}
          className={`w-full h-full object-cover transition-opacity duration-700 ${hovered ? 'opacity-0' : 'opacity-100'}`}
        />
        <img
          data-strk-img-id={product.hoverImgId}
          data-strk-img={`[prod-title-${product.id}] jewelry worn on model`}
          data-strk-img-ratio="2x3"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2 3'/%3E"
          alt={`${product.name} hover`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${hovered ? 'opacity-100' : 'opacity-0'}`}
        />
        
        <button
          onClick={(e) => {
            e.preventDefault();
            addToCart(product);
          }}
          className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm text-primary py-3 uppercase tracking-widest text-[10px] font-medium translate-y-12 group-hover:translate-y-0 transition-transform duration-500 flex items-center justify-center gap-2 hover:bg-white"
        >
          <ShoppingBag size={14} /> Quick Add
        </button>
      </Link>
      
      <div className="mt-4 text-center">
        <Link to={`/product/${product.id}`}>
          <h3 id={`prod-title-${product.id}`} className="text-sm font-serif tracking-widest uppercase hover:text-accent transition-colors">
            {product.name}
          </h3>
        </Link>
        <p className="text-zinc-500 text-sm mt-1">${product.price.toFixed(2)}</p>
      </div>
    </div>
  );
};

const Bestsellers = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto" ref={containerRef}>
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl mb-4">Our Bestsellers</h2>
        <div className="w-12 h-[1px] bg-accent mx-auto"></div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      
      <div className="text-center mt-16">
        <Link to="/shop" className="btn-outline">View All Jewelry</Link>
      </div>
    </section>
  );
};

export default Bestsellers;
