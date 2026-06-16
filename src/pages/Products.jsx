import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const products = [
  {
    id: 'double-folding-machine',
    title: 'Double Folding Machine',
    subtitle: 'DF-Series',
    desc: 'Our flagship double folding machine delivers unmatched precision for complex sheet metal profiles. Dual-axis CNC control enables simultaneous folding operations, dramatically increasing throughput.',
    features: [
      'Dual-axis CNC folding system',
      'Working length up to 4000mm',
      'Material thickness up to 3mm steel',
      'Folding angle accuracy ±0.5°',
      'Automated backgauge positioning',
      'Touch screen control panel',
    ],
    imgId: 'prod-page-dfm-g1h2i3',
    titleId: 'prod-page-dfm-title',
    descId: 'prod-page-dfm-desc',
  },
  {
    id: 'double-folder',
    title: 'Double Folder',
    subtitle: 'DFL-Series',
    desc: 'The versatile double folder combines manual operation with precision engineering. Ideal for workshops requiring flexibility across a range of folding tasks without CNC complexity.',
    features: [
      'Manual/semi-automatic operation',
      'Working length up to 3100mm',
      'Material thickness up to 2mm steel',
      'Quick-change beam system',
      'Adjustable folding beam pressure',
      'Compact workshop footprint',
    ],
    imgId: 'prod-page-dfl-j4k5l6',
    titleId: 'prod-page-dfl-title',
    descId: 'prod-page-dfl-desc',
  },
  {
    id: 'sheet-metal-folder',
    title: 'Sheet Metal Folder',
    subtitle: 'SMF-Series',
    desc: 'Precision sheet metal folders designed for light to medium gauge applications. Perfect for HVAC, roofing, and general sheet metal fabrication with consistent, repeatable results.',
    features: [
      'Precision-ground folding beams',
      'Working length up to 2500mm',
      'Material thickness up to 1.5mm steel',
      'Digital angle readout',
      'Segmented folding fingers',
      'Low maintenance design',
    ],
    imgId: 'prod-page-smf-m7n8o9',
    titleId: 'prod-page-smf-title',
    descId: 'prod-page-smf-desc',
  },
  {
    id: 'sheet-metal-folding-machine',
    title: 'Sheet Metal Folding Machine',
    subtitle: 'SMC-Series',
    desc: 'Advanced CNC sheet metal folding machines for high-volume production environments. Fully automated operation with programmable bending sequences and integrated safety systems.',
    features: [
      'Full CNC programmable control',
      'Working length up to 6000mm',
      'Material thickness up to 4mm steel',
      'Automatic tool change',
      'Integrated safety light curtains',
      'Production data logging',
    ],
    imgId: 'prod-page-smc-p0q1r2',
    titleId: 'prod-page-smc-title',
    descId: 'prod-page-smc-desc',
  },
  {
    id: 'metal-folder',
    title: 'Metal Folder',
    subtitle: 'MF-Series',
    desc: 'Robust metal folders built for daily industrial use. These machines combine heavy-duty construction with user-friendly operation for reliable metal folding in any workshop.',
    features: [
      'Heavy-duty welded steel frame',
      'Working length up to 2000mm',
      'Material thickness up to 2.5mm steel',
      'Adjustable stop angles',
      'Foot pedal operation',
      'Industrial-grade hydraulics',
    ],
    imgId: 'prod-page-mf-s3t4u5',
    titleId: 'prod-page-mf-title',
    descId: 'prod-page-mf-desc',
  },
  {
    id: 'metal-folder-machine',
    title: 'Metal Folder Machine',
    subtitle: 'MFM-Series',
    desc: 'Professional-grade metal folder machines offering the perfect balance of capability and ease of use. Suitable for both custom fabrication shops and production lines.',
    features: [
      'Hybrid manual/CNC operation',
      'Working length up to 3200mm',
      'Material thickness up to 3mm steel',
      'Multi-step folding programs',
      'Quick-release clamping system',
      'Energy-efficient drive system',
    ],
    imgId: 'prod-page-mfm-v6w7x8',
    titleId: 'prod-page-mfm-title',
    descId: 'prod-page-mfm-desc',
  },
  {
    id: 'metal-folding-machine',
    title: 'Metal Folding Machine',
    subtitle: 'MFC-Series',
    desc: 'Our premium metal folding machines represent the pinnacle of folding technology. Fully automated with intelligent process control for the most demanding applications.',
    features: [
      'Intelligent CNC process control',
      'Working length up to 8000mm',
      'Material thickness up to 6mm steel',
      'Automatic profile measurement',
      'Remote diagnostics capability',
      'Industry 4.0 ready',
    ],
    imgId: 'prod-page-mfc-y9z0a1',
    titleId: 'prod-page-mfc-title',
    descId: 'prod-page-mfc-desc',
  },
];

const Products = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero Banner */}
      <section className="relative pt-32 pb-20 bg-navy">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold rounded-full translate-x-1/3 -translate-y-1/3" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gold font-medium text-sm tracking-[0.2em] uppercase mb-4">
            Our Product Range
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Metal Folding Machines
          </h1>
          <p className="text-navy-200 text-lg max-w-2xl leading-relaxed">
            Discover our complete range of precision-engineered folding solutions, 
            from compact sheet metal folders to advanced CNC folding centers.
          </p>
        </div>
      </section>

      {/* Product List */}
      <section className="py-20 md:py-28 bg-warm-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {products.map((product, index) => (
              <div
                key={product.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
                  index % 2 === 1 ? 'lg:direction-rtl' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="aspect-[4/3] rounded-lg overflow-hidden bg-navy-50 border border-warm-border">
                    <img
                      alt={product.title}
                      data-strk-img-id={product.imgId}
                      data-strk-img={`[${product.descId}] [${product.titleId}]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="800"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <p className="text-gold font-medium text-sm tracking-[0.2em] uppercase mb-2">
                    {product.subtitle}
                  </p>
                  <h3
                    id={product.titleId}
                    className="text-2xl sm:text-3xl font-bold text-navy mb-4"
                  >
                    {product.title}
                  </h3>
                  <p
                    id={product.descId}
                    className="text-warm-text leading-relaxed mb-6"
                  >
                    {product.desc}
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {product.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                        <span className="text-sm text-warm-text">{feat}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-white font-semibold px-6 py-3 rounded-md transition-colors duration-200"
                  >
                    Request Quote <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Need Help Choosing the Right Machine?
          </h2>
          <p className="text-navy-200 text-lg leading-relaxed mb-8">
            Our technical team can help you select the ideal folding solution 
            based on your material types, production volume, and budget.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-white font-semibold px-8 py-4 rounded-md transition-colors duration-200"
          >
            Contact Our Team <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Products;
