import React from "react";
import { strings } from "../strings";
import { SpeedIcon, MobileIcon, FreeIcon } from "../icons";

const ICONS = [SpeedIcon, MobileIcon, FreeIcon];

export default function WhyStrikingly() {
  const s = strings.en.why;
  return (
    <section className="section" aria-labelledby="why-h2">
      <div className="container">
        <header className="section-heading">
          <h2 id="why-h2" className="section-heading__h">{s.heading}</h2>
          <p className="section-heading__sub">{s.sub}</p>
        </header>
        <ul className="why-grid" role="list">
          {s.items.map((item, i) => {
            const Icon = ICONS[i] || SpeedIcon;
            return (
              <li className="why-cell" key={item.title}>
                <span className="why-cell__icon" aria-hidden="true">
                  <Icon size={24} />
                </span>
                <h3 className="why-cell__title">{item.title}</h3>
                <p className="why-cell__body">{item.body}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}