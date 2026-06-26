import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY, S3_DOMAIN } from '@/config.jsx';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Button } from '@/components/ui/Base';
import { ArrowLeft, CheckCircle2, ChevronRight } from 'lucide-react';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const containerRef = React.useRef(null);

  React.useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data: response } = await client.from('Products').select('*').eq('id', id).single();
        setProduct(response?.data);
      } catch (error) {
        console.error('Error fetching product:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  React.useEffect(() => {
    if (product) {
      const frameId = window.requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      });
      return () => window.cancelAnimationFrame(frameId);
    }
  }, [product]);

  if (loading) return <div className="py-40 text-center font-medium">Loading precision machine details...</div>;
  if (!product) return <div className="py-40 text-center font-bold text-red-500">Machine not found.</div>;

  const data = product.data;
  const imgUrl = data.image?.storageKey 
    ? `${S3_DOMAIN}/${data.image.storageKey}` 
    : "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E";

  return (
    <div ref={containerRef} className="animate-in fade-in duration-500">
      <div className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center text-sm font-medium text-slate-500 gap-2">
            <Link to="/products" className="hover:text-brand-accent">Products</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-brand-primary">{data.name}</span>
          </nav>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Image Section */}
            <div className="lg:w-1/2">
              <div className="aspect-[4/3] relative rounded-sm overflow-hidden bg-slate-100 shadow-xl">
                <img
                  alt={data.name}
                  id="prod-detail-title"
                  className="hidden" // Just for tagging
                  textContent={data.name}
                />
                <img
                  alt={data.name}
                  data-strk-img-id={`detail-img-${product.id}`}
                  data-strk-img="[prod-detail-desc] [prod-detail-title] industrial metal folding machine high resolution"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="1200"
                  src={imgUrl}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Info Section */}
            <div className="lg:w-1/2">
              <span className="inline-block px-3 py-1 bg-brand-accent/10 text-brand-accent text-xs font-extrabold uppercase tracking-widest rounded-sm mb-6">
                {data.category}
              </span>
              <h1 className="text-4xl md:text-5xl font-extrabold text-brand-primary mb-6">{data.name}</h1>
              <p id="prod-detail-desc" className="text-lg text-slate-500 leading-relaxed mb-10">
                {data.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="p-6 bg-slate-50 rounded-sm">
                  <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Specifications</h4>
                  <ul className="space-y-3">
                    <li className="flex justify-between border-b border-slate-200 pb-2">
                      <span className="text-slate-500">Max Length</span>
                      <span className="font-bold text-brand-primary">{data.specifications?.max_length}</span>
                    </li>
                    <li className="flex justify-between border-b border-slate-200 pb-2">
                      <span className="text-slate-500">Max Thickness</span>
                      <span className="font-bold text-brand-primary">{data.specifications?.max_thickness}</span>
                    </li>
                    <li className="flex justify-between border-b border-slate-200 pb-2">
                      <span className="text-slate-500">Speed</span>
                      <span className="font-bold text-brand-primary">{data.specifications?.speed}</span>
                    </li>
                  </ul>
                </div>

                <div className="p-6 bg-slate-50 rounded-sm">
                  <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Key Benefits</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2 text-slate-600">
                      <CheckCircle2 className="w-5 h-5 text-green-500" /> Extreme Precision
                    </li>
                    <li className="flex items-center gap-2 text-slate-600">
                      <CheckCircle2 className="w-5 h-5 text-green-500" /> Low Maintenance
                    </li>
                    <li className="flex items-center gap-2 text-slate-600">
                      <CheckCircle2 className="w-5 h-5 text-green-500" /> Professional Finish
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button variant="accent" className="w-full sm:w-auto px-10 py-4 text-lg">
                    Request Specialist Quote
                  </Button>
                </Link>
                <Link to="/products">
                  <Button variant="outline" className="w-full sm:w-auto px-10 py-4 text-lg">
                    <ArrowLeft className="w-5 h-5 mr-2" /> Back to Products
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
