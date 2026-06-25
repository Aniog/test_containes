import { strings } from '@/data/strings';

const t = strings.en.topBar;

const TopBar = () => {
  return (
    <header className="bg-white border-b border-divider">
      <div className="max-w-[1200px] mx-auto px-5 h-[50px] flex items-center">
        <a href="/" className="font-heading font-bold text-heading-dark text-base tracking-wide no-underline">
          {t.logo}
        </a>
      </div>
    </header>
  );
};

export default TopBar;
