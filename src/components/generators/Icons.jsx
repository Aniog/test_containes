import React from 'react';

// Small inline SVG icons used across the page. All decorative icons carry
// aria-hidden="true"; meaning is conveyed by visible text or labels.

export const ArrowRight = ({ className = '', size = 16 }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M3 8h9.5M9 4.5 12.5 8 9 11.5"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const SearchIcon = ({ className = '', size = 18 }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <circle
      cx="9"
      cy="9"
      r="6"
      stroke="currentColor"
      strokeWidth="1.8"
    />
    <path
      d="m17 17-3.5-3.5"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </svg>
);

export const ChevronDown = ({ className = '', size = 16 }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="m4 6 4 4 4-4"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const SparkleIcon = ({ className = '', size = 16 }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M8 1.5 9.2 6l4.3 1.2-4.3 1.2L8 13l-1.2-4.6L2.5 7.2 6.8 6 8 1.5Z"
      fill="currentColor"
    />
  </svg>
);

export const GlobeIcon = ({ className = '', size = 18 }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <circle cx="10" cy="10" r="7.5" stroke="currentColor" strokeWidth="1.6" />
    <path
      d="M2.5 10h15M10 2.5c2.5 2.5 2.5 12.5 0 15M10 2.5c-2.5 2.5-2.5 12.5 0 15"
      stroke="currentColor"
      strokeWidth="1.6"
    />
  </svg>
);

export const StackIcon = ({ className = '', size = 18 }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <rect x="3" y="3" width="14" height="4" rx="1" stroke="currentColor" strokeWidth="1.6" />
    <rect x="3" y="9" width="14" height="4" rx="1" stroke="currentColor" strokeWidth="1.6" />
    <rect x="3" y="15" width="14" height="2" rx="1" stroke="currentColor" strokeWidth="1.6" />
  </svg>
);

export const ImageIcon = ({ className = '', size = 18 }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <rect x="3" y="3" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="1.6" />
    <circle cx="7.5" cy="8" r="1.4" fill="currentColor" />
    <path
      d="m4 15 4-4 3 3 2-2 3 3"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
  </svg>
);

export const PenIcon = ({ className = '', size = 18 }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="m3 17 1-4 9-9 3 3-9 9-4 1Z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
    <path d="m11 5 3 3" stroke="currentColor" strokeWidth="1.6" />
  </svg>
);

export const ShopIcon = ({ className = '', size = 18 }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M3 7h14l-1 10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1L3 7Z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
    <path
      d="M7 7V5a3 3 0 0 1 6 0v2"
      stroke="currentColor"
      strokeWidth="1.6"
    />
  </svg>
);

export const LinkIcon = ({ className = '', size = 18 }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M8 12a3 3 0 0 0 4 0l3-3a3 3 0 0 0-4-4l-1 1"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
    <path
      d="M12 8a3 3 0 0 0-4 0l-3 3a3 3 0 0 0 4 4l1-1"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
  </svg>
);

export const LightningIcon = ({ className = '', size = 22 }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M12 1 4 12h5l-1 9 8-11h-5l1-9Z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
  </svg>
);

export const MobileIcon = ({ className = '', size = 22 }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <rect
      x="6"
      y="2"
      width="10"
      height="18"
      rx="2"
      stroke="currentColor"
      strokeWidth="1.6"
    />
    <path d="M9 17h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

export const FreeIcon = ({ className = '', size = 22 }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <circle cx="11" cy="11" r="9" stroke="currentColor" strokeWidth="1.6" />
    <path
      d="M13.5 8.5C13 7.5 12 7 11 7c-1.5 0-3 1-3 2.5S9.5 12 11 12.5 14 13.5 14 15s-1.5 2.5-3 2.5c-1.2 0-2.3-.6-2.8-1.5M11 5v2m0 9v2"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
  </svg>
);
