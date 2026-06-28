import strings from '@/data/strings.en';

export default function Footer() {
  const s = strings.footer;
  const year = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-[#E2E4E7] py-[40px]" style={{ background: '#F4F6F8' }}>
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-[30px] mb-[30px]">
          {/* Logo column */}
          <div className="col-span-2 md:col-span-1">
            <a href="/" className="flex items-center gap-1 no-underline mb-[10px]" aria-label="Strikingly home">
              <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none">
                <rect width="24" height="24" rx="4" fill="#8159BB" />
                <path d="M7 8h10M7 12h10M7 16h6" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <span
                className="text-[14px] font-bold"
                style={{ fontFamily: 'var(--font-heading)', color: '#2E2E2F', textTransform: 'lowercase' }}
              >
                strikingly
              </span>
            </a>
          </div>
          {/* Link columns */}
          {s.columns.map((col, i) => (
            <div key={i}>
              <h4
                className="text-[12px] mb-[10px]"
                style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, textTransform: 'uppercase', color: '#4B5056' }}
              >
                {col.title}
              </h4>
              <ul className="list-none p-0 m-0 flex flex-col gap-[5px]">
                {col.links.map((link, j) => (
                  <li key={j}>
                    <a
                      href={link.href}
                      className="text-[13px] no-underline hover:underline"
                      style={{ color: '#636972' }}
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-[#E2E4E7] pt-[15px]">
          <p className="text-[12px]" style={{ color: '#636972' }}>
            {s.copyright.replace('{year}', year)}
          </p>
        </div>
      </div>
    </footer>
  );
}
