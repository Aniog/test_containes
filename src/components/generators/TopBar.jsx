import strings from '../../data/strings.en.js';

export default function TopBar() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-divider">
      <div className="content-container flex items-center h-[56px]">
        <a href="/" className="flex items-center gap-[8px]" aria-label={strings.logoAlt}>
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
            <rect width="32" height="32" rx="6" className="ai-gradient" />
            <text x="16" y="22" textAnchor="middle" fill="white" fontSize="18" fontWeight="700" fontFamily="Josefin Sans, Poppins, sans-serif">S</text>
          </svg>
          <span className="text-[14px] font-heading font-bold text-hero-dark normal-case">
            strikingly <span className="ai-gradient-text">AI</span>
          </span>
        </a>
      </div>
    </header>
  );
}