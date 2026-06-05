import strings from '../../data/strings.en.js';

export default function Breadcrumb() {
  return (
    <nav aria-label="Breadcrumb" className="content-container pt-[16px] pb-0">
      <ol className="flex items-center gap-[8px] m-0 p-0 list-none text-[12px] text-body-gray">
        <li>
          <a href="/" className="text-body-gray hover:text-brand-purple transition-colors normal-case font-body font-normal">
            {strings.breadcrumbHome}
          </a>
        </li>
        <li aria-hidden="true" className="text-divider">&gt;</li>
        <li>
          <span className="text-body-gray normal-case font-body font-normal">
            {strings.breadcrumbCurrent}
          </span>
        </li>
      </ol>
    </nav>
  );
}