import { strings } from '@/data/generators';

const t = strings.en;

export default function TopBar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-[#E2E4E7]">
      <div className="mx-auto max-w-[1200px] px-5 h-[56px] flex items-center">
        <a
          href="/"
          className="font-heading text-[18px] font-bold uppercase tracking-wide text-[#2E2E2F] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8159BB] focus-visible:ring-offset-2 rounded"
        >
          {t.topBar.logo}
        </a>
      </div>
    </header>
  );
}
