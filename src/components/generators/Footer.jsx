import strings from '../../data/strings';

const Footer = () => {
  const { footer } = strings.en;

  return (
    <footer className="bg-surface border-t border-divider py-10">
      <div className="max-w-[1200px] mx-auto px-5">
        {/* Logo */}
        <div className="mb-8">
          <a href="/" className="font-heading font-bold text-xl text-brand-purple tracking-wide no-underline">
            striki<span className="text-hero-heading">ngly</span> AI
          </a>
        </div>

        {/* Link columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          {footer.columns.map((column, index) => (
            <div key={index}>
              <h4 className="font-heading font-bold uppercase text-xs text-heading tracking-wider mb-4 m-0">
                {column.title}
              </h4>
              <ul className="list-none m-0 p-0 space-y-2">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.url}
                      className="text-sm text-body no-underline hover:text-brand-purple transition-colors"
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div className="border-t border-divider pt-5">
          <p className="text-sm text-body m-0">
            {footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
