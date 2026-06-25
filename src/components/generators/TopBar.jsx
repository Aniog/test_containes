export default function TopBar({ t }) {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-divider">
      <div className="max-w-[1200px] mx-auto px-5 h-[50px] flex items-center">
        <a href="/" className="font-heading text-[18px] text-heading-dark tracking-wide">
          {t.topBar.logo}
        </a>
      </div>
    </header>
  );
}
