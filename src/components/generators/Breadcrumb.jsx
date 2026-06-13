import strings from '../../data/strings';

const Breadcrumb = () => {
  const { breadcrumb } = strings.en;

  return (
    <nav aria-label="Breadcrumb" className="py-3">
      <div className="max-w-[1200px] mx-auto px-5">
        <ol className="flex items-center gap-1.5 text-sm list-none m-0 p-0">
          <li>
            <a
              href={breadcrumb.homeUrl}
              className="text-body hover:text-brand-purple no-underline"
            >
              {breadcrumb.home}
            </a>
          </li>
          <li className="text-body" aria-hidden="true">
            <span className="mx-1">&gt;</span>
          </li>
          <li aria-current="page" className="text-body font-medium">
            {breadcrumb.current}
          </li>
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumb;
