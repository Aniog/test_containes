const TopBar = () => {
  return (
    <header className="bg-white border-b border-divider">
      <div className="max-w-[1200px] mx-auto px-5 h-[50px] flex items-center">
        <a href="/" className="font-heading font-bold text-xl text-brand-purple tracking-wide no-underline">
          striki<span className="text-hero-heading">ngly</span> AI
        </a>
      </div>
    </header>
  );
};

export default TopBar;
