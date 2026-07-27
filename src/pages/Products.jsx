import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, Send } from 'lucide-react';
import { siteData } from '@/data/content';

const Products = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-dark to-primary-blue py-20 md:py-24">
        <div className="container-custom text-center">
          <p className="text-accent-orange font-semibold text-sm uppercase tracking-wider mb-3">Product Categories</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Products We Source</h1>
          <p className="text-white/80 max-w-2xl mx-auto text-lg">
            We source products across diverse categories, connecting you with 
            specialized manufacturers for each product type.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {siteData.products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all group"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    data-strk-img-id={`products-page-${product.id}`}
                    data-strk-img={`[${product.descId}] [${product.titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="500"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-5">
                  <h3 id={product.titleId} className="text-lg font-semibold text-gray-900 mb-2">{product.title}</h3>
                  <p id={product.descId} className="text-gray-600 text-sm leading-relaxed mb-4">{product.description}</p>
                  <Link
                    to="/contact"
                    className="inline-flex items-center text-primary-blue text-sm font-medium hover:text-accent-orange transition-colors"
                  >
                    Request sourcing for this category
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Do Not See Your Product Category?</h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              We source a wide variety of products beyond what is listed here. Our network includes 
              manufacturers across many industries. Contact us with your specific product requirements 
              and we will assess our ability to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-accent-orange text-white font-bold rounded-lg hover:bg-accent-orange-hover transition-colors"
              >
                <Send className="w-5 h-5 mr-2" />
                Contact Us
              </Link>
              <Link
                to="/case-studies"
                className="inline-flex items-center px-8 py-4 bg-primary-blue text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors"
              >
                View Case Studies
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Source from China */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Why Source Products from China?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Manufacturing Expertise',
                desc: 'China has decades of manufacturing experience across virtually every product category, with established supply chains and skilled workforces.',
              },
              {
                title: 'Competitive Pricing',
                desc: 'Economies of scale, efficient supply chains, and competitive labor costs allow Chinese manufacturers to offer attractive pricing.',
              },
              {
                title: 'Flexible Production',
                desc: 'Chinese factories can handle orders from small MOQs to large-scale production runs, with customization options for most products.',
              },
            ].map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
