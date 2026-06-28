import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-brand-dark text-white py-32 sm:py-48 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1565439390234-fc5692ebba46?auto=format&fit=crop&q=80&w=2000')"}}></div>
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark to-transparent"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
              Precision Engineering for <span className="text-brand-secondary">Modern Manufacturing</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-10 max-w-2xl">
              Industry-leading double folding machines and sheet metal folders designed to elevate your production capabilities with unmatched accuracy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/products" className="inline-flex justify-center items-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-white bg-brand-secondary hover:bg-orange-600 transition-colors shadow-lg">
                Explore Products
              </Link>
              <Link to="/contact" className="inline-flex justify-center items-center px-8 py-4 border-2 border-white text-lg font-medium rounded-md text-white hover:bg-white hover:text-brand-dark transition-colors">
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-brand-dark mb-4">Why Choose ARTITECT MACHINERY?</h2>
            <p className="text-lg text-brand-gray max-w-3xl mx-auto">We combine decades of engineering expertise with innovative technology to deliver sheet metal folding solutions that stand the test of time.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-brand-light p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-brand-primary text-white rounded-lg flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-3">Superior Precision</h3>
              <p className="text-brand-gray">Our double folding machines ensure perfect bends every time, minimizing waste and maximizing product quality.</p>
            </div>
            
            <div className="bg-brand-light p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
               <div className="w-14 h-14 bg-brand-secondary text-white rounded-lg flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-3">High Efficiency</h3>
              <p className="text-brand-gray">Automated processes and intuitive controls drastically reduce setup times and increase overall manufacturing throughput.</p>
            </div>

            <div className="bg-brand-light p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
               <div className="w-14 h-14 bg-brand-primary text-white rounded-lg flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-3">Robust Durability</h3>
              <p className="text-brand-gray">Built with industrial-grade materials, our metal folding machines are engineered to withstand heavy, continuous use.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-primary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">Ready to Upgrade Your Production Line?</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">Get in touch with our experts to find the perfect sheet metal folding solution for your specific requirements.</p>
          <Link to="/contact" className="inline-flex justify-center items-center px-8 py-4 border border-transparent text-lg font-bold rounded-md text-brand-primary bg-white hover:bg-gray-50 transition-colors shadow-lg">
            Contact Sales Team
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
