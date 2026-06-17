import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Cog, Settings, HeadphonesIcon, Award, CheckCircle } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const features = [
  {
    icon: Cog,
    title: 'Precision Engineering',
    description: 'CNC-controlled folding ensures accuracy within 0.1mm for every bend, delivering consistent quality across all production runs.',
  },
  {
    icon: Shield,
    title: 'Heavy-Duty Build',
    description: 'Constructed from high-grade steel with reinforced frames, our machines withstand the toughest industrial demands.',
  },
  {
    icon: Settings,
    title: 'Advanced Automation',
    description: 'Programmable back gauges, automatic material support, and touchscreen controls for streamlined operation.',
  },
  {
    icon: HeadphonesIcon,
    title: 'Expert Support',
    description: 'Comprehensive training, 24/7 technical support, and readily available spare parts for minimal downtime.',
  },
  {
    icon: Award,
    title: 'Certified Quality',
    description: 'ISO 9001:2015 certified manufacturing processes with rigorous testing before every shipment.',
  },
  {
    icon: CheckCircle,
    title: 'Custom Solutions',
    description: 'Tailored configurations to match your specific sheet metal bending requirements and production goals.',
  },
];

const products = [
  {
    title: 'Double Folding Machine',
    tagline: 'Dual-function precision',
    description: 'Our flagship double folding machine combines box-pan and straight folding in one unit, ideal for complex architectural sheet metal work.',
    imgId: 'prod-double-folding-a1b2c3',
    titleId: 'prod-df-title',
    descId: 'prod-df-desc',
  },
  {
    title: 'Double Folder',
    tagline: 'High-speed folding',
    description: 'The double folder delivers rapid, synchronized folding operations for mass production of sheet metal components with uniform quality.',
    imgId: 'prod-double-folder-d4e5f6',
    titleId: 'prod-dfolder-title',
    descId: 'prod-dfolder-desc',
  },
  {
    title: 'Sheet Metal Folder',
    tagline: 'Versatile bending',
    description: 'A versatile sheet metal folder designed for precision bending of various thicknesses, perfect for fabrication shops and manufacturing lines.',
    imgId: 'prod-sheet-folder-g7h8i9',
    titleId: 'prod-sfolder-title',
    descId: 'prod-sfolder-desc',
  },
  {
    title: 'Metal Folding Machine',
    tagline: 'Industrial strength',
    description: 'Heavy-duty metal folding machine engineered for large-scale industrial applications, handling thick gauge materials with ease.',
    imgId: 'prod-metal-folding-j0k1l2',
    titleId: 'prod-mf-title',
    descId: 'prod-mf-desc',
  },
];

export default function Home() {
  const heroRef = useRef(null);
  const productsRef = useRef(null);

  useEffect(() => {
    const refs = [heroRef.current, productsRef.current].filter(Boolean);
    const cleanups = refs.map((el) => ImageHelper.loadImages(strkImgConfig, el));
    return () => cleanups.forEach((fn) => fn?.());
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-[90vh] flex items-center overflow-hidden bg-brand-900"
      >
        {/* Background */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-brand-900 via-brand-800/90 to-brand-900/80"
        />
        <div
          data-strk-bg-id="hero-bg-9f8e7d"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
          className="absolute inset-0 opacity-30 bg-cover bg-center"
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 bg-accent-500/20 text-accent-300 rounded-full text-sm font-medium mb-6 border border-accent-500/30">
              Precision Metal Folding Solutions
            </span>
            <h1
              id="hero-title"
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
            >
              Advanced Folding Machines for{' '}
              <span className="text-accent-400">Modern Manufacturing</span>
            </h1>
            <p
              id="hero-subtitle"
              className="text-lg sm:text-xl text-steel-200 leading-relaxed mb-10 max-w-2xl"
            >
              From double folding machines to precision metal folders, ARTITECT delivers 
              industrial-grade equipment that transforms how you work with sheet metal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/products"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-accent-500 hover:bg-accent-600 text-brand-900 font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Explore Products
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-3.5 border-2 border-white/20 text-white hover:bg-white/10 rounded-lg font-medium transition-all duration-200"
              >
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-800 mb-4">
              Why Choose ARTITECT?
            </h2>
            <p className="text-steel-500 text-lg max-w-2xl mx-auto">
              We combine decades of engineering expertise with cutting-edge technology 
              to deliver folding machines that set the industry standard.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group p-8 rounded-2xl bg-white border border-gray-100 hover:border-brand-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-brand-50 flex items-center justify-center mb-5 group-hover:bg-brand-100 transition-colors">
                  <feature.icon className="w-7 h-7 text-brand-500" />
                </div>
                <h3 className="text-xl font-semibold text-brand-700 mb-3">{feature.title}</h3>
                <p className="text-steel-500 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Showcase */}
      <section ref={productsRef} className="py-20 lg:py-28 bg-brand-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-800 mb-4">
              Our Product Range
            </h2>
            <p className="text-steel-500 text-lg max-w-2xl mx-auto">
              From compact workshop folders to industrial double folding machines, 
              we have the right equipment for your operation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {products.map((product) => (
              <div
                key={product.title}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden bg-brand-100">
                  <img
                    data-strk-img-id={product.imgId}
                    data-strk-img={`[${product.descId}] [${product.titleId}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="text-accent-300 text-sm font-medium tracking-wider uppercase">
                      {product.tagline}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 id={product.titleId} className="text-xl font-semibold text-brand-700 mb-2">
                    {product.title}
                  </h3>
                  <p id={product.descId} className="text-steel-500 text-sm leading-relaxed mb-4">
                    {product.description}
                  </p>
                  <Link
                    to="/products"
                    className="inline-flex items-center text-brand-500 hover:text-brand-600 font-medium text-sm transition-colors"
                  >
                    Learn more <ArrowRight className="ml-1.5 w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/products"
              className="inline-flex items-center px-8 py-3.5 bg-brand-500 hover:bg-brand-600 text-white font-medium rounded-lg transition-all duration-200 shadow-sm hover:shadow-md"
            >
              View All Products
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-accent-500 font-semibold text-sm tracking-wider uppercase">
                About Us
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-brand-800 mt-3 mb-6">
                Engineering Excellence Since 1998
              </h2>
              <p className="text-steel-500 leading-relaxed mb-6">
                ARTITECT MACHINERY has been at the forefront of metal folding technology 
                for over two decades. Our journey began with a simple mission: to build 
                folding machines that combine precision, durability, and ease of use.
              </p>
              <p className="text-steel-500 leading-relaxed mb-8">
                Today, our machines are used by leading manufacturers across 40+ countries, 
                from automotive components to architectural cladding. Every machine we ship 
                reflects our commitment to quality and innovation.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center px-6 py-3 border-2 border-brand-500 text-brand-600 hover:bg-brand-500 hover:text-white rounded-lg font-medium transition-all duration-200"
              >
                Our Story <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-brand-100">
                <img
                  data-strk-img-id="about-preview-m3n4o5"
                  data-strk-img="[about-preview-title]"
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt="ARTITECT Machinery factory"
                  className="w-full h-full object-cover"
                />
                <span id="about-preview-title" className="hidden">ARTITECT machinery factory floor with sheet metal folding machines in industrial setting</span>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-accent-500 text-brand-900 p-6 rounded-2xl shadow-xl hidden sm:block">
                <p className="text-3xl font-bold">25+</p>
                <p className="text-sm font-medium">Years of Innovation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Upgrade Your Production?
          </h2>
          <p className="text-steel-300 text-lg max-w-2xl mx-auto mb-10">
            Get in touch with our team for a personalized consultation and discover 
            how ARTITECT machinery can optimize your sheet metal operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-accent-500 hover:bg-accent-600 text-brand-900 font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Contact Us Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <a
              href="tel:+861234567890"
              className="inline-flex items-center justify-center px-8 py-3.5 border-2 border-white/20 text-white hover:bg-white/10 rounded-lg font-medium transition-all duration-200"
            >
              Call +86 123 4567 890
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}