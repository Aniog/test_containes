import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HomeHero from '@/components/home/HomeHero';
import ProductGrid from '@/components/home/ProductGrid';
import ContactForm from '@/components/home/ContactForm';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex-grow">
        <HomeHero />
        
        {/* Value Prop Section */}
        <section id="about" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-sm font-bold tracking-widest text-amber-600 uppercase mb-3">Architectural Precision</h2>
              <h3 className="text-3xl md:text-5xl font-bold tracking-tighter text-slate-950 mb-8 leading-tight">
                Designed for the <br/><span className="text-amber-600">Discerning</span> Engineer.
              </h3>
              <p className="text-slate-500 text-lg leading-relaxed mb-8">
                At ARTITECT MACHINERY, we believe that machinery is more than just gears and metal. It's the architecture of your output. Our folding machines are built to deliver uncompromising accuracy, ensuring that every piece of sheet metal you produce meets the highest artistic and technical standards.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-3xl font-bold text-slate-950 mb-1 tracking-tighter">0.01mm</div>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Folding Tolerance</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-slate-950 mb-1 tracking-tighter">150+</div>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Global Patents</p>
                </div>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[500px]">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                data-strk-bg-id="about-bg-8821c"
                data-strk-bg="sheet metal folding machine precision engineering detail"
                data-strk-bg-ratio="4x3"
                data-strk-bg-width="800"
              />
            </div>
          </div>
        </section>

        <ProductGrid />
        
        {/* Solutions Section */}
        <section className="py-24 bg-slate-950 text-white overflow-hidden relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <h3 className="text-3xl md:text-5xl font-bold tracking-tighter mb-8 leading-tight">
              Ready to Upgrade your <br/><span className="text-amber-600">Production Architecture?</span>
            </h3>
            <p className="text-slate-400 max-w-2xl mx-auto mb-12 text-lg leading-relaxed">
              Whether you're folding standard profiles or complex geometric shapes, ARTITECT has the solution tailored to your requirements.
            </p>
            <div className="flex justify-center gap-6">
              <a href="#contact" className="bg-amber-600 text-white px-10 py-5 rounded-md font-bold hover:bg-amber-700 transition-all shadow-lg">
                Get a Custom Quote
              </a>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-1/3 h-full bg-amber-600/5 -skew-x-12 transform translate-x-1/2" />
        </section>

        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
