import React from 'react';
import Layout from '../Layout';
import { CheckCircle2, Factory, ShieldCheck, Truck, BarChart3, Clock } from 'lucide-react';

const Step = ({ number, title, desc, icon: Icon }) => (
  <div className="flex gap-8 items-start">
    <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg shadow-blue-200">
      {number}
    </div>
    <div className="pt-2">
      <div className="flex items-center gap-3 mb-3">
        <Icon className="w-6 h-6 text-blue-600" />
        <h3 className="text-xl font-bold text-slate-900">{title}</h3>
      </div>
      <p className="text-slate-600 leading-relaxed">{desc}</p>
    </div>
  </div>
);

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      title: 'Submit Requirements',
      icon: CheckCircle2,
      desc: 'Send us your product specifications, sketches, or samples along with desired quantities and target pricing.'
    },
    {
      number: '02',
      title: 'Supplier Matching',
      icon: Factory,
      desc: 'We filter our database of over 5,000 factories to find the best 3-5 candidates for your specific needs.'
    },
    {
      number: '03',
      title: 'Quotation & Comparison',
      icon: BarChart3,
      desc: 'We present you with a detailed comparison of prices, lead times, and factory credentials from the screened suppliers.'
    },
    {
      number: '04',
      title: 'Sample Development',
      icon: CheckCircle2,
      desc: 'We facilitate sample production and shipping, ensuring the prototype matches your requirements before mass production.'
    },
    {
      number: '05',
      title: 'Production Oversight',
      icon: ShieldCheck,
      desc: 'Once you approve the sample, we manage the production schedule, contract signing, and down payment security.'
    },
    {
      number: '06',
      title: 'QC & Shipping',
      icon: Truck,
      desc: 'Our inspectors perform final QC. After approval, we coordinate sea or air freight, handle customs, and track to your door.'
    }
  ];

  return (
    <Layout>
      <section className="bg-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Seamless Sourcing Process</h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">We provide a transparent, step-by-step approach to help you source from China with zero stress.</p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-20 items-center mb-24">
            <div className="space-y-12">
              {steps.slice(0, 3).map(s => <Step key={s.number} {...s} />)}
            </div>
            <div className="hidden lg:block relative">
              <img 
                data-strk-img-id="how-it-works-img-1"
                data-strk-img="business meeting sourcing china factory discussion"
                data-strk-img-ratio="4x3"
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'/%3E"
                alt="Business Discussion"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="hidden lg:block order-last lg:order-first relative">
              <img 
                data-strk-img-id="how-it-works-img-2"
                data-strk-img="quality control inspector factory floor china"
                data-strk-img-ratio="4x3"
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'/%3E"
                alt="Quality Control"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div className="space-y-12">
              {steps.slice(3).map(s => <Step key={s.number} {...s} />)}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Clock className="w-12 h-12 mx-auto mb-6 opacity-80" />
          <h2 className="text-3xl font-bold mb-6">Start your first sourcing project today</h2>
          <p className="text-xl opacity-90 mb-10">We usually provide initial supplier options within 48 hours of receiving your inquiry.</p>
          <a href="/contact" className="bg-white text-blue-600 px-10 py-4 rounded-md font-bold hover:bg-blue-50 transition-all shadow-xl inline-block">
            Submit Your Project
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default HowItWorks;
