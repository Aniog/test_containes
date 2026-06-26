import { useEffect, useRef } from 'react';
import { ArrowRight, Cog, Layers, Zap, Shield } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'ARTITECT DF-2000',
    category: 'Double Folding Machine',
    description: 'Heavy-duty double folding machine with precision CNC control. Ideal for complex sheet metal fabrication with multiple bend sequences.',
    features: ['CNC Control', '4-meter capacity', 'Auto-backgauge'],
    icon: Layers,
    gradient: 'from-blue-600 to-blue-800',
  },
  {
    id: 2,
    name: 'ARTITECT MF-1500',
    category: 'Metal Folder Machine',
    description: 'Versatile metal folder designed for high-volume production. Features rapid clamping system and digital depth adjustment.',
    features: ['Rapid Clamping', 'Digital Display', '45° bending'],
    icon: Cog,
    gradient: 'from-slate-700 to-slate-900',
  },
  {
    id: 3,
    name: 'ARTITECT SMF-3000',
    category: 'Sheet Metal Folder',
    description: 'Industrial-grade sheet metal folding machine with robust construction. Built for continuous operation in demanding environments.',
    features: ['Continuous Duty', 'Heavy Frame', 'Easy Setup'],
    icon: Zap,
    gradient: 'from-accent to-accent-dark',
  },
  {
    id: 4,
    name: 'ARTITECT PRO-X',
    category: 'Metal Folding Machine',
    description: 'Professional-grade metal folding machine with advanced automation. Features touchscreen interface and programmable bend sequences.',
    features: ['Touchscreen', '100 Programs', 'Auto Crowning'],
    icon: Shield,
    gradient: 'from-emerald-600 to-emerald-800',
  },
  {
    id: 5,
    name: 'ARTITECT DFM-2500',
    category: 'Double Folder',
    description: 'High-performance double folder with exceptional precision. Perfect for architectural metalwork and decorative fabrication.',
    features: ['±0.1mm Accuracy', 'Multi-axis', 'Low Maintenance'],
    icon: Layers,
    gradient: 'from-purple-600 to-purple-800',
  },
  {
    id: 6,
    name: 'ARTITECT ECO-FOLD',
    category: 'Sheet Metal Folding Machine',
    description: 'Energy-efficient folding machine with smart power management. Designed for shops prioritizing sustainability without compromising output.',
    features: ['Eco Mode', 'Energy Saving', 'Smart Control'],
    icon: Zap,
    gradient: 'from-teal-600 to-teal-800',
  },
];

const Products = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            entry.target.style.opacity = '1';
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="products" ref={sectionRef} className="py-24 bg-bg-light">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm tracking-widest uppercase">
            Our Products
          </span>
          <h2 className="text-primary mt-4 mb-6">
            Precision-Engineered <br className="hidden md:block" /> Metal Working Solutions
          </h2>
          <p className="text-text-secondary text-lg">
            Discover our comprehensive range of sheet metal folding machines, 
            designed to meet the demands of modern fabrication workshops.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => {
            const IconComponent = product.icon;
            return (
              <div
                key={product.id}
                ref={(el) => (cardsRef.current[index] = el)}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 opacity-0"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Product Image Area */}
                <div className={`h-48 bg-gradient-to-br ${product.gradient} relative overflow-hidden`}>
                  {/* Decorative geometric pattern */}
                  <div className="absolute inset-0 opacity-20">
                    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                      <path d="M0 50 L50 0 L100 50 L50 100 Z" fill="white" />
                    </svg>
                  </div>
                  
                  {/* Icon */}
                  <div className="absolute top-6 left-6 bg-white/20 backdrop-blur-sm rounded-xl p-3">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>

                  {/* Category badge */}
                  <div className="absolute top-6 right-6 bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {product.category}
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-text-secondary text-sm mb-4 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.features.map((feature) => (
                      <span
                        key={feature}
                        className="bg-bg-light text-text-secondary text-xs font-medium px-3 py-1 rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Learn More Link */}
                  <a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="inline-flex items-center gap-2 text-accent font-semibold text-sm group-hover:gap-3 transition-all"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Products;
