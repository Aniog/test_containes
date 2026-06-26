import { Search, ShieldCheck, ClipboardCheck, Ship, Box, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      id: "product-sourcing",
      icon: <Search className="h-8 w-8 text-blue-600" />,
      title: "Product Sourcing & Supplier Identification",
      description: "We bypass standard directories to find direct manufacturers holding the best price-to-quality ratio. We negotiate pricing, MOQ, and terms on your behalf.",
      features: ["Requirement Analysis", "Supplier Shortlisting", "Price & Term Negotiation", "Sample Consolidation"]
    },
    {
      id: "factory-verification",
      icon: <ShieldCheck className="h-8 w-8 text-blue-600" />,
      title: "Factory Verification & Audits",
      description: "Don't risk your capital with unknown entities. We conduct comprehensive background checks and physical factory audits before you part with your money.",
      features: ["Business License Check", "On-site Factory Audits", "Production Capacity Review", "Social Compliance Checks"]
    },
    {
      id: "quality-control",
      icon: <ClipboardCheck className="h-8 w-8 text-blue-600" />,
      title: "Quality Control & Inspections",
      description: "We are your eyes in the factory. We perform rigorous inspections according to global AQL standards, ensuring products meet your exact specifications before final payment.",
      features: ["Pre-Production Inspection", "During Production Check", "Pre-Shipment Inspection", "Container Loading Supervision"]
    },
    {
      id: "shipping-logistics",
      icon: <Ship className="h-8 w-8 text-blue-600" />,
      title: "Shipping, Logistics & Customs",
      description: "We coordinate the entire shipping process from the factory floor to your warehouse. By consolidating shipments, we reduce your overall freight costs.",
      features: ["Sea Freight (FCL/LCL)", "Air Freight & Express", "Customs Clearance", "Warehouse Consolidation"]
    },
    {
      id: "amazon-fba",
      icon: <Box className="h-8 w-8 text-blue-600" />,
      title: "Amazon FBA Prep",
      description: "Specialized services for Amazon sellers. We ensure your products are packaged, labeled, and prepared exactly according to strict Amazon FBA requirements.",
      features: ["FNSKU Labeling", "Polybagging & Bundling", "Kitting & Assembly", "Direct Ship to Amazon Warehouses"]
    }
  ];

  return (
    <div className="bg-gray-50 flex-grow">
      {/* Hero Section */}
      <div className="bg-blue-900 py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Sourcing Services</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              A complete end-to-end supply chain solution designed to minimize risk, reduce costs, and guarantee quality for B2B buyers.
            </p>
        </div>
      </div>

      {/* Services List */}
      <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {services.map((service, index) => (
            <div key={service.id} className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-16 items-center`}>
              <div className="w-full md:w-1/2">
                 <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 h-full">
                    <div className="w-16 h-16 bg-blue-50 rounded-lg flex items-center justify-center mb-6">
                        {service.icon}
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h2>
                    <p className="text-gray-600 mb-6 text-lg">{service.description}</p>
                    
                    <ul className="space-y-3">
                        {service.features.map((feature, fIndex) => (
                            <li key={fIndex} className="flex items-center text-gray-700">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                                {feature}
                            </li>
                        ))}
                    </ul>
                 </div>
              </div>
              <div className="w-full md:w-1/2 rounded-xl overflow-hidden shadow-md flex items-center justify-center bg-gray-200 aspect-[4/3]">
                  {/* Placeholder for actual service images */}
                  <span className="text-gray-400 font-medium">Service Image ({service.title})</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-white border-t border-gray-200 py-16 text-center">
         <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Need a Custom Sourcing Solution?</h2>
            <Link
                to="/contact"
                className="inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-semibold rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-sm"
              >
                Let's Discuss Your Project <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
         </div>
      </div>
    </div>
  );
};

export default Services;