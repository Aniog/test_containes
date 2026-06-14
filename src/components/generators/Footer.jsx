import React from 'react';

const Footer = ({ t }) => {
  const product = t('footer.productLinks') ?? [];
  const company = t('footer.companyLinks') ?? [];
  const resources = t('footer.resourcesLinks') ?? [];
  const legal = t('footer.legalLinks') ?? [];

  return (
    <footer className="strk-footer" role="contentinfo">
      <div className="strk-container">
        <div className="strk-footer__top">
          <div>
            <div className="strk-footer__logo">strikingly AI</div>
            <p className="strk-footer__tagline">{t('footer.tagline')}</p>
          </div>
          <div>
            <div className="strk-footer__col-title">{t('footer.product')}</div>
            <ul>
              {product.map((link) => (
                <li key={link.href + link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="strk-footer__col-title">{t('footer.company')}</div>
            <ul>
              {company.map((link) => (
                <li key={link.href + link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="strk-footer__col-title">{t('footer.resources')}</div>
            <ul>
              {resources.map((link) => (
                <li key={link.href + link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="strk-footer__col-title">{t('footer.legal')}</div>
            <ul>
              {legal.map((link) => (
                <li key={link.href + link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="strk-footer__bottom">
          <span>{t('footer.copyright')}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
