import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  ShieldCheck, 
  Settings, 
  Truck, 
  ArrowRight, 
  CheckCircle2, 
  Globe2, 
  Users2, 
  BarChart3,
  Factory,
  ClipboardCheck,
  PackageCheck,
  MessageSquareQuote
} from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import Button from '@/components/ui/Button';

const Home = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const services = [
    {
      id: 'src-id-1',
      title: 'Supplier Sourcing',
      desc: 'Connect with verified factories that meet your specific quality and price requirements.',
      icon: <Search className="w-10 h-10 text-blue-600" />,
      titleId: 'service-title-1',
      descId: 'service-desc-1'
    },
    {
      id: 'src-id-2',
      title: 'Factory Verification',
      desc: 'On-site audits of factory facilities, licenses, and social compliance to mitigate risk.',
      icon: <ShieldCheck className="w-10 h-10 text-blue-600" />,
      titleId: 'service-title-2',
      descId: 'service-desc-2'
    },
    {
      id: 'src-id-3',
      title: 'Production Management',
      desc: 'Real-time production monitoring and scheduling to ensure on-time delivery.',
      icon: <Settings className="w-10 h-10 text-blue-600" />,
      titleId: 'service-title-3',
      descId: 'service-desc-3'
    },
    {
      id: 'src-id-4',
      title: 'Quality Inspection',
      desc: 'Detailed pre-shipment inspections following AQL standards to ensure product quality.',
      icon: <ClipboardCheck className="w-10 h-10 text-blue-600" />,
      titleId: 'service-title-4',
      descId: 'service-desc-4'
    },
    {
      id: 'src-id-5',
      title: 'FBA & Logistics',
      desc: 'Efficient shipping solutions door-to-door, including FBA label and prep services.',
      icon: <Truck className="w-10 h-10 text-blue-600" />,
      titleId: 'service-title-5',
      descId: 'service-desc-5'
    },
    {
      id: 'src-id-6',
      title: 'Trade Consultation',
      desc: 'Expert advice on customs, duties, and compliance for various global markets.',
      icon: <Globe2 className="w-10 h-10 text-blue-600" />,
      titleId: 'service-title-6',
      descId: 'service-desc-6'
    }
  ];

  const steps = [
    { number: '01', title: 'Consultation', text: 'Tell us about your product needs and target price.' },
    { number: '02', title: 'Supplier Search', text: 'We shortlist 3-5 verified factories for your review.' },
    { number: '03', title: 'Sample Check', text: 'We coordinate samples and verify quality benchmarks.' },
    { number: '04', title: 'Order Placement', text: 'Secure negotiation and production follow-up.' },
    { number: '05', title: 'Quality Control', text: 'Comprehensive inspection before final payment.' },
    { number: '06', title: 'Shipping', text: 'Consolidated shipping and door-to-door delivery.' },
  ];

  return (
    <div ref={containerRef} className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center bg-slate-900 text-white pt-20">
        <div 
          className="absolute inset-0 opacity-40 mix-blend-overlay"
          data-strk-bg-id="hero-bg-9911"
          data-strk-bg="[hero-title] [hero-subtitle] China factory port shipping"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        ></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 bg-blue-600/20 text-blue-400 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6 border border-blue-600/30">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span>Based in Shenzhen, China</span>
            </div>
            <h1 id="hero-title" className="text-5xl md:text-7xl font-black mb-8 leading-[1.1] tracking-tight">
              China Sourcing Agent for <span className="text-blue-500">Global Buyers</span>
            </h1>
            <p id="hero-subtitle" className="text-xl md:text-2xl text-slate-300 mb-10 leading-relaxed font-medium">
              Find reliable suppliers, verify factories, and ensure product quality with your trusted partner on the ground in China.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button size="lg" className="w-full sm:w-auto h-14 text-lg">
                  Get a Free Sourcing Quote
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="outline" size="lg" className="w-full sm:w-auto h-14 text-lg text-white border-white hover:bg-white hover:text-slate-900 bg-transparent">
                  Explore Services
                </Button>
              </Link>
            </div>
            <div className="mt-12 flex items-center space-x-8 text-slate-400 text-sm">
              <div className="flex items-center"><CheckCircle2 className="w-4 h-4 mr-2 text-blue-500" /> 10+ Years Experience</div>
              <div className="flex items-center"><CheckCircle2 className="w-4 h-4 mr-2 text-blue-500" /> 500+ Verified Suppliers</div>
              <div className="flex items-center"><CheckCircle2 className="w-4 h-4 mr-2 text-blue-500" /> 0% Hidden Fees</div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Points / Stats */}
      <section className="py-12 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-white rounded-xl shadow-sm"><Users2 className="w-8 h-8 text-blue-600" /></div>
              <div><div className="text-3xl font-black text-slate-900">200+</div><div className="text-sm text-slate-500 font-medium">Global Clients</div></div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-white rounded-xl shadow-sm"><Factory className="w-8 h-8 text-blue-600" /></div>
              <div><div className="text-3xl font-black text-slate-900">1000+</div><div className="text-sm text-slate-500 font-medium">Factory Audits</div></div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-white rounded-xl shadow-sm"><PackageCheck className="w-8 h-8 text-blue-600" /></div>
              <div><div className="text-3xl font-black text-slate-900">$50M+</div><div className="text-sm text-slate-500 font-medium">Sourced Annually</div></div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-white rounded-xl shadow-sm"><BarChart3 className="w-8 h-8 text-blue-600" /></div>
              <div><div className="text-3xl font-black text-slate-900">99%</div><div className="text-sm text-slate-500 font-medium">Quality Rate</div></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 id="services-title" className="text-4xl font-black text-slate-900 mb-6 uppercase tracking-tight">End-to-End Sourcing Services</h2>
            <p id="services-subtitle" className="text-lg text-slate-600 leading-relaxed font-medium">
              We handle the entire supply chain process, so you can focus on growing your business while we ensure your products arrive exactly as expected.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className="group p-10 bg-white border border-slate-100 rounded-2xl hover:border-blue-200 hover:shadow-[0_20px_50px_rgba(8,112,184,0.07)] transition-all duration-300">
                <div className="mb-6 transform group-hover:-translate-y-1 transition-transform">{service.icon}</div>
                <h3 id={service.titleId} className="text-2xl font-black text-slate-900 mb-4">{service.title}</h3>
                <p id={service.descId} className="text-slate-500 mb-8 leading-relaxed font-medium">{service.desc}</p>
                <Link to="/services" className="text-blue-600 font-bold inline-flex items-center group/link">
                  Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
                </Link>
                <div className="mt-8 overflow-hidden rounded-lg">
                  <img 
                    data-strk-img-id={`service-img-${service.id}`}
                    data-strk-img={`[${service.descId}] [${service.titleId}] [services-subtitle]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={service.title}
                    className="w-full grayscale group-hover:grayscale-0 transition-all duration-500 object-cover h-40"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 id="process-title" className="text-4xl font-black mb-8 leading-tight">How We Streamline Your <span className="text-blue-500">China Sourcing</span></h2>
              <div className="space-y-4">
                {steps.map((step) => (
                  <div key={step.number} className="flex gap-6 p-6 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10 group">
                    <span className="text-3xl font-black text-blue-500 opacity-50 group-hover:opacity-100 transition-opacity">{step.number}</span>
                    <div>
                      <h4 className="text-xl font-bold mb-2">{step.title}</h4>
                      <p className="text-slate-400 font-medium leading-relaxed">{step.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  data-strk-img-id="process-hero-img"
                  data-strk-img="[process-title] sourcing agent working with factory samples warehouse"
                  data-strk-img-ratio="4x5"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt="Sourcing Process"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-blue-600 p-8 rounded-2xl shadow-xl hidden md:block">
                <p className="text-sm font-bold opacity-80 uppercase tracking-widest mb-2">Our Goal</p>
                <p className="text-2xl font-black leading-tight italic">"Full visibility. Zero stress."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-black text-slate-900 mb-4">Are You Facing These Challenges?</h2>
            <p className="text-lg text-slate-600 font-medium">Importing from China shouldn't be a gamble. We provide the eyes and ears you need on the ground.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-6 p-8 bg-red-50 rounded-2xl border border-red-100">
              <div className="shrink-0 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-red-500 font-bold text-xl">!</div>
              <div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">Communication Gaps</h4>
                <p className="text-slate-600 font-medium leading-relaxed">Language barriers and cultural differences often lead to product misunderstandings and costly mistakes.</p>
              </div>
            </div>
            <div className="flex gap-6 p-8 bg-orange-50 rounded-2xl border border-orange-100">
              <div className="shrink-0 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-orange-500 font-bold text-xl">?</div>
              <div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">Unreliable Suppliers</h4>
                <p className="text-slate-600 font-medium leading-relaxed">Finding legitimate factories and avoiding middleman trading companies posing as manufacturers is difficult from overseas.</p>
              </div>
            </div>
            <div className="flex gap-6 p-8 bg-amber-50 rounded-2xl border border-amber-100">
              <div className="shrink-0 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-amber-500 font-bold text-xl">×</div>
              <div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">Quality Inconsistency</h4>
                <p className="text-slate-600 font-medium leading-relaxed">Samples may look great, but mass production quality can vary wildly without strict on-site supervision.</p>
              </div>
            </div>
            <div className="flex gap-6 p-8 bg-blue-50 rounded-2xl border border-blue-100">
              <div className="shrink-0 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-blue-500 font-bold text-xl">✓</div>
              <div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">Our Solution</h4>
                <p className="text-slate-600 font-medium leading-relaxed text-blue-800">We act as your local office in China, vetting every detail to ensure you get exactly what you paid for.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-blue-600 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">Ready to Secure Your Supply Chain?</h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto font-medium">Get a transparent, risk-free sourcing quote today and see the difference a professional agent makes.</p>
          <div className="flex justify-center">
            <Link to="/contact">
              <Button variant="white" size="lg" className="h-16 px-10 text-xl font-black uppercase tracking-tight">
                Start Your Free Quote <ArrowRight className="ml-3 w-6 h-6 border-2 rounded-full p-0.5" />
              </Button>
            </Link>
          </div>
        </div>
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="grid grid-cols-12 h-full opacity-20">
             {[...Array(12)].map((_, i) => (
               <div key={i} className="border-r border-white/20"></div>
             ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-black text-slate-900 mb-12 text-center uppercase tracking-tight">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                <h4 className="text-xl font-bold text-slate-900 mb-3">What are your sourcing fees?</h4>
                <p className="text-slate-600 font-medium leading-relaxed">Our fees are transparent and depend on the scope of work. Generally, we offer either a fixed project fee or a small percentage of the order value. We never take kickbacks from suppliers.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                <h4 className="text-xl font-bold text-slate-900 mb-3">Can you help with small MOQs?</h4>
                <p className="text-slate-600 font-medium leading-relaxed">Yes, we work with both established brands and e-commerce start-ups. We negotiate with factories to find MOQs that fit your current business stage.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                <h4 className="text-xl font-bold text-slate-900 mb-3">Will you sign an NNN or NDA?</h4>
                <p className="text-slate-600 font-medium leading-relaxed">Absolutely. Protecting your brand's IP and designs is a top priority. We ensure standard non-disclosure agreements are in place before sharing details with suppliers.</p>
              </div>
            </div>
            <div className="mt-12 text-center">
              <Link to="/contact" className="text-blue-600 font-bold flex items-center justify-center hover:underline">
                Have more questions? Contact our team <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final Inquiry Form Section */}
      <section className="py-24 bg-white border-t border-slate-200" id="inquiry">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/2">
              <h2 id="inquiry-title" className="text-4xl font-black text-slate-900 mb-8 leading-tight">Request Your <span className="text-blue-500">Free Sourcing Audit</span></h2>
              <p id="inquiry-desc" className="text-lg text-slate-600 mb-10 font-medium leading-relaxed">
                Send us your product requirements or a link to an existing product you want to source. Our team will get back to you within 24 hours with a custom strategy.
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 shrink-0">
                    <MessageSquareQuote className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-400 uppercase tracking-wider">Fast Response</p>
                    <p className="text-lg font-bold text-slate-900">Expert feedback in 24h</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 shrink-0">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-400 uppercase tracking-wider">Risk-Free</p>
                    <p className="text-lg font-bold text-slate-900">No obligation, zero upfront cost</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-slate-900 p-8 md:p-10 rounded-3xl shadow-2xl text-white">
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-widest text-slate-500">Full Name</label>
                      <input type="text" className="w-full bg-slate-800 border-none rounded-lg h-12 px-4 focus:ring-2 focus:ring-blue-500" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-widest text-slate-500">Email Address</label>
                      <input type="email" className="w-full bg-slate-800 border-none rounded-lg h-12 px-4 focus:ring-2 focus:ring-blue-500" placeholder="john@company.com" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-500">Product Interest</label>
                    <input type="text" className="w-full bg-slate-800 border-none rounded-lg h-12 px-4 focus:ring-2 focus:ring-blue-500" placeholder="e.g., Electronics, Textiles, etc." />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-500">Estimated Monthly Volume</label>
                    <select className="w-full bg-slate-800 border-none rounded-lg h-12 px-4 focus:ring-2 focus:ring-blue-500 appearance-none">
                      <option>Less than $5,000</option>
                      <option>$5,000 - $20,000</option>
                      <option>$20,000 - $100,000</option>
                      <option>Over $100,000</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-500">Message / Requirements</label>
                    <textarea className="w-full bg-slate-800 border-none rounded-lg h-32 p-4 focus:ring-2 focus:ring-blue-500 resize-none" placeholder="How can we help you source from China?"></textarea>
                  </div>
                  <Button size="lg" className="w-full h-14 text-lg font-black uppercase tracking-widest">
                    Submit Inquiry
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
