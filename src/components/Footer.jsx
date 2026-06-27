import { strings } from '../data/strings'

export default function Footer() {
  const t = strings.en
  const year = new Date().getFullYear()

  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <a href="/" className="footer-logo" aria-label={t.logo}>
              <span className="footer-logo-text">{t.logo}</span>
            </a>
          </div>
          <div className="footer-col">
            <h4 className="footer-col-title">{t.footerProduct}</h4>
            <ul className="footer-links">
              <li><a href="/pricing">{t.footerPricing}</a></li>
              <li><a href="/templates">{t.footerTemplates}</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4 className="footer-col-title">{t.footerResources}</h4>
            <ul className="footer-links">
              <li><a href="/blog">{t.footerBlog}</a></li>
              <li><a href="/support">{t.footerSupport}</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4 className="footer-col-title">{t.footerLegal}</h4>
            <ul className="footer-links">
              <li><a href="/terms">{t.footerTerms}</a></li>
              <li><a href="/privacy">{t.footerPrivacy}</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4 className="footer-col-title">{t.footerCompany}</h4>
            <ul className="footer-links">
              <li><a href="/about">{t.footerAbout}</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="footer-copyright">{t.footerCopyright(year)}</p>
        </div>
      </div>
    </footer>
  )
}
