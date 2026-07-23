import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ShieldCheck, Star, Users } from 'lucide-react';

const stats = [
  { icon: ShieldCheck, value: '98%', label: '用户满意度', color: 'text-blue-600' },
  { icon: Star, value: '10年+', label: '专业经验', color: 'text-teal-600' },
  { icon: Users, value: '50万+', label: '受益用户', color: 'text-orange-500' },
];

const HeroSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <section id="hero" ref={containerRef} className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-teal-50 pt-16">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-100 rounded-full opacity-50 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-teal-100 rounded-full opacity-50 blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 rounded-full px-4 py-2 text-sm font-semibold w-fit">
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
              专业口腔健康防护指南
            </div>

            <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
              守护您的
              <span className="text-blue-600"> 牙齿健康</span>
              <br />
              从今天开始
            </h1>

            <p id="hero-subtitle" className="text-lg text-gray-600 leading-relaxed max-w-lg">
              科学的口腔护理知识、专业的牙齿防护建议，帮助您和家人拥有健康洁白的牙齿，远离龋齿、牙周病等口腔疾病。
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#care"
                className="bg-blue-600 text-white rounded-full px-8 py-3 font-semibold text-center hover:bg-blue-700 transition shadow-lg shadow-blue-200"
              >
                开始护理指南
              </a>
              <a
                href="#knowledge"
                className="border-2 border-blue-600 text-blue-600 rounded-full px-8 py-3 font-semibold text-center hover:bg-blue-50 transition"
              >
                了解健康知识
              </a>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 pt-4">
              {stats.map(({ icon: Icon, value, label, color }) => (
                <div key={label} className="flex items-center gap-3">
                  <div className="bg-white rounded-xl p-2 shadow-sm">
                    <Icon className={`w-5 h-5 ${color}`} />
                  </div>
                  <div>
                    <div className={`text-xl font-bold ${color}`}>{value}</div>
                    <div className="text-xs text-gray-500">{label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-200 to-teal-200 rounded-3xl transform rotate-3 opacity-40" />
              <img
                data-strk-img-id="hero-dental-main-a1b2c3"
                data-strk-img="[hero-subtitle] [hero-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="牙齿健康防护"
                className="relative w-full rounded-3xl shadow-2xl object-cover"
              />
              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-lg p-4 flex items-center gap-3">
                <div className="bg-teal-100 rounded-xl p-2">
                  <ShieldCheck className="w-6 h-6 text-teal-600" />
                </div>
                <div>
                  <div className="text-sm font-bold text-gray-900">专业认证</div>
                  <div className="text-xs text-gray-500">口腔健康指南</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
