import React, { useEffect, useRef } from 'react';
import { ChevronRight, Settings, Zap, Shield, Ruler, Wrench } from 'lucide-react';

const Products = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeInUp');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = containerRef.current?.querySelectorAll('.observe-animate');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const products = [
    {
      id: 'double-folder',
      title: 'Double Folding Machine',
      subtitle: 'DF-2500 Series',
      description: 'Advanced dual-beam folding system with computer-controlled precision. Ideal for high-volume sheet metal processing with exceptional accuracy and repeatability.',
      specs: ['Max Length: 2500mm', 'Max Thickness: 6mm', 'Bending Angle: 0-180°'],
      features: ['CNC Control', 'Auto Sheet Positioning', 'Hydraulic Clamping'],
      image: 'https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=600&h=400&fit=crop',
      category: 'Heavy Duty',
      featured: true,
    },
    {
      id: 'sheet-metal-folder',
      title: 'Sheet Metal Folder',
      subtitle: 'SMF-3200 Series',
      description: 'Versatile folder designed for precision sheet metal bending. Features variable throat depth and multi-angle capability for complex fabrication projects.',
      specs: ['Max Length: 3200mm', 'Max Thickness: 4mm', 'Throat Depth: 250mm'],
      features: ['Manual/电动', 'Quick Change刀具', 'Portable Design'],
      image: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=600&h=400&fit=crop',
      category: 'Industrial',
      featured: false,
    },
    {
      id: 'metal-folder-machine',
      title: 'Metal Folder Machine',
      subtitle: 'MFM-2000 Series',
      description: 'Compact yet powerful metal folder engineered for workshop environments. Delivers professional results with intuitive operation and minimal maintenance.',
      specs: ['Max Length: 2000mm', 'Max Thickness: 3mm', 'Power: 3HP Motor'],
      features: ['Single Phase Power', 'Digital Display', 'Safety Guards'],
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop',
      category: 'Workshop',
      featured: false,
    },
    {
      id: 'metal-folding-machine',
      title: 'Metal Folding Machine',
      subtitle: 'MFD-4000 Series',
      description: 'Heavy-duty production folder for large-scale metal fabrication. Features robust construction and advanced automation for continuous industrial operation.',
      specs: ['Max Length: 4000mm', 'Max Thickness: 8mm', 'Cycle Time: 3 sec'],
      features: ['Production Mode', 'Auto Crowning', 'Touch Screen'],
      image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=600&h=400&fit=crop',
      category: 'Production',
      featured: false,
    },
  ];

  return (
    <section id="products" ref={containerRef} className="py-24 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="observe-animate opacity-0 inline-block px-4 py-1.5 rounded-full bg-[#1A1A2E]/5 text-[#E94560] text-sm font-semibold tracking-wide mb-4">
            Our Products
          </span>
          <h2 className="observe-animate opacity-0 text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A2E] tracking-tight mb-6">
            Precision Engineered{' '}
            <span className="text-[#E94560]">Metal Folding Equipment</span>
          </h2>
          <p className="observe-animate opacity-0 text-lg text-gray-600 leading-relaxed">
            Discover our comprehensive range of folding machines designed for industrial excellence. 
            From compact workshop models to heavy-duty production systems.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`observe-animate opacity-0 group ${
                product.featured ? 'md:col-span-2 lg:col-span-2' : ''
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div
                className={`relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 ${
                  product.featured ? 'lg:flex' : ''
                }`}
              >
                {/* Featured Badge */}
                {product.featured && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#E94560] text-white text-xs font-bold">
                      <Zap className="w-3 h-3 mr-1" />
                      Featured
                    </span>
                  </div>
                )}

                {/* Image */}
                <div className={`relative overflow-hidden ${product.featured ? 'lg:w-1/2' : ''}`}>
                  <img
                    src={product.image}
                    alt={product.title}
                    className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${
                      product.featured ? 'h-64 lg:h-full' : 'h-52'
                    }`}
                    onError={(e) => {
                      e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400" fill="%231A1A2E"%3E%3Crect width="600" height="400" /%3E%3Ctext x="300" y="200" text-anchor="middle" fill="%230F3460" font-size="16"%3EIndustrial Machine%3C/text%3E%3C/svg%3E';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A2E]/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-medium">
                      {product.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className={`p-6 ${product.featured ? 'lg:w-1/2 lg:p-8' : ''}`}>
                  <div className="mb-2">
                    <span className="text-[#E94560] text-sm font-medium tracking-wide">
                      {product.subtitle}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#1A1A2E] mb-3 group-hover:text-[#E94560] transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {product.description}
                  </p>

                  {/* Specs */}
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-sm text-gray-500">
                      <Ruler className="w-4 h-4 mr-2 text-[#E94560]" />
                      {product.specs[0]}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Settings className="w-4 h-4 mr-2 text-[#E94560]" />
                      {product.specs[1]}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Wrench className="w-4 h-4 mr-2 text-[#E94560]" />
                      {product.specs[2]}
                    </div>
                  </div>

                  {/* Features Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {product.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-full bg-[#1A1A2E]/5 text-[#1A1A2E] text-xs font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <button className="inline-flex items-center text-[#E94560] font-semibold text-sm group-hover:gap-3 gap-2 transition-all">
                    Learn More
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="observe-animate opacity-0 text-center mt-16">
          <p className="text-gray-600 mb-4">Need help choosing the right machine?</p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center px-8 py-4 bg-[#1A1A2E] hover:bg-[#16213E] text-white rounded-lg font-semibold transition-all duration-300 hover:shadow-xl"
          >
            <Shield className="mr-2 w-5 h-5" />
            Request Custom Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;
