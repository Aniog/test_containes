import { useEffect, useRef } from 'react';
import { Target, Eye, Heart, TrendingUp } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const values = [
  {
    icon: Target,
    title: 'Precision First',
    desc: 'Every machine is calibrated to deliver micron-level accuracy, ensuring consistent, repeatable results across thousands of operations.',
  },
  {
    icon: Eye,
    title: 'Engineered Excellence',
    desc: 'We combine decades of mechanical engineering expertise with modern manufacturing techniques to create machines that set industry benchmarks.',
  },
  {
    icon: Heart,
    title: 'Built to Last',
    desc: 'Premium materials, rigorous testing, and quality control ensure each ARTITECT machine delivers reliable performance for decades.',
  },
  {
    icon: TrendingUp,
    title: 'Continuous Innovation',
    desc: 'Our R&D team constantly refines designs, incorporating operator feedback and technological advances into every new generation.',
  },
];

export default function About() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="about" ref={containerRef} className="py-24 bg-brand-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-xl overflow-hidden bg-brand-100">
              <img
                alt="ARTITECT MACHINERY workshop and engineering"
                data-strk-img-id="about-workshop-img-z9y8x7"
                data-strk-img={`[about-subtitle-text] [about-title-text] industrial engineering workshop precision machinery`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative accent */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent-500/10 rounded-xl -z-10" />
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-brand-200/50 rounded-xl -z-10" />
          </div>

          {/* Content side */}
          <div>
            <span className="text-xs font-semibold tracking-widest uppercase text-accent-500 mb-3 block">
              About Us
            </span>
            <h2
              id="about-title-text"
              className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-brand-900 mb-6"
            >
              Engineering the Future of Sheet Metal Fabrication
            </h2>
            <p
              id="about-subtitle-text"
              className="text-brand-500 text-base md:text-lg leading-relaxed mb-8"
            >
              ARTITECT MACHINERY was founded with a singular vision: to create sheet metal folding machines that combine industrial-grade durability with refined engineering precision. For over two decades, we have served workshops and manufacturers across the globe, earning trust through uncompromising quality and exceptional support.
            </p>

            {/* Values grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="p-4 bg-white border border-brand-100 rounded-lg hover:border-accent-200 transition-colors duration-200"
                >
                  <div className="w-9 h-9 rounded-lg bg-accent-50 flex items-center justify-center mb-3">
                    <value.icon className="w-5 h-5 text-accent-500" />
                  </div>
                  <h4 className="font-semibold text-brand-900 text-sm mb-1">{value.title}</h4>
                  <p className="text-brand-400 text-xs leading-relaxed">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
