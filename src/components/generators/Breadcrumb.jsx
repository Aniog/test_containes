import strings from '@/data/strings';

const s = strings.en.breadcrumb;

export default function Breadcrumb() {
  return (
    <nav aria-label="Breadcrumb" className="max-w-content mx-auto px-5 py-3">
      <ol className="flex items-center gap-2 text-[13px] text-text-body list-none m-0 p-0">
        <li>
          <a href={s.homeLink} className="hover:text-brand-purple transition-colors">
            {s.home}
          </a>
        </li>
        <li aria-hidden="true" className="text-card-border select-none">&gt;</li>
        <li aria-current="page" className="text-text-heading font-medium">{s.current}</li>
      </ol>
    </nav>
  );
}
