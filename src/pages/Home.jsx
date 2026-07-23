import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Home = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="space-y-12">
      <section className="text-center">
        <h1 id="hero-title" className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
          Welcome to <span className="text-indigo-600">MyPreviewApp</span>
        </h1>
        <p id="hero-subtitle" className="mt-3 max-w-md mx-auto text-base text-slate-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          This is a professional preview of your future application. High-quality designs, components, and layout.
        </p>
        <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
          <div className="rounded-md shadow">
            <button className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
              Get Started
            </button>
          </div>
        </div>
      </section>

      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 id="section-1-title" className="text-3xl font-bold text-slate-900">Modern Design</h2>
            <p id="section-1-desc" className="mt-4 text-lg text-slate-500">
              We focus on clean aesthetics and user experiences that delight. Every pixel is considered.
            </p>
          </div>
          <div className="overflow-hidden rounded-xl shadow-lg bg-slate-200">
            <img
              data-strk-img-id="home-modern-design-img"
              data-strk-img="[section-1-desc] [section-1-title] [hero-subtitle]"
              data-strk-img-ratio="16x9"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Modern Design Preview"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
