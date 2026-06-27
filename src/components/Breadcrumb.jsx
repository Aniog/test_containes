const Breadcrumb = ({ t }) => {
  return (
    <nav aria-label="Breadcrumb" className="bg-white">
      <div className="max-w-[1200px] mx-auto px-5 py-[10px]">
        <ol className="flex items-center gap-[5px] list-none m-0 p-0 text-[13px] text-body-text">
          <li>
            <a href="/" className="hover:text-brand-purple transition-colors">
              {t.breadcrumb.home}
            </a>
          </li>
          <li aria-hidden="true" className="text-body-text">&gt;</li>
          <li aria-current="page" className="text-heading-section font-semibold">
            {t.breadcrumb.current}
          </li>
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumb;
