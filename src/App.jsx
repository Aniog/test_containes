import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProductCard from './components/ProductCard';
import ContactForm from './components/ContactForm';
import SectionHeading from './components/SectionHeading';
import FeatureCard from './components/FeatureCard';
import Stat from './components/Stat';
import { 
  Award, 
  Shield, 
  Zap, 
  Users, 
  Wrench, 
  Globe, 
  Clock, 
  CheckCircle 
} from 'lucide-react';

function App() {
  const products = [
    {
      title: "Double Folding Machine",
      description: "Our flagship double folding machine delivers unmatched precision for high-volume production. Engineered for continuous operation with minimal maintenance.",
      specs: ["Up to 4mm mild steel capacity", "Working length: 3.2m", "Dual motor drive system", "CNC backgauge control"],
    },
    {
      title: "Double Folder",
      description: "Compact yet powerful, the double folder is ideal for workshops requiring versatility without sacrificing floor space. Perfect balance of performance and footprint.",
      specs: ["Up to 3mm capacity", "Working length: 2.5m", "Manual & semi-auto modes", "Quick-change tooling"],
    },
    {
      title: "Sheet Metal Folder",
      description: "The industry standard for precision sheet metal folding. Built with hardened steel components and a rigid frame for consistent, accurate bends every time.",
      specs: ["Up to 2.5mm capacity", "Working length: 2.0m - 4.0m", "Segmented upper beam", "Adjustable folding angle"],
    },
    {
      title: "Sheet Metal Folding Machine",
      description: "Heavy-duty folding solution designed for demanding industrial applications. Features advanced hydraulic clamping and digital angle readout.",
      specs: ["Up to 6mm capacity", "Working length: 4.0m", "Hydraulic clamping system", "Digital angle display"],
    },
    {
      title: "Metal Folder",
      description: "A versatile, cost-effective solution for general fabrication shops. Reliable performance with straightforward operation and easy maintenance.",
      specs: ["Up to 2mm capacity", "Working length: 1.5m - 3.0m", "Manual clamping", "Simple angle adjustment"],
    },
    {
      title: "Metal Folding Machine",
      description: "Premium metal folding machine built for precision and durability. Ideal for architectural metalwork, HVAC, and custom fabrication.",
      specs: ["Up to 3.5mm capacity", "Working length: 3.0m", "Motorized folding beam", "Programmable stops"],
    },
  ];

  const features = [
    {
      icon: Zap,
      title: "Precision Engineering",
      description: "Every machine is built to tolerances of ±0.1mm, ensuring consistent, repeatable bends across thousands of cycles.",
    },
    {
      icon: Shield,
      title: "Built to Last",
      description: "Heavy-gauge steel frames, hardened tooling, and industrial-grade components deliver 20+ years of reliable service.",
    },
    {
      icon: Wrench,
      title: "Easy Maintenance",
      description: "Modular design and accessible components mean routine maintenance takes minutes, not hours. Minimal downtime.",
    },
    {
      icon: Users,
      title: "Operator Friendly",
      description: "Intuitive controls, clear readouts, and ergonomic design reduce training time and operator fatigue.",
    },
    {
      icon: Globe,
      title: "Global Support",
      description: "With service centers in 18 countries and a 24/7 technical hotline, help is always within reach.",
    },
    {
      icon: Award,
      title: "Industry Certified",
      description: "All machines meet CE, ISO 9001, and OSHA safety standards. Full documentation and training included.",
    },
  ];

  const whyUsPoints = [
    "Over 35 years of specialized expertise in sheet metal folding technology",
    "More than 4,200 machines installed across 42 countries",
    "In-house engineering team continuously improves designs based on real-world feedback",
    "Comprehensive 3-year warranty with lifetime technical support",
    "Custom configurations available for unique production requirements",
    "Training programs and on-site installation included with every purchase",
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />

      {/* HERO SECTION */}
      <section id="hero" className="pt-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6 pt-20 pb-24 md:pt-28 md:pb-32">
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-1.5 bg-white/10 rounded-full text-xs tracking-[3px] mb-6">
              EST. 1987
            </div>
            <h1 className="text-6xl md:text-7xl font-semibold tracking-tighter leading-none mb-6">
              Precision.<br />Reliability.<br />Craftsmanship.
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-2xl leading-tight mb-10">
              World-class sheet metal folding machines engineered for manufacturers who refuse to compromise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#products" 
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-slate-900 font-medium rounded-lg hover:bg-slate-100 transition-colors text-sm tracking-wide"
              >
                EXPLORE OUR MACHINES
              </a>
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-8 py-4 border border-white/30 text-white font-medium rounded-lg hover:bg-white/5 transition-colors text-sm tracking-wide"
              >
                REQUEST A QUOTE
              </a>
            </div>
          </div>
        </div>

        {/* Trust bar */}
        <div className="border-t border-white/10 bg-black/20">
          <div className="max-w-7xl mx-auto px-6 py-6 flex flex-wrap items-center justify-center gap-x-12 gap-y-4 text-xs tracking-[2px] text-slate-400">
            <div>CE CERTIFIED</div>
            <div>ISO 9001:2015</div>
            <div>42 COUNTRIES</div>
            <div>35+ YEARS</div>
            <div>4,200+ MACHINES</div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="max-w-7xl mx-auto px-6 py-20 md:py-28">
        <div className="grid md:grid-cols-12 gap-x-12 gap-y-10 items-center">
          <div className="md:col-span-7">
            <SectionHeading 
              eyebrow="OUR HERITAGE" 
              title="Engineered for those who build." 
              subtitle="For over three decades, Artitect Machinery has been the trusted partner for fabricators who demand uncompromising quality in every bend."
            />
          </div>
          <div className="md:col-span-5">
            <div className="prose prose-slate text-slate-600">
              <p className="text-lg leading-relaxed">
                Founded in Cleveland, Ohio in 1987, we began with a simple mission: build folding machines that outlast and outperform everything else on the market.
              </p>
              <p className="mt-4 leading-relaxed">
                Today, our machines are found in aerospace facilities, architectural metal shops, HVAC manufacturers, and custom fabrication workshops around the world. Every machine that leaves our factory carries the same promise: precision you can count on, day after day, year after year.
              </p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 pt-12 border-t grid grid-cols-2 md:grid-cols-4 gap-8">
          <Stat number="35+" label="YEARS IN BUSINESS" />
          <Stat number="4,200+" label="MACHINES INSTALLED" />
          <Stat number="42" label="COUNTRIES SERVED" />
          <Stat number="99.4%" label="CUSTOMER RETENTION" />
        </div>
      </section>

      {/* PRODUCTS SECTION */}
      <section id="products" className="bg-white py-20 md:py-28 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading 
            eyebrow="OUR MACHINES" 
            title="The right tool for every fold." 
            subtitle="From compact workshop folders to heavy-duty production systems, we offer a complete range of precision folding solutions."
            align="center"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {products.map((product, index) => (
              <ProductCard 
                key={index}
                title={product.title}
                description={product.description}
                specs={product.specs}
              />
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-slate-600 mb-4">Need a custom configuration or have specific requirements?</p>
            <a href="#contact" className="inline-flex items-center gap-2 text-sm font-medium text-slate-900 hover:gap-3 transition-all">
              Speak with our engineering team <span>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section id="features" className="max-w-7xl mx-auto px-6 py-20 md:py-28">
        <div className="max-w-2xl mb-12">
          <SectionHeading 
            eyebrow="ENGINEERED DIFFERENCE" 
            title="Built smarter. Built stronger." 
            subtitle="Every detail of our machines is designed to deliver superior performance, safety, and longevity."
          />
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
      </section>

      {/* WHY US SECTION */}
      <section id="why-us" className="bg-slate-900 text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-x-12 gap-y-10">
            <div className="md:col-span-5">
              <div className="sticky top-24">
                <div className="text-xs tracking-[3px] text-slate-400 mb-3">THE ARTITECT ADVANTAGE</div>
                <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter leading-none mb-6">
                  Why leading manufacturers choose Artitect.
                </h2>
                <p className="text-slate-400 text-lg">
                  It's not just about the machine. It's about the partnership, the support, and the peace of mind that comes from working with true specialists.
                </p>
              </div>
            </div>

            <div className="md:col-span-7">
              <div className="space-y-6">
                {whyUsPoints.map((point, index) => (
                  <div key={index} className="flex gap-4 items-start bg-white/5 rounded-xl p-6 border border-white/10">
                    <div className="mt-1 flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-emerald-400" />
                    </div>
                    <p className="text-lg text-slate-200 leading-snug">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="max-w-7xl mx-auto px-6 py-20 md:py-28">
        <div className="grid lg:grid-cols-12 gap-x-16 gap-y-12">
          <div className="lg:col-span-5">
            <SectionHeading 
              eyebrow="LET'S TALK" 
              title="Ready to find the right machine?" 
              subtitle="Tell us about your production needs. Our team will help you select the ideal folding solution and provide a detailed quote."
            />

            <div className="mt-8 space-y-6 text-sm">
              <div>
                <div className="font-medium text-slate-900 mb-1">Call Us</div>
                <a href="tel:+18005551234" className="text-slate-600 hover:text-slate-900">+1 (800) 555-1234</a>
              </div>
              <div>
                <div className="font-medium text-slate-900 mb-1">Email</div>
                <a href="mailto:info@artitectmachinery.com" className="text-slate-600 hover:text-slate-900">info@artitectmachinery.com</a>
              </div>
              <div>
                <div className="font-medium text-slate-900 mb-1">Headquarters</div>
                <div className="text-slate-600">
                  1240 Industrial Parkway<br />
                  Cleveland, OH 44114<br />
                  United States
                </div>
              </div>
              <div className="pt-4 border-t text-xs text-slate-500">
                Sales & support available Monday–Friday, 8am–6pm EST
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;
