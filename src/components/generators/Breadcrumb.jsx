import { strings } from '@/data/generators';

const t = strings.en;

export default function Breadcrumb() {
  return (
    <nav aria-label="Breadcrumb" className="w-full bg-white">
      <div className="mx-auto max-w-[1200px] px-5 py-3">
        <ol className="flex flex-wrap items-center gap-2 text-[13px] text-[#636972]">
          <li>
            <a
              href="/"
              className="hover:text-[#8159BB] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8159BB] focus-visible:ring-offset-2 rounded"
            >
              {t.breadcrumb.homeLabel}
            </a>
          </li>
          <li aria-hidden="true" className="text-[#C6C9CD]">
            &gt;
          </li>
          <li className="text-[#636972]" aria-current="page">
            {t.breadcrumb.currentLabel}
          </li>
        </ol>
      </div>
    </nav>
  );
}
