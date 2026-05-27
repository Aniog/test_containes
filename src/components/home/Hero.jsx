import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, CheckCircle } from 'lucide-react';

const highlights = ['100% Natural Ingredients', 'Science-Backed Advice', 'Personalized Meal Plans'];

const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="bg-[#e8f5ee] py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block bg-[#2d7a4f] text-white text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
              Your Health Journey Starts Here
            </span>
            <h1 id="hero-heading" className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
              Eat Smart,<br />
              <span className="text-[#2d7a4f]">Live Healthy</span>
            </h1>
            <p id="hero-subheading" className="text-lg text-gray-600 leading-relaxed mb-8">
              Discover the power of nutritious food. We guide you through balanced eating habits, wholesome recipes, and science-backed tips to fuel your body and mind every day.
            </p>
            <ul className="space-y-3 mb-8">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-3 text-gray-700 font-medium">
                  <CheckCircle className="w-5 h-5 text-[#2d7a4f] flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-4">
              <a
                href="#recipes"
                className="inline-flex items-center gap-2 bg-[#2d7a4f] text-white px-7 py-3 rounded-full font-semibold hover:bg-[#245f3e] transition-colors"
              >
                Explore Recipes <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#nutrition"
                className="inline-flex items-center gap-2 border-2 border-[#2d7a4f] text-[#2d7a4f] px-7 py-3 rounded-full font-semibold hover:bg-white transition-colors"
              >
                Learn Nutrition
              </a>
            </div>
          </div>

          <div className="relative">
            <div
              className="w-full h-96 md:h-[480px] rounded-3xl overflow-hidden shadow-xl bg-gray-100"
              data-strk-bg-id="hero-bg-a3f9c1"
              data-strk-bg="[hero-subheading] [hero-heading]"
              data-strk-bg-ratio="3x4"
              data-strk-bg-width="600"
              style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
            />
            <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-lg p-4 flex items-center gap-3">
              <div className="w-10 h-10 bg-[#e8f5ee] rounded-full flex items-center justify-center text-xl">🥗</div>
              <div>
                <p className="text-xs text-gray-500">Today's Pick</p>
                <p className="text-sm font-semibold text-gray-900">Green Power Bowl</p>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-lg p-4 text-center">
              <p className="text-2xl font-extrabold text-[#2d7a4f]">500+</p>
              <p className="text-xs text-gray-500">Healthy Recipes</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
