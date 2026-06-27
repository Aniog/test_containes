import { strings } from '../../data/generators-data';

const s = strings.en;

export default function ClosingCTA() {
  return (
    <section className="strk-closing">
      <div className="strk-container">
        <h2>{s.closingHeadline}</h2>
        <p className="strk-closing-sub">{s.closingSub}</p>
        <a
          href="/s/ai_site_builder"
          className="btn-gradient btn-gradient--lg"
        >
          {s.closingCTA}
        </a>
      </div>
    </section>
  );
}
