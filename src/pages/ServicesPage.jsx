import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  ClipboardCheck, 
  Shield, 
  Factory, 
  Truck, 
  TrendingUp,
  CheckCircle,
  ArrowRight,
  FileText,
  Users,
  BarChart3,
  Package
} from 'lucide-react';

const ServicesPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Sourcing Services
            </h1>
            <p className="text-xl text-blue-100">
              Comprehensive end-to-end sourcing solutions tailored to your business needs
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="space-y-20">
            {/* Service 1: Supplier Sourcing */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-16 h-16 bg-blue-100 text-blue-700 rounded-lg flex items-center justify-center mb-6">
                  <Search className="w-8 h-8" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Supplier Sourcing</h2>
                <p className="text-lg text-gray-600 mb-6">
                  We identify and evaluate reliable manufacturers based on your product requirements, 
                  quality standards, and budget constraints.
                </p>
                <div className="space-y-3 mb-8">
                  {[
                    'Comprehensive supplier database with 2000+ verified factories',
                    'Match based on product type, capacity, and certifications',
                    'Multiple supplier options for comparison',
                    'Background checks and financial stability assessment',
                    'Initial price quotes and MOQ negotiation'
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
                <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
                  Get Started
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">What We Deliver</h3>
                <div className="space-y-4">
                  {[
                    { label: 'Supplier Report', desc: 'Detailed profiles with capabilities and certifications' },
                    { label: 'Price Comparison', desc: 'Side-by-side analysis of 3-5 suppliers' },
                    { label: 'Risk Assessment', desc: 'Evaluation of potential risks and mitigation strategies' }
                  ].map((item, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900">{item.label}</h4>
                      <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Service 2: Factory Audit */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 bg-gray-50 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Audit Checklist</h3>
                <div className="space-y-3">
                  {[
                    'Business License & Certifications',
                    'Production Capacity Assessment',
                    'Quality Management Systems',
                    'Equipment & Technology Check',
                    'Workforce & Skills Evaluation',
                    'Past Client References',
                    'Social Compliance Audit'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="w-16 h-16 bg-blue-100 text-blue-700 rounded-lg flex items-center justify-center mb-6">
                  <ClipboardCheck className="w-8 h-8" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Factory Audit & Verification</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Comprehensive factory assessments to ensure your supplier meets international 
                  standards and has the capability to deliver quality products.
                </p>
                <div className="space-y-3 mb-8">
                  {[
                    'On-site factory visits by our experienced auditors',
                    'ISO, CE, FDA, and other certification verification',
                    'Production capacity and equipment assessment',
                    'Quality control system evaluation',
                    'Social compliance and ethical manufacturing check',
                    'Detailed audit report with photos and recommendations'
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
                <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
                  Schedule Audit
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>

            {/* Service 3: Quality Inspection */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-16 h-16 bg-blue-100 text-blue-700 rounded-lg flex items-center justify-center mb-6">
                  <Shield className="w-8 h-8" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Quality Inspection</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Professional quality control inspections at every stage of production to ensure 
                  your products meet specifications and quality standards.
                </p>
                <div className="space-y-3 mb-8">
                  {[
                    'Pre-production inspection (raw materials & components)',
                    'During production inspection (DUPRO)',
                    'Pre-shipment inspection (PSI) - 100% or AQL sampling',
                    'Container loading supervision',
                    'Laboratory testing coordination (SGS, Intertek, etc.)',
                    'Detailed inspection reports with photos'
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
                <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
                  Book Inspection
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Inspection Standards</h3>
                <div className="space-y-4">
                  {[
                    { standard: 'AQL 1.0 / 2.5', desc: 'Acceptable Quality Limit sampling' },
                    { standard: 'ISO 2859-1', desc: 'Sampling procedures for inspection' },
                    { standard: 'Client Specs', desc: 'Custom checklists based on your requirements' }
                  ].map((item, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900">{item.standard}</h4>
                      <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Service 4: Production Monitoring */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 bg-gray-50 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Monitoring Includes</h3>
                <div className="space-y-3">
                  {[
                    'Weekly production progress reports',
                    'Photo and video updates from factory floor',
                    'Milestone tracking and timeline management',
                    'Immediate issue escalation and resolution',
                    'Production capacity and bottleneck analysis'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="w-16 h-16 bg-blue-100 text-blue-700 rounded-lg flex items-center justify-center mb-6">
                  <Factory className="w-8 h-8" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Production Monitoring</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Regular oversight during production to ensure timelines are met, quality is 
                  maintained, and any issues are addressed promptly.
                </p>
                <div className="space-y-3 mb-8">
                  {[
                    'Dedicated production monitor assigned to your project',
                    'Regular factory visits and progress updates',
                    'Real-time communication via email, phone, or WeChat',
                    'Production timeline tracking and delay prevention',
                    'Quality checkpoints at critical production stages',
                    'Coordination with factory management for issue resolution'
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
                <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
                  Start Monitoring
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>

            {/* Service 5: Shipping & Logistics */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-16 h-16 bg-blue-100 text-blue-700 rounded-lg flex items-center justify-center mb-6">
                  <Truck className="w-8 h-8" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Shipping & Logistics</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Complete logistics coordination from factory to your warehouse, including 
                  freight forwarding, customs clearance, and delivery.
                </p>
                <div className="space-y-3 mb-8">
                  {[
                    'Freight forwarding (sea, air, express)',
                    'Customs documentation and clearance',
                    'Cargo insurance coordination',
                    'Warehouse and distribution services',
                    'Real-time shipment tracking',
                    'Consolidation services to reduce costs',
                    'Amazon FBA shipment preparation'
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
                <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
                  Get Shipping Quote
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Shipping Options</h3>
                <div className="space-y-4">
                  {[
                    { method: 'Sea Freight', desc: 'Cost-effective for large shipments (20-40 days)' },
                    { method: 'Air Freight', desc: 'Fast delivery for urgent orders (5-7 days)' },
                    { method: 'Express Courier', desc: 'Small packages via DHL, FedEx, UPS (3-5 days)' }
                  ].map((item, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900">{item.method}</h4>
                      <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Service 6: Cost Optimization */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 bg-gray-50 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Savings Examples</h3>
                <div className="space-y-4">
                  {[
                    { item: 'Electronics Client', saving: '30% cost reduction' },
                    { item: 'Home Decor Buyer', saving: '22% lower unit cost' },
                    { item: 'Fashion Brand', saving: '40% lower MOQ achieved' }
                  ].map((item, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900">{item.item}</h4>
                      <p className="text-sm text-green-600 font-semibold mt-1">{item.saving}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="w-16 h-16 bg-blue-100 text-blue-700 rounded-lg flex items-center justify-center mb-6">
                  <TrendingUp className="w-8 h-8" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Cost Optimization</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Strategic negotiation and supply chain optimization to reduce your total sourcing 
                  costs while maintaining quality standards.
                </p>
                <div className="space-y-3 mb-8">
                  {[
                    'Competitive price negotiation with suppliers',
                    'MOQ reduction strategies',
                    'Alternative material and component suggestions',
                    'Production process optimization recommendations',
                    'Consolidation of multiple orders for better pricing',
                    'Identification of cost-saving opportunities',
                    'Total landed cost analysis (product + shipping + duties)'
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
                <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
                  Optimize Costs
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-blue-700 text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Sourcing?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and customized sourcing plan
          </p>
          <Link to="/contact" className="btn-secondary bg-white text-blue-700 hover:bg-blue-50 text-lg px-8 py-4">
            Get a Free Quote
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
