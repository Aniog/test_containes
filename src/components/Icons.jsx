import React from 'react';

export const Logo = ({ className }) => (
  <svg className={className} width="120" height="30" viewBox="0 0 120 30" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Strikingly AI Logo">
    <text x="0" y="24" fontFamily="Josefin Sans" fontWeight="700" fontSize="24" fill="#2E2E2F">strikingly</text>
    <text x="100" y="14" fontFamily="Josefin Sans" fontWeight="700" fontSize="12" fill="#8159BB">AI</text>
  </svg>
);

export const WebsiteIcon = ({ className }) => (
  <svg className={className} width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect x="5" y="10" width="30" height="20" rx="2" stroke="currentColor" strokeWidth="2" />
    <path d="M5 15H35" stroke="currentColor" strokeWidth="2" />
    <circle cx="9" cy="12.5" r="1" fill="currentColor" />
    <circle cx="12" cy="12.5" r="1" fill="currentColor" />
    <circle cx="15" cy="12.5" r="1" fill="currentColor" />
  </svg>
);

export const LandingPageIcon = ({ className }) => (
  <svg className={className} width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect x="8" y="5" width="24" height="30" rx="2" stroke="currentColor" strokeWidth="2" />
    <line x1="12" y1="12" x2="28" y2="12" stroke="currentColor" strokeWidth="2" />
    <line x1="12" y1="18" x2="28" y2="18" stroke="currentColor" strokeWidth="2" />
    <rect x="12" y="24" width="16" height="6" rx="1" fill="currentColor" />
  </svg>
);

export const PortfolioIcon = ({ className }) => (
  <svg className={className} width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect x="5" y="8" width="30" height="24" rx="2" stroke="currentColor" strokeWidth="2" />
    <circle cx="20" cy="16" r="4" stroke="currentColor" strokeWidth="2" />
    <path d="M12 28C12 24.6863 14.6863 22 18 22H22C25.3137 22 28 24.6863 28 28H12Z" stroke="currentColor" strokeWidth="2" />
  </svg>
);

export const BlogIcon = ({ className }) => (
  <svg className={className} width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M8 8V32H24L32 24V8H8Z" stroke="currentColor" strokeWidth="2" />
    <line x1="12" y1="14" x2="28" y2="14" stroke="currentColor" strokeWidth="2" />
    <line x1="12" y1="20" x2="28" y2="20" stroke="currentColor" strokeWidth="2" />
    <line x1="12" y1="26" x2="20" y2="26" stroke="currentColor" strokeWidth="2" />
  </svg>
);

export const StoreIcon = ({ className }) => (
  <svg className={className} width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M10 12L7 30H33L30 12H10Z" stroke="currentColor" strokeWidth="2" />
    <path d="M15 15V10C15 7.23858 17.2386 5 20 5C22.7614 5 25 7.23858 25 10V15" stroke="currentColor" strokeWidth="2" />
  </svg>
);

export const LinkIcon = ({ className }) => (
  <svg className={className} width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect x="10" y="5" width="20" height="30" rx="3" stroke="currentColor" strokeWidth="2" />
    <circle cx="20" cy="12" r="3" fill="currentColor" />
    <line x1="14" y1="20" x2="26" y2="20" stroke="currentColor" strokeWidth="2" />
    <line x1="14" y1="25" x2="26" y2="25" stroke="currentColor" strokeWidth="2" />
    <line x1="14" y1="30" x2="26" y2="30" stroke="currentColor" strokeWidth="2" />
  </svg>
);

export const ArrowRightIcon = ({ className }) => (
  <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);

export const SearchIcon = ({ className }) => (
  <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
);

export const ChevronDownIcon = ({ className, isOpen }) => (
  <svg className={`${className} transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
);

export const HeroIllustration = ({ className }) => (
  <svg className={className} width="500" height="400" viewBox="0 0 500 400" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    {/* Background soft purple wash */}
    <circle cx="250" cy="200" r="150" fill="url(#hero-gradient)" fillOpacity="0.2" />
    
    {/* Mockup Line Art */}
    <rect x="50" y="50" width="400" height="300" rx="10" stroke="#8159BB" strokeWidth="2" strokeOpacity="0.3" />
    <rect x="50" y="50" width="400" height="40" rx="10" fill="#F4F6F8" fillOpacity="0.5" />
    <circle cx="75" cy="70" r="5" fill="#C6C9CD" />
    <circle cx="90" cy="70" r="5" fill="#C6C9CD" />
    <circle cx="105" cy="70" r="5" fill="#C6C9CD" />
    
    <rect x="80" y="120" width="120" height="150" rx="3" stroke="#8159BB" strokeWidth="2" strokeOpacity="0.5" />
    <rect x="220" y="120" width="200" height="20" rx="3" fill="#E2E4E7" />
    <rect x="220" y="150" width="200" height="10" rx="2" fill="#F4F6F8" />
    <rect x="220" y="170" width="200" height="10" rx="2" fill="#F4F6F8" />
    <rect x="220" y="190" width="150" height="10" rx="2" fill="#F4F6F8" />
    
    <rect x="220" y="230" width="80" height="30" rx="4" stroke="#8159BB" strokeWidth="2" strokeOpacity="0.2" />
    
    <defs>
      <radialGradient id="hero-gradient" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(250 200) rotate(90) scale(150)">
        <stop stopColor="#8159BB" />
        <stop offset="1" stopColor="#CB0C9F" stopOpacity="0" />
      </radialGradient>
    </defs>
  </svg>
);
