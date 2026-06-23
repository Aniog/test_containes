import { Search, FileCheck, ShieldCheck, Truck, BarChart, PenTool } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Search,
      title: 'Supplier Sourcing & Verification',
      desc: 'We don\'t just search Alibaba. We leverage our local network to find actual manufacturers, not just trading companies. We verify business licenses, export history, and production capabilities before recommending them to you.',
      features: ['Factory background checks', 'Price negotiation', 'Sample arrangement', 'Direct factory communication']
    },
    {
      icon: FileCheck,
      title: 'Factory Audits',
      desc: 'Before placing a large order, our team visits the factory in person to ensure they can meet your requirements. We provide detailed reports with photos and videos of the facilities.',
      features: ['ISO certification verification', 'Production capacity assessment', 'Social compliance checks', 'Equipment inspection']
    },
    {
      icon: ShieldCheck,
      title: 'Quality Control Inspections',
      desc: 'We protect your investment by inspecting goods before they leave China. Our standard procedure follows AQL (Acceptable Quality Limit) standards to catch defects early.',
      features: ['Pre-production inspection', 'During-production inspection (DUPRO)', 'Pre-shipment inspection (PSI)', 'Container loading check']
    },
    {
      icon: PenTool,
      title: 'Product Development & OEM/ODM',
      desc: 'Have a unique product idea? We help turn your concepts into reality by coordinating between you and factory engineers for prototyping, tooling, and mass production.',
      features: ['Prototyping coordination', 'Mold & tooling management', 'Packaging design sourcing', 'IP protection guidance']
    },
    {
      icon: BarChart,
      title: 'Production Follow-up',
      desc: 'We act as your project managers on the ground. We monitor the production schedule continuously to prevent delays and resolve issues immediately when they arise.',
      features: ['Weekly progress reports', 'Material quality verification', 'Schedule management', 'Problem resolution']
    },
    {
      icon: Truck,
      title: 'Logistics & Shipping',
      desc: 'We provide end-to-end logistics solutions. Whether you need express air freight or FCL ocean shipping to an Amazon FBA warehouse, we get your goods delivered efficiently.',
      features: ['Freight forwarding', 'Customs clearance documents', 'Warehouse consolidation', 'Amazon FBA prep']
    }
  ];

  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 id="services-page-title" className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Our Sourcing Services</h1>
          <p id="services-page-desc" className="text-xl text-slate-600">
            A complete end-to-end solution for sourcing, manufacturing, and importing products from China safely and efficiently.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col h-full hover:shadow-md transition">
              <div className="p-8 flex-grow">
                 <div className="bg-blue-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6 text-blue-600">
                  <service.icon className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {service.desc}
                </p>
                <div className="mt-auto">
                  <h4 className="font-semibold text-slate-900 mb-3 text-sm uppercase tracking-wider">What's Included:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start text-slate-700">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Solution strip */}
        <div className="mt-20 bg-slate-50 rounded-2xl p-8 md:p-12 text-center border border-slate-200">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Need a Custom Solution?</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
            Every business has unique needs. We can tailor our services to match exactly what your supply chain requires.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-medium text-lg transition">
            Contact Us for Custom Pricing
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;