import React from "react";
import { strings } from "../strings";
import { BoltIcon, PhoneIcon, HeartIcon } from "../icons.jsx";

const ITEMS = [
  { icon: <BoltIcon size={28} />,  title: strings.en.why1Title, body: strings.en.why1Body },
  { icon: <PhoneIcon size={28} />, title: strings.en.why2Title, body: strings.en.why2Body },
  { icon: <HeartIcon size={28} />, title: strings.en.why3Title, body: strings.en.why3Body },
];

export default function WhyStrikingly() {
  return (
    <section className="strk-section" aria-labelledby="why-heading">
      <div className="strk-container">
        <div className="strk-section-heading">
          <h2 id="why-heading">{strings.en.whyEyebrow}</h2>
        </div>
        <div className="strk-grid strk-grid--3">
          {ITEMS.map((item) => (
            <article key={item.title} className="strk-card strk-why-item">
              <span className="strk-why-icon">{item.icon}</span>
              <h3>{item.title}</h3>
              <p className="strk-card-desc">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}