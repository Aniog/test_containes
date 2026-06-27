import { strings } from '../../data/generators-data';

const s = strings.en;

const footerColumns = [
  {
    heading: 'Product',
    links: [
      { label: 'Templates', href: '/templates' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'AI Site Builder', href: '/s/ai_site_builder' },
      { label: 'Generators', href: '/generators' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Blog', href: '/blog' },
    ],
  },
  {
    heading: 'Support',
    links: [
      { label: 'Help Center', href: '/support' },
    ],
  },
  {
    heading: 'Legal',
    links: [
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Privacy Policy', href: '/privacy' },
    ],
  },
];

export default function GeneratorsFooter() {
  return (
    <footer className="strk-footer" role="contentinfo">
      <div className="strk-container">
        <div className="strk-footer-grid">
          {/* Brand column */}
          <div className="strk-footer-col">
            <a href="/" className="strk-logo" style={{ marginBlockEnd: '12px', display: 'inline-flex' }}>
              strikingly<span>AI</span>
            </a>
            <p style={{ fontSize: '13px', color: 'var(--clr-body)', lineHeight: '1.6', marginBlockStart: '10px' }}>
              Build any kind of website with AI, in seconds.
            </p>
          </div>

          {/* Link columns */}
          {footerColumns.map((col) => (
            <div key={col.heading} className="strk-footer-col">
              <h4>{col.heading}</h4>
              <ul>
                {col.links.map((link) => (
                  <li key={link.href}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="strk-footer-copy">{s.footerCopy}</p>
      </div>
    </footer>
  );
}
