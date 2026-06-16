import { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const products = [
  {
    id: 'double-folding-machine',
    titleId: 'prod-title-dfm',
    descId: 'prod-desc-dfm',
    imgId: 'prod-img-dfm-8a3c1d',
    name: 'Double Folding Machine',
    tagline: 'Dual-axis precision folding',
    description:
      'Our flagship double folding machine delivers unmatched accuracy with dual-axis control. Ideal for high-volume production environments requiring consistent, repeatable bends.',
    specs: ['Max Sheet Width: 3200mm', 'Folding Angle: 0–135°', 'Material Thickness: up to 3mm'],
  },
  {
    id: 'double-folder',
    titleId: 'prod-title-df',
    descId: 'prod-desc-df',
    imgId: 'prod-img-df-9b4d2e',
    name: 'Double Folder',
    tagline: 'Compact & versatile',
    description:
      'The ARTITECT Double Folder combines a compact footprint with industrial-grade performance. Perfect for workshops and fabrication shops that demand flexibility without compromise.',
    specs: ['Max Sheet Width: 2500mm', 'Folding Angle: 0–120°', 'Material Thickness: up to 2mm'],
  },
  {
    id: 'sheet-metal-folder',
    titleId: 'prod-title-smf',
    descId: 'prod-desc-smf',
    imgId: 'prod-img-smf-7c5e3f',
    name: 'Sheet Metal Folder',
    tagline: 'Industrial-grade sheet forming',
    description:
      'Engineered for heavy-duty sheet metal forming, this machine handles a wide range of materials with ease. CNC-controlled for precision and repeatability across every production run.',
    specs: ['Max Sheet Width: 4000mm', 'Folding Angle: 0–150°', 'Material Thickness: up to 4mm'],
  },
  {
    id: 'sheet-metal-folding-machine',
    titleId: 'prod-title-smfm',
    descId: 'prod-desc-smfm',
    imgId: 'prod-img-smfm-6d6f4a',
    name: 'Sheet Metal Folding Machine',
    tagline: 'CNC-powered automation',
    description:
      'Full CNC automation meets robust construction. This machine is designed for manufacturers who need high throughput with minimal operator intervention and maximum consistency.',
    specs: ['Max Sheet Width: 3600mm', 'Folding Angle: 0–135°', 'CNC Control: 4-axis'],
  },
  {
    id: 'metal-folder',
    titleId: 'prod-title-mf',
    descId: 'prod-desc-mf',
    imgId: 'prod-img-mf-5e7a5b',
    name: 'Metal Folder',
    tagline: 'Precision for every application',
    description:
      'A versatile metal folder built for precision across diverse applications. From architectural panels to HVAC components, this machine adapts to your production needs.',
    specs: ['Max Sheet Width: 2800mm', 'Folding Angle: 0–130°', 'Material: Steel, Aluminum, Copper'],
  },
  {
    id: 'metal-folding-machine',
    titleId: 'prod-title-mfm',
    descId: 'prod-desc-mfm',
    imgId: 'prod-img-mfm-4f8b6c',
    name: 'Metal Folding Machine',
    tagline: 'Heavy-duty performance',
    description:
      'Built for the most demanding industrial environments, this heavy-duty metal folding machine delivers exceptional power and precision for thick-gauge materials.',
    specs: ['Max Sheet Width: 5000mm', 'Folding Angle: 0–160°', 'Material Thickness: up to 6mm'],
  },
];

const SectionHeading = ({ eyebrow, title, subtitle }) => (
  <div className="text-center mb-16">
    <p className="font-sans text-xs font-semibold text-gold tracking-[0.3em] uppercase mb-4">
      {eyebrow}
    </p>
    <h2 className="font-serif text-3xl lg:text-5xl font-bold text-navy mb-4">{title}</h2>
    <div className="w-16 h-0.5 bg-gold mx-auto mb-6" />
    {subtitle && (
      <p className="font-sans text-steel text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
        {subtitle}
      </p>
    )}
  </div>
);

const Products = () => {
  const containerRef = useRef(null);
  const [activeProduct, setActiveProduct] = useState(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="products" ref={containerRef} className="py-24 lg:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionHeading
          eyebrow="Our Product Range"
          title="Precision Folding Machines"
          subtitle="From compact workshop folders to large-scale industrial systems — every ARTITECT machine is engineered to deliver flawless results."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <article
              key={product.id}
              className="bg-white border border-border-subtle shadow-md hover:shadow-xl transition-all duration-300 group flex flex-col"
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
                <div className="absolute top-4 left-0 bg-gold text-navy text-xs font-semibold px-4 py-1.5 tracking-wide">
                  {product.tagline}
                </div>
              </div>

              {/* Content */}
              <div className="p-7 flex flex-col flex-1">
                <h3
                  id={product.titleId}
                  className="font-serif text-xl font-bold text-navy mb-3"
                >
                  {product.name}
                </h3>
                <p
                  id={product.descId}
                  className="font-sans text-sm text-steel leading-relaxed mb-5 flex-1"
                >
                  {product.description}
                </p>

                {/* Specs */}
                <ul className="mb-6 space-y-1.5">
                  {product.specs.map((spec) => (
                    <li key={spec} className="flex items-center gap-2 text-xs font-sans text-steel">
                      <span className="w-1.5 h-1.5 bg-gold flex-shrink-0" />
                      {spec}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => setActiveProduct(product)}
                  className="flex items-center gap-2 font-sans text-sm font-semibold text-gold hover:text-gold-dark transition-colors duration-200 group/btn"
                >
                  Learn More
                  <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Product Detail Modal */}
      {activeProduct && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy/80"
          onClick={() => setActiveProduct(null)}
        >
          <div
            className="bg-white max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[16/9] bg-navy/5">
              <img
                alt={activeProduct.name}
                data-strk-img-id={`modal-${activeProduct.imgId}`}
                data-strk-img={`[modal-desc-${activeProduct.id}] [modal-title-${activeProduct.id}]`}
                data-strk-img-ratio="16x9"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="font-sans text-xs font-semibold text-gold tracking-widest uppercase mb-2">
                    {activeProduct.tagline}
                  </p>
                  <h3
                    id={`modal-title-${activeProduct.id}`}
                    className="font-serif text-2xl font-bold text-navy"
                  >
                    {activeProduct.name}
                  </h3>
                </div>
                <button
                  onClick={() => setActiveProduct(null)}
                  className="text-steel hover:text-navy text-2xl leading-none font-light ml-4"
                >
                  ×
                </button>
              </div>
              <p
                id={`modal-desc-${activeProduct.id}`}
                className="font-sans text-steel leading-relaxed mb-6"
              >
                {activeProduct.description}
              </p>
              <div className="border-t border-border-subtle pt-6">
                <p className="font-sans text-xs font-semibold text-navy tracking-widest uppercase mb-3">
                  Specifications
                </p>
                <ul className="space-y-2">
                  {activeProduct.specs.map((spec) => (
                    <li key={spec} className="flex items-center gap-3 text-sm font-sans text-steel">
                      <span className="w-2 h-2 bg-gold flex-shrink-0" />
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>
              <button
                onClick={() => {
                  setActiveProduct(null);
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="mt-8 w-full font-sans font-semibold text-sm bg-gold text-navy py-4 hover:bg-gold-dark transition-colors duration-200 tracking-widest uppercase"
              >
                Request a Quote
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Products;
