import { ArrowRight, CheckCircle } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Professional Double Folder',
    category: 'Heavy Duty',
    description: 'Industrial-grade double folding machine designed for high-volume sheet metal processing with exceptional precision and reliability.',
    specs: ['Max Width: 3200mm', 'Bending Capacity: 4mm steel', 'Motor Power: 4kW'],
    popular: true,
  },
  {
    id: 2,
    name: 'Premium Sheet Metal Folder',
    category: 'Standard Series',
    description: 'Versatile sheet metal folding machine ideal for workshops and light industrial applications. Easy operation with consistent results.',
    specs: ['Max Width: 2500mm', 'Bending Capacity: 2.5mm steel', 'Motor Power: 2.2kW'],
    popular: false,
  },
  {
    id: 3,
    name: 'Heavy-Duty Metal Folder',
    category: 'Industrial',
    description: 'Built for the most demanding production environments. Features reinforced frame and advanced control systems for maximum productivity.',
    specs: ['Max Width: 4000mm', 'Bending Capacity: 6mm steel', 'Motor Power: 7.5kW'],
    popular: false,
  },
  {
    id: 4,
    name: 'Compact Metal Folder Machine',
    category: 'Entry Level',
    description: 'Space-efficient design without compromising quality. Perfect for small workshops and custom fabrication shops.',
    specs: ['Max Width: 1600mm', 'Bending Capacity: 2mm steel', 'Motor Power: 1.5kW'],
    popular: false,
  },
  {
    id: 5,
    name: 'CNC Metal Folding Machine',
    category: 'Advanced',
    description: 'Computer-controlled precision folding with programmable sequences. Achieve complex geometries with repeatability.',
    specs: ['Max Width: 3000mm', 'Bending Capacity: 3mm steel', 'CNC Control System'],
    popular: true,
  },
  {
    id: 6,
    name: 'Portable Sheet Metal Folder',
    category: 'Flexible',
    description: 'Mobile solution for on-site fabrication. Quick setup and easy transportation while maintaining professional results.',
    specs: ['Max Width: 2000mm', 'Bending Capacity: 1.5mm steel', 'Portable Design'],
    popular: false,
  },
];

const Products = () => {
  return (
    <section id="products" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="accent-line" />
          <h2 className="section-title">Our Product Range</h2>
          <p className="section-subtitle">
            From compact workshop solutions to heavy industrial systems, find the perfect metal folding machine for your needs.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="card group relative flex flex-col"
            >
              {/* Popular Badge */}
              {product.popular && (
                <div className="absolute top-4 right-4 z-10">
                  <span className="px-3 py-1 bg-[#d4a574] text-[#1a2744] text-xs font-semibold rounded-full">
                    Popular
                  </span>
                </div>
              )}

              {/* Image Placeholder */}
              <div className="relative h-48 bg-gradient-to-br from-[#1a2744] to-[#2d3748] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 opacity-20" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23d4a574' fill-opacity='0.3'%3E%3Cpath d='M20 20L0 40V20L20 0z'/%3E%3C/g%3E%3C/svg%3E")`,
                }} />
                <div className="text-center text-white/60">
                  <svg className="w-16 h-16 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  <span className="text-xs tracking-wider uppercase">Product Image</span>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-grow p-6">
                <span className="text-[#d4a574] text-xs font-semibold tracking-wider uppercase mb-2">
                  {product.category}
                </span>
                <h3 className="text-xl font-display font-semibold text-[#1a2744] mb-3">
                  {product.name}
                </h3>
                <p className="text-[#4a5568] text-sm mb-4 flex-grow">
                  {product.description}
                </p>

                {/* Specs */}
                <div className="space-y-2 mb-6">
                  {product.specs.map((spec, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm text-[#4a5568]">
                      <CheckCircle className="w-4 h-4 text-[#d4a574]" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="flex items-center justify-center gap-2 w-full py-3 bg-[#1a2744] text-white font-semibold rounded-lg group-hover:bg-[#243a5e] transition-colors"
                >
                  <span>Inquire Now</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
