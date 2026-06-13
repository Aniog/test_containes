import React from 'react';
import { Link } from 'react-router-dom';

export default function CTASection() {
  return (
    <section className="bg-navy py-16 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Ready to Source from China with Confidence?
        </h2>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          Tell us what you need. We will find the right suppliers, verify their capabilities, and manage quality and logistics — so you can focus on growing your business.
        </p>
        <Link
          to="/contact"
          className="inline-block bg-gold text-white font-semibold px-8 py-3.5 rounded-lg hover:bg-gold-dark transition-colors no-underline text-lg"
        >
          Get a Free Sourcing Quote
        </Link>
      </div>
    </section>
  );
}
