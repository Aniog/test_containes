import React, { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const products = [
    {
      id: 1,
      name: 'Double Folding Machine',
      category: 'folding',
      description: 'Professional-grade double folding machine with dual-axis precision control. Ideal for complex bending operations requiring high accuracy and repeatability.',
      features: [
        'Dual-axis precision control',
        'Digital angle measurement',
        'Heavy-duty construction',
        'User-friendly touchscreen interface',
        'Multiple bending sequences',
      ],
      specs: {
        'Max Sheet Width': '2000mm',
        'Max Thickness': '4mm',
        'Bending Angle': '0-180°',
        'Motor Power': '3HP',
      },
    },
    {
      id: 2,
      name: 'Double Folder',
      category: 'folding',
      description: 'Versatile double folder designed for medium to large-scale production. Features advanced folding technology for consistent results.',
      features: [
        'Synchronized folding beams',
        'Adjustable backgauge',
        'Quick-change tooling system',
        'Safety light curtains',
        'Energy-efficient operation',
      ],
      specs: {
        'Max Sheet Width': '2500mm',
        'Max Thickness': '3mm',
        'Bending Speed': 'Up to 15 strokes/min',
        'Motor Power': '2.5HP',
      },
    },
    {
      id: 3,
      name: 'Sheet Metal Folder',
      category: 'folding',
      description: 'Compact yet powerful sheet metal folder perfect for small to medium workshops. Delivers professional results in a space-saving design.',
      features: [
        'Compact footprint',
        'Manual backgauge adjustment',
        'Precision clamping system',
        'Easy-to-read angle scale',
        'Low maintenance design',
      ],
      specs: {
        'Max Sheet Width': '1250mm',
        'Max Thickness': '1.5mm',
        'Bending Angle': '0-135°',
        'Motor Power': '1.5HP',
      },
    },
    {
      id: 4,
      name: 'Sheet Metal Folding Machine',
      category: 'folding',
      description: 'Heavy-duty sheet metal folding machine built for industrial applications. Handles thick materials with ease and precision.',
      features: [
        'Reinforced frame construction',
        'Hydraulic clamping system',
        'CNC-controlled backgauge',
        'Multiple tool stations',
        'Advanced safety features',
      ],
      specs: {
        'Max Sheet Width': '3000mm',
        'Max Thickness': '6mm',
        'Bending Angle': '0-180°',
        'Motor Power': '5HP',
      },
    },
    {
      id: 5,
      name: 'Metal Folder',
      category: 'folding',
      description: 'All-purpose metal folder suitable for various applications. Combines reliability with ease of use for everyday metalworking tasks.',
      features: [
        'Versatile bending capabilities',
        'Quick setup time',
        'Durable construction',
        'Intuitive controls',
        'Low operating costs',
      ],
      specs: {
        'Max Sheet Width': '1500mm',
        'Max Thickness': '2.5mm',
        'Bending Angle': '0-150°',
        'Motor Power': '2HP',
      },
    },
    {
      id: 6,
      name: 'Metal Folder Machine',
      category: 'folding',
      description: 'Advanced metal folder machine with programmable bending sequences. Perfect for high-volume production environments.',
      features: [
        'Programmable bending sequences',
        'Automatic tool positioning',
        'Real-time monitoring',
        'Data logging capabilities',
        'Remote diagnostics',
      ],
      specs: {
        'Max Sheet Width': '2000mm',
        'Max Thickness': '3mm',
        'Bending Speed': 'Up to 20 strokes/min',
        'Motor Power': '3.5HP',
      },
    },
    {
      id: 7,
      name: 'Metal Folding Machine',
      category: 'folding',
      description: 'Premium metal folding machine offering superior accuracy and repeatability. Engineered for demanding industrial applications.',
      features: [
        'High-precision linear guides',
        'Servo-driven system',
        'Advanced touchscreen HMI',
        'Multiple bending modes',
        'Comprehensive safety system',
      ],
      specs: {
        'Max Sheet Width': '2500mm',
        'Max Thickness': '5mm',
        'Positioning Accuracy': '±0.1mm',
        'Motor Power': '4HP',
      },
    },
  ];

  const categories = [
    { id: 'all', label: 'All Products' },
    { id: 'folding', label: 'Folding Machines' },
  ];

  const filteredProducts =
    selectedCategory === 'all'
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our Products
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl">
            Explore our comprehensive range of precision metal folding machinery, designed to meet the demands of modern manufacturing.
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-colors duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-blue-900 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-3">
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {product.features.map((feature, index) => (
                        <li
                          key={index}
                          className="flex items-start text-gray-700"
                        >
                          <CheckCircle2 className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Specifications */}
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
                      Specifications
                    </h4>
                    <div className="grid grid-cols-2 gap-4">
                      {Object.entries(product.specs).map(([key, value]) => (
                        <div key={key}>
                          <div className="text-xs text-gray-500 mb-1">
                            {key}
                          </div>
                          <div className="text-sm font-semibold text-gray-900">
                            {value}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6">
                    <a
                      href="mailto:info@artitectmachinery.com?subject=Inquiry about {product.name}"
                      className="inline-flex items-center px-6 py-3 bg-blue-900 text-white font-medium rounded-lg hover:bg-blue-800 transition-colors duration-200"
                    >
                      Request Quote
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
