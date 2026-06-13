import strings from '../strings.en.js';

export default function TopBar() {
  return (
    <header className="bg-white border-b border-subtle-divider">
      <div className="max-w-content mx-auto px-5 h-[60px] flex items-center">
        <a href="/" className="flex items-center gap-2 no-underline text-inherit">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
            <rect width="28" height="28" rx="6" fill="url(#logo-grad)" />
            <defs>
              <linearGradient id="logo-grad" x1="0" y1="0" x2="28" y2="28">
                <stop stopColor="#7671FF" />
                <stop offset="1" stopColor="#CB0C9F" />
              </linearGradient>
            </defs>
          </svg>
          <span className="font-heading font-bold text-[14px] uppercase text-heading-dark tracking-wide">
            {strings.topBarLogo}
          </span>
        </a>
      </div>
    </header>
  );
}