import { Link } from 'react-router-dom';

export default function CTASection({
  title = "Ready to Start Sourcing from China?",
  subtitle = "Get a free consultation and quote. Our team will review your requirements within 24 hours.",
  buttonText = "Get a Free Sourcing Quote",
  dark = false,
}) {
  if (dark) {
    return (
      <section className="bg-primary py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{title}</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">{subtitle}</p>
          <Link
            to="/contact"
            className="inline-block bg-accent text-white px-8 py-3.5 rounded-lg text-base font-semibold hover:bg-accent-hover transition-colors"
          >
            {buttonText}
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-surface-alt py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">{title}</h2>
        <p className="text-text-secondary text-lg mb-8 max-w-2xl mx-auto">{subtitle}</p>
        <Link
          to="/contact"
          className="inline-block bg-accent text-white px-8 py-3.5 rounded-lg text-base font-semibold hover:bg-accent-hover transition-colors"
        >
          {buttonText}
        </Link>
      </div>
    </section>
  );
}
