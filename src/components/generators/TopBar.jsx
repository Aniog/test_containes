export default function TopBar() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-divider">
      <div className="max-w-[1200px] mx-auto px-5 h-[60px] flex items-center">
        <a href="/" className="flex items-center gap-2 font-heading font-bold text-heading-dark text-[18px] uppercase tracking-wide">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
            <rect width="28" height="28" rx="6" fill="#8159BB"/>
            <path d="M8 14h12M14 8v12" stroke="#fff" strokeWidth="2.5" strokeLinecap="round"/>
          </svg>
          <span>strikingly <span className="ai-gradient-text">AI</span></span>
        </a>
      </div>
    </header>
  );
}
