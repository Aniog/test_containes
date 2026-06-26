import React from 'react';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY, S3_DOMAIN } from '@/config.jsx';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const ProductGrid = () => {
  const [products, setProducts] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const containerRef = React.useRef(null);

  const fetchProducts = async () => {
    try {
      const { data: response } = await client.from('Products').select('*').limit(6);
      setProducts(response?.data?.list || []);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    fetchProducts();
  }, []);

  React.useEffect(() => {
    if (products.length > 0) {
      const frameId = window.requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      });
      return () => window.cancelAnimationFrame(frameId);
    }
  }, [products]);

  if (loading) return (
    <div className="py-24 text-center text-slate-500">Loading precision machinery...</div>
  );

  return (
    <section ref={containerRef} className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 id="grid-title" className="text-4xl font-extrabold text-brand-primary mb-4">OUR PRODUCTS</h2>
          <div className="h-1 w-20 bg-brand-accent mx-auto mb-6" />
          <p id="grid-desc" className="text-slate-500 max-w-2xl mx-auto text-lg">
            Discover our range of advanced sheet metal folders and double folding machines.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product) => {
            const data = product.data;
            const titleId = `prod-title-${product.id}`;
            const descId = `prod-desc-${product.id}`;
            const imgUrl = data.image?.storageKey 
              ? `${S3_DOMAIN}/${data.image.storageKey}` 
              : "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E";

            return (
              <div key={product.id} className="group bg-white border border-slate-200 overflow-hidden hover:shadow-2xl transition-all duration-500 rounded-sm">
                <div className="aspect-[4/3] relative overflow-hidden bg-slate-100">
                  <img
                    alt={data.name}
                    data-strk-img-id={`prod-img-${product.id}`}
                    data-strk-img={`[${descId}] [${titleId}] [grid-desc] metal folding machine`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="800"
                    src={imgUrl}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-brand-primary/90 text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-sm">
                      {data.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 id={titleId} className="text-xl font-bold text-brand-primary mb-3 group-hover:text-brand-accent transition-colors">
                    {data.name}
                  </h3>
                  <p id={descId} className="text-slate-500 text-sm mb-6 line-clamp-2 leading-relaxed">
                    {data.description}
                  </p>
                  
                  <div className="flex items-center justify-between border-t border-slate-50 pt-6">
                    <span className="text-brand-accent font-semibold">{data.price_range || "Inquire for quote"}</span>
                    <Link 
                      to={`/product/${product.id}`} 
                      className="flex items-center text-sm font-bold text-brand-primary hover:text-brand-accent transition-colors gap-2"
                    >
                      DETAILS <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
