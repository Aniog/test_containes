import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Ruler, Zap, Shield, Settings, Maximize, Weight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const allProducts = [
  {
    title: 'Double Folding Machine',
    subtitle: 'Dual-function precision folding',
    imgId: 'prod-df-full-a1b2c3',
    titleId: 'df-title',
    descId: 'df-desc',
    specsId: 'df-specs',
    description: 'Our flagship double folding machine combines box-pan and straight folding capabilities in a single robust unit. Engineered for complex architectural sheet metal work, it delivers exceptional versatility for fabricators who need both folding methods without investing in separate machines.',
    specs: [
      { label: 'Folding Length', value: '3000 mm' },
      { label: 'Max Thickness', value: '4 mm (mild steel)' },
      { label: 'Control System', value: 'CNC with touchscreen' },
      { label: 'Folding Angle', value: '0 - 135 degrees' },
      { label: 'Motor Power', value: '7.5 kW' },
      { label: 'Machine Weight', value: '4,500 kg' },
    ],
    features: [
      'Segmented top beam for box-pan folding',
      'Automatic material support arms',
      'Programmable back gauge with servo drive',
      'Safety light curtain protection',
      'CE certified safety standards',
    ],
    icon: Maximize,
  },
  {
    title: 'Double Folder',
    subtitle: 'High-speed synchronized folding',
    imgId: 'prod-dfolder-full-d4e5f6',
    titleId: 'dfolder-title',
    descId: 'dfolder-desc',
    specsId: 'dfolder-specs',
    description: 'The double folder is designed for rapid, synchronized folding operations in high-volume production environments. With dual clamping beams operating in concert, it dramatically reduces cycle times while maintaining consistent bend quality across every workpiece.',
    specs: [
      { label: 'Folding Length', value: '2500 mm' },
      { label: 'Max Thickness', value: '3 mm (mild steel)' },
      { label: 'Cycle Time', value: '6 seconds per bend' },
      { label: 'Control System', value: 'PLC with color touchscreen' },
      { label: 'Motor Power', value: '5.5 kW' },
      { label: 'Machine Weight', value: '3,800 kg' },
    ],
    features: [
      'Dual synchronized folding beams',
      'Quick-change tooling system',
      'Automatic sheet positioning',
      'Energy-efficient servo drive',
      'Remote diagnostics capability',
    ],
    icon: Zap,
  },
  {
    title: 'Sheet Metal Folder',
    subtitle: 'Versatile workshop bending',
    imgId: 'prod-sfolder-full-g7h8i9',
    titleId: 'sfolder-title',
    descId: 'sfolder-desc',
    specsId: 'sfolder-specs',
    description: 'A versatile sheet metal folder designed for precision bending of various material thicknesses. Perfect for fabrication shops and small to medium manufacturing lines, it combines ease of use with professional-grade accuracy.',
    specs: [
      { label: 'Folding Length', value: '2000 mm' },
      { label: 'Max Thickness', value: '2.5 mm (mild steel)' },
      { label: 'Control System', value: 'Manual / NC' },
      { label: 'Folding Angle', value: '0 - 120 degrees' },
      { label: 'Motor Power', value: '4 kW' },
      { label: 'Machine Weight', value: '2,200 kg' },
    ],
    features: [
      'Compact footprint for workshop layout',
      'Easy manual tooling changeover',
      'Mechanical back gauge with digital readout',
      'Foot pedal operation for hands-free control',
      'Low maintenance design',
    ],
    icon: Settings,
  },
  {
    title: 'Metal Folder Machine',
    subtitle: 'Heavy-duty industrial bending',
    imgId: 'prod-mfolder-full-h0i1j2',
    titleId: 'mfolder-title',
    descId: 'mfolder-desc',
    specsId: 'mfolder-specs',
    description: 'Our heavy-duty metal folder machine is purpose-built for large-scale industrial applications. It handles thicker gauge materials with ease, making it the go-to choice for structural steel fabricators and heavy equipment manufacturers.',
    specs: [
      { label: 'Folding Length', value: '4000 mm' },
      { label: 'Max Thickness', value: '6 mm (mild steel)' },
      { label: 'Control System', value: 'CNC with 15" touchscreen' },
      { label: 'Folding Angle', value: '0 - 140 degrees' },
      { label: 'Motor Power', value: '11 kW' },
      { label: 'Machine Weight', value: '6,800 kg' },
    ],
    features: [
      'Extra-wide folding beam for large panels',
      'Hydraulic clamping for consistent pressure',
      'Automatic crowning compensation',
      'Network connectivity for production monitoring',
      'Extended warranty package available',
    ],
    icon: Weight,
  },
  {
    title: 'Metal Folder',
    subtitle: 'Compact precision folder',
    imgId: 'prod-mfolder2-full-k3l4m5',
    titleId: 'mfolder2-title',
    descId: 'mfolder2-desc',
    specsId: 'mfolder2-specs',
    description: 'A compact yet powerful metal folder designed for precision work in tighter spaces. Ideal for job shops and custom fabrication businesses that need professional folding capability without the space requirement of larger industrial machines.',
    specs: [
      { label: 'Folding Length', value: '1500 mm' },
      { label: 'Max Thickness', value: '2 mm (mild steel)' },
      { label: 'Control System', value: 'Manual with digital gauge' },
      { label: 'Folding Angle', value: '0 - 130 degrees' },
      { label: 'Motor Power', value: '3 kW' },
      { label: 'Machine Weight', value: '1,500 kg' },
    ],
    features: [
      'Space-saving vertical design',
      'Simple operation with minimal training',
      'Adjustable folding speed control',
      'Built-in safety interlock system',
      'Affordable entry-level industrial folder',
    ],
    icon: Ruler,
  },
  {
    title: 'Metal Folding Machine',
    subtitle: 'Industrial production workhorse',
    imgId: 'prod-mf-full-n6o7p8',
    titleId: 'mf-title',
    descId: 'mf-desc',
    specsId: 'mf-specs',
    description: 'Our top-of-the-line metal folding machine represents the pinnacle of bending technology. With fully automated operation, real-time quality monitoring, and Industry 4.0 connectivity, it is the ultimate solution for high-volume precision production.',
    specs: [
      { label: 'Folding Length', value: '3500 mm' },
      { label: 'Max Thickness', value: '5 mm (mild steel)' },
      { label: 'Control System', value: 'Full CNC with automation' },
      { label: 'Folding Angle', value: '0 - 145 degrees' },
      { label: 'Motor Power', value: '9 kW' },
      { label: 'Machine Weight', value: '5,500 kg' },
    ],
    features: [
      'Fully automated folding sequences',
      'Real-time angle measurement and correction',
      'Automated tool changing system',
      'Industry 4.0 / IoT ready',
      'Predictive maintenance alerts',
      'Integrated safety scanning system',
    ],
    icon: Shield,
  },
];

export default function Products() {
  const containerRef = useRef(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const ProductCard = ({ product, index }) => (
    <div className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300">
      <div className="relative h-72 overflow-hidden bg-brand-100">
        <img
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="16x9"
          data-strk-img-width="800"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        <div className="absolute bottom-5 left-5 right-5">
          <product.icon className="w-8 h-8 text-accent-400 mb-2" />
          <h3 id={product.titleId} className="text-2xl font-bold text-white">
            {product.title}
          </h3>
          <p className="text-steel-200 text-sm mt-1">{product.subtitle}</p>
        </div>
      </div>
      <div className="p-6">
        <p id={product.descId} className="text-steel-500 text-sm leading-relaxed mb-6">
          {product.description}
        </p>

        {/* Key specs */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          {product.specs.slice(0, 4).map((spec) => (
            <div key={spec.label} className="bg-brand-50 rounded-lg p-3">
              <p className="text-xs text-steel-400">{spec.label}</p>
              <p className="text-sm font-semibold text-brand-700">{spec.value}</p>
            </div>
          ))}
        </div>

        <button
          onClick={() => setSelectedProduct(selectedProduct?.title === product.title ? null : product)}
          className="w-full inline-flex items-center justify-center px-5 py-2.5 bg-brand-500 hover:bg-brand-600 text-white rounded-lg text-sm font-medium transition-all duration-200"
        >
          {selectedProduct?.title === product.title ? 'Show Less' : 'View Full Details'}
          <ArrowRight className={`ml-2 w-4 h-4 transition-transform ${selectedProduct?.title === product.title ? 'rotate-90' : ''}`} />
        </button>

        {/* Expanded details */}
        {selectedProduct?.title === product.title && (
          <div className="mt-6 pt-6 border-t border-gray-100 animate-fadeIn">
            <h4 className="text-sm font-semibold text-brand-700 uppercase tracking-wider mb-4">Features</h4>
            <ul className="space-y-3 mb-6">
              {product.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent-500 flex-shrink-0 mt-0.5" />
                  <span className="text-steel-600 text-sm">{feature}</span>
                </li>
              ))}
            </ul>

            <h4 className="text-sm font-semibold text-brand-700 uppercase tracking-wider mb-4">Complete Specifications</h4>
            <div className="bg-brand-50 rounded-xl p-4">
              {product.specs.map((spec) => (
                <div key={spec.label} className="flex justify-between py-2 border-b border-brand-100 last:border-0">
                  <span className="text-sm text-steel-500">{spec.label}</span>
                  <span className="text-sm font-semibold text-brand-700">{spec.value}</span>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-2.5 bg-accent-500 hover:bg-accent-600 text-brand-900 font-semibold rounded-lg text-sm transition-all duration-200"
              >
                Request Quote for {product.title}
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div ref={containerRef}>
      {/* Page Header */}
      <section className="bg-brand-800 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-accent-400 text-sm font-semibold tracking-wider uppercase">Products</span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-3 mb-4">
              Our Machinery Range
            </h1>
            <p className="text-steel-300 text-lg leading-relaxed">
              Discover our complete line of sheet metal folding machines. From compact workshop 
              folders to fully automated industrial systems, every machine is built to deliver 
              exceptional precision and reliability.
            </p>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {allProducts.map((product, index) => (
              <ProductCard key={product.title} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-brand-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-brand-800 mb-4">
            Need Help Choosing the Right Machine?
          </h2>
          <p className="text-steel-500 text-lg max-w-2xl mx-auto mb-8">
            Our technical sales team can help match the perfect folding machine to your 
            production requirements, budget, and workspace.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-3.5 bg-brand-500 hover:bg-brand-600 text-white font-medium rounded-lg transition-all duration-200 shadow-sm hover:shadow-md"
          >
            Contact Our Sales Team
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}