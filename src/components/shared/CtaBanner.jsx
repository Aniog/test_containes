import { Link } from 'react-router-dom';

const CtaBanner = ({ title, subtitle, buttonText, buttonLink }) => {
  return (
    <section className="bg-[#1a4f8a] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{title}</h2>
        {subtitle && (
          <p className="text-[#bfdbfe] text-lg mb-8 max-w-2xl mx-auto">{subtitle}</p>
        )}
        <Link
          to={buttonLink || '/contact'}
          className="inline-block bg-[#c0392b] hover:bg-[#a93226] text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors"
        >
          {buttonText || 'Get a Free Sourcing Quote'}
        </Link>
      </div>
    </section>
  );
};

export default CtaBanner;
