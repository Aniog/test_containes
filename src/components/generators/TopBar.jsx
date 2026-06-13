import strings from '@/strings.en.js';

export default function TopBar() {
  return (
    <header className="bg-white border-b border-divider">
      <div className="section-container flex items-center h-[50px]">
        <a href="/" className="font-heading font-bold text-[18px] text-heading-dark tracking-wide">
          {strings.logo}
        </a>
      </div>
    </header>
  );
}