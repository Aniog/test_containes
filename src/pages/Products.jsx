import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  Package, Building2, Wrench, Shirt, Home, Car, 
  Box, Shield, Stethoscope, Bike, Sparkles, Leaf,
  ArrowRight, ChevronRight
} from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const categories = [
  { icon: Package, name: 'Consumer Electronics', desc: 'Smartphones, accessories, audio devices, wearables, and smart home gadgets.' },
  { icon: Building2, name: 'Industrial Machinery', desc: 'Manufacturing equipment, CNC machines, pumps, valves, and automation systems.' },
  { icon: Home, name: 'Home & Kitchen', desc: 'Cookware, kitchen gadgets, home decor, storage solutions, and appliances.' },
  { icon: Shirt, name: 'Apparel & Textiles', desc: 'Garments, fabrics, accessories, uniforms, and custom apparel.' },
  { icon: Home, name: 'Furniture & Decor', desc: 'Indoor and outdoor furniture, lighting, rugs, and home accessories.' },
  { icon: Car, name: 'Auto Parts & Accessories', desc: 'Car parts, motorcycle components, accessories, and aftermarket products.' },
  { icon: Box, name: 'Packaging & Printing', desc: 'Custom packaging boxes, labels, bags, and printed materials.' },
  { icon: Building2, name: 'Building Materials', desc: 'Construction materials, tiles, sanitary ware, doors, windows, and hardware.' },
  { icon: Stethoscope, name: 'Medical Supplies', desc: 'Medical devices, PPE, diagnostic equipment, and healthcare products.' },
  { icon: Wrench, name: 'Tools & Hardware', desc: 'Power tools, hand tools, hardware, and industrial supplies.' },
  { icon: Sparkles, name: 'Personal Care & Beauty', desc: 'Cosmetics, skincare, haircare, and personal grooming products.' },
  { icon: Bike, name: 'Sports & Outdoor', desc: 'Sporting goods, fitness equipment, camping gear, and outdoor accessories.' },
  { icon: Leaf, name: 'Agricultural Products', desc: 'Agricultural machinery, irrigation systems, seeds, and farming supplies.' },
  { icon: Box, name: 'Toys & Gift Items', desc: 'Children toys, educational games, novelties, and promotional gifts.' },
  { icon: Shield, name: 'Security & Safety', desc: 'Surveillance systems, safety equipment, fire protection, and security products.' },
  { icon: Package, name: 'Pet Supplies', desc: 'Pet food, toys, accessories, grooming tools, and pet care products.' },
];

export default function Products() {
  const bannerRef = useRef(null);

  useEffect(() => {
    if (bannerRef.current) ImageHelper.loadImages(strkImgConfig, bannerRef.current);
  }, []);

  return (
    <div>
      {/* Banner */}
      <section ref={bannerRef} className="relative bg-slate-900 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20"
          data-strk-bg-id="products-banner-bg"
          data-strk-bg="[products-subtitle] [products-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
          style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <p id="products-subtitle" className="text-brand-400 font-semibold text-sm mb-3">Categories</p>
          <h1 id="products-title" className="text-4xl md:text-5xl font-bold text-white mb-4">
            Products We Source
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl">
            We source across a broad range of industries. If you need it manufactured in China, 
            we can help find the right supplier.
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {categories.map((cat) => (
              <div key={cat.name} className="bg-white rounded-xl border border-slate-200 p-6 hover:border-brand-300 hover:shadow-sm transition-all">
                <cat.icon className="w-10 h-10 text-brand-600 mb-3" />
                <h3 className="font-semibold text-slate-800 mb-2">{cat.name}</h3>
                <p className="text-sm text-slate-500">{cat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Note */}
      <section className="pb-16 md:pb-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-50 rounded-xl border border-slate-200 p-8 text-center">
            <Package className="w-10 h-10 text-brand-600 mx-auto mb-3" />
            <h3 className="text-xl font-bold text-slate-800 mb-2">Product Not Listed?</h3>
            <p className="text-slate-600 mb-6">
              We are not limited to the categories above. If you have a specific product in mind, 
              contact us and we will research the market for you.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center bg-brand-600 hover:bg-brand-700 text-white font-semibold rounded-lg px-6 py-3 text-sm transition-colors"
            >
              Send Your Product Inquiry
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}