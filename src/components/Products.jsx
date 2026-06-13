import { useEffect, useRef } from 'react';
import { ArrowRight, Layers, MoveRight, FoldVertical, Wrench } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const products = [
  {
    id: 'double-folding-machine',
    title: 'Double Folding Machine',
    description:
      'Our flagship double folding machine delivers unmatched precision for complex sheet metal operations. Designed for high-volume production with minimal material waste.',
    specs: ['Max folding length: 3,200mm', 'Thickness capacity: 0.5–3.0mm', 'CNC control system'],
    icon: Layers,
  },
  {
    id: 'double-folder',
    title: 'Double Folder',
    description:
      'A compact yet powerful double folder engineered for workshops that require versatility without sacrificing accuracy. Ideal for custom fabrication jobs.',
    specs: ['Compact footprint: 2.5m x 1.2m', 'Quick tooling change', 'Digital readout'],
    icon: FoldVertical,
  },
  {
    id: 'sheet-metal-folder',
    title: 'Sheet Metal Folder',
    description:
      'Built for professionals, this sheet metal folder combines rugged construction with precise angle control. The go-to tool for consistent, repeatable bends.',
    specs: ['Manual or hydraulic options', 'Precision angle stops', 'Heavy-duty steel frame'],
    icon: Wrench,
  },
  {
    id: 'sheet-metal-folding-machine',
    title: 'Sheet Metal Folding Machine',
    description:
      'A full-scale automated solution for sheet metal folding. Integrates seamlessly into production lines with programmable back gauges and multi-axis control.',
    specs: ['Automated back gauge', 'Multi-bend programming', 'Industrial-grade hydraulics'],
    icon: Layers,
  },
  {
    id: 'metal-folder',
    title: 'Metal Folder',
    description:
      'Versatile metal folder handling a wide range of materials from aluminum to stainless steel. Designed for workshops needing adaptability and speed.',
    specs: ['Universal material compatibility', 'Ergonomic operating height', 'Safety interlocks'],
    icon: FoldVertical,
  },
  {
    id: 'metal-folder-machine',
    title: 'Metal Folder Machine',
    description:
      'A robust metal folder machine that handles the toughest jobs. Reinforced construction meets intuitive controls for reliable daily operation.',
    specs: ['Reinforced frame design', 'Servo-electric drive', 'Touchscreen interface'],
    icon: Wrench,
  },
  {
    id: 'metal-folding-machine',
    title: 'Metal Folding Machine',
    description:
      'The ultimate metal folding machine for industrial-scale operations. Combines speed, power, and precision in a single, integrated platform.',
    specs: ['High-speed servo drive', 'Automatic crowning', 'Remote diagnostics'],
    icon: MoveRight,
  },
];

export default function Products() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section
      id="products"
      ref={containerRef}
      className="py-24 md:py-32 bg-bg relative"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-accent text-xs uppercase tracking-extra-wide font-semibold mb-4">
            Our Product Line
          </span>
          <h2
            id="section-title-products"
            className="text-3xl sm:text-4xl md:text-5xl font-heading font-semibold text-text-primary mb-5"
          >
            Folding Solutions
          </h2>
          <p
            id="section-subtitle-products"
            className="text-text-secondary text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
          >
            From compact workshop folders to full-scale industrial folding machines,
            we engineer equipment that meets every production need with precision.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => {
            const Icon = product.icon;
            return (
              <div
                key={product.id}
                className="group bg-surface border border-border rounded-lg overflow-hidden hover:border-border-hover hover:-translate-y-1 transition-all duration-300"
              >
                {/* Product Image */}
                <div className="relative h-48 bg-border/30 overflow-hidden">
                  <img
                    data-strk-img-id={`product-img-${product.id}`}
                    data-strk-img={`[product-desc-${product.id}] [product-title-${product.id}] [section-subtitle-products] [section-title-products]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface/80 to-transparent" />
                  <div className="absolute bottom-3 left-4">
                    <Icon className="w-5 h-5 text-accent" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3
                    id={`product-title-${product.id}`}
                    className="text-lg font-heading font-semibold text-text-primary mb-2"
                  >
                    {product.title}
                  </h3>
                  <p
                    id={`product-desc-${product.id}`}
                    className="text-text-secondary text-sm leading-relaxed mb-4"
                  >
                    {product.description}
                  </p>

                  {/* Specs */}
                  <ul className="mb-5 space-y-1.5">
                    {product.specs.map((spec, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 text-text-muted text-xs"
                      >
                        <span className="w-1.5 h-1.5 bg-accent/60 rounded-full flex-shrink-0" />
                        {spec}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="inline-flex items-center gap-2 text-accent text-sm font-medium hover:text-accent-hover transition-colors duration-200 group/link"
                  >
                    Inquire Now
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-200" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
