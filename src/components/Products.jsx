import { ArrowRight, Cog, Layers, Settings, Wrench } from 'lucide-react';

const products = [
  {
    id: 'double-folder',
    title: 'Double Folding Machine',
    description: 'Advanced dual-axis control system for precise sheet metal folding with automatic material handling and programmable bending sequences.',
    icon: Layers,
    imgId: 'double-folder-machine',
    specs: ['Max Width: 3200mm', 'Bending Force: 160T', 'CNC Control'],
  },
  {
    id: 'sheet-metal-folder',
    title: 'Sheet Metal Folder',
    description: 'Heavy-duty construction with optimized beam geometry for consistent, repeatable bends across various material thicknesses.',
    icon: Cog,
    imgId: 'sheet-metal-folder',
    specs: ['Max Width: 2500mm', 'Bending Force: 100T', 'Manual/NC Control'],
  },
  {
    id: 'metal-folder-machine',
    title: 'Metal Folder Machine',
    description: 'Versatile machine designed for complex profiles and custom fabrication with quick-change tooling systems.',
    icon: Settings,
    imgId: 'metal-folder-machine',
    specs: ['Max Width: 2000mm', 'Bending Force: 80T', 'Quick Tool Change'],
  },
  {
    id: 'metal-folding-machine',
    title: 'Metal Folding Machine',
    description: 'Premium grade folding equipment with servo-driven backgauge for maximum precision and production efficiency.',
    icon: Wrench,
    imgId: 'metal-folding-machine',
    specs: ['Max Width: 4000mm', 'Bending Force: 200T', 'Servo Backgauge'],
  },
];

const Products = () => {
  return (
    <section
      id="products"
      className="py-24 bg-bg-light"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-accent font-semibold text-sm tracking-wider uppercase mb-4 block">
            Our Products
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold text-primary mb-6"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Precision-Engineered
            <br />
            Folding Solutions
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            From compact workshops to high-volume production facilities, our machines 
            deliver exceptional accuracy and reliability for every metal fabrication need.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
            >
              {/* Product Image Placeholder */}
              <div className="relative h-48 bg-gradient-to-br from-secondary to-primary overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <product.icon className="w-20 h-20 text-white/20" />
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-accent/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <ArrowRight className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3
                  className="text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {product.title}
                </h3>
                <p className="text-text-secondary text-sm mb-4 leading-relaxed">
                  {product.description}
                </p>

                {/* Specs */}
                <div className="space-y-2 mb-4">
                  {product.specs.map((spec, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm text-text-secondary">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                      {spec}
                    </div>
                  ))}
                </div>

                <button className="w-full text-accent font-semibold text-sm flex items-center justify-center gap-2 py-2 border-t border-gray-100 mt-4 group-hover:bg-accent/5 transition-colors">
                  Learn More
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <button className="bg-primary hover:bg-secondary text-white px-8 py-4 rounded-xl font-semibold transition-all hover:shadow-lg">
            View Full Product Catalog
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;
