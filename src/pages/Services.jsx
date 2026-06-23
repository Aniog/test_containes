import React from 'react';
import { 
  Search, 
  Factory, 
  ShieldCheck, 
  Truck, 
  FileText, 
  UserCheck, 
  PackageSearch, 
  Clock,
  ChevronRight,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const allServices = [
    {
      title: "Product Sourcing",
      icon: Search,
      bg: "chinese market wholesale sourcing",
      desc: "We find the right suppliers that meet your specific quality, price, and MOQ requirements. Our specialists negotiate directly with factories to secure the best terms.",
      features: ["Supplier Shortlisting", "Price Negotiation", "MOQ Optimization", "Contract Review"]
    },
    {
      title: "Factory Audits",
      icon: Factory,
      bg: "factory entrance gate security",
      desc: "Don't risk your money on unverified suppliers. We visit factories on-site to verify their production capacity, legal status, and quality management systems.",
      features: ["Business License Check", "Production Line Verification", "Social Compliance", "R&D Capability Assessment"]
    },
    {
      title: "Quality Control",
      icon: ShieldCheck,
      bg: "quality control worker inspecting laptop",
      desc: "Our inspectors ensure your products are manufactured exactly as ordered. We provide detailed reports with photos and videos before the final payment.",
      features: ["During Production (DUPRO)", "Pre-Shipment Inspection (PSI)", "Container Loading Supervision", "Defect Analysis"]
    },
    {
      title: "Shipping & Logistics",
      icon: Truck,
      bg: "container ship sea",
      desc: "We manage the entire logistics process, from factory pickup to your doorstep. We handle all documentation and customs clearance for a hassle-free experience.",
      features: ["Sea, Air & Rail Freight", "Customs Brokerage", "Warehouse Consolidation", "Drop Shipping Support"]
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-slate-900 py-24 text-white relative">
        <div 
          className="absolute inset-0 opacity-30 brightness-[0.6]"
          data-strk-bg-id="services-hero-bg"
          data-strk-bg="modern logistics warehouse exterior"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Our Sourcing Services</h1>
          <p className="text-xl text-slate-300 max-w-2xl">
            End-to-end supply chain management solutions tailored to your business needs in China. We simplify global trade.
          </p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 space-y-32">
          {allServices.map((service, index) => (
            <div key={service.title} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-start`}>
              <div className="lg:w-1/2 w-full">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video">
                  <div 
                    className="absolute inset-0 z-0"
                    data-strk-bg-id={`srv-detail-bg-${index}`}
                    data-strk-bg={service.bg}
                    data-strk-bg-ratio="16x9"
                    data-strk-bg-width="1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 flex items-end p-8">
                    <div className="bg-white p-4 rounded-xl shadow-lg">
                      <service.icon className="w-8 h-8 text-[#ff6b00]" />
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="lg:w-1/2 w-full pt-4">
                <h2 className="text-3xl font-extrabold text-[#1a3d66] mb-6">{service.title}</h2>
                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                  {service.desc}
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.features.map(feature => (
                    <div key={feature} className="flex items-center gap-3 text-slate-700 bg-slate-50 p-3 rounded-lg border border-slate-100 italic font-medium text-sm">
                      <ChevronRight className="w-4 h-4 text-[#ff6b00]" />
                      {feature}
                    </div>
                  ))}
                </div>
                
                <div className="mt-10">
                  <Link to="/contact" className="text-[#ff6b00] font-bold text-lg hover:gap-3 transition-all flex items-center gap-2">
                    Inquire about this service <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Snippet */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-[#1a3d66]">Our Commitment to Quality</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-sm">
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-slate-100">
              <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShieldCheck className="w-8 h-8 text-[#1a3d66]" />
              </div>
              <h3 className="text-lg font-extrabold mb-4">Zero Risk Policy</h3>
              <p className="text-slate-500 leading-relaxed italic">We only recommend factories with proven track records and valid exports.</p>
            </div>
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-slate-100">
              <div className="bg-orange-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-[#ff6b00]" />
              </div>
              <h3 className="text-lg font-extrabold mb-4">Real-time Updates</h3>
              <p className="text-slate-500 leading-relaxed italic">Get daily or weekly progress reports on your production and shipping status.</p>
            </div>
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-slate-100">
              <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <FileText className="w-8 h-8 text-[#1a3d66]" />
              </div>
              <h3 className="text-lg font-extrabold mb-4">No Hidden Fees</h3>
              <p className="text-slate-500 leading-relaxed italic">Clear, upfront pricing with no kickbacks or secret commissions from factories.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#1a3d66] py-20 text-center text-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Ready to Optimize Your Supply Chain?</h2>
          <p className="text-slate-300 mb-10 text-lg">Contact our Beijing head office today for a free consultation on your sourcing strategy.</p>
          <Link to="/contact" className="px-10 py-5 bg-[#ff6b00] hover:bg-[#e65a00] text-white rounded-md text-xl font-bold transition-all shadow-xl">
            Request a Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
