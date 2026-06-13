import strings from '../strings.en.js';

export default function Breadcrumb() {
  return (
    <nav aria-label="Breadcrumb" className="max-w-content mx-auto px-5 py-[10px]">
      <ol className="flex items-center gap-[5px] list-none m-0 p-0 text-[13px] font-body text-body-gray">
        <li>
          <a href="/" className="text-body-gray hover:text-heading-dark no-underline">
            {strings.breadcrumbHome}
          </a>
        </li>
        <li aria-hidden="true" className="select-none">&gt;</li>
        <li className="text-body-gray">
          {strings.breadcrumbCurrent}
        </li>
      </ol>
    </nav>
  );
}