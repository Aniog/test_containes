import React from 'react';
import { Link } from 'react-router-dom';
import { Cpu, Home, Sofa, Shirt, Settings, Box, Zap, Wrench, ArrowRight, CheckCircle } from 'lucide-react';
import Hero from '../components/sections/Hero';
import InquiryForm from '../components/sections/InquiryForm';
import SectionHeader from '../components/sections/SectionHeader';

const productCategories = [
  {
    icon: Cpu,
    name: "Electronics & Components",
    description: "From consumer electronics to industrial components, we connect you with certified manufacturers.",
    products: [
      "Consumer electronics",
      "PCBs and components",
      "LED lighting",
      "Sensors and actuators",
      "Power supplies",
      "Connectors and cables"
    ],
    certifications: ["CE", "UL", "RoHS", "FCC"],
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: Home,
    name: "Home & Garden",
    description: "Quality home products manufactured by experienced suppliers with export experience.",
    products: [
      "Kitchenware and appliances",
      "Home decor items",
      "Cleaning supplies",
      "Outdoor equipment",
      "Bathroom accessories",
      "Storage solutions"
    ],
    certifications: ["ISO 9001", "FDA", "LFGB"],
    color: "from-green-500 to-green-600"
  },
  {
    icon: Sofa,
    name: "Furniture",
    description: "Both indoor and outdoor furniture manufactured with attention to detail and quality.",
    products: [
      "Office furniture",
      "Outdoor furniture",
      "Storage and shelving",
      "Mattresses and bedding",
      "Children's furniture",
      "Metal and wood furniture"
    ],
    certifications: ["ISO 9001", "EN 12520", "FSC"],
    color: "from-amber-500 to-amber-600"
  },
  {
    icon: Shirt,
    name: "Textiles & Apparel",
    description: "Fabrics, garments, and accessories from mills with international quality standards.",
    products: [
      "Fabrics and textiles",
      "Garments and clothing",
      "Footwear and shoes",
      "Bags and luggage",
      "Accessories",
      "Sportswear"
    ],
    certifications: ["OEKO-TEX", "GOTS", "WRAP"],
    color: "from-purple-500 to-purple-600"
  },
  {
    icon: Settings,
    name: "Machinery & Equipment",
    description: "Industrial equipment and machinery parts from specialized manufacturers.",
    products: [
      "Industrial machinery",
      "Tools and hardware",
      "Pumps and motors",
      "Agricultural equipment",
      "Packaging machinery",
      "Custom parts"
    ],
    certifications: ["CE", "ISO 9001", "UL"],
    color: "from-red-500 to-red-600"
  },
  {
    icon: Box,
    name: "Packaging Materials",
    description: "Wide range of packaging solutions for retail, industrial, and promotional use.",
    products: [
      "Paper packaging",
      "Plastic containers",
      "Metal packaging",
      "Labels and stickers",
      "Promotional packaging",
      "Eco-friendly options"
    ],
    certifications: ["FSC", "ISO 14001", "FPA"],
    color: "from-orange-500 to-orange-600"
  },
  {
    icon: Zap,
    name: "Energy & Solar",
    description: "Renewable energy products and components from certified solar manufacturers.",
    products: [
      "Solar panels",
      "Solar inverters",
      "Battery systems",
      "LED lighting",
      "Wind turbine components",
      "Energy storage"
    ],
    certifications: ["IEC", "TUV", "UL"],
    color: "from-yellow-500 to-yellow-600"
  },
  {
    icon: Wrench,
    name: "Industrial Supplies",
    description: "General industrial supplies and components for manufacturing operations.",
    products: [
      "Fasteners and hardware",
      "Bearings and seals",
      "Industrial hoses",
      "Safety equipment",
      "Chemical products",
      "Industrial tapes"
    ],
    certifications: ["ISO 9001", "OSHA Compliant"],
    color: "from-gray-500 to-gray-600"
  }
];

const Products = () => {
  return (
    <div>
      <Hero
        title="Products We Source"
        subtitle="We have extensive experience sourcing a wide range of product categories from verified manufacturers across China."
        ctaText="Request Product Info"
        secondaryCta="Get a Quote"
        secondaryLink="/contact"
        showTrust={false}
      />
      
      {/* Product Categories */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeader
            eyebrow="Product Categories"
            title="What We Source for You"
            subtitle="Explore the product categories we specialize in. Each category is backed by verified suppliers with proven track records."
            className="mb-16"
          />
          
          <div className="grid md:grid-cols-2 gap-8">
            {productCategories.map((category, index) => (
              <div key={index} className="card overflow-hidden">
                <div className={`bg-gradient-to-r ${category.color} p-6`}>
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
                      <category.icon size={32} className="text-white" />
                    </div>
                    <div className="text-white">
                      <h3 className="text-xl font-bold">{category.name}</h3>
                      <p className="text-white/80 text-sm mt-1">{category.description}</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="mb-4">
                    <h4 className="font-semibold text-primary mb-3">Products Include:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {category.products.map((product, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-text-secondary">
                          <CheckCircle size={14} className="text-success flex-shrink-0" />
                          <span>{product}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-primary mb-3">Available Certifications:</h4>
                    <div className="flex flex-wrap gap-2">
                      {category.certifications.map((cert, idx) => (
                        <span key={idx} className="bg-bg-alt text-text-secondary text-xs font-medium px-2 py-1 rounded">
                          {cert}
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
      
      {/* Custom Sourcing CTA */}
      <section className="section-padding bg-primary">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Don't See Your Product?
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                We have experience sourcing products beyond these categories. Contact us with your specific requirements and we'll help you find the right suppliers.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Custom product development",
                  "Prototype manufacturing",
                  "Supplier identification for any product",
                  "Market research and feasibility studies"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-gray-300">
                    <CheckCircle size={20} className="text-accent flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="btn-primary">
                Contact Us About Your Product
                <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
            <div className="bg-white/10 rounded-2xl p-8">
              <div className="aspect-square bg-gradient-to-br from-white/20 to-white/5 rounded-xl flex items-center justify-center">
                <Settings size={120} className="text-white/30" />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <InquiryForm />
    </div>
  );
};

export default Products;
