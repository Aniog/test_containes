import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const About = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="max-w-3xl">
          <h1 className="font-serif text-3xl sm:text-4xl text-stone-900">Our Story</h1>
          <p className="mt-6 text-sm leading-relaxed text-stone-600">
            Velmora was founded with a single idea: fine jewelry should feel within reach. We design demi-fine pieces in warm gold tones, using 18K gold-plated materials and hypoallergenic findings so they’re comfortable enough for daily wear.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-stone-600">
            Every piece is designed in small batches, with attention to proportion, finish, and how it feels next to your skin. From sculptural ear cuffs to delicate floral necklaces, our collections are made to be worn, loved, and passed down.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-stone-600">
            We believe in quiet luxury—jewelry that speaks softly but leaves a lasting impression.
          </p>
          <Link to="/shop" className="mt-8 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-amber-700 hover:text-amber-800">
            Shop the Collection <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
