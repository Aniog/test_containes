import React from 'react';
import { ClipboardList, Users, Settings, SearchCheck, Truck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HowItWorks = () => {
  const steps = [
    {
      icon: <ClipboardList className="w-10 h-10 text-white" />,
      title: "1. Submit Your Requirements",
      description: "Fill out our inquiry form with detailed product specifications, target price, desired quantity, and any certification requirements. The more details you provide, the better we can match you with the right supplier."
    },
    {
      icon: <Users className="w-10 h-10 text-white" />,
      title: "2. Supplier Matching & Quoting",
      description: "We reach out to our network and local industrial clusters. Within 3-5 days, we provide you with a comprehensive quotation report comparing 3-5 pre-vetted factories."
    },
    {
      icon: <Settings className="w-10 h-10 text-white" />,
      title: "3. Sampling & Prototyping",
      description: "Once you select a supplier, we arrange for samples. We can consolidate samples from multiple factories into one package to save you international shipping costs. We review the samples with you and coordinate any necessary modifications."
    },
    {
      icon: <SearchCheck className="w-10 h-10 text-white" />,
      title: "4. Production & Quality Control",
      description: "When the golden sample is approved, you place the bulk order. We monitor the production schedule to prevent delays. Before shipping, our QC inspectors perform an AQL inspection at the factory and provide a detailed report."
    },
    {
      icon: <Truck className="w-10 h-10 text-white" />,
      title: "5. Shipping & Logistics",
      description: "After the goods pass inspection, we arrange the shipping (Sea/Air/Express) based on your requirements. We handle export customs and ensure proper documentation is prepared for smooth import clearance."
    }
  ];

  return (
    <div className="flex flex-col bg-slate-50 min-h-screen">
      {/* Page Header */}
      <div className="bg-slate-900 py-16 text-center text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">How It Works</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            A transparent, step-by-step process designed to minimize risk and maximize efficiency.
          </p>
        </div>
      </div>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="relative">
            {/* Vertical Line (Hidden on mobile) */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200"></div>

            <div className="space-y-16">
              {steps.map((step, index) => (
                <div key={index} className="relative flex flex-col md:flex-row items-center">
                  
                  {/* Content (Left) */}
                  <div className={`md:w-1/2 w-full ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16 md:order-last'}`}>
                    <div className="bg-white p-8 rounded-xl shadow-md relative z-10 border border-slate-100 hover:shadow-lg transition-shadow">
                      <h3 className="text-2xl font-bold text-slate-900 mb-3">{step.title}</h3>
                      <p className="text-slate-600 text-lg leading-relaxed">{step.description}</p>
                    </div>
                  </div>

                  {/* Icon Marker */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-blue-600 items-center justify-center z-20 border-4 border-slate-50 shadow-md">
                    {step.icon}
                  </div>

                   {/* Mobile Icon (Shows only on mobile above the content) */}
                   <div className="md:hidden flex w-16 h-16 rounded-full bg-blue-600 items-center justify-center mb-4 shadow-md mx-auto">
                      {step.icon}
                   </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Fee Structure / Transparency */}
      <section className="py-20 bg-white border-t border-slate-200">
         <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Transparent Pricing Structure</h2>
            <p className="text-lg text-slate-600 mb-12">
              We believe in complete transparency. We don't hide our fees in product markups like traditional trading companies.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 text-left">
               <div className="bg-slate-50 p-8 rounded-xl border border-slate-200">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Service Commission</h3>
                  <p className="text-slate-600 mb-4">
                    For end-to-end sourcing (Sourcing, Sampling, Following up, QC, Shipping coordination), we charge a flat percentage commission based on the total order value.
                  </p>
                  <ul className="space-y-2 text-slate-700 font-medium">
                    <li><span className="text-blue-600 mr-2">✓</span> Typically 5% - 10% (depending on order size)</li>
                    <li><span className="text-blue-600 mr-2">✓</span> You pay the factory directly (factory price transparent)</li>
                  </ul>
               </div>

               <div className="bg-slate-50 p-8 rounded-xl border border-slate-200">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">A La Carte Services</h3>
                  <p className="text-slate-600 mb-4">
                    If you don't need end-to-end management, we offer fixed-rate services for specific tasks.
                  </p>
                  <ul className="space-y-2 text-slate-700 font-medium">
                    <li><span className="text-blue-600 mr-2">✓</span> Factory Audit: From $299/factory</li>
                    <li><span className="text-blue-600 mr-2">✓</span> QC Inspection: From $249/man-day</li>
                    <li><span className="text-blue-600 mr-2">✓</span> One-time Sourcing Report: $199</li>
                  </ul>
               </div>
            </div>
         </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-600 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Step 1?</h2>
          <Link 
            to="/contact" 
            className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-md text-blue-600 bg-white hover:bg-slate-100 shadow-lg hover:shadow-xl transition-all"
          >
            Submit Your Requirements
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;