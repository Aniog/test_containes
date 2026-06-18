import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle, 
  Cpu, 
  Wrench, 
  Shirt, 
  Package, 
  Sofa, 
  Car,
  Heart,
  Smartphone,
  Factory,
  ShoppingBag
} from 'lucide-react';

const ProductsPage = () => {
  const productCategories = [
    {
      icon: Cpu,
      name: "Electronics & Components",
      description: "Consumer electronics, circuit boards, sensors, displays, and electronic components.",
      examples: ["Smartphones", "Tablets", "LED displays", "Circuit boards", "Sensors", "Power supplies"]
    },
    {
      icon: Wrench,
      name: "Machinery & Equipment",
      description: "Industrial machinery, mechanical parts, tools, and equipment.",
      examples: ["Industrial machinery", "Power tools", "Mechanical parts", "Agricultural equipment", "Construction tools"]
    },
    {
      icon: Shirt,
      name: "Textiles & Garments",
      description: "Fabrics, clothing, accessories, and textile products.",
      examples: ["Fabrics", "T-shirts", "Jackets", "Sportswear", "Uniforms", "Accessories"]
    },
    {
      icon: Package,
      name: "Packaging Materials",
      description: "All types of packaging solutions for various industries.",
      examples: ["Cardboard boxes", "Plastic packaging", "Paper bags", "Bottles", "Containers", "Labels"]
    },
    {
      icon: Sofa,
      name: "Furniture & Home Goods",
      description: "Indoor and outdoor furniture, home decor, and household items.",
      examples: ["Sofas", "Tables", "Chairs", "Lighting", "Home decor", "Bedding"]
    },
    {
      icon: Car,
      name: "Automotive Parts",
      description: "Vehicle components, spare parts, and automotive accessories.",
      examples: ["Engine parts", "Brakes", "Electronics", "Interior parts", "Body components", "Tires"]
    },
    {
      icon: Heart,
      name: "Medical Devices",
      description: "Medical equipment, supplies, and healthcare products.",
      examples: ["Diagnostic equipment", "Surgical instruments", "Medical supplies", "Rehabilitation equipment", "Protective gear"]
    },
    {
      icon: Smartphone,
      name: "Consumer Electronics",
      description: "Personal electronics and gadgets for end consumers.",
      examples: ["Headphones", "Speakers", "Cameras", "Watches", "Gaming devices", "Accessories"]
    },
    {
      icon: Factory,
      name: "Industrial Supplies",
      description: "Raw materials, components, and supplies for manufacturing.",
      examples: ["Raw materials", "Fasteners", "Plastics", "Metals", "Chemicals", "Safety equipment"]
    },
    {
      icon: ShoppingBag,
      name: "Promotional Products",
      description: "Custom branded items for marketing and promotional purposes.",
      examples: ["T-shirts", "Mugs", "Bags", "Stationery", "Keychains", "USB drives"]
    }
  ];

  const capabilities = [
    "Product sourcing and supplier identification",
    "Factory verification and audit",
    "Quality control and inspection",
    "Sample management and evaluation",
    "Production follow-up and monitoring",
    "Custom manufacturing and OEM/ODM",
    "Packaging design and optimization",
    "Shipping and logistics coordination"
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold">
              Products We Source
            </h1>
            <p className="mt-6 text-lg text-slate-300">
              We have expertise across a wide range of industries and product categories, helping clients source quality products from verified Chinese manufacturers.
            </p>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Our Product Expertise
            </h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              Browse our main product categories or contact us for products not listed here.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {productCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-xl border border-slate-200 p-6 hover:border-blue-300 hover:shadow-lg transition-all">
                <div className="flex items-start">
                  <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <category.icon className="w-7 h-7 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">{category.name}</h3>
                    <p className="text-slate-600 mb-4">{category.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {category.examples.map((example, eIndex) => (
                        <span key={eIndex} className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded">
                          {example}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Our Sourcing Capabilities
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Beyond product sourcing, we offer a comprehensive suite of services to ensure your China sourcing experience is smooth and successful.
              </p>
              <ul className="space-y-4">
                {capabilities.map((capability, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">{capability}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-slate-200 rounded-xl h-80 flex items-center justify-center">
              <div className="text-center">
                <Package className="w-16 h-16 text-slate-400 mx-auto mb-4" />
                <p className="text-slate-500">Product sourcing visualization</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Request */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Don't See Your Product?
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            We have extensive networks across many industries. Contact us with your specific requirements and we'll help you find the right suppliers.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors"
          >
            Request a Quote
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;