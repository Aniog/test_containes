import React, { useEffect, useRef } from 'react';
import { Cpu, Layers, Box, Settings } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const products = [
  {
    id: 'double-folding-machine',
    title: 'Double Folding Machine',
    description: 'High-precision dual-axis folding system for complex sheet metal bends.',
    icon: Layers,
    features: ['Dual synchronized axes', 'Programmable bend sequences', 'Touchscreen control'],
  },
  {
    id: 'double-folder',
    title: 'Double Folder',
    description: 'Compact dual-folder design for efficient production line integration.',
    icon: Box,
    features: ['Space-saving design', 'Quick changeover', 'High repeatability'],
  },
  {
    id: 'sheet-metal-folder',
    title: 'Sheet Metal Folder',
    description: 'Versatile folder for standard sheet metal bending applications.',
    icon: Cpu,
    features: ['Wide material range', 'Easy operation', 'Low maintenance'],
  },
  {
    id: 'sheet-metal-folding-machine',
    title: 'Sheet Metal Folding Machine',
    description: 'Industrial-grade folding machine for heavy-duty sheet metal work.',
    icon: Settings,
    features: ['Heavy-duty construction', 'Advanced safety systems', 'CNC compatible'],
  },
  {
    id: 'metal-folder',
    title: 'Metal Folder',
    description: 'Precision metal folder for accurate and consistent bend quality.',
    icon: Box,
    features: ['Precision tooling', 'Fast cycle times', 'Energy efficient'],
  },
  {
    id: 'metal-folder-machine',
    title: 'Metal Folder Machine',
    description: 'Complete metal folding solution with integrated automation options.',
    icon: Cpu,
    features: ['Automation ready', 'Modular design', 'Remote monitoring'],
  },
  {
    id: 'metal-folding-machine',
    title: 'Metal Folding Machine',
    description: 'Advanced metal folding with smart technology and IoT connectivity.',
    icon: Layers,
    features: ['IoT enabled', 'Predictive maintenance', 'Cloud analytics'],
  },
];

const Products = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="products" ref={containerRef} className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Our Product Range
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            From compact folders to industrial folding machines, we offer comprehensive
            solutions for every sheet metal bending need.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => {
            const Icon = product.icon;
            return (
              <Card
                key={product.id}
                className="group hover:shadow-xl transition-all duration-300 border-slate-200 hover:border-blue-300 bg-white"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="p-2 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-lg font-semibold text-slate-900 group-hover:text-blue-700 transition-colors">
                      {product.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    {product.description}
                  </p>
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-center text-sm text-slate-500"
                      >
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Products;
