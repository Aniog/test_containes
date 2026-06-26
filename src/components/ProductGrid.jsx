import React, { useEffect, useRef, useState } from 'react';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';
import { ChevronRight, Maximize2, Settings2, Weight } from 'lucide-react';
import { Link } from 'react-router-dom';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const ProductGrid = ({ limit }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const containerRef = useRef(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data: response } = await client.from('Product').select('*').limit(limit || 10);
        setProducts(response?.data?.list || []);
      } catch (err) {
        console.error('Failed to fetch products:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [limit]);

  useEffect(() => {
    if (products.length > 0) {
      const frameId = window.requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      });
      return () => window.cancelAnimationFrame(frameId);
    }
  }, [products]);

  if (loading) return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[1, 2, 3].map((i) => (
        <div key={i} className="animate-pulse bg-slate-100 aspect-[4/5] rounded-2xl" />
      ))}
    </div>
  );

  return (
    <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {products.map((product) => {
        const data = product.data;
        return (
          <div key={product.id} className="group bg-white rounded-3xl overflow-hidden border border-slate-100 transition-all hover:shadow-2xl hover:-translate-y-1">
            <div className="aspect-[4/3] overflow-hidden bg-slate-50 relative">
              <img
                data-strk-img-id={`prod-${product.id}`}
                data-strk-img={`[prod-title-${product.id}] [prod-cat-${product.id}] industrial machine`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={data.name}
              />
              <div id={`prod-cat-${product.id}`} className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-slate-900 border border-white">
                {data.category}
              </div>
            </div>
            
            <div className="p-8">
              <h3 id={`prod-title-${product.id}`} className="text-xl font-black text-slate-900 mb-3">{data.name}</h3>
              <p className="text-sm text-slate-500 line-clamp-2 mb-6 leading-relaxed">
                {data.description}
              </p>
              
              <div className="space-y-3 mb-8">
                 <div className="flex items-center gap-3 text-xs text-slate-600 font-medium">
                    <Maximize2 className="w-4 h-4 text-slate-400" />
                    <span>Max Width: {data.specifications?.max_width}</span>
                 </div>
                 <div className="flex items-center gap-3 text-xs text-slate-600 font-medium">
                    <Settings2 className="w-4 h-4 text-slate-400" />
                    <span>Capacity: {data.specifications?.max_thickness}</span>
                 </div>
              </div>

              <Link 
                to={`/products`} 
                className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 group-hover:gap-3 transition-all"
              >
                View Details
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductGrid;
