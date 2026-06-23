import { Link } from 'react-router-dom';

const HowItWorks = () => {
  const steps = [
    {
      num: '01',
      title: 'Submit Inquiry & Requirements',
      desc: 'Fill out our contact form with details about the product you want to source. Include specifications, target pricing, quantities, and reference images if possible. The more details you provide, the more accurate our sourcing will be.'
    },
    {
      num: '02',
      title: 'Supplier Search & Quoting',
      desc: 'Our sourcing team immediately begins contacting our network and searching for suitable factories. Within 2-3 days, we present you with a detailed quotation report comparing 2-3 of the best factories we verified.'
    },
    {
      num: '03',
      title: 'Sample Evaluation',
      desc: 'Once you select a preferred factory, we arrange for samples. We can have samples from multiple factories sent to our China office, consolidate them, and ship them to you in one package to save on international shipping costs.'
    },
    {
      num: '04',
      title: 'Order Placement & Deposit',
      desc: 'After you approve the sample, we draft a comprehensive Purchase Order with the factory, detailing all specifications, lead times, and quality requirements. You pay the deposit (usually 30%) to begin production.'
    },
    {
      num: '05',
      title: 'Production Follow-up',
      desc: 'While your goods are being manufactured, we stay in constant contact with the factory. We provide you with regular updates and step in immediately if there are any potential delays or issues.'
    },
    {
      num: '06',
      title: 'Quality Inspection',
      desc: 'When production is 80-100% complete, our inspectors visit the factory to conduct a thorough pre-shipment inspection according to international AQL standards. You review the detailed inspection report before paying the balance.'
    },
    {
      num: '07',
      title: 'Balance Payment & Shipping',
      desc: 'Once you approve the inspection report, the balance is paid. We handle all logistics, export documentation, and customs clearance, arranging the most cost-effective shipping method to deliver goods to your final destination.'
    }
  ];

  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 id="process-title" className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Our Sourcing Process</h1>
          <p id="process-desc" className="text-xl text-slate-600">
            A transparent, step-by-step approach to importing from China. We hold your hand through the entire journey.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent">
            {steps.map((step, index) => (
              <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                
                {/* Timeline dot */}
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-blue-600 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 text-white font-bold text-sm">
                  {step.num}
                </div>
                
                {/* Content Card */}
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                  <h3 className="font-bold text-xl text-slate-900 mb-3">{step.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 text-center">
          <Link to="/contact" className="inline-flex bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-md font-semibold text-lg transition">
            Start Step 01 Today
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;