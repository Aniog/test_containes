import React from 'react';
import { Link } from 'react-router-dom';
import { Cpu, Home, Sofa, Shirt, Settings, Box, ChevronRight } from 'lucide-react';
import SectionHeader from '../sections/SectionHeader';

const products = [
  {
    icon: Cpu,
    name: "Electronics & Components",
    examples: "Consumer electronics, PCBs, connectors, sensors, LED components",
    link: "/products"
  },
  {
    icon: Home,
    name: "Home & Garden",
    examples: "Kitchenware, home decor, outdoor equipment, cleaning supplies",
    link: "/products"
  },
  {
    icon: Sofa,
    name: "Furniture",
    examples: "Office furniture, outdoor furniture, storage solutions, mattresses",
    link: "/products"
  },
  {
    icon: Shirt,
    name: "Textiles & Apparel",
    examples: "Fabrics, garments, footwear, bags, accessories",
    link: "/products"
  },
  {
    icon: Settings,
    name: "Machinery",
    examples: "Industrial equipment, tools, pumps, motors, machinery parts",
    link: "/products"
  },
  {
    icon: Box,
    name: "Packaging",
    examples: "Boxes, labels, containers, promotional packaging materials",
    link: "/products"
  }
];

const ProductsGrid = () => {
  return (
    <section className="section-padding bg-bg-light">
      <div className="container-custom">
        <SectionHeader
          eyebrow="Products"
          title="What We Source"
          subtitle="We have extensive experience sourcing a wide range of product categories from China."
          className="mb-12"
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <Link
              key={index}
              to={product.link}
              className="card p-6 group hover:-translate-y-1 flex items-start gap-4"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                <product.icon size={28} className="text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-primary mb-2 flex items-center">
                  {product.name}
                  <ChevronRight size={18} className="ml-auto text-text-muted group-hover:text-accent transition-colors" />
                </h3>
                <p className="text-text-secondary text-sm">{product.examples}</p>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Link to="/products" className="btn-primary">
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductsGrid;
