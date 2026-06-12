import strings from '../../data/strings';

const s = strings.en.footer;

export default function PageFooter() {
  return (
    <footer
      style={{
        background: '#2E2E2F',
        color: '#C6C9CD',
        paddingBlock: 50,
      }}
    >
      <div className="content-wrap">
        {/* Logo */}
        <div style={{ marginBottom: 40 }}>
          <a
            href="/"
            aria-label="Strikingly home"
            className="flex items-center gap-1"
            style={{ textDecoration: 'none', display: 'inline-flex' }}
          >
            <span
              className="font-heading"
              style={{ fontSize: 18, color: '#ffffff', letterSpacing: '0.02em' }}
            >
              {s.logoText}
            </span>
            <span
              className="gradient-text font-heading"
              style={{ fontSize: 18, letterSpacing: '0.02em' }}
            >
              {s.logoAI}
            </span>
          </a>
        </div>

        {/* Link columns */}
        <div
          className="grid"
          style={{
            gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
            gap: 30,
            marginBottom: 40,
          }}
        >
          {s.columns.map((col) => (
            <div key={col.heading}>
              <span
                className="font-heading"
                style={{ fontSize: 11, color: '#ffffff', display: 'block', marginBottom: 14 }}
              >
                {col.heading}
              </span>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      style={{
                        color: '#C6C9CD',
                        fontSize: 13,
                        textDecoration: 'none',
                        transition: 'color 0.15s',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = '#C6C9CD')}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <hr style={{ border: 'none', borderTop: '1px solid #4B5056', marginBottom: 20 }} />
        <p style={{ color: '#636972', fontSize: 12, margin: 0 }}>{s.copyright}</p>
      </div>
    </footer>
  );
}
