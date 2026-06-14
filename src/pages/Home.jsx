import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import FeatureCard from '../components/FeatureCard';
import QuoteForm from '../components/QuoteForm';
import { Button } from '../components/ui/button';
import { 
  Award, 
  Shield, 
  Zap, 
  Users, 
  Wrench, 
  Globe,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

const Home = () => {
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState('');

  const openQuote = (product = '') => {
    setSelectedProduct(product);
    setQuoteOpen(true);
  };

  const products = [
    {
      title: "Double Folding Machine",
      description: "High-capacity double folding systems for continuous, high-volume production with unmatched precision.",
      specs: [
        "Up to 4mm mild steel capacity",
        "Working lengths from 2.5m to 6m",
        "Dual independent folding beams",
        "CNC backgauge with 6-axis control",
        "Automatic tool positioning"
      ]
    },
    {
      title: "Double Folder",
      description: "Versatile double folder designed for workshops requiring flexibility across a wide range of materials and thicknesses.",
      specs: [
        "1.5mm to 3mm capacity range",
        "Manual and semi-automatic modes",
        "Quick-change tooling system",
        "Compact footprint for smaller shops",
        "Ideal for HVAC and signage"
      ]
    },
    {
      title: "Sheet Metal Folder",
      description: "Precision sheet metal folders engineered for clean, consistent bends across aluminum, steel, and specialty alloys.",
      specs: [
        "0.5mm to 2.5mm material range",
        "Segmented tooling for complex shapes",
        "Digital angle readout",
        "Foot pedal and two-hand operation",
        "Low maintenance design"
      ]
    },
    {
      title: "Sheet Metal Folding Machine",
      description: "Heavy-duty folding machines built for demanding industrial environments and long production runs.",
      specs: [
        "Up to 5mm capacity on mild steel",
        "Robust welded steel frame",
        "Hydraulic clamping system",
        "Programmable folding sequences",
        "Safety light curtains included"
      ]
    },
    {
      title: "Metal Folder",
      description: "Reliable metal folders offering exceptional value without compromising on build quality or accuracy.",
      specs: [
        "1mm to 2mm standard capacity",
        "Manual backgauge with fine adjustment",
        "Interchangeable upper blades",
        "Suitable for prototype and small batch",
        "Easy to operate and maintain"
      ]
    },
    {
      title: "Metal Folder Machine",
      description: "Advanced metal folder machines with integrated automation features for modern fabrication facilities.",
      specs: [
        "Servo-driven folding beam",
        "Touchscreen CNC controller",
        "Automatic crowning compensation",
        "Integration-ready for production lines",
        "Remote diagnostics support"
      ]
    },
    {
      title: "Metal Folding Machine",
      description: "Flagship metal folding machines delivering the highest levels of precision, repeatability, and operator comfort.",
      specs: [
        "Full CNC with 3D simulation",
        "Up to 8mm capacity options",
        "Automatic tool changer available",
        "Industry 4.0 connectivity",
        "10-year structural warranty"
      ]
    }
  ];

  const features = [
    {
      icon: Award,
      title: "Precision Engineering",
      description: "Every machine is built to tolerances measured in hundredths of a millimeter. Consistent, repeatable results on every bend."
    },
    {
      icon: Shield,
      title: "Built to Last",
      description: "Heavy-gauge steel frames, premium components, and rigorous testing ensure decades of reliable service in demanding environments."
    },
    {
      icon: Zap,
      title: "Operator Focused",
      description: "Intuitive controls, ergonomic design, and clear interfaces mean your team becomes productive faster with less training."
    },
    {
      icon: Users,
      title: "Dedicated Support",
      description: "Our engineers and technicians provide installation, training, and ongoing service wherever your facility is located."
    },
    {
      icon: Wrench,
      title: "Easy Maintenance",
      description: "Modular design and accessible components make routine service straightforward. Genuine parts available worldwide."
    },
    {
      icon: Globe,
      title: "Global Presence",
      description: "Machines installed in over 40 countries. Local partners and factory support ensure you are never far from help."
    }
  ];

  const industries = [
    "HVAC & Ductwork",
    "Architectural Metalwork",
    "Automotive Components",
    "Aerospace & Defense",
    "Electrical Enclosures",
    "Signage & Display",
    "Industrial Equipment",
    "Custom Fabrication"
  ];

  return (
    <div className="min-h-screen bg-brand-offwhite text-brand-charcoal">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-20 bg-brand-navy text-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 pt-20 pb-24 md:pt-28 md:pb-32 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block px-4 py-1 rounded-full bg-white/10 text-xs tracking-[3px] mb-6">EST. 1987</div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tighter leading-[1.05] mb-6">
              Precision metal<br />folding equipment.
            </h1>
            <p className="text-xl md:text-2xl text-white/70 max-w-2xl mb-10 leading-tight">
              Engineered for manufacturers who value accuracy, reliability, and thoughtful design.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="gold" 
                size="lg" 
                onClick={() => openQuote()}
                className="group"
              >
                Request a Quote
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 transition" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                onClick={() => document.getElementById('products').scrollIntoView({ behavior: 'smooth', block: 'start' })}
                className="border-white/30 text-white hover:bg-white/10 hover:text-white hover:border-white/50"
              >
                Explore Products
              </Button>
            </div>
          </div>
        </div>
        
        {/* Subtle decorative element */}
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-brand-bronze/10 to-transparent pointer-events-none" />
      </section>

      {/* Trust Bar */}
      <div className="border-b border-brand-steel/10 bg-white py-5">
        <div className="max-w-6xl mx-auto px-6 flex flex-wrap justify-center items-center gap-x-12 gap-y-3 text-sm text-brand-slate tracking-wide">
          <div>40+ COUNTRIES</div>
          <div>12,000+ MACHINES</div>
          <div>ISO 9001 CERTIFIED</div>
          <div>10-YEAR WARRANTY</div>
        </div>
      </div>

      {/* Products Section */}
      <section id="products" className="max-w-7xl mx-auto px-6 pt-20 pb-16">
        <div className="text-center mb-14">
          <div className="text-xs tracking-[3px] text-brand-bronze font-medium mb-3">OUR RANGE</div>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-brand-navy mb-4">
            Machines for every scale of production
          </h2>
          <p className="text-lg text-brand-slate max-w-2xl mx-auto">
            From compact workshop folders to fully automated production lines, we build equipment that matches your ambitions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              title={product.title}
              description={product.description}
              specs={product.specs}
              onRequestQuote={() => openQuote(product.title)}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-brand-slate mb-4">Need something custom or have a specific application?</p>
          <Button variant="outline" onClick={() => openQuote('Other / Custom Solution')}>
            Discuss Custom Solutions
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-white py-20 border-y border-brand-steel/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mb-14">
            <div className="text-xs tracking-[3px] text-brand-bronze font-medium mb-3">WHY ARTITECT</div>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-brand-navy mb-4">
              Built differently. Built better.
            </h2>
            <p className="text-lg text-brand-slate">
              We design every detail with the people who will use our machines every day. The result is equipment that is powerful yet approachable.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <div className="text-xs tracking-[3px] text-brand-bronze font-medium mb-3">INDUSTRIES WE SERVE</div>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-brand-navy">
            Trusted across demanding sectors
          </h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {industries.map((industry, index) => (
            <div 
              key={index} 
              className="flex items-center gap-3 px-6 py-4 bg-white rounded-xl border border-brand-steel/10 text-brand-charcoal/90"
            >
              <CheckCircle2 className="w-4 h-4 text-brand-bronze flex-shrink-0" />
              <span className="text-sm font-medium">{industry}</span>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-brand-navy text-white py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-x-12 gap-y-10 items-center">
            <div className="md:col-span-7">
              <div className="text-xs tracking-[3px] text-brand-bronze font-medium mb-4">OUR STORY</div>
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter leading-tight mb-8">
                Three generations of precision craftsmanship.
              </h2>
              <div className="space-y-6 text-lg text-white/75 leading-relaxed">
                <p>
                  Founded in 1987 by master toolmaker Henrik Voss, ARTITECT MACHINERY began with a simple belief: 
                  the best machines are those that disappear into the background, letting skilled operators focus on their craft.
                </p>
                <p>
                  Today, under the leadership of the third generation of the Voss family, we continue to refine every detail. 
                  Our machines are found in workshops, factories, and production lines across the world, still built with the same 
                  attention to durability, accuracy, and the human experience.
                </p>
              </div>
            </div>
            
            <div className="md:col-span-5 bg-white/5 rounded-2xl p-8 md:p-10 border border-white/10">
              <div className="space-y-8">
                <div>
                  <div className="text-4xl font-semibold tracking-tighter text-white mb-1">37</div>
                  <div className="text-sm text-white/60 tracking-wide">YEARS OF EXCELLENCE</div>
                </div>
                <div>
                  <div className="text-4xl font-semibold tracking-tighter text-white mb-1">240+</div>
                  <div className="text-sm text-white/60 tracking-wide">EMPLOYEES WORLDWIDE</div>
                </div>
                <div>
                  <div className="text-4xl font-semibold tracking-tighter text-white mb-1">98%</div>
                  <div className="text-sm text-white/60 tracking-wide">CUSTOMER RETENTION RATE</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact / CTA Section */}
      <section id="contact" className="max-w-4xl mx-auto px-6 py-20 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="text-xs tracking-[3px] text-brand-bronze font-medium mb-4">LET'S TALK</div>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-brand-navy mb-6">
            Ready to improve your bending operations?
          </h2>
          <p className="text-xl text-brand-slate mb-10">
            Speak with our applications team about the right machine for your materials, volume, and workflow. 
            We respond to every inquiry within one business day.
          </p>
          
          <Button 
            variant="gold" 
            size="lg" 
            onClick={() => openQuote()}
            className="px-10"
          >
            Request a Quote
          </Button>
          
          <div className="mt-12 pt-8 border-t border-brand-steel/10 text-sm text-brand-slate">
            <p>Prefer to speak directly? Call us at <span className="font-medium text-brand-navy">+1 (312) 555-0187</span></p>
            <p className="mt-1">Or email <span className="font-medium text-brand-navy">sales@artitectmachinery.com</span></p>
          </div>
        </div>
      </section>

      <Footer />

      {/* Quote Form Modal */}
      <QuoteForm 
        open={quoteOpen} 
        onOpenChange={setQuoteOpen} 
        defaultProduct={selectedProduct} 
      />
    </div>
  );
};

export default Home;
