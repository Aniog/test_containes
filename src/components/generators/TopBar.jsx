import strings from '../../data/strings';

const s = strings.en.topBar;

export default function TopBar() {
  return (
    <header
      className="bg-white border-b border-divider sticky top-0 z-50"
      style={{ borderBottomColor: '#E2E4E7' }}
    >
      <div className="content-wrap flex items-center" style={{ height: 56 }}>
        <a
          href="/"
          aria-label="Strikingly home"
          className="flex items-center gap-1 no-underline"
          style={{ textDecoration: 'none' }}
        >
          <span
            className="font-heading"
            style={{ fontSize: 20, color: '#2E2E2F', letterSpacing: '0.02em' }}
          >
            {s.logoText}
          </span>
          <span
            className="gradient-text font-heading"
            style={{ fontSize: 20, letterSpacing: '0.02em' }}
          >
            {s.logoAI}
          </span>
        </a>
      </div>
    </header>
  );
}
