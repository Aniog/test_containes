export default function TopBar() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-divider">
      <div className="max-w-[1200px] mx-auto px-[20px] h-[60px] flex items-center">
        <a href="/" className="flex items-center gap-[5px]" aria-label="Strikingly home">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
            <rect width="28" height="28" rx="6" fill="#8159BB"/>
            <path d="M8 20L14 8l2 5h4l-6 12-2-5H8z" fill="white"/>
          </svg>
          <span className="font-heading text-[16px] text-heading-dark tracking-wide">
            strikingly <span className="ai-gradient-text">AI</span>
          </span>
        </a>
      </div>
    </header>
  )
}
