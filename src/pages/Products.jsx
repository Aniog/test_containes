import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const Products = () => {
  const productLines = [
    {
      name: 'Double Folding Machine',
      slug: 'double-folding-machine',
      description:
        'Our flagship double folding machine delivers dual synchronized axes for complex bends in a single setup. Designed for high-mix, high-precision production environments.',
      highlights: [
        'Dual synchronized folding axes',
        'Servo-driven motion control',
        'Touchscreen programming interface',
        'Quick-change tooling system',
      ],
    },
    {
      name: 'Double Folder',
      slug: 'double-folder',
      description:
        'A compact yet powerful double folder built for medium-duty applications. Ideal for shops that need precision folding without the footprint of a full production system.',
      highlights: [
        'Space-saving footprint',
        'Manual and CNC configurations',
        'Adjustable backgauge',
        'Low maintenance design',
      ],
    },
    {
      name: 'Sheet Metal Folder',
      slug: 'sheet-metal-folder',
      description:
        'Versatile sheet metal folder engineered for consistent, repeatable results across a wide range of materials and thicknesses.',
      highlights: [
        'Wide material compatibility',
        'Precision clamping system',
        'Easy angle adjustment',
        'Optional automation packages',
      ],
    },
    {
      name: 'Sheet Metal Folding Machine',
      slug: 'sheet-metal-folding-machine',
      description:
        'Industrial-grade sheet metal folding machine built for high-volume production. Combines speed with the accuracy your customers expect.',
      highlights: [
        'High-speed operation',
        'Robotic integration ready',
        'Advanced safety guarding',
        'Production monitoring tools',
      ],
    },
    {
      name: 'Metal Folder',
      slug: 'metal-folder',
      description:
        'Heavy-duty metal folder for demanding applications. Built around a rigid frame and premium drivetrain for maximum uptime.',
      highlights: [
        'Reinforced steel construction',
        'Heavy-duty drivetrain',
        'Extended warranty options',
        'On-site service support',
      ],
    },
    {
      name: 'Metal Folder Machine',
      slug: 'metal-folder-machine',
      description:
        'Purpose-built metal folder machine for fabricators who need repeatable accuracy on thick materials and tight tolerances.',
      highlights: [
        'Thick-material capability',
        'Tight-tolerance folding',
        'Operator-friendly controls',
        'Modular accessory options',
      ],
    },
    {
      name: 'Metal Folding Machine',
      slug: 'metal-folding-machine',
      description:
        'Our most advanced metal folding machine, combining multi-axis control with smart factory connectivity for tomorrow’s production floor.',
      highlights: [
        'Multi-axis CNC control',
        'Smart factory connectivity',
        'Predictive maintenance alerts',
        'Remote diagnostics',
      ],
    },
  ];

  return (
    <div>
      <section className="bg-slate-900">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-slate-300">
              Product Catalog
            </p>
            <h1 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Sheet Metal Folding Machinery
            </h1>
            <p className="mt-4 text-base leading-relaxed text-slate-300">
              From double folding machines to precision metal folders, our product line covers
              every requirement for modern sheet metal fabrication.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            {productLines.map((product) => (
              <div
                key={product.slug}
                className="flex flex-col rounded-xl border border-slate-200 bg-white shadow-sm"
              >
                <div className="aspect-[16/9] w-full overflow-hidden rounded-t-xl bg-slate-100">
                  <img
                    alt={product.name}
                    data-strk-img-id={`products-${product.slug}`}
                    data-strk-img={`[${product.name}] [sheet metal folding machine] [metal folder]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="1200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h2 className="text-lg font-semibold text-slate-900">{product.name}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {product.description}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {product.highlights.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-slate-700"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-slate-900" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <a
                      href="/contact"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 hover:text-slate-700"
                    >
                      Request details
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
