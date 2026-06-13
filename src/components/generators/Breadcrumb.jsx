import strings from '@/strings.en.js';

export default function Breadcrumb() {
  return (
    <nav aria-label="Breadcrumb" className="section-container py-[10px]">
      <ol className="flex items-center gap-[5px] text-[12px] text-body list-none p-0 m-0">
        <li>
          <a href="/" className="hover:text-heading-dark transition-colors">
            {strings.breadcrumbHome}
          </a>
        </li>
        <li aria-hidden="true" className="select-none">{'>'}</li>
        <li className="text-heading-dark">
          {strings.breadcrumbCurrent}
        </li>
      </ol>
    </nav>
  );
}
