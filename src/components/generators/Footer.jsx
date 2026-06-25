import strings from '@/data/strings';

const s = strings.en.footer;

export default function Footer() {
  return (
    <footer className="bg-light-bg border-t border-divider py-10">
      <div className="max-w-content mx-auto px-5">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-8">
          {s.columns.map((col, i) => (
            <div key={i}>
              <h4 className="font-heading font-bold text-[12px] uppercase text-text-heading m-0 mb-3 tracking-wide">
                {col.title}
              </h4>
              <ul className="list-none m-0 p-0 space-y-2">
                {col.links.map((link, j) => (
                  <li key={j}>
                    <a
                      href={link.href}
                      className="text-[13px] text-text-body hover:text-brand-purple transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-divider pt-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="font-heading font-bold text-[14px] text-text-heading uppercase">
            {s.brand}
          </span>
          <span className="text-[12px] text-text-body">{s.copyright}</span>
        </div>
      </div>
    </footer>
  );
}
