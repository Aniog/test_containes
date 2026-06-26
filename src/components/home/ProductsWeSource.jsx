import { Link } from 'react-router-dom';

const categories = [
  {
    name: 'Electronics & Components',
    desc: 'Consumer electronics, PCB assemblies, LED lighting, sensors, and electronic components.',
    imgId: 'prod-electronics-d4e5f6',
    titleId: 'prod-electronics-title',
    descId: 'prod-electronics-desc',
  },
  {
    name: 'Home & Garden',
    desc: 'Furniture, kitchenware, home textiles, garden tools, and decorative items.',
    imgId: 'prod-home-g7h8i9',
    titleId: 'prod-home-title',
    descId: 'prod-home-desc',
  },
  {
    name: 'Apparel & Textiles',
    desc: 'Clothing, fabrics, sportswear, bags, and fashion accessories.',
    imgId: 'prod-apparel-j1k2l3',
    titleId: 'prod-apparel-title',
    descId: 'prod-apparel-desc',
  },
  {
    name: 'Industrial & Machinery',
    desc: 'Machinery parts, tools, automotive components, and industrial equipment.',
    imgId: 'prod-industrial-m4n5o6',
    titleId: 'prod-industrial-title',
    descId: 'prod-industrial-desc',
  },
  {
    name: 'Health & Beauty',
    desc: 'Cosmetics, personal care products, medical supplies, and wellness items.',
    imgId: 'prod-health-p7q8r9',
    titleId: 'prod-health-title',
    descId: 'prod-health-desc',
  },
  {
    name: 'Packaging & Printing',
    desc: 'Custom packaging, labels, printing materials, and promotional products.',
    imgId: 'prod-packaging-s1t2u3',
    titleId: 'prod-packaging-title',
    descId: 'prod-packaging-desc',
  },
];

export default function ProductsWeSource() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            Products We Source
          </h2>
          <p className="mt-4 text-lg text-text-secondary">
            We work across a wide range of product categories. If it's made in China, we can help you source it reliably.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className="group bg-white rounded-lg border border-border overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="aspect-[4/3] bg-surface relative overflow-hidden">
                <img
                  alt={cat.name}
                  data-strk-img-id={cat.imgId}
                  data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5">
                <h3 id={cat.titleId} className="font-semibold text-text-primary mb-1">
                  {cat.name}
                </h3>
                <p id={cat.descId} className="text-text-secondary text-sm leading-relaxed">
                  {cat.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/products"
            className="inline-flex items-center text-primary font-semibold hover:text-primary-light transition-colors"
          >
            View All Product Categories
            <span className="ml-1">&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
