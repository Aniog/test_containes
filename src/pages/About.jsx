import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <h1 className="font-serif text-3xl md:text-4xl">Our Story</h1>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14">
          <div className="overflow-hidden rounded-2xl bg-gray-100 aspect-[4/5] md:aspect-auto md:h-[520px]">
            <img
              src="https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=1200&q=80"
              alt="Velmora craftsmanship"
              className="h-full w-full object-cover"
              onError={(e) => {
                e.currentTarget.src = 'https://images.unsplash.com/photo-1515562141589-67f0d569b6c2?w=1200&q=80';
              }}
            />
          </div>
          <div className="md:pl-4">
            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
              Velmora was founded with a clear intention: to create jewelry that feels luxurious without being loud. We believe in quiet luxury—pieces that are refined, personal, and made to be worn every day.
            </p>
            <p className="mt-4 text-sm md:text-base text-gray-700 leading-relaxed">
              Our designs are inspired by architecture, nature, and the women who wear them. Each piece is crafted in small batches using 18K gold-plated brass and carefully selected materials.
            </p>
            <p className="mt-4 text-sm md:text-base text-gray-700 leading-relaxed">
              We work with responsible suppliers and prioritize finishes that hold up to real life. From our studio to your jewelry box, Velmora is made with care.
            </p>
            <Link to="/shop" className="mt-6 inline-flex items-center rounded-full bg-gold-800 px-6 py-3 text-sm font-medium text-white hover:bg-gold-900 transition-colors">
              Shop the Collection
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
