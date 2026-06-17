import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Products = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const productCategories = [
    {
      id: 'double-folding-machine',
      title: 'Double Folding Machine',
      description: 'Our flagship double folding machines deliver exceptional precision for complex sheet metal operations. Designed for high-volume production environments.',
      features: [
        'Dual-axis folding capability',
        'Digital angle control system',
        'Heavy-duty construction',
        'Quick-change tooling system',
        'Safety interlocks and guards',
      ],
      imageId: 'double-folding-machine-detail',
      titleId: 'double-folding-machine-detail-title',
      descId: 'double-folding-machine-detail-desc',
    },
    {
      id: 'sheet-metal-folder',
      title: 'Sheet Metal Folder',
      description: 'Versatile sheet metal folding machines engineered for flexibility and accuracy across a wide range of materials and thicknesses.',
      features: [
        'Multi-material compatibility',
        'Adjustable backgauge',
        'Hydraulic clamping system',
        'Programmable folding sequences',
        'Easy maintenance access',
      ],
      imageId: 'sheet-metal-folder-detail',
      titleId: 'sheet-metal-folder-detail-title',
      descId: 'sheet-metal-folder-detail-desc',
    },
    {
      id: 'metal-folding-machine',
      title: 'Metal Folding Machine',
      description: 'Advanced metal folding machines with automated features for increased productivity and consistent quality in every fold.',
      features: [
        'Automated folding cycles',
        'Touchscreen HMI interface',
        'CNC-controlled movements',
        'Real-time monitoring',
        'Production data logging',
      ],
      imageId: 'metal-folding-machine-detail',
      titleId: 'metal-folding-machine-detail-title',
      descId: 'metal-folding-machine-detail-desc',
    },
    {
      id: 'double-folder',
      title: 'Double Folder',
      description: 'Compact double folder solutions for workshops requiring space-efficient equipment without compromising on performance.',
      features: [
        'Space-saving design',
        'Manual and hydraulic options',
        'Precision ground ways',
        'Rugged construction',
        'Low maintenance requirements',
      ],
      imageId: 'double-folder-detail',
      titleId: 'double-folder-detail-title',
      descId: 'double-folder-detail-desc',
    },
    {
      id: 'metal-folder-machine',
      title: 'Metal Folder Machine',
      description: 'Specialized metal folder machines built for demanding industrial applications requiring reliability and consistent output.',
      features: [
        'Industrial-grade components',
        'High-speed operation',
        'Advanced safety systems',
        'Modular design',
        'Comprehensive warranty',
      ],
      imageId: 'metal-folder-machine-detail',
      titleId: 'metal-folder-machine-detail-title',
      descId: 'metal-folder-machine-detail-desc',
    },
    {
      id: 'sheet-metal-folding-machine',
      title: 'Sheet Metal Folding Machine',
      description: 'Complete sheet metal folding solutions from manual to fully automated systems, tailored to your production needs.',
      features: [
        'Wide material range',
        'Customizable configurations',
        'Operator-friendly interface',
        'Energy-efficient design',
        'Global service support',
      ],
      imageId: 'sheet-metal-folding-machine-detail',
      titleId: 'sheet-metal-folding-machine-detail-title',
      descId: 'sheet-metal-folding-machine-detail-desc',
    },
  ];

  return (
    <div ref={containerRef}>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-slate-50 to-slate-100 py-16 md:py-24">
        <div className="section-container text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4">
            Our Products
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
            Explore our comprehensive range of double folding machines, sheet metal folders, 
            and metal folding equipment designed for precision and reliability.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {productCategories.map((product) => (
              <div
                key={product.id}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-[16/9] bg-slate-100 relative overflow-hidden">
                  <img
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    data-strk-img-id={product.imageId}
                    data-strk-img={`[${product.descId}] [${product.titleId}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                </div>
                <div className="p-8">
                  <h2
                    id={product.titleId}
                    className="text-2xl font-bold text-slate-900 mb-3"
                  >
                    {product.title}
                  </h2>
                  <p
                    id={product.descId}
                    className="text-slate-600 mb-6 leading-relaxed"
                  >
                    {product.description}
                  </p>
                  
                  <ul className="space-y-3 mb-6">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-slate-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contact"
                    className="inline-flex items-center text-sm font-medium text-slate-900 hover:text-slate-700 transition-colors"
                  >
                    Request Information
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-50">
        <div className="section-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Our engineering team can design and build custom folding machines 
            tailored to your specific production requirements.
          </p>
          <Link to="/contact" className="btn-primary">
            Discuss Your Requirements
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Products;
