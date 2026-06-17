import { useEffect, useRef, useState } from 'react';
import { DataClient, ImageHelper } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx';
import strkImgConfig from '@/strk-img-config.json';
import { Hammer, ArrowRight, Settings2, Info } from 'lucide-react';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const containerRef = useRef(null);

  useEffect(() => {
    async function fetchProducts() {
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
    }

    fetchProducts();
  }, []);

  useEffect(() => {
    if (!loading && products.length > 0) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [loading, products]);

  return (
    <div ref={containerRef} className="min-h-screen bg-slate-50">
      <section className="bg-white py-16 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 id="products-title" className="text-3xl md:text-5xl font-black text-slate-900 mb-4 uppercase tracking-tight">Our Machinery</h1>
          <p id="products-subtitle" className="text-slate-600 max-w-2xl font-medium">Precision-built folding and forming solutions for every industrial requirement.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white rounded-3xl h-[500px] animate-pulse" />
              ))}
            </div>
          ) : products.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => {
                const item = product.data;
                const titleId = `title-${product.id}`;
                const descId = `desc-${product.id}`;

                return (
                  <div key={product.id} className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all group flex flex-col">
                    <div className="relative aspect-[3/2] overflow-hidden bg-slate-100">
                      <img
                        alt={item.name}
                        data-strk-img-id={`product-img-${product.id}`}
                        data-strk-img={`[${descId}] [${titleId}] industrial machinery`}
                        data-strk-img-ratio="3x2"
                        data-strk-img-width="800"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">
                          {item.category}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-8 flex flex-col flex-grow">
                      <h3 id={titleId} className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                        {item.name}
                      </h3>
                      <p id={descId} className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                        {item.description}
                      </p>

                      <div className="grid grid-cols-2 gap-4 mb-8">
                        <div className="flex items-center gap-2">
                          <Settings2 className="w-4 h-4 text-slate-400" />
                          <div className="flex flex-col">
                            <span className="text-[10px] text-slate-400 uppercase font-medium">Max Thickness</span>
                            <span className="text-xs font-bold text-slate-700">{item.technical_specs?.max_thickness || 'N/A'}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <ArrowRight className="w-4 h-4 text-slate-400" />
                          <div className="flex flex-col">
                            <span className="text-[10px] text-slate-400 uppercase font-medium">Working Len.</span>
                            <span className="text-xs font-bold text-slate-700">{item.technical_specs?.working_length || 'N/A'}</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-100">
                        <Link to="#" className="flex items-center gap-2 text-slate-900 font-bold text-sm hover:text-blue-600 transition-colors">
                          <Info className="w-4 h-4" /> More Details
                        </Link>
                        <Link to="/contact" className="bg-slate-900 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-slate-800 transition-colors">
                          Inquire
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-32">
              <Hammer className="w-16 h-16 text-slate-200 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-slate-900 mb-2">No machines found</h3>
              <p className="text-slate-600">Please check back later or contact us for availability.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
