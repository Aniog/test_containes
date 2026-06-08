const TopBar = () => {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-divider">
      <div className="max-w-[1200px] mx-auto px-5 h-[50px] flex items-center">
        <a href="/" className="flex items-center gap-2" aria-label="Strikingly home">
          <svg width="24" height="24" viewBox="0 0 32 32" fill="none" aria-hidden="true">
            <path d="M16 2L4 8v16l12 6 12-6V8L16 2z" fill="#8159BB"/>
            <path d="M16 6l-8 4v12l8 4 8-4V10l-8-4z" fill="#7671FF"/>
            <path d="M16 10l-4 2v8l4 2 4-2v-8l-4-2z" fill="#FFFFFF"/>
          </svg>
          <span className="font-heading text-heading-dark text-sm tracking-wide">
            strikingly <span className="ai-gradient-text">AI</span>
          </span>
        </a>
      </div>
    </header>
  )
}

export default TopBar
