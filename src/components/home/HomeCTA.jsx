import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const HomeCTA = () => {
  return (
    <section className="py-20 md:py-28 bg-cosmos-surface border-t border-cosmos-border">
      <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
        <div className="relative">
          {/* Glow */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-96 h-96 rounded-full bg-cosmos-teal/5 blur-3xl" />
          </div>

          <div className="relative z-10">
            <span className="text-cosmos-teal text-xs font-medium uppercase tracking-widest">Ready to Explore?</span>
            <h2 className="text-3xl md:text-5xl font-black text-cosmos-text mt-4 mb-6 leading-tight">
              The Invisible World is{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cosmos-teal to-cosmos-cyan">
                Waiting for You
              </span>
            </h2>
            <p className="text-cosmos-muted text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
              Thousands of species. Billions of years of evolution. One website to explore them all. Start your journey into the MicroCosmos today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/explore"
                className="flex items-center gap-2 bg-cosmos-teal text-cosmos-bg font-semibold px-8 py-4 rounded-full hover:bg-cosmos-cyan transition-all duration-200 text-base"
              >
                Explore the Gallery
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/about"
                className="text-cosmos-muted text-base font-medium hover:text-cosmos-text transition-colors"
              >
                Learn about us →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeCTA;
