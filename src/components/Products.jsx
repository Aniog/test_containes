import { ArrowRight } from 'lucide-react';

const products = [
  {
    id: 'df-2500',
    name: 'DF-2500 Double Folder',
    category: 'Double Folding Machine',
    description: 'Our flagship double folding machine delivers exceptional precision for high-volume sheet metal fabrication. Ideal for industrial applications requiring consistent, clean folds.',
    specs: ['2500mm bending length', '2.0mm max thickness', 'Dual beam system', 'CNC control'],
    titleId: 'product-df-2500-title',
    descId: 'product-df-2500-desc',
    imgId: 'product-df-2500-img',
  },
  {
    id: 'sf-3200',
    name: 'SF-3200 Sheet Metal Folder',
    category: 'Sheet Metal Folding Machine',
    description: 'Engineered for large-format sheet metal work, this folding machine handles wide panels with remarkable accuracy and repeatability across production runs.',
    specs: ['3200mm bending length', '1.5mm max thickness', 'Quick-change tooling', 'Automated backgauge'],
    titleId: 'product-sf-3200-title',
    descId: 'product-sf-3200-desc',
    imgId: 'product-sf-3200-img',
  },
  {
    id: 'mf-1500',
    name: 'MF-1500 Metal Folder',
    category: 'Compact Metal Folder Machine',
    description: 'The compact powerhouse of our lineup. Perfect for workshops needing a versatile metal folder machine without sacrificing quality or production speed.',
    specs: ['1500mm bending length', '2.5mm max thickness', 'Foot pedal control', 'Manual/CNC modes'],
    titleId: 'product-mf-1500-title',
    descId: 'product-mf-1500-desc',
    imgId: 'product-mf-1500-img',
  },
];

export default function Products() {
  return (
    <section id="products" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="text-accent text-sm font-semibold tracking-[0.3em] uppercase">
            Our Range
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-brand-950 mt-4 mb-6">
            Metal Folding Machines
          </h2>
          <p className="text-steel-500 text-lg max-w-2xl mx-auto">
            From compact workshop folders to industrial double folding systems, every ARTITECT machine is built to deliver precision results.
          </p>
        </div>

        {/* Product Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product) => (
            <article
              key={product.id}
              className="group bg-brand-50 rounded-sm overflow-hidden border border-brand-100 hover:border-accent/30 transition-all duration-300 hover:shadow-xl"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden bg-steel-100">
                <img
                  data-strk-img-id={product.imgId}
                  data-strk-img={`[${product.descId}] [${product.titleId}] metal folding machine industrial`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-brand-950/90 text-white text-xs font-semibold px-3 py-1 rounded-sm tracking-wide uppercase">
                    {product.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3
                  className="font-heading text-2xl font-bold text-brand-950 mb-3"
                  id={product.titleId}
                >
                  {product.name}
                </h3>
                <p
                  className="text-steel-600 text-sm leading-relaxed mb-6"
                  id={product.descId}
                >
                  {product.description}
                </p>

                {/* Specs */}
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {product.specs.map((spec) => (
                    <div
                      key={spec}
                      className="flex items-center gap-2 text-xs text-steel-500"
                    >
                      <div className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0" />
                      {spec}
                    </div>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-accent font-semibold text-sm tracking-wide uppercase hover:text-accent-dark transition-colors group/link"
                >
                  Learn More
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
