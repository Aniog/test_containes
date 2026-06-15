import React from 'react';
import { strings } from '../../constants/strings';

const Footer = () => {
  const { footerPlaceholder } = strings.en;
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Solutions",
      links: [
        { name: "AI Builder", href: "/s/ai_site_builder" },
        { name: "Websites", href: "/templates" },
        { name: "Portfolios", href: "/templates" },
        { name: "E-commerce", href: "/templates" },
      ]
    },
    {
      title: "Help & Support",
      links: [
        { name: "Support Center", href: footerPlaceholder.support },
        { name: "Knowledge Base", href: "/support" },
        { name: "Terms of Service", href: footerPlaceholder.terms },
        { name: "Privacy Policy", href: footerPlaceholder.privacy },
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: footerPlaceholder.about },
        { name: "Pricing", href: footerPlaceholder.pricing },
        { name: "Blog", href: footerPlaceholder.blog },
        { name: "Contact", href: "/about" },
      ]
    },
    {
      title: "Social",
      links: [
        { name: "Twitter", href: "https://twitter.com/strikingly" },
        { name: "Facebook", href: "https://facebook.com/strikingly" },
        { name: "LinkedIn", href: "https://linkedin.com/company/strikingly" },
        { name: "Instagram", href: "https://instagram.com/strikingly" },
      ]
    }
  ];

  return (
    <footer className="bg-[#F4F6F8] py-[60px] border-t border-[#E2E4E7]">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-10">
          {footerLinks.map((column, idx) => (
            <div key={idx}>
              <h4 className="text-[13px] font-bold text-[#4B5056] mb-5 uppercase tracking-wider">
                {column.title}
              </h4>
              <ul className="list-none p-0 m-0 space-y-3">
                {column.links.map((link, lIdx) => (
                  <li key={lIdx}>
                    <a href={link.href} className="text-[#636972] hover:text-[#8159BB] transition-colors text-[13px]">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="pt-8 border-t border-[#E2E4E7] flex flex-col md:flex-row justify-between items-center gap-5">
          <div className="flex items-center gap-2">
            <span className="text-[16px] font-bold text-[#4B5056] font-['Josefin_Sans'] tracking-tight">
              strikingly <span className="ai-gradient-text uppercase">AI</span>
            </span>
          </div>
          <p className="text-[#636972] text-[12px] m-0">
            © {currentYear} Strikingly, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
