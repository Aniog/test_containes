import React, { useState, useEffect, useRef } from 'react';
import { DataClient, ImageHelper } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx';
import strkImgConfig from '@/strk-img-config.json';
import { Loader2, Settings2, Info } from 'lucide-react';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const containerRef = useRef(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data: response, error } = await client
          .from('Products')
          .select('*')
          .order('created_at', { ascending: false });

        if (error) throw error;
        setProducts(response?.data?.list || []);
      } catch (err) {
        console.error('Failed to fetch products:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    if (!loading && products.length > 0) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [loading, products]);

  if (loading) {
    return (
      <div className="flex h-96 items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-slate-400" />
      </div>
    );
  }

  return (
    <div className="bg-white py-16 sm:py-24" ref={containerRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 id="products-title" className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Our Machinery Range</h2>
          <p className="mt-4 text-lg text-slate-600">
            Precision-built folding solutions for every application. Our machinery combines 
            robust engineering with user-friendly control interfaces.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-8 lg:grid-cols-3">
          {products.map((product) => {
            const data = product.data;
            return (
              <div key={product.id} className="group relative flex flex-col border border-slate-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow bg-white">
                <div className="aspect-[3/2] w-full bg-slate-200 overflow-hidden">
                   <img
                    data-strk-img-id={`prod-img-${product.id}`}
                    data-strk-img={`[prod-name-${product.id}] industrial sheet metal folding machine`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={data.name}
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                   />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-wider text-amber-600">
                      {data.category}
                    </span>
                  </div>
                  <h3 id={`prod-name-${product.id}`} className="mt-2 text-xl font-bold text-slate-900">
                    {data.name}
                  </h3>
                  <p className="mt-3 text-sm text-slate-600 line-clamp-3">
                    {data.description}
                  </p>
                  
                  {data.specifications && (
                    <div className="mt-6 flex flex-col gap-y-2 border-t pt-4">
                       <div className="flex items-center text-xs text-slate-500">
                         <Settings2 className="h-3 w-3 mr-2" />
                         <span>Max Width: {data.specifications.max_width}</span>
                       </div>
                       <div className="flex items-center text-xs text-slate-500">
                         <span className="h-3 w-3 mr-2"></span>
                         <span>Max Thickness: {data.specifications.max_thickness}</span>
                       </div>
                    </div>
                  )}

                  <div className="mt-auto pt-6">
                    <button className="w-full rounded-lg bg-slate-900 py-2.5 text-sm font-semibold text-white hover:bg-slate-800 transition-colors">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Products;
