import strings from '@/data/strings.en';

export default function TopBar() {
  const s = strings.topBar;
  return (
    <header className="w-full bg-white border-b border-[#E2E4E7]" style={{ minHeight: 50 }}>
      <div className="max-w-[1200px] mx-auto px-5 flex items-center h-[50px]">
        <a href="/" className="flex items-center gap-1 no-underline" aria-label="Strikingly home">
          <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <rect width="24" height="24" rx="4" fill="#8159BB" />
            <path d="M7 8h10M7 12h10M7 16h6" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <span
            className="text-[16px] font-bold tracking-wide"
            style={{ fontFamily: "var(--font-heading)", color: '#2E2E2F', textTransform: 'lowercase' }}
          >
            {s.logoText}
          </span>
        </a>
      </div>
    </header>
  );
}
