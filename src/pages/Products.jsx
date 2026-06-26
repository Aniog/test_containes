import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import InquiryForm from '../components/InquiryForm';

const Products = () => {
  const categories = [
    {
      name: 'Electronics & Components',
      description: 'PCBs, connectors, cables, power supplies, sensors, and assembled electronic products.',
      examples: ['Consumer electronics', 'Industrial control boards', 'Wiring harnesses', 'Power adapters'],
      considerations: 'Component sourcing, RoHS compliance, testing requirements, and firmware considerations.',
    },
    {
      name: 'Mechanical Parts & Hardware',
      description: 'Machined components, castings, fasteners, springs, and custom metal or plastic parts.',
      examples: ['CNC machined parts', 'Die castings', 'Stampings', 'Injection molded components'],
      considerations: 'Tolerance requirements, material specifications, surface finish, and tooling costs.',
    },
    {
      name: 'Textiles & Apparel',
      description: 'Fabric, garments, home textiles, and accessories produced to specification.',
      examples: ['Workwear and uniforms', 'Home textiles', 'Technical fabrics', 'Promotional apparel'],
      considerations: 'Fabric composition, sizing standards, labeling requirements, and minimum order quantities.',
    },
    {
      name: 'Home & Garden Products',
      description: 'Furniture, kitchenware, storage solutions, and outdoor products for retail and commercial use.',
      examples: ['Kitchen tools and gadgets', 'Storage and organization', 'Outdoor furniture', 'Decorative items'],
      considerations: 'Safety standards, packaging requirements, and seasonal production cycles.',
    },
    {
      name: 'Industrial Equipment & Tools',
      description: 'Machinery components, hand tools, safety equipment, and maintenance supplies.',
      examples: ['Hand and power tools', 'Safety equipment', 'Material handling accessories', 'Maintenance parts'],
      considerations: 'Certification requirements, spare parts availability, and technical documentation.',
    },
    {
      name: 'Consumer Goods',
      description: 'Everyday products including personal care items, household goods, and lifestyle products.',
      examples: ['Personal care accessories', 'Kitchen and dining', 'Pet products', 'Travel accessories'],
      considerations: 'Packaging design, retail presentation, and regulatory compliance for target markets.',
    },
    {
      name: 'Packaging Materials',
      description: 'Custom and standard packaging including boxes, bags, labels, and protective materials.',
      examples: ['Corrugated cartons', 'Retail packaging', 'Protective inserts', 'Labels and tags'],
      considerations: 'Material specifications, printing requirements, and sustainability preferences.',
    },
    {
      name: 'Automotive & Transportation Parts',
      description: 'Aftermarket and OEM components for vehicles, trailers, and related equipment.',
      examples: ['Interior trim components', 'Electrical accessories', 'Fasteners and fittings', 'Maintenance parts'],
      considerations: 'Material certifications, dimensional tolerances, and traceability requirements.',
    },
  ];

  const industries = [
    'Retail & E-commerce',
    'Industrial & Manufacturing',
    'Automotive',
    'Construction & Building',
    'Healthcare & Medical',
    'Agriculture & Equipment',
    'Hospitality & Foodservice',
    'Promotional & Marketing',
  ];

  return (
    <div>
      <section className="bg-slate-900 text-white py-12 md:py-16">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">Products We Source</h1>
            <p className="text-lg text-slate-300">
              We work with buyers across a range of product categories. Our experience spans consumer goods, 
              industrial components, and specialized B2B products.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="mb-10">
            <h2 className="section-title">Product Categories</h2>
            <p className="section-subtitle">
              Below are the main categories we regularly source. If your product is not listed, 
              contact us — we can assess feasibility.
            </p>
          </div>

          <div className="space-y-6">
            {categories.map((category, index) => (
              <div key={index} className="card">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="md:col-span-1">
                    <h3 className="font-semibold text-lg mb-2">{category.name}</h3>
                    <p className="text-sm text-slate-600">{category.description}</p>
                  </div>
                  <div className="md:col-span-1">
                    <div className="text-xs font-medium text-slate-500 uppercase tracking-wide mb-2">Examples</div>
                    <ul className="space-y-1">
                      {category.examples.map((ex, i) => (
                        <li key={i} className="text-sm text-slate-600 flex items-start gap-2">
                          <CheckCircle className="w-3.5 h-3.5 text-green-700 mt-1 flex-shrink-0" />
                          {ex}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="md:col-span-1">
                    <div className="text-xs font-medium text-slate-500 uppercase tracking-wide mb-2">Key Considerations</div>
                    <p className="text-sm text-slate-600">{category.considerations}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-slate-50">
        <div className="container">
          <div className="mb-8">
            <h2 className="section-title">Industries We Serve</h2>
            <p className="section-subtitle">
              Our clients include distributors, retailers, manufacturers, and brands across these sectors.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {industries.map((industry, index) => (
              <div key={index} className="product-category text-sm">
                {industry}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="max-w-3xl">
            <h2 className="section-title mb-4">What We Need to Assess a Product</h2>
            <p className="text-slate-600 mb-6">
              To provide a meaningful assessment, we typically need the following information:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                'Product description or specifications',
                'Target price range or budget',
                'Annual or order quantity',
                'Quality requirements or standards',
                'Any certifications needed',
                'Packaging and labeling needs',
                'Destination country',
                'Timeline requirements',
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-2 text-sm text-slate-700">
                  <CheckCircle className="w-4 h-4 text-green-700 mt-0.5 flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-slate-900 text-white">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center mb-8">
            <h2 className="text-2xl font-bold mb-3 text-white">Looking for a Specific Product?</h2>
            <p className="text-slate-300">Tell us what you need to source. We will assess feasibility and provide options.</p>
          </div>
          <div className="max-w-xl mx-auto bg-white rounded-lg p-6 md:p-8">
            <InquiryForm compact title="Submit Product Inquiry" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
