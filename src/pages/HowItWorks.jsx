import { FileText, Search, ShieldCheck, Settings, Ship, ArrowDown } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      icon: <FileText className="h-10 w-10 text-white" />,
      title: "Requirement Submission",
      description: "You provide us with detailed product specifications, target pricing, quantities, and quality standards."
    },
    {
      number: "02",
      icon: <Search className="h-10 w-10 text-white" />,
      title: "Sourcing & Quotation",
      description: "Our local team identifies suitable manufacturers, negotiates terms, and presents you with a comprehensive quote covering all costs."
    },
    {
      number: "03",
      icon: <ShieldCheck className="h-10 w-10 text-white" />,
      title: "Sample & Factory Audit",
      description: "We physically audit the chosen factory and arrange sample production. We consolidate samples to reduce your courier costs."
    },
    {
      number: "04",
      icon: <Settings className="h-10 w-10 text-white" />,
      title: "Production & QC",
      description: "Once you approve the sample, mass production begins. We follow up throughout and perform a strict AQL Pre-Shipment Inspection."
    },
    {
      number: "05",
      icon: <Ship className="h-10 w-10 text-white" />,
      title: "Shipping & Delivery",
      description: "We handle customs clearance and coordinate shipping (Sea, Air, or Express) delivering the goods safely to your final destination."
    }
  ];

  return (
    <div className="bg-gray-50 flex-grow py-20 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Proven Sourcing Process</h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We've streamlined the complex process of sourcing from China into 5 transparent, manageable steps.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
           {/* Connecting Line (Desktop) */}
           <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-blue-200 -translate-x-1/2 z-0"></div>

           <div className="space-y-12 relative z-10">
             {steps.map((step, index) => (
                <div key={index} className={`flex flex-col md:flex-row items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                    {/* Content Box */}
                    <div className="w-full md:w-5/12 p-6 bg-white rounded-xl shadow-md border border-gray-100">
                        <div className="flex items-center mb-4">
                            <span className="text-3xl font-black text-gray-200 mr-4">{step.number}</span>
                            <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                        </div>
                        <p className="text-gray-600">{step.description}</p>
                    </div>

                    {/* Icon Bubble */}
                    <div className="w-full md:w-2/12 flex justify-center my-6 md:my-0">
                        <div className="w-20 h-20 bg-blue-600 rounded-full border-4 border-white shadow-lg flex items-center justify-center relative">
                            {step.icon}
                            {/* Down Arrow for Mobile (except last item) */}
                            {index !== steps.length - 1 && (
                                <div className="md:hidden absolute -bottom-8">
                                    <ArrowDown className="text-blue-200 h-6 w-6" />
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Empty Space for alignment */}
                    <div className="hidden md:block md:w-5/12"></div>
                </div>
             ))}
           </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;