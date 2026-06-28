import { t } from '@/data/strings';

const Breadcrumb = () => (
  <nav aria-label="Breadcrumb" className="max-w-[1200px] mx-auto px-5 py-3">
    <ol className="flex items-center gap-2 text-[13px] text-[#636972]">
      <li>
        <a href="/" className="hover:text-[#8159BB] transition-colors">{t('breadcrumbHome')}</a>
      </li>
      <li aria-hidden="true">{'>'}</li>
      <li aria-current="page" className="text-[#4B5056]">{t('breadcrumbCurrent')}</li>
    </ol>
  </nav>
);

export default Breadcrumb;
