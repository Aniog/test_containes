import React from 'react';
import { Shield, Search, CheckCircle, Factory, Truck, MessageSquare, BarChart3, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => (
  <section className="relative overflow-hidden pt-20 pb-24 lg:pt-32 lg:pb-40">
    <div className="absolute inset-0 z-0">
      <div 
        className="w-full h-full bg-slate-900"
        data-strk-bg-id="hero-bg-sourcing"
        data-strk-bg="[hero-title] [hero-subtitle] factory manufacturing logistics"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      />
      <div className="absolute inset-0 bg-slate-900/60" />
    </div>
    
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center lg:text-left">
      <div className="max-w-3xl lg:max-w-2xl">
        <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
          China Sourcing Agent for Global Buyers
        </h1>
        <p id="hero-subtitle" className="text-xl text-slate-200 mb-10 leading-relaxed">
          Unlock reliable supply chains in China. We handle supplier verification, factory audits, quality control, and logistics so you can grow your business with confidence.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <Link 
            to="/contact" 
            className="bg-blue-600 text-white px-8 py-4 rounded-md text-lg font-bold hover:bg-blue-700 transition-all shadow-lg text-center"
          >
            Get a Free Sourcing Quote
          </Link>
          <Link 
            to="/services" 
            className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-md text-lg font-bold hover:bg-white/20 transition-all text-center"
          >
            View Our Services
          </Link>
        </div>
        
        <div className="mt-12 flex flex-wrap justify-center lg:justify-start gap-6 text-sm text-slate-300">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-blue-400" />
            <span>10+ Years Experience</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-blue-400" />
            <span>On-Site Factory Audits</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-blue-400" />
            <span>Strict Quality Control</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const ServicesGrid = () => {
  const services = [
    {
      icon: Search,
      title: 'Supplier Sourcing',
      desc: 'Find the best manufacturers for your specific product requirements among thousands of suppliers.',
      id: 'service-sourcing'
    },
    {
      icon: Shield,
      title: 'Factory Verification',
      desc: 'On-site audits to verify supplier legitimacy, certifications, production capacity, and social compliance.',
      id: 'service-verification'
    },
    {
      icon: CheckCircle,
      title: 'Quality Inspection',
      desc: 'Rigid QC inspections before, during, and after production to ensure every unit meets your standards.',
      id: 'service-qc'
    },
    {
      icon: Truck,
      title: 'Shipping & Logistics',
      desc: 'Consolidation, warehousing, customs clearance, and cost-effective shipping to your doorstep.',
      id: 'service-shipping'
    }
  ];

  return (
    <section id="services-section" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 id="services-title" className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Complete End-to-End Sourcing Services</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">We provide a comprehensive suite of services to minimize your risk when buying from China.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s) => (
            <div key={s.id} className="p-8 border border-slate-100 rounded-xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-6">
                <s.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{s.title}</h3>
              <p className="text-slate-600 mb-6 leading-relaxed text-sm">{s.desc}</p>
              <Link to="/services" className="text-blue-600 font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                Learn more <span>→</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProcessSteps = () => {
  const steps = [
    { number: '01', title: 'Submit Inquiry', desc: 'Tell us about your product, desired quantities, and quality standards.' },
    { number: '02', title: 'Find & Verify', desc: 'We source suppliers, request quotes, and perform initial company checks.' },
    { number: '03', title: 'Samples & Order', desc: 'We coordinate sample production and help you negotiate production terms.' },
    { number: '04', title: 'QC & Shipping', desc: 'Final inspection is performed before shipping to ensure everything is perfect.' }
  ];

  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 id="process-title" className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 leading-tight">Our Proven Sourcing Process</h2>
            <div className="space-y-10">
              {steps.map((step) => (
                <div key={step.number} className="flex gap-6">
                  <span className="text-4xl font-bold text-blue-600/20">{step.number}</span>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                    <p className="text-slate-600">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img 
              data-strk-img-id="process-visual-img"
              data-strk-img="[process-title] sourcing logistics factory worker"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'/%3E"
              alt="Our Sourcing Process"
              className="rounded-2xl shadow-2xl relative z-10"
            />
            <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-blue-600/10 rounded-2xl -z-0" />
            <div className="absolute -top-8 -right-8 w-64 h-64 bg-blue-600/10 rounded-full -z-0" />
          </div>
        </div>
      </div>
    </section>
  );
};

const TrustPoints = () => (
  <section className="py-24 bg-white border-y border-slate-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Why Global Buyers Choose SSourcing China</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="text-center">
          <div className="mx-auto w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-6">
            <Clock className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold mb-4">Fast Turnaround</h3>
          <p className="text-slate-600">Get supplier results within 48 hours for common products, ensuring your projects stay on schedule.</p>
        </div>
        <div className="text-center">
          <div className="mx-auto w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-6">
            <MessageSquare className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold mb-4">Direct Communication</h3>
          <p className="text-slate-600">Native English and Chinese speakers bridge the gap, preventing costly misunderstandings with manufacturers.</p>
        </div>
        <div className="text-center">
          <div className="mx-auto w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-6">
            <Shield className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold mb-4">On-the-Ground Presence</h3>
          <p className="text-slate-600">We are physically based in China's manufacturing hubs. We visit factories so you don't have to.</p>
        </div>
      </div>
    </div>
  </section>
);

const ProblemsWeSolve = () => {
  const problems = [
    { title: 'Poor Communication', desc: 'Misunderstandings regarding technical specs lead to unusable products.' },
    { title: 'Hidden Middlemen', desc: 'Sourcing from "factories" that are actually trading companies adds 20-30% cost.' },
    { title: 'Quality Inconsistency', desc: 'The first batch is perfect, but the second batch has a 15% defect rate.' },
    { title: 'Payment Risks', desc: 'Sending large deposits to unverified suppliers with no legal protection.' }
  ];

  return (
    <section className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img 
              data-strk-img-id="problems-visual"
              data-strk-img="frustrated businessman at computer manufacturing problems"
              data-strk-img-ratio="4x3"
              data-strk-img-width="600"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'/%3E"
              alt="Manufacturing Challenges"
              className="rounded-2xl opacity-80"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Stop Worrying About China Sourcing</h2>
            <div className="space-y-6">
              {problems.map((p) => (
                <div key={p.title} className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-xs font-bold">!</div>
                  <div>
                    <h3 className="font-bold text-blue-400 mb-1">{p.title}</h3>
                    <p className="text-slate-400 text-sm">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const faqs = [
    { q: 'What are your sourcing fees?', a: 'We offer flexible pricing based on project scope. Usually, we charge a flat sourcing fee for the initial search and a small commission based on the order value for full-service management.' },
    { q: 'Can you handle small orders?', a: "Yes, we work with both small businesses and large corporations. While some factories have MOQs, we help negotiate the best terms for your scale." },
    { q: 'How do you verify a factory?', a: 'We perform on-site visits, verify business licenses, check production capacity, and review their history of exports and certifications.' },
    { q: 'Do you arrange shipping?', a: 'Absolutely. We coordinate consolidate shipping, sea freight, air freight, and handle all customs documentation for export from China.' }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">Frequently Asked Questions</h2>
        <div className="space-y-8">
          {faqs.map((faq) => (
            <div key={faq.q} className="border-b border-slate-100 pb-8">
              <h3 className="text-lg font-bold text-slate-900 mb-2">{faq.q}</h3>
              <p className="text-slate-600 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Home = () => {
  return (
    <div>
      <Hero />
      <ServicesGrid />
      <ProblemsWeSolve />
      <ProcessSteps />
      <TrustPoints />
      <FAQ />
      
      {/* Featured Sourcing Quote CTA Section */}
      <section className="py-24 bg-blue-600 text-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Ready to scale your sourcing from China?</h2>
          <p className="text-xl opacity-90 mb-10 text-blue-50">Get a free consultation and let us help you find the best suppliers today.</p>
          <Link to="/contact" className="bg-white text-blue-600 px-10 py-4 rounded-md text-xl font-bold hover:bg-blue-50 transition-all shadow-xl inline-block">
            Request a Free Quote
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
