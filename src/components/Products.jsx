const products = [
  {
    id: 'double-folder-pro',
    title: 'Double Folder Pro',
    titleId: 'product-double-folder-pro-title',
    desc: 'Our flagship double folding machine with dual-blade precision technology. Handles complex bends with ease and delivers consistent results every time.',
    descId: 'product-double-folder-pro-desc',
    specs: ['Max thickness: 3mm', 'Working length: 3200mm', 'CNC control system'],
    imgId: 'product-double-folder-pro-img-3f8a9c',
    badge: 'Best Seller',
  },
  {
    id: 'sheet-metal-folder-x',
    title: 'Sheet Metal Folder X',
    titleId: 'product-sheet-metal-folder-x-title',
    desc: 'Advanced sheet metal folding machine designed for high-volume production environments. Fast cycle times with uncompromising accuracy.',
    descId: 'product-sheet-metal-folder-x-desc',
    specs: ['Max thickness: 2mm', 'Working length: 4000mm', 'Auto-adjust system'],
    imgId: 'product-sheet-metal-folder-x-img-7b2d4e',
    badge: 'New',
  },
  {
    id: 'metal-folder-compact',
    title: 'Metal Folder Compact',
    titleId: 'product-metal-folder-compact-title',
    desc: 'Space-efficient metal folding machine without sacrificing power. Perfect for workshops that need industrial-grade performance in a smaller footprint.',
    descId: 'product-metal-folder-compact-desc',
    specs: ['Max thickness: 2.5mm', 'Working length: 2500mm', 'Touch screen interface'],
    imgId: 'product-metal-folder-compact-img-a1c5e8',
    badge: null,
  },
];

const Products = () => {
  return (
    <section id="products" className="bg-brand-gray-light py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <span className="text-brand-gold text-xs font-semibold tracking-[0.2em] uppercase">
            Our Products
          </span>
          <h2 id="products-title" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-navy mt-4 leading-tight">
            Double Folding Machines for Every Need
          </h2>
          <p id="products-subtitle" className="text-brand-gray-dark text-lg mt-4 leading-relaxed">
            From compact workshop models to full-scale production lines, our sheet metal folders
            deliver the precision and reliability your business demands.
          </p>
          <div className="w-16 h-[3px] bg-brand-gold mx-auto mt-6 rounded-full" />
        </div>

        {/* Product Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-brand-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 group overflow-hidden border border-brand-gray-medium/50"
            >
              {/* Image */}
              <div className="relative overflow-hidden bg-gradient-to-br from-brand-gray-light to-brand-gray-medium h-56">
                <img
                  data-strk-img-id={product.imgId}
                  data-strk-img={`[${product.descId}] [${product.titleId}] [products-subtitle]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {product.badge && (
                  <span className="absolute top-4 left-4 bg-brand-gold text-brand-navy text-xs font-bold px-3 py-1.5 rounded-full tracking-wide">
                    {product.badge}
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <h3 id={product.titleId} className="text-xl font-bold text-brand-navy group-hover:text-brand-gold transition-colors duration-300">
                  {product.title}
                </h3>
                <p id={product.descId} className="text-brand-gray-dark text-sm leading-relaxed">
                  {product.desc}
                </p>

                {/* Specs */}
                <div className="space-y-2 pt-2">
                  {product.specs.map((spec, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-brand-gold rounded-full flex-shrink-0" />
                      <span className="text-brand-steel-light text-sm">{spec}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-brand-gold hover:text-brand-gold-dark text-sm font-semibold pt-2 transition-colors group/link"
                >
                  Learn More
                  <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
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
