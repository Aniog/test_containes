import React from 'react';
import { Menu, X, ArrowRight, Award, Users, Clock } from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const products = [
    {
      name: "Double Folding Machine",
      description: "Precision-engineered for high-volume production with dual folding capabilities.",
      specs: "Max thickness: 3mm | Working length: 2500mm"
    },
    {
      name: "Double Folder",
      description: "Compact design with exceptional accuracy for medium-scale operations.",
      specs: "Max thickness: 2mm | Working length: 2000mm"
    },
    {
      name: "Sheet Metal Folder",
      description: "Versatile folding solution for diverse sheet metal applications.",
      specs: "Max thickness: 4mm | Working length: 3000mm"
    },
    {
      name: "Sheet Metal Folding Machine",
      description: "Advanced CNC controls for complex folding patterns and repeatability.",
      specs: "Max thickness: 5mm | Working length: 4000mm"
    },
    {
      name: "Metal Folder",
      description: "Robust construction meets elegant design for professional workshops.",
      specs: "Max thickness: 2.5mm | Working length: 2200mm"
    },
    {
      name: "Metal Folder Machine",
      description: "Heavy-duty performance with intuitive operation for industrial use.",
      specs: "Max thickness: 6mm | Working length: 5000mm"
    },
    {
      name: "Metal Folding Machine",
      description: "State-of-the-art technology delivering superior fold quality every time.",
      specs: "Max thickness: 3.5mm | Working length: 3200mm"
    }
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
          <div className="font-semibold text-2xl tracking-tight">ARTITECT MACHINERY</div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10 text-sm font-medium">
            <button onClick={() => scrollToSection('products')} className="hover:text-gray-600 transition-colors">Products</button>
            <button onClick={() => scrollToSection('about')} className="hover:text-gray-600 transition-colors">About</button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-gray-600 transition-colors">Contact</button>
          </div>

          <button 
            onClick={() => scrollToSection('contact')}
            className="hidden md:block px-6 py-2.5 bg-gray-900 text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-colors"
          >
            Get Quote
          </button>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white px-6 py-6 flex flex-col gap-4 text-sm font-medium">
            <button onClick={() => scrollToSection('products')} className="text-left py-2">Products</button>
            <button onClick={() => scrollToSection('about')} className="text-left py-2">About</button>
            <button onClick={() => scrollToSection('contact')} className="text-left py-2">Contact</button>
            <button onClick={() => scrollToSection('contact')} className="mt-2 px-6 py-3 bg-gray-900 text-white rounded-full">Get Quote</button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-20 min-h-[90vh] flex items-center bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-5xl mx-auto px-6 py-20 text-center">
          <div className="inline-block px-4 py-1.5 bg-gray-100 rounded-full text-sm font-medium mb-6">
            Precision Engineering Since 1985
          </div>
          <h1 className="text-6xl md:text-7xl font-semibold tracking-tighter mb-6 leading-none">
            Excellence in<br />Metal Folding
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            Premium sheet metal folding machinery crafted with precision, 
            designed for professionals who demand the best.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => scrollToSection('products')}
              className="px-8 py-4 bg-gray-900 text-white rounded-full font-medium flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors"
            >
              Explore Products <ArrowRight size={18} />
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 border border-gray-300 rounded-full font-medium hover:bg-gray-50 transition-colors"
            >
              Request Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="border-y border-gray-200 py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-wrap justify-center items-center gap-x-16 gap-y-6 text-sm text-gray-500">
          <div className="flex items-center gap-2"><Award size={18} /> ISO 9001 Certified</div>
          <div className="flex items-center gap-2"><Users size={18} /> 2,500+ Clients Worldwide</div>
          <div className="flex items-center gap-2"><Clock size={18} /> 40 Years of Excellence</div>
        </div>
      </div>

      {/* Products Section */}
      <section id="products" className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <div className="text-sm font-medium text-gray-500 tracking-widest mb-3">OUR RANGE</div>
          <h2 className="text-5xl font-semibold tracking-tight">Precision Machinery</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-xl mx-auto">
            Each machine is engineered to deliver unmatched accuracy, durability, and performance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div 
              key={index} 
              className="group p-8 border border-gray-200 rounded-3xl hover:border-gray-900 transition-all duration-300 flex flex-col"
            >
              <div className="flex-1">
                <h3 className="text-2xl font-semibold tracking-tight mb-4 group-hover:text-gray-700 transition-colors">
                  {product.name}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {product.description}
                </p>
              </div>
              <div className="pt-6 border-t border-gray-100">
                <div className="text-sm text-gray-500 font-mono">{product.specs}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-gray-50 py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-sm font-medium text-gray-500 tracking-widest mb-3">OUR STORY</div>
              <h2 className="text-5xl font-semibold tracking-tight leading-none mb-8">
                Built on<br />precision.<br />Driven by<br />excellence.
              </h2>
            </div>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                For over four decades, ARTITECT MACHINERY has been at the forefront of 
                sheet metal processing technology. Our commitment to innovation and 
                quality has made us a trusted partner for manufacturers worldwide.
              </p>
              <p>
                Every machine we produce embodies our dedication to craftsmanship, 
                incorporating cutting-edge technology with time-tested engineering 
                principles to deliver equipment that exceeds expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center mb-6">
              <Award className="text-gray-700" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Unmatched Quality</h3>
            <p className="text-gray-600">Every component undergoes rigorous testing to ensure decades of reliable service.</p>
          </div>
          <div>
            <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center mb-6">
              <Users className="text-gray-700" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Expert Support</h3>
            <p className="text-gray-600">Our dedicated team provides comprehensive training, maintenance, and technical assistance.</p>
          </div>
          <div>
            <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center mb-6">
              <Clock className="text-gray-700" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Timeless Durability</h3>
            <p className="text-gray-600">Machines built with premium materials to withstand the demands of continuous operation.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-900 text-white py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="text-sm font-medium tracking-widest mb-3 text-gray-400">LET'S CONNECT</div>
          <h2 className="text-5xl font-semibold tracking-tight mb-6">Ready to elevate your production?</h2>
          <p className="text-xl text-gray-400 mb-10 max-w-lg mx-auto">
            Speak with our specialists to find the perfect folding solution for your needs.
          </p>
          <a 
            href="mailto:contact@artitectmachinery.com" 
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 rounded-full font-medium hover:bg-gray-100 transition-colors"
          >
            Contact Our Team <ArrowRight size={18} />
          </a>
          <div className="mt-12 pt-12 border-t border-gray-800 text-sm text-gray-500">
            ARTITECT MACHINERY • Precision Metal Folding Solutions<br />
            Worldwide Headquarters • Est. 1985
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
