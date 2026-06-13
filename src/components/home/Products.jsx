import { useEffect, useRef, useState } from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const products = [
  {
    id: 'double-folding-machine',
    titleId: 'prod-title-dfm',
    descId: 'prod-desc-dfm',
    imgId: 'prod-img-dfm-9a3b1c',
    name: 'Double Folding Machine',
    tagline: 'Dual-action precision folding',
    description:
      'Our flagship double folding machine delivers simultaneous dual-fold capability with micron-level accuracy. Ideal for high-volume production environments requiring consistent, repeatable bends.',
    specs: ['Max Sheet Width: 3000mm', 'Folding Angle: 0–135°', 'Material Thickness: up to 3mm', 'CNC Controlled'],
    badge: 'Bestseller',
  },
  {
    id: 'double-folder',
    titleId: 'prod-title-df',
    descId: 'prod-desc-df',
    imgId: 'prod-img-df-7c4d2e',
    name: 'Double Folder',
    tagline: 'Compact dual-fold engineering',
    description:
      'The ARTITECT Double Folder combines robust construction with an intuitive interface. Perfect for workshops and fabrication shops that need reliable double-fold performance in a compact footprint.',
    specs: ['Max Sheet Width: 2000mm', 'Folding Angle: 0–120°', 'Material Thickness: up to 2mm', 'Digital Readout'],
    badge: 'Popular',
  },
  {
    id: 'sheet-metal-folder',
    titleId: 'prod-title-smf',
    descId: 'prod-desc-smf',
    imgId: 'prod-img-smf-5e6f3a',
    name: 'Sheet Metal Folder',
    tagline: 'Versatile sheet metal forming',
    description:
      'Engineered for versatility, the ARTITECT Sheet Metal Folder handles a wide range of materials and thicknesses. Its ergonomic design reduces operator fatigue during extended production runs.',
    specs: ['Max Sheet Width: 2500mm', 'Folding Angle: 0–180°', 'Material Thickness: up to 2.5mm', 'Auto Back-gauge'],
    badge: null,
  },
  {
    id: 'sheet-metal-folding-machine',
    titleId: 'prod-title-smfm',
    descId: 'prod-desc-smfm',
    imgId: 'prod-img-smfm-2b8c4d',
    name: 'Sheet Metal Folding Machine',
    tagline: 'Industrial-grade folding power',
    description:
      'Built for heavy-duty industrial applications, this machine offers unmatched rigidity and precision. Advanced servo-electric drive ensures energy efficiency without compromising on power.',
    specs: ['Max Sheet Width: 4000mm', 'Folding Angle: 0–135°', 'Material Thickness: up to 4mm', 'Servo-Electric Drive'],
    badge: 'Industrial',
  },
  {
    id: 'metal-folder',
    titleId: 'prod-title-mf',
    descId: 'prod-desc-mf',
    imgId: 'prod-img-mf-1a9e5f',
    name: 'Metal Folder',
    tagline: 'Professional-grade metal forming',
    description:
      'The ARTITECT Metal Folder is the go-to choice for professional fabricators. Its robust steel frame and precision-ground beam ensure consistent results across all metal types.',
    specs: ['Max Sheet Width: 2000mm', 'Folding Angle: 0–135°', 'Material Thickness: up to 2mm', 'Manual/CNC Options'],
    badge: null,
  },
  {
    id: 'metal-folding-machine',
    titleId: 'prod-title-mfm',
    descId: 'prod-desc-mfm',
    imgId: 'prod-img-mfm-6d7a8b',
    name: 'Metal Folding Machine',
    tagline: 'High-performance automated folding',
    description:
      'Our most advanced metal folding machine features full CNC automation, real-time angle monitoring, and a touchscreen HMI for effortless programming of complex bend sequences.',
    specs: ['Max Sheet Width: 3500mm', 'Folding Angle: 0–180°', 'Material Thickness: up to 3.5mm', 'Full CNC + HMI'],
    badge: 'Advanced',
  },
];

const Products = () => {
  const containerRef = useRef(null);
  const [activeProduct, setActiveProduct] = useState(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="products" ref={containerRef} className="bg-surface py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-gold" />
            <span className="text-gold text-xs tracking-widest uppercase font-sans font-semibold">Our Product Range</span>
            <div className="w-8 h-px bg-gold" />
          </div>
          <h2 className="font-serif text-navy text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Precision Folding Machines
          </h2>
          <p className="text-navy/60 font-sans text-lg max-w-2xl mx-auto leading-relaxed">
            From compact workshop folders to industrial-grade CNC systems — every ARTITECT machine is built to exceed expectations.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white border border-gray-100 hover:border-gold/40 hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              {/* Product Image */}
              <div className="relative overflow-hidden aspect-[4/3] bg-navy/5">
                <img
                  alt={product.name}
                  data-strk-img-id={product.imgId}
                  data-strk-img={`[${product.descId}] [${product.titleId}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {product.badge && (
                  <div className="absolute top-4 left-4 bg-gold text-navy text-xs font-semibold tracking-widest uppercase px-3 py-1">
                    {product.badge}
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-7 flex flex-col flex-1">
                <p className="text-gold text-xs tracking-widest uppercase font-sans font-semibold mb-2">
                  {product.tagline}
                </p>
                <h3
                  id={product.titleId}
                  className="font-serif text-navy text-xl font-bold mb-3 leading-tight"
                >
                  {product.name}
                </h3>
                <p
                  id={product.descId}
                  className="text-navy/60 font-sans text-sm leading-relaxed mb-5 flex-1"
                >
                  {product.description}
                </p>

                {/* Specs */}
                <ul className="space-y-1.5 mb-6">
                  {product.specs.map((spec) => (
                    <li key={spec} className="flex items-center gap-2 text-xs font-sans text-navy/70">
                      <ChevronRight className="w-3 h-3 text-gold shrink-0" />
                      {spec}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={scrollToContact}
                  className="flex items-center gap-2 text-gold text-xs font-semibold tracking-widest uppercase font-sans hover:gap-3 transition-all duration-200 group/btn"
                >
                  Request Info
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <button
            onClick={scrollToContact}
            className="bg-navy text-surface text-sm font-semibold tracking-widest uppercase px-10 py-4 hover:bg-navy-light transition-colors duration-200 font-sans"
          >
            Get a Custom Quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;
