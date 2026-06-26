import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Products = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const products = [
    {
      id: "pro-double-folder",
      name: "Artitect Pro Double Folder D-Series",
      tagline: "The pinnacle of double folding technology.",
      description: "Our flagship double folding machine provides simultaneous bidirectional folding without needing to manually flip the material. Ideal for roofing panels, architectural facades, and high-volume operations.",
      features: ["Bi-directional folding system", "15-inch Touchscreen CNC", "Automatic crowning adjustment", "Folding capacity up to 3mm steel"],
      imageQuery: "[pro-double-folder] [product-category]",
    },
    {
      id: "precision-metal-folder",
      name: "Precision Metal Folder M-Series",
      tagline: "Versatile, reliable, elegant.",
      description: "The M-Series sheet metal folding machine strikes the perfect balance between power and footprint. Engineered for custom fabrication shops that demand precision on every bend.",
      features: ["Ergonomic control arm", "Energy-efficient hydraulic system", "Quick-clamp tooling", "Intelligent collision avoidance"],
      imageQuery: "[precision-metal-folder] [product-category]",
    },
    {
      id: "compact-sheet-folder",
      name: "Compact Sheet Folder C-Series",
      tagline: "Heavyweight performance, lightweight footprint.",
      description: "Don't let the size fool you. The C-Series metal folder delivers immense folding power for tighter workspaces. User-friendly and ready to work right out of the box.",
      features: ["Space-saving design", "Plug-and-play installation", "Precise angle control dial", "Maintenance-free bearings"],
      imageQuery: "[compact-sheet-folder] [product-category]",
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-24" ref={containerRef}>
      {/* Page Header */}
      <div className="bg-slate-900 border-b border-slate-800 text-white py-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 id="product-category" className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Our Machines</h1>
          <p className="text-xl text-slate-300">
            Engineered double folding machines and metal folders that define the industry standard for elegance and precision.
          </p>
        </div>
      </div>

      {/* Product List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-24">
        {products.map((product, idx) => (
          <div key={product.id} className={`flex flex-col lg:flex-row gap-12 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
            
            {/* Product Image */}
            <div className="w-full lg:w-1/2">
              <div className="aspect-[4/3] bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden p-2">
                <div className="w-full h-full bg-slate-100 relative rounded">
                  <img 
                    data-strk-img-id={`product-img-${product.id}`}
                    data-strk-img={`${product.imageQuery}`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={product.name}
                    className="w-full h-full object-cover rounded"
                  />
                </div>
              </div>
            </div>

            {/* Product Info */}
            <div className="w-full lg:w-1/2">
              <h2 id={product.id} className="text-3xl font-bold text-slate-900 mb-2 tracking-tight">{product.name}</h2>
              <p className="text-blue-600 font-medium tracking-wide mb-6">{product.tagline}</p>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                {product.description}
              </p>
              
              <ul className="space-y-3 mb-10">
                {product.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                    <span className="text-slate-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="flex gap-4">
                <Link 
                  to="/contact"
                  className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-3 rounded-sm font-medium transition-colors"
                >
                  Request Specifications
                </Link>
              </div>
            </div>
            
          </div>
        ))}
      </div>
      
      {/* Call to Action */}
      <div className="max-w-4xl mx-auto px-4 mt-32">
        <div className="bg-blue-600 rounded-2xl p-12 text-center text-white shadow-xl">
          <h2 className="text-3xl font-bold mb-4 tracking-tight">Need a Custom Solution?</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Our engineering team can customize any sheet metal folding machine to meet the exact requirements of your production line.
          </p>
          <Link 
            to="/contact"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-sm font-bold transition-all hover:bg-slate-50"
          >
            Contact Engineering
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Products;