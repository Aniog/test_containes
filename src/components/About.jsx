import { useEffect, useRef, useState } from 'react';
import { Target, Eye, Heart } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    { value: 25, suffix: '+', label: 'Years of Excellence' },
    { value: 500, suffix: '+', label: 'Machines Installed' },
    { value: 98, suffix: '%', label: 'Customer Retention' },
    { value: 40, suffix: '+', label: 'Countries Served' },
  ];

  const values = [
    {
      icon: Target,
      title: 'Precision',
      description: 'Every machine embodies our commitment to exacting standards and uncompromising quality.',
    },
    {
      icon: Eye,
      title: 'Innovation',
      description: 'Continuous research and development drive technological advancement in every product.',
    },
    {
      icon: Heart,
      title: 'Reliability',
      description: 'Built to last, our machines are an investment in decades of productive service.',
    },
  ];

  return (
    <section id="about" ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Content */}
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <span className="text-accent font-semibold text-sm tracking-wider uppercase mb-4 block">
              Our Story
            </span>
            <h2
              className="text-4xl md:text-5xl font-bold text-primary mb-6"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Engineering the Future of Metal Fabrication
            </h2>
            <p className="text-text-secondary text-lg mb-6 leading-relaxed">
              Founded with a vision to revolutionize sheet metal processing, ARTITECT MACHINERY 
              has grown from a regional workshop to a global leader in folding machine technology.
            </p>
            <p className="text-text-secondary text-lg mb-8 leading-relaxed">
              Our journey spans over two decades of innovation, during which we have consistently 
              pushed the boundaries of precision engineering. Today, our machines power production 
              facilities across 40+ countries, serving industries from automotive to aerospace, 
              construction to custom fabrication.
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                <span className="text-accent font-bold">AM</span>
              </div>
              <div>
                <div className="font-semibold text-primary">ARTITECT MACHINERY</div>
                <div className="text-text-secondary text-sm">Precision in Every Fold</div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className={`relative transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="aspect-square bg-gradient-to-br from-secondary to-primary rounded-3xl overflow-hidden relative">
              {/* Abstract machine representation */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-3/4 h-3/4">
                  {/* Geometric shapes representing machinery */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-full bg-white/10" />
                  <div className="absolute top-1/4 left-0 w-full h-0.5 bg-white/10" />
                  <div className="absolute top-1/2 left-0 w-full h-1 bg-accent/50" />
                  <div className="absolute top-3/4 left-0 w-full h-0.5 bg-white/10" />
                  
                  {/* Central element */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-4 border-accent rounded-full flex items-center justify-center">
                    <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-2xl">AM</span>
                    </div>
                  </div>

                  {/* Corner accents */}
                  <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-white/30" />
                  <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-white/30" />
                  <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-white/30" />
                  <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-white/30" />
                </div>
              </div>

              {/* Floating stats */}
              <div className="absolute top-6 right-6 bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="text-accent text-2xl font-bold">25+</div>
                <div className="text-white/70 text-xs">Years</div>
              </div>
              <div className="absolute bottom-6 left-6 bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="text-accent text-2xl font-bold">40+</div>
                <div className="text-white/70 text-xs">Countries</div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div
                className="text-4xl md:text-5xl font-bold text-primary mb-2"
                style={{ fontFamily: 'var(--font-brand)' }}
              >
                {isVisible ? (
                  <CountUp end={stat.value} duration={2000} />
                ) : (
                  `0${stat.suffix}`
                )}
              </div>
              <div className="text-text-secondary">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Values Section */}
        <div className="text-center mb-12">
          <span className="text-accent font-semibold text-sm tracking-wider uppercase mb-4 block">
            Our Values
          </span>
          <h3
            className="text-3xl md:text-4xl font-bold text-primary mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Principles That Drive Us
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className={`p-8 rounded-2xl bg-bg-light transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="w-14 h-14 bg-accent rounded-xl flex items-center justify-center mb-6">
                <value.icon className="w-7 h-7 text-white" />
              </div>
              <h4
                className="text-xl font-bold text-primary mb-3"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {value.title}
              </h4>
              <p className="text-text-secondary leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Simple count-up animation component
const CountUp = ({ end, duration }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime = null;
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [end, duration]);

  return <>{count}</>;
};

export default About;
