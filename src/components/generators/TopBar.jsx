import { strings } from '../../data/generators-data';

const s = strings.en;

export default function TopBar() {
  return (
    <header className="strk-topbar" role="banner">
      <div className="strk-container">
        <a href="/" className="strk-logo" aria-label="Strikingly home">
          {s.logoText}<span>{s.logoAI}</span>
        </a>
      </div>
    </header>
  );
}
