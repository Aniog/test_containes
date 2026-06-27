export default function TopBar() {
  return (
    <header className="w-full bg-white border-b border-[color:var(--color-divider)]">
      <div className="max-w-[1200px] mx-auto px-5 h-[60px] flex items-center">
        {/* Simple strikingy AI logo placeholder */}
        <a href="/" aria-label="Strikingly AI" className="flex items-center gap-1 font-[family-name:var(--font-heading)] font-bold text-xl tracking-tight text-[#2E2E2F]">
          <span>strikingly</span>
          <span className="ai-gradient-text">AI</span>
        </a>
      </div>
    </header>
  )
}
