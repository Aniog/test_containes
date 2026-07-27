import { Link } from 'react-router-dom';
import { Cpu, Home, Wrench, Shirt, Package, Heart, ArrowRight } from 'lucide-react';

const productCategories = [
  {
    icon: Cpu,
    name: 'Electronics & Tech',
    examples: 'Consumer electronics, smart devices, PCBs, components',
    href: '/products#electronics',
  },
  {
    icon: Home,
    name: 'Home & Garden',
    examples: 'Furniture, home decor, kitchenware, outdoor equipment',
    href: '/products#home',
  },
  {
    icon: Wrench,
    name: 'Industrial',
    examples: 'Machinery, tools, hardware, automotive parts',
    href: '/products#industrial',
  },
  {
    icon: Shirt,
    name: 'Textiles & Apparel',
    examples: 'Clothing, accessories, fabrics, footwear',
    href: '/products#textiles',
  },
  {
    icon: Package,
    name: 'Packaging',
    examples: 'Boxes, labels, bags, eco-friendly materials',
    href: '/products#packaging',
  },
  {
    icon: Heart,
    name: 'Health & Beauty',
    examples: 'Cosmetics, skincare, supplements, personal care',
    href: '/products#beauty',
  },
];

const ProductsSection = () => {
  return (
    <section className="section-spacing bg-white" id="products">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="badge-primary mb-4">Product Categories</span>
          <h2 className="section-heading mb-4">
            Products We Source from China
          </h2>
          <p className="section-subheading mx-auto">
            We have established relationships with verified manufacturers across a wide range of product categories.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {productCategories.map((category) => {
            const Icon = category.icon;
            return (
              <Link
                key={category.name}
                to={category.href}
                className="group card-hover p-6 flex items-start gap-4"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-primary-100 to-primary-50 rounded-xl flex items-center justify-center shrink-0 group-hover:from-primary-800 group-hover:to-primary-700 transition-all duration-300">
                  <Icon className="w-7 h-7 text-primary-700 group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-neutral-900 mb-1 group-hover:text-primary-700 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-neutral-500 text-sm leading-relaxed">
                    {category.examples}
                  </p>
                </div>
                <ArrowRight className="w-5 h-5 text-neutral-300 group-hover:text-primary-600 group-hover:translate-x-1 transition-all duration-300 self-center" />
              </Link>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 bg-neutral-50 rounded-2xl p-8 lg:p-12">
          <h3 className="text-2xl font-bold text-neutral-900 mb-4">
            Don't See Your Product Category?
          </h3>
          <p className="text-neutral-500 mb-6 max-w-2xl mx-auto">
            We source a wide variety of products beyond these categories. Contact us with your specific requirements and we'll find the right suppliers for you.
          </p>
          <Link to="/contact" className="btn-accent">
            Request Custom Sourcing
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
