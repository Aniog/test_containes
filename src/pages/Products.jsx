import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const categories = [
  {
    title: 'Electronics',
    description: 'Consumer electronics, components, accessories, and smart devices.',
    items: ['Smart home devices', 'Audio and video equipment', 'Electronic components', 'Wearable technology', 'Charging accessories'],
  },
  {
    title: 'Home & Garden',
    description: 'Furniture, decor, kitchenware, and outdoor living products.',
    items: ['Indoor furniture', 'Kitchen and dining', 'Home decor', 'Garden tools', 'Outdoor furniture'],
  },
  {
    title: 'Textiles & Apparel',
    description: 'Clothing, fabrics, home textiles, and fashion accessories.',
    items: ['Casual and formal wear', 'Sportswear', 'Home textiles', 'Bags and luggage', 'Fashion accessories'],
  },
  {
    title: 'Industrial Parts',
    description: 'Machinery parts, hardware, tools, and industrial equipment.',
    items: ['CNC machined parts', 'Fasteners and hardware', 'Power tools', 'Pumps and valves', 'Industrial automation'],
  },
  {
    title: 'Beauty & Personal Care',
    description: 'Cosmetics, skincare, personal care devices, and beauty tools.',
    items: ['Skincare products', 'Hair care tools', 'Makeup accessories', 'Personal care devices', 'Beauty packaging'],
  },
  {
    title: 'Toys & Gifts',
    description: 'Toys, games, promotional items, and gift products.',
    items: ['Educational toys', 'Outdoor play equipment', 'Promotional gifts', 'Seasonal items', 'Party supplies'],
  },
];

const Products = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="flex flex-col">
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 id="products-title" className="text-4xl font-bold text-slate-900 sm:text-5xl">
              Products We Source
            </h1>
            <p id="products-subtitle" className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
              We source a wide range of products across multiple industries. If you do not see your category, contact us to discuss your needs.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {categories.map(({ title, description, items }) => (
              <div key={title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
                <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
                <p className="mt-2 text-sm text-slate-600">{description}</p>
                <ul className="mt-4 space-y-2">
                  {items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-500" />
                      <span className="text-sm text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 id="products-cta-title" className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Looking for Something Specific?
          </h2>
          <p id="products-cta-subtitle" className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Tell us what you need. We will find the right suppliers and manage the entire process for you.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center justify-center rounded-lg bg-slate-900 px-8 py-3 text-sm font-semibold text-white hover:bg-slate-800"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Products;
