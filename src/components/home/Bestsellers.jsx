import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Eye } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { cn } from '@/lib/utils';

export const products = [
  {
    id: '1',
    name: 'Vivid Aura Jewels',
    description: 'Gold ear cuff with crystal accent',
    price: 42,
    category: 'Earrings',
    imgId: 'vivid-aura-1',
    imgId2: 'vivid-aura-2',
    imgIdPdp0: 'vivid-aura-pdp-0',
    imgIdPdp1: 'vivid-aura-pdp-1',
    imgIdPdp2: 'vivid-aura-pdp-2',
    imgIdCart: 'vivid-aura-cart',
    descId: 'vivid-aura-desc',
    nameId: 'vivid-aura-name'
  },
  {
    id: '2',
    name: 'Majestic Flora Nectar',
    description: 'Multicolor floral crystal necklace',
    price: 68,
    category: 'Necklaces',
    imgId: 'majestic-flora-1',
    imgId2: 'majestic-flora-2',
    imgIdPdp0: 'majestic-flora-pdp-0',
    imgIdPdp1: 'majestic-flora-pdp-1',
    imgIdPdp2: 'majestic-flora-pdp-2',
    imgIdCart: 'majestic-flora-cart',
    descId: 'majestic-flora-desc',
    nameId: 'majestic-flora-name'
  },
  {
    id: '3',
    name: 'Golden Sphere Huggies',
    description: 'Chunky gold dome huggie earrings',
    price: 38,
    category: 'Huggies',
    imgId: 'golden-sphere-1',
    imgId2: 'golden-sphere-2',
    imgIdPdp0: 'golden-sphere-pdp-0',
    imgIdPdp1: 'golden-sphere-pdp-1',
    imgIdPdp2: 'golden-sphere-pdp-2',
    imgIdCart: 'golden-sphere-cart',
    descId: 'golden-sphere-desc',
    nameId: 'golden-sphere-name'
  },
  {
    id: '4',
    name: 'Amber Lace Earrings',
    description: 'Textured gold filigree drop earrings',
    price: 54,
    category: 'Earrings',
    imgId: 'amber-lace-1',
    imgId2: 'amber-lace-2',
    imgIdPdp0: 'amber-lace-pdp-0',
    imgIdPdp1: 'amber-lace-pdp-1',
    imgIdPdp2: 'amber-lace-pdp-2',
    imgIdCart: 'amber-lace-cart',
    descId: 'amber-lace-desc',
    nameId: 'amber-lace-name'
  },
  {
    id: '5',
    name: 'Royal Heirloom Set',
    description: 'Gift-boxed earring + necklace set',
    price: 95,
    category: 'Sets',
    imgId: 'royal-heirloom-1',
    imgId2: 'royal-heirloom-2',
    imgIdPdp0: 'royal-heirloom-pdp-0',
    imgIdPdp1: 'royal-heirloom-pdp-1',
    imgIdPdp2: 'royal-heirloom-pdp-2',
    imgIdCart: 'royal-heirloom-cart',
    descId: 'royal-heirloom-desc',
    nameId: 'royal-heirloom-name'
  }
];

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="group relative">
      <div className="aspect-[4/5] overflow-hidden bg-zinc-100 relative">
        <Link to={`/product/${product.id}`}>
          {/* Main Image */}
          <img
            data-strk-img-id={product.imgId}
            data-strk-img={`[${product.descId}] [${product.nameId}] gold jewelry jewelry-on-white`}
            data-strk-img-ratio="4x5"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          {/* Hover Image */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <img
              data-strk-img-id={product.imgId2}
              data-strk-img={`[${product.descId}] [${product.nameId}] gold jewelry detail shot product`}
              data-strk-img-ratio="4x5"
              data-strk-img-width="600"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
              alt={`${product.name} alternate view`}
              className="w-full h-full object-cover"
            />
          </div>
        </Link>
        
        {/* Quick Add To Cart */}
        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-20">
          <button 
            onClick={() => addToCart(product)}
            className="w-full bg-[#1C1C1C] text-white py-3 text-[10px] tracking-widest uppercase font-bold flex items-center justify-center gap-2 hover:bg-zinc-800 transition-colors"
          >
            <ShoppingBag className="w-4 h-4" />
            Quick Add
          </button>
        </div>
      </div>

      <div className="mt-4 text-center">
        <h3 id={product.nameId} className="font-serif text-sm tracking-[0.15em] uppercase mb-1">
          <Link to={`/product/${product.id}`}>{product.name}</Link>
        </h3>
        <p id={product.descId} className="hidden">{product.description}</p>
        <p className="text-zinc-500 text-sm tracking-wide">${product.price}</p>
      </div>
    </div>
  );
};

const Bestsellers = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-24 max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div>
          <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-400 mb-2 block font-bold">Most Coveted</span>
          <h2 className="font-serif text-4xl md:text-5xl tracking-tight">Our Bestsellers</h2>
        </div>
        <Link 
          to="/shop" 
          className="text-xs uppercase tracking-[0.2em] font-bold border-b border-[#1C1C1C] pb-1 hover:text-zinc-500 hover:border-zinc-500 transition-all"
        >
          View All Products
        </Link>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-5 gap-x-6 gap-y-12">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default Bestsellers;
