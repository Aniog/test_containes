import strings from '@/data/strings.en';

export default function Breadcrumb() {
  const s = strings.breadcrumb;
  return (
    <nav aria-label="Breadcrumb" className="w-full bg-white">
      <div className="max-w-[1200px] mx-auto px-5 py-[10px]">
        <ol className="flex items-center gap-2 list-none p-0 m-0 text-[13px]" style={{ color: '#636972' }}>
          <li>
            <a href="/" className="hover:underline" style={{ color: '#8159BB' }}>{s.home}</a>
          </li>
          <li aria-hidden="true" style={{ color: '#C6C9CD' }}>&gt;</li>
          <li>
            <span aria-current="page">{s.current}</span>
          </li>
        </ol>
      </div>
    </nav>
  );
}
