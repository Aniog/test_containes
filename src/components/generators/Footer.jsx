import strings from '@/strings/strings.en.js'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="gen-footer">
      <div className="gen-container">
        <div className="gen-footer-grid">
          <div className="gen-footer-brand">
            <a href="/" className="gen-logo">
              <span className="gen-logo-strikingly">strikingly</span>
              <span className="gen-logo-ai"> AI</span>
            </a>
          </div>
          {strings.footer.columns.map((column) => (
            <div key={column.title} className="gen-footer-col">
              <h3 className="gen-footer-title">{column.title}</h3>
              <ul className="gen-footer-links">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="gen-footer-copy">
          {strings.footer.copyright.replace('{year}', String(year))}
        </p>
      </div>
    </footer>
  )
}
