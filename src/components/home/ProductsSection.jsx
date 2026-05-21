import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const products = [
  {
    id: 'prod-1',
    titleId: 'prod-title-1',
    subtitleId: 'prod-sub-1',
    imgId: 'prod-img-d4e5f6',
    title: 'Double Folding Machine',
    subtitle: 'Heavy-duty industrial sheet metal double folding machine',
    description:
      'Our flagship double folding machine delivers unmatched accuracy for high-volume production. Engineered for thick-gauge metals with a dual-beam system for consistent, repeatable bends.',
    specs: ['Max Thickness: 3mm', 'Folding Length: Up to 3000mm', 'Dual Beam System'],
    badge: 'Best Seller',
  },
  {
    id: 'prod-2',
    titleId: 'prod-title-2',
    subtitleId: 'prod-sub-2',
    imgId: 'prod-img-g7h8i9',
    title: 'Sheet Metal Folder',
    subtitle: 'Precision sheet metal folder for fabrication workshops',
    description:
      'A versatile sheet metal folder designed for fabrication shops and metalworking professionals. Compact footprint with industrial-grade performance for daily production demands.',
    specs: ['Max Thickness: 2mm', 'Folding Length: Up to 2000mm', 'Manual & CNC Options'],
    badge: 'Popular',
  },
  {
    id: 'prod-3',
    titleId: 'prod-title-3',
    subtitleId: 'prod-sub-3',
    imgId: 'prod-img-j1k2l3',
    title: 'Metal Folding Machine',
    subtitle: 'Versatile metal folding machine for precision bending',
    description:
      'A robust metal folding machine built for precision bending across a wide range of materials. Ideal for HVAC, roofing, and architectural metalwork applications.',
    specs: ['Max Thickness: 2.5mm', 'Folding Length: Up to 2500mm', 'Hydraulic Drive'],
    badge: null,
  },
  {
    id: 'prod-4',
    titleId: 'prod-title-4',
    subtitleId: 'prod-sub-4',
    imgId: 'prod-img-m4n5o6',
    title: 'Double Folder',
    subtitle: 'Industrial double folder for complex metal profiles',
    description:
      'The double folder excels at creating complex profiles and box sections in a single setup. Reduces handling time and improves throughput for high-mix production environments.',
    specs: ['Max Thickness: 3mm', 'Folding Length: Up to 2500mm', 'CNC Controlled'],
    badge: 'New',
  },
  {
    id: 'prod-5',
    titleId: 'prod-title-5',
    subtitleId: 'prod-sub-5',
    imgId: 'prod-img-p7q8r9',
    title: 'Metal Folder Machine',
    subtitle: 'Compact metal folder machine for light fabrication',
    description:
      'A compact yet powerful metal folder machine suited for light fabrication, signage, and sheet metal enclosures. Easy to operate with intuitive controls and quick tooling changes.',
    specs: ['Max Thickness: 1.5mm', 'Folding Length: Up to 1500mm', 'Electro-Mechanical'],
    badge: null,
  },
  {
    id: 'prod-6',
    titleId: 'prod-title-6',
    subtitleId: 'prod-sub-6',
    imgId: 'prod-img-s1t2u3',
    title: 'Sheet Metal Folding Machine',
    subtitle: 'CNC sheet metal folding machine for automated production',
    description:
      'Our CNC sheet metal folding machine brings automation to your production line. Programmable bend sequences, automatic back gauge, and real-time angle monitoring for zero-defect output.',
    specs: ['Max Thickness: 4mm', 'Folding Length: Up to 4000mm', 'Full CNC Automation'],
    badge: 'Premium',
  },
];

const ProductCard = ({ product }) => {
  return (
    <div className="group bg-charcoal border border-iron-gray rounded-lg overflow-hidden hover:border-gold transition-all duration-300 hover:shadow-gold-glow flex flex-col">
      {/* Image */}
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          alt={product.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.subtitleId}] [${product.titleId}] sheet metal folding machine industrial`}
          data-strk-img-ratio="4x3"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'/%3E"
        />
        {product.badge && (
          <span className="absolute top-4 left-4 font-inter text-xs font-semibold bg-gold text-steel-black px-3 py-1 rounded-full tracking-wide">
            {product.badge}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <h3 id={product.titleId} className="font-playfair text-xl font-semibold text-off-white mb-2">
          {product.title}
        </h3>
        <p id={product.subtitleId} className="font-inter text-sm text-silver mb-4 leading-relaxed flex-1">
          {product.description}
        </p>

        {/* Specs */}
        <ul className="flex flex-col gap-1.5 mb-6">
          {product.specs.map((spec) => (
            <li key={spec} className="flex items-center gap-2 font-inter text-xs text-platinum">
              <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
              {spec}
            </li>
          ))}
        </ul>

        <button
          onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="flex items-center gap-2 font-inter text-sm font-semibold text-gold hover:text-gold-light transition-colors group/btn bg-transparent border-none p-0 w-fit"
        >
          Request Info
          <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};

const ProductsSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="products" ref={containerRef} className="bg-steel-black py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="font-inter text-xs font-semibold tracking-[0.3em] text-gold uppercase mb-4">
            Our Product Range
          </p>
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-off-white gold-underline-center">
            Metal Folding Machines
          </h2>
          <p className="font-inter text-base text-silver mt-8 max-w-2xl mx-auto leading-relaxed">
            From compact workshop folders to fully automated CNC systems — every ARTITECT machine is built to deliver precision, reliability, and long-term value.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="font-inter font-semibold text-sm bg-gold text-steel-black px-10 py-4 rounded hover:bg-gold-light transition-colors duration-200 shadow-gold-glow"
          >
            Get a Custom Quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
