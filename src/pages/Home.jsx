import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, ShieldCheck, Factory, PackageSearch, Ship } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json'; // Note: Assuming this exists or will be provided by SDK context. We will omit it if it causes errors, or mock it.
// Actually, let's use a simpler approach for images as requested.

export default function Home() {
  const containerRef = useRef(null);

  useEffect(() => {
    // In a real app we'd load images here via SDK
    // For now we'll just let the data-strk-bg and data-strk-img attributes do their work when the SDK is active
  }, []);

  const features = [
    {
      icon: <Factory className="h-6 w-6" />,
      title: "Supplier Verification",
      description: "We verify factory capabilities, financial standing, and production capacity before you place an order."
    },
    {
      icon: <ShieldCheck className="h-6 w-6" />,
      title: "Quality Control",
      description: "Our on-the-ground team performs pre-shipment inspections to ensure products meet your exact specifications."
    },
    {
      icon: <PackageSearch className="h-6 w-6" />,
      title: "Sample Consolidation",
      description: "We collect samples from multiple suppliers, check them, and send them to you in one cost-effective package."
    },
    {
      icon: <Ship className="h-6 w-6" />,
      title: "Logistics & Shipping",
      description: "From factory floor to your warehouse. We handle customs clearance, freight forwarding, and final delivery."
    }
  ];

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative text-white min-h-[600px] flex items-center pt-20 pb-20">
        <div 
          className="absolute inset-0 z-0 bg-slate-900"
          data-strk-bg-id="hero-bg-1"
          data-strk-bg="[hero-title] [hero-subtitle]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        >
          {/* Overlay to ensure text readability */}
          <div className="absolute inset-0 bg-slate-900/70" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
          <div className="max-w-3xl">
            <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              China Sourcing Agent for Global Buyers
            </h1>
            <p id="hero-subtitle" className="text-lg md:text-xl text-slate-200 mb-8 leading-relaxed max-w-2xl">
              We help overseas buyers find reliable suppliers, verify factories, inspect quality, follow production, and coordinate shipping safely.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/contact" 
                className="bg-accent hover:bg-amber-600 text-white px-8 py-4 rounded-md font-semibold text-lg transition-colors text-center shadow-lg"
              >
                Get a Free Sourcing Quote
              </Link>
              <Link 
                to="/services" 
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/30 px-8 py-4 rounded-md font-semibold text-lg transition-colors text-center"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges / Stats Section */}
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
           <h2 id="trust-title" className="sr-only">Why Trust Us</h2>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-slate-100">
             <div className="px-4">
               <p className="text-4xl font-bold text-primary mb-2">10+</p>
               <p className="text-slate-600 font-medium">Years Experience</p>
             </div>
             <div className="px-4">
               <p className="text-4xl font-bold text-primary mb-2">500+</p>
               <p className="text-slate-600 font-medium">Verified Factories</p>
             </div>
             <div className="px-4">
               <p className="text-4xl font-bold text-primary mb-2">30+</p>
               <p className="text-slate-600 font-medium">Countries Served</p>
             </div>
             <div className="px-4">
               <p className="text-4xl font-bold text-primary mb-2">100%</p>
               <p className="text-slate-600 font-medium">Quality Commitment</p>
             </div>
           </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 id="services-title" className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              End-to-End Sourcing Solutions
            </h2>
            <p id="services-subtitle" className="text-lg text-slate-600">
              We manage the risks and complexities of sourcing from China so you can focus on growing your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-slate-100">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-6">{feature.description}</p>
                <Link to="/services" className="text-primary font-semibold hover:text-blue-800 flex items-center gap-1">
                  Learn more <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image / Text Section: Problems we solve */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="w-full lg:w-1/2">
              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3] bg-slate-100">
                <img 
                  data-strk-img-id="problems-img-1"
                  data-strk-img="[problems-title] [problems-subtitle]"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt="Quality control inspection in China"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="w-full lg:w-1/2">
              <h2 id="problems-title" className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Stop Worrying About Quality and Scams
              </h2>
              <p id="problems-subtitle" className="text-lg text-slate-600 mb-8 leading-relaxed">
                Sourcing from overseas can be risky. Communication barriers, poor quality production, and delayed shipments can hurt your bottom line. We act as your office in China, protecting your interests.
              </p>
              
              <ul className="space-y-4 mb-8">
                {[
                  "No more late night WeChat calls trying to explain requirements",
                  "Avoid receiving containers full of defective products",
                  "Stop paying too much by going through multiple trading companies",
                  "Ensure your products meet compliance and safety standards"
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-green-500 mr-3 shrink-0" />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
              
              <Link 
                to="/how-it-works" 
                className="bg-primary hover:bg-blue-800 text-white px-6 py-3 rounded-md font-semibold inline-flex items-center gap-2 transition-colors"
              >
                See How It Works <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10">
          <h2 id="cta-title" className="text-3xl md:text-4xl font-bold mb-6">Ready to Streamline Your Supply Chain?</h2>
          <p id="cta-subtitle" className="text-xl text-blue-100 mb-10 leading-relaxed max-w-2xl mx-auto">
            Tell us about the products you need. Our team will get back to you within 24 hours with a customized sourcing plan.
          </p>
          <Link 
            to="/contact" 
            className="bg-accent hover:bg-amber-600 text-white px-8 py-4 rounded-md font-bold text-lg transition-colors inline-block shadow-lg"
          >
            Start Your Sourcing Project Today
          </Link>
        </div>
      </section>
    </div>
  );
}