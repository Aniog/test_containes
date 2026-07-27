import React, { useEffect, useRef } from 'react';
import { Target, Clock, TrendingUp, Users } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function TrustPoints() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          
          <div>
            <h2 id="trust-title" className="text-3xl font-bold text-slate-900 sm:text-4xl">Why Partner With Us?</h2>
            <p id="trust-subtitle" className="mt-4 text-lg text-slate-600">
              Sourcing from China can be risky and time-consuming. We provide the transparency, control, and local expertise you need to succeed.
            </p>
            
            <dl className="mt-10 space-y-8">
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                    <Target className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-semibold text-slate-900">Direct Factory Access</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-slate-600">
                  We bypass trading companies and connect you directly with real manufacturers, ensuring you get the best possible pricing.
                </dd>
              </div>

              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                    <Users className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-semibold text-slate-900">Local Ground Team</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-slate-600">
                  Our bilingual team based in Shenzhen handles all communication, cultural nuances, and timezone differences on your behalf.
                </dd>
              </div>

              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                    <Clock className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-semibold text-slate-900">Reduced Time to Market</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-slate-600">
                  We streamline the sampling and approval process, getting your products into production and shipped faster.
                </dd>
              </div>

              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                    <TrendingUp className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-semibold text-slate-900">Scalable Solutions</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-slate-600">
                  Whether you're ordering 500 units or a full 40HQ container, our services adapt to your growing business needs.
                </dd>
              </div>
            </dl>
          </div>

          <div className="mt-16 lg:mt-0 relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-slate-200">
              <img
                alt="Our sourcing team at work"
                className="w-full h-full object-cover"
                data-strk-img-id="trust-img-team-1a2b3c"
                data-strk-img="[trust-subtitle] [trust-title] professional team sourcing office china meeting"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
            </div>
            
            {/* Stats Overlay */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg border border-slate-200 p-6 flex gap-8">
              <div>
                <p className="text-3xl font-extrabold text-blue-600">10+</p>
                <p className="text-sm font-medium text-slate-600 mt-1">Years Exp.</p>
              </div>
              <div className="w-px bg-slate-200"></div>
              <div>
                <p className="text-3xl font-extrabold text-blue-600">500+</p>
                <p className="text-sm font-medium text-slate-600 mt-1">Verified Factories</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
