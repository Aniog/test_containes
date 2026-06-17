import React, { useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from './strk-img-config.json';
import { Award, Users, Wrench, Shield, Clock, Globe } from 'lucide-react';

const products = [
  {
    id: 'double-folding-machine',
    title: 'Double Folding Machine',
    subtitle: 'High-Volume Production',
    description: 'Our flagship double folding machine delivers unmatched speed and precision for continuous production environments. Engineered for facilities requiring maximum throughput without compromising accuracy.',
    capacity: 'Up to 12mm',
    specs: [
      { label: 'Max Thickness', value: '12 mm' },
      { label: 'Working Length', value: '3200 mm' },
      { label: 'Folding Angle', value: '0° - 180°' },
      { label: 'Cycle Time', value: '3.5 sec' },
    ],
    imgId: 'product-double-folding-machine-8f2a9c',
  },
  {
    id: 'double-folder',
    title: 'Double Folder',
    subtitle: 'Versatile & Efficient',
    description: 'The versatile double folder combines two folding operations in a single pass. Ideal for fabricators seeking to reduce handling time while maintaining exceptional edge quality on complex profiles.',
    capacity: 'Up to 8mm',
    specs: [
      { label: 'Max Thickness', value: '8 mm' },
      { label: 'Working Length', value: '2500 mm' },
      { label: 'Folding Angle', value: '0° - 150°' },
      { label: 'Cycle Time', value: '4 sec' },
    ],
    imgId: 'product-double-folder-7b3d2e',
  },
  {
    id: 'sheet-metal-folder',
    title: 'Sheet Metal Folder',
    subtitle: 'Precision Craftsmanship',
    description: 'Purpose-built for precision sheet metal work, this folder excels at creating clean, consistent bends across a wide range of materials. The go-to choice for architectural and decorative metalwork.',
    capacity: 'Up to 4mm',
    specs: [
      { label: 'Max Thickness', value: '4 mm' },
      { label: 'Working Length', value: '2000 mm' },
      { label: 'Folding Angle', value: '0° - 135°' },
      { label: 'Repeatability', value: '±0.1 mm' },
    ],
    imgId: 'product-sheet-metal-folder-4c9f1a',
  },
  {
    id: 'sheet-metal-folding-machine',
    title: 'Sheet Metal Folding Machine',
    subtitle: 'Heavy-Duty Performance',
    description: 'Built for demanding industrial applications, this heavy-duty folding machine handles thick gauge materials with ease. Features reinforced construction and advanced hydraulic systems for reliable operation.',
    capacity: 'Up to 16mm',
    specs: [
      { label: 'Max Thickness', value: '16 mm' },
      { label: 'Working Length', value: '4000 mm' },
      { label: 'Folding Angle', value: '0° - 180°' },
      { label: 'Motor Power', value: '22 kW' },
    ],
    imgId: 'product-sheet-metal-folding-machine-2e8b6d',
  },
  {
    id: 'metal-folder',
    title: 'Metal Folder',
    subtitle: 'Compact & Reliable',
    description: 'A compact yet powerful solution for workshops and smaller production facilities. Delivers professional-grade folding capability in a space-efficient design without sacrificing build quality.',
    capacity: 'Up to 6mm',
    specs: [
      { label: 'Max Thickness', value: '6 mm' },
      { label: 'Working Length', value: '1500 mm' },
      { label: 'Folding Angle', value: '0° - 135°' },
      { label: 'Weight', value: '1850 kg' },
    ],
    imgId: 'product-metal-folder-9a4c7f',
  },
  {
    id: 'metal-folder-machine',
    title: 'Metal Folder Machine',
    subtitle: 'Semi-Automatic Operation',
    description: 'Our semi-automatic metal folder machine bridges the gap between manual and fully automated systems. Offers programmable controls and repeatable accuracy for growing fabrication businesses.',
    capacity: 'Up to 10mm',
    specs: [
      { label: 'Max Thickness', value: '10 mm' },
      { label: 'Working Length', value: '3000 mm' },
      { label: 'Folding Angle', value: '0° - 160°' },
      { label: 'Control', value: 'CNC Touch' },
    ],
    imgId: 'product-metal-folder-machine-5d2e1b',
  },
  {
    id: 'metal-folding-machine',
    title: 'Metal Folding Machine',
    subtitle: 'Industrial Grade',
    description: 'Engineered for continuous operation in high-demand environments. This industrial folding machine features robust construction, intuitive controls, and minimal maintenance requirements.',
    capacity: 'Up to 14mm',
    specs: [
      { label: 'Max Thickness', value: '14 mm' },
      { label: 'Working Length', value: '3500 mm' },
      { label: 'Folding Angle', value: '0° - 180°' },
      { label: 'Duty Cycle', value: '24/7' },
    ],
    imgId: 'product-metal-folding-machine-1f6a3c',
  },
];

const features = [
  {
    icon: Award,
    title: 'Precision Engineering',
    description: 'Every machine is calibrated to ±0.1mm accuracy. Our folding systems deliver consistent, repeatable results across thousands of cycles.',
  },
  {
    icon: Shield,
    title: 'Built to Last',
    description: 'Heavy-gauge steel frames, premium hydraulic components, and rigorous quality testing ensure decades of reliable service.',
  },
  {
    icon: Wrench,
    title: 'Easy Maintenance',
    description: 'Modular design and accessible components mean faster service and minimal downtime. Most maintenance can be performed in-house.',
  },
  {
    icon: Clock,
    title: 'Fast Turnaround',
    description: 'Standard models ship within 4-6 weeks. Custom configurations and specialized tooling available with expedited lead times.',
  },
  {
    icon: Users,
    title: 'Expert Support',
    description: 'Our technical team provides installation, training, and ongoing support. On-site service available worldwide.',
  },
  {
    icon: Globe,
    title: 'Global Presence',
    description: 'Machines installed in over 45 countries. Local representatives and spare parts depots ensure responsive service wherever you are.',
  },
];

const stats = [
  { number: '37', label: 'Years in Business' },
  { number: '2,400+', label: 'Machines Installed' },
  { number: '45', label: 'Countries Served' },
  { number: '99.2%', label: 'Customer Retention' },
];

function App() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  const handleRequestQuote = (productTitle) => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementPosition = contactSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition - bodyRect - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
    // Pre-select the product in the form after scroll
    setTimeout(() => {
      const select = document.getElementById('product');
      if (select) {
        select.value = productTitle;
        select.dispatchEvent(new Event('change', { bubbles: true }));
      }
    }, 600);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900" ref={containerRef}>
      <Navbar />

      {/* Hero Section */}
      <section className="pt-20 relative overflow-hidden bg-slate-950 text-white">
        <div className="max-w-5xl mx-auto px-6 pt-20 pb-24 md:pt-28 md:pb-32 text-center">
          <div className="inline-block px-4 py-1 rounded-full bg-white/10 text-xs tracking-[2px] mb-6">
            EST. 1987
          </div>
          <h1 className="text-5xl md:text-7xl font-semibold tracking-[-2px] leading-[1.05] mb-6">
            Precision Metal<br />Folding Equipment
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 mb-10">
            Engineered for manufacturers who refuse to compromise on quality.
            Industrial-grade folding machines trusted worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => {
                const el = document.getElementById('products');
                if (el) {
                  const offset = 80;
                  const bodyRect = document.body.getBoundingClientRect().top;
                  const elementPosition = el.getBoundingClientRect().top;
                  window.scrollTo({ top: elementPosition - bodyRect - offset, behavior: 'smooth' });
                }
              }}
              className="px-8 py-4 bg-white text-slate-900 font-medium rounded-lg hover:bg-slate-100 transition-colors"
            >
              Explore Our Machines
            </button>
            <button
              onClick={() => {
                const el = document.getElementById('contact');
                if (el) {
                  const offset = 80;
                  const bodyRect = document.body.getBoundingClientRect().top;
                  const elementPosition = el.getBoundingClientRect().top;
                  window.scrollTo({ top: elementPosition - bodyRect - offset, behavior: 'smooth' });
                }
              }}
              className="px-8 py-4 border border-white/30 text-white font-medium rounded-lg hover:bg-white/5 transition-colors"
            >
              Request a Quote
            </button>
          </div>
        </div>

        {/* Trust Bar */}
        <div className="border-t border-white/10 py-6">
          <div className="max-w-5xl mx-auto px-6 flex flex-wrap justify-center items-center gap-x-12 gap-y-4 text-sm text-slate-400">
            <div>ISO 9001:2015 Certified</div>
            <div>CE & UL Compliant</div>
            <div>5-Year Structural Warranty</div>
            <div>24/7 Technical Support</div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-4xl font-semibold tracking-tight text-slate-900 mb-1">{stat.number}</div>
                <div className="text-sm text-slate-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-5xl mx-auto px-6 py-20 md:py-24">
        <div className="grid md:grid-cols-12 gap-x-12 gap-y-8 items-center">
          <div className="md:col-span-5">
            <div className="uppercase tracking-[3px] text-xs text-slate-500 mb-3">OUR HERITAGE</div>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-[-1.5px] leading-tight">
              Craftsmanship.<br />Engineering.<br />Trust.
            </h2>
          </div>
          <div className="md:col-span-7 text-lg text-slate-600 leading-relaxed">
            <p className="mb-6">
              For nearly four decades, Artitect Machinery has designed and manufactured the most reliable metal folding equipment in the industry. What began as a small workshop in Ohio has grown into a global operation serving fabricators, manufacturers, and contractors across six continents.
            </p>
            <p>
              Every machine we build reflects our commitment to precision, durability, and operator safety. We don't just sell equipment — we partner with our customers to solve real production challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="bg-slate-50 border-y border-slate-200 py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="uppercase tracking-[3px] text-xs text-slate-500 mb-3">OUR EQUIPMENT</div>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-[-1.5px] mb-4">Folding Machines for Every Application</h2>
            <p className="max-w-2xl mx-auto text-lg text-slate-600">
              From compact workshop models to heavy industrial systems, we offer a complete range of precision folding solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onRequestQuote={handleRequestQuote}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-sm text-slate-500 mb-4">Need a custom configuration or specialized tooling?</p>
            <button
              onClick={() => {
                const el = document.getElementById('contact');
                if (el) {
                  const offset = 80;
                  const bodyRect = document.body.getBoundingClientRect().top;
                  const elementPosition = el.getBoundingClientRect().top;
                  window.scrollTo({ top: elementPosition - bodyRect - offset, behavior: 'smooth' });
                }
              }}
              className="text-sm font-medium text-slate-900 underline underline-offset-4 hover:no-underline"
            >
              Speak with our engineering team →
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="max-w-6xl mx-auto px-6 py-20 md:py-24">
        <div className="text-center mb-14">
          <div className="uppercase tracking-[3px] text-xs text-slate-500 mb-3">WHY ARTITECT</div>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-[-1.5px] mb-4">Built for Professionals</h2>
          <p className="max-w-xl mx-auto text-lg text-slate-600">
            Every detail is considered. Every component is tested. Here's what sets our machines apart.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="flex gap-5">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-slate-700" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 tracking-[-0.3px]">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-sm">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Process / Trust Section */}
      <section className="bg-slate-900 text-white py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-10 items-center">
            <div>
              <div className="uppercase tracking-[3px] text-xs text-slate-400 mb-3">OUR PROCESS</div>
              <h2 className="text-4xl font-semibold tracking-[-1.2px] leading-tight mb-6">
                From consultation to installation in weeks, not months.
              </h2>
            </div>
            <div className="space-y-6 text-slate-300">
              <div className="flex gap-4">
                <div className="font-mono text-sm w-8 text-slate-500">01</div>
                <div><span className="text-white font-medium">Discovery Call.</span> We learn about your materials, volumes, and production goals.</div>
              </div>
              <div className="flex gap-4">
                <div className="font-mono text-sm w-8 text-slate-500">02</div>
                <div><span className="text-white font-medium">Machine Selection.</span> We recommend the right model and any custom tooling required.</div>
              </div>
              <div className="flex gap-4">
                <div className="font-mono text-sm w-8 text-slate-500">03</div>
                <div><span className="text-white font-medium">Factory Acceptance.</span> You approve the machine before it ships. Full documentation included.</div>
              </div>
              <div className="flex gap-4">
                <div className="font-mono text-sm w-8 text-slate-500">04</div>
                <div><span className="text-white font-medium">Installation & Training.</span> Our technicians handle setup and train your team on-site.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-4xl mx-auto px-6 py-20 md:py-24">
        <div className="text-center mb-12">
          <div className="uppercase tracking-[3px] text-xs text-slate-500 mb-3">GET IN TOUCH</div>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-[-1.5px] mb-4">Ready to discuss your project?</h2>
          <p className="text-lg text-slate-600 max-w-md mx-auto">
            Tell us about your requirements and we'll provide a detailed quote within one business day.
          </p>
        </div>

        <ContactForm />
      </section>

      <Footer />
    </div>
  );
}

export default App;
