const TopBar = ({ t }) => {
  return (
    <header className="bg-white border-b border-divider sticky top-0 z-50">
      <div className="max-w-[1200px] mx-auto px-5 py-[10px] flex items-center">
        <a href="/" className="font-heading text-[18px] text-heading-dark tracking-wide">
          {t.topBar.logo}
        </a>
      </div>
    </header>
  );
};

export default TopBar;
