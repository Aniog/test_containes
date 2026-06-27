export default function Breadcrumb({ t }) {
  return (
    <nav aria-label="Breadcrumb" className="max-w-[1200px] mx-auto px-5 py-3">
      <ol className="flex items-center gap-2 list-none m-0 p-0 text-[13px] text-body-text">
        <li>
          <a href="/" className="hover:text-brand-purple transition-colors">{t.home}</a>
        </li>
        <li aria-hidden="true" className="text-body-text">&gt;</li>
        <li aria-current="page" className="font-semibold text-heading-section">{t.current}</li>
      </ol>
    </nav>
  );
}
