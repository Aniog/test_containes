import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Globe, Factory, TrendingUp } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { companyInfo } from '@/data/products';

const milestones = [
  { year: '1998', event: 'Founded in Stuttgart by mechanical engineer Friedrich Hartmann, starting with a single sheet metal folder design.' },
  { year: '2003', event: 'Launched the first double folding machine series, establishing the brand as an innovator in dual-beam technology.' },
  { year: '2008', event: 'Expanded to 30 countries with the opening of service centers across Europe and Asia.' },
  { year: '2013', event: 'Introduced CNC-controlled folding with touchscreen interfaces, leading the industry in automation.' },
  { year: '2018', event: 'Reached the milestone of 3,000 machines delivered worldwide with the launch of Industry 4.0 connectivity.' },
  { year: '2023', event: 'Unveiled the MEGA-FOLD 6000 series, our largest metal folding machine for architectural and shipbuilding applications.' },
];

const AboutPage = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-charcoal pt-28 pb-16 md:pt-32 md:pb-20">
        <div className="container-custom">
          <div className="flex items-center gap-3 mb-4">
            <div className="gold-accent" />
            <span className="text-amber text-sm font-semibold tracking-[0.2em] uppercase">
              About Us
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Engineering Excellence Since {companyInfo.founded}
          </h1>
          <p className="text-stone-300 text-lg max-w-3xl leading-relaxed">
            {companyInfo.description}
          </p>
        </div>
      </section>

      {/* Stats Row */}
      <section className="bg-charcoal-light py-12">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Factory, value: '25+', label: 'Years in Business' },
              { icon: Users, value: companyInfo.employees, label: 'Team Members' },
              { icon: Globe, value: companyInfo.countries, label: 'Countries Served' },
              { icon: TrendingUp, value: '5,000+', label: 'Machines Installed' },
            ].map(({ icon: Icon, value, label }) => (
              <div key={label} className="text-center">
                <Icon className="w-8 h-8 text-amber mx-auto mb-3" />
                <p className="text-3xl font-bold text-white mb-1">{value}</p>
                <p className="text-stone-400 text-sm">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding bg-warm-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="gold-accent" />
                <span className="text-amber text-sm font-semibold tracking-[0.2em] uppercase">
                  Our Mission
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">
                Setting the Standard in Sheet Metal Folding
              </h2>
              <p className="text-stone-500 leading-relaxed mb-6">
                {companyInfo.mission}
              </p>
              <p className="text-stone-500 leading-relaxed">
                Every double folding machine, sheet metal folder, and metal folding system
                that leaves our Stuttgart facility represents the culmination of decades
                of engineering expertise and a relentless commitment to quality. We do not
                just build machines; we build partnerships with fabricators who share our
                passion for precision.
              </p>
            </div>
            <div>
              <img
                data-strk-img-id="about-factory-img"
                data-strk-img="[about-mission-title] factory manufacturing sheet metal machinery precision engineering"
                data-strk-img-ratio="3x2"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="ARTITECT Manufacturing Facility"
                className="rounded-xl shadow-lg w-full"
              />
              <p id="about-mission-title" className="sr-only">Setting the Standard in Sheet Metal Folding</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-warm-off">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="flex justify-center mb-4">
              <div className="gold-accent" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              Our Core Values
            </h2>
            <p className="text-stone-500 text-lg leading-relaxed">
              The principles that drive every decision we make.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {companyInfo.values.map((value, idx) => (
              <div
                key={value.title}
                className="bg-white rounded-xl border border-stone-200 p-8 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 bg-amber/10 rounded-lg flex items-center justify-center">
                    <span className="text-amber font-bold text-lg">{String(idx + 1).padStart(2, '0')}</span>
                  </div>
                  <h3 className="text-xl font-bold text-charcoal">{value.title}</h3>
                </div>
                <p className="text-stone-500 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-charcoal">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="flex justify-center mb-4">
              <div className="gold-accent" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Journey
            </h2>
            <p className="text-stone-400 text-lg leading-relaxed">
              Over two decades of innovation in sheet metal folding technology.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-stone-700" />

              <div className="space-y-10">
                {milestones.map((milestone) => (
                  <div key={milestone.year} className="relative flex gap-6 md:gap-8">
                    <div className="flex-shrink-0 w-12 md:w-16 h-12 md:h-16 bg-amber/10 rounded-full flex items-center justify-center relative z-10">
                      <span className="text-amber font-bold text-xs md:text-sm">{milestone.year}</span>
                    </div>
                    <div className="pt-2 md:pt-3">
                      <p className="text-stone-300 leading-relaxed">{milestone.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-warm-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
            Join the ARTITECT Family
          </h2>
          <p className="text-stone-500 text-lg mb-8 max-w-lg mx-auto">
            Discover how our sheet metal folding machines can transform your production capabilities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/products" className="btn-primary">
              Explore Machines
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link to="/contact" className="btn-secondary">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
