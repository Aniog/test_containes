import { useEffect, useRef } from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';
// We'll use a mocked ImageHelper for the standalone preview if the SDK isn't available
// or just rely on the fallback images provided by the SDK logic in prod

const products = [
  {
    id: 'double-folder-pro',
    name: 'Pro Series Double Folder',
    description: 'High-speed, bi-directional folding for complex profiles with minimal material handling.',
  },
  {
    id: 'sheet-master-5000',
    name: 'SheetMaster 5000',
    description: 'Heavy-duty sheet metal folding machine designed for architectural panels and roofing.',
  },
  {
    id: 'compact-metal-folder',
    name: 'Compact Metal Folder',
    description: 'Space-saving design without compromising on bending power. Perfect for custom shops.',
  }
];

const features = [
  {
    icon: <Zap className="w-6 h-6 text-amber-600" />,
    title: 'High-Speed Precision',
    description: 'Advanced servo-driven systems ensure rapid, millimeter-perfect bends on every cycle.'
  },
  {
    icon: <CheckCircle2 className="w-6 h-6 text-amber-600" />,
    title: 'Intuitive Controls',
    description: 'Elegant touchscreen interfaces simplify complex folding sequences for any operator.'
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-amber-600" />,
    title: 'Industrial Durability',
    description: 'Built with hardened steel components to withstand decades of continuous manufacturing.'
  }
];

const Home = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Attempting to load SDK dynamically to support the stock image system
    // if it exists in the runtime environment.
    const loadImages = async () => {
      try {
        const { ImageHelper } = await import('@strikingly/sdk');
        // Providing empty config object as per generic setup, it relies on global config
        ImageHelper.loadImages({}, containerRef.current);
      } catch (e) {
        console.log('SDK ImageHelper not available, using fallbacks.');
      }
    };
    loadImages();
  }, []);

  return (
    <div ref={containerRef} className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center bg-slate-900 border-b-4 border-amber-600">
        <div 
          className="absolute inset-0 opacity-40 mix-blend-overlay bg-cover bg-center"
          data-strk-bg-id="hero-bg-artitect"
          data-strk-bg="[hero-title] [hero-subtitle] industrial factory machinery sheet metal"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        />
        <div className="container relative z-10 mx-auto px-6 py-20">
          <div className="max-w-3xl">
            <h1 id="hero-title" className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
              Precision Engineering. <br />
              <span className="text-amber-500">Elegant Operation.</span>
            </h1>
            <p id="hero-subtitle" className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl">
              Discover the next generation of double folding machines. Artitect Machinery combines industrial brute strength with refined, user-friendly control systems.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#products" className="inline-flex items-center gap-2 bg-amber-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-amber-700 transition-colors">
                Explore Equipment <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 border border-slate-500 bg-slate-800/50 text-white px-8 py-4 rounded-lg font-medium hover:bg-slate-800 transition-colors">
                Contact Sales
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 id="features-title" className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">The Artitect Advantage</h2>
            <p className="text-slate-600 text-lg">Why leading manufacturers choose our sheet metal folding machines for their most critical operations.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {features.map((feature, idx) => (
              <div key={idx} className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 id="products-title" className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">Industrial Folding Solutions</h2>
              <p className="text-slate-600 text-lg">From architectural trim to heavy industrial enclosures, our double folders handle it all with elegance.</p>
            </div>
            <a href="#contact" className="text-amber-600 font-medium hover:text-amber-700 inline-flex items-center gap-2">
              Request Full Catalog <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product) => (
              <article key={product.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 group hover:shadow-xl transition-all duration-300">
                <div className="aspect-[4/3] bg-slate-100 relative overflow-hidden">
                  <img
                    alt={product.name}
                    data-strk-img-id={`prod-img-${product.id}`}
                    data-strk-img={`[prod-title-${product.id}] [prod-desc-${product.id}] sheet metal folding machine industrial`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1' fill='%23f1f5f9'/%3E"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <h3 id={`prod-title-${product.id}`} className="text-xl font-bold text-slate-900 mb-3 tracking-tight">
                    {product.name}
                  </h3>
                  <p id={`prod-desc-${product.id}`} className="text-slate-600 leading-relaxed mb-6 h-20">
                    {product.description}
                  </p>
                  <button className="w-full py-3 px-4 bg-slate-900 text-white rounded-lg font-medium hover:bg-slate-800 transition-colors">
                    View Specifications
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 bg-slate-900 relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10 bg-cover bg-center"
          data-strk-bg-id="cta-bg-artitect"
          data-strk-bg="sheet metal factory engineering blueprint"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        ></div>
        <div className="container relative z-10 mx-auto px-6 text-center max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">Ready to upgrade your production?</h2>
          <p className="text-slate-300 text-lg mb-10 leading-relaxed">
            Contact our engineering team to discuss how Artitect Machinery can integrate seamlessly into your manufacturing workflow.
          </p>
          <form className="max-w-md mx-auto space-y-4 text-left">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="w-full px-6 py-4 rounded-lg bg-white/10 border border-slate-700 text-white placeholder:text-slate-400 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all"
            />
            <button className="w-full py-4 px-6 bg-amber-600 text-white rounded-lg font-medium hover:bg-amber-700 transition-colors disabled:opacity-50">
              Request Consultation
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;