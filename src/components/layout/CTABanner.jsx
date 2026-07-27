import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function CTABanner({ title, subtitle, buttonText = "Get a Free Sourcing Quote", buttonLink = "/contact" }) {
  return (
    <section className="bg-primary py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
          {title}
        </h2>
        <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
          {subtitle}
        </p>
        <Link
          to={buttonLink}
          className="inline-flex items-center gap-2 bg-accent text-white px-8 py-4 rounded-lg text-base font-semibold hover:bg-accent/90 transition-colors shadow-lg"
        >
          {buttonText}
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  );
}
