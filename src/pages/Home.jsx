import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Shield, Zap, Tool } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Home = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const features = [
    {
      title: 'Precision Folding',
      description: 'Achieve perfect angles every time with our advanced control systems.',
      icon: <Zap className="h-10 w-10 text-blue-600" />,
    },
    {
      title: 'Durable Construction',
      description: 'Built with heavy-duty materials to withstand demanding industrial environments.',
      icon: <Shield className="h-10 w-10 text-blue-600" />,
    },
    {
      title: 'Easy Integration',
      description: 'User-friendly interfaces and automated processes for seamless workflow.',
      icon: <CheckCircle2 className="h-10 w-10 text-blue-600" />,
    },
  ];

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          data-strk-bg-id="hero-bg-1"
          data-strk-bg="[hero-title] metal folding machine industrial factory"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        >
          <div className="absolute inset-0 bg-blue-900/60 mix-blend-multiply" />
        </div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-2xl">
            <h1 id="hero-title" className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              Precision Crafted <br /> Folding Solutions
            </h1>
            <p className="text-xl text-gray-100 mb-8 max-w-lg">
              Elevate your production with ARTITECT MACHINERY. High-performance double folding machines designed for accuracy and longevity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold">
                <Link to="/products">Explore Products</Link>
              </Button>
              <Button variant="outline" size="lg" className="bg-white/10 text-white border-white hover:bg-white hover:text-blue-900">
                <Link to="/contact">Request Information</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Intro */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 id="section-products-title" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Expertise</h2>
            <p className="text-gray-600 text-lg">
              From double folding machines to specialized sheet metal folders, we provide the tools you need for unparalleled precision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group relative overflow-hidden rounded-xl bg-gray-100 aspect-[4/3]">
              <img 
                data-strk-img-id="folding-machine-img"
                data-strk-img="sheet metal folding machine precision industrial"
                data-strk-img-ratio="4x3"
                data-strk-img-width="600"
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Folding Machine"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white mb-2">Double Folding Machines</h3>
                <Link to="/products" className="text-orange-400 font-medium flex items-center hover:translate-x-1 transition-transform">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-xl bg-gray-100 aspect-[4/3]">
              <img 
                data-strk-img-id="sheet-folder-img"
                data-strk-img="sheet metal folder machine professional"
                data-strk-img-ratio="4x3"
                data-strk-img-width="600"
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Sheet Metal Folder"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white mb-2">Sheet Metal Folders</h3>
                <Link to="/products" className="text-orange-400 font-medium flex items-center hover:translate-x-1 transition-transform">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-xl bg-gray-100 aspect-[4/3]">
              <img 
                data-strk-img-id="metal-folder-img"
                data-strk-img="metal folder machine heavy duty"
                data-strk-img-ratio="4x3"
                data-strk-img-width="600"
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Metal Folder"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white mb-2">Custom Solutions</h3>
                <Link to="/products" className="text-orange-400 font-medium flex items-center hover:translate-x-1 transition-transform">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features/Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {features.map((feature, idx) => (
              <div key={idx} className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="mb-6 rounded-full bg-blue-50 p-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div 
            className="rounded-3xl overflow-hidden relative"
            data-strk-bg-id="cta-bg"
            data-strk-bg="industrial metal working machinery"
            data-strk-bg-ratio="21x9"
            data-strk-bg-width="1600"
          >
            <div className="absolute inset-0 bg-blue-900/90" />
            <div className="relative z-10 p-8 md:p-16 text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Optimize Your Workflow?</h2>
              <p className="text-blue-100 text-lg mb-10">
                Contact our experts today to find the perfect folding machine for your specific metalworking needs.
              </p>
              <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-gray-100 hover:text-blue-700 font-bold px-10">
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
