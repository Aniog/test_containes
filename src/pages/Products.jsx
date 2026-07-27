import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Cpu, 
  Settings, 
  Shirt, 
  Package, 
  ShoppingBag, 
  Car, 
  Factory, 
  HeartPulse,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const Products = () => {
  const categories = [
    {
      icon: Cpu,
      name: "Electronics & Components",
      description: "Consumer electronics, electronic components, PCBs, semiconductors, and smart devices.",
      products: [
        "Consumer Electronics",
        "Electronic Components",
        "PCBs & Circuit Boards",
        "LED Lighting",
        "Smart Devices",
        "Power Supplies"
      ]
    },
    {
      icon: Settings,
      name: "Machinery & Equipment",
      description: "Industrial machinery, manufacturing equipment, and mechanical components.",
      products: [
        "Industrial Machinery",
        "Agricultural Equipment",
        "Construction Machinery",
        "Mechanical Components",
        "Hydraulic Systems",
        "CNC Machines"
      ]
    },
    {
      icon: Shirt,
      name: "Textiles & Garments",
      description: "Fabrics, apparel, and textile accessories for various industries.",
      products: [
        "Ready-made Garments",
        "Fabrics & Materials",
        "Fashion Accessories",
        "Home Textiles",
        "Sportswear",
        "Workwear"
      ]
    },
    {
      icon: Package,
      name: "Packaging Materials",
      description: "All types of packaging solutions for products and shipping.",
      products: [
        "Paper Packaging",
        "Plastic Packaging",
        "Corrugated Boxes",
        "Flexible Packaging",
        "Labels & Stickers",
        "Bottles & Containers"
      ]
    },
    {
      icon: ShoppingBag,
      name: "Consumer Goods",
      description: "Everyday products for retail and distribution.",
      products: [
        "Kitchenware",
        "Home Decor",
        "Garden Products",
        "Toys & Games",
        "Pet Supplies",
        "Stationery"
      ]
    },
    {
      icon: Car,
      name: "Automotive Parts",
      description: "Vehicle components, accessories, and replacement parts.",
      products: [
        "Engine Components",
        "Body Parts",
        "Interior Parts",
        "Electronics",
        "Tires & Wheels",
        "Accessories"
      ]
    },
    {
      icon: Factory,
      name: "Industrial Supplies",
      description: "Tools, hardware, and industrial consumables.",
      products: [
        "Hand Tools",
        "Power Tools",
        "Fasteners",
        "Safety Equipment",
        "Industrial Chemicals",
        "Measuring Instruments"
      ]
    },
    {
      icon: HeartPulse,
      name: "Medical & Health",
      description: "Medical devices, health products, and healthcare supplies.",
      products: [
        "Medical Devices",
        "Health Products",
        "Personal Protective Equipment",
        "Medical Consumables",
        "Rehabilitation Equipment",
        "Beauty Equipment"
      ]
    }
  ];

  const capabilities = [
    "Custom manufacturing and OEM/ODM services",
    "Prototype development and mass production",
    "Quality control and certification compliance",
    "Flexible order quantities",
    "Competitive pricing",
    "Fast turnaround times"
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Products We Source
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              We have expertise sourcing a wide range of products from verified Chinese 
              manufacturers across multiple industries.
            </p>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((category, index) => (
              <div key={index} className="bg-slate-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start">
                  <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mr-6">
                    <category.icon className="w-7 h-7 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{category.name}</h3>
                    <p className="text-slate-600 mb-4">{category.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {category.products.map((product, idx) => (
                        <span 
                          key={idx} 
                          className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white border border-gray-200 text-slate-600"
                        >
                          {product}
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

      {/* Capabilities Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Our Sourcing Capabilities
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                We work with manufacturers across China who can handle various production 
                requirements, from small batches to large-scale manufacturing.
              </p>

              <ul className="space-y-4">
                {capabilities.map((capability, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 mr-4" />
                    <span className="text-slate-700">{capability}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Can't Find What You're Looking For?</h3>
              <p className="text-slate-600 mb-8">
                Contact us with your specific requirements. We have extensive networks 
                and can often source products outside our standard categories.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center w-full px-6 py-4 text-lg font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                Discuss Your Requirements
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              How We Source Products
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Our process ensures you get the right products at the right price from verified suppliers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Identify</h3>
              <p className="text-slate-600">
                We research and identify manufacturers that match your product requirements.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Verify</h3>
              <p className="text-slate-600">
                Factory audits ensure legitimacy, capability, and quality standards.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Deliver</h3>
              <p className="text-slate-600">
                Quality inspection and logistics coordination ensure successful delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Start Sourcing Your Products
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Tell us what you need and we'll find the right manufacturers for your project.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            Get a Free Quote
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Products;