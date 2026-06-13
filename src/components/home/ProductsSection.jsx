import { SectionHeading } from '@/components/ui/SectionHeading';

const categories = [
  { name: 'Electronics & Gadgets', image: 'consumer electronics gadgets devices', count: '80+ factories' },
  { name: 'Home & Garden', image: 'home garden furniture decor products', count: '60+ factories' },
  { name: 'Apparel & Textiles', image: 'clothing apparel textiles fashion manufacturing', count: '50+ factories' },
  { name: 'Machinery & Parts', image: 'industrial machinery parts manufacturing equipment', count: '45+ factories' },
  { name: 'Beauty & Personal Care', image: 'beauty cosmetics personal care products packaging', count: '35+ factories' },
  { name: 'Promotional Items', image: 'promotional products branded merchandise corporate gifts', count: '40+ factories' },
  { name: 'Automotive Parts', image: 'automotive parts accessories car components', count: '30+ factories' },
  { name: 'Packaging & Printing', image: 'packaging boxes printing materials shipping supplies', count: '55+ factories' },
];

export default function ProductsSection() {
  return (
    <section className="section-padding bg-white" id="products">
      <div className="container-max">
        <SectionHeading
          badge="Product Categories"
          title="Products We Source"
          description="We work across a wide range of industries and product categories. Here are some of the most common types of products we help our clients source from China."
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {categories.map((cat, idx) => (
            <div
              key={cat.name}
              className="group relative rounded-xl overflow-hidden bg-gray-100 aspect-[4/3] cursor-pointer"
            >
              <img
                data-strk-img-id={`product-cat-${idx}-img-${cat.name.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}`}
                data-strk-img={`[${`product-cat-${idx}-name`}] manufacturing factory China sourcing`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-500/80 via-navy-500/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3
                  id={`product-cat-${idx}-name`}
                  className="text-sm lg:text-base font-bold text-white mb-0.5"
                >
                  {cat.name}
                </h3>
                <p className="text-xs text-white/70">{cat.count}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
