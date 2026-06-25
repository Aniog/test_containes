import { strings, footerLinks } from '@/data/strings';

const t = strings.en.footer;

const Footer = () => {
  return (
    <footer className="py-10 bg-light-bg border-t border-divider">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-8">
          <div className="col-span-2 md:col-span-1">
            <span className="font-heading font-bold text-heading-dark text-base">STRIKINGLY</span>
          </div>
          <div>
            <h4 className="font-heading font-bold uppercase text-heading-section text-xs mb-3">PRODUCT</h4>
            <ul className="list-none m-0 p-0 space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.name}><a href={link.href} className="text-body-text text-sm no-underline hover:text-brand-purple">{link.name}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-heading font-bold uppercase text-heading-section text-xs mb-3">COMPANY</h4>
            <ul className="list-none m-0 p-0 space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}><a href={link.href} className="text-body-text text-sm no-underline hover:text-brand-purple">{link.name}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-heading font-bold uppercase text-heading-section text-xs mb-3">RESOURCES</h4>
            <ul className="list-none m-0 p-0 space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}><a href={link.href} className="text-body-text text-sm no-underline hover:text-brand-purple">{link.name}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-heading font-bold uppercase text-heading-section text-xs mb-3">LEGAL</h4>
            <ul className="list-none m-0 p-0 space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}><a href={link.href} className="text-body-text text-sm no-underline hover:text-brand-purple">{link.name}</a></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-divider pt-5">
          <p className="text-body-text text-xs m-0">{t.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
