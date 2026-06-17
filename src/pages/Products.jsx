import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Gauge, Ruler, Weight, Zap } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const products = [
  {
    id: 'double-folding-machine',
    title: 'Double Folding Machine',
    tagline: 'High-efficiency dual-action folding',
    description: 'Our flagship double folding machine delivers two independent folding actions in a single pass, dramatically increasing throughput for high-volume sheet metal fabrication. Ideal for HVAC ductwork, electrical enclosures, and automotive panels.',
    specs: [
      { icon: Ruler, label: 'Max Length', value: '3200 mm' },
      { icon: Gauge, label: 'Max Thickness', value: '2.0 mm (mild steel)' },
      { icon: Zap, label: 'Fold Angle', value: '0° – 135°' },
      { icon: Weight, label: 'Machine Weight', value: '4,200 kg' },
    ],
    imgId: 'prod-double-folder-j1k2l3',
  },
  {
    id: 'sheet-metal-folder',
    title: 'Sheet Metal Folder',
    tagline: 'Versatile precision for any workshop',
    description: 'A compact yet powerful sheet metal folding machine designed for medium-volume production. Quick-change tooling and an intuitive CNC controller make it the top choice for job shops and custom fabrication.',
    specs: [
      { icon: Ruler, label: 'Max Length', value: '2500 mm' },
      { icon: Gauge, label: 'Max Thickness', value: '1.5 mm (mild steel)' },
      { icon: Zap, label: 'Fold Angle', value: '0° – 135°' },
      { icon: Weight, label: 'Machine Weight', value: '2,800 kg' },
    ],
    imgId: 'prod-sheet-folder-m4n5o6',
  },
  {
    id: 'metal-folding-machine',
    title: 'Metal Folding Machine',
    tagline: 'Heavy-duty industrial power',
    description: 'Built for the toughest jobs, our heavy-duty metal folding machine handles thick-gauge materials with ease. The reinforced frame and hydraulic clamping system maintain perfect alignment under maximum load.',
    specs: [
      { icon: Ruler, label: 'Max Length', value: '4000 mm' },
      { icon: Gauge, label: 'Max Thickness', value: '3.0 mm (mild steel)' },
      { icon: Zap, label: 'Fold Angle', value: '0° – 140°' },
      { icon: Weight, label: 'Machine Weight', value: '6,500 kg' },
    ],
    imgId: 'prod-metal-folder-p7q8r9',
  },
  {
    id: 'metal-folder-machine',
    title: 'Metal Folder Machine',
    tagline: 'Compact efficiency for light industry',
    description: 'Our most accessible metal folder machine — perfect for small shops, educational facilities, and light industrial use. Delivers professional-grade folds in a space-saving footprint with simplified controls.',
    specs: [
      { icon: Ruler, label: 'Max Length', value: '1500 mm' },
      { icon: Gauge, label: 'Max Thickness', value: '1.2 mm (mild steel)' },
      { icon: Zap, label: 'Fold Angle', value: '0° – 130°' },
      { icon: Weight, label: 'Machine Weight', value: '1,200 kg' },
    ],
    imgId: 'prod-metal-folder-machine-s0t1u2',
  },
];

export default function Products() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Page header */}
      <section className="bg-navy-800 section-padding">
        <div className="container-wide">
          <div className="w-12 h-0.5 bg-brass-500 mb-6" />
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white">
            Our Machines
          </h1>
          <p className="mt-4 text-warm-200 text-lg max-w-2xl leading-relaxed">
            Every ARTITECT machine is engineered for precision, built for
            durability, and backed by industry-leading support.
          </p>
        </div>
      </section>

      {/* Product list */}
      <section className="section-padding bg-warm-100">
        <div className="container-wide flex flex-col gap-16">
          {products.map((product, idx) => (
            <div
              key={product.id}
              className={`flex flex-col ${
                idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } gap-10 items-center`}
            >
              {/* Image */}
              <div className="w-full lg:w-1/2">
                <div className="aspect-[4/3] overflow-hidden rounded-sm bg-warm-200 border border-warm-200">
                  <img
                    alt={product.title}
                    data-strk-img-id={product.imgId}
                    data-strk-img={`[prod-${product.id}-tagline] [prod-${product.id}-title]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Info */}
              <div className="w-full lg:w-1/2">
                <span className="text-brass-600 text-sm font-semibold uppercase tracking-wider">
                  {product.tagline}
                </span>
                <h2
                  id={`prod-${product.id}-title`}
                  className="font-display text-2xl md:text-3xl font-bold text-navy-800 mt-2"
                >
                  {product.title}
                </h2>
                <p
                  id={`prod-${product.id}-tagline`}
                  className="mt-4 text-navy-500 leading-relaxed"
                >
                  {product.description}
                </p>

                {/* Specs */}
                <div className="grid grid-cols-2 gap-4 mt-6">
                  {product.specs.map((spec) => (
                    <div key={spec.label} className="flex items-start gap-3">
                      <spec.icon className="w-5 h-5 text-brass-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="text-xs text-navy-400 uppercase tracking-wide">
                          {spec.label}
                        </div>
                        <div className="font-semibold text-navy-800">
                          {spec.value}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <Link
                  to="/contact"
                  className="btn-primary mt-8 inline-flex"
                >
                  Request a Quote <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-navy-800 text-center">
        <div className="container-wide max-w-2xl">
          <div className="w-12 h-0.5 bg-brass-500 mx-auto mb-6" />
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white">
            Need a Custom Configuration?
          </h2>
          <p className="mt-4 text-warm-200 text-lg leading-relaxed">
            Our engineering team can tailor any machine to your exact
            specifications. Let us build the right solution for you.
          </p>
          <Link to="/contact" className="btn-brass text-base mt-8 inline-flex">
            Contact Engineering <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
