import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';

const CTASection = ({ 
  title = "Ready to Simplify Your China Sourcing?",
  subtitle = "Get started with a free consultation. We'll help you find the right suppliers and ensure quality from start to finish.",
  buttonText = "Get a Free Quote",
  buttonLink = "/contact",
  features = []
}) => {
  return (
    <section className="bg-[#1e3a5f] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {title}
          </h2>
          <p className="text-lg text-[#94a3b8] mb-8">
            {subtitle}
          </p>
          
          {features.length > 0 && (
            <div className="flex flex-wrap justify-center gap-4 mb-10">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center text-[#cbd5e1]">
                  <CheckCircle className="w-5 h-5 mr-2 text-accent-400" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          )}
          
          <Link
            to={buttonLink}
            className="inline-flex items-center px-8 py-4 bg-white text-[#1e3a5f] font-semibold rounded-lg hover:bg-[#f1f5f9] transition-all duration-200 hover:shadow-xl active:scale-[0.98]"
          >
            {buttonText}
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
