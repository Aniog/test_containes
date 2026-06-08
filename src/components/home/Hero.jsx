import React from 'react';

const Hero = () => {
  return (
    <section className="py-[60px] md:py-[80px] bg-[var(--bg-white)] relative overflow-hidden">
      {/* Very faint purple-to-pink wash background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#8159bb]/5 via-transparent to-transparent opacity-60"></div>
      
      <div className="container-custom relative z-10 grid grid-cols-1 md:grid-cols-2 gap-[40px] items-center">
        <div className="flex flex-col items-start order-1">
          <h1 className="text-[32px] md:text-[48px] mb-[20px] max-w-[500px]">
            <span className="block text-[var(--text-heading-hero)]">BUILD ANY KIND OF SITE</span>
            <span className="block text-gradient-ai">WITH AI, IN AN INSTANT</span>
          </h1>
          <p className="text-[14px] md:text-[16px] text-[var(--text-body)] mb-[30px] max-w-[480px] leading-relaxed">
            Browse the right generator for what you're building, or jump straight into our AI site builder.
          </p>
          <div className="flex flex-col sm:flex-row gap-[10px] w-full sm:w-auto">
            <a 
              href="/s/ai_site_builder" 
              className="inline-flex items-center justify-center bg-gradient-ai text-white font-heading text-[14px] h-[44px] px-[15px] rounded-[4px] min-w-[200px]"
            >
              START BUILDING - IT'S FREE
            </a>
            <a 
              href="#all-generators" 
              className="inline-flex items-center justify-center bg-transparent border border-[var(--brand-purple)] text-[var(--brand-purple)] font-heading text-[14px] h-[44px] px-[15px] rounded-[4px] min-w-[200px] hover:bg-[var(--brand-purple)]/5 transition-colors"
            >
              BROWSE GENERATORS
            </a>
          </div>
        </div>
        
        <div className="order-2 md:order-2 flex justify-center md:justify-end">
          {/* Soft purple line-art illustration of a website mockup - SVG Placeholder */}
          <svg 
            width="480" 
            height="360" 
            viewBox="0 0 480 360" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="w-full max-w-[480px] h-auto drop-shadow-sm"
            aria-hidden="true"
          >
            <rect width="480" height="360" rx="8" fill="white"/>
            <rect x="0.5" y="0.5" width="479" height="359" rx="7.5" stroke="#C6C9CD"/>
            
            {/* Browser Header */}
            <rect x="0" y="0" width="480" height="40" fill="#F4F6F8"/>
            <circle cx="24" cy="20" r="4" fill="#C6C9CD"/>
            <circle cx="40" cy="20" r="4" fill="#C6C9CD"/>
            <circle cx="56" cy="20" r="4" fill="#C6C9CD"/>
            <rect x="80" y="10" width="320" height="20" rx="10" fill="white" stroke="#E2E4E7"/>
            <line x1="0" y1="40" x2="480" y2="40" stroke="#C6C9CD"/>
            
            {/* Website Content */}
            <rect x="40" y="80" width="160" height="12" rx="4" fill="#8159BB" fill-opacity="0.2"/>
            <rect x="40" y="104" width="240" height="24" rx="4" fill="#8159BB" fill-opacity="0.4"/>
            <rect x="40" y="140" width="200" height="8" rx="4" fill="#C6C9CD" fill-opacity="0.5"/>
            <rect x="40" y="156" width="180" height="8" rx="4" fill="#C6C9CD" fill-opacity="0.5"/>
            
            <rect x="40" y="188" width="80" height="24" rx="4" fill="#8159BB" fill-opacity="0.6"/>
            <rect x="130" y="188" width="80" height="24" rx="4" border="1" stroke="#8159BB" fill="transparent"/>
            
            {/* Mockup cards */}
            <rect x="280" y="80" width="160" height="100" rx="4" fill="#F4F6F8" stroke="#E2E4E7"/>
            <circle cx="360" cy="110" r="16" fill="#8159BB" fill-opacity="0.3"/>
            <rect x="320" y="136" width="80" height="8" rx="4" fill="#C6C9CD"/>
            <rect x="300" y="152" width="120" height="6" rx="3" fill="#E2E4E7"/>
            
            <rect x="280" y="196" width="160" height="100" rx="4" fill="#F4F6F8" stroke="#E2E4E7"/>
            <circle cx="360" cy="226" r="16" fill="#8159BB" fill-opacity="0.3"/>
            <rect x="320" y="252" width="80" height="8" rx="4" fill="#C6C9CD"/>
            <rect x="300" y="268" width="120" height="6" rx="3" fill="#E2E4E7"/>
            
            {/* Bottom abstract shapes */}
            <path d="M0 300C80 300 160 360 240 360C320 360 400 300 480 300L480 360L0 360L0 300Z" fill="#8159BB" fill-opacity="0.1"/>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
