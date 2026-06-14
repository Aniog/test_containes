import { Settings, Layers, Box, Cog, Shield, Zap, ArrowRight } from 'lucide-react';

const products = [
  {
    id: 'double-folding-machine',
    title: 'Double Folding Machine',
    description: 'High-precision dual-action folding system for complex bends and consistent angles.',
    icon: Layers,
    features: ['Dual synchronized beams', 'CNC control system', 'Angle accuracy ±0.1°'],
  },
  {
    id: 'sheet-metal-folder',
    title: 'Sheet Metal Folder',
    description: 'Versatile folding solution for various sheet metal thicknesses and materials.',
    icon: Box,
    features: ['Adjustable clamping beam', 'Hydraulic operation', 'Quick tool change'],
  },
  {
    id: 'metal-folding-machine',
    title: 'Metal Folding Machine',
    description: 'Heavy-duty industrial folder built for high-volume production environments.',
    icon: Cog,
    features: ['Reinforced frame construction', 'High-speed operation', 'Low maintenance design'],
  },
  {
    id: 'double-folder',
    title: 'Double Folder',
    description: 'Compact dual-folder system ideal for medium-scale fabrication shops.',
    icon: Settings,
    features: ['Space-efficient design', 'Multiple bending modes', 'Easy programming'],
  },
  {
    id: 'sheet-metal-folding-machine',
    title: 'Sheet Metal Folding Machine',
    description: 'Precision-engineered folder for intricate sheet metal work and prototypes.',
    icon: Shield,
    features: ['Micro-bending capability', 'Touchscreen interface', 'Memory storage'],
  },
  {
    id: 'metal-folder-machine',
    title: 'Metal Folder Machine',
    description: 'Advanced folder with automated features for maximum productivity.',
    icon: Zap,
    features: ['Auto-bend sequencing', 'Load-sensing safety', 'Production monitoring'],
  },
];

const Products = () => {
  return (
    <section id="products" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="section-title">Our Product Range</h2>
          <p className="section-subtitle">
            From compact folders to heavy-duty industrial machines, we offer a complete
            range of sheet metal folding solutions tailored to your production needs.
          </p>
        </div>

        {/* Products Grid */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => {
            const Icon = product.icon;
            return (
              <div
                key={product.id}
                id={`product-${product.id}`}
                className="group card hover:-translate-y-1"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-slate-100 transition-colors group-hover:bg-slate-900">
                  <Icon className="h-6 w-6 text-slate-900 transition-colors group-hover:text-white" />
                </div>

                <h3 className="text-lg font-semibold text-slate-900">
                  {product.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {product.description}
                </p>

                <ul className="mt-4 space-y-2">
                  {product.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-2 text-sm text-slate-600"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-slate-900" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-900 transition-colors hover:text-slate-700"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            );
          })}
        </div>

        {/* CTA Banner */}
        <div className="mt-20 rounded-2xl bg-slate-900 px-8 py-12 sm:px-12 sm:py-16">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div>
              <h3 className="text-2xl font-bold text-white sm:text-3xl">
                Need a Custom Solution?
              </h3>
              <p className="mt-4 text-slate-300">
                Our engineering team can design and build custom folding machines
                to meet your specific production requirements.
              </p>
            </div>
            <div className="lg:text-right">
              <a href="#contact" className="btn-primary bg-white text-slate-900 hover:bg-slate-100">
                Discuss Your Requirements
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
