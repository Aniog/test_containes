import { strings } from '@/data/strings';

const t = strings.en.breadcrumb;

const Breadcrumb = () => {
  return (
    <nav aria-label="Breadcrumb" className="max-w-[1200px] mx-auto px-5 py-3">
      <ol className="flex items-center gap-2 list-none m-0 p-0 text-sm text-body-text">
        <li><a href="/" className="text-body-text hover:text-brand-purple no-underline">{t.home}</a></li>
        <li aria-hidden="true" className="text-body-text">&gt;</li>
        <li aria-current="page" className="text-heading-section">{t.current}</li>
      </ol>
    </nav>
  );
};

export default Breadcrumb;
