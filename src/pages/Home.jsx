import { Link } from "react-router-dom";
import { 
  Search, Shield, ClipboardCheck, Factory, Truck, ArrowRight, CheckCircle, 
  Users, Globe, Award, ChevronRight, Package, FileCheck, MessageSquare
} from "lucide-react";
import { useState } from "react";

const services = [
  { icon: Search, title: "Supplier Research", description: "We identify and evaluate verified manufacturers.", href: "/services#supplier-research" },
  { icon: Shield, title: "Factory Verification", description: "Our team visits factories to verify credentials.", href: "/services#factory-verification" },
  { icon: ClipboardCheck, title: "Quality Control", description: "Professional inspectors ensure quality standards.", href: "/services#quality-control" },
  { icon: Factory, title: "Production Follow-up", description: "We monitor production progress and timelines.", href: "/services#production" },
  { icon: Truck, title: "Shipping Coordination", description: "We handle logistics and freight coordination.", href: "/services#shipping" },
];

const trustPoints = [
  { number: "500+", label: "Clients Served" },
  { number: "12+", label: "Years Experience" },
  { number: "50+", label: "Product Categories" },
  { number: "98%", label: "Client Satisfaction" },
];

const processSteps = [
  { step: "01", title: "Submit Inquiry", description: "Tell us about your requirements." },
  { step: "02", title: "We Research", description: "Our team identifies suitable suppliers." },
  { step: "03", title: "You Select", description: "Choose the best supplier for your needs." },
  { step: "04", title: "We Manage", description: "We handle production and shipping." },
];

const faqs = [
  { question: "What is the minimum order quantity?", answer: "MOQ varies by supplier. We help negotiate favorable terms." },
  { question: "How do you ensure quality?", answer: "Multi-stage QC process with pre-production, during-production, and pre-shipment inspections." },
  { question: "What are your service fees?", answer: "Transparent pricing based on services required. Contact us for a quote." },
  { question: "How long does sourcing take?", answer: "Typically 4-12 weeks from inquiry to shipment depending on complexity." },
];

const HeroSection = () => (
  <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
    <div className="container-custom relative z-10 py-24 md:py-32">
      <div className="max-w-3xl mx-auto text-center">
        <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm mb-6">
          <Globe className="w-4 h-4 text-blue-400" /> Trusted by 500+ Global Buyers
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
          China Sourcing Agent for <span className="text-blue-400">Global Buyers</span>
        </h1>
        <p className="text-xl text-slate-300 mb-8">
          Find reliable suppliers, verify factories, inspect quality, follow production, and coordinate shipping — all with one trusted partner.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contact" className="btn-primary text-lg px-8 py-4">Get a Free Sourcing Quote <ArrowRight className="w-5 h-5" /></Link>
          <Link to="/how-it-works" className="btn-secondary bg-white/5 border-white/20 text-white hover:bg-white/10 px-8 py-4">How It Works</Link>
        </div>
        <div className="flex flex-wrap gap-6 mt-10 pt-10 border-t border-white/10 justify-center">
          <div className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-400" /><span className="text-sm text-slate-300">No upfront fees</span></div>
          <div className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-400" /><span className="text-sm text-slate-300">Verified suppliers only</span></div>
          <div className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-400" /><span className="text-sm text-slate-300">Quality guaranteed</span></div>
        </div>
      </div>
    </div>
    <div className="absolute bottom-0 left-0 right-0"><svg viewBox="0 0 1440 120" fill="none"><path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/></svg></div>
  </section>
);

const ServicesSection = () => (
  <section id="services" className="section-spacing">
    <div className="container-custom">
      <div className="text-center mb-16">
        <span className="badge badge-primary mb-4">Our Services</span>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Complete Sourcing Solutions</h2>
        <p className="text-slate-600 max-w-2xl mx-auto">From supplier identification to final delivery, we handle every step.</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((s) => (
          <Link key={s.title} to={s.href} className="group bg-white rounded-xl p-8 border border-slate-200 card-hover">
            <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors">
              <s.icon className="w-7 h-7 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-blue-600">{s.title}</h3>
            <p className="text-slate-600 mb-4">{s.description}</p>
            <span className="inline-flex items-center text-blue-600 text-sm font-medium">Learn more <ArrowRight className="w-4 h-4 ml-1" /></span>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

const TrustSection = () => (
  <section className="section-spacing gradient-overlay text-white">
    <div className="container-custom">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by Businesses Worldwide</h2>
        <p className="text-blue-100 max-w-2xl mx-auto">Join hundreds of companies who rely on us for China sourcing.</p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {trustPoints.map((p) => (
          <div key={p.label} className="text-center">
            <div className="text-4xl md:text-5xl font-bold mb-2">{p.number}</div>
            <div className="text-blue-100">{p.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ProcessSection = () => (
  <section className="section-spacing">
    <div className="container-custom">
      <div className="text-center mb-16">
        <span className="badge badge-primary mb-4">How It Works</span>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Simple, Transparent Process</h2>
        <p className="text-slate-600 max-w-2xl mx-auto">Our systematic approach ensures efficient sourcing.</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {processSteps.map((step, i) => (
          <div key={step.step} className="relative">
            <div className="text-6xl font-bold text-slate-100 absolute -top-4 -left-2">{step.step}</div>
            <div className="relative pt-12">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">{step.title}</h3>
              <p className="text-slate-600">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-12">
        <Link to="/how-it-works" className="btn-primary">See Full Process <ArrowRight className="w-4 h-4" /></Link>
      </div>
    </div>
  </section>
);

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);
  return (
    <section id="faq" className="section-spacing">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <span className="badge badge-primary mb-4">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
            <p className="text-slate-600 mb-8">Quick answers to common questions about our services.</p>
            <Link to="/contact" className="btn-primary"><MessageSquare className="w-5 h-5" />Ask a Question</Link>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                <button onClick={() => setOpenIndex(openIndex === i ? null : i)} className="w-full px-6 py-4 text-left flex items-center justify-between">
                  <span className="font-semibold text-slate-900 pr-4">{faq.question}</span>
                  <ChevronRight className={`w-5 h-5 text-slate-400 transition-transform ${openIndex === i ? "rotate-90" : ""}`} />
                </button>
                {openIndex === i && <div className="px-6 pb-4 animate-fade-in"><p className="text-slate-600">{faq.answer}</p></div>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const CTASection = () => (
  <section className="section-spacing bg-slate-900 text-white">
    <div className="container-custom text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Sourcing from China?</h2>
      <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">Get a free, no-obligation quote. Our team responds within 24 hours.</p>
      <Link to="/contact" className="btn-primary text-lg px-8 py-4">Get a Free Sourcing Quote <ArrowRight className="w-5 h-5" /></Link>
    </div>
  </section>
);

const Home = () => (
  <div>
    <HeroSection />
    <ServicesSection />
    <TrustSection />
    <ProcessSection />
    <FAQSection />
    <CTASection />
  </div>
);

export default Home;
