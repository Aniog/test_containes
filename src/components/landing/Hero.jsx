import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Decorative gradient background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36 text-center">
        <span className="inline-block bg-indigo-50 text-indigo-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
          Simple. Fast. Reliable.
        </span>
        <h1
          id="hero-title"
          className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6"
        >
          Connect with us and<br className="hidden md:block" /> let's build something great
        </h1>
        <p
          id="hero-subtitle"
          className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mb-10"
        >
          We help businesses grow through meaningful connections. Drop us a message and our team will get back to you within 24 hours.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-3.5 rounded-lg transition-colors shadow-sm text-base"
          >
            Send a Message
          </a>
          <a
            href="#features"
            className="border border-gray-300 text-gray-700 hover:bg-gray-50 font-semibold px-8 py-3.5 rounded-lg transition-colors text-base"
          >
            Learn More
          </a>
        </div>

        <div className="mt-16 flex justify-center">
          <a href="#features" className="text-gray-400 hover:text-indigo-500 transition-colors animate-bounce">
            <ArrowDown className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
