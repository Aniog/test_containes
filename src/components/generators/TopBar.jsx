import { strings } from '../../data/strings'

const t = strings.en

export default function TopBar() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-divider">
      <div className="max-w-content mx-auto px-5 h-[50px] flex items-center">
        <a href="/" className="flex items-center gap-1.5 focus-ring rounded">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <rect width="24" height="24" rx="4" fill="#8159BB"/>
            <path d="M7 8h10M7 12h7M7 16h10" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          <span className="font-heading font-bold text-heading-dark text-base uppercase tracking-wide">
            strikingly <span className="ai-gradient-text">AI</span>
          </span>
        </a>
      </div>
    </header>
  )
}
