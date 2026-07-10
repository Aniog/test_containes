import { useEffect, useRef } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const products = [
  {
    id: 'double-folding-machine',
    titleId: 'prod-title-dfm',
    descId: 'prod-desc-dfm',
    imgId: 'prod-img-dfm-7a3b1c',
    name: 'Double Folding Machine',
    tagline: 'Dual-action precision folding',
    description: 'Our flagship double folding machine delivers simultaneous dual-fold capability for high-volume production environments. Engineered for consistent accuracy across every cycle.',
    specs: ['Up to 4000mm working length', 'Dual-fold in single pass', 'CNC-controlled back gauge', 'Hydraulic clamping system'],
    badge: 'Flagship',
  },
  {
    id: 'double-folder',
    titleId: 'prod-title-df',
    descId: 'prod-desc-df',
    imgId: 'prod-img-df-8c4d2e',
    name: 'Double Folder',
    tagline: 'Compact industrial performance',
    description: 'The Artitect Double Folder combines robust construction with intuitive controls. Ideal for workshops and production lines requiring reliable, repeatable folding results.',
    specs: ['Working length 1000–3000mm', 'Motorized back gauge', 'Digital angle readout', 'Quick-change tooling'],
    badge: 'Popular',
  },
  {
    id: 'sheet-metal-folder',
    titleId: 'prod-title-smf',
    descId: 'prod-desc-smf',
    imgId: 'prod-img-smf-5e6f3a',
    name: 'Sheet Metal Folder',
    tagline: 'Versatile sheet forming',
    description: 'Designed for versatility across a wide range of sheet metal thicknesses and materials. The Artitect Sheet Metal Folder handles mild steel, stainless, and aluminium with ease.',
    specs: ['Material: mild steel, SS, aluminium', 'Thickness up to 3mm', 'Programmable sequences', 'Safety light curtain'],
    badge: null,
  },
  {
    id: 'sheet-metal-folding-machine',
    titleId: 'prod-title-smfm',
    descId: 'prod-desc-smfm',
    imgId: 'prod-img-smfm-2b7c9d',
    name: 'Sheet Metal Folding Machine',
    tagline: 'Heavy-duty industrial folder',
    description: 'Built for demanding industrial applications, this heavy-duty folding machine offers exceptional rigidity and precision. Suitable for structural components and complex profiles.',
    specs: ['Heavy-gauge steel frame', 'Servo-electric drive', 'Touch-screen HMI', 'Remote diagnostics'],
    badge: 'Heavy Duty',
  },
  {
    id: 'metal-folder',
    titleId: 'prod-title-mf',
    descId: 'prod-desc-mf',
    imgId: 'prod-img-mf-4a1e8f',
    name: 'Metal Folder',
    tagline: 'Precision at every angle',
    description: 'The Artitect Metal Folder is engineered for precision angle control and repeatability. Perfect for HVAC, cladding, and architectural metalwork applications.',
    specs: ['Angle accuracy ±0.1°', 'Automatic crowning', 'Multi-radius tooling', 'CE certified'],
    badge: null,
  },
  {
    id: 'metal-folder-machine',
    titleId: 'prod-title-mfm',
    descId: 'prod-desc-mfm',
    imgId: 'prod-img-mfm-9d3c5b',
    name: 'Metal Folder Machine',
    tagline: 'Smart automation ready',
    description: 'Industry 4.0 ready metal folder machine with integrated automation interfaces. Connects seamlessly to production management systems for smart factory environments.',
    specs: ['Industry 4.0 connectivity', 'Automated material handling', 'Real-time monitoring', 'Predictive maintenance'],
    badge: 'Smart',
  },
  {
    id: 'metal-folding-machine',
    titleId: 'prod-title-mfmx',
    descId: 'prod-desc-mfmx',
    imgId: 'prod-img-mfmx-6e2a4c',
    name: 'Metal Folding Machine',
    tagline: 'Complete folding solution',
    description: 'A comprehensive metal folding solution combining speed, accuracy, and ease of use. The Artitect Metal Folding Machine is the choice of fabricators worldwide.',
    specs: ['High-speed operation', 'Intuitive programming', 'Modular tooling system', 'Global service network'],
    badge: null,
  },
];

export default function Products() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="products" ref={containerRef} className="bg-navy py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-gold" />
            <span className="text-xs font-semibold tracking-widest uppercase text-gold">Our Product Range</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-text-primary tracking-tight mb-4">
            Precision Folding Machines
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl leading-relaxed">
            Every Artitect machine is built to exacting standards — delivering consistent, repeatable results in the most demanding production environments.
          </p>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((product) => (
            <article
              key={product.id}
              className="group bg-surface border border-border-steel rounded-sm overflow-hidden hover:border-gold/50 transition-all duration-300 flex flex-col"
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-[4/3]">
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
                  <span className="absolute top-4 left-4 bg-gold text-navy text-xs font-bold px-3 py-1 rounded-sm tracking-wide uppercase">
                    {product.badge}
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <div className="mb-1">
                  <span className="text-xs font-semibold tracking-widest uppercase text-gold/80">{product.tagline}</span>
                </div>
                <h3 id={product.titleId} className="text-xl font-bold text-text-primary mb-3 leading-snug">
                  {product.name}
                </h3>
                <p id={product.descId} className="text-text-secondary text-sm leading-relaxed mb-5 flex-1">
                  {product.description}
                </p>

                {/* Specs */}
                <ul className="space-y-2 mb-6">
                  {product.specs.map((spec) => (
                    <li key={spec} className="flex items-center gap-2 text-xs text-text-secondary">
                      <CheckCircle className="w-3.5 h-3.5 text-gold shrink-0" />
                      {spec}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                  className="inline-flex items-center gap-2 text-gold text-sm font-semibold hover:text-gold-light transition-colors group/link"
                >
                  Request Info
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
