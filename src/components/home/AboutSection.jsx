import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { CheckCircle } from 'lucide-react';

const highlights = [
  'ISO 9001 certified manufacturing',
  'CE compliant machinery',
  'Custom tooling design services',
  'Comprehensive operator training',
  'Extended warranty programs',
  'Spare parts global shipping',
];

export default function AboutSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} id="about" className="py-20 md:py-28 bg-bg-light">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
              <img
                alt="ARTITECT MACHINERY manufacturing facility"
                data-strk-img-id="about-facility-9s8d7f"
                data-strk-img="[about-title] [about-desc]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative accent box */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-4 border-accent rounded-lg -z-10 hidden lg:block" />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <span className="text-accent text-sm font-semibold uppercase tracking-[0.15em] mb-3 inline-block">
              About Us
            </span>
            <h2
              id="about-title"
              className="text-3xl md:text-4xl font-extrabold text-brand tracking-tight mb-6"
            >
              Leaders in Metal Folding Technology
            </h2>
            <p
              id="about-desc"
              className="text-text-secondary text-lg leading-relaxed mb-6"
            >
              ARTITECT MACHINERY has been at the forefront of sheet metal fabrication equipment for over two decades. We design and manufacture a comprehensive range of double folding machines, metal folders, and sheet metal folding machines that serve industries from aerospace to architectural metalwork.
            </p>
            <p className="text-text-secondary leading-relaxed mb-8">
              Every machine that leaves our facility undergoes rigorous quality testing to ensure it meets our exacting standards for precision, safety, and longevity. Our commitment to continuous improvement means our customers always benefit from the latest advances in folding technology.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {highlights.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2 text-sm text-text-primary">
                  <CheckCircle className="w-4 h-4 text-accent shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="inline-flex items-center bg-accent text-brand px-8 py-3.5 rounded font-semibold uppercase tracking-[0.05em] hover:bg-accent-hover transition-all hover:scale-[1.02]"
            >
              Work With Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
