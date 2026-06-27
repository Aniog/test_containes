import strings from '@/strings/strings.en.js'

export default function Breadcrumb() {
  return (
    <nav aria-label="Breadcrumb" className="gen-breadcrumb">
      <div className="gen-container">
        <ol className="gen-breadcrumb-list">
          <li className="gen-breadcrumb-item">
            <a href="/" className="gen-breadcrumb-link">{strings.breadcrumb.homeLabel}</a>
          </li>
          <li className="gen-breadcrumb-item" aria-hidden="true">&gt;</li>
          <li className="gen-breadcrumb-item">
            <span className="gen-breadcrumb-current" aria-current="page">{strings.breadcrumb.currentLabel}</span>
          </li>
        </ol>
      </div>
    </nav>
  )
}
