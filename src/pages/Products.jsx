import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Filter, X } from 'lucide-react';

const Products = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    {
      id: 1,
      name: 'Double Folding Machine',
      category: 'double-folder',
      tagline: 'Precision Double-Acting Folding',
      description: 'Our flagship double folding machine delivers exceptional precision for complex sheet metal fabrication. Featuring dual-action clamping and folding beams, it handles intricate bends with accuracy down to ±0.5mm.',
      features: [
        'Dual-action folding mechanism',
        'CNC control with touch screen interface',
        'Automatic bend angle compensation',
        'Quick-change tooling system',
        'Safety light curtains',
        'Emergency stop systems',
      ],
      specs: {
        'Max Bending Thickness': '3mm mild steel / 2mm stainless',
        'Max Bending Length': '1250mm - 3200mm',
        'Bending Angle Range': '0° - 135°',
        'Motor Power': '2.2kW',
        'Weight': '1200kg - 2800kg',
        'Dimensions': '1800 x 800 x 1500mm',
      },
      price: 'Starting from $18,500',
      popular: true,
    },
    {
      id: 2,
      name: 'Sheet Metal Folder',
      category: 'sheet-folder',
      tagline: 'Heavy-Duty Industrial Folding',
      description: 'Built for continuous industrial production, our sheet metal folder combines robust construction with efficient operation. The hydraulic clamping system ensures consistent results across large production runs.',
      features: [
        'Hydraulic clamping system',
        'Heavy-duty steel frame construction',
        'Adjustable folding speed',
        'Digital depth gauge',
        'Back gauge with digital readout',
        'Easy-access maintenance panels',
      ],
      specs: {
        'Max Bending Thickness': '2.5mm mild steel',
        'Working Width': '1000mm - 2500mm',
        'Clamping Force': '15 tons',
        'Motor Power': '3kW',
        'Weight': '950kg - 2100kg',
        'Dimensions': '1500 x 750 x 1400mm',
      },
      price: 'Starting from $12,800',
      popular: false,
    },
    {
      id: 3,
      name: 'Metal Folding Machine',
      category: 'metal-folder',
      tagline: 'Versatile Fabrication Solution',
      description: 'A versatile folding solution suitable for various metalworking applications. The NC control system provides precise control while remaining user-friendly for operators of all skill levels.',
      features: [
        'NC control system',
        'Multi-point bending sequence',
        'Programmable bend sequences',
        'LED work lighting',
        'Integrated material support tables',
        'Low energy consumption mode',
      ],
      specs: {
        'Max Bending Thickness': '4mm mild steel',
        'Max Bending Length': '1500mm - 3000mm',
        'Bending Angle Range': '0° - 120°',
        'Motor Power': '4kW',
        'Weight': '1400kg - 2600kg',
        'Dimensions': '2000 x 900 x 1600mm',
      },
      price: 'Starting from $22,000',
      popular: false,
    },
    {
      id: 4,
      name: 'Double Folder',
      category: 'double-folder',
      tagline: 'Advanced Dual-Bend Technology',
      description: 'Our advanced double folder features enhanced clamping and folding capabilities for precision work on complex geometries. The touch screen control makes programming intuitive and efficient.',
      features: [
        'Touch screen CNC control',
        'Precision ground folding blades',
        'Automatic thickness detection',
        'Multi-axis back gauge',
        'Sound-dampened operation',
        'Network connectivity for diagnostics',
      ],
      specs: {
        'Max Bending Thickness': '3mm stainless steel',
        'Max Bending Length': '1000mm - 2500mm',
        'Precision': '±0.5mm',
        'Motor Power': '3.5kW',
        'Weight': '1100kg - 2400kg',
        'Dimensions': '1700 x 850 x 1550mm',
      },
      price: 'Starting from $24,500',
      popular: true,
    },
    {
      id: 5,
      name: 'Metal Folder Machine',
      category: 'metal-folder',
      tagline: 'Compact Production Folding',
      description: 'A compact yet powerful folder designed for workshops with space constraints. Despite its smaller footprint, it delivers professional-grade results for medium-scale production.',
      features: [
        'Space-saving compact design',
        'Manual/electric hybrid operation',
        'Quick setup and changeover',
        'Built-in storage for accessories',
        'Pedestal or bench mounting options',
        'Cost-effective operation',
      ],
      specs: {
        'Max Bending Thickness': '2mm mild steel',
        'Max Bending Length': '1000mm - 1500mm',
        'Bending Angle Range': '0° - 90°',
        'Motor Power': '1.5kW',
        'Weight': '450kg - 650kg',
        'Dimensions': '1200 x 600 x 1200mm',
      },
      price: 'Starting from $8,500',
      popular: false,
    },
    {
      id: 6,
      name: 'Metal Folding Machine Pro',
      category: 'metal-folder',
      tagline: 'Heavy-Capacity Industrial Grade',
      description: 'Our most powerful folding machine, designed for heavy industrial applications. Features reinforced construction and high-capacity components for demanding production environments.',
      features: [
        'Reinforced steel frame',
        'High-capacity hydraulic system',
        'Extended bed length options',
        'Heavy-duty folding blade',
        'Industrial-grade control system',
        'Forklift transport channels',
      ],
      specs: {
        'Max Bending Thickness': '6mm mild steel',
        'Max Bending Length': '2000mm - 4000mm',
        'Bending Angle Range': '0° - 140°',
        'Motor Power': '7.5kW',
        'Weight': '2500kg - 4500kg',
        'Dimensions': '2500 x 1000 x 1800mm',
      },
      price: 'Starting from $35,000',
      popular: false,
    },
  ];

  const categories = [
    { id: 'all', label: 'All Products' },
    { id: 'double-folder', label: 'Double Folders' },
    { id: 'sheet-folder', label: 'Sheet Metal Folders' },
    { id: 'metal-folder', label: 'Metal Folders' },
  ];

  const filteredProducts = activeFilter === 'all'
    ? products
    : products.filter(p => p.category === activeFilter);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary-dark to-primary py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center text-white">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Product Range
            </span>
            <h1 className="font-serif text-4xl md:text-5xl font-bold mt-3 mb-6">
              Sheet Metal Folding Machines
            </h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Discover our comprehensive range of precision-engineered folding machines designed for industrial fabrication excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6">
          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                  activeFilter === cat.id
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-white text-neutral-600 hover:bg-neutral-100 shadow-sm'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className={`bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 ${
                  selectedProduct === product.id ? 'ring-2 ring-primary' : ''
                }`}
              >
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      {product.popular && (
                        <span className="inline-block bg-accent/10 text-accent text-xs font-semibold px-3 py-1 rounded-full mb-3">
                          Popular Choice
                        </span>
                      )}
                      <h3 className="font-serif text-2xl font-bold text-neutral-800">
                        {product.name}
                      </h3>
                      <p className="text-accent text-sm font-medium mt-1">
                        {product.tagline}
                      </p>
                    </div>
                  </div>

                  <p className="text-neutral-600 mb-6 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-sans font-semibold text-sm text-neutral-800 mb-3 uppercase tracking-wider">
                      Key Features
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {product.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-accent shrink-0" />
                          <span className="text-sm text-neutral-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Specs */}
                  <div className="bg-neutral-50 rounded-xl p-5 mb-6">
                    <h4 className="font-sans font-semibold text-sm text-neutral-800 mb-3 uppercase tracking-wider">
                      Technical Specifications
                    </h4>
                    <div className="grid grid-cols-2 gap-3">
                      {Object.entries(product.specs).map(([key, value]) => (
                        <div key={key}>
                          <p className="text-xs text-neutral-400 uppercase tracking-wider">{key}</p>
                          <p className="text-sm text-neutral-700 font-medium">{value}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Price & CTA */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-neutral-100">
                    <div>
                      <p className="text-sm text-neutral-400">Price Range</p>
                      <p className="text-lg font-semibold text-primary">{product.price}</p>
                    </div>
                    <div className="flex gap-3">
                      <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
                      >
                        Request Quote
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Not Sure Which Machine?
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-neutral-800 mt-3">
              Find Your Perfect Match
            </h2>
            <p className="text-neutral-500 mt-4 max-w-xl mx-auto">
              Our team of experts can help you select the right machine based on your specific requirements and production needs.
            </p>
          </div>

          <div className="bg-neutral-50 rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📋</span>
                </div>
                <h3 className="font-sans font-semibold text-lg text-neutral-800 mb-2">
                  1. Share Your Requirements
                </h3>
                <p className="text-neutral-500 text-sm">
                  Tell us about your materials, production volume, and workspace constraints.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔍</span>
                </div>
                <h3 className="font-sans font-semibold text-lg text-neutral-800 mb-2">
                  2. Expert Consultation
                </h3>
                <p className="text-neutral-500 text-sm">
                  Our technical specialists will recommend the optimal machine configuration.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">✅</span>
                </div>
                <h3 className="font-sans font-semibold text-lg text-neutral-800 mb-2">
                  3. Custom Solution
                </h3>
                <p className="text-neutral-500 text-sm">
                  Receive a tailored quote with specifications that match your needs.
                </p>
              </div>
            </div>

            <div className="mt-10 text-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-dark transition-colors shadow-lg"
              >
                Get Expert Recommendation
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;