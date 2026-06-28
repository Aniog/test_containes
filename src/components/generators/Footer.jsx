import { strings } from '@/data/generators';

const t = strings.en;

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#F4F6F8] border-t border-[#E2E4E7]">
      <div className="mx-auto max-w-[1200px] px-5 py-10 md:py-[60px]">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-10">
          <div className="col-span-2 md:col-span-1">
            <a
              href="/"
              className="font-heading text-[18px] font-bold uppercase tracking-wide text-[#2E2E2F] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8159BB] focus-visible:ring-offset-2 rounded"
            >
              strikingly AI
            </a>
          </div>
          {t.footer.columns.map((column, index) => (
            <div key={index}>
              <h4 className="font-heading text-[13px] font-bold uppercase text-[#4B5056] mb-3">
                {column.title}
              </h4>
              <ul className="flex flex-col gap-2">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-[13px] text-[#636972] hover:text-[#8159BB] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8159BB] focus-visible:ring-offset-2 rounded"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 pt-5 border-t border-[#E2E4E7] text-[12px] text-[#636972]">
          {t.footer.copyright.replace('{year}', String(year))}
        </div>
      </div>
    </footer>
  );
}
