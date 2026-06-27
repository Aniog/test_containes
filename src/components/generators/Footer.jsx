export default function Footer({ t }) {
  const columns = [
    {
      title: 'Product',
      links: [
        { text: 'Templates', href: '/templates' },
        { text: 'Pricing', href: '/pricing' },
        { text: 'AI Site Builder', href: '/s/ai_site_builder' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: '/about' },
        { text: 'Blog', href: '/blog' },
        { text: 'Support', href: '/support' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { text: 'Help Center', href: '/support' },
        { text: 'Blog', href: '/blog' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { text: 'Terms of Service', href: '/terms' },
        { text: 'Privacy Policy', href: '/privacy' },
      ],
    },
  ]

  return (
    <footer className="border-t border-divider py-[40px] bg-white">
      <div className="max-w-[1200px] mx-auto px-[20px]">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-[30px] mb-[30px]">
          {/* Logo */}
          <div className="col-span-2 md:col-span-1">
            <a href="/" className="flex items-center gap-[5px] mb-[10px]" aria-label="Strikingly home">
              <svg width="24" height="24" viewBox="0 0 28 28" fill="none" aria-hidden="true">
                <rect width="28" height="28" rx="6" fill="#8159BB"/>
                <path d="M8 20L14 8l2 5h4l-6 12-2-5H8z" fill="white"/>
              </svg>
              <span className="font-heading text-[14px] text-heading-dark">strikingly</span>
            </a>
          </div>
          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <span className="block font-heading text-[12px] text-heading-section mb-[10px]">
                {col.title}
              </span>
              <ul className="list-none m-0 p-0 space-y-[8px]">
                {col.links.map((link) => (
                  <li key={link.text}>
                    <a
                      href={link.href}
                      className="text-body-text text-[13px] hover:text-brand-purple transition-colors"
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-divider pt-[20px]">
          <p className="text-body-text text-[12px]">{t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  )
}
