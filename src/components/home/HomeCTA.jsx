import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const HomeCTA = () => {
  return (
    <section className="py-20 md:py-28 max-w-7xl mx-auto px-4 md:px-8">
      <div className="relative bg-microsurface border border-microborder rounded-3xl overflow-hidden p-10 md:p-16 text-center">
        {/* Glow effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-microteal/15 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-64 h-32 bg-micropurple/15 blur-3xl rounded-full" />

        <div className="relative z-10">
          <p className="text-microteal text-sm font-semibold uppercase tracking-widest mb-4">
            Ready to explore?
          </p>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-microtext mb-5 max-w-2xl mx-auto leading-tight">
            The Microscopic World Awaits You
          </h2>
          <p className="text-micromuted text-base md:text-lg max-w-xl mx-auto mb-8 leading-relaxed">
            Thousands of stunning images, detailed scientific descriptions, and a community
            of curious minds — all in one place.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/explore"
              className="inline-flex items-center justify-center gap-2 bg-microteal text-microbg font-semibold px-8 py-4 rounded-full hover:bg-microglow transition-colors"
            >
              Start Exploring <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center justify-center gap-2 border border-microborder text-micromuted px-8 py-4 rounded-full hover:border-microteal/50 hover:text-microtext transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeCTA;
