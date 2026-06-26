import React from 'react';
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

const products = [
  {
    id: 1,
    title: 'Double Folding Machine',
    description: 'Our flagship double folding machine delivers unmatched precision for high-volume production. Engineered for continuous operation with minimal maintenance.',
    specs: ['Up to 4mm mild steel capacity', 'Working length: 2500-4000mm', 'Dual motor drive system', 'CNC programmable controls'],
  },
  {
    id: 2,
    title: 'Double Folder',
    description: 'Compact yet powerful double folder designed for workshops requiring versatility. Features synchronized folding beams for consistent results.',
    specs: ['Up to 3mm steel capacity', 'Working length: 2000-3200mm', 'Manual & motorized options', 'Quick-change tooling'],
  },
  {
    id: 3,
    title: 'Sheet Metal Folder',
    description: 'Precision sheet metal folder built for accuracy and repeatability. Ideal for architectural panels, enclosures, and custom fabrication.',
    specs: ['Up to 2.5mm aluminum capacity', 'Working length: 1500-3000mm', 'Segmented upper beam', 'Angle gauge included'],
  },
  {
    id: 4,
    title: 'Sheet Metal Folding Machine',
    description: 'Heavy-duty sheet metal folding machine for demanding industrial applications. Robust construction ensures years of reliable service.',
    specs: ['Up to 6mm mild steel capacity', 'Working length: 3000-6000mm', 'Hydraulic clamping system', 'Digital angle readout'],
  },
  {
    id: 5,
    title: 'Metal Folder',
    description: 'Versatile metal folder suitable for a wide range of materials and thicknesses. Perfect balance of capability and affordability.',
    specs: ['Up to 2mm stainless capacity', 'Working length: 1250-2500mm', 'Foot pedal operation', 'Adjustable back gauge'],
  },
  {
    id: 6,
    title: 'Metal Folder Machine',
    description: 'Professional-grade metal folder machine featuring advanced safety systems and ergonomic design. Built for daily production use.',
    specs: ['Up to 3.5mm capacity', 'Working length: 2000-4000mm', 'Safety light curtains', 'Touchscreen interface'],
  },
  {
    id: 7,
    title: 'Metal Folding Machine',
    description: 'Industrial metal folding machine engineered for precision and durability. Delivers clean, accurate bends across a variety of metals.',
    specs: ['Up to 5mm capacity', 'Working length: 2500-5000mm', 'Servo-driven positioning', 'Remote diagnostics ready'],
  },
];

const features = [
  {
    title: 'Precision Engineering',
    description: 'Every machine is calibrated to tolerances measured in hundredths of a millimeter, ensuring consistent, high-quality bends every time.',
  },
  {
    title: 'Built to Last',
    description: 'Heavy-gauge steel frames, premium components, and rigorous quality testing deliver machines that perform reliably for decades.',
  },
  {
    title: 'User-Centric Design',
    description: 'Intuitive controls, clear interfaces, and ergonomic layouts mean operators can be productive from day one with minimal training.',
  },
  {
    title: 'Global Support',
    description: 'Our technical team provides installation, training, and ongoing service wherever you are. Parts and expertise are always within reach.',
  },
];

function App() {
  // ARTITECT MACHINERY - Elegant industrial website
  const scrollToContact = (productTitle) => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementPosition = contactSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition - bodyRect - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      // Pre-fill the product field after scroll
      setTimeout(() => {
        const productSelect = document.querySelector('select[name="product"]');
        if (productSelect) {
          productSelect.value = productTitle;
        }
      }, 600);
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#1a1f2e] font-sans">
      <Navbar />

      {/* Hero Section */}
      <section id="hero" className="pt-20 bg-[#1a1f2e] text-white">
        <div className="max-w-5xl mx-auto px-6 pt-20 pb-24 md:pt-28 md:pb-32 text-center">
          <div className="inline-block px-4 py-1 bg-white/10 rounded-full text-xs tracking-[3px] mb-6">
            EST. 1987
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tighter leading-none mb-6">
            Precision Folding.<br />Engineered for Excellence.
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/70 mb-10">
            For nearly four decades, ARTITECT MACHINERY has delivered industrial-grade sheet metal folding solutions trusted by manufacturers worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#products"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById('products');
                if (el) {
                  const offset = 80;
                  const bodyRect = document.body.getBoundingClientRect().top;
                  const elementPosition = el.getBoundingClientRect().top;
                  window.scrollTo({ top: elementPosition - bodyRect - offset, behavior: 'smooth' });
                }
              }}
              className="inline-block px-8 py-4 bg-white text-[#1a1f2e] font-medium rounded-lg hover:bg-gray-100 transition-colors"
            >
              Explore Our Machines
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById('contact');
                if (el) {
                  const offset = 80;
                  const bodyRect = document.body.getBoundingClientRect().top;
                  const elementPosition = el.getBoundingClientRect().top;
                  window.scrollTo({ top: elementPosition - bodyRect - offset, behavior: 'smooth' });
                }
              }}
              className="inline-block px-8 py-4 border border-white/40 text-white font-medium rounded-lg hover:bg-white/5 transition-colors"
            >
              Request a Quote
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-5xl mx-auto px-6 py-20 md:py-24">
        <div className="grid md:grid-cols-12 gap-x-12 gap-y-8 items-center">
          <div className="md:col-span-5">
            <div className="text-xs tracking-[3px] text-[#c5a46e] font-medium mb-3">OUR HERITAGE</div>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter leading-none">
              Craftsmanship.<br />Reliability.<br />Innovation.
            </h2>
          </div>
          <div className="md:col-span-7 text-lg text-gray-600 leading-relaxed">
            <p className="mb-5">
              Founded in 1987, ARTITECT MACHINERY began with a simple mission: to build folding machines that craftsmen could rely on for a lifetime.
            </p>
            <p>
              Today, our machines are found in fabrication shops, aerospace facilities, architectural metalworks, and manufacturing plants across six continents. Every machine we produce carries forward our commitment to precision, durability, and thoughtful design.
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="bg-[#f8f9fb] py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="text-xs tracking-[3px] text-[#c5a46e] font-medium mb-3">OUR RANGE</div>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter mb-4">
              Folding Machines for Every Application
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              From compact workshop folders to heavy-duty production systems, each ARTITECT machine is built to exacting standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                title={product.title}
                description={product.description}
                specs={product.specs}
                onInquiry={() => scrollToContact(product.title)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features / Why ARTITECT */}
      <section id="features" className="max-w-6xl mx-auto px-6 py-20 md:py-24">
        <div className="text-center mb-14">
          <div className="text-xs tracking-[3px] text-[#c5a46e] font-medium mb-3">THE ARTITECT DIFFERENCE</div>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter">
            Why Leading Manufacturers Choose Us
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="border-l-2 border-[#c5a46e] pl-6">
              <h3 className="text-xl font-semibold tracking-tight mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Trust / Stats Bar */}
      <section className="bg-[#1a1f2e] text-white py-12">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 text-center">
            <div>
              <div className="text-4xl font-semibold tracking-tighter mb-1">37</div>
              <div className="text-sm text-white/60 tracking-widest">YEARS IN BUSINESS</div>
            </div>
            <div>
              <div className="text-4xl font-semibold tracking-tighter mb-1">2,400+</div>
              <div className="text-sm text-white/60 tracking-widest">MACHINES INSTALLED</div>
            </div>
            <div>
              <div className="text-4xl font-semibold tracking-tighter mb-1">48</div>
              <div className="text-sm text-white/60 tracking-widest">COUNTRIES SERVED</div>
            </div>
            <div>
              <div className="text-4xl font-semibold tracking-tighter mb-1">99.2%</div>
              <div className="text-sm text-white/60 tracking-widest">CUSTOMER RETENTION</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-4xl mx-auto px-6 py-20 md:py-24">
        <div className="text-center mb-12">
          <div className="text-xs tracking-[3px] text-[#c5a46e] font-medium mb-3">LET'S TALK</div>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter mb-4">
            Ready to Find the Right Machine?
          </h2>
          <p className="text-gray-600 max-w-lg mx-auto">
            Tell us about your application and our specialists will recommend the best solution for your needs.
          </p>
        </div>

        <ContactForm />
      </section>

      <Footer />
    </div>
  );
}

export default App;
