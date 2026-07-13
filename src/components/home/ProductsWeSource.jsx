import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Package, Cpu, Home, Shirt, Wrench, Zap, Gift, Car } from 'lucide-react';

const categories = [
  {
    icon: Package,
    title: 'Consumer Electronics',
    description: 'Phones, tablets, accessories, audio equipment, and smart devices.',
    image: 'electronics',
  },
  {
    icon: Home,
    title: 'Home & Garden',
    description: 'Furniture, lighting, kitchenware, outdoor equipment, and decor.',
    image: 'home',
  },
  {
    icon: Shirt,
    title: 'Apparel & Textiles',
    description: 'Clothing, fabrics, fashion accessories, and promotional wear.',
    image: 'apparel',
  },
  {
    icon: Wrench,
    title: 'Industrial Equipment',
    description: 'Machinery, tools, components, and manufacturing equipment.',
    image: 'industrial',
  },
  {
    icon: Cpu,
    title: 'Hardware & Tools',
    description: 'Hand tools, power tools, fasteners, and construction supplies.',
    image: 'hardware',
  },
  {
    icon: Zap,
    title: 'Auto Parts',
    description: 'Vehicle components, accessories, and replacement parts.',
    image: 'autoparts',
  },
  {
    icon: Gift,
    title: 'Promotional Items',
    description: 'Custom branded merchandise, corporate gifts, and event giveaways.',
    image: 'promotional',
  },
  {
    icon: Car,
    title: 'Beauty & Health',
    description: 'Cosmetics, skincare, supplements, and wellness products.',
    image: 'beauty',
  },
];

const ProductsWeSource = () => {
  return (
    <section className="py-20 bg-white" id="products">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Product Categories</span>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mt-4 mb-6">
            Products We Source
          </h2>
          <p className="text-lg text-text-secondary">
            We source a wide range of products across multiple industries. Our expertise covers both consumer and industrial goods.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link
              key={category.title}
              to="/products"
              className="group bg-bg-light rounded-xl p-6 hover:bg-primary hover:text-white transition-all duration-300 border border-transparent hover:border-primary"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors">
                <category.icon className="w-6 h-6 text-primary group-hover:text-white" />
              </div>
              <h3 className="text-lg font-semibold text-text-primary mb-2 group-hover:text-white">{category.title}</h3>
              <p className="text-text-secondary text-sm mb-4 group-hover:text-white/80">{category.description}</p>
              <span className="text-primary font-medium text-sm flex items-center gap-2 group-hover:text-accent-light">
                Learn More
                <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors"
          >
            View All Product Categories
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductsWeSource;
