import { useEffect, useRef } from 'react';
import { Ruler, Weight, Gauge, ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const products = [
  {
    id: 'double-folding-machine',
    title: 'Double Folding Machine',
    subtitle: 'Heavy-Duty Industrial',
    description:
      'Our flagship double folding machine delivers exceptional precision for complex metal forming operations. Features dual synchronized bending beams with programmable back gauge systems for repeatable accuracy.',
    specs: [
      { label: 'Max Bending Length', value: '4,000 mm' },
      { label: 'Max Capacity', value: '16 mm mild steel' },
      { label: 'Back Gauge Range', value: '1,000 mm' },
      { label: 'Bending Angle', value: '0 - 135 degrees' },
      { label: 'Control', value: 'CNC touch screen' },
      { label: 'Weight', value: '12,500 kg' },
    ],
    features: ['Dual synchronized beams', 'Automatic crowning', 'Laser angle measurement', 'IoT ready'],
  },
  {
    id: 'double-folder',
    title: 'Double Folder',
    subtitle: 'Compact Workshop Series',
    description:
      'A versatile double folder designed for fabrication shops requiring flexibility. Compact footprint with professional-grade folding capability for medium-duty applications.',
    specs: [
      { label: 'Max Bending Length', value: '3,000 mm' },
      { label: 'Max Capacity', value: '10 mm mild steel' },
      { label: 'Back Gauge Range', value: '750 mm' },
      { label: 'Bending Angle', value: '0 - 135 degrees' },
      { label: 'Control', value: 'Digital NC' },
      { label: 'Weight', value: '7,200 kg' },
    ],
    features: ['Quick tool change', 'Foot pedal control', 'Compact design', 'Energy efficient'],
  },
  {
    id: 'sheet-metal-folder',
    title: 'Sheet Metal Folder',
    subtitle: 'Professional Grade',
    description:
      'Engineered for sheet metal workshops, this folder handles a wide range of gauges with ease. Features segmented upper tooling for box and pan folding applications.',
    specs: [
      { label: 'Max Bending Length', value: '3,200 mm' },
      { label: 'Max Capacity', value: '12 mm mild steel' },
      { label: 'Back Gauge Range', value: '800 mm' },
      { label: 'Bending Angle', value: '0 - 145 degrees' },
      { label: 'Control', value: 'CNC or Manual' },
      { label: 'Weight', value: '8,800 kg' },
    ],
    features: ['Segmented tooling', 'Box & pan capable', 'Hydraulic clamping', 'Adjustable gap'],
  },
  {
    id: 'sheet-metal-folding-machine',
    title: 'Sheet Metal Folding Machine',
    subtitle: 'Automated Production',
    description:
      'High-speed automated folding solution for production environments. Integrates seamlessly with robotic material handling systems for unmanned operation.',
    specs: [
      { label: 'Max Bending Length', value: '5,000 mm' },
      { label: 'Max Capacity', value: '20 mm mild steel' },
      { label: 'Back Gauge Range', value: '1,200 mm' },
      { label: 'Bending Angle', value: '0 - 180 degrees' },
      { label: 'Control', value: 'Full CNC + Robot I/O' },
      { label: 'Weight', value: '18,000 kg' },
    ],
    features: ['Robot integration', 'Automatic tool changer', 'Vision alignment', 'Production analytics'],
  },
  {
    id: 'metal-folder',
    title: 'Metal Folder',
    subtitle: 'Entry-Level Precision',
    description:
      'An affordable yet capable metal folder perfect for smaller shops and educational facilities. Delivers consistent results without the complexity of full CNC systems.',
    specs: [
      { label: 'Max Bending Length', value: '2,500 mm' },
      { label: 'Max Capacity', value: '8 mm mild steel' },
      { label: 'Back Gauge Range', value: '600 mm' },
      { label: 'Bending Angle', value: '0 - 135 degrees' },
      { label: 'Control', value: 'Manual / Digital' },
      { label: 'Weight', value: '4,500 kg' },
    ],
    features: ['Easy to operate', 'Low maintenance', 'Portable', 'Cost effective'],
  },
  {
    id: 'metal-folder-machine',
    title: 'Metal Folder Machine',
    subtitle: 'Premium Series',
    description:
      'The ultimate metal folder machine combining power, precision, and smart technology. Designed for high-mix, low-volume production with rapid setup times.',
    specs: [
      { label: 'Max Bending Length', value: '4,500 mm' },
      { label: 'Max Capacity', value: '18 mm mild steel' },
      { label: 'Back Gauge Range', value: '1,100 mm' },
      { label: 'Bending Angle', value: '0 - 160 degrees' },
      { label: 'Control', value: 'Advanced CNC' },
      { label: 'Weight', value: '15,200 kg' },
    ],
    features: ['Offline programming', 'Automatic crowning', 'Tool library', 'Remote diagnostics'],
  },
];

export default function Products() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Page Header */}
      <section className="pt-28 pb-12 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-gold-400 text-sm font-semibold tracking-widest uppercase">
              Our Catalog
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
              Sheet Metal Folding Machines
            </h1>
            <p className="text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Explore our comprehensive range of double folding machines, metal folders, and sheet metal folding equipment designed for every scale of operation.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10">
            {products.map((product) => (
              <div
                key={product.id}
                className="group bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-xl hover:border-gold-300 transition-all duration-300"
              >
                <div className="grid md:grid-cols-5 gap-0">
                  <div className="md:col-span-2 aspect-[4/3] md:aspect-auto bg-slate-100 overflow-hidden">
                    <img
                      data-strk-img-id={`product-detail-${product.id}`}
                      data-strk-img={`[product-title-${product.id}] [product-subtitle-${product.id}]`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="500"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={product.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="md:col-span-3 p-6 md:p-8 flex flex-col">
                    <div className="mb-1">
                      <span className="text-xs text-gold-600 font-semibold uppercase tracking-widest">
                        {product.subtitle}
                      </span>
                    </div>
                    <h2
                      id={`product-title-${product.id}`}
                      className="text-xl font-bold text-navy-900 mb-3"
                    >
                      {product.title}
                    </h2>
                    <p
                      id={`product-subtitle-${product.id}`}
                      className="text-sm text-slate-500 leading-relaxed mb-5"
                    >
                      {product.description}
                    </p>

                    <div className="grid grid-cols-2 gap-x-4 gap-y-2 mb-5">
                      {product.specs.slice(0, 4).map((spec) => (
                        <div key={spec.label}>
                          <div className="text-[10px] text-slate-400 uppercase tracking-wider">
                            {spec.label}
                          </div>
                          <div className="text-sm font-semibold text-navy-900">
                            {spec.value}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {product.features.map((feat) => (
                        <span
                          key={feat}
                          className="text-xs bg-gold-50 text-gold-700 border border-gold-200 rounded-full px-3 py-1"
                        >
                          {feat}
                        </span>
                      ))}
                    </div>

                    <a
                      href="#contact"
                      className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-gold-600 hover:text-gold-700 transition-colors"
                    >
                      Request Quote <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specs Comparison */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-gold-600 text-sm font-semibold tracking-widest uppercase">
              Compare
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 mt-3">
              Specifications at a Glance
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-navy-900 text-white">
                  <th className="text-left px-4 py-3 font-semibold rounded-tl-lg">Model</th>
                  <th className="text-center px-4 py-3 font-semibold">Length</th>
                  <th className="text-center px-4 py-3 font-semibold">Capacity</th>
                  <th className="text-center px-4 py-3 font-semibold">Control</th>
                  <th className="text-center px-4 py-3 font-semibold rounded-tr-lg">Weight</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product, i) => (
                  <tr
                    key={product.id}
                    className={`border-b border-slate-200 ${
                      i % 2 === 0 ? 'bg-white' : 'bg-slate-50'
                    }`}
                  >
                    <td className="px-4 py-4 font-semibold text-navy-900">{product.title}</td>
                    <td className="px-4 py-4 text-center text-slate-600">{product.specs[0].value}</td>
                    <td className="px-4 py-4 text-center text-slate-600">{product.specs[1].value}</td>
                    <td className="px-4 py-4 text-center text-slate-600">{product.specs[4].value}</td>
                    <td className="px-4 py-4 text-center text-slate-600">{product.specs[5].value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
