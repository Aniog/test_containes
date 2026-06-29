import { useEffect, useRef, useState } from 'react';
import { Users, Globe, Award, Clock } from 'lucide-react';

const stats = [
  { icon: Clock, value: 25, suffix: '+', label: 'Years Experience' },
  { icon: Users, value: 5000, suffix: '+', label: 'Happy Customers' },
  { icon: Globe, value: 35, suffix: '+', label: 'Countries' },
  { icon: Award, value: 99, suffix: '%', label: 'Customer Satisfaction' },
];

const About = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [animatedStats, setAnimatedStats] = useState(stats.map(() => 0));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      stats.forEach((stat, index) => {
        const duration = 2000;
        const steps = 60;
        const stepValue = stat.value / steps;
        let current = 0;
        const interval = setInterval(() => {
          current += stepValue;
          if (current >= stat.value) {
            setAnimatedStats((prev) => {
              const newStats = [...prev];
              newStats[index] = stat.value;
              return newStats;
            });
            clearInterval(interval);
          } else {
            setAnimatedStats((prev) => {
              const newStats = [...prev];
              newStats[index] = Math.floor(current);
              return newStats;
            });
          }
        }, duration / steps);
      });
    }
  }, [isVisible]);

  return (
    <section id="about" ref={sectionRef} className="py-24 bg-bg-dark relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0 50 L50 0 L100 50 L50 100 Z" fill="white" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className={isVisible ? 'animate-fade-in-up' : 'opacity-0'}>
            <span className="text-accent font-semibold text-sm tracking-widest uppercase">
              About ARTITECT
            </span>
            <h2 className="text-white mt-4 mb-6">
              Engineering Excellence <br className="hidden md:block" /> Since 1999
            </h2>
            <p className="text-white/70 text-lg mb-6 leading-relaxed">
              ARTITECT MACHINERY has been at the forefront of sheet metal folding 
              technology for over two decades. Our commitment to precision engineering 
              and customer success has made us a trusted partner for fabricators worldwide.
            </p>
            <p className="text-white/70 text-lg mb-8 leading-relaxed">
              We specialize in manufacturing high-quality double folding machines, 
              metal folder machines, and sheet metal processing equipment. Every machine 
              is built with meticulous attention to detail and undergoes comprehensive 
              quality testing before delivery.
            </p>

            {/* Key points */}
            <div className="space-y-4">
              {[
                'State-of-the-art manufacturing facility',
                'Research-driven innovation',
                'Global service network',
                'Customization capabilities',
              ].map((point, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <path d="M5 12l5 5L20 7" />
                    </svg>
                  </div>
                  <span className="text-white/90 font-medium">{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div
                  key={index}
                  className={`bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/10 transition-all duration-700 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <IconComponent className="w-10 h-10 text-accent mx-auto mb-4" />
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                    {animatedStats[index]}{stat.suffix}
                  </div>
                  <div className="text-white/60 text-sm font-medium uppercase tracking-wide">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
