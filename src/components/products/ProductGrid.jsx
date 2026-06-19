import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { DataClient, ImageHelper } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx';
import strkImgConfig from '@/strk-img-config.json';
import { cn } from '@/lib/utils';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const ProductGrid = ({ limit, category }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const containerRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      let query = client.from('Product').select('*');
      if (category) {
        query = query.eq('category', category);
      }
      if (limit) {
        query = query.limit(limit);
      }
      
      const { data, error } = await query;
      if (!error && data?.list) {
        setProducts(data.list);
      }
      setLoading(false);
    };

    fetchProducts();
  }, [category, limit]);

  useEffect(() => {
    if (products.length > 0) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [products]);

  if (loading) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {[...Array(limit || 5)].map((_, i) => (
          <div key={i} className="animate-pulse space-y-4">
            <div className="bg-muted aspect-[3/4] w-full" />
            <div className="h-4 bg-muted w-2/3 mx-auto" />
            <div className="h-4 bg-muted w-1/3 mx-auto" />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div ref={containerRef} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-12">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onClick={() => navigate(`/product/${product.id}`)} />
      ))}
    </div>
  );
};

const ProductCard = ({ product, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { data: fields } = product;

  return (
    <div 
      className="group cursor-pointer flex flex-col items-center text-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <div className="relative aspect-[3/4] w-full mb-6 overflow-hidden bg-muted">
        <img
          data-strk-img-id={`prod-img-${product.id}`}
          data-strk-img={`[prod-title-${product.id}] gold jewelry ${fields.category} high end`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          className={cn(
            "object-cover w-full h-full transition-transform duration-700",
            isHovered && "scale-105"
          )}
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
          alt={fields.name}
        />
        
        {/* Quick Add Overlay */}
        <div className={cn(
          "absolute inset-0 bg-black/5 flex items-end justify-center pb-6 transition-all duration-300 opacity-0 group-hover:opacity-100",
          isHovered && "pb-8"
        )}>
          <button 
            className="bg-white text-black px-6 py-3 text-[10px] uppercase tracking-[0.2em] font-medium flex items-center shadow-xl hover:bg-black hover:text-white transition-all"
            onClick={(e) => {
              e.stopPropagation();
              // Add to cart logic here
            }}
          >
            <ShoppingBag className="w-3 h-3 mr-2" />
            Add to Cart
          </button>
        </div>
      </div>

      <h3 id={`prod-title-${product.id}`} className="product-name text-sm mb-2 opacity-80 group-hover:opacity-100 transition-opacity">
        {fields.name}
      </h3>
      <p className="text-sm font-light text-muted-foreground italic">
        ${fields.price}
      </p>
    </div>
  );
};

export default ProductGrid;
