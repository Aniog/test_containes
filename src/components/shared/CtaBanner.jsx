import { Link } from 'react-router-dom';

export default function CtaBanner({ title, subtitle, cta = 'Get a Free Sourcing Quote', ctaPath = '/contact' }) {
  return (
    <section className="bg-navy py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          {title || 'Ready to Start Sourcing from China?'}
        </h2>
        <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
          {subtitle || 'Tell us what you need. We handle supplier search, verification, quality control, and shipping — so you can focus on your business.'}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to={ctaPath}
            className="inline-block bg-[#C0392B] hover:bg-[#A93226] text-white font-semibold px-8 py-4 rounded-lg text-base transition-colors duration-200"
          >
            {cta}
          </Link>
          <Link
            to="/how-it-works"
            className="inline-block border-2 border-white text-white hover:bg-white hover:text-navy font-semibold px-8 py-4 rounded-lg text-base transition-colors duration-200"
          >
            See How It Works
          </Link>
        </div>
      </div>
    </section>
  );
}
