import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle,
  Cpu,
  Wrench,
  Shirt,
  Package,
  Car,
  Heart,
  Factory,
  ShoppingBag,
  Laptop,
  Smartphone
} from 'lucide-react';

const ProductsPage = () => {
  const productCategories = [
    {
      icon: Cpu,
      name: "Electronics & Components",
      description: "Consumer electronics, electronic components, PCBs, semiconductors, and smart devices.",
      products: [
        "Consumer Electronics",
        "Electronic Components",
        "PCBs & Circuit Boards",
        "Smart Devices",
        "LED Lighting",
        "Power Supplies"
      ]
    },
    {
      icon: Wrench,
      name: "Machinery & Equipment",
      description: "Industrial machinery, mechanical parts, tools, and manufacturing equipment.",
      products: [
        "Industrial Machinery",
        "Mechanical Parts",
        "Power Tools",
        "Agricultural Equipment",
        "Construction Machinery",
        "Packaging Equipment"
      ]
    },
    {
      icon: Shirt,
      name: "Textiles & Apparel",
      description: "Fabrics, garments, accessories, and textile manufacturing services.",
      products: [
        "Fabrics & Materials",
        "Ready-made Garments",
        "Fashion Accessories",
        "Home Textiles",
        "Sportswear",
        "Workwear"
      ]
    },
    {
      icon: Package,
      name: "Packaging Materials",
      description: "All types of packaging solutions for various industries.",
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
      description: "Daily use products, home goods, and lifestyle products.",
      products: [
        "Kitchenware",
        "Home Decor",
        "Garden Products",
        "Pet Supplies",
        "Toys & Games",
        "Stationery"
      ]
    },
    {
      icon: Car,
      name: "Automotive Parts",
      description: "Vehicle components, spare parts, and automotive accessories.",
      products: [
        "Engine Components",
        "Body Parts",
        "Interior Parts",
        "Electrical Systems",
        "Tires & Wheels",
        "Car Accessories"
      ]
    },
    {
      icon: Factory,
      name: "Industrial Supplies",
      description: "Industrial components, hardware, and safety equipment.",
      products: [
        "Fasteners & Hardware",
        "Safety Equipment",
        "Industrial Tools",
        "Pipes & Fittings",
        "Valves & Pumps",
        "Bearings & Gears"
      ]
    },
    {
      icon: Heart,
      name: "Health & Medical",
      description: "Medical devices, healthcare products, and wellness equipment.",
      products: [
        "Medical Devices",
        "Healthcare Products",
        "Fitness Equipment",
        "Personal Care",
        "Medical Consumables",
        "Rehabilitation Equipment"
      ]
    }
  ];

  const capabilities = [
    "OEM & ODM Manufacturing",
    "Custom Design & Development",
    "Private Label Production",
    "Small Batch Manufacturing",
    "Mass Production",
    "Assembly & kitting"
  ];

  const industries = [
    "Retail & E-commerce",
    "Manufacturing",
    "Construction",
    "Automotive",
    "Healthcare",
    "Food & Beverage",
    "Electronics",
    "Logistics"
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
              Products We Source
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed">
              We source a wide range of products from verified Chinese manufacturers across multiple industries. Our expertise ensures quality and reliability.
            </p>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Product Categories
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Explore our sourcing capabilities across various product categories
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {productCategories.map((category, index) => (
              <div key={index} className="bg-slate-50 rounded-xl p-6 lg:p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <category.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">{category.name}</h3>
                    <p className="text-slate-600">{category.description}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  {category.products.map((product, idx) => (
                    <span key={idx} className="px-3 py-1 bg-white border border-slate-200 rounded-full text-sm text-slate-600">
                      {product}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Capabilities */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                Manufacturing Capabilities
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Our verified factories offer comprehensive manufacturing solutions to meet your specific requirements, from prototype to mass production.
              </p>
              <ul className="space-y-4">
                {capabilities.map((capability, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{capability}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900 mb-6">Industries We Serve</h3>
              <div className="grid grid-cols-2 gap-4">
                {industries.map((industry, index) => (
                  <div key={index} className="p-3 bg-slate-50 rounded-lg text-center">
                    <span className="text-sm font-medium text-slate-700">{industry}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Sourcing Process
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              How we find and verify the right manufacturers for your products
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Requirements</h3>
              <p className="text-sm text-slate-600">We analyze your product specifications and requirements</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Search</h3>
              <p className="text-sm text-slate-600">We identify potential manufacturers from our network</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Verify</h3>
              <p className="text-sm text-slate-600">We conduct factory audits and capability assessments</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">4</span>
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Match</h3>
              <p className="text-sm text-slate-600">We connect you with the best-fit supplier</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Don't See Your Product Category?
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Contact us with your specific requirements. We have access to a wide network of manufacturers and can likely help with your needs.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-blue-600 bg-white rounded-lg hover:bg-slate-100 transition-colors"
          >
            Discuss Your Requirements
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;