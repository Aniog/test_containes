import strings from '@/strings/strings.en.js'

export default function TopBar() {
  return (
    <header className="gen-topbar">
      <div className="gen-container gen-topbar-inner">
        <a href="/" className="gen-logo" aria-label="Strikingly AI home">
          <span className="gen-logo-strikingly">strikingly</span>
          <span className="gen-logo-ai"> AI</span>
        </a>
      </div>
    </header>
  )
}
