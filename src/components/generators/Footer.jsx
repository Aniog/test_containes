import strings from '../../data/strings.en.js';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-light-bg border-t border-divider section-padding" style={{ padding: '40px 20px' }}>
      <div className="content-container">
        <div className="flex flex-col md:flex-row gap-[40px] mb-[30px]">
          {/* Logo column */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center gap-[8px]" aria-label={strings.logoAlt}>
              <svg width="28" height="28" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                <rect width="32" height="32" rx="6" className="ai-gradient" />
                <text x="16" y="22" textAnchor="middle" fill="white" fontSize="18" fontWeight="700" fontFamily="Josefin Sans, Poppins, sans-serif">S</text>
              </svg>
              <span className="text-[14px] font-heading font-bold text-hero-dark normal-case">
                strikingly <span className="ai-gradient-text">AI</span>
              </span>
            </a>
          </div>

          {/* Link columns */}
          <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-[30px]">
            {Object.entries(strings.footerColumns).map(([key, col]) => (
              <div key={key}>
                <h4 className="text-hero-dark text-[12px] mb-[12px] mt-0 font-heading font-bold uppercase">
                  {col.title}
                </h4>
                <ul className="list-none m-0 p-0">
                  {col.links.map((link, idx) => (
                    <li key={idx} className="mb-[8px] last:mb-0">
                      <a
                        href={link.href}
                        className="text-body-gray text-[13px] hover:text-brand-purple transition-colors font-body font-normal normal-case"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-divider pt-[20px] text-center">
          <p className="text-body-gray text-[12px] m-0 font-body font-normal normal-case">
            {strings.footerCopyright.replace('{year}', year)}
          </p>
        </div>
      </div>
    </footer>
  );
}