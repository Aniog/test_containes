import { StrikinglyLogo } from './Icons';
import strings from '@/data/strings';

const s = strings.en;

export default function TopBar() {
  return (
    <header className="bg-white border-b border-divider sticky top-0 z-50">
      <div className="max-w-content mx-auto px-5 h-[56px] flex items-center">
        <a href="/" aria-label="Strikingly home">
          <StrikinglyLogo />
        </a>
      </div>
    </header>
  );
}
