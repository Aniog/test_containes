import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, CheckCircle, Globe } from 'lucide-react';

function ProductsHero() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative bg-gradient-to-br from-[#0A1628] via-[#0F4C81] to-[#0A3659] text-white py-20 md:py-28">
      <div className="container-custom relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm mb-6">
            <Globe className="w-4 h-4" />
            <span>Wide Range of Product Categories</span>
          </div>
          <h1 id="products-title" className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Products We Source
          </h1>
          <p id="products-subtitle" className="text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl">
            We source a wide range of products from verified Chinese manufacturers across multiple industries.
          </p>
        </div>
      </div>
    </section>
  );
}

function ProductCategory({ title, description, examples, imgId, reverse }) {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className={reverse ? 'lg:order-2' : ''}>
            <h2 className="text-3xl font-bold text-foreground mb-4">{title}</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">{description}</p>
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-3">Common Products</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {examples.map((example, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-success flex-shrink-0" />
                    <span className="text-sm text-foreground">{example}</span>
                  </div>
                ))}
              </div>
            </div>
            <Link to="/contact" className="btn-primary">
              Source {title}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
          <div className={reverse ? 'lg:order-1' : ''}>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img
                alt={title}
                data-strk-img-id={imgId}
                data-strk-img={`[${title}-desc] [${title}-title] [products-subtitle] [products-title]`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full aspect-[4/3] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProductsGrid() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const categories = [
    {
      title: 'Electronics & Components',
      description: 'From consumer electronics to industrial components, we source from China\'s leading manufacturing hubs in Shenzhen, Dongguan, and beyond.',
      examples: ['PCBs and circuit boards', 'Sensors and modules', 'Consumer electronics', 'LED lighting', 'Smart home devices', 'Cables and connectors'],
      imgId: 'cat-electronics-1a2b'
    },
    {
      title: 'Machinery & Equipment',
      description: 'Industrial machines, automation equipment, and tools from certified manufacturers with international quality standards.',
      examples: ['CNC machines', 'Packaging equipment', 'Agricultural machinery', 'Industrial robots', 'Power tools', 'Testing equipment'],
      imgId: 'cat-machinery-2c3d',
      reverse: true
    },
    {
      title: 'Consumer Goods',
      description: 'Home products, personal care items, gifts, and everyday consumer products from reliable manufacturers.',
      examples: ['Kitchenware', 'Home decor', 'Personal care products', 'Toys and games', 'Sports equipment', 'Pet supplies'],
      imgId: 'cat-consumer-3e4f'
    },
    {
      title: 'Building Materials',
      description: 'Construction materials, hardware, fixtures, and building supplies sourced from established manufacturers.',
      examples: ['Steel and metal products', 'Plumbing fixtures', 'Electrical supplies', 'Flooring materials', 'Door and window hardware', 'Construction tools'],
      imgId: 'cat-building-4g5h',
      reverse: true
    },
    {
      title: 'Textiles & Apparel',
      description: 'Fabrics, garments, and textile products from China\'s major textile manufacturing regions.',
      examples: ['Custom clothing', 'Fabric rolls', 'Home textiles', 'Accessories', 'Workwear and uniforms', 'Technical textiles'],
      imgId: 'cat-textiles-5i6j'
    },
    {
      title: 'Auto Parts & Accessories',
      description: 'Automotive components, aftermarket parts, and accessories from certified manufacturers.',
      examples: ['Engine components', 'Brake systems', 'Interior accessories', 'LED auto lights', 'Filters and belts', 'Diagnostic tools'],
      imgId: 'cat-auto-6k7l',
      reverse: true
    }
  ];

  return (
    <>
      {categories.map((category, index) => (
        <ProductCategory key={index} {...category} />
      ))}
    </>
  );
}

function ProductsCTA() {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-custom">
        <div className="card bg-primary text-primary-foreground text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Don\'t See Your Product Category?</h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            We source almost any product from China. Tell us what you need, and we will find the right supplier.
          </p>
          <Link to="/contact" className="btn-primary text-lg px-8 py-4">
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function ProductsPage() {
  return (
    <>
      <ProductsHero />
      <ProductsGrid />
      <ProductsCTA />
    </>
  );
}
