import { strings } from '../data/strings'

export default function TopBar() {
  const t = strings.en

  return (
    <header className="topbar" role="banner">
      <div className="container">
        <a href="/" className="topbar-logo" aria-label={t.logo}>
          <span className="topbar-logo-text">{t.logo}</span>
        </a>
      </div>
    </header>
  )
}
